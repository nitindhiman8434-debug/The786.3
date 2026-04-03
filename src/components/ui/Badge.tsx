import { cn } from '@/lib/utils';

const badgeVariants = {
  new: 'bg-gold/90 text-midnight',
  bestseller: 'bg-crimson text-ivory',
  rare: 'bg-plum text-ivory',
  limited: 'bg-burgundy text-ivory',
  gifting: 'bg-champagne text-midnight',
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
