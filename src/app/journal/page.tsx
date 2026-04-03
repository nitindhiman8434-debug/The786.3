import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Scent Journal",
  description:
    "Explore the world of luxury perfumery — articles on oud, layering, sillage, and the art behind THE786 fragrances.",
};

const articles = [
  {
    slug: "layering-guide",
    title: "The Connoisseur's Guide to Layering",
    excerpt:
      "Layering is the quiet art of wearing two or more fragrances at once — a practice perfected in the Gulf and now embraced by fragrance lovers worldwide.",
    category: "Technique",
    readTime: "6 min read",
  },
  {
    slug: "sillage-invisible-trail",
    title: "Sillage: The Invisible Trail",
    excerpt:
      "That lingering impression you leave in a room after departing — the French call it sillage. Understanding it changes the way you wear perfume.",
    category: "Knowledge",
    readTime: "5 min read",
  },
  {
    slug: "night-scents-oud",
    title: "Night Scents: Why Oud Comes Alive After Dark",
    excerpt:
      "There is a reason oud-based compositions feel most at home after sunset. The science — and the romance — behind nocturnal fragrance.",
    category: "Exploration",
    readTime: "7 min read",
  },
];

export default function JournalPage() {
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
          <li className="text-champagne/80">Journal</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plum/15 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-gold/80 font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Stories &amp; Knowledge
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ivory mb-6">
            The Scent <span className="text-gradient-gold">Journal</span>
          </h1>
          <p className="text-champagne/60 text-lg max-w-xl mx-auto leading-relaxed">
            Deep explorations into raw materials, blending philosophies, and the
            culture of fragrance — written by our editorial team.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/journal/art-of-oud" className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="img-placeholder aspect-[16/10] rounded-lg group-hover:opacity-90 transition-opacity">
                <span className="text-champagne/20 font-serif text-lg z-10">
                  Featured
                </span>
              </div>
              <div>
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold/70 mb-4">
                  Featured &middot; Deep Dive &middot; 8 min read
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4 group-hover:text-gold-light transition-colors leading-snug">
                  The Art of Oud: From Forest to Flacon
                </h2>
                <p className="text-champagne/60 leading-relaxed mb-6">
                  Oud is the most coveted raw material in perfumery — and the
                  most misunderstood. We trace its journey from the infected
                  heartwood of the Aquilaria tree in the forests of Assam to the
                  final drop in a THE786 flacon, revealing the craft, patience,
                  and risk behind every millilitre.
                </p>
                <span className="text-gold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read the full story <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-ivory mb-12">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block"
              >
                <article className="glass-card rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-500">
                  <div className="img-placeholder aspect-[16/10]">
                    <span className="text-champagne/15 font-serif text-sm z-10">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-wider uppercase text-gold/60">
                        {article.category}
                      </span>
                      <span className="text-champagne/30 text-xs">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-ivory mb-3 group-hover:text-gold-light transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-champagne/50 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Newsletter */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
            Stay in the Circle
          </h2>
          <p className="text-champagne/50 mb-8 leading-relaxed">
            New articles, early access to launches, and private invitations —
            delivered to your inbox. No noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-midnight-lighter border border-plum/20 rounded px-4 py-3 text-ivory placeholder-champagne/30 focus:border-gold transition-colors text-sm"
            />
            <button
              type="button"
              className="px-8 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-midnight font-semibold rounded hover:opacity-90 transition-opacity text-sm tracking-wider uppercase whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          <p className="text-champagne/30 text-xs mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
