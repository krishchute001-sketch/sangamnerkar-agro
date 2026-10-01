import React from 'react';
import { CorporateStats } from '../types';
import { Globe2, Factory, Users2, Landmark, Zap, Sparkles } from 'lucide-react';

interface CorporateTickerProps {
  stats: CorporateStats;
}

export const CorporateTicker: React.FC<CorporateTickerProps> = ({ stats }) => {
  const statItems = [
    {
      icon: <Landmark className="w-6 h-6 text-amber-400" />,
      value: `${stats.heritage_years}+ Years`,
      label: 'Dedicated Grain Mastery (6+ Years)',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-amber-400" />,
      value: `${stats.global_export_countries}+ Countries`,
      label: 'Global Export Footprint',
    },
    {
      icon: <Factory className="w-6 h-6 text-amber-400" />,
      value: `${stats.milling_capacity_mt_per_hour} MT/Hr`,
      label: 'Largest Milling & Silo Capacity',
    },
    {
      icon: <Users2 className="w-6 h-6 text-amber-400" />,
      value: `${(stats.farmer_network_count / 1000).toFixed(0)}k+ Farmers`,
      label: 'Direct Agricultural Network',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      value: `${stats.green_energy_mw} MW`,
      label: 'Captive Green Biomass Power',
    },
  ];

  return (
    <div className="bg-[#0b1320] border-y border-amber-900/40 py-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {statItems.map((item, idx) => (
            <div key={idx} className="pt-4 lg:pt-0 lg:px-4 flex flex-col items-center">
              <div className="mb-3 p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 shadow-md">
                {item.icon}
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-tight">
                {item.value}
              </span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium max-w-[150px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
