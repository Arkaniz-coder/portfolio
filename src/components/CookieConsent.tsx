import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "cookie_consent";
const COOKIE_EXPIRY_DAYS = 365;

export type CookieChoice = "accepted" | "refused" | null;

/** Read stored cookie preference */
export function getCookieConsent(): CookieChoice {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (raw === "accepted" || raw === "refused") return raw;
  } catch {
    /* localStorage unavailable */
  }
  return null;
}

/** Persist cookie preference */
function saveCookieConsent(choice: "accepted" | "refused") {
  try {
    localStorage.setItem(COOKIE_KEY, choice);
    // Also set a real cookie so server can read it if needed
    const expires = new Date(
      Date.now() + COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${COOKIE_KEY}=${choice}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
    /* noop */
  }
}

/** Dispatch a custom event so other parts of the app can react */
function dispatchConsentEvent(choice: "accepted" | "refused") {
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: choice })
  );
}

/** Reset cookie preference (used by "Gérer les cookies" link) */
export function resetCookieConsent() {
  try {
    localStorage.removeItem(COOKIE_KEY);
    document.cookie = `${COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  } catch {
    /* noop */
  }
  window.dispatchEvent(new CustomEvent("cookie-consent-reset"));
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      // Small delay so it doesn't appear on first paint
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for reset events (when user clicks "Gérer les cookies")
  useEffect(() => {
    const handleReset = () => {
      setAnimateOut(false);
      setVisible(true);
    };
    window.addEventListener("cookie-consent-reset", handleReset);
    return () =>
      window.removeEventListener("cookie-consent-reset", handleReset);
  }, []);

  const handleChoice = useCallback((choice: "accepted" | "refused") => {
    saveCookieConsent(choice);
    dispatchConsentEvent(choice);
    setAnimateOut(true);
    setTimeout(() => setVisible(false), 400);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 transition-all duration-400 ${
        animateOut
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        animation: animateOut ? undefined : "cookie-slide-up 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      }}
      role="dialog"
      aria-label="Bandeau de consentement aux cookies"
    >
      <div className="container max-w-4xl">
        <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-1">
                Cookies & confidentialité
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Ce site utilise des cookies essentiels au fonctionnement et, avec
                votre accord, des cookies analytiques pour mesurer l'audience.
                Vous pouvez accepter ou refuser les cookies non essentiels.{" "}
                <Link
                  to="/confidentialite"
                  className="text-primary hover:underline"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => handleChoice("refused")}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
              >
                Refuser
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] shadow-[0_4px_25px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_35px_rgba(99,102,241,0.5)] transition-all duration-300"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
