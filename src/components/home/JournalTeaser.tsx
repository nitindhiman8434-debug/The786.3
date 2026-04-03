import Link from 'next/link';

export default function JournalTeaser() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] img-placeholder bg-gradient-to-br from-midnight-lighter to-plum/15 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 border border-plum/15 rotate-45" />
            </div>
            <div className="absolute inset-0 border border-plum/10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-sans">
              The Curator&apos;s Journal
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-light leading-tight">
              Inside the<br />
              <span className="italic text-champagne">Midnight Atelier</span>
            </h2>
            <p className="text-champagne/50 leading-relaxed max-w-md">
              Explore the art of perfumery through the lens of THE786. From the ancient oud
              forests of Assam to the jasmine fields of South India — stories of craft,
              obsession, and quiet luxury.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-gold/40 font-serif text-2xl mt-1">01</span>
                <div>
                  <Link href="/journal/art-of-oud" className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors">
                    The Art of Oud: From Forest to Flacon
                  </Link>
                  <p className="text-champagne/30 text-sm mt-1">5 min read</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-gold/40 font-serif text-2xl mt-1">02</span>
                <div>
                  <Link href="/journal/layering-guide" className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors">
                    The Connoisseur&apos;s Guide to Layering
                  </Link>
                  <p className="text-champagne/30 text-sm mt-1">4 min read</p>
                </div>
              </div>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center text-gold text-sm uppercase tracking-widest hover:tracking-[0.2em] transition-all duration-500 pt-4"
            >
              Read the Journal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
