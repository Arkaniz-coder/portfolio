import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CookieConsent from "@/components/CookieConsent";
import { getCookieConsent, resetCookieConsent } from "@/lib/cookie-consent";

const showBanner = () => {
  render(
    <MemoryRouter>
      <CookieConsent />
    </MemoryRouter>,
  );
  act(() => {
    vi.advanceTimersByTime(1300);
  });
};

const listenTo = (type: string) => {
  const received: unknown[] = [];
  const handler = (event: Event) => received.push((event as CustomEvent).detail);
  window.addEventListener(type, handler);
  return { received, stop: () => window.removeEventListener(type, handler) };
};

describe("bandeau de consentement aux cookies", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    localStorage.clear();
    document.cookie = "cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("n'apparaît qu'après un court délai et propose les deux choix", () => {
    render(
      <MemoryRouter>
        <CookieConsent />
      </MemoryRouter>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(1300);
    });
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Refuser" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accepter" })).toBeInTheDocument();
  });

  it("mémorise un refus, prévient le reste du site puis se ferme", () => {
    const changes = listenTo("cookie-consent-change");
    showBanner();

    fireEvent.click(screen.getByRole("button", { name: "Refuser" }));

    expect(getCookieConsent()).toBe("refused");
    expect(changes.received).toEqual(["refused"]);
    expect(document.cookie).toContain("cookie_consent=refused");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.queryByRole("dialog")).toBeNull();
    changes.stop();
  });

  it("mémorise une acceptation et prévient le reste du site", () => {
    const changes = listenTo("cookie-consent-change");
    showBanner();

    fireEvent.click(screen.getByRole("button", { name: "Accepter" }));

    expect(getCookieConsent()).toBe("accepted");
    expect(changes.received).toEqual(["accepted"]);
    changes.stop();
  });

  it("ne s'affiche pas quand un choix existe déjà", () => {
    localStorage.setItem("cookie_consent", "accepted");
    showBanner();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("réaffiche le bandeau via « Gérer les cookies »", () => {
    localStorage.setItem("cookie_consent", "refused");
    showBanner();
    expect(screen.queryByRole("dialog")).toBeNull();

    act(() => {
      resetCookieConsent();
    });

    expect(getCookieConsent()).toBeNull();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
