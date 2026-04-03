import { cn } from '@/lib/utils';

interface ScentNoteChipProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ScentNoteChip({ name, icon, className }: ScentNoteChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-plum/20 px-3 py-1',
        'font-sans text-xs text-ivory/80',
        'border border-wine/20',
        'transition-colors duration-200 hover:bg-plum/30',
        className
      )}
    >
      {icon && (
        <span className="shrink-0 text-champagne/60" aria-hidden="true">
          {icon}
        </span>
      )}
      {name}
    </span>
  );
}
