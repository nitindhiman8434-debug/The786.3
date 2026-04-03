import Link from 'next/link';

const bottles = [
  { height: 44, width: 14, neckH: 10, color: 'rgba(83,19,30,0.8)', capColor: 'rgba(201,151,43,0.5)' },
  { height: 52, width: 12, neckH: 12, color: 'rgba(75,30,90,0.8)', capColor: 'rgba(201,151,43,0.45)' },
  { height: 56, width: 16, neckH: 8, color: 'rgba(122,30,58,0.8)', capColor: 'rgba(201,151,43,0.55)' },
  { height: 48, width: 13, neckH: 11, color: 'rgba(201,151,43,0.35)', capColor: 'rgba(201,151,43,0.6)' },
  { height: 42, width: 15, neckH: 9, color: 'rgba(15,11,20,0.9)', capColor: 'rgba(201,151,43,0.5)' },
];

const sparkles = [
  { top: '15%', left: '20%', size: 2.5, opacity: 0.5 },
  { top: '22%', left: '75%', size: 2, opacity: 0.35 },
  { top: '30%', left: '45%', size: 1.5, opacity: 0.4 },
  { top: '18%', left: '55%', size: 2, opacity: 0.3 },
  { top: '70%', left: '30%', size: 2, opacity: 0.25 },
  { top: '75%', left: '65%', size: 1.5, opacity: 0.35 },
  { top: '10%', left: '38%', size: 2, opacity: 0.28 },
  { top: '82%', left: '50%', size: 1.5, opacity: 0.22 },
  { top: '25%', left: '85%', size: 2, opacity: 0.3 },
  { top: '60%', left: '15%', size: 1.5, opacity: 0.25 },
];

export default function DiscoveryCoffret() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-midnight via-wine/10 to-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="relative glass-card overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,151,43,0.06),transparent_60%)]" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
            {/* Image — CSS art coffret */}
            <div className="relative aspect-square lg:aspect-auto overflow-hidden flex items-center justify-center min-h-[320px]">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-lighter via-midnight to-midnight-light" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,151,43,0.06),transparent_70%)]" />

              {/* Golden sparkle dots */}
              <div className="absolute inset-0 pointer-events-none">
                {sparkles.map((s, i) => (
                  <div
                    key={`sparkle-${i}`}
                    className="absolute rounded-full bg-gold"
                    style={{
                      top: s.top,
                      left: s.left,
                      width: s.size,
                      height: s.size,
                      opacity: s.opacity,
                    }}
                  />
                ))}
              </div>

              {/* Presentation box + bottles composition */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Ribbon bow */}
                <div className="relative mb-2 w-16 h-6">
                  {/* Left loop */}
                  <div
                    className="absolute left-1 top-0 w-6 h-5 rounded-full border border-gold/50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201,151,43,0.15), rgba(201,151,43,0.05))',
                      transform: 'rotate(-15deg)',
                    }}
                  />
                  {/* Right loop */}
                  <div
                    className="absolute right-1 top-0 w-6 h-5 rounded-full border border-gold/50"
                    style={{
                      background: 'linear-gradient(225deg, rgba(201,151,43,0.15), rgba(201,151,43,0.05))',
                      transform: 'rotate(15deg)',
                    }}
                  />
                  {/* Center knot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/30 border border-gold/40" />
                  {/* Tails */}
                  <div className="absolute left-1/2 top-full -translate-x-[6px] w-px h-4 bg-gradient-to-b from-gold/40 to-transparent rotate-[-8deg]" />
                  <div className="absolute left-1/2 top-full translate-x-[4px] w-px h-4 bg-gradient-to-b from-gold/40 to-transparent rotate-[8deg]" />
                </div>

                {/* Box */}
                <div
                  className="relative px-6 py-6 sm:px-10 sm:py-8"
                  style={{
                    border: '1.5px solid rgba(201,151,43,0.35)',
                    background: 'linear-gradient(180deg, rgba(26,21,32,0.9) 0%, rgba(15,11,20,0.95) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(201,151,43,0.15), 0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Inner gold border accent */}
                  <div
                    className="absolute inset-[5px] pointer-events-none"
                    style={{ border: '0.5px solid rgba(201,151,43,0.12)' }}
                  />

                  {/* Bottles row */}
                  <div className="flex items-end justify-center gap-4 sm:gap-5">
                    {bottles.map((b, i) => (
                      <div key={`bottle-${i}`} className="flex flex-col items-center">
                        {/* Cap */}
                        <div
                          className="rounded-sm"
                          style={{
                            width: b.width * 0.5,
                            height: 6,
                            background: `linear-gradient(180deg, ${b.capColor}, rgba(201,151,43,0.2))`,
                            marginBottom: 1,
                          }}
                        />
                        {/* Neck */}
                        <div
                          style={{
                            width: b.width * 0.35,
                            height: b.neckH,
                            background: `linear-gradient(180deg, rgba(201,151,43,0.1), ${b.color})`,
                            borderLeft: '0.5px solid rgba(201,151,43,0.2)',
                            borderRight: '0.5px solid rgba(201,151,43,0.2)',
                          }}
                        />
                        {/* Body */}
                        <div
                          className="rounded-b-sm"
                          style={{
                            width: b.width,
                            height: b.height,
                            background: `linear-gradient(180deg, ${b.color} 0%, rgba(15,11,20,0.6) 100%)`,
                            border: '0.5px solid rgba(201,151,43,0.2)',
                            borderTop: 'none',
                            boxShadow: `inset 2px 0 4px rgba(255,255,255,0.04), inset -1px 0 3px rgba(0,0,0,0.3)`,
                          }}
                        >
                          {/* Label accent */}
                          <div
                            className="mx-auto mt-2"
                            style={{
                              width: b.width - 4,
                              height: b.height * 0.35,
                              border: '0.5px solid rgba(201,151,43,0.15)',
                              background: 'rgba(201,151,43,0.04)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Box bottom shadow line */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                </div>

                {/* Box shadow/base */}
                <div className="w-[95%] h-1 bg-gradient-to-b from-midnight-lighter/60 to-transparent mx-auto" />

                {/* Label under box */}
                <p className="text-gold/25 text-[10px] uppercase tracking-[0.3em] mt-3 font-sans">
                  The 786
                </p>
              </div>

              {/* Subtle border */}
              <div className="absolute inset-0 border border-plum/10 pointer-events-none" />
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
