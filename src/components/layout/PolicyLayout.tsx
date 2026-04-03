import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavSection {
  id: string;
  label: string;
}

interface PolicyLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
  /** Optional sidebar navigation anchors */
  sections?: NavSection[];
}

/* ------------------------------------------------------------------ */
/*  PolicyLayout                                                       */
/* ------------------------------------------------------------------ */

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
  sections,
}: PolicyLayoutProps) {
  return (
    <section className="min-h-screen bg-midnight">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <nav aria-label="Breadcrumb" className="text-xs font-sans text-champagne/40">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-gold transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="mx-1 text-champagne/20">/</span>
            </li>
            <li>
              <span className="text-champagne/60">{title}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="section-divider mb-8" aria-hidden="true" />
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-ivory">
          {title}
        </h1>
        {lastUpdated && (
          <p className="mt-3 text-sm font-sans text-champagne/40">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block lg:w-56 shrink-0 sticky top-28 self-start">
              <nav aria-label="Page sections">
                <h2 className="sr-only">Page sections</h2>
                <ul className="space-y-2 border-l border-plum/30 pl-4">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={cn(
                          'block text-sm font-sans text-champagne/50',
                          'hover:text-gold transition-colors duration-200',
                          'py-1'
                        )}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          {/* Content */}
          <article
            className={cn(
              'flex-1 min-w-0 max-w-3xl',
              /* Prose styling */
              '[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-wide',
              '[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-ivory [&_h3]:mt-8 [&_h3]:mb-3',
              '[&_h4]:font-sans [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-champagne [&_h4]:mt-6 [&_h4]:mb-2',
              '[&_p]:font-sans [&_p]:text-sm [&_p]:sm:text-base [&_p]:leading-relaxed [&_p]:text-champagne/70 [&_p]:mb-4',
              '[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2',
              '[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-2',
              '[&_li]:font-sans [&_li]:text-sm [&_li]:sm:text-base [&_li]:text-champagne/70 [&_li]:leading-relaxed',
              '[&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-gold-light [&_a]:transition-colors',
              '[&_strong]:text-ivory [&_strong]:font-semibold',
              '[&_blockquote]:border-l-2 [&_blockquote]:border-gold/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-champagne/60 [&_blockquote]:my-6',
              '[&_hr]:border-plum/20 [&_hr]:my-8',
              '[&_table]:w-full [&_table]:text-sm [&_table]:mb-6',
              '[&_th]:font-sans [&_th]:font-semibold [&_th]:text-left [&_th]:text-champagne [&_th]:pb-2 [&_th]:border-b [&_th]:border-plum/30',
              '[&_td]:font-sans [&_td]:text-champagne/70 [&_td]:py-2 [&_td]:border-b [&_td]:border-plum/10'
            )}
          >
            {children}
          </article>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider" aria-hidden="true" />

      {/* Contact callout */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-sm font-sans text-champagne/50">
          Have questions? Our concierge team is available at{' '}
          <a
            href={`mailto:${brand.email}`}
            className="text-gold hover:text-gold-light transition-colors duration-200"
          >
            {brand.email}
          </a>{' '}
          or via{' '}
          <a
            href={brand.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors duration-200"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
