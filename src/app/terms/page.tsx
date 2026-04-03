import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing your use of THE786 website and purchase of our products.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the THE786 website (the786.in), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you should not use our website or purchase our products. We reserve the right to update these terms at any time, and changes become effective immediately upon posting. Your continued use of the site constitutes acceptance of any revised terms.",
  },
  {
    title: "Use of Service",
    content:
      "You agree to use our website solely for lawful purposes and in a manner that does not infringe upon or restrict the rights of others. You must not misuse the site by knowingly introducing viruses, trojans, or other malicious material. You must not attempt to gain unauthorised access to our servers, databases, or any connected systems. We reserve the right to restrict or terminate access to any user who violates these conditions without prior notice.",
  },
  {
    title: "Products & Pricing",
    content:
      "All products displayed on our website are subject to availability. We make every effort to ensure that product descriptions, images, and pricing are accurate. However, errors may occasionally occur. If we discover an error in the price of a product you have ordered, we will inform you and offer you the option to continue with the corrected price or cancel your order. All prices are listed in Indian Rupees and include applicable taxes unless stated otherwise.",
  },
  {
    title: "Orders & Payment",
    content:
      "Placing an order on our website constitutes an offer to purchase. We reserve the right to accept or decline any order at our discretion, including but not limited to cases of suspected fraud, product unavailability, or pricing errors. Payment may be made via credit card, debit card, UPI, net banking, popular wallets, or Cash on Delivery where available. All electronic payments are processed through PCI-DSS compliant third-party providers. We do not store your complete payment card information on our servers.",
  },
  {
    title: "Shipping & Delivery",
    content:
      "We ship to all serviceable pin codes within India. Delivery timelines are estimates and may vary depending on your location and external factors such as weather or logistics disruptions. While we make every effort to ensure timely delivery, THE786 is not liable for delays caused by circumstances beyond our control. For complete details, please refer to our Shipping Policy.",
    link: { href: "/shipping-policy", text: "View Shipping Policy" },
  },
  {
    title: "Returns & Refunds",
    content:
      "Returns are accepted within seven days of delivery for unused, sealed products in their original packaging. Opened perfumes, attars, testers, and final-sale items are non-returnable. Refunds are processed within seven to ten business days after we receive and inspect the returned item. For detailed conditions and instructions, please refer to our Return Policy.",
    link: { href: "/return-policy", text: "View Return Policy" },
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website — including but not limited to text, images, graphics, logos, product names, packaging designs, and editorial content — is the intellectual property of THE786 or its licensors and is protected under Indian copyright and trademark law. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. The THE786 name, logo, and brand identity are registered trademarks.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, THE786 shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Our total liability for any claim arising out of your use of the site or purchase of products shall not exceed the amount paid by you for the relevant order. This limitation applies regardless of the form of action, whether in contract, tort, negligence, strict liability, or otherwise.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from or related to these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts in New Delhi, India. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
  },
  {
    title: "Contact",
    content:
      "If you have any questions about these Terms of Service, please contact our team.",
  },
];

export default function TermsPage() {
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
          <li className="text-champagne/80">Terms of Service</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/10 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ivory mb-4">
            Terms of <span className="text-gradient-gold">Service</span>
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
              <p className="text-champagne/65 leading-relaxed">
                {section.content}
              </p>
              {"link" in section && section.link && (
                <Link
                  href={section.link.href}
                  className="inline-block mt-3 text-gold text-sm hover:text-gold-light transition-colors"
                >
                  {section.link.text} &rarr;
                </Link>
              )}
              {section.title === "Contact" && (
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
