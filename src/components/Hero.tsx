import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import EasterEggToast from "@/components/EasterEggToast";
import { useEasterEgg } from "@/hooks/use-easter-egg";

// Hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// Letter animation — CSS-only, no framer-motion
const AnimatedLetters = ({
  text,
  className = "",
  startDelay = 0,
  fast = false,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  fast?: boolean;
}) => {
  if (fast) {
    return (
      <span
        className={`hero-word ${className}`}
        style={{ animationDelay: `${startDelay}s` }}
      >
        {text}
      </span>
    );
  }
  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`hero-letter ${className}`}
          style={{
            animationDelay: `${startDelay + i * 0.025}s`,
            display: char === " " ? "inline" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const scrollEgg = useEasterEgg();
  const scrollClickCount = useRef(0);
  const isMobile = useIsMobile();

  // Reduced delays to improve LCP
  const d = isMobile ? { h1: 0, h2: 0.05, h3: 0.1, sub: 0.15, cta: 0.2, scroll: 0.8 } : { h1: 0.1, h2: 0.2, h3: 0.3, sub: 0.5, cta: 0.6, scroll: 1.5 };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-4 overflow-hidden gradient-mesh">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="sm:hidden container relative z-10 mx-auto">
        <div
          className="flex items-center gap-2 mb-6 hero-animate"
          style={{ animationDelay: "0s", opacity: 0 }}
        >
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[hsl(239_84%_80%)]">Développeur web freelance</span>
        </div>

        <h1 className="text-[2.5rem] font-bold leading-[1] mb-5 tracking-tight heading-glow">
          <span className="block text-foreground">
            <AnimatedLetters text="Créons" startDelay={d.h1} fast={isMobile} />
          </span>
          <span className="block text-foreground mt-1">
            <AnimatedLetters text="votre site" startDelay={d.h2} fast={isMobile} />
          </span>
          <span className="block mt-1">
            <AnimatedLetters text="idéal." startDelay={d.h3} fast={isMobile} className="text-gradient-animate" />
          </span>
        </h1>

        <p
          className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-[280px] hero-animate"
          style={{ animationDelay: `${d.sub}s` }}
        >
          Sites web pensés pour convertir vos visiteurs en clients. Design sur-mesure, code performant.
        </p>

        {/* Mobile CTA — full width, stacked */}
        <div
          className="flex flex-col gap-3 mb-10 hero-animate"
          style={{ animationDelay: `${d.cta}s` }}
        >
          <Button
            asChild
            size="lg"
            className="w-full bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] py-5 text-xs tracking-[0.15em] uppercase font-semibold rounded-xl transition-all duration-300"
          >
            <Link to="/portfolio" className="flex items-center justify-center gap-2">
              Voir mes réalisations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full glass !border-white/10 py-5 text-xs tracking-[0.15em] uppercase font-semibold rounded-xl transition-all duration-300"
          >
            <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Parlons de votre projet
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden sm:block container max-w-6xl relative z-10 text-center mx-auto">
        {/* Main Heading — XXL with aurora glow */}
        <div className="relative">
          <div className="aurora-glow" aria-hidden="true" />
          <h1 className="relative z-10 text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] mb-10 tracking-tight heading-glow">
            <span className="block text-foreground">
              <AnimatedLetters text="CRÉONS" startDelay={d.h1} />
            </span>
            <span className="block text-foreground mt-2">
              <AnimatedLetters text="VOTRE SITE" startDelay={d.h2} />
            </span>
            <span className="block mt-2">
              <AnimatedLetters text="IDÉAL." startDelay={d.h3} className="text-gradient-animate" />
            </span>
          </h1>
        </div>

        {/* Subtitle — fade in */}
        <div
          className="hero-animate"
          style={{ animationDelay: `${d.sub}s`, animationDuration: "0.8s" }}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-3 leading-relaxed">
            Sites web pensés pour convertir vos visiteurs en clients.
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10">
            Développeur web freelance — sites vitrines, landing pages et e-commerce. Design sur-mesure, code performant.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-row flex-wrap gap-5 mb-20 justify-center hero-animate"
          style={{ animationDelay: `${d.cta}s`, animationDuration: "0.6s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] px-10 py-6 text-sm tracking-[0.15em] uppercase font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all duration-300"
          >
            <Link to="/portfolio">Voir mes réalisations →</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass !border-white/10 hover:!border-primary/50 hover:text-primary px-10 py-6 text-sm tracking-[0.15em] uppercase font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:scale-[1.02] transition-all duration-300"
          >
            <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer">Une idée ? Parlons-en →</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator — Easter egg #2 */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        style={{ opacity: 0, animation: `scroll-fade-in 1s ease ${d.scroll}s forwards` }}
        onClick={() => {
          scrollClickCount.current += 1;
          if (scrollClickCount.current === 1) {
            scrollEgg.trigger();
          }
        }}
      >
        <div
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center pt-1.5 pointer-events-none"
          style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </div>
      </div>

      <EasterEggToast
        show={scrollEgg.show}
        emoji="🎯"
        eggNumber="2/5"
        message="T'as l'œil ! Il en reste 3, bonne chance."
        onClose={scrollEgg.close}
      />
    </section>
  );
};

export default Hero;
