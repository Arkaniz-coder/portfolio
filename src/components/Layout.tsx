import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import GrainOverlay from "./GrainOverlay";
import { lazy, Suspense, useEffect, useState, useRef } from "react";

// Lazy-load non-critical components to reduce initial JS bundle
const Footer = lazy(() => import("./Footer"));
const ScrollProgress = lazy(() => import("./ScrollProgress"));
const FloatingParticles = lazy(() => import("./FloatingParticles"));
const CustomCursor = lazy(() => import("./CustomCursor"));
const KonamiCode = lazy(() => import("./KonamiCode"));
const ContactPopup = lazy(() => import("./ContactPopup"));
const CookieConsent = lazy(() => import("./CookieConsent"));

const Layout = () => {
  const location = useLocation();
  const [contactOpen, setContactOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // Page enter animation on route change
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    // Reset animation
    el.style.animation = "none";
    // Force reflow
    el.offsetHeight;
    el.style.animation = "page-enter 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
  }, [location.pathname]);

  // Easter egg #4: console message
  useEffect(() => {
    console.log(
      "%c🔍 Easter egg 4/5 trouvé !",
      "color: #6366F1; font-size: 18px; font-weight: bold;"
    );
    console.log(
      "%cTu fouilles dans la console ? Bien joué. Plus qu'un seul à trouver... N'oublie pas le screenshot !",
      "color: #6366F1; font-size: 14px;"
    );
    console.log(
      "%c→ wa.me/33744882821",
      "color: #6366F1; font-size: 12px;"
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Suspense fallback={null}>
        <CustomCursor />
        <ScrollProgress />
        <FloatingParticles />
        <KonamiCode />
      </Suspense>
      <Header />
      <main
        ref={mainRef}
        key={location.pathname}
        style={{ animation: "page-enter 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards" }}
      >
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating contact button — CSS animation instead of framer-motion */}
      <div
        className="fixed bottom-6 right-6 z-50"
        style={{ animation: "contact-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both" }}
      >
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="flex items-center gap-2 bg-[hsl(239_84%_50%)] text-white px-5 py-3 rounded-full shadow-[0_4px_25px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_35px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300 text-sm font-semibold tracking-wider uppercase"
          aria-label="Contact"
        >
          {contactOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          )}
          <span className="hidden sm:inline">Contact</span>
        </button>
      </div>

      {/* Contact popup — CSS animations */}
      {contactOpen && (
        <Suspense fallback={null}>
          <ContactPopup onClose={() => setContactOpen(false)} />
        </Suspense>
      )}

      {/* Cookie consent banner */}
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default Layout;
