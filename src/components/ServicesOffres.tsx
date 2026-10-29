import { Globe, RefreshCw, ArrowRight } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const services = [
  {
    icon: Globe,
    title: "Création de site",
    description:
      "Landing page, site vitrine ou e-commerce — un site pensé pour votre activité, votre audience et vos objectifs.",
    details: [
      "Design sur-mesure adapté à votre identité",
      "Responsive mobile-first",
      "SEO optimisé dès le départ",
      "Livraison rapide et accompagnement inclus",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    description:
      "Votre site actuel ne vous ressemble plus ? On le repense ensemble — design, performance, expérience utilisateur.",
    details: [
      "Audit complet de l'existant",
      "Nouveau design moderne et performant",
      "Migration sans perte de contenu",
      "Amélioration SEO et vitesse",
    ],
  },
];

const ServicesOffres = () => {
  return (
    <section className="py-24 sm:py-28 px-4 relative overflow-hidden gradient-mesh-subtle">
      <div className="container max-w-5xl">
        <AnimateOnScroll>
          <p className="label-mono mb-2 text-center">Ce que je propose</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center heading-glow">
            Deux <span className="text-gradient-animate">expertises</span>
          </h2>
          <p className="text-muted-foreground mb-14 sm:mb-16 text-center max-w-2xl mx-auto">
            Création ou refonte — chaque projet est sur-mesure, pensé pour convertir.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <StaggerItem key={service.title} index={i}>
              <div className="rounded-2xl p-6 sm:p-8 border border-border bg-card/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/33744882821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium mt-auto"
                >
                  Discuter de mon projet
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesOffres;
