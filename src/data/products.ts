export type ProductCategory = 'for-him' | 'for-her' | 'unisex' | 'gifting';
export type Badge = 'new' | 'bestseller' | 'rare' | 'limited' | 'gifting';
export type SuitableFor = 'him' | 'her' | 'unisex' | 'gifting';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  scentFamily: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: string;
  sillage: string;
  prices: Record<string, number>;
  badges: Badge[];
  suitableFor: SuitableFor[];
  images: {
    main: string;
    gallery: string[];
  };
  relatedProducts: string[];
  featuredCopy: string;
  layeringSuggestion: string;
}

export const products: Product[] = [
  // ──────────────────────────────────────────────
  // FOR HIM
  // ──────────────────────────────────────────────
  {
    slug: 'oud-al-sultan',
    name: 'Oud Al Sultan',
    category: 'for-him',
    shortDescription: 'A commanding oud composition built on aged Assamese heartwood and burnished leather.',
    longDescription:
      'Oud Al Sultan opens with a sharp, almost architectural precision — green cardamom and black pepper cutting through still air. The heart reveals itself slowly: aged Assamese oud, dense and animalic, interlaced with tendrils of Bulgarian rose absolute. The dry-down is a study in restraint — sandalwood, amber, and a barely perceptible wisp of tobacco leaf that lingers on skin for hours. This is not a fragrance that announces itself. It simply refuses to be forgotten.',
    scentFamily: 'Woody Oud',
    topNotes: ['Green Cardamom', 'Black Pepper', 'Bergamot'],
    heartNotes: ['Aged Assamese Oud', 'Bulgarian Rose Absolute', 'Saffron'],
    baseNotes: ['Sandalwood', 'Amber', 'Tobacco Leaf'],
    longevity: '10-12 hours',
    sillage: 'Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['bestseller'],
    suitableFor: ['him'],
    images: {
      main: '/images/products/oud-al-sultan/main.jpg',
      gallery: [
        '/images/products/oud-al-sultan/gallery-1.jpg',
        '/images/products/oud-al-sultan/gallery-2.jpg',
        '/images/products/oud-al-sultan/gallery-3.jpg',
      ],
    },
    relatedProducts: ['imperial-saffron', 'royal-oud', 'midnight-oryx'],
    featuredCopy: 'The oud that rewrites the rules of modern masculinity.',
    layeringSuggestion: 'Pair with Imperial Saffron for a richer, more opulent projection.',
  },
  {
    slug: 'midnight-oryx',
    name: 'Midnight Oryx',
    category: 'for-him',
    shortDescription: 'Dark, resinous, and unapologetically intense — a nocturnal scent for the unhurried.',
    longDescription:
      'Midnight Oryx is built for the hours after the world quiets down. It opens with a bruised, almost metallic elemi resin cut with juniper berries. At its core, a rich accord of labdanum and black oud spirals outward, grounded by vetiver and a dry, smoky frankincense. The effect is hypnotic without being heavy — a fragrance that draws people closer rather than filling the room. Wear it when precision matters more than volume.',
    scentFamily: 'Resinous Woody',
    topNotes: ['Elemi Resin', 'Juniper Berry', 'Pink Pepper'],
    heartNotes: ['Labdanum', 'Black Oud', 'Violet Leaf'],
    baseNotes: ['Vetiver', 'Frankincense', 'Dark Musk'],
    longevity: '8-10 hours',
    sillage: 'Moderate to Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['new'],
    suitableFor: ['him'],
    images: {
      main: '/images/products/midnight-oryx/main.jpg',
      gallery: [
        '/images/products/midnight-oryx/gallery-1.jpg',
        '/images/products/midnight-oryx/gallery-2.jpg',
        '/images/products/midnight-oryx/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-sultan', 'silver-smoke', 'amber-gilded'],
    featuredCopy: 'For the hours that belong only to you.',
    layeringSuggestion: 'Layer with Silver Smoke on the wrists for a cooler, more enigmatic trail.',
  },
  {
    slug: 'imperial-saffron',
    name: 'Imperial Saffron',
    category: 'for-him',
    shortDescription: 'Kashmiri saffron dissolved in liquid amber — warm, sovereign, unmistakable.',
    longDescription:
      'Imperial Saffron does not ease you in. The opening is immediate and saturated: Kashmiri saffron threads, warmed and almost edible, laced with a bitter orange zest that keeps sweetness at arm\'s length. The heart is plush — Damask rose and oud — but it\'s the base that defines the experience: a molten amber accord, benzoin, and the faintest trace of cured leather. It smells expensive because it is. There is no shortcut to this kind of depth.',
    scentFamily: 'Spicy Amber',
    topNotes: ['Kashmiri Saffron', 'Bitter Orange', 'Cinnamon Bark'],
    heartNotes: ['Damask Rose', 'Oud', 'Nutmeg'],
    baseNotes: ['Amber', 'Benzoin', 'Cured Leather'],
    longevity: '10-12 hours',
    sillage: 'Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['bestseller', 'rare'],
    suitableFor: ['him'],
    images: {
      main: '/images/products/imperial-saffron/main.jpg',
      gallery: [
        '/images/products/imperial-saffron/gallery-1.jpg',
        '/images/products/imperial-saffron/gallery-2.jpg',
        '/images/products/imperial-saffron/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-sultan', 'royal-oud', 'amber-gilded'],
    featuredCopy: 'Saffron at its most unapologetic.',
    layeringSuggestion: 'Apply Oud Al Sultan to the chest and Imperial Saffron to pulse points for a commanding layered signature.',
  },
  {
    slug: 'royal-oud',
    name: 'Royal Oud',
    category: 'for-him',
    shortDescription: 'Clean, austere oud shaped by cedarwood and white musk — modern restraint at its finest.',
    longDescription:
      'Royal Oud strips the genre down to its essentials. The opening is crisp — Calabrian bergamot and galbanum, almost soapy in their clarity. The oud at the heart is not wild or animalic but refined, aged, distilled to its purest woody facet and framed by Atlas cedarwood. The base is disarmingly clean: white musk and a breath of ambergris that sits close to the skin. This is oud for the minimalist, the editor, the person who believes luxury should whisper.',
    scentFamily: 'Woody Clean',
    topNotes: ['Calabrian Bergamot', 'Galbanum', 'Lavender'],
    heartNotes: ['Refined Oud', 'Atlas Cedarwood', 'Iris'],
    baseNotes: ['White Musk', 'Ambergris', 'Vetiver'],
    longevity: '8-10 hours',
    sillage: 'Moderate',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: [],
    suitableFor: ['him'],
    images: {
      main: '/images/products/royal-oud/main.jpg',
      gallery: [
        '/images/products/royal-oud/gallery-1.jpg',
        '/images/products/royal-oud/gallery-2.jpg',
        '/images/products/royal-oud/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-sultan', 'silver-smoke', 'oud-al-maliki'],
    featuredCopy: 'Oud, distilled to its most honest form.',
    layeringSuggestion: 'Complement with Midnight Oryx on the collar for added depth in the evening.',
  },

  // ──────────────────────────────────────────────
  // FOR HER
  // ──────────────────────────────────────────────
  {
    slug: 'velvet-rose-and-oud',
    name: 'Velvet Rose & Oud',
    category: 'for-her',
    shortDescription: 'A thousand-petalled Taif rose wrapped in dark oud and dusted with powdered sugar.',
    longDescription:
      'Velvet Rose & Oud is the tension between softness and edge. It opens dewy and bright — Taif rose at its most photorealistic, lifted by a whisper of lychee and pink pepper. Then the oud arrives, not as a wall but as a shadow: dark, textured, almost smoky. Patchouli and praline in the base add a gourmand warmth that makes the whole composition feel like velvet against bare skin. It is romantic without being naive, sensual without trying.',
    scentFamily: 'Floral Oud',
    topNotes: ['Taif Rose', 'Lychee', 'Pink Pepper'],
    heartNotes: ['Oud', 'Peony', 'Raspberry Accord'],
    baseNotes: ['Patchouli', 'Praline', 'Cashmere Musk'],
    longevity: '8-10 hours',
    sillage: 'Moderate to Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['bestseller'],
    suitableFor: ['her'],
    images: {
      main: '/images/products/velvet-rose-and-oud/main.jpg',
      gallery: [
        '/images/products/velvet-rose-and-oud/gallery-1.jpg',
        '/images/products/velvet-rose-and-oud/gallery-2.jpg',
        '/images/products/velvet-rose-and-oud/gallery-3.jpg',
      ],
    },
    relatedProducts: ['midnight-jasmine', 'royal-plum-nectar', 'amber-gilded'],
    featuredCopy: 'Where rose meets its darker, more interesting self.',
    layeringSuggestion: 'Layer with Amber Gilded on the wrists for a warmer, more enveloping trail.',
  },
  {
    slug: 'royal-plum-nectar',
    name: 'Royal Plum Nectar',
    category: 'for-her',
    shortDescription: 'Ripe plum and dark berries lacquered in oud and tonka — decadent, never saccharine.',
    longDescription:
      'Royal Plum Nectar is controlled indulgence. The opening is a burst of ripe Damson plum and blackcurrant, tart and jewel-toned, tempered by a thread of saffron. The heart darkens: Turkish rose, oud, and a honeyed ylang-ylang that adds dimension without weight. The dry-down is where it truly distinguishes itself — tonka bean, sandalwood, and a vanillic amber that clings to fabric for days. This is the fragrance equivalent of a midnight-blue velvet dress.',
    scentFamily: 'Fruity Oud',
    topNotes: ['Damson Plum', 'Blackcurrant', 'Saffron'],
    heartNotes: ['Turkish Rose', 'Oud', 'Ylang-Ylang'],
    baseNotes: ['Tonka Bean', 'Sandalwood', 'Vanillic Amber'],
    longevity: '8-10 hours',
    sillage: 'Moderate to Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['new', 'limited'],
    suitableFor: ['her'],
    images: {
      main: '/images/products/royal-plum-nectar/main.jpg',
      gallery: [
        '/images/products/royal-plum-nectar/gallery-1.jpg',
        '/images/products/royal-plum-nectar/gallery-2.jpg',
        '/images/products/royal-plum-nectar/gallery-3.jpg',
      ],
    },
    relatedProducts: ['velvet-rose-and-oud', 'midnight-jasmine', 'oud-al-maliki'],
    featuredCopy: 'Indulgence, distilled into a single dark note.',
    layeringSuggestion: 'Apply Midnight Jasmine to the hair and Royal Plum Nectar to pulse points for a layered, intoxicating effect.',
  },
  {
    slug: 'midnight-jasmine',
    name: 'Midnight Jasmine',
    category: 'for-her',
    shortDescription: 'Indian jasmine sambac at its most narcotic, grounded by creamy sandalwood and musk.',
    longDescription:
      'Midnight Jasmine captures the flower at its most potent — after dark, when the petals open fully and the scent becomes almost tactile. The opening is green and dewy: neroli and a twist of mandarin that burns off quickly to reveal the heart — an extravagant jasmine sambac absolute, rich and indolic, softened by tuberose and orange blossom. The base is silk: Indian sandalwood, white musk, and a trace of benzoin that rounds every edge. It is unapologetically feminine and entirely modern.',
    scentFamily: 'White Floral',
    topNotes: ['Neroli', 'Mandarin', 'Green Leaf Accord'],
    heartNotes: ['Jasmine Sambac Absolute', 'Tuberose', 'Orange Blossom'],
    baseNotes: ['Indian Sandalwood', 'White Musk', 'Benzoin'],
    longevity: '8-10 hours',
    sillage: 'Moderate',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: [],
    suitableFor: ['her'],
    images: {
      main: '/images/products/midnight-jasmine/main.jpg',
      gallery: [
        '/images/products/midnight-jasmine/gallery-1.jpg',
        '/images/products/midnight-jasmine/gallery-2.jpg',
        '/images/products/midnight-jasmine/gallery-3.jpg',
      ],
    },
    relatedProducts: ['velvet-rose-and-oud', 'royal-plum-nectar', 'amber-gilded'],
    featuredCopy: 'Jasmine after dark. Nothing else.',
    layeringSuggestion: 'Pair with Velvet Rose & Oud on the decolletage for a lush, multidimensional floral.',
  },

  // ──────────────────────────────────────────────
  // UNISEX
  // ──────────────────────────────────────────────
  {
    slug: 'amber-gilded',
    name: 'Amber Gilded',
    category: 'unisex',
    shortDescription: 'Liquid amber and labdanum wrapped in saffron and vanilla — warmth as a wearable material.',
    longDescription:
      'Amber Gilded is the fragrance equivalent of golden hour. The opening is deceptively simple — saffron and a honeyed bergamot that feels sun-warmed on the skin. The heart is where complexity arrives: labdanum, oud, and a whisper of orris root that adds a suede-like powderiness. The base is enveloping and long: Madagascan vanilla, amber, and a clean musk that keeps the composition from tipping into sweetness. It wears identically well on any skin, in any season. This is your signature, if you are brave enough to commit.',
    scentFamily: 'Amber Oriental',
    topNotes: ['Saffron', 'Honeyed Bergamot', 'Cardamom'],
    heartNotes: ['Labdanum', 'Oud', 'Orris Root'],
    baseNotes: ['Madagascan Vanilla', 'Amber', 'Clean Musk'],
    longevity: '10-12 hours',
    sillage: 'Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['bestseller'],
    suitableFor: ['him', 'her', 'unisex'],
    images: {
      main: '/images/products/amber-gilded/main.jpg',
      gallery: [
        '/images/products/amber-gilded/gallery-1.jpg',
        '/images/products/amber-gilded/gallery-2.jpg',
        '/images/products/amber-gilded/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-maliki', 'imperial-saffron', 'velvet-rose-and-oud'],
    featuredCopy: 'Golden hour, bottled.',
    layeringSuggestion: 'Layer with Royal Oud for a cleaner, more structured amber experience.',
  },
  {
    slug: 'oud-al-maliki',
    name: 'Oud Al Maliki',
    category: 'unisex',
    shortDescription: 'A heritage oud composition — Cambodian heartwood, aged rose, and smoky incense.',
    longDescription:
      'Oud Al Maliki is an act of preservation. It opens with the sharp, medicinal bite of Cambodian oud — unpolished and authentic — tempered by a dried rose petal accord and a wisp of cumin that nods to traditional attar. The heart deepens into incense and cypriol, earthy and grounding, while the base offers a slow, smoky fade: aged sandalwood, deer musk accord, and a resinous myrrh. This is not a modern reinterpretation. This is oud as it has been worn for centuries, refined for today.',
    scentFamily: 'Traditional Oud',
    topNotes: ['Cambodian Oud', 'Dried Rose Petals', 'Cumin'],
    heartNotes: ['Incense', 'Cypriol', 'Geranium'],
    baseNotes: ['Aged Sandalwood', 'Deer Musk Accord', 'Myrrh'],
    longevity: '12+ hours',
    sillage: 'Strong',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['rare'],
    suitableFor: ['him', 'her', 'unisex'],
    images: {
      main: '/images/products/oud-al-maliki/main.jpg',
      gallery: [
        '/images/products/oud-al-maliki/gallery-1.jpg',
        '/images/products/oud-al-maliki/gallery-2.jpg',
        '/images/products/oud-al-maliki/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-sultan', 'amber-gilded', 'silver-smoke'],
    featuredCopy: 'Heritage oud, uncompromised.',
    layeringSuggestion: 'Pair with Amber Gilded on the chest for a rich, incense-forward layering.',
  },
  {
    slug: 'silver-smoke',
    name: 'Silver Smoke',
    category: 'unisex',
    shortDescription: 'Cool incense, white cedar, and metallic aldehydes — modern minimalism in fragrance form.',
    longDescription:
      'Silver Smoke is the anti-oud oud. It opens cold and sharp: aldehydes, a metallic iris, and a burst of black pepper that feels almost electric. The heart shifts into territory that is harder to name — white cedar, a sheer oud distillate stripped of its animalic edges, and a pale, silvery incense. The base is bone-dry: ambroxan, grey musk, and a vetiver that reads more mineral than green. It is the fragrance for people who find most oud compositions too loud, too sweet, or too predictable.',
    scentFamily: 'Woody Mineral',
    topNotes: ['Aldehydes', 'Metallic Iris', 'Black Pepper'],
    heartNotes: ['White Cedar', 'Sheer Oud', 'Silver Incense'],
    baseNotes: ['Ambroxan', 'Grey Musk', 'Mineral Vetiver'],
    longevity: '8-10 hours',
    sillage: 'Moderate',
    prices: { '10ml': 499, '50ml': 1599, '100ml': 2999 },
    badges: ['new'],
    suitableFor: ['him', 'her', 'unisex'],
    images: {
      main: '/images/products/silver-smoke/main.jpg',
      gallery: [
        '/images/products/silver-smoke/gallery-1.jpg',
        '/images/products/silver-smoke/gallery-2.jpg',
        '/images/products/silver-smoke/gallery-3.jpg',
      ],
    },
    relatedProducts: ['royal-oud', 'midnight-oryx', 'oud-al-maliki'],
    featuredCopy: 'Silence has a scent. This is it.',
    layeringSuggestion: 'Layer with Midnight Oryx at the neck for a darker, more nocturnal interpretation.',
  },

  // ──────────────────────────────────────────────
  // GIFTING
  // ──────────────────────────────────────────────
  {
    slug: 'discovery-coffret',
    name: 'Discovery Coffret',
    category: 'gifting',
    shortDescription: 'Ten curated 10ml vials in a handcrafted presentation box — the complete THE786 experience.',
    longDescription:
      'The Discovery Coffret is an invitation to explore the full THE786 collection without commitment to a single signature. Ten hand-filled 10ml travel sprays, each containing the same concentration and quality as our full-size bottles, arrive nestled in a matte-black presentation box with magnetic closure and embossed gold detailing. From the animalic depth of Oud Al Maliki to the crystalline minimalism of Silver Smoke, this is a journey through every facet of modern luxury fragrance. The perfect gift for someone who values curation over convention.',
    scentFamily: 'Curated Collection',
    topNotes: [],
    heartNotes: [],
    baseNotes: [],
    longevity: 'Varies by fragrance',
    sillage: 'Varies by fragrance',
    prices: { '1set': 2999 },
    badges: ['gifting', 'bestseller'],
    suitableFor: ['him', 'her', 'unisex', 'gifting'],
    images: {
      main: '/images/products/discovery-coffret/main.jpg',
      gallery: [
        '/images/products/discovery-coffret/gallery-1.jpg',
        '/images/products/discovery-coffret/gallery-2.jpg',
        '/images/products/discovery-coffret/gallery-3.jpg',
      ],
    },
    relatedProducts: ['oud-al-sultan', 'velvet-rose-and-oud', 'amber-gilded'],
    featuredCopy: 'Ten signatures. One unforgettable box.',
    layeringSuggestion: 'Use the coffret to experiment with pairings — we recommend starting with Amber Gilded and Silver Smoke.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
