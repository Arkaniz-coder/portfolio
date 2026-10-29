type Variant = "dots" | "line" | "wave";

const SectionDivider = ({ variant = "dots" }: { variant?: Variant }) => {
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-3 py-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{
              animation: "divider-dot-pulse 2s ease-in-out infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-md h-px relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-primary/80 to-transparent"
            style={{ animation: "divider-line-sweep 4s ease-in-out infinite" }}
          />
        </div>
      </div>
    );
  }

  // wave
  return (
    <div className="py-4 overflow-hidden opacity-[0.15]">
      <svg
        viewBox="0 0 1200 40"
        className="w-full h-8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20"
          stroke="hsl(239 84% 67%)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
