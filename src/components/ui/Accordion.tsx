'use client';

import { useState, useId } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndices((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className={cn('divide-y divide-ivory/10', className)} role="list">
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={index}
            role="listitem"
            className={cn(
              'border-l-2 transition-colors duration-300',
              isOpen ? 'border-l-gold' : 'border-l-transparent'
            )}
          >
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-200 hover:bg-ivory/[0.03]"
            >
              <span className="font-serif text-base font-light text-ivory sm:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  'shrink-0 text-gold transition-transform duration-300',
                  isOpen && 'rotate-45'
                )}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 font-sans text-sm leading-relaxed text-ivory/60">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
