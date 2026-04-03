export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faq: FAQCategory[] = [
  {
    category: 'Shipping & Logistics',
    items: [
      {
        question: 'How long does delivery take?',
        answer:
          'We dispatch all orders within 24 hours of confirmation. Metro cities typically receive deliveries in 3-5 business days, while Tier 2 and Tier 3 cities may take 5-7 business days. Every shipment is fully tracked — you will receive real-time updates via SMS and email from the moment your order leaves our facility.',
      },
      {
        question: 'Do you ship across India?',
        answer:
          'Yes. We deliver to every serviceable pin code across India. If your pin code is not serviceable by our primary courier partner, we will route your order through an alternate logistics provider to ensure it reaches you. There are no additional charges for remote locations.',
      },
      {
        question: 'Is my order insured during transit?',
        answer:
          'Every THE786 shipment is fully insured against damage and loss during transit at no additional cost. In the unlikely event your package arrives damaged, contact our concierge team within 48 hours with photographs, and we will arrange a replacement or full refund — no questions asked.',
      },
      {
        question: 'Can I track my order?',
        answer:
          'Absolutely. Once your order is dispatched, you will receive a tracking link via SMS and email. You can also track your order in real time through the Orders section of your THE786 account. Our concierge team is available via WhatsApp if you need any assistance.',
      },
    ],
  },
  {
    category: 'COD Policy',
    items: [
      {
        question: 'Do you offer Cash on Delivery?',
        answer:
          'Yes, we offer COD on all orders up to INR 5,000. For orders exceeding this amount, we require prepayment via UPI, credit/debit card, or net banking. This policy helps us maintain the premium service standards our clients expect while keeping fraud to a minimum.',
      },
      {
        question: 'Is there a COD fee?',
        answer:
          'There is no additional fee for Cash on Delivery orders. The price you see at checkout is the price you pay at your doorstep. We believe convenience should not come at a premium.',
      },
      {
        question: 'What happens if I am unavailable during a COD delivery?',
        answer:
          'Our courier partner will make up to three delivery attempts. If all three attempts are unsuccessful, the order will be returned to our facility. You may then choose to have the order re-dispatched at no additional cost or receive a full cancellation. We recommend keeping your phone accessible on the expected delivery date.',
      },
    ],
  },
  {
    category: 'Longevity & Preservation',
    items: [
      {
        question: 'How long does the fragrance last on skin?',
        answer:
          'Our extrait-strength concentrations are formulated for exceptional longevity. Most compositions last 8-12 hours on skin, with certain oud-heavy formulations persisting well beyond that on fabric. Longevity varies with skin type, hydration level, and ambient temperature — applying to well-moisturised skin and pulse points will maximise projection and wear time.',
      },
      {
        question: 'What is the shelf life of your perfumes?',
        answer:
          'When stored correctly, THE786 fragrances maintain their intended scent profile for 3-5 years from the date of production. Many oud-based compositions actually improve with age, much like fine spirits. The batch date is printed on the base of every bottle.',
      },
      {
        question: 'How should I store my fragrances?',
        answer:
          'Store your bottles upright in a cool, dry place away from direct sunlight and temperature fluctuations. Avoid keeping fragrances in bathrooms where humidity is high. A bedroom drawer or a dedicated fragrance cabinet is ideal. Never leave bottles in a parked car — heat accelerates oxidation and degrades the composition.',
      },
      {
        question: 'Does skin type affect how the fragrance wears?',
        answer:
          'Significantly. Oily skin tends to hold fragrance longer and project more strongly, while dry skin may cause faster evaporation. If your skin is on the drier side, apply an unscented moisturiser to pulse points before spraying. This creates a hydrated base that helps the fragrance molecules bind more effectively.',
      },
    ],
  },
  {
    category: 'Perfume Care',
    items: [
      {
        question: 'Where should I apply perfume for the best results?',
        answer:
          'Apply to pulse points — the inner wrists, behind the ears, the base of the throat, and the inside of the elbows. These areas generate warmth that helps diffuse the fragrance throughout the day. For a subtler, longer-lasting effect, spray once into the air and walk through the mist, or apply to the hair and the inside of a jacket lapel.',
      },
      {
        question: 'Should I rub my wrists together after applying?',
        answer:
          'No. This is one of the most common mistakes in fragrance application. Rubbing creates friction and heat that breaks down the top notes prematurely, distorting the intended scent progression. Simply spray and let the fragrance settle naturally on your skin.',
      },
      {
        question: 'Can I layer multiple THE786 fragrances?',
        answer:
          'Layering is encouraged — in fact, each product page includes a specific layering suggestion. The key principle is to apply the heavier, more resinous fragrance first (typically to the chest or clothing) and the lighter, brighter composition to pulse points. Start with two fragrances and adjust ratios until you find a combination that feels uniquely yours.',
      },
      {
        question: 'How do I clean the spray nozzle if it becomes clogged?',
        answer:
          'If the atomiser becomes sticky or clogged, soak just the nozzle tip in warm water for a few minutes, then dry it thoroughly with a lint-free cloth. Never insert anything into the nozzle opening. If the issue persists, contact our concierge team and we will send a replacement atomiser at no charge.',
      },
    ],
  },
];
