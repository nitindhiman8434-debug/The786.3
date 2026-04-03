import Link from 'next/link';

export default function DiscoveryCoffret() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-midnight via-wine/10 to-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="relative glass-card overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,151,43,0.06),transparent_60%)]" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto img-placeholder bg-gradient-to-br from-midnight-lighter to-gold/5 overflow-hidden">
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 border border-gold/15 rotate-45 mb-4" />
                <span className="text-gold/20 text-xs uppercase tracking-[0.3em]">
                  Coffret Set
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-gold uppercase tracking-[0.3em] text-xs">
                The Gift of Discovery
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-light leading-tight">
                Discovery Coffret
              </h2>
              <p className="text-champagne/50 leading-relaxed">
                Five signature scents in one exquisitely presented collection.
                The definitive introduction to the THE786 universe — for yourself
                or someone who deserves the extraordinary.
              </p>

              <ul className="space-y-3 text-sm">
                {[
                  '5 curated miniatures from the full collection',
                  'Hand-finished luxury presentation box',
                  'Scent guide with tasting notes',
                  'Complimentary gift wrapping',
                  'Perfect for gifting or personal exploration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-champagne/60">
                    <span className="text-gold mt-0.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/discovery"
                  className="inline-flex items-center px-8 py-4 bg-gold text-midnight font-medium tracking-wide hover:bg-gold-light transition-all duration-300 text-sm uppercase"
                >
                  Explore Coffret
                </Link>
                <p className="text-champagne/40 text-sm">
                  <span className="text-gold text-lg font-serif">₹2,999</span>
                  <br />
                  <span className="text-xs">COD Available</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
