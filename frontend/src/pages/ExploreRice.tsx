import React from 'react';
import { Sparkles, Clock, CheckCircle2, Shield, HeartPulse, Flame, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExploreRice: React.FC = () => {
  return (
    <div className="bg-[#fdfdfa] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Agronomy & Heritage Encyclopedia
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Black Rice, Chinnor & Jai Shree Ram
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Discover the botanical wonder of Manipur Chak-Hao, the sweet floral enchantment of
            GI-tagged Balaghat Chinnor, and the silky everyday elegance of Jai Shree Ram traditional rice.
          </p>
        </div>

        {/* Section 1: Manipur Chak-Hao Forbidden Black Rice */}
        <div className="bg-[#0b1320] text-white rounded-3xl p-8 sm:p-14 border border-amber-900/40 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold block">
                The Emperor's Superfood Grain
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Manipur Chak-Hao Black Rice
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Native to the emerald hills and wetlands of Manipur, India, Chak-Hao has been granted
                  a prestigious Geographical Indication (GI) tag. Historically reserved exclusively for emperors
                  to bestow vitality and longevity, its dark purple-black pigment is powered by concentrated anthocyanins.
                </p>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 shrink-0" />
                    <strong>180mg Natural Anthocyanins:</strong> Surpassing blueberries in antioxidant ORAC score.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 shrink-0" />
                    <strong>Low Glycemic Index:</strong> Delivers sustained energy without sharp glucose spikes.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 shrink-0" />
                    <strong>Roasted Nutty Profile:</strong> Delightful toasted hazelnut texture ideal for salads and desserts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1000&q=80"
                alt="Manipur Chak-Hao Black Rice"
                className="rounded-2xl border border-purple-500/30 object-cover h-[380px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Balaghat Chinnor Rice (GI Tagged) */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1000&q=80"
                alt="Balaghat Chinnor Rice"
                className="rounded-2xl shadow-lg object-cover h-[380px] w-full"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block">
                The Fragrant Pride of Central India
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                GI-Tagged Balaghat Chinnor Rice
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nurtured by the mineral-abundant Wainganga river soils of Balaghat (Madhya Pradesh), Chinnor is
                widely crowned the "Queen of Aromatic Indigenous Rices". Awarded the official GI-696 designation,
                it features an unforgettable sweet floral fragrance and tender, velvety texture that stays moist for hours.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60">
                  <Award className="w-6 h-6 text-amber-700 mb-2" />
                  <span className="font-bold text-slate-900 text-sm block">Official GI Tag</span>
                  <span className="text-xs text-slate-500">Certified authentic Balaghat terroir</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60">
                  <Flame className="w-6 h-6 text-amber-700 mb-2" />
                  <span className="font-bold text-slate-900 text-sm block">Natural Floral Perfume</span>
                  <span className="text-xs text-slate-500">Divine aroma for royal kheer & pulao</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Jai Shree Traditional Rice */}
        <div className="bg-[#0b1320] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block">
                Daily Dining Elegance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Jai Shree Ram Premium Rice
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Jai Shree Ram rice is celebrated for its slender, pearly white grain, gentle comforting scent, and
                fluffy non-sticky finish. Milled with utmost care to protect grain integrity, it is the grain
                of choice for Indian households and fine-dining restaurants demanding consistent elegance.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <strong>Digestibility & Purity:</strong> Low in heavy starches, Jai Shree Ram rice digests easily,
                making it the wholesome daily choice for all generations.
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80"
                alt="Jai Shree Ram Premium Rice"
                className="rounded-2xl border border-amber-500/30 object-cover h-[380px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Master Cooking Guide */}
        <div className="bg-[#f4f4ee] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <h3 className="font-heading text-2xl font-bold text-slate-900 text-center mb-8">
            Culinary Preparation Guide by Variety
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="text-xs uppercase font-bold text-purple-700 tracking-wider block mb-2">Imperial Black Rice</span>
              <h4 className="font-bold text-slate-900 text-base mb-2">Soak 1-2 Hours (1:2 Water)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Because black rice retains its nutrient-dense bran layer, pre-soaking softens the outer hull. Cook on gentle low heat for 30 minutes for a chewy, nutty texture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-2">Balaghat Chinnor Rice</span>
              <h4 className="font-bold text-slate-900 text-base mb-2">Gentle Simmer (1:1.75 Water)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rinse gently without breaking delicate kernels. Chinnor cooks quickly in 12–15 minutes, producing an intoxicating floral aroma and soft velvety bite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider block mb-2">Jai Shree Ram Traditional</span>
              <h4 className="font-bold text-slate-900 text-base mb-2">Fluffy Steam (1:2 Water)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Soak for 15 minutes. Bring to a rolling boil, cover tightly, and steam on low for 10 minutes. Fluff with a fork for individual, non-sticky pearly grains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
