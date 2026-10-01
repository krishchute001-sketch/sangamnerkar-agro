import React from 'react';
import { Award, ShieldCheck, Hotel, Users, HeartHandshake, Globe2, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs: React.FC = () => {
  const leadership = [
    {
      name: 'Tushar Sangamnerkar',
      initials: 'TS',
      role: 'Business Operations & Growth',
      description: 'Overseeing institutional hotel partnerships, digital expansion, and multi-city delivery logistics.',
    },
    {
      name: 'Sukhad Sangamnerkar',
      initials: 'SS',
      role: 'Sourcing & Grain Stewardship',
      description: 'Leading farm-level procurement, heritage grain selection, and traditional grower relationships across Central India.',
    },
    {
      name: 'Kiran Sukhad Sangamnerkar',
      initials: 'KS',
      role: 'Operations & Quality Assurance',
      description: 'Ensuring rigorous quality standards, grain purity, careful sorting, and dependable delivery execution across every batch.',
    },
    {
      name: 'Ranjana Sukhad Sangamnerkar',
      initials: 'RS',
      role: 'Customer Care & Community Relations',
      description: 'Guiding core family values, ethical business practices, and fostering trusted relationships with client families.',
    },
  ];

  return (
    <div className="bg-[#fcfcf9]">
      {/* 1. Hero Header */}
      <div className="bg-[#0b1320] text-white py-20 border-b border-amber-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Nagpur's Trusted Rice Specialists • 6+ Years of Proven Quality
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            About Sangamnerkar Agro
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            With over 6 years of experience, Sangamnerkar Agro has built a trusted name in rice supply in Nagpur.
            From supplying top luxury hotels to health-conscious families, consistent quality and dependable service guide everything we do.
          </p>
        </div>
      </div>

      {/* 2. Story & Heritage Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Our Journey & Roots
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Trusted Name in Rice Supply Across Nagpur
            </h2>
            <div className="space-y-4 text-slate-600 text-sm mt-6 leading-relaxed">
              <p>
                With over <strong>6 years of experience</strong>, <strong>Sangamnerkar Agro</strong> has built a trusted name in rice supply in Nagpur. We focus on sourcing, processing, and supplying quality rice, and we are proud to count some of the <strong>top hotels in Nagpur</strong> among our regular customers.
              </p>
              <p>
                Over the years, we have worked to improve the way we source, handle, and deliver our products, always looking for new opportunities to grow. We have also widened our range to include <strong>Black Rice</strong>, a nutritious, antioxidant-rich grain, as demand grows for healthy and balanced food.
              </p>
              <p>
                Alongside Black Rice, our signature offerings include the certified <strong>GI-Tagged Balaghat Chinnor Rice</strong> and daily luxury <strong>Jai Shree Ram Traditional Rice</strong>. Our consistent quality and dependable service have helped us earn the confidence of hotels, restaurants, and families across the region.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 font-medium">
                🚀 <strong>Taking Sangamnerkar Agro Online:</strong> We are now taking Sangamnerkar Agro online, so that more customers can order premium rice directly from us, and we hope to reach more cities in the years ahead.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-center">
                <span className="font-heading text-2xl font-bold text-amber-900">6+ Years</span>
                <span className="block text-xs text-amber-800/80 mt-1">Trusted Sourcing</span>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-center">
                <span className="font-heading text-2xl font-bold text-amber-900">Top Hotels</span>
                <span className="block text-xs text-amber-800/80 mt-1">Regular HoReCa Clients</span>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-center col-span-2 sm:col-span-1">
                <span className="font-heading text-2xl font-bold text-amber-900">3 Products</span>
                <span className="block text-xs text-amber-800/80 mt-1">Black, Chinnor & Jai Shree Ram</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20">
              <img
                src="https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=1000&q=80"
                alt="Sangamnerkar Royal Black Rice Grains"
                className="object-cover h-[480px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2">
                  Specialty Focus
                </span>
                <h4 className="font-heading text-xl font-bold text-white">
                  Heirloom Superfoods & Fragrant Indigenous Grains
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Carefully sourced from authentic terroirs, processed for purity, and delivered fresh to top kitchens and homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="py-20 bg-[#0e1726] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase block mb-2">
              Our Pillars of Excellence
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white">
              Why Top Hotels & Discerning Families Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Nagpur Hotel Confidence</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trusted by Nagpur’s premier hotels and fine-dining restaurants for consistent grain length, delicate aroma, and prompt, reliable supply.
              </p>
            </div>

            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Antioxidant-Dense Black Rice</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Widened our specialized range with authentic Manipur Chak-Hao Black Rice, meeting the rising demand for wholesome, antioxidant-rich nutrition.
              </p>
            </div>

            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Direct Online Ordering</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Making our premium rice accessible directly to households and culinary creators online, with plans to expand across cities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our People - Family Leadership (No Photos, Monogram Crest Cards) */}
      <section id="leadership" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Our People
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            A Family-Run Business Guided by Integrity
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Sangamnerkar Agro is a family-run business, personally guided by:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Clean Elegant Monogram Badge (NO PHOTO) */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0b1320] to-[#1e293b] border border-amber-500/30 flex items-center justify-center text-amber-300 font-heading text-xl font-bold mb-6 shadow-md">
                  {leader.initials}
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                  {leader.name}
                </h4>
                <p className="text-xs font-semibold text-amber-700 mt-1 uppercase tracking-wider">
                  {leader.role}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Family Commitment Quote Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0b1320] via-[#121c2e] to-[#0b1320] rounded-2xl p-8 sm:p-12 border border-amber-500/30 text-white text-center shadow-xl">
          <HeartHandshake className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-amber-200">
            "Rooted in Family Values, Built on Customer Confidence."
          </h3>
          <p className="mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Every batch of rice supplied by Sangamnerkar Agro carries our family name. That is why we take personal responsibility for its purity, texture, and aroma.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center"
            >
              Explore Our Rice Varieties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/contact-us"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center"
            >
              Contact Our Family Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
