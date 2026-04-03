import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  productName?: string;
  productSlug?: string;
  className?: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1"
      className={filled ? 'text-gold' : 'text-ivory/20'}
      aria-hidden="true"
    >
      <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57L7 1z" />
    </svg>
  );
}

export function TestimonialCard({
  name,
  location,
  rating,
  quote,
  productName,
  productSlug,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'relative rounded-sm border border-ivory/5 p-6 sm:p-8',
        'bg-ivory/[0.02] backdrop-blur-sm',
        className
      )}
    >
      {/* Gold quote mark */}
      <span
        className="absolute -top-3 left-6 font-serif text-5xl leading-none text-gold/30"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="mb-4 flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      <blockquote className="font-serif text-base font-light italic leading-relaxed text-ivory/80 sm:text-lg">
        {quote}
      </blockquote>

      <figcaption className="mt-6 flex flex-col gap-1">
        <span className="font-sans text-sm font-medium text-ivory">{name}</span>
        {location && (
          <span className="font-sans text-xs text-ivory/40">{location}</span>
        )}
        {productName && productSlug && (
          <Link
            href={`/products/${productSlug}`}
            className="mt-1 font-sans text-xs text-gold/70 transition-colors duration-200 hover:text-gold"
          >
            Purchased: {productName}
          </Link>
        )}
      </figcaption>
    </figure>
  );
}
