'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
}

interface PriceRange {
  min: number;
  max: number;
}

interface FilterSidebarProps {
  categories: FilterGroup;
  scentFamilies: FilterGroup;
  priceRange: PriceRange;
  selectedFilters: Record<string, string[]>;
  selectedPrice: PriceRange;
  onFilterChange: (groupKey: string, value: string) => void;
  onPriceChange: (range: PriceRange) => void;
  className?: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn(
        'text-gold transition-transform duration-200',
        open && 'rotate-180'
      )}
      aria-hidden="true"
    >
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function FilterGroupSection({
  group,
  selectedValues,
  onToggle,
}: {
  group: FilterGroup;
  selectedValues: string[];
  onToggle: (value: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <fieldset className="border-b border-ivory/5 pb-4">
      <legend className="sr-only">{group.title}</legend>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ivory/70">
          {group.title}
        </span>
        <ChevronIcon open={open} />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2 pb-1">
            {group.options.map((option) => {
              const isChecked = selectedValues.includes(option.value);
              const id = `filter-${group.key}-${option.value}`;
              return (
                <label
                  key={option.value}
                  htmlFor={id}
                  className="flex cursor-pointer items-center gap-2.5 rounded-sm px-1 py-1 transition-colors hover:bg-ivory/[0.03]"
                >
                  <input
                    id={id}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggle(option.value)}
                    className="h-3.5 w-3.5 rounded-sm border border-ivory/20 bg-transparent accent-gold focus:ring-1 focus:ring-gold/50"
                  />
                  <span className="flex-1 font-sans text-sm text-ivory/60">
                    {option.label}
                  </span>
                  {option.count !== undefined && (
                    <span className="font-sans text-xs text-ivory/30">
                      {option.count}
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export function FilterSidebar({
  categories,
  scentFamilies,
  priceRange,
  selectedFilters,
  selectedPrice,
  onFilterChange,
  onPriceChange,
  className,
}: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex flex-col gap-2">
      <FilterGroupSection
        group={categories}
        selectedValues={selectedFilters[categories.key] ?? []}
        onToggle={(val) => onFilterChange(categories.key, val)}
      />
      <FilterGroupSection
        group={scentFamilies}
        selectedValues={selectedFilters[scentFamilies.key] ?? []}
        onToggle={(val) => onFilterChange(scentFamilies.key, val)}
      />

      {/* Price range */}
      <fieldset className="pb-4">
        <legend className="sr-only">Price range</legend>
        <p className="py-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ivory/70">
          Price Range
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <label htmlFor="price-min" className="sr-only">Minimum price</label>
            <input
              id="price-min"
              type="number"
              min={priceRange.min}
              max={selectedPrice.max}
              value={selectedPrice.min}
              onChange={(e) =>
                onPriceChange({ ...selectedPrice, min: Number(e.target.value) })
              }
              className="w-full rounded-sm border border-ivory/10 bg-midnight-light px-3 py-2 font-sans text-sm text-ivory focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/50"
              placeholder="Min"
            />
            <span className="text-ivory/30" aria-hidden="true">&ndash;</span>
            <label htmlFor="price-max" className="sr-only">Maximum price</label>
            <input
              id="price-max"
              type="number"
              min={selectedPrice.min}
              max={priceRange.max}
              value={selectedPrice.max}
              onChange={(e) =>
                onPriceChange({ ...selectedPrice, max: Number(e.target.value) })
              }
              className="w-full rounded-sm border border-ivory/10 bg-midnight-light px-3 py-2 font-sans text-sm text-ivory focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/50"
              placeholder="Max"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex w-full items-center justify-between border border-ivory/10 bg-midnight-light px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-ivory/70 lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls="filter-sidebar-mobile"
      >
        Filters
        <ChevronIcon open={mobileOpen} />
      </button>

      {/* Mobile collapsible */}
      <aside
        id="filter-sidebar-mobile"
        className={cn(
          'overflow-hidden border border-t-0 border-ivory/10 bg-midnight-light px-4 transition-[max-height] duration-300 lg:hidden',
          mobileOpen ? 'max-h-[2000px] py-4' : 'max-h-0'
        )}
        aria-label="Product filters"
      >
        {content}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden lg:block',
          className
        )}
        aria-label="Product filters"
      >
        {content}
      </aside>
    </>
  );
}
