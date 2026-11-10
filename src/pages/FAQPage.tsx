import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// FAQ Accordion Item
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
      >
        <span className="font-medium pr-4 text-sm sm:text-base">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
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

const FaqPage = () => {
  const faqItems = [
    {
      q: "Combien coûte un site web ?",
      a: "Le prix dépend des fonctionnalités, du design et du délai. Écrivez-moi sur WhatsApp pour recevoir un devis gratuit et personnalisé.",
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "Le délai dépend de la complexité du projet : nombre de pages, fonctionnalités, contenus à fournir et rapidité des retours. Je préfère vous proposer un calendrier réaliste, défini ensemble dans le devis, plutôt qu'une promesse que je ne pourrais pas tenir.",
    },
    {
      q: "Comment se passe le paiement ?",
      a: "50% d'acompte à la signature du devis, 50% avant la mise en ligne. Paiement par virement bancaire. Un échelonnement est possible pour les projets importants.",
    },
    {
      q: "Que se passe-t-il si le résultat ne me plaît pas ?",
      a: "Chaque projet inclut des allers-retours de révisions. Je m'assure que le design correspond à votre vision avant de passer au développement. Votre satisfaction est ma priorité.",
    },
    {
      q: "Est-ce que je serai propriétaire du site ?",
      a: "Oui, à 100%. Vous recevez le code source complet, tous les accès (hébergement, domaine) et une documentation technique. Le site est à vous.",
    },
    {
      q: "Proposez-vous de la maintenance ?",
      a: "Oui. Un support post-livraison est inclus avec chaque projet. Des forfaits de maintenance mensuelle sont aussi disponibles sur devis.",
    },
    {
      q: "Quelles technologies utilisez-vous ?",
      a: "React, TypeScript et Tailwind CSS pour le front-end. Supabase (PostgreSQL) pour le back-end si nécessaire. Tests automatisés avec Vitest et Playwright. Hébergement sur Netlify.",
    },
    {
      q: "Travaillez-vous avec des entreprises ?",
      a: "Oui. Je travaille avec des indépendants, des artistes, des associations et des entreprises (TPE, PME, startups). Quel que soit votre secteur, si votre projet a du potentiel, on peut collaborer.",
    },
    {
      q: "Mon entreprise a des besoins spécifiques, vous pouvez vous adapter ?",
      a: "Chaque projet est sur-mesure. Je m'adapte à vos contraintes techniques, à votre charte graphique et à vos outils existants. On définit ensemble un cahier des charges précis.",
    },
  ];

  const myths = [
    {
      myth: "Un site web coûte forcément une fortune",
      reality: "Chaque projet fait l'objet d'un devis clair et détaillé, sans frais cachés : vous savez ce que vous payez avant de vous engager.",
    },
    {
      myth: "Un freelance est moins fiable qu'une agence",
      reality: "Un seul interlocuteur = communication directe, réactivité maximale et implication totale sur votre projet.",
    },
    {
      myth: "Ce n'est pas adapté pour une entreprise",
      reality: "Je travaille avec des indépendants et des entreprises. Même rigueur, mêmes engagements contractuels, avec plus de flexibilité et de réactivité qu'une agence.",
    },
    {
      myth: "Il faut des mois pour avoir un site",
      reality: "Pas forcément. Le délai dépend de la complexité de votre projet et de la rapidité des échanges : il est défini ensemble dans le devis, avec un calendrier réaliste.",
    },
    {
      myth: "Le design, c'est juste du beau",
      reality: "Chaque choix de design est pensé pour la conversion : structure, hiérarchie visuelle, parcours utilisateur, vitesse.",
    },
    {
      myth: "Je peux faire pareil avec un constructeur gratuit",
      reality: "Un site sur-mesure = performance, SEO, identité unique. Un template gratuit ne vous différenciera jamais de vos concurrents.",
    },
  ];

  return (
    <>
      {/* Hero — Split layout with sidebar card (unique to FAQ) */}
      <section className="py-16 sm:py-24 pt-28 sm:pt-36 px-4 gradient-mesh-subtle">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-end">
            <AnimateOnScroll animation="fadeLeft">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight heading-glow">
                  Vos <span className="text-gradient">questions</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Tout ce qu'il faut savoir avant de se lancer.{" "}
                  <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Écrivez-moi →</a>
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight">
              <div className="glass-subtle border border-border rounded-xl p-6 text-center min-w-[160px] hidden md:block">
                <div className="text-3xl font-bold text-gradient-animate font-display mb-1">24h</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Temps de réponse</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mythes vs Réalité — en premier */}
      <section className="py-16 sm:py-28 px-4 gradient-mesh">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-12">
              <p className="label-mono mb-4 text-center">Idées reçues</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                Mythes <span className="text-muted-foreground">vs</span> <span className="text-gradient">Réalité</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <StaggerContainer className="space-y-4">
            {myths.map((item) => (
              <StaggerItem key={item.myth}>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      ✗
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mythe</p>
                      <p className="text-sm text-muted-foreground">{item.myth}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm text-primary flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wider mb-1">Réalité</p>
                      <p className="text-sm text-foreground">{item.reality}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Accordion — vos questions */}
      <section className="py-16 sm:py-28 px-4 ambient-shapes">
        <div className="container max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-12">
              <p className="label-mono mb-4 text-center">Vos questions</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                Les réponses <span className="text-gradient">concrètes</span>
              </h2>
            </div>
          </AnimateOnScroll>
          <StaggerContainer className="space-y-3">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <FaqItem question={item.q} answer={item.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pas trouvé la réponse ? */}
      <section className="py-16 sm:py-28 px-4">
        <div className="container max-w-2xl">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-12">
              <p className="label-mono mb-4 text-center">Votre question</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Pas trouvé la <span className="text-gradient">réponse</span> ?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Écrivez-moi directement, je vous réponds sous 24h.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.1}>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(239_84%_50%)] text-white hover:bg-[hsl(239_84%_55%)] px-10 py-6 text-sm tracking-[0.15em] uppercase font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <a href="https://wa.me/33744882821" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Écrire sur WhatsApp
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </>
  );
};

export default FaqPage;
