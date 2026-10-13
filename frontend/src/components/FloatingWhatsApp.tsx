import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40 print:hidden flex items-center group font-sans"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-xl bg-[#1a0f1f] text-[#faf6ee] text-xs font-medium shadow-lg border border-[#c9a24b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Order on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={BRAND_CONFIG.getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp with Sangamnerkar Agro"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#c9a24b]/50"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
