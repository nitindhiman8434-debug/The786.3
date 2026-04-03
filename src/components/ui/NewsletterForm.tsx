'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    // Simulate API call — replace with real endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn('rounded-sm border border-gold/20 bg-gold/5 px-6 py-8 text-center', className)}
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-xl text-gold">Welcome to the inner circle</p>
        <p className="mt-2 font-sans text-sm text-ivory/60">
          You will receive exclusive previews and curated offerings.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('w-full', className)}
      aria-label="Newsletter subscription"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="Enter your email"
          aria-invalid={status === 'error'}
          className={cn(
            'w-full rounded-sm border bg-midnight-light px-5 py-3 font-sans text-sm text-ivory',
            'placeholder:text-ivory/30',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/40',
            'sm:rounded-r-none sm:border-r-0',
            status === 'error' ? 'border-crimson/60' : 'border-ivory/10'
          )}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="shrink-0 sm:rounded-l-none"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Subscribe'}
        </Button>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-2 font-sans text-xs text-crimson">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
