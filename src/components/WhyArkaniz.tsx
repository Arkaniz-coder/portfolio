import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import { Palette, Zap, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Palette,
    title: "Design sur-mesure",
    description:
      "Chaque site est unique. Pas de templates recyclés — un design pensé pour votre marque et vos objectifs.",
  },
  {
    icon: Zap,
    title: "Code performant",
    description:
      "Technologies modernes, temps de chargement ultra-rapides, SEO optimisé. Votre site sera aussi beau que rapide.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement complet",
    description:
      "Du brief à la mise en ligne et au-delà. Un interlocuteur unique, réactif, impliqué dans votre réussite.",
  },
];

const WhyArkaniz = () => {
  return (
    <section className="py-24 sm:py-28 px-4 relative overflow-hidden">
      <div className="container max-w-6xl">
        <AnimateOnScroll>
          <p className="label-mono mb-2 text-center">Pourquoi Arkaniz</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center heading-glow">
            Votre vision, mon expertise
          </h2>
          <p className="text-muted-foreground mb-14 sm:mb-16 text-center max-w-2xl mx-auto">
            Un freelance engagé qui transforme vos idées en sites web qui convertissent.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.title} index={i}>
              <div className="glass-subtle rounded-2xl p-6 sm:p-8 text-center group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/15 to-[hsl(280_80%_65%/0.1)] border border-primary/20 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/15 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyArkaniz;
