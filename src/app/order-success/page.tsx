import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed',
};

const orderedItems = [
  { name: 'Oud Al Sultan', size: '50ml', price: 1599, quantity: 1 },
  { name: 'Amber Gilded', size: '100ml', price: 2999, quantity: 1 },
];

const careTips = [
  {
    icon: '\u2744\uFE0F',
    title: 'Store Cool & Dark',
    text: 'Keep your fragrances away from direct sunlight and heat. A drawer or closet shelf is ideal.',
  },
  {
    icon: '\uD83E\uDDF4',
    title: 'Moisturise First',
    text: 'Apply to well-moisturised skin for longer-lasting scent. Unscented balm works best.',
  },
  {
    icon: '\u2728',
    title: 'Pulse Points',
    text: 'Spray on wrists, neck, and behind ears. Let the fragrance bloom naturally \u2014 never rub.',
  },
];

export default function OrderSuccessPage() {
  const total = orderedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Gold Checkmark */}
        <div className="relative mx-auto mb-8 w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-gold/10 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-[0_0_40px_rgba(201,151,43,0.3)]">
            <svg className="w-12 h-12 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl text-ivory mb-3">
          Your Order is Confirmed
        </h1>
        <p className="text-champagne/50 text-lg mb-2">
          Thank you for choosing THE786
        </p>
        <p className="text-gold font-mono text-sm tracking-wider mb-10">
          Order #THE786-20240001
        </p>

        {/* Order Summary Card */}
        <div className="glass-card rounded-xl p-6 sm:p-8 text-left mb-8 mx-auto max-w-lg">
          <h2 className="font-serif text-xl text-ivory mb-4 text-center">Order Summary</h2>
          <div className="space-y-4 mb-5">
            {orderedItems.map((item) => (
              <div key={`${item.name}-${item.size}`} className="flex items-center justify-between">
                <div>
                  <p className="text-ivory text-sm font-medium">{item.name}</p>
                  <p className="text-champagne/40 text-xs">
                    {item.size} &times; {item.quantity}
                  </p>
                </div>
                <p className="text-ivory text-sm">
                  {'\u20B9'}{(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>
          <div className="section-divider mb-4" />
          <div className="flex justify-between items-center">
            <span className="text-champagne/50 text-sm">Total Paid</span>
            <span className="text-gold font-bold text-xl">
              {'\u20B9'}{total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Delivery Estimate */}
        <div className="glass-card rounded-xl p-5 mb-8 mx-auto max-w-lg">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-plum/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-ivory text-sm font-medium">Expected Delivery</p>
              <p className="text-champagne/50 text-xs">5-7 business days</p>
            </div>
          </div>
        </div>

        {/* The Linger Promise - Care Tips */}
        <div className="mb-10 mx-auto max-w-lg">
          <h2 className="font-serif text-2xl text-ivory mb-2">The Linger Promise</h2>
          <p className="text-champagne/40 text-sm mb-6">
            A few tips to make every drop last longer
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {careTips.map((tip) => (
              <div
                key={tip.title}
                className="glass-card rounded-xl p-4 text-center"
              >
                <span className="text-2xl block mb-2">{tip.icon}</span>
                <h3 className="text-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  {tip.title}
                </h3>
                <p className="text-champagne/50 text-xs leading-relaxed">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-lg mx-auto">
          <button className="flex-1 bg-gold hover:bg-gold-light text-midnight font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,151,43,0.25)]">
            Track Shipment
          </button>
          <button className="flex-1 border border-gold text-gold hover:bg-gold/10 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200">
            Download Invoice
          </button>
        </div>

        {/* Continue Shopping */}
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-champagne/40 hover:text-gold transition-colors text-sm group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
