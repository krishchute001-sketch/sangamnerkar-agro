import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Award, Shield, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070d18] text-slate-300 border-t-2 border-amber-600/30">
      {/* Certifications Banner */}
      <div className="bg-[#0b1424] py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6">
            Global Quality & Food Safety Accreditations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            {[
              'BRCGS Grade AA',
              'US FDA Registered',
              'ISO 22000 & 9001',
              'USDA Organic',
              'Halal Certified',
              'Kosher Certified',
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-300 shadow-sm hover:border-amber-500/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-0.5">
                <div className="w-full h-full bg-[#0b1320] rounded-full flex items-center justify-center text-lg">
                  🌾
                </div>
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-amber-200">
                SANGAMNERKAR AGRO
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              World’s premier producer and exporter of Heirloom Manipur Chak-Hao Black Rice, GI-Tagged Balaghat Chinnor Rice, and Jai Shree Traditional Rice.
              Empowering farming families across India with sustainable agriculture since 1889.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Corporate Office: 5188, World Trade Tower, Barakhamba Road, Connaught Place, New Delhi 110001, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 (120) 4060-300 (Export Desk)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>export@sangamnerkaragro.com | investor@sangamnerkaragro.com</span>
              </div>
            </div>
          </div>

          {/* Portfolios */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-amber-300 uppercase mb-4">
              Our Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/portfolio?category=black-rice" className="hover:text-amber-300 transition-colors">
                  Sangamnerkar Royal Black Rice
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=chinnor-rice" className="hover:text-amber-300 transition-colors">
                  Royal Balaghat Chinnor Rice
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=jai-shree-ram-rice" className="hover:text-amber-300 transition-colors">
                  Jai Shree Ram Premium Rice
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-amber-300 uppercase mb-4">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about-us" className="hover:text-amber-300 transition-colors">
                  Our 135-Year Heritage
                </Link>
              </li>
              <li>
                <Link to="/about-us#leadership" className="hover:text-amber-300 transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/explore-rice" className="hover:text-amber-300 transition-colors">
                  Farm-to-Fork Traceability
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="hover:text-amber-300 transition-colors">
                  Annual Reports & Filings
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-amber-300 transition-colors">
                  ESG & Farmer Prosperity
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber-300 transition-colors">
                  Life at Sangamnerkar Agro / Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Inquiries & Disclosures */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-amber-300 uppercase mb-4">
              Global Trade
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/contact-us?type=Export" className="text-amber-400 font-medium hover:text-amber-300">
                  Bulk Container Export Inquiries
                </Link>
              </li>
              <li>
                <Link to="/contact-us?type=Domestic" className="hover:text-amber-300 transition-colors">
                  Distributor Network Application
                </Link>
              </li>
              <li>
                <Link to="/contact-us?type=Institutional" className="hover:text-amber-300 transition-colors">
                  Horeca & Hotel Institutional Supply
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="hover:text-amber-300 transition-colors">
                  SEBI / Stock Disclosures
                </Link>
              </li>
              <li>
                <Link to="/media-news" className="hover:text-amber-300 transition-colors">
                  Press Releases & Media Kit
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="text-slate-500 hover:text-slate-300 text-[11px] block pt-2">
                  Staff CMS Portal →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sangamnerkar Agro Black Rice & Chinnor Rice Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Use</span>
            <span className="hover:text-slate-400 cursor-pointer">Disclaimer</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
