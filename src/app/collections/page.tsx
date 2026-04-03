import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the complete THE786 fragrance collection. Premium oud, floral, amber, and woody perfumes crafted for modern India.",
};

const scentFamilies = ["Oud", "Floral", "Amber", "Woody", "Spicy", "Fresh"];

const products = [
  {
    slug: "oud-al-sultan",
    name: "Oud Al Sultan",
    category: "for-him",
    categoryLabel: "For Him",
    shortDescription: "A commanding oud composition with smoky leather and aged sandalwood.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Oud",
  },
  {
    slug: "midnight-oryx",
    name: "Midnight Oryx",
    category: "for-him",
    categoryLabel: "For Him",
    shortDescription: "Dark musk and vetiver wrapped in a veil of blackcurrant and incense.",
    price: 1599,
    badges: [],
    scentFamily: "Woody",
  },
  {
    slug: "imperial-saffron",
    name: "Imperial Saffron",
    category: "for-him",
    categoryLabel: "For Him",
    shortDescription: "Precious saffron threads interlaced with warm amber and royal oud.",
    price: 1599,
    badges: ["New"],
    scentFamily: "Spicy",
  },
  {
    slug: "royal-oud",
    name: "Royal Oud",
    category: "for-him",
    categoryLabel: "For Him",
    shortDescription: "Pure Assamese oud anchored in cedarwood and a whisper of rose absolute.",
    price: 1599,
    badges: [],
    scentFamily: "Oud",
  },
  {
    slug: "velvet-rose-oud",
    name: "Velvet Rose & Oud",
    category: "for-her",
    categoryLabel: "For Her",
    shortDescription: "Turkish rose petals entwined with rare oud and velvety praline accord.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Floral",
  },
  {
    slug: "royal-plum-nectar",
    name: "Royal Plum Nectar",
    category: "for-her",
    categoryLabel: "For Her",
    shortDescription: "Ripe plum and black orchid over a bed of tonka bean and amber resin.",
    price: 1599,
    badges: [],
    scentFamily: "Amber",
  },
  {
    slug: "midnight-jasmine",
    name: "Midnight Jasmine",
    category: "for-her",
    categoryLabel: "For Her",
    shortDescription: "Night-blooming jasmine sambac with white musk and powdered iris.",
    price: 1599,
    badges: ["New"],
    scentFamily: "Floral",
  },
  {
    slug: "amber-gilded",
    name: "Amber Gilded",
    category: "unisex",
    categoryLabel: "Unisex",
    shortDescription: "Liquid amber and benzoin resin gilded with saffron and sandalwood cream.",
    price: 1599,
    badges: [],
    scentFamily: "Amber",
  },
  {
    slug: "oud-al-maliki",
    name: "Oud Al Maliki",
    category: "unisex",
    categoryLabel: "Unisex",
    shortDescription: "Heritage oud distilled with frankincense and a breath of wild honey.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Oud",
  },
  {
    slug: "silver-smoke",
    name: "Silver Smoke",
    category: "unisex",
    categoryLabel: "Unisex",
    shortDescription: "Cool metallic accord meets birch tar, lavender, and white cedar.",
    price: 1599,
    badges: [],
    scentFamily: "Fresh",
  },
];

function BadgeChip({ badge }: { badge: string }) {
  const bgClass =
    badge === "Bestseller"
      ? "bg-gold/90 text-midnight"
      : badge === "New"
        ? "bg-crimson/90 text-ivory"
        : "bg-plum/80 text-ivory";
  return (
    <span
      className={`absolute top-3 left-3 z-20 px-3 py-1 text-[10px] uppercase tracking-widest font-medium ${bgClass}`}
    >
      {badge}
    </span>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-sm">
        <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter to-plum/15 group-hover:to-plum/25 transition-all duration-700">
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="w-8 h-8 border border-plum/15 rotate-45 group-hover:border-gold/30 transition-colors duration-500" />
          </div>
        </div>
        {product.badges.map((badge) => (
          <BadgeChip key={badge} badge={badge} />
        ))}
      </div>
      <p className="text-gold/50 text-xs uppercase tracking-widest">
        {product.categoryLabel}
      </p>
      <h3 className="font-serif text-xl text-ivory group-hover:text-champagne transition-colors mt-1">
        {product.name}
      </h3>
      <p className="text-champagne/40 text-sm mt-1 line-clamp-2">
        {product.shortDescription}
      </p>
      <p className="text-champagne/60 text-sm mt-2">
        From <span className="text-gold">₹{product.price.toLocaleString("en-IN")}</span>
      </p>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-champagne/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/70">Collections</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/10 via-midnight to-midnight" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in">
            The House of THE786
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight animate-fade-in">
            The Complete Collection
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-champagne/50 text-lg leading-relaxed animate-fade-in">
            Ten singular compositions and one Discovery Coffret. Each fragrance
            is a chapter in a story told through oud, rare florals, and the
            amber light of evening courtyards.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-12" />
        </div>
      </section>

      {/* Scent Family Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <span className="text-champagne/30 text-xs uppercase tracking-widest mr-2">
            Scent Family
          </span>
          {scentFamilies.map((family) => (
            <button
              key={family}
              className="px-4 py-1.5 text-xs uppercase tracking-wider border border-plum/30 text-champagne/50 hover:border-gold/50 hover:text-gold transition-all duration-300 rounded-full"
            >
              {family}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}

          {/* Discovery Coffret Card */}
          <Link href="/discovery" className="group block">
            <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-sm">
              <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter via-plum/20 to-gold/10 group-hover:to-gold/20 transition-all duration-700">
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-10 h-10 border border-gold/20 rotate-45 group-hover:border-gold/40 transition-colors duration-500" />
                  <p className="text-gold/40 text-[10px] uppercase tracking-widest mt-2">
                    Gift Set
                  </p>
                </div>
              </div>
              <span className="absolute top-3 left-3 z-20 px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/90 text-midnight font-medium">
                Gift Set
              </span>
            </div>
            <p className="text-gold/50 text-xs uppercase tracking-widest">
              Discovery
            </p>
            <h3 className="font-serif text-xl text-ivory group-hover:text-champagne transition-colors mt-1">
              Discovery Coffret
            </h3>
            <p className="text-champagne/40 text-sm mt-1 line-clamp-2">
              Five signature fragrances in 10ml travel vials. The perfect
              introduction to the house.
            </p>
            <p className="text-champagne/60 text-sm mt-2">
              <span className="text-gold">₹2,999</span>
            </p>
          </Link>
        </div>
      </section>

      {/* Editorial Bottom */}
      <section className="relative">
        <div className="section-divider" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-gold/50 text-xs uppercase tracking-[0.3em] mb-6">
            The Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug">
            Every Fragrance Tells a Story
          </h2>
          <p className="mt-6 text-champagne/40 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            THE786 draws from the perfume traditions of Arabia, Persia, and the
            Indian subcontinent&mdash;but refuses to be bound by them. Our ten
            compositions exist at the intersection of heritage and modernity:
            rare oud and saffron reimagined through a contemporary lens, jasmine
            and rose given unexpected edges, amber warmed by the memory of
            courtyard fires.
          </p>
          <p className="mt-4 text-champagne/30 text-base leading-relaxed max-w-2xl mx-auto">
            Each scent is concentrated, long-wearing, and designed to evolve on
            your skin across the hours. No shortcuts. No synthetic fillers. Only
            the craft.
          </p>
        </div>
        <div className="section-divider" />
      </section>
    </>
  );
}
