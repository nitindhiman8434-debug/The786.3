import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach THE786 concierge for fragrance consultations, order support, or bespoke enquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-midnight">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-champagne/50">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/80">Contact</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/15 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ivory mb-6">
            The <span className="text-gradient-gold">Concierge</span>
          </h1>
          <p className="text-champagne/60 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you seek guidance on a fragrance, need help with an order,
            or wish to explore our bespoke programme — we are here.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl text-ivory mb-8">
                  Reach Us Directly
                </h2>
                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:concierge@the786.in"
                      className="text-champagne hover:text-gold transition-colors"
                    >
                      concierge@the786.in
                    </a>
                  </div>
                  {/* Phone */}
                  <div>
                    <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+918800505707"
                      className="text-champagne hover:text-gold transition-colors"
                    >
                      +91 8800505707
                    </a>
                  </div>
                  {/* WhatsApp */}
                  <div>
                    <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918800505707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-champagne hover:text-gold transition-colors inline-flex items-center gap-2"
                    >
                      +91 8800505707
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.558 4.143 1.534 5.886L0 24l6.305-1.654A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.98 0-3.82-.58-5.37-1.577l-.385-.228-3.988 1.046 1.065-3.89-.25-.398A9.716 9.716 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z" />
                      </svg>
                    </a>
                  </div>
                  {/* Hours */}
                  <div>
                    <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-2">
                      Hours
                    </p>
                    <p className="text-champagne/70">
                      Mon &ndash; Sat, 10 AM &ndash; 7 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Shortcut */}
              <div className="glass-card rounded-lg p-6">
                <p className="text-ivory font-serif text-lg mb-2">
                  Looking for quick answers?
                </p>
                <p className="text-champagne/50 text-sm mb-4">
                  Our FAQ covers shipping, returns, fragrance care and more.
                </p>
                <Link
                  href="/faq"
                  className="text-gold text-sm hover:text-gold-light transition-colors inline-flex items-center gap-1"
                >
                  Visit the FAQ
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-lg p-8 md:p-10">
                <h2 className="font-serif text-2xl text-ivory mb-8">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs text-champagne/50 tracking-wider uppercase mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        className="w-full bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory placeholder-champagne/30 focus:border-gold transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs text-champagne/50 tracking-wider uppercase mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        className="w-full bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory placeholder-champagne/30 focus:border-gold transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs text-champagne/50 tracking-wider uppercase mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory placeholder-champagne/30 focus:border-gold transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs text-champagne/50 tracking-wider uppercase mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory focus:border-gold transition-colors text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="order">Order Support</option>
                      <option value="product">Product Enquiry</option>
                      <option value="bespoke">Bespoke Consultation</option>
                      <option value="wholesale">Wholesale &amp; Gifting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs text-champagne/50 tracking-wider uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory placeholder-champagne/30 focus:border-gold transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-midnight font-semibold rounded hover:opacity-90 transition-opacity text-sm tracking-wider uppercase"
                  >
                    Send Message
                  </button>
                  <p className="text-champagne/30 text-xs text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
