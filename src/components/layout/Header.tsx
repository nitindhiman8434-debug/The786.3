'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand, navItems } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Header Component                                                   */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Track scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-midnight/95 backdrop-blur-md shadow-lg shadow-midnight/30'
          : 'bg-transparent'
      )}
    >
      {/* Main nav bar */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px]"
        aria-label="Primary navigation"
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="relative z-10 font-serif text-xl sm:text-2xl font-bold tracking-[0.25em] text-ivory hover:text-gold transition-colors duration-300"
        >
          {brand.name}
        </Link>

        {/* Center: Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              {...('children' in item && item.children
                ? {
                    onMouseEnter: handleDropdownEnter,
                    onMouseLeave: handleDropdownLeave,
                  }
                : {})}
            >
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-sans font-medium tracking-wide text-champagne/80',
                  'hover:text-gold transition-colors duration-300',
                  'py-2'
                )}
              >
                {item.label}
              </Link>

              {/* Dropdown for Collections */}
              {'children' in item && item.children && (
                <div
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 pt-3',
                    'transition-all duration-300',
                    dropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  )}
                >
                  <ul
                    className={cn(
                      'min-w-[200px] rounded-md py-3 px-1',
                      'bg-midnight-light/95 backdrop-blur-lg',
                      'border border-plum/30',
                      'shadow-xl shadow-midnight/50'
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 rounded text-sm font-sans',
                            'text-champagne/70 hover:text-gold hover:bg-plum/20',
                            'transition-colors duration-200'
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/search"
            aria-label="Search"
            className="text-champagne/70 hover:text-gold transition-colors duration-300"
          >
            <SearchIcon />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative text-champagne/70 hover:text-gold transition-colors duration-300"
          >
            <BagIcon />
            {/* Cart badge -- always show 0 as static; replace with cart state */}
            <span
              className={cn(
                'absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center',
                'rounded-full bg-gold text-midnight text-[10px] font-bold leading-none'
              )}
              aria-hidden="true"
            >
              0
            </span>
          </Link>

          <Link
            href="/account"
            aria-label="Account"
            className="hidden sm:block text-champagne/70 hover:text-gold transition-colors duration-300"
          >
            <UserIcon />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden text-champagne/80 hover:text-gold transition-colors duration-300"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Gradient border-bottom */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, #4B1E5A, #C9972B, #4B1E5A, transparent)',
        }}
        aria-hidden="true"
      />

      {/* ---- Mobile Full-Screen Overlay ---- */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-midnight/98 backdrop-blur-md',
          'flex flex-col lg:hidden',
          'transition-all duration-500',
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        )}
        style={{ top: 0 }}
      >
        {/* Push content below header height */}
        <div className="h-16" aria-hidden="true" />

        <nav
          className="flex-1 overflow-y-auto px-6 pt-8 pb-12"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-2">
            {navItems.map((item, idx) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-3 font-serif text-2xl font-semibold tracking-wide',
                    'text-ivory hover:text-gold transition-colors duration-300',
                    'animate-fade-in'
                  )}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {item.label}
                </Link>

                {'children' in item && item.children && (
                  <ul className="ml-4 mt-1 mb-2 space-y-1 border-l border-plum/40 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'block py-1.5 text-base font-sans',
                            'text-champagne/60 hover:text-gold transition-colors duration-200'
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile account link */}
          <div className="mt-10 pt-6 border-t border-plum/30">
            <Link
              href="/account"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 text-champagne/70 hover:text-gold transition-colors"
            >
              <UserIcon />
              <span className="font-sans text-sm tracking-wide">My Account</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
