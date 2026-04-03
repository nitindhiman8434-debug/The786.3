import Link from 'next/link';

function ForHimArt() {
  return (
    <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-midnight-lighter via-wine/30 to-midnight group-hover:via-wine/40 transition-all duration-700">
      {/* Angular geometric accents */}
      <div className="absolute top-8 right-8 w-24 h-24 border border-gold/10 rotate-45" />
      <div className="absolute top-12 right-12 w-16 h-16 border border-champagne/5 rotate-45" />
      <div className="absolute top-14 right-14 w-10 h-10 bg-wine/10 rotate-45" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-[-20deg]" />
        <div className="absolute top-1/3 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-wine/20 to-transparent rotate-[-20deg]" />
      </div>

      {/* Cologne bottle silhouette */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Cap */}
        <div className="w-6 h-6 bg-gradient-to-b from-gold/30 to-gold/10 rounded-t-sm" />
        {/* Neck */}
        <div className="w-3 h-4 bg-gold/15" />
        {/* Body */}
        <div className="relative w-16 h-28 bg-gradient-to-b from-wine/30 via-midnight-lighter to-wine/20 rounded-b-sm border border-gold/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/20 font-serif text-[8px] tracking-[0.2em]">786</div>
          {/* Label line */}
          <div className="absolute top-6 left-2 right-2 h-px bg-gold/10" />
          <div className="absolute top-8 left-3 right-3 h-px bg-gold/5" />
        </div>
      </div>

      {/* Corner leather texture feel */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-wine/15 to-transparent" />

      {/* Top smoke effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-midnight/60 to-transparent" />
    </div>
  );
}

function ForHerArt() {
  return (
    <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-midnight-lighter via-plum/25 to-midnight group-hover:via-plum/35 transition-all duration-700">
      {/* Rose petal shapes - rotated rounded circles */}
      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-gradient-to-br from-plum/25 to-wine/15 rotate-[30deg] scale-y-75" />
      <div className="absolute top-16 right-16 w-10 h-10 rounded-full bg-gradient-to-br from-wine/20 to-plum/10 rotate-[60deg] scale-y-75" />
      <div className="absolute top-8 right-20 w-8 h-8 rounded-full bg-gradient-to-br from-plum/15 to-transparent rotate-[120deg] scale-y-75" />
      <div className="absolute top-20 right-8 w-12 h-12 rounded-full bg-gradient-to-tl from-plum/20 to-wine/10 rotate-[-30deg] scale-y-75" />

      {/* Flowing curve accents */}
      <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-plum/10 to-transparent rounded-full scale-y-50 rotate-[-5deg]" />
      <div className="absolute top-1/3 left-0 w-full h-24 bg-gradient-to-r from-transparent via-wine/8 to-transparent rounded-full scale-y-50 rotate-[3deg]" />

      {/* Elegant perfume bottle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Ornate cap */}
        <div className="w-8 h-4 bg-gradient-to-b from-gold/25 to-gold/10 rounded-t-full" />
        {/* Slim neck */}
        <div className="w-2 h-5 bg-gold/12" />
        {/* Curved body */}
        <div className="relative w-20 h-24 bg-gradient-to-b from-plum/25 via-wine/20 to-plum/15 rounded-[40%] border border-gold/8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/15 font-serif text-[7px] tracking-[0.15em]">786</div>
        </div>
      </div>

      {/* Scattered mini petal shapes */}
      <div className="absolute bottom-32 left-8 w-6 h-6 rounded-full bg-plum/10 rotate-45 scale-y-75" />
      <div className="absolute bottom-40 left-14 w-4 h-4 rounded-full bg-wine/8 rotate-[70deg] scale-y-75" />

      {/* Soft vignette */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-midnight/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-plum/10 to-transparent" />
    </div>
  );
}

function UnisexArt() {
  return (
    <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-midnight-lighter via-burgundy/20 to-midnight group-hover:via-burgundy/30 transition-all duration-700">
      {/* Balanced dual geometric shapes */}
      <div className="absolute top-10 left-8 w-16 h-16 border border-gold/12 rotate-45" />
      <div className="absolute top-10 right-8 w-16 h-16 border border-champagne/8 rotate-45" />
      <div className="absolute top-14 left-12 w-8 h-8 bg-gold/8 rotate-45" />
      <div className="absolute top-14 right-12 w-8 h-8 bg-champagne/6 rotate-45" />

      {/* Central balance line */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold/15 to-transparent" />

      {/* Amber smoke swirls */}
      <div className="absolute top-1/4 left-0 w-full h-40 bg-[radial-gradient(ellipse_at_30%_50%,rgba(217,164,65,0.08),transparent_60%)]" />
      <div className="absolute top-1/3 left-0 w-full h-40 bg-[radial-gradient(ellipse_at_70%_50%,rgba(139,90,43,0.08),transparent_60%)]" />

      {/* Balanced bottle silhouette */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Symmetric cap */}
        <div className="w-10 h-3 bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 rounded-t-sm" />
        {/* Neck */}
        <div className="w-4 h-4 bg-gold/12" />
        {/* Cylindrical body */}
        <div className="relative w-14 h-26 bg-gradient-to-b from-burgundy/20 via-midnight-lighter to-burgundy/15 rounded-sm border border-gold/8">
          {/* Dual tone split */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-gold/8 to-transparent rounded-l-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/18 font-serif text-[8px] tracking-[0.2em]">786</div>
        </div>
      </div>

      {/* Balanced corner accents */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gold/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-burgundy/10 to-transparent" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-midnight/50 to-transparent" />
    </div>
  );
}

const categories = [
  {
    name: 'For Him',
    slug: '/for-him',
    mood: 'Oud. Leather. Authority.',
    Art: ForHimArt,
  },
  {
    name: 'For Her',
    slug: '/for-her',
    mood: 'Velvet. Plum. Allure.',
    Art: ForHerArt,
  },
  {
    name: 'Unisex',
    slug: '/unisex',
    mood: 'Amber. Smoke. Duality.',
    Art: UnisexArt,
  },
];

export default function CategoryCards() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
            Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-light">
            Curated for Every Presence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug}
              className="group relative block overflow-hidden"
            >
              {/* CSS Art Image Area */}
              <cat.Art />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-3xl text-ivory mb-2 group-hover:text-champagne transition-colors">
                  {cat.name}
                </h3>
                <p className="text-champagne/50 text-sm tracking-wide mb-4">
                  {cat.mood}
                </p>
                <span className="text-gold text-xs uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
                  Explore →
                </span>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
