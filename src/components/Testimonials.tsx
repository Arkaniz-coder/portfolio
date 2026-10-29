import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const Testimonials = () => {
  return (
    <section className="py-28 px-4 relative overflow-hidden ambient-shapes">
      {/* Large decorative quote SVG */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.10] z-[1]">
        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="280" fontFamily="Georgia, serif" fill="hsl(239 84% 67%)">"</text>
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        <AnimateOnScroll>
          <p className="label-mono mb-2 text-center">Ce que disent mes clients</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center heading-glow">Témoignages</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Sarah Rebai - Verified */}
          <AnimateOnScroll animation="fadeUp">
            <Card className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 card-shimmer glow-card overflow-hidden">
              {/* Gradient accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 via-[hsl(280_80%_65%/0.05)] to-transparent pointer-events-none" />

              <CardContent className="p-6 relative">
                <svg className="w-10 h-10 text-primary/30 mb-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Professionnel, réactif et créatif. Arkaniz a parfaitement compris ma vision et l'a traduite en un site élégant et fonctionnel. Le projet a été livré en 2 semaines, exactement comme prévu.
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full avatar-gradient flex items-center justify-center text-sm font-medium text-primary-foreground">
                      SR
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-background flex items-center justify-center">
                      <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah Rebai</p>
                    <p className="text-xs text-muted-foreground">Artiste Musicale</p>
                  </div>
                </div>

                <a
                  href="https://sarahrebai.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm mt-4 inline-block hover:underline"
                >
                  → Voir le projet
                </a>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* LeveLaunch — Projet perso */}
          <AnimateOnScroll animation="fadeUp" delay={0.15}>
            <Card className="relative bg-card border-border hover:border-amber-500/50 transition-all duration-500 card-shimmer overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent pointer-events-none" />

              <CardContent className="p-6 relative flex flex-col h-full">
                {/* Badge projet perso */}
                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-1 mb-4 w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500">Projet personnel</span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                  Plateforme de financement participatif pour créateurs de jeux vidéo et courts-métrages indépendants. Stack complète : React 18, TypeScript, Supabase, Stripe, Playwright.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["React 18", "Supabase", "Stripe", "Playwright"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500/80 border border-amber-500/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-sm font-bold text-amber-500">
                      LL
                    </div>
                    <div>
                      <p className="font-medium text-sm">LeveLaunch</p>
                      <p className="text-xs text-muted-foreground">Crowdfunding indépendant</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://levelaunch.arkaniz.workers.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  → Voir le projet <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
