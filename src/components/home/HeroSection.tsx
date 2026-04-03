import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-plum/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(75,30,90,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(122,30,58,0.15),transparent_60%)]" />

      {/* Subtle geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-plum/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-[22%] w-72 h-72 border border-gold/5 rotate-45 hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          {/* Right: Perfume Bottle CSS Art */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            {/* Glow behind bottle */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,151,43,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,30,90,0.15),transparent_50%)]" />

            {/* Perfume Bottle */}
            <div className="relative">
              {/* Cap */}
              <div className="mx-auto w-8 h-10 bg-gradient-to-b from-gold via-gold-dark to-gold-dark rounded-t-sm relative z-10" />
              {/* Neck */}
              <div className="mx-auto w-4 h-8 bg-gradient-to-b from-gold-dark/80 to-plum/40 relative z-10" />
              {/* Shoulder */}
              <div className="mx-auto w-32 h-4 bg-gradient-to-b from-plum/40 to-midnight-lighter rounded-t-lg relative z-10"
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}} />
              {/* Body */}
              <div className="mx-auto w-32 h-56 relative z-10 rounded-b-lg overflow-hidden"
                   style={{background: 'linear-gradient(135deg, #1A1520, #4B1E5A 30%, #241E2C 50%, #4B1E5A 70%, #1A1520)'}}>
                {/* Glass reflection */}
                <div className="absolute left-3 top-6 w-[1px] h-32 bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />
                <div className="absolute left-6 top-10 w-[1px] h-24 bg-gradient-to-b from-transparent via-champagne/10 to-transparent" />
                {/* Liquid level */}
                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-wine/60 via-burgundy/40 to-transparent" />
                {/* Gold label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-16 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold/60 font-serif text-[10px] tracking-[0.3em] uppercase">THE786</span>
                </div>
                {/* Bottom reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gold/5 to-transparent" />
              </div>
              {/* Base shadow */}
              <div className="mx-auto w-36 h-3 bg-gradient-to-b from-midnight-lighter to-transparent rounded-full opacity-50 blur-sm mt-1" />

              {/* Shadow/reflection on surface */}
              <div className="mx-auto w-24 h-1 bg-gold/10 rounded-full blur-md mt-2" />
            </div>

            {/* Floating scent particles */}
            <div className="absolute top-16 right-20 w-2 h-2 rounded-full bg-gold/30 animate-pulse" />
            <div className="absolute top-28 right-12 w-1.5 h-1.5 rounded-full bg-champagne/20 animate-pulse" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-20 left-16 w-1 h-1 rounded-full bg-gold/20 animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-32 right-16 w-2 h-2 rounded-full bg-plum/30 animate-pulse" style={{animationDelay: '1.5s'}} />
            <div className="absolute top-40 left-12 w-1.5 h-1.5 rounded-full bg-burgundy/30 animate-pulse" style={{animationDelay: '0.7s'}} />
            <div className="absolute bottom-24 left-20 w-1 h-1 rounded-full bg-gold/25 animate-pulse" style={{animationDelay: '1.2s'}} />
            <div className="absolute top-12 left-1/2 w-1 h-1 rounded-full bg-champagne/15 animate-pulse" style={{animationDelay: '2s'}} />

            {/* Decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-gold/[0.06] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-plum/[0.08] rounded-full" />

            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 glass-card p-5 max-w-[200px]">
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
