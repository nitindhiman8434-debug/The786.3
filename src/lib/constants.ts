// THE786 Design Tokens
export const colors = {
  midnightOnyx: '#0F0B14',
  royalPlum: '#4B1E5A',
  imperialBurgundy: '#7A1E3A',
  richBerryCrimson: '#770523',
  deepWineMaroon: '#53131E',
  amberGold: '#C9972B',
  champagneGlow: '#E8D7B7',
  ivorySilk: '#F7F2EA',
} as const;

export const brand = {
  name: 'THE786',
  tagline: 'Anonymous Luxury with an Arabic Soul',
  description: 'Premium long-wear perfumes crafted for modern India',
  whatsapp: '+91 8800505707',
  whatsappLink: 'https://wa.me/918800505707',
  email: 'concierge@the786.in',
  phone: '+91 8800505707',
  supportHours: 'Mon–Sat, 10 AM – 7 PM IST',
  currency: '₹',
  country: 'India',
} as const;

export const sizes = [
  { label: '10ml Attar', value: '10ml', price: 499 },
  { label: '50ml EDP', value: '50ml', price: 1599 },
  { label: '100ml EDP', value: '100ml', price: 2999 },
] as const;

export const navItems = [
  {
    label: 'Collections',
    href: '/collections',
    children: [
      { label: 'Shop All', href: '/collections' },
      { label: 'For Him', href: '/for-him' },
      { label: 'For Her', href: '/for-her' },
      { label: 'Unisex', href: '/unisex' },
      { label: 'Discovery Coffret', href: '/discovery' },
    ],
  },
  { label: 'Scent Profiles', href: '/collections#profiles' },
  { label: 'Bespoke', href: '/about#bespoke' },
  { label: 'The Atelier', href: '/about' },
  { label: 'Journal', href: '/journal' },
] as const;

export const footerLinks = {
  collections: [
    { label: 'For Him', href: '/for-him' },
    { label: 'For Her', href: '/for-her' },
    { label: 'Unisex', href: '/unisex' },
    { label: 'Discovery Coffret', href: '/discovery' },
    { label: 'Shop All', href: '/collections' },
  ],
  concierge: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Returns & Refunds', href: '/return-policy' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  journal: [
    { label: 'The Scent Journal', href: '/journal' },
    { label: 'About THE786', href: '/about' },
  ],
} as const;

export const trustBadges = [
  { icon: 'package', title: 'Luxury Packaging', description: 'Hand-finished presentation' },
  { icon: 'shield', title: 'Secure Checkout', description: '256-bit SSL encryption' },
  { icon: 'truck', title: 'Pan-India Shipping', description: 'Free delivery across India' },
  { icon: 'banknote', title: 'COD Available', description: 'Cash on delivery nationwide' },
  { icon: 'messageCircle', title: 'WhatsApp Support', description: 'Personal concierge service' },
] as const;
