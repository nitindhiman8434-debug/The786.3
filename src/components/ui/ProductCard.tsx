import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge, type BadgeVariant } from './Badge';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProductCardProps {
  slug: string;
  name: string;
  category?: string;
  price: string;
  image?: string;
  badges?: BadgeVariant[];
  className?: string;
}

const badgeLabels: Record<BadgeVariant, string> = {
  new: 'New',
  bestseller: 'Bestseller',
  rare: 'Rare',
  limited: 'Limited',
  gifting: 'Gifting',
};

export function ProductCard({
  slug,
  name,
  category,
  price,
  image,
  badges,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-sm border border-ivory/5',
        'transition-all duration-500 ease-out',
        'hover:border-gold/30 hover:shadow-[0_0_20px_rgba(201,151,43,0.08)]',
        className
      )}
      aria-label={`View ${name} — ${price}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ImagePlaceholder
            aspectRatio="3/4"
            alt={name}
            src={image}
          />
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {badges.map((badge) => (
              <Badge key={badge} variant={badge}>
                {badgeLabels[badge]}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {category && (
          <p className="mb-1 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-ivory/40">
            {category}
          </p>
        )}
        <h3 className="font-serif text-lg font-light text-ivory transition-colors duration-300 group-hover:text-champagne">
          {name}
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-gold">
          {price}
        </p>
      </div>
    </Link>
  );
}
