export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Arjun Mehta',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Oud Al Sultan is the first fragrance I have worn where strangers have stopped me to ask what I am wearing. The longevity is absurd — I can still smell it on my jacket two days later. Worth every rupee.',
    product: 'oud-al-sultan',
    verified: true,
  },
  {
    name: 'Priya Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    text: 'Velvet Rose & Oud is sophisticated without being heavy. I wore it to a gallery opening and received more compliments in one evening than I have in a year. The rose is realistic, not synthetic, and the oud underneath gives it a depth I did not expect at this price point.',
    product: 'velvet-rose-and-oud',
    verified: true,
  },
  {
    name: 'Kabir Singh Rathore',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'I have been wearing niche oud fragrances for over a decade. Oud Al Maliki is as close to a traditional Cambodian attar as I have found in a modern spray format. The dry-down is exceptional — smoky, earthy, and genuinely complex. This brand understands oud.',
    product: 'oud-al-maliki',
    verified: true,
  },
  {
    name: 'Ananya Sharma',
    location: 'New Delhi, Delhi',
    rating: 4,
    text: 'Ordered the Discovery Coffret as a gift for my husband and ended up claiming half the vials for myself. Amber Gilded and Silver Smoke are now in regular rotation. The presentation box is stunning — it felt like unwrapping something from a European maison.',
    product: 'discovery-coffret',
    verified: true,
  },
  {
    name: 'Rohan Desai',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Imperial Saffron lives up to the name. The saffron note is rich and authentic, not the cloying synthetic version you find in most Indian perfume brands. I get 10-plus hours on skin easily, and the leather in the base keeps it grounded. My new daily signature.',
    product: 'imperial-saffron',
    verified: true,
  },
  {
    name: 'Meera Iyer',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'I was sceptical about buying perfume online, but the 10ml option made it easy to try Midnight Jasmine without a large commitment. It is gorgeous — the jasmine is heady and natural, not sharp or chemical. I have since ordered the 100ml. The COD option was a nice touch.',
    product: 'midnight-jasmine',
    verified: true,
  },
];
