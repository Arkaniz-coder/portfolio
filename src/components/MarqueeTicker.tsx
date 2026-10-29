const MarqueeTicker = () => {
  const words = [
    "REACT", "NEXT.JS", "TAILWIND", "TYPESCRIPT", "PERFORMANCE",
    "DESIGN", "E-COMMERCE", "SEO", "SUR-MESURE", "FULL STACK",
    "RESPONSIVE", "UI/UX", "NETLIFY", "FIGMA", "NODE.JS",
  ];

  const content = words.map((w) => `${w} ✦`).join(" ");

  return (
    <div className="relative py-10 overflow-hidden border-y border-border/50 bg-gradient-to-r from-primary/[0.06] via-[hsl(280_80%_65%/0.04)] to-primary/[0.06] group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="marquee-track">
        <span className="marquee-content">{content}&nbsp;</span>
        <span className="marquee-content" aria-hidden="true">{content}&nbsp;</span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
