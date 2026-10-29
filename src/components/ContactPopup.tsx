import { MessageCircle } from "lucide-react";

const ContactPopup = ({ onClose }: { onClose: () => void }) => (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      style={{ animation: "backdrop-fade-in 0.2s ease forwards" }}
      onClick={onClose}
    />

    {/* Popup */}
    <div
      className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm glass rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      style={{ animation: "popup-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
    >
      <h3 className="text-lg font-bold mb-2">Un projet en tête ?</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Discutons-en ensemble. Écrivez-moi sur WhatsApp, je vous réponds sous 24h.
      </p>

      <div className="space-y-3">
        <a
          href="https://wa.me/33744882821"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <div className="text-sm font-semibold">WhatsApp</div>
            <div className="text-xs text-muted-foreground">Réponse rapide</div>
          </div>
        </a>

      </div>
    </div>
  </>
);

export default ContactPopup;
