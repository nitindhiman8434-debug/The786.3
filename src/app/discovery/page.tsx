import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discovery Coffret",
  description:
    "THE786 Discovery Coffret. Five signature fragrances in 10ml travel vials. The perfect gift or introduction to the house.",
};

const includedFragrances = [
  "Oud Al Sultan",
  "Velvet Rose & Oud",
  "Amber Gilded",
  "Midnight Jasmine",
  "Imperial Saffron",
];

const whoItsFor = [
  {
    title: "The Curious",
    description:
      "You know you love fragrance but haven't found your signature yet. Five distinct compositions let you discover your preference.",
  },
  {
    title: "The Gifter",
    description:
      "A gift that feels considered without the guesswork. Let them choose their own signature from five curated options.",
  },
  {
    title: "The Collector",
    description:
      "You already own full bottles and want the travel set for your carry-on, gym bag, or desk drawer.",
  },
];

const trustBadges = [
  { label: "Free Shipping", detail: "On all orders above ₹999" },
  { label: "Gift-Ready", detail: "Premium packaging included" },
  { label: "Authentic", detail: "100% genuine ingredients" },
  { label: "Easy Returns", detail: "7-day return policy" },
];

export default function DiscoveryPage() {
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
          <li className="text-champagne/70">Discovery Coffret</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/15 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in">
            The Gift of Discovery
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight animate-fade-in">
            Discovery Coffret
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-champagne/50 text-lg leading-relaxed animate-fade-in">
            Five signature fragrances, each in a 10ml hand-finished travel vial.
            An invitation to explore the full breadth of THE786&mdash;from
            commanding ouds to delicate florals.
          </p>
          <p className="mt-8 animate-fade-in">
            <span className="font-serif text-4xl md:text-5xl text-gradient-gold">
              ₹2,999
            </span>
          </p>
          <p className="text-champagne/30 text-sm mt-2 animate-fade-in">
            Inclusive of all taxes &middot; Free shipping
          </p>
          <div className="section-divider max-w-xs mx-auto mt-12" />
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter via-plum/15 to-gold/10">
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-16 rounded-sm border border-plum/20 bg-midnight-light/50"
                    />
                  ))}
                </div>
                <p className="text-champagne/20 text-[10px] uppercase tracking-widest mt-4">
                  5 x 10ml Vials
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4">
              What&apos;s Included
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-8">
              Five Chapters, One Box
            </h2>
            <ul className="space-y-4">
              {includedFragrances.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-1.5 h-1.5 bg-gold/60 rotate-45 shrink-0" />
                  <span className="text-champagne/60 text-base group-hover:text-champagne transition-colors">
                    {name}
                  </span>
                  <span className="text-champagne/20 text-xs ml-auto">
                    10ml
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-plum/20">
              <p className="text-champagne/30 text-sm leading-relaxed">
                Each vial features a precision spray mechanism and is housed in
                a magnetic-close presentation box with a linen-textured interior.
                A fragrance guide card is included with tasting notes for each
                composition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Packaging Preview */}
      <section className="relative">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="glass-card rounded-sm p-8 md:p-12 text-center">
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4">
              Gift-Ready Packaging
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-6">
              Unwrapping Is Part of the Experience
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-champagne/40 text-base leading-relaxed">
                Every Discovery Coffret ships in a matte-black magnetic box with
                gold foil embossing. Inside, five vials rest on a bed of
                midnight velvet. A hand-finished wax seal completes the
                presentation. No additional gift wrapping needed.
              </p>
            </div>
            <div className="mt-10 relative aspect-[21/9] max-w-3xl mx-auto overflow-hidden rounded-sm">
              <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter via-plum/10 to-gold/5">
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="w-24 h-16 border border-gold/15 rounded-sm flex items-center justify-center">
                    <div className="w-8 h-8 border border-gold/20 rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 text-center">
          Perfect For
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug text-center mb-12">
          Who Is This For?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whoItsFor.map((persona) => (
            <div
              key={persona.title}
              className="glass-card rounded-sm p-8 text-center"
            >
              <div className="w-10 h-10 border border-plum/30 rotate-45 mx-auto mb-6" />
              <h3 className="font-serif text-xl text-ivory mb-3">
                {persona.title}
              </h3>
              <p className="text-champagne/40 text-sm leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="section-divider" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-4">
            Begin Your Discovery
          </h2>
          <p className="text-champagne/40 text-base mb-8 max-w-xl mx-auto">
            Five fragrances. One beautifully presented box. Whether it&apos;s
            for yourself or someone who deserves something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-gold text-midnight font-medium text-xs uppercase tracking-widest hover:bg-gold-light transition-colors duration-300">
              Add to Cart &mdash; ₹2,999
            </button>
            <Link
              href="/collections"
              className="px-10 py-4 border border-plum/40 text-champagne/60 text-xs uppercase tracking-widest hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="text-center py-6 border border-plum/15 rounded-sm"
            >
              <p className="text-ivory text-sm font-medium">{badge.label}</p>
              <p className="text-champagne/30 text-xs mt-1">{badge.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />
    </>
  );
}
