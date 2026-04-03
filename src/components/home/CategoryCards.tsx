import Link from 'next/link';

const categories = [
  {
    name: 'For Him',
    slug: '/for-him',
    mood: 'Oud. Leather. Authority.',
    image: '/images/categories/for-him-hero.jpg',
    accent: 'from-midnight-lighter to-wine/30',
  },
  {
    name: 'For Her',
    slug: '/for-her',
    mood: 'Velvet. Plum. Allure.',
    image: '/images/categories/for-her-hero.jpg',
    accent: 'from-midnight-lighter to-plum/30',
  },
  {
    name: 'Unisex',
    slug: '/unisex',
    mood: 'Amber. Smoke. Duality.',
    image: '/images/categories/unisex-hero.jpg',
    accent: 'from-midnight-lighter to-burgundy/30',
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
              {/* Image area */}
              <div className={`aspect-[3/4] img-placeholder bg-gradient-to-br ${cat.accent} transition-transform duration-700 group-hover:scale-[1.02]`}>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 border border-plum/20 rotate-45 mb-3 group-hover:border-gold/30 transition-colors" />
                  <span className="text-xs uppercase tracking-[0.2em] text-plum/30">
                    {cat.name}
                  </span>
                </div>
              </div>

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
