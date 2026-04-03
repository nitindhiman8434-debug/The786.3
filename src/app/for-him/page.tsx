import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Him",
  description:
    "Masculine luxury fragrances by THE786. Commanding oud, saffron, and leather compositions for the modern man.",
};

const products = [
  {
    slug: "oud-al-sultan",
    name: "Oud Al Sultan",
    shortDescription: "A commanding oud composition with smoky leather and aged sandalwood.",
    price: 1599,
    badges: ["Bestseller"],
    scentFamily: "Oud",
  },
  {
    slug: "midnight-oryx",
    name: "Midnight Oryx",
    shortDescription: "Dark musk and vetiver wrapped in a veil of blackcurrant and incense.",
    price: 1599,
    badges: [],
    scentFamily: "Woody",
  },
  {
    slug: "imperial-saffron",
    name: "Imperial Saffron",
    shortDescription: "Precious saffron threads interlaced with warm amber and royal oud.",
    price: 1599,
    badges: ["New"],
    scentFamily: "Spicy",
  },
  {
    slug: "royal-oud",
    name: "Royal Oud",
    shortDescription: "Pure Assamese oud anchored in cedarwood and a whisper of rose absolute.",
    price: 1599,
    badges: [],
    scentFamily: "Oud",
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
      <p className="text-gold/50 text-xs uppercase tracking-widest">For Him</p>
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

export default function ForHimPage() {
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
          <li className="text-champagne/70">For Him</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wine/20 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in">
              The Masculine Collection
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight animate-fade-in">
              Composed for Authority
            </h1>
            <p className="mt-6 text-champagne/50 text-lg leading-relaxed animate-fade-in max-w-xl">
              Four compositions that command attention without asking for it.
              Built on rare oud, aged leather, and the kind of confidence that
              doesn&apos;t need to announce itself.
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
                The Masculine Code
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug">
                Strength in Restraint
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-champagne/40 text-base leading-relaxed">
                The men&apos;s collection is rooted in the oud traditions of the
                Arabian Peninsula&mdash;deep, smoky, and unyielding&mdash;but
                refined for the modern world. These are not fragrances that
                shout. They linger in a room long after you&apos;ve left it.
              </p>
              <p className="text-champagne/30 text-base leading-relaxed">
                Each composition uses naturally aged oud, ethically sourced
                saffron, and leather accords developed over months. The result
                is a sillage that feels both ancient and effortlessly
                contemporary.
              </p>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>
    </>
  );
}
