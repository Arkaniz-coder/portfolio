import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoArkaniz2x from "@/assets/logo-arkaniz.webp";
import EasterEggToast from "@/components/EasterEggToast";
import { useEasterEgg } from "@/hooks/use-easter-egg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoEgg = useEasterEgg();
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoTripleClick = useCallback(() => {
    logoClickCount.current += 1;
    if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
    logoClickTimer.current = setTimeout(() => { logoClickCount.current = 0; }, 500);
    if (logoClickCount.current >= 3) {
      logoEgg.trigger();
      logoClickCount.current = 0;
    }
  }, [logoEgg]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo — Easter egg #1: triple-click */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          onClick={handleLogoTripleClick}
        >
          <img
            src="/logo-arkaniz-1x.webp"
            srcSet={`/logo-arkaniz-1x.webp 1x, ${logoArkaniz2x} 2x`}
            alt="Arkaniz"
            className="h-8 w-auto"
            width="168"
            height="32"
            fetchPriority="high"
            decoding="sync"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-xs font-medium tracking-[0.15em] uppercase transition-colors group py-2"
            >
              <span
                className={
                  isActive(link.to)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {link.label}
              </span>
              {isActive(link.to) && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-[hsl(280_80%_65%)]"
                  style={{ animation: "nav-indicator-in 0.3s ease forwards", transformOrigin: "left" }}
                />
              )}
              {/* Hover underline for non-active */}
              {!isActive(link.to) && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              )}
            </Link>
          ))}

          <Button
            asChild
            className="bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] text-xs tracking-[0.15em] uppercase rounded-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all duration-300 px-6"
          >
            <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer">Contact</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation — CSS animation instead of framer-motion */}
      {isMenuOpen && (
        <nav
          className="md:hidden border-t border-border/30 glass overflow-hidden"
          style={{ animation: "mobile-menu-open 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards" }}
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm font-medium tracking-[0.15em] uppercase transition-colors py-3 border-l-2 pl-4 ${
                  isActive(link.to)
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full tracking-[0.15em] uppercase bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] rounded-lg py-6"
            >
              <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </Button>
          </div>
        </nav>
      )}
      <EasterEggToast
        show={logoEgg.show}
        emoji="🏆"
        eggNumber="1/5"
        message="Tu es persistant, j'aime ça ! Continue à fouiller..."
        onClose={logoEgg.close}
      />
    </header>
  );
};

export default Header;
