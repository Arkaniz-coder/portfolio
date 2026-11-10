import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Briefing",
    description: "On échange sur votre vision, vos objectifs et votre audience. Je pose les bonnes questions.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Palette,
    number: "02",
    title: "Maquette",
    description: "Je dessine l'interface. Vous validez le design avant le développement.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Code2,
    number: "03",
    title: "Développement",
    description: "Je code votre site avec des technologies modernes, en soignant la performance et la qualité.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Livraison",
    description: "Tests, mise en ligne et documentation. Vous êtes autonome dès le premier jour.",
    color: "from-primary/20 to-primary/5",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-28 px-4 relative overflow-hidden gradient-mesh-subtle">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-[1]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="hsl(239 84% 67%)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        <AnimateOnScroll>
          <p className="label-mono mb-2 text-center">Comment ça marche</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center heading-glow">
            4 étapes vers votre site
          </h2>
          <p className="text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Un processus clair et transparent. Vous êtes impliqué à chaque étape.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30 shadow-[0_0_8px_hsl(239_84%_67%/0.4)]" />

          {steps.map((step, i) => (
            <StaggerItem key={step.number} index={i}>
              <div className="relative text-center group p-6 rounded-xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6">
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-500 group-hover:animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500">
                    <step.icon className="w-6 h-6 text-primary relative z-10" />
                  </div>
                </div>

                {/* Step number badge */}
                <span className="inline-block text-[10px] font-mono text-primary/80 tracking-[0.2em] bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">{step.number}</span>

                <h3 className="text-lg font-bold mt-3 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WorkProcess;
