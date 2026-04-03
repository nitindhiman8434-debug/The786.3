import HeroSection from '@/components/home/HeroSection';
import CategoryCards from '@/components/home/CategoryCards';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import JournalTeaser from '@/components/home/JournalTeaser';
import DiscoveryCoffret from '@/components/home/DiscoveryCoffret';
import Testimonials from '@/components/home/Testimonials';
import TrustStrip from '@/components/home/TrustStrip';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <CategoryCards />
      <FeaturedProducts />
      <div className="section-divider" />
      <JournalTeaser />
      <DiscoveryCoffret />
      <div className="section-divider" />
      <Testimonials />
      <TrustStrip />
    </>
  );
}
