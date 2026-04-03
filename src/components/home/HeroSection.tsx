'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(61,43,78,0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(139,58,98,0.1),transparent_60%)]" />

      {/* Floating particles */}
      <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 rounded-full bg-gold/30 animate-pulse" />
      <div
        className="absolute top-[30%] left-[10%] w-2 h-2 rounded-full bg-mauve/40 animate-pulse"
        style={{ animationDelay: '0.8s' }}
      />
      <div
        className="absolute top-[55%] right-[35%] w-1 h-1 rounded-full bg-gold/25 animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-mauve/30 animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-[40%] right-[12%] w-1 h-1 rounded-full bg-gold-light/20 animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-sans font-medium">
              THE786 &middot; EST. 2024
            </p>

            {/* Heading */}
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-light leading-[0.95]">
              <span className="text-pearl">Wear Your</span>
              <br />
              <span className="italic text-gradient-gold">Legacy</span>
            </h1>

            {/* Body */}
            <p className="text-cream/60 text-lg max-w-md font-sans font-light leading-relaxed">
              Premium long-wear perfumes infused with oud, rare jasmine, and
              the mystery of the Midnight Courtyard. Crafted for modern India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/collections"
                className="btn-gold inline-flex items-center px-8 py-4 text-sm uppercase tracking-wide"
              >
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="btn-outline inline-flex items-center px-8 py-4 text-sm uppercase tracking-wide"
              >
                Our Story
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-cream/30 text-xs uppercase tracking-wider pt-4">
              Free COD &middot; Pan-India Delivery &middot; Luxury Packaging
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative hidden lg:block">
            <div className="relative">
              {/* Image */}
              <div className="img-container aspect-[4/5] rounded-sm border-b-2 border-gold">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
                  alt="THE786 luxury perfume collection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-5 max-w-[210px] rounded-sm">
                {/* Gold diamond accent */}
                <div className="w-3 h-3 rotate-45 bg-gold mb-3" />
                <p className="text-gold text-xs uppercase tracking-widest mb-1 font-sans">
                  Signature Scent
                </p>
                <p className="font-serif text-lg text-pearl">Oud Al Sultan</p>
                <p className="text-cream/50 text-xs mt-1 font-sans">From &#8377;499</p>
              </div>
            </div>
          </div>

          {/* Mobile: show smaller image */}
          <div className="lg:hidden relative">
            <div className="img-container aspect-[3/2] rounded-sm border-b-2 border-gold">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
                alt="THE786 luxury perfume collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
