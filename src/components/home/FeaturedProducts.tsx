import Link from 'next/link';

const featured = [
  {
    slug: 'oud-al-sultan',
    name: 'Oud Al Sultan',
    category: 'For Him',
    price: '₹1,599',
    description: 'A commanding blend of aged oud, leather, and smoky amber that speaks of quiet authority.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80',
    notes: ['Oud', 'Leather', 'Amber'],
    longevity: '8-10 hrs',
    badge: 'Bestseller',
    badgeBg: 'bg-gold/90 text-obsidian',
  },
  {
    slug: 'velvet-rose-and-oud',
    name: 'Velvet Rose & Oud',
    category: 'For Her',
    price: '₹1,599',
    description: 'Turkish rose softened with dark oud and a whisper of saffron for lasting allure.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',
    notes: ['Rose', 'Oud', 'Saffron'],
    longevity: '6-8 hrs',
    badge: 'New',
    badgeBg: 'bg-rose/80 text-pearl',
  },
  {
    slug: 'amber-gilded',
    name: 'Amber Gilded',
    category: 'Unisex',
    price: '₹1,599',
    description: 'Warm amber and frankincense wrapped in golden sandalwood for transcendent warmth.',
    image: 'https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=500&q=80',
    notes: ['Amber', 'Sandalwood', 'Frankincense'],
    longevity: '8-10 hrs',
    badge: 'Limited',
    badgeBg: 'bg-plum/80 text-pearl',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
            The Icons
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-pearl font-light">
            Signatures of the House
          </h2>
          <p className="mt-4 text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
            Three defining compositions from the THE786 atelier. Each crafted to linger in memory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block product-card"
            >
              {/* Image area */}
              <div className="relative aspect-[3/4] img-container overflow-hidden mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge overlay top-left */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`px-3 py-1 text-[10px] uppercase tracking-widest font-medium rounded-full ${product.badgeBg}`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-obsidian/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                  <span className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest font-sans">
                    View Scent
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="space-y-2">
                {/* Category + longevity row */}
                <div className="flex items-center justify-between">
                  <p className="text-gold/50 text-xs uppercase tracking-widest font-sans">
                    {product.category}
                  </p>
                  <span className="px-2 py-0.5 text-[10px] text-cream/50 bg-slate/40 rounded-full">
                    {product.longevity}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-xl text-pearl group-hover:text-gold-light transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-cream/40 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Scent note chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-0.5 text-[10px] bg-slate/30 text-cream/50 rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <p className="text-cream/70 text-sm pt-2 font-sans">
                  From <span className="text-gold font-medium">{product.price}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/collections" className="btn-outline">
            View All Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
}
