import Link from 'next/link';

const categories = [
  {
    name: 'For Him',
    slug: '/for-him',
    mood: 'Oud. Leather. Authority.',
    image: 'https://images.unsplash.com/photo-1594035910387-fbd1a485b12e?w=600&q=80',
  },
  {
    name: 'For Her',
    slug: '/for-her',
    mood: 'Velvet. Plum. Allure.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80',
  },
  {
    name: 'Unisex',
    slug: '/unisex',
    mood: 'Amber. Smoke. Duality.',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
  },
];

export default function CategoryCards() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
            Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-pearl font-light">
            Curated for Every Presence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug}
              className="group relative block overflow-hidden border border-transparent hover:border-gold/20 transition-colors duration-500"
            >
              {/* Gold top line accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />

              {/* Image container */}
              <div className="aspect-[3/4] img-container relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/60 to-transparent" />

                {/* Content overlaid at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col">
                  <h3 className="font-serif text-3xl text-pearl mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-cream/50 text-sm tracking-wide mb-4">
                    {cat.mood}
                  </p>
                  <span className="text-gold text-xs uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
