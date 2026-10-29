const TickerBand = () => {
  const items = [
    "Design Premium",
    "Performance 98/100",
    "Livraison Rapide",
    "Code Sur-Mesure",
    "SEO Optimisé",
    "Support Inclus",
    "Responsive Design",
    "Sécurité HTTPS",
  ];

  return (
    <div className="relative overflow-hidden bg-primary/5 border-y border-primary/20 py-4">
      <div className="ticker-wrapper">
        <div className="ticker">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="ticker-item text-sm font-medium tracking-wider uppercase mx-8"
            >
              <span className="text-primary">●</span>
              <span className="ml-3">{item}</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-wrapper {
          position: relative;
          width: 100%;
        }

        .ticker {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .ticker-item {
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default TickerBand;
