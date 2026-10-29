import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { label: "Satisfaction client", value: <AnimatedCounter target={100} suffix="%" /> },
  { label: "Délai de livraison", value: "2-6 sem", isText: true },
  { label: "Réponse garantie", value: "24h", isText: true },
  { label: "À partir de", value: <AnimatedCounter target={690} suffix="€" /> },
];

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 border-y border-border/30 bg-gradient-to-r from-primary/[0.03] via-transparent to-primary/[0.03]">
      <div className="container max-w-5xl">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-animate font-display leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground tracking-[0.15em] uppercase mt-2 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StatsSection;
