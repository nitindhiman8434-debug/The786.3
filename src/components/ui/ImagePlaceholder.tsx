import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  aspectRatio?: string;
  alt: string;
  src?: string;
  className?: string;
}

export function ImagePlaceholder({
  aspectRatio = '3/4',
  alt,
  src,
  className,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        style={{ aspectRatio }}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-light via-midnight-lighter to-plum/20',
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Geometric diamond pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="diamond-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 0 L40 20 L20 40 L0 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gold"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
      </svg>

      {/* Brand watermark */}
      <span
        className="select-none font-serif text-2xl font-light tracking-[0.3em] text-gold/15"
        aria-hidden="true"
      >
        THE786
      </span>
    </div>
  );
}
