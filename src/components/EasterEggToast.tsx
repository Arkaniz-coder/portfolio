import { useEffect, useState } from "react";

interface EasterEggToastProps {
  show: boolean;
  emoji: string;
  eggNumber: string;
  message: string;
  onClose: () => void;
}

const EasterEggToast = ({ show, emoji, eggNumber, message, onClose }: EasterEggToastProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[10000] max-w-sm"
      style={{ animation: "popup-slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
    >
      <div className="glass border border-primary/40 rounded-xl px-5 py-4 shadow-2xl shadow-primary/20 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-primary mb-0.5">
              Easter egg {eggNumber}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {message}
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-primary/50 rounded-full"
          style={{
            width: "100%",
            animation: "easter-egg-progress 5s linear forwards",
          }}
        />
      </div>
    </div>
  );
};

export default EasterEggToast;

export const useEasterEgg = () => {
  const [show, setShow] = useState(false);

  const trigger = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return { show, trigger, close };
};
