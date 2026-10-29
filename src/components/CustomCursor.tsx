import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const visible = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    // Only show on desktop with fine pointer (mouse) and wide screen
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1025px)");
    if (!isDesktop.matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        dot.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      visible.current = false;
      dot.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      visible.current = true;
      dot.style.opacity = "1";
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a[href], button:not([disabled]), [role='button'], input, textarea, select, .cursor-pointer, .pill, .glow-card"
      );
      hovering.current = !!interactive;
    };

    const animate = () => {
      // Lerp for smooth following
      const ease = 0.15;
      current.current.x += (pos.current.x - current.current.x) * ease;
      current.current.y += (pos.current.y - current.current.y) * ease;

      const size = hovering.current ? 48 : 10;
      dot.style.transform = `translate(${current.current.x - size / 2}px, ${current.current.y - size / 2}px)`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderWidth = hovering.current ? "2px" : "0px";

      raf.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        opacity: 0,
        transition: "width 0.2s ease-out, height 0.2s ease-out, border-width 0.2s ease-out",
        willChange: "transform",
        transform: "translate(-100px, -100px)",
      }}
    />
  );
};

export default CustomCursor;
