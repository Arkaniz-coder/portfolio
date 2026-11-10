import { useEffect, useRef } from "react";

const INTERACTIVE =
  "a[href], button:not([disabled]), [role='button'], input, textarea, select, .cursor-pointer, .pill, .glow-card";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on desktop with fine pointer (mouse) and wide screen
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1025px)");
    if (!isDesktop.matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let visible = false;

    // Aucun lissage : le curseur natif est masqué sur le site, donc toute interpolation
    // se voit comme un retard entre le point et la vraie souris.
    const handleMouseMove = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
      }
    };

    const handleOver = (e: MouseEvent) => {
      const interactive = e.target instanceof Element && e.target.closest(INTERACTIVE);
      dot.dataset.hover = interactive ? "true" : "false";
    };

    const handleLeave = () => {
      visible = false;
      dot.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        opacity: 0,
        willChange: "transform",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    />
  );
};

export default CustomCursor;
