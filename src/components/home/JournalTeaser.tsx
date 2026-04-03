import Link from 'next/link';

export default function JournalTeaser() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Real image */}
          <div className="img-container aspect-[4/3] rounded-sm border border-mauve/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=700&q=80"
              alt="Perfume ingredients and botanicals"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right — Content */}
          <div className="space-y-6">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-sans">
              The Curator&apos;s Journal
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl font-light leading-tight">
              Inside the<br />
              <span className="italic text-cream">Midnight Atelier</span>
            </h2>
            <p className="text-cream/50 leading-relaxed max-w-md font-sans">
              Explore the art of perfumery through the lens of THE786. From the ancient oud
              forests of Assam to the jasmine fields of South India — stories of craft,
              obsession, and quiet luxury.
            </p>

            {/* Article previews */}
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-gold/40 font-serif text-2xl mt-1">01</span>
                <div>
                  <Link
                    href="/journal/art-of-oud"
                    className="font-serif text-lg text-pearl group-hover:text-gold-light transition-colors duration-300"
                  >
                    The Art of Oud: From Forest to Flacon
                  </Link>
                  <p className="text-cream/30 text-sm mt-1 font-sans">5 min read</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-gold/40 font-serif text-2xl mt-1">02</span>
                <div>
                  <Link
                    href="/journal/layering-guide"
                    className="font-serif text-lg text-pearl group-hover:text-gold-light transition-colors duration-300"
                  >
                    The Connoisseur&apos;s Guide to Layering
                  </Link>
                  <p className="text-cream/30 text-sm mt-1 font-sans">4 min read</p>
                </div>
              </div>
            </div>

            <Link
              href="/journal"
              className="inline-flex items-center text-gold text-sm font-sans uppercase tracking-widest hover:tracking-[0.2em] transition-all duration-500 pt-4"
            >
              Read the Journal &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
