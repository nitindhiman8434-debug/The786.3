import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How THE786 collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you visit our website, place an order, or interact with our concierge team, we may collect the following information: your name, email address, phone number, shipping and billing addresses, payment details (processed securely through our payment partners), and browsing behaviour on our site including pages visited and products viewed. We collect only what is necessary to fulfil your orders, improve your experience, and communicate with you.",
    keyPoints: [
      "Personal details: name, email, phone, addresses",
      "Payment information (processed by secure third-party providers)",
      "Browsing data: pages visited, products viewed, device information",
    ],
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process and fulfil orders, send shipping updates and tracking details, provide customer support through our concierge team, improve our website and product offerings, and, with your consent, send you editorial content, new launch announcements, and exclusive offers via email or SMS. We do not sell your data. Ever. Your trust is the foundation of our relationship, and we treat your information with the same care we devote to our formulations.",
    keyPoints: null,
  },
  {
    title: "Data Sharing",
    content:
      "We share your personal information only with trusted third parties who assist us in operating our business: logistics partners for order delivery, payment processors for secure transactions, and analytics tools for website performance. All third-party partners are contractually bound to handle your data securely and use it solely for the purpose for which it was shared. We do not sell, rent, or trade your personal information to marketing companies or data brokers.",
    keyPoints: null,
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies — small text files stored on your device — to remember your preferences, keep items in your cart, and analyse site traffic. Essential cookies are required for the site to function properly and cannot be disabled. Analytics cookies help us understand how visitors interact with our pages so we can improve the experience. You can manage cookie preferences through your browser settings at any time.",
    keyPoints: [
      "Essential cookies: required for site functionality",
      "Analytics cookies: help us understand and improve user experience",
      "Manage preferences via your browser settings",
    ],
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information. All data transmitted between your browser and our servers is encrypted using SSL/TLS protocols. Payment processing is handled entirely by PCI-DSS compliant third-party providers — we never store your full card details on our servers. Access to personal data within our organisation is restricted to authorised personnel on a need-to-know basis.",
    keyPoints: null,
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications by clicking the unsubscribe link in any email or by contacting our concierge team directly. If you wish to request a copy of the data we hold about you, or if you would like us to delete your account and associated information, please email us at concierge@the786.in. We will process your request within thirty days.",
    keyPoints: [
      "Access: request a copy of your personal data",
      "Correction: update inaccurate or incomplete information",
      "Deletion: request removal of your data from our systems",
      "Opt-out: unsubscribe from marketing communications at any time",
    ],
  },
  {
    title: "Contact Us",
    content:
      "If you have questions or concerns about this privacy policy or how your data is handled, our concierge team is here to help.",
    keyPoints: null,
  },
];

export default function PrivacyPolicyPage() {
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
          <li className="text-champagne/80">Privacy Policy</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/10 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Your Privacy Matters
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ivory mb-4">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-champagne/50 text-sm">
            Last updated: January 2024
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Summary Card */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-lg p-8">
            <h2 className="font-serif text-xl text-gold-light mb-4">
              At a Glance
            </h2>
            <ul className="space-y-3 text-champagne/65 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#10003;</span>
                We collect only the information necessary to process orders and
                improve your experience.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#10003;</span>
                We never sell, rent, or trade your personal data.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#10003;</span>
                All transactions are encrypted and processed through PCI-DSS
                compliant partners.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#10003;</span>
                You can access, correct, or delete your data at any time.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-serif text-2xl text-gold-light mb-4">
                {section.title}
              </h2>
              <p className="text-champagne/65 leading-relaxed">
                {section.content}
              </p>
              {section.keyPoints && (
                <div className="glass-card rounded-lg p-6 mt-4">
                  <ul className="space-y-2">
                    {section.keyPoints.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-champagne/60 text-sm"
                      >
                        <span className="text-gold/70 mt-0.5 text-xs">
                          &#9670;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.title === "Contact Us" && (
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

      <div className="h-16" />
    </div>
  );
}
