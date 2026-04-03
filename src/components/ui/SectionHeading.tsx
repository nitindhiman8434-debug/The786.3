import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  headingAs?: 'h1' | 'h2' | 'h3';
}

const alignStyles = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
} as const;

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  className,
  headingAs: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl mb-12', alignStyles[align], className)}>
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <Heading className="font-serif text-3xl font-light leading-tight text-ivory sm:text-4xl md:text-5xl">
        {heading}
      </Heading>
      {subtext && (
        <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/60 sm:text-base">
          {subtext}
        </p>
      )}
    </div>
  );
}
