import React from 'react';
import { ArrowDown, MessageCircle, Building2, Sparkles } from 'lucide-react';
import { IMAGES } from '../config/images';
import { BRAND_CONFIG } from '../config/brand';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#1a0f1f]">
      {/* 1. Full-Width Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBanner.src}
          alt={IMAGES.heroBanner.alt}
          width={IMAGES.heroBanner.width}
          height={IMAGES.heroBanner.height}
          loading="eager"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Deep Purple-Black Heritage Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f1f]/95 via-[#1a0f1f]/85 to-[#1a0f1f]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f1f] via-transparent to-[#1a0f1f]/40" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        {/* Heritage Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf6ee]/10 backdrop-blur-md border border-[#c9a24b]/40 text-[#c9a24b] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nagpur’s Heritage Rice Purveyors • 6+ Years</span>
        </div>

        {/* Short Headline (Max 8 Words) */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#faf6ee] leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Pure Heirloom Rice From Nagpur’s Trusted Purveyors
        </h1>

        {/* One-Line Subtext */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#faf6ee]/90 font-light leading-relaxed max-w-3xl mx-auto">
          Hand-selected heirloom Black Rice and authentic Balaghat Chinnor delivered fresh to kitchens and homes.
        </p>

        {/* Two Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#c9a24b] hover:bg-[#b48e3a] text-[#1a0f1f] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Order Now</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#faf6ee]/10 hover:bg-[#faf6ee]/20 text-[#faf6ee] border border-[#faf6ee]/30 hover:border-[#c9a24b] backdrop-blur-md font-bold text-sm uppercase tracking-wider transition-all"
          >
            <Building2 className="w-4 h-4 text-[#c9a24b]" />
            <span>Bulk / Hotel Enquiry</span>
          </a>
        </div>

        {/* Bottom Micro Trust Indicators */}
        <div className="mt-14 pt-8 border-t border-[#faf6ee]/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#faf6ee]/80 text-xs font-medium">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c9a24b] text-base">🌾</span>
            <span>Heirloom Black Rice</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c9a24b] text-base">✨</span>
            <span>GI-Tagged Chinnor</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c9a24b] text-base">🛡️</span>
            <span>FSSAI Compliant</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c9a24b] text-base">🚚</span>
            <span>Doorstep & Bulk Dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
