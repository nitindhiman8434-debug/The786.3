import { cn } from '@/lib/utils';

const bgVariants = {
  midnight: 'bg-midnight',
  'midnight-light': 'bg-midnight-light',
  'midnight-lighter': 'bg-midnight-lighter',
  transparent: 'bg-transparent',
} as const;

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: keyof typeof bgVariants;
  as?: 'section' | 'div' | 'article';
  narrow?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  bg = 'transparent',
  as: Tag = 'section',
  narrow = false,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'w-full px-4 py-16 sm:px-6 md:py-24 lg:px-8',
        bgVariants[bg],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto w-full',
          narrow ? 'max-w-4xl' : 'max-w-7xl'
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
