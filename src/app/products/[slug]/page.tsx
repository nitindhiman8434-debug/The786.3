'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products, getProductBySlug, type Product } from '@/data/products';

const categoryLabels: Record<string, string> = {
  'for-him': 'For Him',
  'for-her': 'For Her',
  unisex: 'Unisex',
  gifting: 'Gifting',
};

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-plum/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-ivory hover:text-gold transition-colors"
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`h-5 w-5 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-4' : 'max-h-0'}`}
      >
        <div className="text-champagne/60 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const firstSize = Object.keys(product.prices)[0];
  const firstPrice = product.prices[firstSize];
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 group-hover:border-gold/40">
        <div className="aspect-[3/4] img-placeholder relative">
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
          <span className="absolute bottom-4 left-4 font-serif text-lg text-ivory">
            {product.name}
          </span>
        </div>
        <div className="p-4">
          <p className="text-xs text-gold uppercase tracking-widest mb-1">
            {product.scentFamily}
          </p>
          <p className="text-champagne/50 text-sm mb-2 line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="text-gold font-semibold">
            From {'\u20B9'}{firstPrice.toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : 'oud-al-sultan';
  const product = getProductBySlug(slug) ?? products[0];

  const sizes = Object.entries(product.prices);
  const [selectedSize, setSelectedSize] = useState(sizes.length > 1 ? sizes[1][0] : sizes[0][0]);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  const relatedProducts = product.relatedProducts
    .map((s) => getProductBySlug(s))
    .filter(Boolean)
    .slice(0, 3) as Product[];

  const layeringProduct = product.layeringSuggestion
    ? getProductBySlug(
        products.find(
          (p) =>
            p.slug !== product.slug &&
            product.layeringSuggestion.toLowerCase().includes(p.name.toLowerCase()),
        )?.slug ?? '',
      )
    : undefined;

  const longevityHours = parseInt(product.longevity) || 8;
  const longevityPercent = Math.min(100, (longevityHours / 14) * 100);

  const sillageMap: Record<string, number> = {
    Intimate: 25,
    Moderate: 50,
    'Moderate to Strong': 65,
    Strong: 85,
    Enormous: 100,
  };
  const sillagePercent = sillageMap[product.sillage] ?? 50;

  const thumbnails = [product.images.main, ...product.images.gallery];

  return (
    <div className="animate-fade-in">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-champagne/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/${product.category}`}
              className="hover:text-gold transition-colors"
            >
              {categoryLabels[product.category]}
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/70">{product.name}</li>
        </ol>
      </nav>

      {/* ─── Top Section: Gallery + Purchase ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Gallery */}
          <div>
            <div className="aspect-[3/4] img-placeholder rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-plum/20 via-transparent to-burgundy/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full border border-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-champagne/30 text-sm">{product.name}</p>
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {thumbnails.slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMainImageIdx(i)}
                  className={`aspect-square img-placeholder rounded-lg transition-all duration-200 ${
                    mainImageIdx === i
                      ? 'ring-2 ring-gold ring-offset-2 ring-offset-midnight'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-plum/10 to-transparent rounded-lg" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Purchase Module */}
          <div className="flex flex-col justify-start">
            <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-3">
              {product.scentFamily}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-ivory mb-4">
              {product.name}
            </h1>
            {product.badges.length > 0 && (
              <div className="flex gap-2 mb-4">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold/30 text-gold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <p className="text-champagne/50 leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-xs text-champagne/40 uppercase tracking-wider mb-3">
                Select Size
              </p>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(([size, price]) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`glass-card rounded-xl py-4 px-3 text-center transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-gold !border-gold shadow-[0_0_20px_rgba(201,151,43,0.15)]'
                        : 'hover:border-plum-light'
                    }`}
                  >
                    <span className="block text-ivory text-sm font-medium">
                      {size}
                    </span>
                    <span className="block text-gold font-semibold mt-1">
                      {'\u20B9'}{price.toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <button className="w-full bg-gold hover:bg-gold-light text-midnight font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,151,43,0.25)] mb-3">
              Add to Cart
            </button>
            <Link
              href="/checkout"
              className="w-full border border-gold text-gold hover:bg-gold/10 font-semibold py-4 rounded-xl transition-all duration-200 text-center block mb-6"
            >
              Buy Now
            </Link>

            {/* Trust Line */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-champagne/50 mb-4">
              <span className="flex items-center gap-1">
                <span className="text-green-400">&#10003;</span> COD Available
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">&#10003;</span> Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">&#10003;</span> Luxury Packaging
              </span>
            </div>

            {/* WhatsApp Help */}
            <a
              href="https://wa.me/918800505707"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-champagne/40 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.614-.782-6.414-2.105l-.45-.338-2.632.882.882-2.632-.338-.45A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Need help? Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── Scent Pyramid ─── */}
      {product.topNotes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl text-center text-ivory mb-2">
            The Scent Pyramid
          </h2>
          <p className="text-champagne/40 text-center text-sm mb-10">
            How {product.name} unfolds on your skin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Top Notes */}
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-lg">&#9650;</span>
              </div>
              <h3 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Top Notes
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {product.topNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-full bg-midnight-lighter text-champagne/70 text-xs border border-plum/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Heart Notes */}
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-burgundy/20 flex items-center justify-center">
                <span className="text-burgundy-light text-lg">&#9829;</span>
              </div>
              <h3 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Heart Notes
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {product.heartNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-full bg-midnight-lighter text-champagne/70 text-xs border border-plum/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Base Notes */}
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-plum/20 flex items-center justify-center">
                <span className="text-plum-light text-lg">&#9724;</span>
              </div>
              <h3 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Base Notes
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {product.baseNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-full bg-midnight-lighter text-champagne/70 text-xs border border-plum/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Longevity & Sillage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-champagne/50">
                  Longevity
                </span>
                <span className="text-sm text-gold font-medium">{product.longevity}</span>
              </div>
              <div className="h-2 rounded-full bg-midnight-lighter overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold transition-all duration-1000"
                  style={{ width: `${longevityPercent}%` }}
                />
              </div>
            </div>
            <div className="glass-card rounded-xl p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-champagne/50">
                  Sillage
                </span>
                <span className="text-sm text-gold font-medium">{product.sillage}</span>
              </div>
              <div className="h-2 rounded-full bg-midnight-lighter overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-plum to-burgundy transition-all duration-1000"
                  style={{ width: `${sillagePercent}%` }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── Layering Suggestion ─── */}
      {layeringProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl text-ivory mb-2">
            The Art of Layering
          </h2>
          <p className="text-champagne/50 text-sm mb-8 max-w-xl">
            {product.layeringSuggestion}
          </p>
          <div className="max-w-sm">
            <ProductCard product={layeringProduct} />
          </div>
        </section>
      )}

      {layeringProduct && <div className="section-divider max-w-7xl mx-auto" />}

      {/* ─── Related Products ─── */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl text-ivory mb-2">
            You May Also Love
          </h2>
          <p className="text-champagne/40 text-sm mb-8">
            Fragrances that share the same spirit
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.slug} product={rp} />
            ))}
          </div>
        </section>
      )}

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── Care & FAQ ─── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl text-ivory mb-8">
          Care &amp; Questions
        </h2>
        <AccordionItem title="How should I store my perfume?">
          Store your fragrance in a cool, dark place away from direct sunlight and
          temperature fluctuations. The original box provides ideal protection. Avoid
          keeping bottles in the bathroom where humidity can degrade the composition over
          time.
        </AccordionItem>
        <AccordionItem title="How do I get the best longevity?">
          Apply to pulse points &mdash; wrists, neck, behind the ears &mdash; on well-moisturised
          skin. Layering with an unscented body oil beforehand creates a &ldquo;scent bed&rdquo; that
          dramatically extends wear time. Avoid rubbing your wrists together as this breaks
          down the top notes prematurely.
        </AccordionItem>
        <AccordionItem title="What is your return policy?">
          We accept returns on unused, sealed products within 7 days of delivery. If you
          receive a damaged or incorrect item, contact us immediately via WhatsApp or email
          and we will arrange a replacement or full refund. Discovery sets and opened
          products are non-returnable for hygiene reasons.
        </AccordionItem>
      </section>
    </div>
  );
}
