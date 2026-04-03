import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand, footerLinks } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5">
      {children}
    </h3>
  );
}

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link
            href={link.href}
            className={cn(
              'text-sm font-sans text-champagne/60',
              'hover:text-gold transition-colors duration-300'
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-midnight-light" role="contentinfo">
      {/* Top divider */}
      <div className="section-divider" aria-hidden="true" />

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 -- Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-ivory">
                {brand.name}
              </span>
            </Link>
            <p className="mt-3 font-serif text-base italic text-champagne/70">
              {brand.tagline}
            </p>
            <p className="mt-4 text-sm font-sans leading-relaxed text-champagne/50 max-w-xs">
              {brand.description}. Handcrafted in limited batches for those who
              prefer to be felt, not announced.
            </p>
          </div>

          {/* Col 2 -- Collections */}
          <div>
            <FooterHeading>Collections</FooterHeading>
            <FooterLinkList links={footerLinks.collections} />
          </div>

          {/* Col 3 -- Concierge */}
          <div>
            <FooterHeading>Concierge</FooterHeading>
            <FooterLinkList links={footerLinks.concierge} />
          </div>

          {/* Col 4 -- Journal + Legal */}
          <div>
            <FooterHeading>Journal</FooterHeading>
            <FooterLinkList links={footerLinks.journal} />

            <div className="mt-8">
              <FooterHeading>Legal</FooterHeading>
              <FooterLinkList links={footerLinks.legal} />
            </div>
          </div>
        </div>

        {/* ---- Newsletter ---- */}
        <div className="mt-16 pt-10 border-t border-plum/20">
          <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="font-serif text-2xl text-ivory tracking-wide">
              Join the Inner Circle
            </h3>
            <p className="mt-2 text-sm font-sans text-champagne/50">
              First access to new fragrances, exclusive offers, and stories from the atelier.
            </p>

            <form
              className="mt-5 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                required
                className={cn(
                  'flex-1 rounded-md px-4 py-3 text-sm font-sans',
                  'bg-midnight border border-plum/30',
                  'text-ivory placeholder:text-champagne/30',
                  'focus:border-gold focus:ring-1 focus:ring-gold',
                  'transition-colors duration-300'
                )}
              />
              <button
                type="submit"
                className={cn(
                  'rounded-md px-6 py-3 text-sm font-sans font-semibold tracking-wide',
                  'bg-gold text-midnight',
                  'hover:bg-gold-light active:bg-gold-dark',
                  'transition-colors duration-300'
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="section-divider" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-champagne/40">
          <p>&copy; 2024 {brand.name}. All rights reserved.</p>

          <div className="flex items-center gap-5">
            {/* WhatsApp */}
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="text-champagne/40 hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Instagram placeholder */}
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="text-champagne/40 hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook placeholder */}
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="text-champagne/40 hover:text-gold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
