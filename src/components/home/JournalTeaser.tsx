import Link from 'next/link';

export default function JournalTeaser() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — editorial atmospheric scene */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Base layered gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-midnight via-plum/40 to-wine/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(75,30,90,0.5),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(83,19,30,0.35),transparent_55%)]" />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,11,20,0.7))]" />

            {/* Open book shape */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-56 sm:w-56 sm:h-64">
              {/* Left page */}
              <div
                className="absolute left-0 top-0 w-1/2 h-full origin-right"
                style={{
                  background: 'linear-gradient(105deg, rgba(232,215,183,0.07) 0%, rgba(232,215,183,0.03) 60%, rgba(201,151,43,0.08) 100%)',
                  borderLeft: '1px solid rgba(201,151,43,0.15)',
                  borderTop: '1px solid rgba(201,151,43,0.1)',
                  borderBottom: '1px solid rgba(201,151,43,0.1)',
                  transform: 'perspective(400px) rotateY(12deg)',
                }}
              >
                {/* Text lines on left page */}
                <div className="pt-6 px-3 space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`l-${i}`}
                      className="h-px bg-gradient-to-r from-gold/20 via-champagne/10 to-transparent"
                      style={{ width: `${55 + Math.sin(i * 1.3) * 25}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Right page */}
              <div
                className="absolute right-0 top-0 w-1/2 h-full origin-left"
                style={{
                  background: 'linear-gradient(255deg, rgba(232,215,183,0.07) 0%, rgba(232,215,183,0.03) 60%, rgba(201,151,43,0.08) 100%)',
                  borderRight: '1px solid rgba(201,151,43,0.15)',
                  borderTop: '1px solid rgba(201,151,43,0.1)',
                  borderBottom: '1px solid rgba(201,151,43,0.1)',
                  transform: 'perspective(400px) rotateY(-12deg)',
                }}
              >
                {/* Text lines on right page */}
                <div className="pt-6 px-3 space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`r-${i}`}
                      className="h-px bg-gradient-to-l from-gold/20 via-champagne/10 to-transparent"
                      style={{ width: `${50 + Math.cos(i * 1.5) * 25}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Book spine */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold/25 via-gold/10 to-gold/25" />
            </div>

            {/* Quill / pen silhouette */}
            <div className="absolute right-[18%] top-[18%]" style={{ transform: 'rotate(-35deg)' }}>
              {/* Pen shaft */}
              <div className="w-px h-28 bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
              {/* Nib (triangle) */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '3px solid transparent',
                  borderRight: '3px solid transparent',
                  borderTop: '10px solid rgba(201,151,43,0.35)',
                }}
              />
              {/* Feather lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-10">
                <div className="absolute top-1 left-0 w-full h-px bg-gold/15 -rotate-12 origin-right" />
                <div className="absolute top-3 left-0 w-full h-px bg-gold/12 -rotate-6 origin-right" />
                <div className="absolute top-5 left-0 w-full h-px bg-gold/10 rotate-0" />
                <div className="absolute top-7 left-0 w-full h-px bg-gold/12 rotate-6 origin-right" />
              </div>
            </div>

            {/* Flowing decorative gold lines at angles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[15%] left-[8%] w-32 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent rotate-12" />
              <div className="absolute bottom-[25%] right-[10%] w-24 h-px bg-gradient-to-r from-transparent via-gold/12 to-transparent -rotate-6" />
              <div className="absolute top-[60%] left-[5%] w-20 h-px bg-gradient-to-r from-transparent via-champagne/10 to-transparent rotate-3" />
              <div className="absolute bottom-[15%] left-[20%] w-28 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent -rotate-12" />
            </div>

            {/* Floating ink dot particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: '12%', left: '20%', size: 3, opacity: 0.35 },
                { top: '25%', left: '72%', size: 2, opacity: 0.25 },
                { top: '40%', left: '15%', size: 2.5, opacity: 0.2 },
                { top: '55%', left: '80%', size: 2, opacity: 0.3 },
                { top: '70%', left: '35%', size: 3, opacity: 0.15 },
                { top: '80%', left: '60%', size: 2, opacity: 0.25 },
                { top: '18%', left: '50%', size: 1.5, opacity: 0.2 },
                { top: '65%', left: '85%', size: 2, opacity: 0.18 },
                { top: '35%', left: '45%', size: 1.5, opacity: 0.22 },
                { top: '88%', left: '25%', size: 2.5, opacity: 0.15 },
              ].map((dot, i) => (
                <div
                  key={`ink-${i}`}
                  className="absolute rounded-full bg-plum-light"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    width: dot.size,
                    height: dot.size,
                    opacity: dot.opacity,
                  }}
                />
              ))}
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/15" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/15" />

            {/* Subtle border */}
            <div className="absolute inset-0 border border-plum/15 rounded-sm" />
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
