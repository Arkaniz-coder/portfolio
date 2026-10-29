import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";
import { Target, Palette, FolderOpen, Smartphone, ExternalLink, Gamepad2, Coins, Users, FlaskConical } from "lucide-react";
import portfolioMockup from "@/assets/portfolio-mockup.jpg";
import levelaunchMockup from "@/assets/levelaunch-mockup.jpg";

const PortfolioPage = () => {
  const objectives = [
    { icon: Target, label: "Visibilité", desc: "Gagner en visibilité sur Google et toucher un public plus large", num: "01" },
    { icon: Palette, label: "Identité", desc: "Créer une identité visuelle épurée qui reflète son univers artistique", num: "02" },
    { icon: FolderOpen, label: "Structure", desc: "Structurer un portfolio pour mettre en avant ses projets et compositions", num: "03" },
    { icon: Smartphone, label: "Mobile", desc: "Offrir une expérience fluide sur tous les appareils", num: "04" },
  ];

  const deliverables = [
    "Design sur-mesure épuré et professionnel",
    "SEO technique optimisé (balises, sitemap, performance)",
    "Identité visuelle cohérente avec son univers musical",
    "Architecture claire : chaque page a un objectif",
    "Responsive mobile-first",
    "Lecteur audio intégré pour ses compositions",
  ];

  const tags = ["React", "Tailwind CSS", "Framer Motion", "Netlify", "SEO"];

  return (
    <>
      {/* Hero Section — Split layout (unique to Portfolio) */}
      <section className="py-24 pt-36 px-4 border-b border-border/30 gradient-mesh-subtle">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <AnimateOnScroll animation="fadeLeft">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight heading-glow">
                  Projets <span className="text-gradient">récents</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Chaque projet est une aventure. Voici le premier chapitre.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight">
              <div className="glass-subtle border border-border rounded-xl p-6 text-center min-w-[160px]">
                <div className="text-4xl font-bold text-gradient-animate font-display mb-1">2</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projets réalisés</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Project - Sarah Rebai */}
      <section className="py-28 px-4 ambient-shapes">
        <div className="container max-w-6xl">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono tracking-wider uppercase text-primary/80">Projet phare • 2026</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 heading-glow">Sarah Rebai</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Collaboration avec Sarah Rebai, artiste musicale, pour créer un site qui reflète son univers.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Browser Mockup */}
          <AnimateOnScroll animation="scaleIn">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10 max-w-5xl mx-auto mb-20 breathe-glow">
              {/* Browser chrome */}
              <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 glass-subtle rounded-lg px-4 py-1.5 text-xs text-muted-foreground font-mono truncate text-center">
                  sarahrebai.netlify.app
                </div>
                <a href="https://sarahrebai.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              {/* Site preview — real screenshot */}
              <a
                href="https://sarahrebai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] overflow-hidden group cursor-pointer bg-[#0d0d0d]"
              >
                <img
                  src={portfolioMockup}
                  alt="Sarah Rebai — Site web portfolio"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-medium tracking-wider uppercase shadow-lg shadow-primary/30">
                    Voir le site en ligne →
                  </span>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Les objectifs + Livrables */}
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto mb-20">
            <AnimateOnScroll animation="fadeLeft">
              <div>
                <h3 className="text-3xl font-bold mb-8">Les objectifs</h3>
                <div className="space-y-4">
                  {objectives.map((obj) => (
                    <motion.div
                      key={obj.label}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 p-5 rounded-xl glass-subtle border border-border hover:border-primary/30 transition-all duration-300 group/need"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/need:scale-110 group-hover/need:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300">
                          <obj.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute -top-2 -right-2 text-[10px] font-mono text-primary/50">{obj.num}</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-0.5">{obj.label}</p>
                        <p className="text-sm text-muted-foreground">{obj.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight">
              <div>
                <h3 className="text-3xl font-bold mb-8">Ce que j'ai livré</h3>
                <ul className="space-y-4">
                  {deliverables.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group/del"
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary text-sm font-bold group-hover/del:bg-primary group-hover/del:text-primary-foreground transition-all duration-300">
                        ✓
                      </span>
                      <span className="text-muted-foreground pt-1 group-hover/del:text-foreground transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-10">
                  {tags.map((tag) => (
                    <span key={tag} className="glass-subtle px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider text-primary/80 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Stats — project characteristics, not vanity metrics */}
          <AnimateOnScroll>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "2 sem", label: "Délai de livraison" },
                { value: "Mobile-first", label: "Approche responsive" },
                { value: "SEO intégré", label: "Visible sur Google" },
                { value: "Audio", label: "Lecteur intégré" },
              ].map((result) => (
                <StaggerItem key={result.label}>
                  <div className="text-center p-6 rounded-xl glass-subtle border border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-500 group">
                    <div className="text-2xl font-bold text-gradient-animate font-display mb-2 group-hover:scale-110 transition-transform duration-300">{result.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{result.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateOnScroll>
        </div>
      </section>

      {/* LeveLaunch — Projet perso */}
      <section className="py-28 px-4 border-t border-border/30 gradient-mesh-subtle">
        <div className="container max-w-6xl">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono tracking-wider uppercase text-amber-500/90">Projet personnel • 2026</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 heading-glow">LeveLaunch</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Plateforme de financement participatif pour créateurs de jeux vidéo et courts-métrages indépendants.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Browser Mockup */}
          <AnimateOnScroll animation="scaleIn">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-amber-500/10 max-w-5xl mx-auto mb-20">
              {/* Browser chrome */}
              <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 glass-subtle rounded-lg px-4 py-1.5 text-xs text-muted-foreground font-mono truncate text-center">
                  levelaunch.arkaniz.workers.dev
                </div>
                <a href="https://levelaunch.arkaniz.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber-500 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              {/* Site preview */}
              <a
                href="https://levelaunch.arkaniz.workers.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] overflow-hidden group cursor-pointer bg-black"
              >
                <img
                  src={levelaunchMockup}
                  alt="LeveLaunch — Plateforme crowdfunding créateurs indépendants"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-amber-500 text-black px-8 py-4 rounded-xl text-sm font-medium tracking-wider uppercase shadow-lg shadow-amber-500/30">
                    Explorer la démo →
                  </span>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Objectifs + Livrables */}
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto mb-20">
            <AnimateOnScroll animation="fadeLeft">
              <div>
                <h3 className="text-3xl font-bold mb-8">Les objectifs</h3>
                <div className="space-y-4">
                  {[
                    { icon: Gamepad2, label: "Plateforme complète", desc: "Créer un espace où les créateurs indépendants publient et monétisent leurs projets sans intermédiaire", num: "01" },
                    { icon: Coins, label: "Parcours de paiement", desc: "Simuler le paiement avec Stripe en mode démo, avec 90 % des revenus reversés au créateur", num: "02" },
                    { icon: Users, label: "Expérience communauté", desc: "Permettre aux fans de soutenir, commenter et suivre les créateurs qu'ils aiment", num: "03" },
                    { icon: FlaskConical, label: "Tests automatisés", desc: "Garantir la fiabilité avec des tests E2E Playwright et des tests unitaires Vitest", num: "04" },
                  ].map((obj) => (
                    <motion.div
                      key={obj.label}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 p-5 rounded-xl glass-subtle border border-border hover:border-amber-500/30 transition-all duration-300 group/need"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover/need:scale-110 group-hover/need:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300">
                          <obj.icon className="w-5 h-5 text-amber-500" />
                        </div>
                        <span className="absolute -top-2 -right-2 text-[10px] font-mono text-amber-500/50">{obj.num}</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-0.5">{obj.label}</p>
                        <p className="text-sm text-muted-foreground">{obj.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight">
              <div>
                <h3 className="text-3xl font-bold mb-8">Ce que j'ai construit</h3>
                <ul className="space-y-4">
                  {[
                    "Interface créateur : publication de jeux et courts-métrages",
                    "Système d'authentification complet via Supabase",
                    "Paiement Stripe en mode démo, avec reversement 90/10",
                    "Dashboard admin : gestion des projets et statistiques",
                    "Tests E2E Playwright + tests unitaires Vitest",
                    "Design system sombre cohérent, responsive mobile",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group/del"
                    >
                      <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 text-sm font-bold group-hover/del:bg-amber-500 group-hover/del:text-black transition-all duration-300">
                        ✓
                      </span>
                      <span className="text-muted-foreground pt-1 group-hover/del:text-foreground transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-10">
                  {["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Stripe", "Playwright", "Vitest"].map((tag) => (
                    <span key={tag} className="glass-subtle px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider text-amber-500/80 border border-amber-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Stats projet */}
          <AnimateOnScroll>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "Full stack", label: "Front + Back intégré" },
                { value: "Stripe", label: "Paiements simulés" },
                { value: "E2E testée", label: "Playwright + Vitest" },
                { value: "Démo live", label: "En ligne sur Workers" },
              ].map((result) => (
                <StaggerItem key={result.label}>
                  <div className="text-center p-6 rounded-xl glass-subtle border border-border hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 group">
                    <div className="text-xl font-bold text-amber-500 font-display mb-2 group-hover:scale-110 transition-transform duration-300">{result.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{result.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateOnScroll>
        </div>
      </section>

    </>
  );
};

export default PortfolioPage;
