'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="banner"
      className={cn(
        'relative z-50 bg-gold text-midnight py-2 px-4 text-center',
        'text-xs sm:text-sm font-medium tracking-wide'
      )}
    >
      <p className="mx-auto max-w-5xl font-sans">
        Free COD Across India&nbsp;&middot;&nbsp;Complimentary Luxury
        Packaging&nbsp;&middot;&nbsp;Pan-India Express Delivery
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className={cn(
          'absolute right-3 top-1/2 -translate-y-1/2',
          'text-midnight/70 hover:text-midnight transition-colors',
          'p-1'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
