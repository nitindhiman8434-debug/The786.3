import Link from 'next/link';

export default function DiscoveryCoffret() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-obsidian via-rose/5 to-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
            {/* Left — Real image */}
            <div className="img-container aspect-square overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=700&q=80"
                alt="Luxury gift box presentation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-sans">
                The Gift of Discovery
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-pearl font-light leading-tight">
                Discovery Coffret
              </h2>
              <p className="text-cream/50 leading-relaxed font-sans">
                Five signature scents in one exquisitely presented collection.
                The definitive introduction to the THE786 universe — for yourself
                or someone who deserves the extraordinary.
              </p>

              <ul className="space-y-3 text-sm font-sans">
                {[
                  '5 curated miniatures from the full collection',
                  'Hand-finished luxury presentation box',
                  'Scent guide with tasting notes',
                  'Complimentary gift wrapping',
                  'Perfect for gifting or personal exploration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream/60">
                    <span className="text-gold mt-0.5">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/discovery"
                  className="btn-gold inline-flex items-center px-8 py-4 text-sm font-sans uppercase tracking-wide"
                >
                  Explore Coffret
                </Link>
                <p className="text-cream/40 text-sm font-sans">
                  <span className="text-gold text-lg font-serif">&#8377;2,999</span>
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
