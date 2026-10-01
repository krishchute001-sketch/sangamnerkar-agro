import React from 'react';
import { Award, ShieldCheck, Factory, Users, HeartHandshake, Globe2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs: React.FC = () => {
  const leadership = [
    {
      name: 'Anil Kumar Mittal',
      title: 'Chairman & Managing Director',
      role: 'Visionary behind modern Indian Basmati industrialization and global containerized trade.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Arun Kumar Gupta',
      title: 'Joint Managing Director',
      role: 'Champion of farm-level agronomist outreach, contract seed breeding, and grain procurement.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Anoop Kumar Gupta',
      title: 'Joint Managing Director',
      role: 'Architect of international distribution networks spanning 90+ countries across GCC, EU, and Americas.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Priyanka Mittal',
      title: 'Whole-Time Director (International Strategy)',
      role: 'Leader of brand premiumization, specialty black rice diversification, and ESG commitments.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-[#fcfcf9]">
      {/* Hero Header */}
      <div className="bg-[#0b1320] text-white py-20 border-b border-amber-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Since 1889 • A Legacy of Purity
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            About Krish Agro & Black Rice
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From our founding over a century ago to becoming the world's most trusted grain exporter,
            our journey is defined by agricultural integrity, scientific innovation, and community upliftment.
          </p>
        </div>
      </div>

      {/* Corporate Heritage Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
              Our Heritage & Origin
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight">
              135 Years of Generational Grain Stewardship
            </h2>
            <div className="space-y-4 text-slate-600 text-sm mt-6 leading-relaxed">
              <p>
                Founded in 1889, our enterprise has stood at the vanguard of the global Basmati and
                specialty agro revolution. What began as a regional grain trading venture in Northern India
                has blossomed into an integrated farm-to-fork powerhouse catering to millions of families
                across six continents.
              </p>
              <p>
                Today, as Krish Agro, we have pioneered the revitalization of rare heirloom grains,
                most notably the GI-tagged **Manipur Chak-Hao Black Rice**, while maintaining our dominant
                stewardship in aged 1121 and Traditional Himalayan Basmati varieties.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60">
                <span className="font-heading text-2xl font-bold text-amber-800">195 MT/hr</span>
                <span className="block text-xs text-amber-700/80 mt-1">Single-site milling capacity</span>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60">
                <span className="font-heading text-2xl font-bold text-amber-800">1,000,000 MT</span>
                <span className="block text-xs text-amber-700/80 mt-1">Temperature-monitored silo storage</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80"
              alt="Rice harvesting"
              className="rounded-2xl shadow-xl object-cover h-[450px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0b1320] text-white p-6 rounded-xl border border-amber-500/40 shadow-xl max-w-xs hidden sm:block">
              <span className="text-amber-400 font-bold text-xl font-heading">140,000+</span>
              <p className="text-xs text-slate-300 mt-1">Contracted farmers supported with sustainable seed technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-[#0e1726] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase block mb-2">
              Our Purpose
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white">
              Guided by Integrity, Driven by Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To be the undisputed benchmark in authentic, nutrient-rich heritage grains, enriching
                kitchens across 100+ countries while nurturing the soil for generations to come.
              </p>
            </div>

            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To seamlessly integrate traditional agrarian craftsmanship with advanced grain engineering,
                guaranteeing non-GMO purity, zero waste, and transparent farmer prosperity.
              </p>
            </div>

            <div className="bg-[#121c2e] p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Core Values</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uncompromising purity, scientific rigor, environmental stewardship, and profound
                reverence for the Indian farmer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Governance
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            Board of Directors & Executive Leadership
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Experienced industry luminaries shaping the future of agribusiness and international commodity exports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h4 className="font-heading text-base font-bold text-slate-900">{leader.name}</h4>
                <p className="text-xs font-medium text-amber-700 mt-1">{leader.title}</p>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
