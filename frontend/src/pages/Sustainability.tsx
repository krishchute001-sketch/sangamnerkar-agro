import React from 'react';
import { Droplet, Sun, Users, Recycle, CheckCircle2, Leaf } from 'lucide-react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-[#fafaf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest block mb-2">
            ESG & Environmental Stewardship
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Soil, Water & Farmers
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Our agricultural philosophy is deeply rooted in regenerative cultivation, water stewardship,
            and circular energy generation that minimizes ecological footprint across our supply chain.
          </p>
        </div>

        {/* ESG Metric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">30% Water Saved</h3>
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider block mb-3">
              Alternate Wetting & Drying (AWD)
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Replacing conventional flooded paddies with scientific AWD sensors allows soil aeration,
              reducing groundwater draw by over 30% while curbing methane emissions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">145 MW Clean Power</h3>
            <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-3">
              Captive Husk Biomass & Solar
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% of milling operations are powered by renewable energy generated from agricultural
              by-products, abating more than 120,000 tonnes of carbon dioxide every year.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">140,000+ Farmers</h3>
            <span className="text-xs uppercase font-bold text-purple-700 tracking-wider block mb-3">
              Fair Trade Prosperity Network
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct seed distribution, guaranteed fair market buybacks, soil testing clinics, and crop
              insurance assistance eliminate middleman exploitation.
            </p>
          </div>
        </div>

        {/* Circular Agro Economy Card */}
        <div className="bg-[#0b1320] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
              Circular Economy In Action
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Zero Waste from Seed to Harvest
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Nothing in our processing complex goes to landfill. Every element of the paddy crop is
              transformed into valuable food, energy, or natural industrial compounds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Outer Husk:</strong> Fuel for biomass electricity and steam boilers.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Rice Bran:</strong> High-Oryzanol culinary heart oil & animal feed protein.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Broken Grains:</strong> High-purity rice starch, gluten-free flour, and noodles.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Boiler Ash:</strong> Natural silica used for green eco-friendly cement bricks.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
