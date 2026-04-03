const testimonials = [
  {
    name: 'Arjun Mehta',
    location: 'Mumbai',
    rating: 5,
    text: 'Oud Al Sultan is unlike anything I\'ve worn before. The longevity is exceptional — I get compliments even the next morning. This is what luxury should feel like.',
    product: 'Oud Al Sultan',
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Velvet Rose & Oud is my signature now. It\'s sensual without being overpowering, and the dry-down is absolutely divine. Worth every rupee.',
    product: 'Velvet Rose & Oud',
  },
  {
    name: 'Kabir Singh',
    location: 'Bangalore',
    rating: 5,
    text: 'The Discovery Coffret was the perfect way to explore the house. Every scent told a different story. I ended up buying two full bottles within the week.',
    product: 'Discovery Coffret',
  },
  {
    name: 'Ananya Desai',
    location: 'Hyderabad',
    rating: 5,
    text: 'Midnight Jasmine captures something I\'ve been searching for — that late-night garden feeling. Complex, warm, and unforgettable.',
    product: 'Midnight Jasmine',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-gold' : 'text-plum/30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
            Voices of the Maison
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-light">
            What They Remember
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card p-6 space-y-4 hover:border-gold/20 transition-colors duration-500"
            >
              {/* Quote mark */}
              <span className="text-gold/20 font-serif text-5xl leading-none">&ldquo;</span>

              <p className="text-champagne/60 text-sm leading-relaxed">
                {t.text}
              </p>

              <div className="pt-4 border-t border-plum/20">
                <StarRating rating={t.rating} />
                <p className="text-ivory text-sm font-medium mt-2">{t.name}</p>
                <p className="text-champagne/30 text-xs">{t.location}</p>
                <p className="text-gold/50 text-xs mt-1 italic">{t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
