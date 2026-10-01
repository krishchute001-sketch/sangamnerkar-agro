import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Corporate Utility Bar */}
      <div className="bg-[#0b1320] text-slate-300 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Market & Global Presence */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-400 font-semibold tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              SANGAMNERKAR AGRO (NSE): ₹428.50 <span className="text-emerald-400 ml-1">▲ +2.45%</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center text-slate-300">
              <Globe className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Global Presence: 90+ Countries
            </span>
          </div>

          {/* Contact & Admin Portal */}
          <div className="flex items-center space-x-4">
            <a href="tel:+919923900943" className="hidden md:flex items-center hover:text-amber-300 transition-colors">
              <Phone className="w-3 h-3 mr-1 text-amber-400" />
              +91 99239 00943
            </a>
            <a href="mailto:export@sangamnerkaragro.com" className="hidden lg:flex items-center hover:text-amber-300 transition-colors">
              <Mail className="w-3 h-3 mr-1 text-amber-400" />
              export@sangamnerkaragro.com
            </a>
            <Link
              to="/admin/login"
              className="flex items-center text-amber-400 hover:text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/40 font-medium transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Admin CMS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Brand Navigation */}
      <nav className="bg-[#0f172a] border-b border-amber-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Heritage Crest */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-0.5 shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0b1320] rounded-full flex items-center justify-center">
                  <span className="text-xl">🌾</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                  SANGAMNERKAR AGRO
                </span>
                <span className="text-[10px] tracking-[0.2em] text-amber-400/80 uppercase font-medium">
                  Black Rice & Chinnor Rice
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/about-us') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                About Us
              </Link>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPortfolioDropdown(true)}
                onMouseLeave={() => setPortfolioDropdown(false)}
              >
                <Link
                  to="/portfolio"
                  className={`px-3 py-2 text-sm font-medium tracking-wide inline-flex items-center transition-colors ${
                    isActive('/portfolio') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                  }`}
                >
                  Our Portfolio
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>

                {portfolioDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-[#0d1627] border border-amber-800/40 rounded-b-lg shadow-2xl py-2 z-50">
                    <Link
                      to="/portfolio?category=black-rice"
                      className="block px-4 py-2.5 text-xs text-amber-300 hover:bg-amber-950/50 hover:text-amber-100 transition-colors"
                    >
                      👑 Sangamnerkar Royal Black Rice (Chak-Hao)
                    </Link>
                    <Link
                      to="/portfolio?category=chinnor-rice"
                      className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-amber-950/50 hover:text-amber-300 transition-colors"
                    >
                      🌾 Royal Balaghat Chinnor Rice (GI Tagged)
                    </Link>
                    <Link
                      to="/portfolio?category=jai-shree-ram-rice"
                      className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-amber-950/50 hover:text-amber-300 transition-colors"
                    >
                      ✨ Jai Shree Ram Premium Rice
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/explore-rice"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/explore-rice') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Explore Rice
              </Link>

              <Link
                to="/investor-relations"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/investor-relations') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Investor Relations
              </Link>

              <Link
                to="/sustainability"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/sustainability') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Sustainability
              </Link>

              <Link
                to="/media-news"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/media-news') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Media & News
              </Link>

              <Link
                to="/careers"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/careers') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Careers
              </Link>

              <Link
                to="/contact-us"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/contact-us') ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* B2B Export CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact-us?type=Export"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg shadow-amber-900/40 hover:shadow-amber-500/30 transition-all"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0d1627] rounded-full group-hover:bg-opacity-0 text-amber-200 group-hover:text-slate-900 font-bold uppercase tracking-wider flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400 group-hover:text-slate-900" />
                  B2B Export Enquiry
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-amber-400 hover:text-amber-200 hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a101d] border-b border-amber-800/40 px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              About Us
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-amber-300 hover:text-amber-100"
            >
              Our Portfolio (Black Rice, Chinnor & Jai Shree Ram)
            </Link>
            <Link
              to="/explore-rice"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Explore Rice & Milling
            </Link>
            <Link
              to="/investor-relations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Investor Relations & Reports
            </Link>
            <Link
              to="/sustainability"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Sustainability & ESG
            </Link>
            <Link
              to="/media-news"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Media & News
            </Link>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Careers
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Contact Us
            </Link>
            <div className="pt-4 border-t border-slate-800">
              <Link
                to="/contact-us?type=Export"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold py-2.5 rounded-lg shadow-md"
              >
                Submit B2B Export Enquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
