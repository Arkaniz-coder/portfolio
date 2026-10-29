import { useEffect, useRef } from "react";

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()".split("");

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000 };

    type Node = { x: number; y: number; vy: number; char: string };
    type Beam = { x: number; y: number; len: number; speed: number; opacity: number };

    let nodes: Node[] = [];
    let beams: Beam[] = [];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(90, Math.floor(width / 14));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: Math.random() * 0.35 + 0.08,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
      }));
      beams = Array.from({ length: 18 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 90 + 40,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.35 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Upward light beams
      for (const b of beams) {
        b.y -= b.speed;
        if (b.y + b.len < 0) {
          b.y = height + 60;
          b.x = Math.random() * width;
        }
        const g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.len);
        g.addColorStop(0, "rgba(99,102,241," + b.opacity + ")");
        g.addColorStop(1, "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.len);
        ctx.stroke();
      }

      // Proximity connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.strokeStyle = "rgba(99,102,241," + (0.12 * (1 - d / 110)) + ")";
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ASCII nodes
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const n of nodes) {
        n.y += n.vy;
        if (n.y > height + 16) {
          n.y = -16;
          n.x = Math.random() * width;
        }

        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (dist < 160 || Math.random() > 0.985) {
          n.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Mouse connection line
        if (dist < 160) {
          ctx.strokeStyle = "rgba(99,102,241," + (0.4 * (1 - dist / 160)) + ")";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = dist < 160 ? "rgba(139,92,246,0.85)" : "rgba(148,163,184,0.35)";
        ctx.fillText(n.char, n.x, n.y);
      }

      animationId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = { x: -1000, y: -1000 }; };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleCanvas;
