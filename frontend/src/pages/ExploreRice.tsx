import React from 'react';
import { Sparkles, Clock, CheckCircle2, Shield, HeartPulse, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExploreRice: React.FC = () => {
  return (
    <div className="bg-[#fdfdfa] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            The Science & Art of Grain
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Rice & Agronomy Mastery
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Understand the botanical wonder of Himalayan Basmati, the medicinal heritage of Manipur Black Rice,
            and the rigorous ageing science that produces the world's most fragrant dining experience.
          </p>
        </div>

        {/* Section 1: The Aging Science in Concrete Silos */}
        <div className="bg-[#0b1320] text-white rounded-3xl p-8 sm:p-14 border border-amber-900/40 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block">
                The Science of Maturation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Authentic Basmati Must Age for 12 to 24 Months
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Freshly harvested paddy contains up to 18% moisture and soft, loose starch amylose
                  chains. If cooked immediately, the grains burst, clump together, and release sticky
                  starches.
                </p>
                <p>
                  In our 1,000,000 MT climate-controlled silos, the grain is cured over two full seasons.
                  Moisture is gradually drawn down to a stable 11.5–12.5%. During this natural maturation:
                </p>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                    Amylose starches crystallize, providing resilient grain firmness.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                    The natural 2-acetyl-1-pyrroline (2-AP) floral aroma intensifies.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                    Grain elongates up to 2.8x its raw length upon cooking without swelling sideways.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80"
                alt="Aged Basmati Grain"
                className="rounded-2xl border border-amber-500/30 object-cover h-[380px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Spotlighting Heirloom Manipur Chak-Hao Black Rice */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1000&q=80"
                alt="Black Rice"
                className="rounded-2xl shadow-lg object-cover h-[380px] w-full"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-purple-800 text-xs font-bold uppercase tracking-widest block">
                The Emperor's Superfood Grain
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Manipur Chak-Hao (Forbidden Black Rice)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Revered in Asian royal dynasties for its longevity benefits, Chak-Hao derives its deep
                black-purple sheen from anthocyanins—the same potent plant antioxidant pigments found in
                blueberries and acai, but in higher concentrations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <HeartPulse className="w-6 h-6 text-purple-700 mb-2" />
                  <span className="font-bold text-slate-900 text-sm block">180mg Anthocyanins</span>
                  <span className="text-xs text-slate-500">Natural heart & cellular defense</span>
                </div>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <Flame className="w-6 h-6 text-purple-700 mb-2" />
                  <span className="font-bold text-slate-900 text-sm block">Roasted Nutty Finish</span>
                  <span className="text-xs text-slate-500">Gourmet culinary texture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Master Chef Guide to Cooking Non-Sticky Basmati */}
        <div className="bg-[#f4f4ee] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <h3 className="font-heading text-2xl font-bold text-slate-900 text-center mb-8">
            Master Chef Method: Cooking Fluffy, Non-Sticky Basmati
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold inline-flex items-center justify-center mb-4 text-xs">1</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Gentle Wash</h4>
              <p className="text-xs text-slate-600">Rinse gently 2-3 times in cold water until runoff is clear without rubbing grains harshly.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold inline-flex items-center justify-center mb-4 text-xs">2</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">30 Min Soak</h4>
              <p className="text-xs text-slate-600">Soaking rehydrates the inner starch core, permitting maximum elongation during thermal expansion.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold inline-flex items-center justify-center mb-4 text-xs">3</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Rolling Boil (1:5)</h4>
              <p className="text-xs text-slate-600">Cook in plenty of rolling boiling water with a pinch of salt and drop of oil for 7-8 minutes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold inline-flex items-center justify-center mb-4 text-xs">4</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Drain & Rest</h4>
              <p className="text-xs text-slate-600">Drain excess water completely. Cover pan and let steam rest for 5 minutes before fluffing with a fork.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
