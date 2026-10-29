import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";

const BriefPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    content: [] as string[],
    design: [] as string[],
    features: [] as string[],
    urgency: "",
    budget: "",
    description: "",
  });

  const projectTypes = [
    { value: "onepage", label: "One-Page", price: 690 },
    { value: "vitrine", label: "Site Vitrine", price: 1290 },
    { value: "ecommerce", label: "E-Commerce", price: 2490 },
    { value: "undecided", label: "À définir", price: 0 },
  ];

  const contentOptions = [
    { value: "provided", label: "Je fournis le contenu", price: 0 },
    { value: "help", label: "J'ai besoin d'aide", price: 300 },
    { value: "photos", label: "Banque d'images", price: 150 },
  ];

  const designOptions = [
    { value: "custom", label: "Design sur-mesure", price: 0 },
    { value: "template", label: "À partir d'un template", price: -200 },
  ];

  const featureOptions = [
    { value: "blog", label: "Blog intégré", price: 200 },
    { value: "booking", label: "Système de réservation", price: 400 },
    { value: "newsletter", label: "Newsletter", price: 100 },
    { value: "multilang", label: "Multi-langues", price: 300 },
    { value: "seo", label: "SEO optimisé", price: 250 },
  ];

  const urgencyOptions = [
    { value: "rush", label: "Urgent (< 2 sem)", multiplier: 1.3 },
    { value: "normal", label: "Normal (2-4 sem)", multiplier: 1 },
    { value: "flexible", label: "Flexible", multiplier: 0.95 },
  ];

  const calculateEstimate = () => {
    let total = 0;

    const projectType = projectTypes.find(t => t.value === formData.projectType);
    if (projectType) total += projectType.price;

    formData.content.forEach(c => {
      const opt = contentOptions.find(o => o.value === c);
      if (opt) total += opt.price;
    });

    formData.design.forEach(d => {
      const opt = designOptions.find(o => o.value === d);
      if (opt) total += opt.price;
    });

    formData.features.forEach(f => {
      const opt = featureOptions.find(o => o.value === f);
      if (opt) total += opt.price;
    });

    const urgency = urgencyOptions.find(u => u.value === formData.urgency);
    if (urgency) total *= urgency.multiplier;

    return Math.round(total);
  };

  const estimatedBudget = calculateEstimate();
  const progress = (currentStep / totalSteps) * 100;

  const toggleArrayValue = (array: string[], value: string) => {
    return array.includes(value)
      ? array.filter((v) => v !== value)
      : [...array, value];
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.projectType;
      case 2:
        return formData.content.length > 0;
      case 3:
        return formData.design.length > 0;
      case 4:
        return true;
      case 5:
        return formData.urgency;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("brief_submissions").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        project_type: formData.projectType,
        budget: formData.budget || null,
        content: formData.content,
        design: formData.design,
        features: formData.features,
        urgency: formData.urgency,
        description: formData.description || null,
        estimated_budget: estimatedBudget,
      });

      if (error) throw error;

      toast({
        title: "Demande envoyée avec succès !",
        description: "Je vous réponds avec un devis personnalisé sous 48h.",
      });

      setCurrentStep(6);
    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer ou m'écrire directement à contact@arkaniz.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentStep === 6) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Merci {formData.name} !
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Votre demande a été reçue. Je prépare votre devis personnalisé et vous
            réponds sous 48h à l'adresse <strong>{formData.email}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="/">Retour à l'accueil</a>
            </Button>
            <Button asChild>
              <a href="/portfolio">Voir mes réalisations</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 py-20 px-4">
      <div className="container max-w-3xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 tracking-wider uppercase text-xs">
            Questionnaire CDC & Devis
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Parlons de votre <span className="text-primary">projet</span>
          </h1>
          <p className="text-muted-foreground">
            Quelques questions pour créer un devis sur-mesure
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Étape {currentStep} sur {totalSteps}
            </span>
            {estimatedBudget > 0 && (
              <span className="text-sm font-medium">
                Estimation : <span className="text-primary">{estimatedBudget}€ HT</span>
              </span>
            )}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Commençons par vous connaître</h2>
                <p className="text-sm text-muted-foreground">Informations de contact</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise / Projet</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de l'entreprise"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Type de site *</Label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.value })}
                      className={`pill ${formData.projectType === type.value ? "active" : ""}`}
                    >
                      {type.label}
                      {type.price > 0 && <span className="ml-1 text-xs">({type.price}€)</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Contenu du site</h2>
                <p className="text-sm text-muted-foreground">
                  Comment souhaitez-vous gérer le contenu ?
                </p>
              </div>

              <div className="grid gap-3">
                {contentOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.content.includes(option.value)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Checkbox
                      checked={formData.content.includes(option.value)}
                      onCheckedChange={() =>
                        setFormData({
                          ...formData,
                          content: toggleArrayValue(formData.content, option.value),
                        })
                      }
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{option.label}</p>
                      {option.price > 0 && (
                        <p className="text-xs text-muted-foreground">+{option.price}€</p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Design</h2>
                <p className="text-sm text-muted-foreground">Quel type de design souhaitez-vous ?</p>
              </div>

              <div className="grid gap-3">
                {designOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.design.includes(option.value)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Checkbox
                      checked={formData.design.includes(option.value)}
                      onCheckedChange={() =>
                        setFormData({
                          ...formData,
                          design: toggleArrayValue(formData.design, option.value),
                        })
                      }
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{option.label}</p>
                      {option.price !== 0 && (
                        <p className="text-xs text-muted-foreground">
                          {option.price > 0 ? `+${option.price}€` : `${option.price}€`}
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Fonctionnalités</h2>
                <p className="text-sm text-muted-foreground">
                  Quelles fonctionnalités souhaitez-vous ? (optionnel)
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featureOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        features: toggleArrayValue(formData.features, option.value),
                      })
                    }
                    className={`pill ${formData.features.includes(option.value) ? "active" : ""}`}
                  >
                    {option.label}
                    <span className="ml-1 text-xs">(+{option.price}€)</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-2">Derniers détails</h2>
                <p className="text-sm text-muted-foreground">Urgence et description</p>
              </div>

              <div className="space-y-3">
                <Label>Délai souhaité *</Label>
                <div className="flex flex-wrap gap-2">
                  {urgencyOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: option.value })}
                      className={`pill ${formData.urgency === option.value ? "active" : ""}`}
                    >
                      {option.label}
                      {option.multiplier !== 1 && (
                        <span className="ml-1 text-xs">
                          ({option.multiplier > 1 ? `+${Math.round((option.multiplier - 1) * 100)}%` : `-${Math.round((1 - option.multiplier) * 100)}%`})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description du projet</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[120px]"
                  placeholder="Décrivez votre projet, vos objectifs, votre cible..."
                />
              </div>

              {estimatedBudget > 0 && (
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Estimation indicative</p>
                  <p className="text-3xl font-bold text-primary">{estimatedBudget}€ HT</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Budget final ajustable selon vos besoins précis
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={isSubmitting}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>
            )}

            {currentStep < totalSteps && (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className="ml-auto"
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}

            {currentStep === totalSteps && (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Devis gratuit, sans engagement
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Réponse sous 48h
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Par email personnalisé
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefPage;
