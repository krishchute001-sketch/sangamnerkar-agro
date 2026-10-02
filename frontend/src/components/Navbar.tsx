import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { theme } from '../theme';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-30 bg-[#FBF6EE]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left: Brand Logo & Nagpur Identity */}
          <Link
            to="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#5A2A27] rounded-xl p-1"
            aria-label="Sangamnerkar Agro - Return to homepage"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#5A2A27] flex items-center justify-center text-xl text-[#FBF6EE] shadow-sm group-hover:scale-105 transition-transform">
              🌾
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#5A2A27] group-hover:text-[#441F1D] transition-colors">
                Sangamnerkar Agro
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2F6B3A]">
                Nagpur
              </span>
            </div>
          </Link>

          {/* 2. Center: Centered Navigation (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {/* Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                isActive('/')
                  ? 'text-[#2F6B3A] font-semibold bg-[#EAF3EC]'
                  : 'text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0]'
              }`}
            >
              Home
            </Link>

            {/* About Us (Dropdown) */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
                className={`px-3.5 py-2 text-sm font-medium rounded-xl inline-flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/about-us')
                    ? 'text-[#2F6B3A] font-semibold bg-[#EAF3EC]'
                    : 'text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-52 z-40">
                  <div className="bg-[#FFFFFF] border border-[#E8DEC8] rounded-2xl p-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/about-us#story"
                      className="block px-3 py-2 text-xs font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0] hover:text-[#5A2A27] transition-colors"
                    >
                      <span className="font-semibold block text-sm">Our Story</span>
                      <span className="text-[#665952] text-[11px]">6+ years supplying Nagpur hotels</span>
                    </Link>
                    <Link
                      to="/about-us#people"
                      className="block px-3 py-2 text-xs font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0] hover:text-[#5A2A27] transition-colors mt-1"
                    >
                      <span className="font-semibold block text-sm">Our People</span>
                      <span className="text-[#665952] text-[11px]">Sangamnerkar family leadership</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Products (Dropdown) */}
            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                aria-expanded={productsDropdownOpen}
                aria-haspopup="true"
                className={`px-3.5 py-2 text-sm font-medium rounded-xl inline-flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/portfolio')
                    ? 'text-[#2F6B3A] font-semibold bg-[#EAF3EC]'
                    : 'text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0]'
                }`}
              >
                <span>Our Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-40">
                  <div className="bg-[#FFFFFF] border border-[#E8DEC8] rounded-2xl p-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/portfolio?category=black-rice"
                      className="block px-3 py-2.5 text-xs font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0] hover:text-[#5A2A27] transition-colors"
                    >
                      <span className="font-semibold block text-sm text-[#5A2A27]">Black Rice (Chak-Hao)</span>
                      <span className="text-[#665952] text-[11px]">Anthocyanin-rich heirloom superfood</span>
                    </Link>
                    <Link
                      to="/portfolio?category=chinnor-rice"
                      className="block px-3 py-2.5 text-xs font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0] hover:text-[#5A2A27] transition-colors mt-1"
                    >
                      <span className="font-semibold block text-sm text-[#5A2A27]">Balaghat Chinnor Rice</span>
                      <span className="text-[#665952] text-[11px]">Certified GI-tagged fragrant grain</span>
                    </Link>
                    <Link
                      to="/portfolio?category=jai-shree-ram-rice"
                      className="block px-3 py-2.5 text-xs font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0] hover:text-[#5A2A27] transition-colors mt-1"
                    >
                      <span className="font-semibold block text-sm text-[#5A2A27]">Jai Shree Ram Rice</span>
                      <span className="text-[#665952] text-[11px]">Silky daily fine-grain luxury</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Why Black Rice */}
            <Link
              to="/explore-rice"
              className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                isActive('/explore-rice')
                  ? 'text-[#2F6B3A] font-semibold bg-[#EAF3EC]'
                  : 'text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0]'
              }`}
            >
              Why Black Rice
            </Link>

            {/* Gallery */}
            <Link
              to="/explore-rice#gallery"
              className="px-3.5 py-2 text-sm font-medium text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0] rounded-xl transition-colors"
            >
              Gallery
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                isActive('/contact-us')
                  ? 'text-[#2F6B3A] font-semibold bg-[#EAF3EC]'
                  : 'text-[#2C221E] hover:text-[#5A2A27] hover:bg-[#F5ECE0]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* 3. Right: Green "Order on WhatsApp" Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              href={theme.contact.whatsappUrl}
              external
              variant="whatsapp"
              size="md"
              leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
              aria-label="Order on WhatsApp with Sangamnerkar Agro"
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-[#5A2A27] hover:bg-[#F5ECE0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F6B3A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DEC8] bg-[#FBF6EE] px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#5A2A27] rounded-xl hover:bg-[#F5ECE0]"
          >
            Home
          </Link>

          <div className="pt-1 pb-1 pl-3 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#665952]">About Us</span>
            <Link
              to="/about-us#story"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-[#2C221E] hover:text-[#5A2A27]"
            >
              • Our Story & Nagpur Roots
            </Link>
            <Link
              to="/about-us#people"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-[#2C221E] hover:text-[#5A2A27]"
            >
              • Our People (Sangamnerkar Family)
            </Link>
          </div>

          <div className="pt-1 pb-1 pl-3 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#665952]">Our Products</span>
            <Link
              to="/portfolio?category=black-rice"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-[#2C221E] hover:text-[#5A2A27]"
            >
              • Black Rice (Chak-Hao)
            </Link>
            <Link
              to="/portfolio?category=chinnor-rice"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-[#2C221E] hover:text-[#5A2A27]"
            >
              • Balaghat Chinnor Rice (GI Tagged)
            </Link>
            <Link
              to="/portfolio?category=jai-shree-ram-rice"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-[#2C221E] hover:text-[#5A2A27]"
            >
              • Jai Shree Ram Rice
            </Link>
          </div>

          <Link
            to="/explore-rice"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0]"
          >
            Why Black Rice
          </Link>

          <Link
            to="/explore-rice#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0]"
          >
            Gallery
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2C221E] rounded-xl hover:bg-[#F5ECE0]"
          >
            Contact Us
          </Link>

          <div className="pt-3">
            <Button
              href={theme.contact.whatsappUrl}
              external
              variant="whatsapp"
              size="md"
              className="w-full"
              leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
            >
              Order on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export const Header = Navbar;
