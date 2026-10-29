import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Briefing",
      description: "On discute de votre projet, vos objectifs et votre vision",
      duration: "1-2 jours",
    },
    {
      icon: Palette,
      number: "2",
      title: "Maquette",
      description: "Je crée le design et vous valide chaque élément visuel",
      duration: "3-5 jours",
    },
    {
      icon: Code,
      number: "3",
      title: "Développement",
      description: "Je transforme le design en site fonctionnel et optimisé",
      duration: "7-14 jours",
    },
    {
      icon: Rocket,
      number: "4",
      title: "Livraison",
      description: "Tests finaux, formation et mise en ligne de votre site",
      duration: "1-2 jours",
    },
  ];

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center relative group hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
              <span className="text-xs text-primary font-medium tracking-wider uppercase">
                {step.duration}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="md:hidden flex justify-center my-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
