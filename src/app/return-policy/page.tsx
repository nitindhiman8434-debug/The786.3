import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "THE786 return window, refund timelines, exchange policy, and how to request a return.",
};

const sections = [
  {
    title: "Return Window",
    content:
      "We accept returns within seven days of delivery. To be eligible, the item must be unused, unopened, and in its original sealed packaging. We understand that purchasing a fragrance online requires trust, and this policy is designed to give you confidence while protecting the integrity of our products.",
    highlight: true,
    highlightText: "7-day return window from the date of delivery",
  },
  {
    title: "Conditions for Return",
    content:
      "To qualify for a return, the perfume must be in its original, factory-sealed condition with all packaging intact — including the cellophane wrap, outer box, and any included materials. Items that show signs of use, tampering, or damage caused after delivery are not eligible. This policy ensures that every bottle reaching a customer is pristine and untouched.",
    highlight: false,
  },
  {
    title: "How to Request a Return",
    content:
      "To initiate a return, contact our concierge team via email at concierge@the786.in or WhatsApp at +91 8800505707. Please include your order number, the item you wish to return, and the reason for your request. Our team will respond within twenty-four hours with return instructions, including the shipping address and any applicable reference number.",
    highlight: false,
  },
  {
    title: "Damaged or Defective Parcels",
    content:
      "If your order arrives damaged, broken, or with a defective seal, please report it within forty-eight hours of delivery. Include clear photographs of the damage — the outer packaging, the inner box, and the bottle itself. We take quality control seriously, and verified damage claims are processed on priority with a full replacement or refund at your discretion.",
    highlight: true,
    highlightText: "Report damaged parcels within 48 hours with photographs",
  },
  {
    title: "Refund Timeline",
    content:
      "Once we receive and inspect your returned item, refunds are processed within seven to ten business days. The refund is issued to your original payment method — bank account, card, or wallet. For COD orders, refunds are processed via bank transfer; our team will collect your bank details securely during the return process.",
    highlight: false,
  },
  {
    title: "Non-Returnable Items",
    content:
      "For hygiene and safety reasons, the following items cannot be returned: opened or used perfumes, attars and oil-based fragrances with broken seals, tester or sample-size products, and items purchased during final-sale promotions explicitly marked as non-returnable. We encourage you to explore our discovery sets if you would like to sample before committing to a full-size bottle.",
    highlight: true,
    highlightText:
      "Opened perfumes, attars, testers, and final-sale items are non-returnable",
  },
  {
    title: "Exchange Policy",
    content:
      "We offer exchanges within seven days of delivery for sealed, unused items. If you would like to exchange a fragrance for a different composition or size, contact our concierge team with your order details. Exchanges are subject to product availability. If the replacement item differs in price, we will process the difference as a charge or refund accordingly.",
    highlight: false,
  },
  {
    title: "Need Assistance?",
    content:
      "Our concierge team is here to make the process as seamless as possible. Do not hesitate to reach out — we would rather help you find the right fragrance than leave you with the wrong one.",
    highlight: false,
  },
];

export default function ReturnPolicyPage() {
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
          <li className="text-champagne/80">Returns &amp; Refunds</li>
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
            Returns &amp; <span className="text-gradient-gold">Refunds</span>
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
              {section.title === "Need Assistance?" && (
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
