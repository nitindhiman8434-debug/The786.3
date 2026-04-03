import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unisex",
  description:
    "Gender-fluid luxury fragrances by THE786. Amber, oud, and fresh compositions that transcend convention.",
};

const products = [
  {
    slug: "amber-gilded",
    name: "Amber Gilded",
    shortDescription: "Liquid amber and benzoin resin gilded with saffron and sandalwood cream.",
    price: 1599,
    badges: [],
    scentFamily: "Amber",
  },
  {
    slug: "oud-al-maliki",
    name: "Oud Al Maliki",
    shortDescription: "Heritage oud distilled with frankincense and a breath of wild honey.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Oud",
  },
  {
    slug: "silver-smoke",
    name: "Silver Smoke",
    shortDescription: "Cool metallic accord meets birch tar, lavender, and white cedar.",
    price: 1599,
    badges: [],
    scentFamily: "Fresh",
  },
];

const curatorChoice = products[1]; // Oud Al Maliki

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
      <p className="text-gold/50 text-xs uppercase tracking-widest">Unisex</p>
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

export default function UnisexPage() {
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
          <li className="text-champagne/70">Unisex</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/15 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in">
              The Unisex Collection
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight animate-fade-in">
              Beyond Binary
            </h1>
            <p className="mt-6 text-champagne/50 text-lg leading-relaxed animate-fade-in max-w-xl">
              Three compositions that refuse to be categorised. Built for anyone
              who understands that great fragrance has no gender&mdash;only
              character.
            </p>
            <div className="section-divider max-w-xs mt-12" />
          </div>
        </div>
      </section>

      {/* Curator's Choice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Link
              href={`/products/${curatorChoice.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter via-plum/20 to-gold/10 group-hover:to-gold/15 transition-all duration-700">
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 border border-gold/20 rotate-45 group-hover:border-gold/40 transition-colors duration-500" />
                  </div>
                </div>
                {curatorChoice.badges.map((badge) => (
                  <BadgeChip key={badge} badge={badge} />
                ))}
              </div>
            </Link>
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3">
                Curator&apos;s Choice
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug">
                {curatorChoice.name}
              </h2>
              <p className="text-champagne/40 text-base mt-4 leading-relaxed">
                {curatorChoice.shortDescription}
              </p>
              <p className="text-champagne/50 text-sm mt-3">
                Scent Family:{" "}
                <span className="text-champagne/70">
                  {curatorChoice.scentFamily}
                </span>
              </p>
              <p className="text-champagne/60 text-sm mt-4">
                From{" "}
                <span className="text-gold text-lg font-serif">
                  ₹{curatorChoice.price.toLocaleString("en-IN")}
                </span>
              </p>
              <Link
                href={`/products/${curatorChoice.slug}`}
                className="inline-block mt-6 px-8 py-3 bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest hover:bg-gold/20 transition-all duration-300"
              >
                Explore This Fragrance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-serif text-2xl text-ivory mb-10">
          The Full Unisex Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Bottom */}
      <section className="relative">
        <div className="section-divider" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-gold/50 text-xs uppercase tracking-[0.3em] mb-6">
            A Collector&apos;s Perspective
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug">
            Fragrance as Self-Expression
          </h2>
          <p className="mt-6 text-champagne/40 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The unisex collection exists for connoisseurs who choose fragrance
            based on mood, season, and occasion&mdash;not labels. Amber Gilded
            warms a cold evening. Silver Smoke sharpens a summer afternoon. Oud
            Al Maliki commands any room it enters. Wear them alone or layer them.
            The only rule is that there are none.
          </p>
        </div>
        <div className="section-divider" />
      </section>
    </>
  );
}
