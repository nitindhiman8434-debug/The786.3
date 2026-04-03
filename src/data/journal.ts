export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: string;
  relatedArticles: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'the-art-of-oud-distillation',
    title: 'The Art of Oud Distillation: From Heartwood to High Perfumery',
    excerpt:
      'Inside the centuries-old process that transforms infected agarwood into the most valuable raw material in fragrance.',
    category: 'Craft',
    author: 'THE786 Editorial',
    date: '2026-03-15',
    readTime: '7 min read',
    heroImage: '/images/journal/oud-distillation-hero.jpg',
    content: `Oud begins with a wound. When the Aquilaria tree — native to the dense forests of Assam, Cambodia, and Laos — is infected by a particular mould, it responds by producing a dark, aromatic resin throughout its heartwood. This resin, accumulated over decades, is what the fragrance world knows as oud.

But the journey from raw heartwood to the refined oud oil that sits inside a THE786 bottle is neither simple nor fast. Traditional hydro-distillation, the method we favour, involves soaking wood chips in water for days — sometimes weeks — before slowly heating the mixture in copper stills. The oil that rises to the surface is collected drop by painstaking drop. A single kilogram of high-grade oud oil can require upwards of 20 kilograms of resinous heartwood and several days of continuous distillation.

The region of origin matters enormously. Assamese oud tends toward the animalic and barnyard — rich, complex, and challenging. Cambodian oud is sweeter, with a fruity, almost honeyed quality. Laotian oud sits somewhere between, offering a balanced woody character that blends well with other materials. Our perfumers work with distillers across all three regions, selecting batches by nose rather than by origin alone.

Modern steam distillation has made the process more efficient, but something is lost in the acceleration. The slow, low-heat method preserves volatile compounds that faster methods simply evaporate. It is the difference between a photograph and a painting — both capture the subject, but only one carries the hand of its maker.

At THE786, we use oud oils that have been aged for a minimum of twelve months after distillation. This maturation period allows the sharper, more medicinal facets to mellow, revealing the deeper woody and honeyed notes that define a truly exceptional oud. It is an investment in time that most commercial fragrance houses cannot justify. We consider it non-negotiable.

The next time you wear an oud fragrance, pause at the first spray. That initial burst — medicinal, sharp, slightly confrontational — is the wood speaking. Give it ten minutes. The warmth, the sweetness, the depth that follows is the art.`,
    relatedArticles: ['saffron-in-perfumery', 'layering-guide'],
  },
  {
    slug: 'saffron-in-perfumery',
    title: 'Why Saffron Is the Most Misunderstood Note in Modern Perfumery',
    excerpt:
      'It is not sweet. It is not simple. A deep look at saffron as a fragrance material and why most houses get it wrong.',
    category: 'Ingredients',
    author: 'THE786 Editorial',
    date: '2026-02-28',
    readTime: '5 min read',
    heroImage: '/images/journal/saffron-hero.jpg',
    content: `Ask someone who has never handled raw saffron to describe its scent, and they will likely say "sweet" or "floral." Hand them a vial of saffron absolute — the concentrated essence used in fine perfumery — and watch their expression change. Real saffron is metallic, leathery, and dry. It has an ink-like quality, almost bitter, with a warmth that sits closer to hay and dried tobacco than to any flower.

The disconnect exists because most people encounter saffron in food, where it is softened by heat and fat. In perfumery, saffron operates differently. It is a bridge note — too volatile to anchor a base, too persistent to function as a pure top note. It sits in the strange territory between spice and leather, and its job is usually to add a textured warmth to whatever surrounds it.

Kashmiri saffron, the variety we source for Imperial Saffron and Amber Gilded, is prized for its higher crocin content, which translates to a richer, more saturated aroma profile. Iranian saffron, by contrast, tends to be drier and more austere — beautiful in its own way, but less suited to the warm, enveloping compositions we build.

The mistake most fragrance houses make is treating saffron as a headline act. They dose it heavily, pair it with sweet notes like vanilla or praline, and the result is a one-dimensional sweetness that could be achieved more cheaply with synthetic alternatives. At THE786, saffron is always a supporting player — present enough to be felt, restrained enough to maintain mystery.

In Imperial Saffron, we pair it with a bitter orange accord that checks its sweetness, and a cured leather base that amplifies its drier facets. The result is a saffron that smells expensive because it behaves the way the raw material actually smells — complex, slightly austere, and completely unlike anything synthetic.

Great saffron in a fragrance should make you lean in, not pull back. It should feel like a question, not an answer.`,
    relatedArticles: ['the-art-of-oud-distillation', 'building-your-signature'],
  },
  {
    slug: 'layering-guide',
    title: 'The THE786 Layering Guide: How to Build a Scent That Is Entirely Yours',
    excerpt:
      'Layering is not about wearing more. It is about wearing differently. A practical guide to combining our compositions.',
    category: 'How To',
    author: 'THE786 Editorial',
    date: '2026-02-10',
    readTime: '6 min read',
    heroImage: '/images/journal/layering-guide-hero.jpg',
    content: `Fragrance layering is one of the oldest practices in perfumery, and one of the most misunderstood. The goal is not to pile on scents until you fill a room. The goal is to create a composite that no single bottle can achieve — a scent that is, by definition, yours alone.

The principle is straightforward: heavier, denser fragrances go on first; lighter, more volatile ones go on top. Think of it as building a wall — the base layer provides structure, and the top layer provides texture.

Start with two fragrances. Apply the heavier composition to areas that generate less heat — the chest, the back of the neck, the inside of a jacket. Apply the lighter composition to traditional pulse points — inner wrists, behind the ears. The heat from these areas will project the lighter scent first, while the heavier base reveals itself gradually throughout the day.

Here are three layering combinations we recommend from the THE786 collection:

The Power Pairing: Oud Al Sultan on the chest, Imperial Saffron on the wrists. The saffron and cardamom from Imperial Saffron create a bright, spiced opening that gradually gives way to the deep oud and tobacco of Oud Al Sultan. This is commanding without being aggressive — ideal for events where you want to be remembered.

The Evening Edit: Midnight Oryx on the neck and collarbone, Silver Smoke on the wrists and behind the ears. The cool metallic edge of Silver Smoke contrasts beautifully with the dark resinous depth of Midnight Oryx. Together they create something nocturnal and magnetic.

The Signature Blend: Amber Gilded applied liberally to the torso, Velvet Rose & Oud on pulse points. This is our most requested combination — the warm amber and vanilla of Amber Gilded provides a golden canvas for the rose and oud interplay of Velvet Rose & Oud. It works on everyone and suits every occasion.

A few rules worth following: never layer more than two fragrances at once. Allow each application to dry for thirty seconds before adding the next. And trust your nose — if a combination does not feel right in the first five minutes, it will not improve over the course of the day.

Layering is personal. These are starting points, not prescriptions. Experiment with ratios. Try unexpected pairings. The best signature scent is the one that surprises even you.`,
    relatedArticles: ['the-art-of-oud-distillation', 'building-your-signature'],
  },
  {
    slug: 'building-your-signature',
    title: 'How to Find a Signature Scent (and Why Most People Get It Wrong)',
    excerpt:
      'Forget "what do you like?" The better question is "what do you want to say?" A framework for choosing a fragrance that actually fits.',
    category: 'Guide',
    author: 'THE786 Editorial',
    date: '2026-01-20',
    readTime: '5 min read',
    heroImage: '/images/journal/signature-scent-hero.jpg',
    content: `The typical fragrance shopping experience is broken. You walk into a store, spray fifteen strips, become nose-blind by strip four, and leave with whatever the sales associate recommended most enthusiastically. A week later, the bottle sits unused because it smells different on your skin than it did on paper, and you quietly accept that "finding a signature" is a myth.

It is not a myth. But the process most people follow is fundamentally flawed.

The first mistake is shopping by notes. "I like vanilla" is not a useful starting point, because vanilla can smell like a bakery, a leather jacket, or a forest floor depending on what surrounds it. Notes are ingredients, not flavours. You would not walk into a restaurant and order "butter."

The second mistake is testing on paper. Blotter strips are useful for eliminating fragrances you definitely dislike, but they tell you almost nothing about how a composition will develop on your skin over eight hours. Your body chemistry — pH, hydration, oil production — will transform the scent in ways paper cannot predict. Always test on skin. Always wait at least thirty minutes before forming an opinion.

The third, and most consequential, mistake is asking "do I like this?" instead of "does this feel like me?" A signature scent is not your favourite scent. It is the scent that feels inevitable on you — the one that people begin to associate with your presence, your energy, the way you make a room feel when you walk in.

Here is a more useful framework. Start by identifying the impression you want to leave. Authoritative and grounded? Look toward woody ouds and ambers. Magnetic and understated? Consider dry woods and mineral musks. Warm and enveloping? Explore saffron-amber compositions.

Next, narrow to two or three candidates and wear each one for a full day. Pay attention to how it makes you feel at hour six, not at minute one. The top notes — that initial burst when you spray — are the least important part of any fragrance. They last fifteen minutes. You will wear the base for the other seven hours.

Finally, ask someone you trust. Not "do you like this?" but "does this smell like me?" The answers are often surprisingly different — and the second question is the one that matters.

A signature scent is not a purchase. It is a decision about identity. Take your time with it.`,
    relatedArticles: ['saffron-in-perfumery', 'layering-guide'],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}
