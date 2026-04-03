'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = [
  { slug: 'oud-al-sultan', name: 'Oud Al Sultan', category: 'For Him', price: 1599 },
  { slug: 'midnight-oryx', name: 'Midnight Oryx', category: 'For Him', price: 1599 },
  { slug: 'imperial-saffron', name: 'Imperial Saffron', category: 'For Him', price: 1599 },
  { slug: 'royal-oud', name: 'Royal Oud', category: 'For Him', price: 1599 },
  { slug: 'velvet-rose-and-oud', name: 'Velvet Rose & Oud', category: 'For Her', price: 1599 },
  { slug: 'royal-plum-nectar', name: 'Royal Plum Nectar', category: 'For Her', price: 1599 },
  { slug: 'midnight-jasmine', name: 'Midnight Jasmine', category: 'For Her', price: 1599 },
  { slug: 'amber-gilded', name: 'Amber Gilded', category: 'Unisex', price: 1599 },
  { slug: 'oud-al-maliki', name: 'Oud Al Maliki', category: 'Unisex', price: 1599 },
  { slug: 'silver-smoke', name: 'Silver Smoke', category: 'Unisex', price: 1599 },
  { slug: 'discovery-coffret', name: 'Discovery Coffret', category: 'Gift Set', price: 2999 },
];

const popularSearches = ['Oud', 'Rose', 'Saffron', 'Amber'];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const hasQuery = query.trim().length > 0;

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-champagne/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/70">Search</li>
        </ol>
      </nav>

      {/* Search Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl text-ivory mb-2">
            Search
          </h1>
          <p className="text-champagne/50 text-sm">
            Find your perfect fragrance
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-xl mx-auto relative">
          {/* Magnifier Icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/40 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fragrances..."
            className="w-full bg-midnight-light border border-champagne/10 rounded-sm pl-12 pr-4 py-4 text-ivory placeholder:text-champagne/30 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/40 transition-all duration-300"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-champagne/40 hover:text-ivory transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Results / Default State */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {!hasQuery ? (
          /* Default state */
          <div className="text-center py-16">
            <div className="w-10 h-10 border border-plum/20 rotate-45 mx-auto mb-8" />
            <h2 className="font-serif text-2xl md:text-3xl text-ivory mb-4">
              Discover Your Signature
            </h2>
            <p className="text-champagne/50 text-sm max-w-md mx-auto mb-10">
              Explore our curated collection of luxury fragrances, each crafted
              to leave an unforgettable impression.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-5 py-2.5 border border-champagne/15 rounded-sm text-champagne/60 text-sm hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : filtered.length > 0 ? (
          /* Results */
          <>
            <p className="text-champagne/40 text-sm mb-8">
              {filtered.length} result{filtered.length !== 1 && 's'} for{' '}
              <span className="text-champagne/70">&ldquo;{query.trim()}&rdquo;</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  {/* Image Placeholder */}
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 img-placeholder bg-gradient-to-br from-midnight-lighter to-plum/15 group-hover:to-plum/25 transition-all duration-700">
                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="w-8 h-8 border border-plum/15 rotate-45 group-hover:border-gold/30 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gold/50 text-xs uppercase tracking-widest">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-xl text-ivory group-hover:text-champagne transition-colors mt-1">
                    {product.name}
                  </h3>
                  <p className="text-champagne/60 text-sm mt-2">
                    From{' '}
                    <span className="text-gold">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="w-10 h-10 border border-champagne/10 rotate-45 mx-auto mb-8" />
            <h2 className="font-serif text-2xl text-ivory mb-3">
              No Fragrances Found
            </h2>
            <p className="text-champagne/50 text-sm max-w-md mx-auto mb-8">
              We couldn&apos;t find any fragrances matching &ldquo;{query.trim()}&rdquo;.
              Try a different search or browse our collections.
            </p>
            <Link
              href="/collections"
              className="inline-block px-8 py-3 bg-gold text-midnight text-sm font-medium uppercase tracking-wider hover:bg-champagne transition-colors duration-300"
            >
              Browse Collections
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
