import { useEffect, useRef } from "react";

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()".split("");

// ASCII drift particles — global fixed background on all pages
const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -1000, y: -1000 };

    type Node = { x: number; y: number; vy: number; char: string };
    type Beam = { x: number; y: number; len: number; speed: number; opacity: number };
    let nodes: Node[] = [];
    let beams: Beam[] = [];

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      init(w, h);
    };

    const init = (w: number, h: number) => {
      // Fewer nodes on mobile for perf
      const isMobile = w < 640;
      const nodeCount = isMobile ? 40 : 80;
      const beamCount = isMobile ? 8 : 18;

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: Math.random() * 0.3 + 0.07,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
      }));
      beams = Array.from({ length: beamCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: Math.random() * 80 + 35,
        speed: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.25 + 0.1,
      }));
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Cursor spotlight
      if (mouse.x > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
        grad.addColorStop(0, "rgba(99,102,241,0.09)");
        grad.addColorStop(0.4, "rgba(139,92,246,0.04)");
        grad.addColorStop(1, "rgba(99,102,241,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Upward light beams
      for (const b of beams) {
        b.y -= b.speed;
        if (b.y + b.len < 0) { b.y = h + 50; b.x = Math.random() * w; }
        const g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.len);
        g.addColorStop(0, "rgba(99,102,241," + b.opacity + ")");
        g.addColorStop(1, "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.len);
        ctx.stroke();
      }

      // Proximity connections
      ctx.lineWidth = 0.4;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.strokeStyle = "rgba(99,102,241," + (0.1 * (1 - d / 100)) + ")";
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ASCII nodes
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const n of nodes) {
        n.y += n.vy;
        if (n.y > h + 14) { n.y = -14; n.x = Math.random() * w; }

        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (dist < 150 || Math.random() > 0.99) {
          n.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Mouse connection
        if (dist < 150) {
          ctx.strokeStyle = "rgba(139,92,246," + (0.35 * (1 - dist / 150)) + ")";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = dist < 150 ? "rgba(139,92,246,0.75)" : "rgba(148,163,184,0.28)";
        ctx.fillText(n.char, n.x, n.y);
      }

      animId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onMouseLeave = () => { mouse = { x: -1000, y: -1000 }; };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.85 }}
    />
  );
};

export default FloatingParticles;
