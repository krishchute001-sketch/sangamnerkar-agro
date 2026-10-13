import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Scale } from 'lucide-react';
import { IMAGES } from '../config/images';
import { BRAND_CONFIG } from '../config/brand';

interface WeightOption {
  label: string;
  weightKg: number;
  priceInr: number;
  isPopular?: boolean;
}

export const ProductsSection: React.FC = () => {
  const [blackRiceWeight, setBlackRiceWeight] = useState<number>(5);
  const [chinnorWeight, setChinnorWeight] = useState<number>(5);

  const blackRiceConfig = BRAND_CONFIG.products.blackRice;
  const chinnorConfig = BRAND_CONFIG.products.chinnorRice;

  const currentBlackRiceOption =
    blackRiceConfig.weightOptions.find((w) => w.weightKg === blackRiceWeight) ||
    blackRiceConfig.weightOptions[1];

  const currentChinnorOption =
    chinnorConfig.weightOptions.find((w) => w.weightKg === chinnorWeight) ||
    chinnorConfig.weightOptions[1];

  return (
    <section
      id="products"
      className="py-20 sm:py-24 lg:py-28 bg-[#faf6ee] scroll-mt-20"
      aria-label="Our Heritage Rice Offerings"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ede1] border border-[#c9a24b]/40 text-[#c9a24b] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct From Nagpur Purveyors</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f1f] tracking-tight">
            Our Heritage Rice Selection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5261] font-normal leading-relaxed">
            Two exceptional grain varieties, carefully procured from authentic growing terroirs and processed with small-batch precision.
          </p>
        </div>

        {/* Two Large Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Black Rice */}
          <article className="bg-white rounded-3xl border border-[#e8decb] shadow-sm hover:shadow-xl hover:border-[#c9a24b]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a0f1f]">
                <img
                  src={IMAGES.blackRiceProduct.src}
                  alt={IMAGES.blackRiceProduct.alt}
                  width={IMAGES.blackRiceProduct.width}
                  height={IMAGES.blackRiceProduct.height}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1a0f1f]/85 backdrop-blur-md text-[#c9a24b] text-xs font-bold uppercase tracking-wider border border-[#c9a24b]/40">
                    Anthocyanin Rich
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1a0f1f] text-xs font-semibold">
                    Heirloom Chak-Hao
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8">
                <span className="text-xs uppercase font-bold tracking-widest text-[#c9a24b] block mb-1">
                  {blackRiceConfig.varietyName}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a0f1f] mb-3">
                  {blackRiceConfig.name}
                </h3>
                
                {/* One-Line Benefit */}
                <p className="text-sm font-medium text-[#1a0f1f] mb-3 bg-[#f4ede1] p-3 rounded-xl border border-[#e8decb]">
                  {blackRiceConfig.shortBenefit}
                </p>

                <p className="text-xs text-[#5e5261] leading-relaxed mb-6">
                  {blackRiceConfig.description}
                </p>

                {/* Weight Options Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1a0f1f] mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#c9a24b]" />
                      Select Pack Size:
                    </span>
                    <span className="text-[#c9a24b]">
                      {currentBlackRiceOption.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {blackRiceConfig.weightOptions.map((opt) => (
                      <button
                        key={opt.weightKg}
                        type="button"
                        onClick={() => setBlackRiceWeight(opt.weightKg)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all relative border ${
                          blackRiceWeight === opt.weightKg
                            ? 'bg-[#1a0f1f] text-[#c9a24b] border-[#c9a24b] shadow-sm'
                            : 'bg-[#faf6ee] text-[#1a0f1f] border-[#e8decb] hover:border-[#c9a24b]/60'
                        }`}
                      >
                        {opt.isPopular && (
                          <span className="absolute -top-2 right-1.5 px-1.5 py-0.5 rounded-full bg-[#c9a24b] text-[#1a0f1f] text-[9px] font-black uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                        <div>{opt.weightKg} kg</div>
                        <div className="text-[11px] font-normal opacity-85">₹{opt.priceInr}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Order CTA Footer */}
            <div className="p-6 sm:p-8 pt-0 mt-auto">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#faf6ee] border border-[#e8decb] mb-4">
                <div>
                  <span className="text-[11px] uppercase font-semibold text-[#5e5261] block">
                    Price ({currentBlackRiceOption.label})
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#1a0f1f]">
                    ₹{currentBlackRiceOption.priceInr}
                  </div>
                </div>
                <span className="text-[11px] text-[#5e5261] text-right font-medium">
                  Hygienic Vacuum Pack<br />Nagpur / Pan-India Delivery
                </span>
              </div>

              <a
                href={BRAND_CONFIG.getWhatsappUrl(
                  `Hello Sangamnerkar Agro, I would like to order ${blackRiceConfig.name} (${currentBlackRiceOption.label} at ₹${currentBlackRiceOption.priceInr}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#1a0f1f] hover:bg-[#2d1e34] text-[#c9a24b] border border-[#c9a24b] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#c9a24b] group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp (₹{currentBlackRiceOption.priceInr})</span>
              </a>
            </div>
          </article>

          {/* Card 2: Balaghat Chinnor Rice */}
          <article className="bg-white rounded-3xl border border-[#e8decb] shadow-sm hover:shadow-xl hover:border-[#c9a24b]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a0f1f]">
                <img
                  src={IMAGES.chinnorRiceProduct.src}
                  alt={IMAGES.chinnorRiceProduct.alt}
                  width={IMAGES.chinnorRiceProduct.width}
                  height={IMAGES.chinnorRiceProduct.height}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1a0f1f]/85 backdrop-blur-md text-[#c9a24b] text-xs font-bold uppercase tracking-wider border border-[#c9a24b]/40">
                    GI Registered
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1a0f1f] text-xs font-semibold">
                    Wainganga Basin
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8">
                <span className="text-xs uppercase font-bold tracking-widest text-[#c9a24b] block mb-1">
                  {chinnorConfig.varietyName}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a0f1f] mb-3">
                  {chinnorConfig.name}
                </h3>
                
                {/* One-Line Benefit */}
                <p className="text-sm font-medium text-[#1a0f1f] mb-3 bg-[#f4ede1] p-3 rounded-xl border border-[#e8decb]">
                  {chinnorConfig.shortBenefit}
                </p>

                <p className="text-xs text-[#5e5261] leading-relaxed mb-6">
                  {chinnorConfig.description}
                </p>

                {/* Weight Options Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1a0f1f] mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#c9a24b]" />
                      Select Pack Size:
                    </span>
                    <span className="text-[#c9a24b]">
                      {currentChinnorOption.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {chinnorConfig.weightOptions.map((opt) => (
                      <button
                        key={opt.weightKg}
                        type="button"
                        onClick={() => setChinnorWeight(opt.weightKg)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all relative border ${
                          chinnorWeight === opt.weightKg
                            ? 'bg-[#1a0f1f] text-[#c9a24b] border-[#c9a24b] shadow-sm'
                            : 'bg-[#faf6ee] text-[#1a0f1f] border-[#e8decb] hover:border-[#c9a24b]/60'
                        }`}
                      >
                        {opt.isPopular && (
                          <span className="absolute -top-2 right-1.5 px-1.5 py-0.5 rounded-full bg-[#c9a24b] text-[#1a0f1f] text-[9px] font-black uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                        <div>{opt.weightKg} kg</div>
                        <div className="text-[11px] font-normal opacity-85">₹{opt.priceInr}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Order CTA Footer */}
            <div className="p-6 sm:p-8 pt-0 mt-auto">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#faf6ee] border border-[#e8decb] mb-4">
                <div>
                  <span className="text-[11px] uppercase font-semibold text-[#5e5261] block">
                    Price ({currentChinnorOption.label})
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#1a0f1f]">
                    ₹{currentChinnorOption.priceInr}
                  </div>
                </div>
                <span className="text-[11px] text-[#5e5261] text-right font-medium">
                  Aromatic Fragrant Grain<br />Nagpur / Pan-India Delivery
                </span>
              </div>

              <a
                href={BRAND_CONFIG.getWhatsappUrl(
                  `Hello Sangamnerkar Agro, I would like to order ${chinnorConfig.name} (${currentChinnorOption.label} at ₹${currentChinnorOption.priceInr}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#1a0f1f] hover:bg-[#2d1e34] text-[#c9a24b] border border-[#c9a24b] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#c9a24b] group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp (₹{currentChinnorOption.priceInr})</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
