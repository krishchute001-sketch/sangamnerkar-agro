import React from 'react';
import { Award, ShieldCheck, Hotel, Sparkles, ShoppingBag, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import { Button } from '../components/ui/Button';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#FBF6EE] min-h-screen text-[#2C221E]">
      {/* 1. Warm Header Banner */}
      <section className="bg-[#F5ECE0] border-b border-[#E8DEC8] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EC] border border-[#2F6B3A]/20 text-[#2F6B3A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>Nagpur's Trusted Rice Specialists • 6+ Years</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5A2A27] tracking-tight leading-tight">
            Our Story & Heritage
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#665952] leading-relaxed max-w-2xl mx-auto">
            With over 6 years of experience, Sangamnerkar Agro has built a trusted name in rice supply in Nagpur.
            From supplying top luxury hotels to health-conscious families, consistent quality and dependable service guide everything we do.
          </p>
        </div>
      </section>

      {/* 2. Main Story Section */}
      <section id="story" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2F6B3A] block">
              Our Journey & Commitment
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27] leading-tight">
              A Trusted Name in Rice Supply Across Nagpur
            </h2>

            <div className="space-y-4 text-[#665952] text-sm sm:text-base leading-relaxed">
              <p>
                With over <strong className="text-[#5A2A27]">6 years of experience</strong>,{' '}
                <strong className="text-[#5A2A27]">Sangamnerkar Agro</strong> has built a trusted name in rice supply in Nagpur. Founded and guided by <strong className="text-[#5A2A27]">Sukhad Sangamnerkar</strong> and <strong className="text-[#5A2A27]">Ranjana Sangamnerkar</strong>, our endeavor began with an uncompromising focus on grain authenticity, honest sourcing, and dependable processing. Today, we are proud to count some of the premier luxury hotels in Nagpur among our regular patrons.
              </p>

              <p>
                Together with <strong className="text-[#5A2A27]">Tushar Sangamnerkar</strong> and <strong className="text-[#5A2A27]">Kiran Sukhad Sangamnerkar</strong> steering customer relationships, rigorous quality assurance, and modern delivery logistics, we have continually elevated how our grains are selected and handled. Recognizing the rising demand for wholesome, balanced nourishment, we expanded our specialty portfolio to include authentic <strong className="text-[#5A2A27]">Black Rice (Chak-Hao)</strong>—a nutrient-dense, antioxidant-rich heirloom grain.
              </p>

              <p>
                Alongside Black Rice, our signature offerings include certified <strong className="text-[#5A2A27]">GI-Tagged Balaghat Chinnor Rice</strong> and daily luxury <strong className="text-[#5A2A27]">Jai Shree Ram Traditional Rice</strong>. Backed by the personal stewardship and family commitment of the Sangamnerkar family across every batch, our consistent grain purity and prompt service have earned the enduring confidence of hotels, restaurants, and families throughout the region.
              </p>

              {/* Digital Expansion Highlight Box */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] text-[#2C221E] shadow-sm">
                <span className="font-bold text-[#2F6B3A] block mb-1">
                  🌾 Taking Sangamnerkar Agro Online
                </span>
                <p className="text-xs sm:text-sm text-[#665952]">
                  We are now taking Sangamnerkar Agro online, so that more customers can order premium rice directly from us, and we hope to reach more cities in the years ahead.
                </p>
              </div>
            </div>

            {/* Quick Stats Pill Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] text-center shadow-2xs">
                <span className="font-heading text-2xl font-bold text-[#5A2A27] block">6+ Years</span>
                <span className="text-[11px] font-medium text-[#665952] mt-0.5 block">Nagpur Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] text-center shadow-2xs">
                <span className="font-heading text-2xl font-bold text-[#5A2A27] block">Top Hotels</span>
                <span className="text-[11px] font-medium text-[#665952] mt-0.5 block">Regular HoReCa Clients</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] text-center shadow-2xs">
                <span className="font-heading text-2xl font-bold text-[#5A2A27] block">3 Varieties</span>
                <span className="text-[11px] font-medium text-[#665952] mt-0.5 block">Black, Chinnor & Jai Shree Ram</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-[32px] overflow-hidden shadow-xl border-2 border-[#E8DEC8] bg-white">
              <img
                src="/images/hero-1.jpg"
                alt="Sangamnerkar Agro Heritage Rice"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="p-6 bg-white space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EAF3EC] text-[#2F6B3A] font-semibold text-xs uppercase tracking-wider">
                  Our Focus
                </span>
                <h4 className="font-heading text-lg font-bold text-[#5A2A27]">
                  Heirloom Superfoods & Fragrant Indigenous Grains
                </h4>
                <p className="text-xs text-[#665952] leading-relaxed">
                  Carefully sourced from authentic terroirs, processed for purity, and delivered fresh to top kitchens and homes across Central India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pillars of Excellence */}
      <section className="py-16 sm:py-24 bg-[#F5ECE0] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2F6B3A] block mb-2">
              Our Pillars of Excellence
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27]">
              Why Top Hotels & Discerning Families Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] border border-[#2F6B3A]/20 flex items-center justify-center text-[#2F6B3A]">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#5A2A27]">Nagpur Hotel Confidence</h3>
              <p className="text-xs sm:text-sm text-[#665952] leading-relaxed">
                Trusted by Nagpur’s premier luxury hotels and fine-dining restaurants for consistent grain length, delicate aroma, and prompt, dependable wholesale delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] border border-[#2F6B3A]/20 flex items-center justify-center text-[#2F6B3A]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#5A2A27]">Antioxidant-Dense Black Rice</h3>
              <p className="text-xs sm:text-sm text-[#665952] leading-relaxed">
                Widened our specialized range with authentic Manipur Chak-Hao Black Rice, meeting the rising demand for wholesome, antioxidant-rich daily nutrition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] border border-[#2F6B3A]/20 flex items-center justify-center text-[#2F6B3A]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#5A2A27]">Direct Household & HoReCa Orders</h3>
              <p className="text-xs sm:text-sm text-[#665952] leading-relaxed">
                Making our premium rice accessible directly to households and culinary creators online, with reliable pan-India delivery logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing Commitment Banner */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5A2A27] rounded-[36px] p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C9962B] font-bold block">
              Purity in Every Grain
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#FBF6EE]">
              "Built on Customer Confidence, Sourced with Uncompromising Care."
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DEC8] leading-relaxed pt-2">
              Every batch of rice supplied by Sangamnerkar Agro carries our promise of authenticity, tender texture, and natural aroma.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/portfolio"
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Explore Rice Portfolio
              </Button>

              <Button
                href={theme.contact.whatsappUrl}
                external
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
              >
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
