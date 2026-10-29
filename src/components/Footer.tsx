import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";
import logoArkaniz1x from "@/assets/logo-arkaniz-1x.webp";
import logoArkaniz2x from "@/assets/logo-arkaniz.webp";
import { useRef, useCallback } from "react";
import EasterEggToast from "@/components/EasterEggToast";
import { useEasterEgg } from "@/hooks/use-easter-egg";
import { resetCookieConsent } from "@/lib/cookie-consent";

const Footer = () => {
  const dotEgg = useEasterEgg();
  const dotClickCount = useRef(0);

  const handleDotClick = useCallback(() => {
    dotClickCount.current += 1;
    if (dotClickCount.current >= 5) {
      dotEgg.trigger();
      dotClickCount.current = 0;
    }
  }, [dotEgg]);

  const navigation = [
    { label: "Accueil", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "FAQ", to: "/faq" },
  ];

  const legal = [
    { label: "Mentions légales", to: "/mentions-legales" },
    { label: "CGV", to: "/cgv" },
    { label: "Confidentialité", to: "/confidentialite" },
  ];

  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="py-16 sm:py-28 px-4 gradient-mesh">
        <div className="container max-w-4xl text-center">
          <AnimateOnScroll>
            <p className="label-mono mb-4 sm:mb-6 text-center">Prêt à démarrer ?</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Donnons vie à{" "}
              <span className="text-gradient-animate">votre vision</span>
            </h2>
            <p className="text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-lg">
              Décrivez votre projet en quelques minutes. Je vous réponds sous 24h avec une estimation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] px-6 sm:px-10 py-5 sm:py-6 tracking-[0.15em] uppercase text-xs sm:text-sm font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Démarrer mon projet
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto glass !border-white/10 hover:!border-primary/50 hover:text-primary px-6 sm:px-10 py-5 sm:py-6 tracking-[0.15em] uppercase text-xs sm:text-sm font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:scale-[1.02] transition-all duration-300"
              >
                <Link to="/faq">Questions fréquentes</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 px-4 border-t border-border/50 bg-background overflow-hidden">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 -translate-y-1/2 rounded-full bg-primary/50 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand — full width on mobile */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <img src={logoArkaniz1x} srcSet={`${logoArkaniz1x} 1x, ${logoArkaniz2x} 2x`} alt="Arkaniz" className="h-8 w-auto" width="168" height="32" style={{ filter: "brightness(0) invert(1)" }} />
              </Link>
              <p className="text-sm text-muted-foreground">
                Développeur web freelance. Sites vitrines, e-commerce et applications web sur-mesure.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="label-mono mb-4 text-[10px] sm:text-xs">Navigation</p>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="label-mono mb-4 text-[10px] sm:text-xs">Contact</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/33744882821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground cursor-default">
              © 2026 <span className="hover:text-primary transition-colors duration-300">Arkaniz</span><span onClick={handleDotClick} className="cursor-pointer select-none hover:text-primary transition-colors duration-300">.</span> Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {legal.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={resetCookieConsent}
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Gérer les cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      <EasterEggToast
        show={dotEgg.show}
        emoji="🔥"
        eggNumber="3/5"
        message="Bien joué ! Tu chauffes, encore 2 à trouver..."
        onClose={dotEgg.close}
      />
    </>
  );
};

export default Footer;
