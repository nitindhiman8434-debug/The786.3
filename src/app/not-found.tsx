import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine/15 via-midnight to-midnight" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-plum/5 to-midnight" />

      {/* Decorative geometric elements */}
      <div className="absolute top-1/4 left-[10%] w-24 h-24 border border-champagne/[0.04] rotate-45 hidden md:block" />
      <div className="absolute top-1/3 right-[12%] w-16 h-16 border border-plum/10 rotate-45 hidden md:block" />
      <div className="absolute bottom-1/4 left-[18%] w-12 h-12 border border-gold/[0.06] rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/3 right-[8%] w-20 h-20 border border-champagne/[0.03] rotate-45 hidden lg:block" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-40 h-40 border border-plum/[0.04] rotate-45" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* 404 */}
        <p className="font-serif text-8xl md:text-9xl lg:text-[10rem] font-bold text-gradient-gold leading-none mb-6">
          404
        </p>

        {/* Heading */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
          Lost in the Atelier
        </h1>

        {/* Subtext */}
        <p className="text-champagne/50 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          The page you seek has dissolved like a fleeting top note. Let us guide
          you back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-gold text-midnight text-sm font-medium uppercase tracking-wider hover:bg-champagne transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            href="/collections"
            className="inline-block px-8 py-3.5 border border-gold/60 text-gold text-sm font-medium uppercase tracking-wider hover:bg-gold/10 transition-colors duration-300"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
