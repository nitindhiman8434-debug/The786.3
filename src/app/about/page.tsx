import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "Discover the story behind THE786 — a modern Indian luxury perfume house where ancestral craft meets Arabic-inspired artistry.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-midnight">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-champagne/50">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/80">About</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/20 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/10 via-transparent to-plum/10" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ivory mb-8 leading-tight">
            The Soul of{" "}
            <span className="text-gradient-gold">THE786</span>
          </h1>
          <p className="text-champagne/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Where ancestral Indian craftsmanship meets the mystique of
            Arabic-inspired perfumery — distilled into modern luxury.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 leading-snug">
                Born from a legacy of{" "}
                <span className="text-gradient-gold">rare materials</span> and
                restless curiosity
              </h2>
              <div className="space-y-6 text-champagne/70 leading-relaxed">
                <p>
                  THE786 was founded on a simple conviction: India deserves a
                  perfume house that honours its own aromatic heritage while
                  embracing the grandeur of the wider world. Our founders grew
                  up surrounded by the scent trails of sandalwood workshops and
                  oud distilleries, watching master blenders coax extraordinary
                  beauty from raw bark, petals, and resin.
                </p>
                <p>
                  That childhood immersion became an obsession. We spent years
                  studying the perfumery traditions of Kannauj and Grasse, the
                  attar houses of Lucknow and the oud markets of the Arabian
                  Gulf. Every technique we learned pointed toward the same
                  truth: the finest fragrances are acts of patience.
                </p>
                <p>
                  Today, THE786 is a modern Indian luxury house that draws from
                  Arabic-inspired artistry — the layered complexity of oud, the
                  opulence of rose absolute, the warmth of amber — and fuses it
                  with contemporary sensibility. Our perfumes are made for those
                  who believe scent is not decoration but identity.
                </p>
              </div>
            </div>
            <div className="img-placeholder aspect-[4/5] rounded-lg">
              <span className="text-champagne/20 font-serif text-lg z-10">
                The Atelier
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Craft */}
      <section className="py-20 md:py-28 bg-midnight-light/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-4">
              The Craft
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory">
              Three Pillars of Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="glass-card rounded-lg p-8 text-center group hover:border-gold/30 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-plum/40 to-burgundy/40 flex items-center justify-center">
                <span className="text-gold text-2xl">&#9830;</span>
              </div>
              <h3 className="font-serif text-xl text-gold-light mb-4">
                Rare Ingredients
              </h3>
              <p className="text-champagne/60 leading-relaxed text-sm">
                We source directly from the world&rsquo;s most prized origins — aged
                Assamese oud, Kannauj rose, Mysore sandalwood, Yemeni amber. Every
                raw material is hand-selected and evaluated by our master
                perfumers before it enters the blending atelier.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="glass-card rounded-lg p-8 text-center group hover:border-gold/30 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-plum/40 to-burgundy/40 flex items-center justify-center">
                <span className="text-gold text-2xl">&#10022;</span>
              </div>
              <h3 className="font-serif text-xl text-gold-light mb-4">
                Master Blending
              </h3>
              <p className="text-champagne/60 leading-relaxed text-sm">
                Each composition undergoes months of iterative refinement.
                Our blenders work in small batches, balancing top notes that
                captivate on first encounter with a heart and base that unfold
                over hours, evolving on the skin like a private conversation.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="glass-card rounded-lg p-8 text-center group hover:border-gold/30 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-plum/40 to-burgundy/40 flex items-center justify-center">
                <span className="text-gold text-2xl">&#8734;</span>
              </div>
              <h3 className="font-serif text-xl text-gold-light mb-4">
                Long-Wear Promise
              </h3>
              <p className="text-champagne/60 leading-relaxed text-sm">
                Our Eau de Parfum concentrations are formulated for the Indian
                climate — heat, humidity, and long days. Expect eight to twelve
                hours of projection from a single application, with a sillage
                that lingers in rooms long after you have left.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Bespoke */}
      <section id="bespoke" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="img-placeholder aspect-square rounded-lg order-2 md:order-1">
              <span className="text-champagne/20 font-serif text-lg z-10">
                Bespoke Consultation
              </span>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-4">
                Bespoke Service
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 leading-snug">
                A Fragrance Written{" "}
                <span className="text-gradient-gold">Only for You</span>
              </h2>
              <div className="space-y-6 text-champagne/70 leading-relaxed">
                <p>
                  For the connoisseur who desires something truly singular, our
                  bespoke programme offers a private consultation with our master
                  perfumer. Over the course of several sessions, we map your scent
                  memories, preferences, and personality to craft a one-of-a-kind
                  composition.
                </p>
                <p>
                  The result is a fragrance that exists nowhere else in the world —
                  bottled exclusively for you, with your initials engraved on the
                  flacon. Each bespoke creation is archived in our library, ensuring
                  it can be re-created for years to come.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-8 px-8 py-3 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 rounded text-sm tracking-wider uppercase"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
            Experience the Collection
          </h2>
          <p className="text-champagne/60 mb-10 leading-relaxed">
            Every bottle carries the weight of our obsession with craft, the
            warmth of rare materials, and the quiet confidence of a house that
            lets its perfumes speak.
          </p>
          <Link
            href="/collections"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-midnight font-semibold rounded hover:opacity-90 transition-opacity text-sm tracking-wider uppercase"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
