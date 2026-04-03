'use client';

import { cn } from '@/lib/utils';

export default function FooterNewsletter() {
  return (
    <form
      className="mt-5 flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Your email address"
        required
        className={cn(
          'flex-1 rounded-md px-4 py-3 text-sm font-sans',
          'bg-midnight border border-plum/30',
          'text-ivory placeholder:text-champagne/30',
          'focus:border-gold focus:ring-1 focus:ring-gold',
          'transition-colors duration-300'
        )}
      />
      <button
        type="submit"
        className={cn(
          'rounded-md px-6 py-3 text-sm font-sans font-semibold tracking-wide',
          'bg-gold text-midnight',
          'hover:bg-gold-light active:bg-gold-dark',
          'transition-colors duration-300'
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
