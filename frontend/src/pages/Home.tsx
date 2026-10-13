import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ProductsSection } from '../components/ProductsSection';
import { QualityCertifications } from '../components/QualityCertifications';
import { OurStory } from '../components/OurStory';
import { BulkEnquiry } from '../components/BulkEnquiry';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf6ee] text-[#1a0f1f]">
      {/* 2. Hero: full-width background image, headline <=8 words, subtext, dual CTAs */}
      <Hero />

      {/* 3. Trust strip: 4 big stat cards with count-up animation */}
      <TrustStrip />

      {/* 4. Products: two large cards (Black Rice, Balaghat Chinnor) */}
      <ProductsSection />

      {/* 5. Quality & Certifications: numbered cards with lightbox thumbnails */}
      <QualityCertifications />

      {/* 6. Our Story / Sourcing: alternating image/text blocks */}
      <OurStory />

      {/* 7. Hotel & Bulk Enquiry: short form connected to backend & WhatsApp */}
      <BulkEnquiry />
    </div>
  );
};

export default Home;
