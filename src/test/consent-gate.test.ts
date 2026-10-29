// @vitest-environment node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const html = readFileSync(fileURLToPath(new URL("../../index.html", import.meta.url)), "utf8");
const gate = html.match(/<script>\s*(\(function \(\) \{[\s\S]*?\}\)\(\);)\s*<\/script>/)?.[1] ?? "";

type Listener = (event: { detail?: string }) => void;

interface Options {
  consent?: string | null;
  cookies?: string[];
  storageThrows?: boolean;
}

// Exécute le script de index.html dans un contexte isolé avec un navigateur simulé.
function runGate({ consent = null, cookies = [], storageThrows = false }: Options = {}) {
  const listeners: Record<string, Listener[]> = {};
  const timers: Array<() => void> = [];
  const injectedScripts: string[] = [];
  const cookieWrites: string[] = [];

  vm.runInNewContext(gate, {
    window: {
      addEventListener: (type: string, listener: Listener) => {
        (listeners[type] ??= []).push(listener);
      },
    },
    document: {
      head: { appendChild: (el: { src: string }) => injectedScripts.push(el.src) },
      createElement: () => ({}),
      get cookie() {
        return cookies.join("; ");
      },
      set cookie(value: string) {
        cookieWrites.push(value);
      },
    },
    localStorage: {
      getItem: (key: string) => {
        if (storageThrows) throw new Error("localStorage indisponible");
        return key === "cookie_consent" ? consent : null;
      },
    },
    location: { hostname: "arkaniz.com" },
    setTimeout: (fn: () => void) => timers.push(fn),
    Date,
  });

  const fire = (type: string, detail?: string) => (listeners[type] ?? []).forEach((l) => l({ detail }));
  const finishPageLoad = () => {
    fire("load");
    timers.splice(0).forEach((fn) => fn());
  };

  return { injectedScripts, cookieWrites, fire, finishPageLoad };
}

const expiredCookieNames = (writes: string[]) =>
  [...new Set(writes.filter((w) => w.includes("expires=Thu, 01 Jan 1970")).map((w) => w.split("=")[0]))].sort();

describe("chargement de Google Tag Manager selon le consentement", () => {
  it("le script de consentement est présent dans index.html", () => {
    expect(gate).not.toBe("");
  });

  it("ne charge rien tant que le visiteur n'a pas choisi", () => {
    const env = runGate({ consent: null });
    env.finishPageLoad();
    expect(env.injectedScripts).toEqual([]);
  });

  it("ne charge rien après un refus", () => {
    const env = runGate({ consent: "refused" });
    env.finishPageLoad();
    expect(env.injectedScripts).toEqual([]);
  });

  it("charge GTM une seule fois après une acceptation enregistrée", () => {
    const env = runGate({ consent: "accepted" });
    env.finishPageLoad();
    expect(env.injectedScripts).toEqual(["https://www.googletagmanager.com/gtm.js?id=GTM-N3WTXSRG"]);
  });

  it("charge GTM dès le clic sur « Accepter », sans doublon", () => {
    const env = runGate({ consent: null });
    env.finishPageLoad();
    env.fire("cookie-consent-change", "accepted");
    env.fire("cookie-consent-change", "accepted");
    expect(env.injectedScripts).toHaveLength(1);
  });

  it("ne charge rien au clic sur « Refuser »", () => {
    const env = runGate({ consent: null });
    env.finishPageLoad();
    env.fire("cookie-consent-change", "refused");
    expect(env.injectedScripts).toEqual([]);
  });

  it("supprime uniquement les cookies analytiques quand le visiteur refuse", () => {
    const env = runGate({
      consent: "accepted",
      cookies: ["_ga=1", "_ga_ABC123=2", "_gid=3", "cookie_consent=accepted", "autre=4"],
    });
    env.finishPageLoad();
    env.fire("cookie-consent-change", "refused");
    expect(expiredCookieNames(env.cookieWrites)).toEqual(["_ga", "_ga_ABC123", "_gid"]);
  });

  it("ne plante pas si le stockage local est indisponible", () => {
    const env = runGate({ consent: "accepted", storageThrows: true });
    expect(() => env.finishPageLoad()).not.toThrow();
    expect(env.injectedScripts).toEqual([]);
  });

  it("n'a qu'un seul point de chargement de GTM et aucune iframe noscript", () => {
    expect(html.match(/googletagmanager\.com\/gtm\.js/g)).toHaveLength(1);
    expect(html).not.toMatch(/ns\.html\?id=GTM/);
  });
});
