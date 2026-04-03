export interface Collection {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  mood: string;
  products: string[];
}

export const collections: Collection[] = [
  {
    slug: 'for-him',
    name: 'For Him',
    description:
      'Oud, leather, saffron, smoke. Four compositions built for presence — each one a study in controlled intensity.',
    heroImage: '/images/collections/for-him-hero.jpg',
    mood: 'Commanding, warm, architecturally masculine',
    products: ['oud-al-sultan', 'midnight-oryx', 'imperial-saffron', 'royal-oud'],
  },
  {
    slug: 'for-her',
    name: 'For Her',
    description:
      'Rose, jasmine, plum, oud. Three fragrances that refuse to choose between softness and power.',
    heroImage: '/images/collections/for-her-hero.jpg',
    mood: 'Sensual, layered, unapologetically feminine',
    products: ['velvet-rose-and-oud', 'royal-plum-nectar', 'midnight-jasmine'],
  },
  {
    slug: 'unisex',
    name: 'Unisex',
    description:
      'Beyond gender, beyond expectation. Three compositions that belong to whoever wears them.',
    heroImage: '/images/collections/unisex-hero.jpg',
    mood: 'Fluid, modern, boundary-dissolving',
    products: ['amber-gilded', 'oud-al-maliki', 'silver-smoke'],
  },
  {
    slug: 'discovery',
    name: 'Discovery',
    description:
      'Not sure where to start? The Discovery Coffret puts all ten signatures at your fingertips in a single curated box.',
    heroImage: '/images/collections/discovery-hero.jpg',
    mood: 'Exploratory, gifting-ready, curatorial',
    products: ['discovery-coffret'],
  },
  {
    slug: 'all',
    name: 'All Fragrances',
    description:
      'The complete THE786 collection. Ten individual compositions and one curated coffret — every facet of modern luxury oud.',
    heroImage: '/images/collections/all-hero.jpg',
    mood: 'Comprehensive, editorial, immersive',
    products: [
      'oud-al-sultan',
      'midnight-oryx',
      'imperial-saffron',
      'royal-oud',
      'velvet-rose-and-oud',
      'royal-plum-nectar',
      'midnight-jasmine',
      'amber-gilded',
      'oud-al-maliki',
      'silver-smoke',
      'discovery-coffret',
    ],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
