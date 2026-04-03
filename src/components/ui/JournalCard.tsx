import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ImagePlaceholder } from './ImagePlaceholder';

interface JournalCardProps {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  className?: string;
}

export function JournalCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  image,
  className,
}: JournalCardProps) {
  return (
    <Link
      href={`/journal/${slug}`}
      className={cn(
        'group block overflow-hidden rounded-sm border border-ivory/5',
        'transition-all duration-500 ease-out',
        'hover:border-gold/20 hover:shadow-[0_0_16px_rgba(201,151,43,0.06)]',
        className
      )}
      aria-label={`Read: ${title}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ImagePlaceholder
            aspectRatio="16/9"
            alt={title}
            src={image}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta row */}
        {(category || readTime) && (
          <div className="mb-3 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/40">
            {category && (
              <span className="rounded-full bg-plum/20 px-2.5 py-0.5 text-ivory/60">
                {category}
              </span>
            )}
            {readTime && <span>{readTime}</span>}
          </div>
        )}

        <h3 className="font-serif text-lg font-light leading-snug text-ivory transition-colors duration-300 group-hover:text-champagne sm:text-xl">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-ivory/50">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
