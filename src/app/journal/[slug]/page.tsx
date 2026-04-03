"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const articles: Record<
  string,
  {
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    heroImage: string;
    content: string[];
    nextSlug?: string;
    nextTitle?: string;
  }
> = {
  "art-of-oud": {
    title: "The Art of Oud: From Forest to Flacon",
    author: "THE786 Editorial",
    date: "December 14, 2024",
    readTime: "8 min read",
    category: "Deep Dive",
    heroImage: "Oud Distillation",
    content: [
      "Deep in the rainforests of northeastern India, a quiet transformation takes place inside the heartwood of the Aquilaria tree. When the tree becomes infected by a particular mould, it produces a dense, aromatic resin as a defence mechanism. This resin-saturated wood is oud — the most expensive raw material in perfumery, gram for gram more valuable than gold. For centuries, oud has been burned as incense in Arabian palaces and Indian temples, its smoke carrying prayers and prestige in equal measure.",
      "The journey from forest to flacon is neither simple nor fast. Harvesters in Assam and Southeast Asia spend weeks identifying mature trees, reading subtle signs in the bark to determine whether the heartwood has developed sufficient resin. Once harvested, the wood is sorted by grade — the darkest, most saturated pieces commanding prices that can reach tens of thousands of rupees per kilogram. At THE786, we work exclusively with aged oud that has been left to mature for a minimum of fifteen years, allowing the raw material to develop the complex, leathery sweetness that distinguishes fine oud from its harsher, younger counterparts.",
      "Distillation is where art meets chemistry. Our master distillers in Kannauj use copper stills and a slow hydro-distillation process that can take up to three weeks for a single batch. Rushing the process yields more oil but sacrifices depth — the low, animalic warmth that makes oud so compelling in the dry-down phase. Each millilitre of THE786 oud oil represents approximately four kilograms of raw heartwood and countless hours of patient attention. It is this commitment to time that separates industrial oud from the living, breathing material we place in our compositions.",
      "In the final blending stage, our perfumers treat oud not as a solo performer but as the anchor around which an entire olfactory narrative is built. In our Midnight Courtyard collection, for instance, aged Assamese oud is paired with Turkish rose absolute and a whisper of saffron, creating a tension between floral tenderness and woody depth. The result is a fragrance that evolves over hours on the skin — opening bright and spiced, settling into a resinous warmth, and finally leaving a trail of smoky sweetness that can linger on fabric for days. This is the art of oud: not volume, but resonance.",
    ],
    nextSlug: "layering-guide",
    nextTitle: "The Connoisseur's Guide to Layering",
  },
  "layering-guide": {
    title: "The Connoisseur's Guide to Layering",
    author: "THE786 Editorial",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Technique",
    heroImage: "Fragrance Layering",
    content: [
      "In the fragrance traditions of the Arabian Gulf, wearing a single perfume is almost unheard of. The practice of layering — applying two or more fragrances simultaneously to create a personalised scent profile — has been refined over centuries in the region. A base of oud oil on the wrists, a mukhallat on the neck, bakhoor smoke woven through the fabric of the thobe: each layer adds dimension, and the combination becomes unique to the wearer. At THE786, we design our compositions with layering in mind, creating what we call an open architecture that invites combination.",
      "The key to successful layering is understanding fragrance families and how they interact. Woody bases like oud and sandalwood serve as foundations — they are dense, long-lasting, and provide a canvas on which lighter notes can rest. Floral hearts such as rose, jasmine, or tuberose add warmth and body to the middle layer. Citrus and spice notes — bergamot, saffron, cardamom — work as accent layers, adding brightness or intrigue without overpowering the composition beneath. The general principle is to apply the heaviest fragrance first and the lightest last, building upward in volatility.",
      "Temperature and skin chemistry play a crucial role in how layers interact. In the Indian climate, where heat amplifies projection and humidity extends the life of top notes, layering becomes particularly rewarding. A combination that might feel subtle in a London winter can bloom into something magnificent during a Mumbai evening. We recommend experimenting on pulse points — the inner wrists, behind the ears, the base of the throat — and giving each layer sixty seconds to settle before applying the next. This brief pause allows the solvents to evaporate, leaving the pure fragrance oils to mingle on the skin.",
      "For those new to the practice, we suggest starting with two fragrances from complementary families. Our Amber Noir paired with any composition from the Rose Courtyard range creates a rich, velvety warmth that transitions beautifully from afternoon to evening. For a more daring combination, try layering a citrus-forward scent with a pure oud — the contrast between bright freshness and deep resinous wood can be electrifying. There are no rigid rules; layering is ultimately a form of self-expression, and the best combination is always the one that makes you feel most yourself.",
    ],
    nextSlug: "sillage-invisible-trail",
    nextTitle: "Sillage: The Invisible Trail",
  },
  "sillage-invisible-trail": {
    title: "Sillage: The Invisible Trail",
    author: "THE786 Editorial",
    date: "November 10, 2024",
    readTime: "5 min read",
    category: "Knowledge",
    heroImage: "Sillage Trail",
    content: [
      "The French word sillage — literally the wake left by a boat moving through water — has been adopted by the perfume world to describe the scent trail a person leaves behind as they move through space. It is distinct from projection, which refers to how far a fragrance radiates from the skin. Sillage is what remains in a room after you have left it, the olfactory impression that lingers in an elevator, a corridor, a doorway. For many connoisseurs, sillage is the true measure of a fragrance's quality — not how loudly it announces your arrival, but how memorably it marks your departure.",
      "Several factors determine the sillage of a perfume. Concentration is the most obvious: an Eau de Parfum with fifteen to twenty percent fragrance oil will generally leave a stronger trail than an Eau de Toilette at five to ten percent. But concentration alone does not guarantee beautiful sillage. The choice of raw materials matters enormously. Natural ingredients like oud, ambergris, and musk have molecular structures that adhere to fabric and skin with remarkable tenacity, releasing slowly over hours. Synthetic molecules designed for longevity — such as Iso E Super and Ambroxan — can extend sillage, but the finest houses use them as quiet amplifiers rather than the main event.",
      "At THE786, we engineer sillage into every composition through what we call a diffusion architecture. The base notes — typically our aged oud, sandalwood, or vetiver — are formulated to radiate gently but persistently, like a low flame that never quite goes out. The heart notes provide the character of the sillage: whether it reads as floral, spiced, or ambery depends on this middle layer. The top notes, being the most volatile, contribute to the initial impression but fade within the first hour. What remains — the signature trail — is the product of careful calibration between heart and base, a balance we refine over months of testing on skin in real conditions.",
      "Understanding sillage also changes how you apply fragrance. Spraying on clothing, particularly natural fibres like cotton, wool, and silk, dramatically extends the scent trail because fabric holds onto fragrance molecules more tenaciously than skin. Applying to pulse points — where the skin is warmest — increases projection in the near field but may actually reduce long-term sillage, as heat accelerates evaporation. Our recommendation is a combination approach: spray your wrists and neck for personal enjoyment, and mist your clothing lightly for the trail. The result is a fragrance that lives on two timelines — intimate and ambient — creating the layered, almost three-dimensional presence that defines luxury perfumery.",
    ],
    nextSlug: "night-scents-oud",
    nextTitle: "Night Scents: Why Oud Comes Alive After Dark",
  },
  "night-scents-oud": {
    title: "Night Scents: Why Oud Comes Alive After Dark",
    author: "THE786 Editorial",
    date: "October 22, 2024",
    readTime: "7 min read",
    category: "Exploration",
    heroImage: "Night and Oud",
    content: [
      "There is a reason the most oud-heavy compositions feel instinctively right when worn after dark. As the sun sets and temperatures drop, the dynamics of fragrance on the skin shift in ways that favour dense, resinous materials. Cooler air slows the evaporation of top notes, allowing the heavier oud and amber base to dominate the scent profile from the outset. Simultaneously, lower humidity in air-conditioned evening environments means fragrance molecules disperse more slowly, creating a tighter, more intimate sillage — the kind that rewards proximity rather than announcing from across a room.",
      "The cultural association between oud and nighttime runs deep across South Asia and the Middle East. In Arabian tradition, the finest oud is reserved for evening gatherings and celebrations. In India, the burning of agarwood incense at dusk is a ritual that predates written history, intended to mark the transition from the activity of day to the contemplation of night. This is not merely aesthetic preference; there is a psychological dimension at play. Research in olfactory neuroscience suggests that warm, woody, and animalic scents activate regions of the brain associated with comfort, intimacy, and emotional depth — states that align naturally with evening social contexts.",
      "From a perfumer's perspective, designing night scents requires a different sensibility. Daytime fragrances often rely on freshness — citrus, green notes, light florals — to cut through heat and activity. Evening compositions can afford to be slower, deeper, more contemplative. At THE786, our nocturnal range is built around what we call the low register: aged oud, labdanum, benzoin, dark musks, and spices like black pepper and clove that add warmth without sweetness. These materials have long molecular chains that unfold gradually, reaching their full expression three to four hours after application — precisely the timeframe of an evening out.",
      "For those looking to transition from daytime freshness to evening richness, the simplest approach is to reapply a richer fragrance after sunset rather than relying on a single scent to carry the full day. Apply to fresh skin after a shower, when pores are open and receptive. Focus on the torso — the chest and shoulders — rather than the extremities, as body heat from the core will drive a slow, steady diffusion throughout the evening. Worn this way, a well-crafted oud composition becomes more than a fragrance; it becomes an atmosphere, a quiet declaration that the night belongs to you.",
    ],
    nextSlug: "art-of-oud",
    nextTitle: "The Art of Oud: From Forest to Flacon",
  },
};

export default function JournalArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-ivory mb-4">
            Article Not Found
          </h1>
          <p className="text-champagne/50 mb-8">
            The article you are looking for does not exist.
          </p>
          <Link
            href="/journal"
            className="text-gold hover:text-gold-light transition-colors"
          >
            &larr; Back to Journal
          </Link>
        </div>
      </div>
    );
  }

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
          <li>
            <Link href="/journal" className="hover:text-gold transition-colors">
              Journal
            </Link>
          </li>
          <li>/</li>
          <li className="text-champagne/80 truncate max-w-[200px]">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Immersive Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/40" />
        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold/80 mb-6">
            {article.category} &middot; {article.readTime}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ivory leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-champagne/50 text-sm">
            <span>{article.author}</span>
            <span>&middot;</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8">
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-champagne/75 text-lg leading-[1.85] font-light"
              >
                {i === 0 && (
                  <span className="font-serif text-5xl text-ivory float-left mr-3 mt-1 leading-none">
                    {paragraph.charAt(0)}
                  </span>
                )}
                {i === 0 ? paragraph.slice(1) : paragraph}
              </p>
            ))}
          </div>

          {/* Side CTA */}
          <div className="mt-16 glass-card rounded-lg p-8 text-center">
            <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-3">
              Inspired?
            </p>
            <h3 className="font-serif text-2xl text-ivory mb-4">
              Discover the Collection
            </h3>
            <p className="text-champagne/50 text-sm mb-6 max-w-md mx-auto">
              Experience the craftsmanship described in this article — explore
              our curated range of luxury fragrances.
            </p>
            <Link
              href="/collections"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-midnight font-semibold rounded hover:opacity-90 transition-opacity text-sm tracking-wider uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Next Article */}
      {article.nextSlug && article.nextTitle && (
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-champagne/40 text-sm mb-4">Next Article</p>
            <Link
              href={`/journal/${article.nextSlug}`}
              className="group inline-block"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-ivory group-hover:text-gold-light transition-colors">
                {article.nextTitle}
              </h3>
              <span className="text-gold text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read now <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
