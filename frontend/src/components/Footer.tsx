import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { LinkedInIcon } from './icons/LinkedInIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#140a18] text-[#faf6ee]/80 border-t border-[#c9a24b]/20 font-sans">
      {/* Top Heritage Badge Bar */}
      <div className="border-b border-[#c9a24b]/15 bg-[#1a0f1f]/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#faf6ee]/70">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c9a24b]" />
              <span className="font-medium tracking-wide">
                Nagpur's Family-Run Heirloom Purveyors &bull; FSSAI Lic. #{BRAND_CONFIG.fssaiNumber}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#c9a24b]">Balaghat GI-696 Certified Lineage</span>
              <span className="hidden md:inline text-white/30">&bull;</span>
              <span className="hidden md:inline">Small-Batch Moisture Milled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & About Line (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c9a24b]/40 bg-[#1a0f1f] flex items-center justify-center text-lg shadow-inner">
                🌾
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#faf6ee] block">
                  {BRAND_CONFIG.companyName}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-medium block">
                  {BRAND_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#faf6ee]/70 leading-relaxed max-w-md">
              Family-run purveyors dedicated to reviving indigenous Indian grains. We supply pure heirloom Chak-Hao Black Rice and GI-tagged Balaghat Chinnor Rice directly from certified regional grower networks to homes, chefs, and hospitality partners.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#faf6ee] text-xs font-medium transition-colors"
              >
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
              </a>

              <a
                href={BRAND_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#faf6ee] text-xs font-medium transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#c9a24b]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#faf6ee]/50" />
              </a>
            </div>
          </div>

          {/* Quick Links (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold tracking-wide text-[#faf6ee] border-b border-[#c9a24b]/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#faf6ee]/70">
              <li>
                <a href="#home" className="hover:text-[#c9a24b] transition-colors inline-flex items-center gap-1.5">
                  &bull; Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#c9a24b] transition-colors inline-flex items-center gap-1.5">
                  &bull; Heirloom Products
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-[#c9a24b] transition-colors inline-flex items-center gap-1.5">
                  &bull; Quality & Certifications
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#c9a24b] transition-colors inline-flex items-center gap-1.5">
                  &bull; Our Story & Sourcing
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#c9a24b] transition-colors inline-flex items-center gap-1.5">
                  &bull; Hotel & Bulk Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold tracking-wide text-[#faf6ee] border-b border-[#c9a24b]/20 pb-2">
              Nagpur Depot & Contact
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#faf6ee]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BRAND_CONFIG.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a24b] shrink-0" />
                <a
                  href={BRAND_CONFIG.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a24b] transition-colors font-medium text-sm tracking-wide"
                  title="Direct WhatsApp & Phone"
                >
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a24b] shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="hover:text-[#c9a24b] transition-colors break-all"
                >
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#1a0f1f] border border-[#c9a24b]/20 text-[11px] text-[#faf6ee]/70 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#c9a24b] shrink-0" />
              <span>Direct dispatch across India via insured courier & freight lines.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#faf6ee]/50 gap-4">
          <p>
            &copy; {currentYear} {BRAND_CONFIG.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-[#faf6ee] transition-colors">
              Products
            </a>
            <a href="#quality" className="hover:text-[#faf6ee] transition-colors">
              FSSAI Compliance
            </a>
            <a href="#enquiry" className="hover:text-[#faf6ee] transition-colors">
              Wholesale Enquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
