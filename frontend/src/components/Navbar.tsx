import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Our Story', href: '#story' },
    { name: 'Contact', href: '#enquiry' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf6ee]/95 backdrop-blur-md shadow-sm border-b border-[#e8decb] py-3'
          : 'bg-[#faf6ee] border-b border-[#e8decb]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Sangamnerkar Agro - Return to homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#1a0f1f] border border-[#c9a24b]/40 flex items-center justify-center text-xl text-[#c9a24b] shadow-sm group-hover:border-[#c9a24b] transition-all">
              🌾
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1a0f1f] group-hover:text-[#c9a24b] transition-colors">
                Sangamnerkar Agro
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c9a24b]">
                Nagpur • Heritage Rice
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#1a0f1f] hover:text-[#c9a24b] rounded-xl hover:bg-[#f4ede1] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp & Phone */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BRAND_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1a0f1f] hover:text-[#c9a24b] rounded-xl hover:bg-[#f4ede1] transition-colors"
              title="Call Sangamnerkar Agro"
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a24b]" />
              <span>{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={BRAND_CONFIG.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp with Sangamnerkar Agro"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a0f1f] text-[#c9a24b] hover:bg-[#2d1e34] border border-[#c9a24b]/50 hover:border-[#c9a24b] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-[#c9a24b] group-hover:scale-110 transition-transform" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={BRAND_CONFIG.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#1a0f1f] text-[#c9a24b] border border-[#c9a24b]/40"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-[#1a0f1f] hover:bg-[#f4ede1] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#e8decb] space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1a0f1f] hover:text-[#c9a24b] hover:bg-[#f4ede1] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#e8decb]/60 flex flex-col gap-2">
              <a
                href={`tel:${BRAND_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#1a0f1f]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c9a24b]" />
                <span>Call: {BRAND_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={BRAND_CONFIG.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a0f1f] text-[#c9a24b] border border-[#c9a24b] text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
