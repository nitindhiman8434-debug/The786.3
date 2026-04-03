import Link from 'next/link';

function OudAlSultanBottle() {
  return (
    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-b from-midnight-lighter to-wine/15">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(119,5,35,0.2),transparent_70%)]" />

      {/* Angular geometric accents */}
      <div className="absolute top-6 right-6 w-20 h-20 border border-gold/8 rotate-45" />
      <div className="absolute top-10 right-10 w-12 h-12 border border-wine/15 rotate-45" />

      {/* Tall angular bottle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Rectangular cap */}
        <div className="w-5 h-7 bg-gradient-to-b from-gold/30 to-gold/15 rounded-t-sm" />
        {/* Narrow neck */}
        <div className="w-2 h-5 bg-gold/12" />
        {/* Shoulder flare */}
        <div className="w-14 h-2 bg-gradient-to-b from-wine/30 to-wine/25 rounded-t-sm" />
        {/* Tall angular body */}
        <div className="relative w-14 h-32 bg-gradient-to-b from-wine/30 via-midnight-lighter to-wine/20 border border-gold/10">
          {/* Label area */}
          <div className="absolute top-4 left-2 right-2 h-px bg-gold/15" />
          <div className="absolute top-5 left-2 right-2 flex justify-center">
            <span className="text-gold/20 font-serif text-[7px] tracking-[0.2em]">THE786</span>
          </div>
          <div className="absolute top-8 left-2 right-2 h-px bg-gold/10" />
          {/* Center emblem */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-gold/12 rotate-45" />
          {/* Base line */}
          <div className="absolute bottom-3 left-3 right-3 h-px bg-gold/8" />
        </div>
      </div>

      {/* Dark smoke from top */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-midnight/70 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/90 text-midnight font-medium">
          Bestseller
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
        <span className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest">View Scent</span>
      </div>
    </div>
  );
}

function VelvetRoseBottle() {
  return (
    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-b from-midnight-lighter to-plum/15">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(128,0,64,0.15),transparent_70%)]" />

      {/* Rose petal shapes */}
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-plum/15 rotate-[30deg] scale-y-75" />
      <div className="absolute top-14 right-14 w-8 h-8 rounded-full bg-wine/12 rotate-[60deg] scale-y-75" />
      <div className="absolute top-6 right-16 w-6 h-6 rounded-full bg-plum/10 rotate-[120deg] scale-y-75" />

      {/* Elegant curved bottle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Ornate rounded cap */}
        <div className="w-8 h-5 bg-gradient-to-b from-gold/25 to-gold/10 rounded-t-full" />
        {/* Slim neck */}
        <div className="w-2 h-6 bg-gold/10" />
        {/* Curved elegant body */}
        <div className="relative w-20 h-28 bg-gradient-to-b from-plum/25 via-wine/15 to-plum/20 rounded-[35%] border border-gold/8">
          {/* Inner curve highlight */}
          <div className="absolute top-3 left-3 right-3 bottom-3 rounded-[30%] border border-plum/10" />
          {/* Label */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center">
            <span className="text-gold/15 font-serif text-[6px] tracking-[0.15em] block">THE786</span>
            <div className="w-8 h-px bg-gold/10 mx-auto mt-1" />
          </div>
          {/* Center rose shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-5 h-5 rounded-full border border-plum/15" />
        </div>
      </div>

      {/* Soft vignette */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-midnight/60 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/90 text-midnight font-medium">
          New
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
        <span className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest">View Scent</span>
      </div>
    </div>
  );
}

function AmberGildedBottle() {
  return (
    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-b from-midnight-lighter to-burgundy/15">
      {/* Warm amber glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(217,164,65,0.12),transparent_65%)]" />

      {/* Balanced geometric accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border border-gold/10 rotate-45" />
      <div className="absolute top-8 right-8 w-12 h-12 border border-gold/10 rotate-45" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gold/12 to-transparent" />

      {/* Rounded warm bottle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Dome cap */}
        <div className="w-6 h-4 bg-gradient-to-b from-gold/30 to-gold/15 rounded-t-full" />
        {/* Short neck */}
        <div className="w-3 h-3 bg-gold/15" />
        {/* Round body */}
        <div className="relative w-22 h-26 bg-gradient-to-b from-burgundy/20 via-midnight-lighter to-burgundy/15 rounded-[45%] border border-gold/10" style={{ width: '5.5rem', height: '6.5rem' }}>
          {/* Amber shimmer band */}
          <div className="absolute top-1/4 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-1/3 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gold/12 to-transparent" />
          {/* Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-gold/20 font-serif text-[7px] tracking-[0.2em]">786</span>
          </div>
          {/* Base accent */}
          <div className="absolute bottom-2 left-4 right-4 h-px bg-gold/10" />
        </div>
      </div>

      {/* Warm corner glows */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gold/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-burgundy/8 to-transparent" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-midnight/60 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-gold/90 text-midnight font-medium">
          Limited
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
        <span className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest">View Scent</span>
      </div>
    </div>
  );
}

const featured = [
  {
    slug: 'oud-al-sultan',
    name: 'Oud Al Sultan',
    category: 'For Him',
    price: '\u20B91,599',
    description: 'A commanding blend of aged oud, leather, and smoky amber.',
    Bottle: OudAlSultanBottle,
    notes: ['Oud', 'Leather', 'Amber'],
    longevity: '8-10 hrs',
  },
  {
    slug: 'velvet-rose-and-oud',
    name: 'Velvet Rose & Oud',
    category: 'For Her',
    price: '\u20B91,599',
    description: 'Turkish rose softened with dark oud and a whisper of saffron.',
    Bottle: VelvetRoseBottle,
    notes: ['Rose', 'Oud', 'Saffron'],
    longevity: '6-8 hrs',
  },
  {
    slug: 'amber-gilded',
    name: 'Amber Gilded',
    category: 'Unisex',
    price: '\u20B91,599',
    description: 'Warm amber and frankincense wrapped in golden sandalwood.',
    Bottle: AmberGildedBottle,
    notes: ['Amber', 'Frankincense', 'Sandalwood'],
    longevity: '8-10 hrs',
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
              {/* CSS Bottle Art */}
              <product.Bottle />

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-gold/60 text-xs uppercase tracking-widest">
                    {product.category}
                  </p>
                  <span className="px-2 py-0.5 text-[10px] text-champagne/50 border border-champagne/15 rounded-full">
                    {product.longevity}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors">
                  {product.name}
                </h3>
                <p className="text-champagne/40 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                {/* Scent note chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-2 py-0.5 text-[10px] bg-wine/30 text-champagne/60 rounded-full border border-wine/20"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <p className="text-champagne text-sm pt-2">
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
