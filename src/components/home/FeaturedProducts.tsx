import Link from 'next/link';

const featured = [
  {
    slug: 'oud-al-sultan',
    name: 'Oud Al Sultan',
    category: 'For Him',
    price: '₹1,599',
    badge: 'Bestseller',
    description: 'A commanding blend of aged oud, leather, and smoky amber.',
    accent: 'wine',
  },
  {
    slug: 'velvet-rose-and-oud',
    name: 'Velvet Rose & Oud',
    category: 'For Her',
    price: '₹1,599',
    badge: 'New',
    description: 'Turkish rose softened with dark oud and a whisper of saffron.',
    accent: 'plum',
  },
  {
    slug: 'amber-gilded',
    name: 'Amber Gilded',
    category: 'Unisex',
    price: '₹1,599',
    badge: 'Limited',
    description: 'Warm amber and frankincense wrapped in golden sandalwood.',
    accent: 'burgundy',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-midnight via-midnight-light/50 to-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
            The Icons
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-light">
            Signatures of the House
          </h2>
          <p className="mt-4 text-champagne/50 max-w-xl mx-auto">
            Three defining compositions from the THE786 atelier. Each crafted to linger in memory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <div className={`absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter to-${product.accent}/20 group-hover:to-${product.accent}/30 transition-all duration-700`}>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 border border-plum/15 rotate-45 group-hover:border-gold/20 transition-colors duration-500" />
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/90 text-midnight font-medium">
                    {product.badge}
                  </span>
                </div>
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                  <span className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest">
                    View Scent
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <p className="text-gold/60 text-xs uppercase tracking-widest">
                  {product.category}
                </p>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors">
                  {product.name}
                </h3>
                <p className="text-champagne/40 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <p className="text-champagne text-sm pt-1">
                  From <span className="text-gold">{product.price}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/collections"
            className="inline-flex items-center px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 text-sm uppercase tracking-widest"
          >
            View All Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
}
