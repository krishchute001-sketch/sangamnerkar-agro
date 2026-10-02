import React from 'react';
import { ArrowRight, Hotel, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export interface SlideData {
  id: number;
  badge: string;
  badgeIcon?: React.ReactNode;
  headlineLine1: string;
  headlineLine2: string;
  subline: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroSlideProps {
  slide: SlideData;
  isActive: boolean;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ slide, isActive }) => {
  return (
    <div
      aria-hidden={!isActive}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        isActive
          ? 'opacity-100 translate-x-0 relative pointer-events-auto'
          : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
      }`}
    >
      {/* Left Column: Headlines & Call to Actions (7 cols on desktop) */}
      <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EC] border border-[#2F6B3A]/20 text-[#2F6B3A] text-xs font-semibold tracking-wide shadow-2xs">
          {slide.badgeIcon || <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />}
          <span>{slide.badge}</span>
        </div>

        {/* Huge Two-Line Maroon Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#5A2A27] tracking-tight leading-[1.12]">
          <span className="block">{slide.headlineLine1}</span>
          <span className="block text-[#441F1D]">{slide.headlineLine2}</span>
        </h1>

        {/* Short Subline in Forest Green */}
        <p className="text-sm sm:text-base lg:text-lg text-[#2F6B3A] font-medium leading-relaxed max-w-xl">
          {slide.subline}
        </p>

        {/* Two Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          <Button
            to={slide.primaryCtaLink}
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            aria-label={`${slide.primaryCtaText} - Sangamnerkar Agro`}
          >
            {slide.primaryCtaText}
          </Button>

          <Button
            to={slide.secondaryCtaLink}
            variant="secondary"
            size="lg"
            leftIcon={<Hotel className="w-4 h-4 text-[#5A2A27]" />}
            aria-label={`${slide.secondaryCtaText} - Sangamnerkar Agro`}
          >
            {slide.secondaryCtaText}
          </Button>
        </div>
      </div>

      {/* Right Column: Big Image Showcase (5 cols on desktop) */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border-2 border-[#E8DEC8] bg-[#F5ECE0]">
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            loading={slide.id === 1 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle warm vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A27]/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
