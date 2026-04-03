import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-plum/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(75,30,90,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(122,30,58,0.15),transparent_60%)]" />

      {/* Subtle geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-plum/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-[22%] w-72 h-72 border border-gold/5 rotate-45 hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium">
              THE786
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] text-ivory">
              Anonymous{' '}
              <span className="italic text-champagne">Luxury</span>
              <br />
              with an{' '}
              <span className="text-gradient-gold">Arabic Soul</span>
            </h1>
            <p className="text-champagne/70 text-lg sm:text-xl max-w-lg font-light leading-relaxed">
              Crafted for those who leave a legacy in their wake. Infused with oud,
              rare jasmine, and the mystery of the Midnight Courtyard.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/collections"
                className="inline-flex items-center px-8 py-4 bg-gold text-midnight font-medium tracking-wide hover:bg-gold-light transition-all duration-300 text-sm uppercase"
              >
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 text-sm uppercase tracking-wide"
              >
                Discover Atelier
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-xs text-champagne/40 uppercase tracking-wider">
              <span>Free COD</span>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <span>Pan-India Delivery</span>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <span>Luxury Packaging</span>
            </div>
          </div>

          {/* Right: Hero image area */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] max-w-md ml-auto">
              {/* Main image placeholder */}
              <div className="absolute inset-0 img-placeholder rounded-sm">
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-plum/40">
                  <div className="w-16 h-16 border border-plum/20 rotate-45 mb-4" />
                  <span className="text-xs uppercase tracking-[0.3em]">Hero Image</span>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-gold/10" />
              <div className="absolute -inset-6 border border-plum/5" />
              {/* Glow effect */}
              <div className="absolute -inset-12 bg-[radial-gradient(ellipse,rgba(75,30,90,0.2),transparent_70%)]" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -left-12 glass-card p-6 max-w-[220px]">
              <p className="text-gold text-xs uppercase tracking-widest mb-1">Signature Scent</p>
              <p className="font-serif text-lg text-ivory">Oud Al Sultan</p>
              <p className="text-champagne/50 text-xs mt-1">From ₹499</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  );
}
