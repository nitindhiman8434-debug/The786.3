"use client";

import Link from "next/link";
import { useState } from "react";

const faqCategories = [
  {
    id: "shipping",
    name: "Shipping & Logistics",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 5 to 7 business days across India. We are working to introduce an express option with 2 to 3 business day delivery in select metros. All orders include tracking via SMS and email, so you can follow your parcel from our atelier to your doorstep.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you will receive a tracking link via both SMS and email. You can use this link to monitor your parcel in real time through our logistics partner's portal. If your tracking information has not updated within 48 hours of dispatch, please reach out to our concierge team.",
      },
      {
        q: "Do you deliver to my pin code?",
        a: "We deliver to all serviceable pin codes across India through our trusted logistics partners. During checkout, your pin code is verified in real time. In the rare event that your area is not yet covered, our concierge team will reach out to arrange an alternative.",
      },
      {
        q: "Is there a shipping fee?",
        a: "Shipping is complimentary on all orders. Every THE786 parcel is carefully packaged in our signature midnight-and-gold presentation, ensuring your fragrance arrives in the same condition it left our hands — at no additional cost to you.",
      },
    ],
  },
  {
    id: "cod",
    name: "COD Policy",
    questions: [
      {
        q: "Is Cash on Delivery available?",
        a: "Yes. Cash on Delivery is available pan-India on orders up to five thousand rupees. For orders above this threshold, we offer prepaid options including UPI, credit and debit cards, net banking, and popular wallets.",
      },
      {
        q: "Are there additional charges for COD?",
        a: "There are no hidden surcharges for choosing Cash on Delivery. The amount you see at checkout is the amount you pay upon delivery — no more, no less. We believe transparent pricing is essential to the luxury experience.",
      },
      {
        q: "Is there a limit on COD orders?",
        a: "COD is available on individual orders valued at up to five thousand rupees. This policy helps us maintain a seamless fulfilment experience. For higher-value purchases, we recommend prepaid payment, which also unlocks priority processing.",
      },
      {
        q: "Will I receive a verification call for COD orders?",
        a: "For COD orders, our team may place a brief verification call or send a WhatsApp message to confirm your delivery details. This step protects both you and us, ensuring your fragrance reaches the right hands at the right address.",
      },
    ],
  },
  {
    id: "longevity",
    name: "Longevity & Preservation",
    questions: [
      {
        q: "How long do your fragrances last on skin?",
        a: "Our Eau de Parfum compositions are formulated for the Indian climate and typically deliver eight to twelve hours of wear. Sillage — the scent trail you leave — remains noticeable for four to six hours. Attar-based concentrations can last even longer, often persisting for an entire day.",
      },
      {
        q: "How should I store my perfumes?",
        a: "Store your bottles upright in a cool, dry place away from direct sunlight and temperature fluctuations. A wardrobe or dresser drawer is ideal. Avoid keeping perfumes in the bathroom, where humidity and heat can degrade the composition over time. Properly stored, a THE786 fragrance will maintain its character for three to five years.",
      },
      {
        q: "Do certain scents work better in different seasons?",
        a: "Absolutely. Lighter, citrus-forward and floral compositions feel most alive in summer, while oud-heavy and amber-based fragrances truly bloom in cooler months. That said, our range is designed for the Indian climate — warmer compositions are calibrated to perform beautifully even in heat. We encourage experimentation.",
      },
      {
        q: "What is the difference between EDP and Attar?",
        a: "Eau de Parfum (EDP) is an alcohol-based formulation with fifteen to twenty percent fragrance concentration, offering balanced projection and sillage. Attar is a traditional oil-based concentrate with no alcohol, applied directly to the skin. Attars sit closer to the body and evolve more intimately, while EDPs project more freely. Both formats have their own elegance.",
      },
    ],
  },
  {
    id: "care",
    name: "Perfume Care",
    questions: [
      {
        q: "Where should I apply perfume for the best effect?",
        a: "Apply to pulse points — the inner wrists, behind the ears, the base of the throat, and the inside of the elbows. These areas generate warmth that helps the fragrance diffuse naturally. For extended sillage, lightly mist your clothing, particularly natural fabrics like cotton and wool. Avoid rubbing your wrists together, as friction breaks down the top notes prematurely.",
      },
      {
        q: "Can I layer multiple THE786 fragrances?",
        a: "We actively encourage it. Our compositions are designed with an open architecture that invites layering. A general rule is to apply the heavier fragrance first and the lighter one on top. Our concierge team can recommend pairings based on your preferences — reach out on WhatsApp for personalised suggestions.",
      },
      {
        q: "Is it safe to carry perfume while travelling?",
        a: "Yes. Our standard bottles comply with airline carry-on regulations for liquids when placed in a clear, resealable bag. For frequent travellers, we recommend our travel-size formats, which are specifically designed for portability. Always ensure the cap is secure to prevent leakage from pressure changes during flight.",
      },
      {
        q: "Does skin type affect how a fragrance wears?",
        a: "Significantly. Oily skin tends to hold fragrance longer because the natural oils provide a base for the perfume molecules to bond with. Drier skin may cause fragrances to fade faster — in this case, applying an unscented moisturiser before your fragrance creates a hydrated base that extends wear time considerably.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("shipping");

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
          <li className="text-champagne/80">FAQ</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/15 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Knowledge Base
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ivory mb-6">
            The Alchemist&rsquo;s{" "}
            <span className="text-gradient-gold">Guide</span>
          </h1>
          <p className="text-champagne/60 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about ordering, caring for, and getting
            the most from your THE786 fragrances.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Category Nav */}
                <div className="glass-card rounded-lg p-6">
                  <h3 className="font-serif text-lg text-ivory mb-4">
                    Categories
                  </h3>
                  <nav className="space-y-2">
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                          activeCategory === cat.id
                            ? "bg-plum/30 text-gold border-l-2 border-gold"
                            : "text-champagne/60 hover:text-champagne hover:bg-midnight-lighter"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* WhatsApp CTA */}
                <div className="glass-card rounded-lg p-6 text-center">
                  <p className="font-serif text-lg text-ivory mb-2">
                    Still have questions?
                  </p>
                  <p className="text-champagne/50 text-sm mb-4">
                    Our concierge is a message away.
                  </p>
                  <a
                    href="https://wa.me/918800505707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-700/80 hover:bg-green-700 text-white rounded text-sm transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="lg:col-span-3 space-y-12">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className={activeCategory === category.id ? "" : "hidden lg:block"}
                >
                  <h2 className="font-serif text-2xl text-ivory mb-6">
                    {category.name}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, idx) => {
                      const key = `${category.id}-${idx}`;
                      const isOpen = openItems[key];
                      return (
                        <div
                          key={key}
                          className={`glass-card rounded-lg overflow-hidden transition-all duration-300 ${
                            isOpen ? "border-l-2 border-l-gold" : ""
                          }`}
                        >
                          <button
                            onClick={() => toggleItem(key)}
                            className="w-full flex items-center justify-between p-5 text-left"
                          >
                            <span
                              className={`font-medium text-sm pr-4 transition-colors ${
                                isOpen ? "text-gold-light" : "text-ivory"
                              }`}
                            >
                              {item.q}
                            </span>
                            <span
                              className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-5 pb-5">
                              <p className="text-champagne/60 text-sm leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
