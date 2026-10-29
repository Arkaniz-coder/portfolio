// index.html lit cette clé et écoute ces événements pour charger la mesure d'audience :
// toute modification ici doit rester synchronisée avec le script de consentement de index.html.
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
export function saveCookieConsent(choice: "accepted" | "refused") {
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
export function dispatchConsentEvent(choice: "accepted" | "refused") {
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
