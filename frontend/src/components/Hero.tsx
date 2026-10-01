import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import { HeroSlide, SlideData } from './HeroSlide';

const SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "Nagpur Family-Run Purveyors • 6+ Years",
    headlineLine1: "From Our Fields to",
    headlineLine2: "Your Family's Table.",
    subline: "Authentic, antioxidant-rich Heirloom Black Rice & aromatic Balaghat Chinnor, harvested with patient care and delivered fresh.",
    primaryCtaText: "Shop Now",
    primaryCtaLink: "/portfolio",
    secondaryCtaText: "Bulk and Hotel Enquiry",
    secondaryCtaLink: "/contact-us?type=Institutional",
    imageSrc: "/images/hero-1.jpg",
    imageAlt: "Wholesome family table dining with nutritious heirloom rice",
  },
  {
    id: 2,
    badge: "Nagpur Hospitality & HoReCa Partner",
    headlineLine1: "Trusted by",
    headlineLine2: "Nagpur's Top Hotels.",
    subline: "6+ years of dependable bulk supply to premier kitchens, banquets, and discerning culinary chefs across the city.",
    primaryCtaText: "Bulk and Hotel Enquiry",
    primaryCtaLink: "/contact-us?type=Institutional",
    secondaryCtaText: "Shop Now",
    secondaryCtaLink: "/portfolio",
    imageSrc: "/images/hero-2.jpg",
    imageAlt: "Chef preparing luxury rice dishes in top hotel kitchen",
  },
  {
    id: 3,
    badge: "Heirloom Superfood of India",
    headlineLine1: "Black Rice.",
    headlineLine2: "Naturally Rich.",
    subline: "Packed with powerful anthocyanins, natural antioxidants, and an exquisite nutty fragrance for daily wellness.",
    primaryCtaText: "Shop Now",
    primaryCtaLink: "/portfolio?category=black-rice",
    secondaryCtaText: "Bulk and Hotel Enquiry",
    secondaryCtaLink: "/contact-us?type=Institutional",
    imageSrc: "/images/hero-3.jpg",
    imageAlt: "Pristine raw black rice grains in ceramic bowl",
  },
];

export const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = SLIDES.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Autoplay timer with pause-on-hover support
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      aria-label="Hero Carousel"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16"
    >
      <div className="relative flex items-center">
        {/* Main Large Rounded Hero Card (Pause on Hover) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-[#F5ECE0] border border-[#E8DEC8] p-6 sm:p-10 lg:p-14 shadow-md overflow-hidden min-h-[580px] lg:min-h-[520px] flex flex-col justify-between"
        >
          {/* Subtle Warm Decorative Backdrop Element */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#EADCCB]/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#EAF3EC]/60 blur-3xl pointer-events-none" />

          {/* Carousel Slide Container */}
          <div className="relative w-full my-auto">
            {SLIDES.map((slide, idx) => (
              <HeroSlide
                key={slide.id}
                slide={slide}
                isActive={idx === currentSlideIndex}
              />
            ))}
          </div>

          {/* Bottom Carousel Controls: Dots & Next/Prev Arrows */}
          <div className="relative z-20 mt-8 pt-4 border-t border-[#E8DEC8]/80 flex items-center justify-between">
            {/* Dots Pagination */}
            <div className="flex items-center space-x-2.5">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.headlineLine1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-[#2F6B3A]'
                      : 'w-2.5 bg-[#5A2A27]/25 hover:bg-[#5A2A27]/40'
                  }`}
                />
              ))}
              <span className="text-xs text-[#665952] font-medium ml-2 hidden sm:inline">
                0{currentSlideIndex + 1} / 0{slideCount}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full border border-[#5A2A27]/20 bg-white/80 hover:bg-[#5A2A27] text-[#5A2A27] hover:text-white flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2F6B3A]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full border border-[#5A2A27]/20 bg-[#5A2A27] text-white hover:bg-[#441F1D] flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2F6B3A]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Vertical "Scroll To Discover" indicator on the right edge */}
        <div
          aria-hidden="true"
          className="hidden xl:flex flex-col items-center absolute -right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="text-[11px] font-semibold tracking-widest uppercase text-[#5A2A27]/50 rotate-180 mb-3"
          >
            Scroll To Discover
          </span>
          <div className="w-[1px] h-12 bg-[#5A2A27]/30 relative flex justify-center">
            <ArrowDown className="w-3 h-3 text-[#5A2A27]/40 absolute -bottom-3" />
          </div>
        </div>
      </div>
    </section>
  );
};
