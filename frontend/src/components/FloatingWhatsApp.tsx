import React from 'react';
import { MessageCircle } from 'lucide-react';
import { theme } from '../theme';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40 print:hidden flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-xl bg-[#5A2A27] text-[#FBF6EE] text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Order on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={theme.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp with Sangamnerkar Agro"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#2F6B3A] text-white shadow-xl hover:bg-[#24542D] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#C9962B]/50"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#2F6B3A] animate-ping opacity-25"></span>
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
};
