'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, getProductBySlug, type Product } from '@/data/products';

interface CartItem {
  slug: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      slug: 'oud-al-sultan',
      name: 'Oud Al Sultan',
      size: '50ml',
      price: 1599,
      quantity: 1,
    },
    {
      slug: 'amber-gilded',
      name: 'Amber Gilded',
      size: '100ml',
      price: 2999,
      quantity: 1,
    },
  ]);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    );
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const suggestions = [
    getProductBySlug('imperial-saffron'),
    getProductBySlug('velvet-rose-and-oud'),
    getProductBySlug('silver-smoke'),
  ].filter(Boolean) as Product[];

  if (cartItems.length === 0) {
    return (
      <div className="animate-fade-in">
        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <ol className="flex items-center gap-2 text-xs text-champagne/40">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li className="text-champagne/70">Cart</li>
          </ol>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-32 text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full border border-plum/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl text-ivory mb-4">Your Collection Awaits</h1>
          <p className="text-champagne/50 mb-8 max-w-md mx-auto">
            Your cart is empty. Explore our curated selection of luxury fragrances and find the
            scent that speaks to you.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-light text-midnight font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,151,43,0.25)]"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-champagne/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li className="text-champagne/70">Cart</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-4xl text-ivory mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Line Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.slug}-${item.size}`}
                className="glass-card rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 relative"
              >
                {/* Image */}
                <div className="w-full sm:w-28 h-36 sm:h-28 img-placeholder rounded-lg flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-plum/15 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-champagne/20 text-xs">{item.name}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="font-serif text-xl text-ivory">{item.name}</h3>
                    <p className="text-champagne/40 text-sm mt-1">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-8 h-8 rounded-lg bg-midnight-lighter border border-plum/20 flex items-center justify-center text-ivory hover:border-gold/40 transition-colors"
                      >
                        &minus;
                      </button>
                      <span className="text-ivory font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-8 h-8 rounded-lg bg-midnight-lighter border border-plum/20 flex items-center justify-center text-ivory hover:border-gold/40 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gold font-semibold text-lg">
                      {'\u20B9'}{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(index)}
                  className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto text-champagne/30 hover:text-crimson transition-colors self-start"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl text-ivory mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-champagne/50">
                    Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)} items)
                  </span>
                  <span className="text-ivory">
                    {'\u20B9'}{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-champagne/50">Shipping</span>
                  <span className="text-green-400 text-xs font-medium">FREE</span>
                </div>
                <div className="section-divider my-3" />
                <div className="flex justify-between">
                  <span className="text-ivory font-medium">Total</span>
                  <span className="text-gold font-bold text-xl">
                    {'\u20B9'}{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    className="flex-1 bg-midnight-lighter border border-plum/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder:text-champagne/30 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                  />
                  <button
                    onClick={() => promoCode && setPromoApplied(true)}
                    className="px-4 py-2.5 bg-midnight-lighter border border-plum/20 rounded-lg text-sm text-gold hover:border-gold/40 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-green-400 text-xs mt-2">Code applied successfully!</p>
                )}
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="block w-full bg-gold hover:bg-gold-light text-midnight font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,151,43,0.25)] text-center mb-4"
              >
                Proceed to Checkout
              </Link>

              {/* COD Note */}
              <div className="flex items-center gap-2 text-xs text-champagne/40 mb-4 justify-center">
                <span className="text-green-400">&#10003;</span>
                Cash on Delivery available
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2">
                {['Secure\nPayment', 'Free\nShipping', 'Luxury\nPackaging'].map((badge) => (
                  <div
                    key={badge}
                    className="bg-midnight-lighter rounded-lg p-3 text-center"
                  >
                    <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold text-[10px]">&#10003;</span>
                    </div>
                    <span className="text-[10px] text-champagne/40 whitespace-pre-line leading-tight">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── You May Also Like ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl text-ivory mb-2">You May Also Like</h2>
        <p className="text-champagne/40 text-sm mb-8">
          Complete your fragrance wardrobe
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
