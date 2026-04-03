'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  { name: 'Arjun Mehta', location: 'Mumbai', rating: 5, text: 'Oud Al Sultan is unlike anything I\'ve worn before. The longevity is exceptional — I get compliments even the next morning.', product: 'Oud Al Sultan', initials: 'AM', color: 'from-wine to-burgundy' },
  { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Velvet Rose & Oud is my signature now. It\'s sensual without being overpowering, and the dry-down is absolutely divine.', product: 'Velvet Rose & Oud', initials: 'PS', color: 'from-plum to-wine' },
  { name: 'Kabir Singh', location: 'Bangalore', rating: 5, text: 'The Discovery Coffret was the perfect way to explore the house. Every scent told a different story. I ended up buying two full bottles.', product: 'Discovery Coffret', initials: 'KS', color: 'from-burgundy to-plum' },
  { name: 'Ananya Desai', location: 'Hyderabad', rating: 5, text: 'Midnight Jasmine captures something I\'ve been searching for — that late-night garden feeling. Complex, warm, and unforgettable.', product: 'Midnight Jasmine', initials: 'AD', color: 'from-plum to-midnight-lighter' },
  { name: 'Rohan Kapoor', location: 'Pune', rating: 5, text: 'Imperial Saffron has that rare quality where people stop and ask what you\'re wearing. It projects beautifully without being loud.', product: 'Imperial Saffron', initials: 'RK', color: 'from-wine to-midnight-lighter' },
  { name: 'Meera Nair', location: 'Kochi', rating: 5, text: 'Royal Plum Nectar is everything I wanted — warm, sophisticated, and deeply feminine. It lasts from morning well into the night.', product: 'Royal Plum Nectar', initials: 'MN', color: 'from-plum to-burgundy' },
  { name: 'Vikram Patel', location: 'Ahmedabad', rating: 5, text: 'Amber Gilded is my daily driver. Warm, refined, and incredibly versatile — works in the boardroom and the evening equally well.', product: 'Amber Gilded', initials: 'VP', color: 'from-burgundy to-wine' },
  { name: 'Ishita Reddy', location: 'Chennai', rating: 5, text: 'I gifted the Discovery Coffret to my husband and he\'s now obsessed. We\'ve ordered three full-size bottles since. This house understands India.', product: 'Discovery Coffret', initials: 'IR', color: 'from-wine to-plum' },
  { name: 'Aditya Joshi', location: 'Jaipur', rating: 5, text: 'Silver Smoke is unlike any unisex fragrance I\'ve tried. There\'s a metallic coolness that somehow stays warm and inviting.', product: 'Silver Smoke', initials: 'AJ', color: 'from-midnight-lighter to-plum' },
  { name: 'Nisha Gupta', location: 'Lucknow', rating: 5, text: 'The packaging alone made me feel special. Then I opened Velvet Rose & Oud and understood — this is a house that cares about every detail.', product: 'Velvet Rose & Oud', initials: 'NG', color: 'from-plum to-wine' },
  { name: 'Rajesh Menon', location: 'Trivandrum', rating: 5, text: 'Oud Al Maliki has the depth I\'ve been searching for. It evolves over hours, revealing new facets. This is mature, intelligent perfumery.', product: 'Oud Al Maliki', initials: 'RM', color: 'from-wine to-burgundy' },
  { name: 'Kavya Iyer', location: 'Coimbatore', rating: 5, text: 'Midnight Jasmine is poetry in a bottle. I wear it to every important occasion now. The compliments never stop.', product: 'Midnight Jasmine', initials: 'KI', color: 'from-plum to-midnight-lighter' },
  { name: 'Sameer Khan', location: 'Kolkata', rating: 5, text: 'Royal Oud is commanding without being aggressive. It\'s the kind of scent that enters the room before you do — and stays after you leave.', product: 'Royal Oud', initials: 'SK', color: 'from-burgundy to-wine' },
  { name: 'Divya Choudhary', location: 'Chandigarh', rating: 5, text: 'I never thought an Indian brand could compete with the French houses. THE786 proved me wrong. Royal Plum Nectar is world-class.', product: 'Royal Plum Nectar', initials: 'DC', color: 'from-plum to-burgundy' },
  { name: 'Harsh Vardhan', location: 'Indore', rating: 5, text: 'Midnight Oryx is dark, mysterious, and incredibly long-lasting. Applied at 8 AM and still getting whiffs at midnight. Extraordinary.', product: 'Midnight Oryx', initials: 'HV', color: 'from-wine to-midnight-lighter' },
  { name: 'Ritu Malhotra', location: 'Noida', rating: 5, text: 'The 10ml attar roll-on of Amber Gilded goes everywhere with me. Perfect concentration, beautiful sillage, and the price is incredible for this quality.', product: 'Amber Gilded', initials: 'RM', color: 'from-burgundy to-plum' },
  { name: 'Ankur Saxena', location: 'Bhopal', rating: 5, text: 'Ordered via COD, arrived in 4 days. The unboxing experience itself was worth it — magnetic box, tissue paper, wax seal. Felt like a gift to myself.', product: 'Oud Al Sultan', initials: 'AS', color: 'from-wine to-burgundy' },
  { name: 'Sneha Pillai', location: 'Mysore', rating: 5, text: 'Imperial Saffron on my husband is intoxicating. It blends with his skin chemistry beautifully. We\'re now a two-bottle household.', product: 'Imperial Saffron', initials: 'SP', color: 'from-plum to-wine' },
  { name: 'Manish Tiwari', location: 'Varanasi', rating: 5, text: 'I\'ve worn niche fragrances for 15 years. THE786\'s Oud Al Maliki holds its own against anything from the Middle East. Proud it\'s Indian.', product: 'Oud Al Maliki', initials: 'MT', color: 'from-burgundy to-midnight-lighter' },
  { name: 'Pooja Srinivasan', location: 'Vizag', rating: 5, text: 'Silver Smoke is my go-to for evenings out. The smoky drydown paired with that clean opening is addictive. Already on my second bottle.', product: 'Silver Smoke', initials: 'PS', color: 'from-midnight-lighter to-plum' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < rating ? 'text-gold' : 'text-plum/30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 border border-gold/20`}>
      <span className="text-ivory text-xs font-semibold tracking-wide">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextPage, 5000);
    return () => clearInterval(timer);
  }, [nextPage]);

  const visibleTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

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
          <p className="mt-4 text-champagne/40 text-sm">
            {testimonials.length} verified reviews from fragrance connoisseurs across India
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[320px]">
          {visibleTestimonials.map((t, i) => (
            <div
              key={`${currentPage}-${i}`}
              className="glass-card p-6 flex flex-col justify-between hover:border-gold/20 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote */}
              <div>
                <span className="text-gold/20 font-serif text-4xl leading-none block mb-3">&ldquo;</span>
                <p className="text-champagne/60 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 mt-4 border-t border-plum/20 flex items-center gap-3">
                <Avatar initials={t.initials} color={t.color} />
                <div className="flex-1 min-w-0">
                  <StarRating rating={t.rating} />
                  <p className="text-ivory text-sm font-medium mt-1 truncate">{t.name}</p>
                  <p className="text-champagne/30 text-xs">{t.location}</p>
                </div>
                <p className="text-gold/40 text-[10px] italic text-right max-w-[80px] leading-tight">{t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full border border-plum/30 flex items-center justify-center text-champagne/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
            aria-label="Previous testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Page dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentPage
                    ? 'w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-plum/40 hover:bg-plum/60'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-plum/30 flex items-center justify-center text-champagne/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
            aria-label="Next testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
