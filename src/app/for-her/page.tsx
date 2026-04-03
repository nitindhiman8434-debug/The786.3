import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Her",
  description:
    "Feminine luxury fragrances by THE786. Rose, jasmine, and oud compositions of extraordinary depth and grace.",
};

const products = [
  {
    slug: "velvet-rose-oud",
    name: "Velvet Rose & Oud",
    shortDescription: "Turkish rose petals entwined with rare oud and velvety praline accord.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Floral",
  },
  {
    slug: "royal-plum-nectar",
    name: "Royal Plum Nectar",
    shortDescription: "Ripe plum and black orchid over a bed of tonka bean and amber resin.",
    price: 1599,
    badges: [],
    scentFamily: "Amber",
  },
  {
    slug: "midnight-jasmine",
    name: "Midnight Jasmine",
    shortDescription: "Night-blooming jasmine sambac with white musk and powdered iris.",
    price: 1599,
    badges: ["New"],
    scentFamily: "Floral",
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

function ProductCard({ product }: { product: (typeof products)[number] }) {
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
      <p className="text-gold/50 text-xs uppercase tracking-widest">For Her</p>
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

export default function ForHerPage() {
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
          <li className="text-champagne/70">For Her</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/20 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in">
              The Feminine Collection
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight animate-fade-in">
              Veiled in Velvet
            </h1>
            <p className="mt-6 text-champagne/50 text-lg leading-relaxed animate-fade-in max-w-xl">
              Three compositions of extraordinary depth. Turkish rose, midnight
              jasmine, and black orchid&mdash;layered over oud and amber to
              create fragrances that feel like a second skin.
            </p>
            <div className="section-divider max-w-xs mt-12" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Bottom */}
      <section className="relative">
        <div className="section-divider" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold/50 text-xs uppercase tracking-[0.3em] mb-4">
                The Feminine Tradition
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug">
                Grace with an Edge
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-champagne/40 text-base leading-relaxed">
                Our feminine collection honours the women who wore attar in
                their hair and jasmine garlands at their wrists&mdash;but
                translates that heritage into a modern, long-wearing format
                that moves with you from morning meetings to midnight dinners.
              </p>
              <p className="text-champagne/30 text-base leading-relaxed">
                Each composition balances softness with structure. The florals
                are never saccharine; the oud is never overwhelming. The result
                is a fragrance wardrobe that feels intimate, confident, and
                undeniably luxurious.
              </p>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>
    </>
  );
}
