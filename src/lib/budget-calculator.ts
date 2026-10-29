// Budget Calculator — basé sur la grille tarifaire Arkaniz
// Les prix affichés sont des estimations indicatives

export interface BudgetSelections {
  projectType: string; // onepage | vitrine | ecommerce | undecided
  design: string[]; // custom | template | inspiration
  content: string[]; // provided | help | photos
  features: string[]; // blog | booking | newsletter | multilang | chat | client-area | faq | reviews | map | form-multi
  urgency: string; // flexible | normal | rush | super-rush
}

interface PriceRange {
  min: number;
  max: number;
}

const PACK_PRICES: Record<string, PriceRange> = {
  onepage: { min: 690, max: 690 },
  vitrine: { min: 1290, max: 1290 },
  ecommerce: { min: 2490, max: 2490 },
  undecided: { min: 690, max: 2490 },
};

const DESIGN_OPTIONS: Record<string, number> = {
  custom: 300,
  template: 0,
  inspiration: 0,
};

const CONTENT_OPTIONS: Record<string, number> = {
  provided: 0,
  help: 150, // rédaction SEO ~1 page
  photos: 100, // banque images 20 visuels
};

const FEATURE_PRICES: Record<string, PriceRange> = {
  blog: { min: 100, max: 100 },
  booking: { min: 100, max: 100 },
  newsletter: { min: 100, max: 100 },
  multilang: { min: 300, max: 300 },
  chat: { min: 150, max: 150 },
  "client-area": { min: 450, max: 450 },
  faq: { min: 100, max: 100 },
  reviews: { min: 180, max: 180 },
  map: { min: 150, max: 150 },
  "form-multi": { min: 150, max: 150 },
  analytics: { min: 100, max: 100 },
  seo: { min: 0, max: 0 }, // inclus dans les packs
};

const URGENCY_MULTIPLIERS: Record<string, number> = {
  flexible: 1,
  normal: 1,
  rush: 1.3,
  "super-rush": 1.5,
};

export function calculateBudget(selections: BudgetSelections): PriceRange {
  // Base pack price
  const packPrice = PACK_PRICES[selections.projectType] || PACK_PRICES.undecided;
  let min = packPrice.min;
  let max = packPrice.max;

  // Design options
  for (const d of selections.design) {
    const price = DESIGN_OPTIONS[d] || 0;
    min += price;
    max += price;
  }

  // Content options
  for (const c of selections.content) {
    const price = CONTENT_OPTIONS[c] || 0;
    min += price;
    max += price;
  }

  // Features
  for (const f of selections.features) {
    const featurePrice = FEATURE_PRICES[f];
    if (featurePrice) {
      min += featurePrice.min;
      max += featurePrice.max;
    }
  }

  // Urgency multiplier
  const multiplier = URGENCY_MULTIPLIERS[selections.urgency] || 1;
  min = Math.round(min * multiplier);
  max = Math.round(max * multiplier);

  return { min, max };
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString("fr-FR");
}

export function formatBudgetRange(range: PriceRange): string {
  if (range.min === range.max) {
    return `${formatPrice(range.min)} \u20AC HT`;
  }
  return `${formatPrice(range.min)} \u20AC \u2014 ${formatPrice(range.max)} \u20AC HT`;
}
