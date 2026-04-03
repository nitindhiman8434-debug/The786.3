'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
}

const steps = [
  { num: 1, label: 'Shipping' },
  { num: 2, label: 'Payment' },
  { num: 3, label: 'Review' },
];

const paymentMethods = [
  { id: 'cod', label: 'Cash on Delivery', note: 'Pay when your order arrives', available: true },
  { id: 'upi', label: 'UPI', note: 'Google Pay, PhonePe, Paytm', available: false },
  { id: 'card', label: 'Credit / Debit Card', note: 'Visa, Mastercard, Rupay', available: false },
  { id: 'netbanking', label: 'Net Banking', note: 'All major banks', available: false },
];

const orderItems = [
  { name: 'Oud Al Sultan', size: '50ml', price: 1599, quantity: 1 },
  { name: 'Amber Gilded', size: '100ml', price: 2999, quantity: 1 },
];

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const inputClasses =
    'w-full bg-midnight-lighter border border-plum/20 rounded-xl px-4 py-3 text-sm text-ivory placeholder:text-champagne/25 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors';
  const labelClasses = 'block text-xs text-champagne/50 uppercase tracking-wider mb-2';

  return (
    <div className="animate-fade-in">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-champagne/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/cart" className="hover:text-gold transition-colors">Cart</Link>
          </li>
          <li>/</li>
          <li className="text-champagne/70">Checkout</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-4xl text-ivory mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Form */}
          <div className="lg:col-span-2 space-y-10">
            {/* Step Indicator */}
            <div className="flex items-center justify-center sm:justify-start gap-0">
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.num === 1
                          ? 'bg-gold text-midnight'
                          : 'bg-midnight-lighter border border-plum/30 text-champagne/40'
                      }`}
                    >
                      {step.num}
                    </div>
                    <span
                      className={`text-sm ${
                        step.num === 1 ? 'text-gold font-medium' : 'text-champagne/40'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-12 sm:w-20 h-px bg-plum/30 mx-3" />
                  )}
                </div>
              ))}
            </div>

            {/* Shipping Form */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-ivory mb-6">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className={labelClasses}>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="you@email.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClasses}>Address Line 1</label>
                  <input
                    type="text"
                    value={formData.address1}
                    onChange={handleChange('address1')}
                    placeholder="House/Flat number, Street"
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClasses}>Address Line 2</label>
                  <input
                    type="text"
                    value={formData.address2}
                    onChange={handleChange('address2')}
                    placeholder="Landmark, Area (optional)"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={handleChange('city')}
                    placeholder="City"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={handleChange('state')}
                    placeholder="State"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Pincode</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={handleChange('pincode')}
                    placeholder="6-digit pincode"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-ivory mb-6">Payment Method</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      paymentMethod === method.id
                        ? 'border-gold/60 bg-gold/5'
                        : 'border-plum/20 bg-midnight-lighter hover:border-plum/40'
                    } ${!method.available && method.id !== 'cod' ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => method.available && setPaymentMethod(method.id)}
                      disabled={!method.available}
                      className="mt-1 accent-gold"
                    />
                    <div>
                      <span className="text-ivory text-sm font-medium flex items-center gap-2">
                        {method.label}
                        {!method.available && method.id !== 'cod' && (
                          <span className="text-[10px] bg-plum/30 text-champagne/40 px-2 py-0.5 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </span>
                      <span className="text-champagne/40 text-xs mt-0.5 block">
                        {method.note}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* WhatsApp Opt-in */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsappOptIn}
                onChange={(e) => setWhatsappOptIn(e.target.checked)}
                className="mt-1 accent-gold rounded"
              />
              <div>
                <span className="text-ivory text-sm">
                  Get order updates on WhatsApp
                </span>
                <span className="text-champagne/40 text-xs block mt-0.5">
                  We&apos;ll send shipping confirmations and delivery updates to your WhatsApp number
                </span>
              </div>
            </label>
          </div>

          {/* RIGHT: Sticky Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl text-ivory mb-6">Your Order</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={`${item.name}-${item.size}`} className="flex gap-3">
                    <div className="w-14 h-14 img-placeholder rounded-lg flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-plum/15 to-transparent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-ivory text-sm font-medium truncate">{item.name}</p>
                      <p className="text-champagne/40 text-xs">
                        {item.size} &times; {item.quantity}
                      </p>
                    </div>
                    <p className="text-ivory text-sm font-medium">
                      {'\u20B9'}{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="section-divider mb-4" />

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-champagne/50">Subtotal</span>
                  <span className="text-ivory">{'\u20B9'}{subtotal.toLocaleString('en-IN')}</span>
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

              {/* Place Order */}
              <Link
                href="/order-success"
                className="block w-full bg-gold hover:bg-gold-light text-midnight font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,151,43,0.25)] text-center text-lg mb-4"
              >
                Place Order
              </Link>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[10px] text-champagne/40 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Protected
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                  </svg>
                  Luxury Pack
                </span>
              </div>

              {/* WhatsApp Support */}
              <a
                href="https://wa.me/918800505707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-champagne/40 hover:text-green-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.614-.782-6.414-2.105l-.45-.338-2.632.882.882-2.632-.338-.45A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Need help? Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
