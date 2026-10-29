import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const FaqAccordion = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
      >
        <span className="font-medium pr-4 text-sm sm:text-base">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const previewFaqs = [
  {
    q: "Combien coûte un site web ?",
    a: "Mes tarifs commencent à 690€ HT. Le prix final dépend des fonctionnalités, du design et du délai. Utilisez le configurateur de devis pour une estimation rapide.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "En moyenne : 2-3 semaines pour une landing page, 3-4 semaines pour un site vitrine, 5-6 semaines pour un e-commerce. Des options de livraison accélérée sont disponibles.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "50% d'acompte à la signature du devis, 50% avant la mise en ligne. Paiement par virement bancaire. Un échelonnement est possible pour les projets importants.",
  },
  {
    q: "Est-ce que je serai propriétaire du site ?",
    a: "Oui, à 100%. Vous recevez le code source complet, tous les accès (hébergement, domaine, CMS) et une documentation technique. Le site est à vous.",
  },
];

const FAQPreview = () => {
  return (
    <section className="py-24 sm:py-28 px-4 relative overflow-hidden">
      <div className="container max-w-3xl">
        <AnimateOnScroll>
          <p className="label-mono mb-2 text-center">Questions fréquentes</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center heading-glow">
            On vous dit tout
          </h2>
          <p className="text-muted-foreground mb-12 sm:mb-14 text-center max-w-xl mx-auto">
            Les réponses aux questions que vous vous posez sûrement.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="space-y-3">
            {previewFaqs.map((faq) => (
              <FaqAccordion key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="glass !border-white/10 hover:!border-primary/50 hover:text-primary tracking-[0.15em] uppercase text-xs rounded-xl px-8 py-5 transition-all duration-300"
            >
              <Link to="/faq" className="flex items-center gap-2">
                Voir toutes les questions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQPreview;
