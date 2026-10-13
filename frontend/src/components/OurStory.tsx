import React from 'react';
import { MapPin, Cog, PackageCheck, Sparkles } from 'lucide-react';
import { IMAGES } from '../config/images';

export const OurStory: React.FC = () => {
  const storyBlocks = [
    {
      id: 'terroir',
      tag: '01 • Origin & Cultivation',
      icon: <MapPin className="w-5 h-5 text-[#c9a24b]" />,
      title: 'Cultivated in Authentic Heirloom Terroirs',
      subtitle: 'Wainganga River Basin & Indigenous Manipur Terroirs',
      description:
        'Our grains are sourced directly from traditional agricultural clusters known for indigenous soil fertility and unhurried cultivation. Black Rice (Chak-Hao) originates in nutrient-rich wetlands, while Balaghat Chinnor thrives in the Wainganga river basin celebrated for its unique micro-climate and sweet groundwater.',
      keyPoints: [
        'Naturally nourished by seasonal rain cycles and mineral-rich river soil',
        'Traditional farmer stewardship preserving non-hybrid ancestral seeds',
        'Direct connection between regional harvest clusters and Nagpur distribution',
      ],
      image: IMAGES.sourcingFarm,
      imageLeft: true,
    },
    {
      id: 'processing',
      tag: '02 • Milling & Sorting',
      icon: <Cog className="w-5 h-5 text-[#c9a24b]" />,
      title: 'Gentle Small-Batch Milling & Purity Sorting',
      subtitle: 'Preserving Natural Bran, Nutrients & Fragrance',
      description:
        'Industrial mass processing strips away essential grain oils and delicate aromas. At Sangamnerkar Agro, we employ temperature-monitored, small-batch milling that cleans and sorts without harsh friction. For Black Rice, the anthocyanin-rich deep purple bran layer remains completely intact.',
      keyPoints: [
        'Multi-stage mechanical density cleaning to eliminate broken kernels and chaff',
        'Controlled temperature processing preventing aroma dissipation in Chinnor',
        'Zero artificial talc coating, chemical whitening, or synthetic enhancers',
      ],
      image: IMAGES.processingMilling,
      imageLeft: false,
    },
    {
      id: 'packaging',
      tag: '03 • Packaging & Delivery',
      icon: <PackageCheck className="w-5 h-5 text-[#c9a24b]" />,
      title: 'Food-Grade Packing & Timely Dispatch Across Nagpur',
      subtitle: 'Freshness Preserved from Warehouse to Your Kitchen',
      description:
        'Every harvest is packed under strict hygienic conditions into multi-layered food-grade moisture-barrier pouches and wholesale sacks. From our central facility in Kamptee, Nagpur, we maintain dedicated supply schedules for hospitality banquets, fine restaurants, and doorstep deliveries to households.',
      keyPoints: [
        'Aroma-lock vacuum sealing that protects grains from humidity and infestation',
        'Custom packaging sizes: 1 kg retail pouches up to 25 kg commercial sacks',
        'Direct local delivery across Nagpur and reliable freight despatch nationwide',
      ],
      image: IMAGES.packingDispatch,
      imageLeft: true,
    },
  ];

  return (
    <section
      id="story"
      className="py-20 sm:py-24 lg:py-28 bg-[#faf6ee] scroll-mt-20"
      aria-label="Our Story and Sourcing Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ede1] border border-[#c9a24b]/40 text-[#c9a24b] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Farm to Kitchen Traceability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f1f] tracking-tight">
            Our Sourcing & Craft
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5261] font-normal leading-relaxed">
            A family-guided commitment to grain authenticity, respectful agricultural partnerships, and unhurried small-batch handling.
          </p>
        </div>

        {/* Alternating Story Blocks */}
        <div className="space-y-20 sm:space-y-28">
          {storyBlocks.map((block) => (
            <div
              key={block.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                block.imageLeft ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  block.imageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#e8decb] bg-[#1a0f1f] aspect-[4/3] group">
                  <img
                    src={block.image.src}
                    alt={block.image.alt}
                    width={block.image.width}
                    height={block.image.height}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f1f]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  block.imageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#f4ede1] border border-[#e8decb] flex items-center justify-center">
                    {block.icon}
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#c9a24b]">
                    {block.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a0f1f] leading-snug">
                  {block.title}
                </h3>

                <p className="text-xs uppercase font-semibold text-[#5e5261] tracking-wider">
                  {block.subtitle}
                </p>

                <p className="text-sm text-[#5e5261] leading-relaxed">
                  {block.description}
                </p>

                <ul className="space-y-2.5 pt-2 border-t border-[#e8decb]">
                  {block.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start text-xs text-[#1a0f1f] gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24b] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
