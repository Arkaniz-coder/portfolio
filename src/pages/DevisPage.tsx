import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  Check,
  FileText,
  Globe,
  ShoppingCart,
  HelpCircle,
  Paintbrush,
  LayoutTemplate,
  Eye,
  PenTool,
  Image,
  Newspaper,
  CalendarCheck,
  Mail,
  Languages,
  MessageSquare,
  Lock,
  Star,
  BarChart3,
  ClipboardList,
  Clock,
  CalendarDays,
  Zap,
  Flame,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import {
  calculateBudget,
  formatBudgetRange,
  type BudgetSelections,
} from "@/lib/budget-calculator";

const STEPS = [
  { id: 1, label: "Projet" },
  { id: 2, label: "Design" },
  { id: 3, label: "Options" },
  { id: 4, label: "Délai" },
  { id: 5, label: "Contact" },
];

const DevisPage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [projectType, setProjectType] = useState("");
  const [design, setDesign] = useState<string[]>([]);
  const [content, setContent] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("normal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const selections: BudgetSelections = {
    projectType: projectType || "undecided",
    design,
    content,
    features,
    urgency,
  };

  const budget = calculateBudget(selections);

  const toggleArrayValue = (
    arr: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setter(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const canProceed = () => {
    if (step === 1) return projectType !== "";
    if (step === 5) return name.trim() !== "" && email.trim() !== "";
    return true;
  };

  const projectLabels: Record<string, string> = {
    onepage: "Landing Page",
    vitrine: "Site Vitrine",
    ecommerce: "E-Commerce",
    undecided: "Pas encore défini",
  };

  const designLabels: Record<string, string> = {
    custom: "Design sur-mesure",
    template: "Base existante adaptée",
    inspiration: "A des références",
  };

  const contentLabels: Record<string, string> = {
    provided: "Fournit textes et visuels",
    help: "Aide rédaction",
    photos: "Besoin de visuels",
  };

  const featureLabels: Record<string, string> = {
    blog: "Blog / Actualités",
    booking: "Réservation en ligne",
    newsletter: "Newsletter",
    multilang: "Multilingue",
    chat: "Chat en direct",
    "client-area": "Espace client sécurisé",
    faq: "FAQ dynamique",
    reviews: "Avis clients",
    analytics: "Analytics avancés",
    "form-multi": "Formulaire avancé",
  };

  const urgencyLabels: Record<string, string> = {
    flexible: "Flexible",
    normal: "Normal (2-6 sem)",
    rush: "Urgent (×1.3)",
    "super-rush": "Très urgent (×1.5)",
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const designText = design.map(d => designLabels[d] || d).join(", ") || "Non précisé";
    const contentText = content.map(c => contentLabels[c] || c).join(", ") || "Non précisé";
    const featuresText = features.map(f => featureLabels[f] || f).join(", ") || "Aucune";
    const urgencyText = urgencyLabels[urgency] || urgency;
    const budgetText = formatBudgetRange(budget);
    const projectText = projectLabels[projectType] || projectType;
    const descText = description || "Non renseignée";

    try {
      const res = await fetch("/.netlify/functions/send-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          project: projectText,
          design: designText,
          content: contentText,
          features: featuresText,
          urgency: urgencyText,
          budget: budgetText,
          description: descText,
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSubmitted(true);
    } catch {
      alert("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToStep = (targetStep: number) => {
    if (targetStep < step) {
      setStep(targetStep);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Brief envoyé !</h2>
          <p className="text-muted-foreground mb-8">
            Merci {name}. Je reviens vers vous sous 24h avec une proposition personnalisée.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setProjectType("");
              setDesign([]);
              setContent([]);
              setFeatures([]);
              setUrgency("normal");
              setName("");
              setEmail("");
              setDescription("");
            }}
            variant="outline"
            className="tracking-wider uppercase"
          >
            Nouveau devis
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-24 pt-28 sm:pt-36 px-4 gradient-mesh-subtle">
        <div className="container max-w-3xl">
          <AnimateOnScroll>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight heading-glow">
              Parlons de votre <span className="text-gradient">projet</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              5 questions, 2 minutes. Je vous réponds sous 24h.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border/30 px-4 py-3 sm:py-4">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <button
                  onClick={() => goToStep(s.id)}
                  disabled={s.id > step}
                  className={`flex items-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                    s.id <= step ? "cursor-pointer" : "cursor-default opacity-40"
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                      s.id < step
                        ? "bg-[hsl(239_84%_50%)] text-white"
                        : s.id === step
                        ? "bg-primary/20 border-2 border-primary text-primary"
                        : "bg-border/50 text-muted-foreground"
                    }`}
                  >
                    {s.id < step ? <Check className="w-3.5 h-3.5" /> : s.id}
                  </div>
                  <span className={`hidden sm:inline text-xs font-medium transition-colors ${
                    s.id === step ? "text-primary" : s.id < step ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {s.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-[2px] mx-1 sm:mx-2 rounded-full transition-colors ${
                    s.id < step ? "bg-primary" : "bg-border/50"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <p className="sm:hidden text-xs text-primary font-medium mt-2 text-center">
            Étape {step} : {STEPS[step - 1].label}
          </p>
        </div>
      </div>

      {/* Wizard Steps */}
      <section className="py-8 sm:pb-20 px-4">
        <div className="container max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[280px] sm:min-h-[300px]"
            >
              {/* Step 1: Project Type */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Quel type de site souhaitez-vous ?</h2>
                  <p className="text-sm text-muted-foreground mb-6">Choisissez ce qui correspond le mieux à votre besoin.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { id: "onepage", icon: FileText, label: "Landing Page", desc: "Une page percutante pour convertir" },
                      { id: "vitrine", icon: Globe, label: "Site Vitrine", desc: "Plusieurs pages, présence complète" },
                      { id: "ecommerce", icon: ShoppingCart, label: "E-Commerce", desc: "Boutique en ligne sur-mesure" },
                      { id: "undecided", icon: HelpCircle, label: "Je ne sais pas encore", desc: "On définit ça ensemble" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setProjectType(opt.id)}
                        className={`p-4 sm:p-6 rounded-xl border text-left transition-all duration-300 group ${
                          projectType === opt.id
                            ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            projectType === opt.id
                              ? "bg-primary/20 border border-primary/40"
                              : "bg-primary/10 border border-primary/20 group-hover:bg-primary/15"
                          }`}>
                            <opt.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-base sm:text-lg font-semibold mb-1">{opt.label}</div>
                            <div className="text-sm text-muted-foreground">{opt.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Design & Content */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Design & contenu</h2>
                  <p className="text-sm text-muted-foreground mb-6">Dites-moi comment vous imaginez votre site.</p>

                  <h3 className="font-semibold mb-3 text-sm sm:text-base">Quel style de design ?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {[
                      { id: "custom", icon: Paintbrush, label: "Sur-mesure", desc: "Design unique créé pour vous" },
                      { id: "template", icon: LayoutTemplate, label: "Base adaptée", desc: "Existant personnalisé" },
                      { id: "inspiration", icon: Eye, label: "J'ai des références", desc: "Sites qui m'inspirent" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => toggleArrayValue(design, setDesign, opt.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 group ${
                          design.includes(opt.id)
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <opt.icon className={`w-5 h-5 mb-2 transition-colors ${
                          design.includes(opt.id) ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
                        <div className="font-medium text-sm mb-0.5">{opt.label}</div>
                        <div className="text-xs text-muted-foreground">{opt.desc}</div>
                      </button>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-3 text-sm sm:text-base">Et pour le contenu ?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "provided", icon: Check, label: "Je fournis tout", desc: "Textes et visuels prêts" },
                      { id: "help", icon: PenTool, label: "Aide rédaction", desc: "Besoin d'un coup de main" },
                      { id: "photos", icon: Image, label: "Besoin de visuels", desc: "Photos, illustrations..." },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => toggleArrayValue(content, setContent, opt.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 group ${
                          content.includes(opt.id)
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <opt.icon className={`w-5 h-5 mb-2 transition-colors ${
                          content.includes(opt.id) ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
                        <div className="font-medium text-sm mb-0.5">{opt.label}</div>
                        <div className="text-xs text-muted-foreground">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Features */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Des fonctionnalités en particulier ?</h2>
                  <p className="text-muted-foreground mb-6 text-sm">Sélectionnez ce qui vous intéresse — rien n'est obligatoire.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "blog", icon: Newspaper, label: "Blog / Actualités" },
                      { id: "booking", icon: CalendarCheck, label: "Réservation en ligne" },
                      { id: "newsletter", icon: Mail, label: "Newsletter" },
                      { id: "multilang", icon: Languages, label: "Multilingue" },
                      { id: "chat", icon: MessageSquare, label: "Chat en direct" },
                      { id: "client-area", icon: Lock, label: "Espace client sécurisé" },
                      { id: "faq", icon: HelpCircle, label: "FAQ dynamique" },
                      { id: "reviews", icon: Star, label: "Avis clients" },
                      { id: "analytics", icon: BarChart3, label: "Analytics avancés" },
                      { id: "form-multi", icon: ClipboardList, label: "Formulaire avancé" },
                    ].map((feat) => (
                      <button
                        key={feat.id}
                        onClick={() => toggleArrayValue(features, setFeatures, feat.id)}
                        className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 group ${
                          features.includes(feat.id)
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <feat.icon className={`w-4.5 h-4.5 shrink-0 transition-colors ${
                          features.includes(feat.id) ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
                        <span className="text-sm font-medium">{feat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Urgency */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Vous avez un délai en tête ?</h2>
                  <p className="text-sm text-muted-foreground mb-6">Pas de pression — choisissez ce qui vous convient.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { id: "flexible", icon: Clock, label: "Flexible", desc: "Pas de date précise, on avance sereinement" },
                      { id: "normal", icon: CalendarDays, label: "Normal", desc: "Délai standard (2 à 6 semaines)" },
                      { id: "rush", icon: Zap, label: "Urgent", desc: "Livraison accélérée" },
                      { id: "super-rush", icon: Flame, label: "Très urgent", desc: "Priorité absolue, je m'organise" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setUrgency(opt.id)}
                        className={`p-4 sm:p-6 rounded-xl border text-left transition-all duration-300 group ${
                          urgency === opt.id
                            ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            urgency === opt.id
                              ? "bg-primary/20 border border-primary/40"
                              : "bg-primary/10 border border-primary/20 group-hover:bg-primary/15"
                          }`}>
                            <opt.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-base sm:text-lg font-semibold mb-1">{opt.label}</div>
                            <div className="text-sm text-muted-foreground">{opt.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Contact */}
              {step === 5 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Comment vous contacter ?</h2>
                  <p className="text-sm text-muted-foreground mb-6">Pour que je puisse revenir vers vous avec une proposition.</p>
                  <div className="space-y-4 max-w-lg">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nom / Entreprise *</label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom ou celui de votre entreprise"
                        className="bg-card border-border py-3"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        className="bg-card border-border py-3"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Description du projet (optionnel)</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Décrivez brièvement votre projet, vos objectifs, votre cible..."
                        rows={4}
                        className="bg-card border-border"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 gap-3">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="tracking-wider uppercase text-xs px-4 sm:px-6 py-5 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Retour</span>
            </Button>

            {step < 5 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-xs px-6 sm:px-8 py-5 rounded-xl flex-1 sm:flex-none"
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-xs px-6 sm:px-8 py-5 rounded-xl flex-1 sm:flex-none"
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer mon brief
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DevisPage;
