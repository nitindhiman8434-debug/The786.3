import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Learn about THE786 shipping coverage, delivery timelines, COD availability, and order tracking.",
};

const sections = [
  {
    title: "Shipping Coverage",
    content:
      "THE786 currently ships exclusively within India to all serviceable pin codes. We partner with trusted logistics providers to ensure your fragrance reaches you safely, regardless of whether you are in a metro city or a smaller town. Your pin code is verified at checkout in real time.",
    highlight: false,
  },
  {
    title: "Delivery Timeline",
    content:
      "Standard delivery takes five to seven business days from the date of dispatch. We are actively working on introducing an express delivery option with a two to three business day window for select metro cities. Delivery times may extend slightly during festive seasons or adverse weather conditions.",
    highlight: true,
    highlightText: "Standard: 5–7 business days",
  },
  {
    title: "Order Processing",
    content:
      "All orders are processed within twenty-four to forty-eight hours of placement. Each parcel is hand-inspected, wrapped in our signature midnight-and-gold packaging, and sealed before handover to our logistics partner. Orders placed after 5 PM IST or on Sundays and public holidays are processed the following business day.",
    highlight: false,
  },
  {
    title: "Cash on Delivery",
    content:
      "Cash on Delivery is available pan-India on orders valued up to five thousand rupees. There are no additional surcharges for choosing COD — the price at checkout is the price you pay upon delivery. For orders exceeding this threshold, prepaid payment methods including UPI, credit and debit cards, net banking, and popular wallets are available.",
    highlight: true,
    highlightText: "COD available on orders up to ₹5,000 — no extra charges",
  },
  {
    title: "Order Tracking",
    content:
      "Once your order has been dispatched, you will receive tracking details via both SMS and email. These include a direct link to our logistics partner's tracking portal, where you can monitor your parcel in real time. If your tracking status has not updated within forty-eight hours of dispatch, please contact our concierge team and we will investigate immediately.",
    highlight: false,
  },
  {
    title: "Shipping Cost",
    content:
      "Shipping is complimentary on all orders placed through our website. We believe that the luxury experience should extend from selection to unboxing, and we absorb shipping costs so that the price you see is the price you pay — nothing more.",
    highlight: true,
    highlightText: "Free shipping on every order",
  },
  {
    title: "Need Help?",
    content:
      "If you have questions about your shipment or need assistance with delivery, our concierge team is available Monday through Saturday, 10 AM to 7 PM IST.",
    highlight: false,
  },
];

export default function ShippingPolicyPage() {
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
          <li className="text-champagne/80">Shipping Policy</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/10 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Policy
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ivory mb-4">
            Shipping &amp; <span className="text-gradient-gold">Delivery</span>
          </h1>
          <p className="text-champagne/50 text-sm">
            Last updated: January 2024
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-serif text-2xl text-gold-light mb-4">
                {section.title}
              </h2>
              {section.highlight && section.highlightText && (
                <div className="glass-card rounded-lg px-6 py-4 mb-4">
                  <p className="text-gold text-sm font-medium">
                    {section.highlightText}
                  </p>
                </div>
              )}
              <p className="text-champagne/65 leading-relaxed">
                {section.content}
              </p>
              {section.title === "Need Help?" && (
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href="mailto:concierge@the786.in"
                    className="text-gold text-sm hover:text-gold-light transition-colors"
                  >
                    concierge@the786.in
                  </a>
                  <a
                    href="https://wa.me/918800505707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:text-gold-light transition-colors"
                  >
                    WhatsApp: +91 8800505707
                  </a>
                </div>
              )}
              {i < sections.length - 1 && (
                <div className="section-divider mt-12" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
