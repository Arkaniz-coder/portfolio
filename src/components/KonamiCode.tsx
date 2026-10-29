import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

const KonamiCode = () => {
  const [index, setIndex] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    angle: number;
    velocity: number;
  }>>([]);

  const createConfetti = useCallback(() => {
    const colors = ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE", "#4F46E5", "#7C3AED", "#8B5CF6", "#60A5FA", "#34D399", "#FBBF24"];
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      angle: Math.random() * 360,
      velocity: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[index];
      const key = e.key.toLowerCase();
      const expectedLower = expected.toLowerCase();

      if (key === expectedLower || e.key === expected) {
        const next = index + 1;
        if (next === KONAMI_SEQUENCE.length) {
          setTriggered(true);
          createConfetti();
          setIndex(0);
          // Auto-hide after 6 seconds
          setTimeout(() => {
            setTriggered(false);
            setParticles([]);
          }, 6000);
        } else {
          setIndex(next);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, createConfetti]);

  return (
    <AnimatePresence>
      {triggered && (
        <>
          {/* Confetti particles */}
          <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: p.x,
                  y: -20,
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  y: window.innerHeight + 100,
                  x: p.x + Math.sin(p.angle) * 200,
                  rotate: p.angle * 3,
                  opacity: [1, 1, 0.8, 0],
                  scale: [1, 1.2, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  ease: "easeOut",
                  delay: Math.random() * 0.5,
                }}
                style={{
                  position: "absolute",
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                  boxShadow: `0 0 6px ${p.color}`,
                }}
              />
            ))}
          </div>

          {/* Message */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="bg-card/95 backdrop-blur-xl border border-primary/50 rounded-2xl px-8 py-6 shadow-2xl shadow-primary/20 text-center"
            >
              <motion.p
                className="text-4xl mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                🎮
              </motion.p>
              <p className="text-lg font-bold text-primary mb-1">
                Easter egg Konami trouvé !
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                5/5 — GG tu as tout trouvé !
              </p>
              <p className="text-xs text-muted-foreground/80">
                Envoie tes 5 screens via WhatsApp pour ta surprise.
              </p>
              <p className="text-xs text-primary/60 mt-2 font-mono">
                ↑↑↓↓←→←→BA
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default KonamiCode;
