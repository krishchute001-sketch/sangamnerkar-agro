import React from 'react';
import { HeartHandshake, Users, Leaf, Droplets, Sparkles, ArrowRight, ShieldCheck, MessageCircle, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import { Button } from '../components/ui/Button';

export const CSR: React.FC = () => {
  const initiatives = [
    {
      icon: <Users className="w-6 h-6 text-[#2F6B3A]" />,
      tag: "Farmer Prosperity",
      title: "Direct Farmer Support & Fair Procurement",
      description: "We work directly with traditional paddy farmers across Central India and heritage terroirs, ensuring guaranteed fair pricing, prompt payments, and elimination of exploitative middlemen.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#2F6B3A]" />,
      tag: "Biodiversity",
      title: "Heritage Seed Stewardship & Soil Health",
      description: "Protecting indigenous heirloom rice varieties—such as Manipur Chak-Hao Black Rice and Balaghat Chinnor—by incentivizing organic cultivation, bio-composting, and chemical-free soil practices.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#2F6B3A]" />,
      tag: "Community Health",
      title: "Nutritional Outreach & Food Security",
      description: "Promoting natural superfoods to combat lifestyle deficiencies. We regularly contribute wholesome grains to community nourishment programs and local kitchens across Nagpur.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#2F6B3A]" />,
      tag: "Rural Empowerment",
      title: "Women's Livelihood in Post-Harvest Processing",
      description: "Empowering rural women through skilled employment in traditional grain sorting, quality grading, and eco-friendly packaging, ensuring dignified supplemental family income.",
    },
  ];

  return (
    <div className="bg-[#FBF6EE] min-h-screen text-[#2C221E]">
      {/* 1. Warm Header Banner */}
      <section className="bg-[#F5ECE0] border-b border-[#E8DEC8] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EC] border border-[#2F6B3A]/20 text-[#2F6B3A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>Corporate Social Responsibility (CSR)</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5A2A27] tracking-tight leading-tight">
            Nurturing Soil, Uplifting Communities
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#665952] leading-relaxed max-w-2xl mx-auto">
            At Sangamnerkar Agro, business success is inextricably linked with the welfare of our farming partners, the health of our consumers, and the preservation of India's indigenous agricultural legacy.
          </p>
        </div>
      </section>

      {/* 2. Core Pillars of Impact */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2F6B3A] block mb-2">
            Our Key Commitments
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27]">
            How We Make a Measurable Difference
          </h2>
          <p className="mt-3 text-sm text-[#665952]">
            Rooted in Nagpur with over 6 years of grain stewardship, our social responsibility initiatives focus on grassroots impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] border border-[#2F6B3A]/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FDF7EB] text-[#C9962B] border border-[#C9962B]/20">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#5A2A27] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#665952] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Highlight Numbers / Local Focus Strip */}
      <section className="py-16 bg-[#F5ECE0] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-3xl border border-[#E8DEC8] shadow-2xs">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27] block mb-1">
                6+ Years
              </span>
              <span className="text-xs font-semibold text-[#2F6B3A] uppercase tracking-wider block mb-2">
                Community Sourcing
              </span>
              <p className="text-xs text-[#665952] leading-relaxed">
                Direct procurement relationship with indigenous paddy farmers across Central India.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-[#E8DEC8] shadow-2xs">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27] block mb-1">
                100% Non-GMO
              </span>
              <span className="text-xs font-semibold text-[#2F6B3A] uppercase tracking-wider block mb-2">
                Heritage Grains
              </span>
              <p className="text-xs text-[#665952] leading-relaxed">
                Preserving natural heirloom seeds with zero synthetic chemical acceleration.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-[#E8DEC8] shadow-2xs">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-[#5A2A27] block mb-1">
                Nagpur Hub
              </span>
              <span className="text-xs font-semibold text-[#2F6B3A] uppercase tracking-wider block mb-2">
                Kamptee & Regional Focus
              </span>
              <p className="text-xs text-[#665952] leading-relaxed">
                Headquartered in Ranala, Kamptee, actively serving our home district with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing Call to Action */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5A2A27] rounded-[36px] p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C9962B] font-bold block">
              Collaborate With Us
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#FBF6EE]">
              Interested in Partnering on Agricultural or Nutrition Programs?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DEC8] leading-relaxed pt-2">
              Whether you are an NGO, educational institution, or hospitality brand looking to collaborate on sustainable sourcing and nutrition drives, we welcome your connection.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact-us"
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Contact Our CSR Desk
              </Button>

              <Button
                href={theme.contact.whatsappUrl}
                external
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
