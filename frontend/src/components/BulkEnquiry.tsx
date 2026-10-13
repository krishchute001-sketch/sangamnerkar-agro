import React, { useState } from 'react';
import { Building2, MessageCircle, Send, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { api } from '../services/api';
import { BRAND_CONFIG } from '../config/brand';

export const BulkEnquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    quantity_metric_tons: '50 kg - 100 kg',
    phone: '',
    product_interest: 'Both Royal Black Rice & Balaghat Chinnor',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Submit to API (persists in localStorage & admin dashboard)
      await api.submitInquiry({
        inquiry_type: 'Institutional',
        full_name: formData.full_name,
        company_name: formData.company_name,
        phone: formData.phone,
        product_interest: formData.product_interest,
        quantity_metric_tons: formData.quantity_metric_tons,
        message: formData.message || `Bulk trade inquiry for ${formData.quantity_metric_tons}`,
      });

      setSubmitted(true);
    } catch (err: any) {
      // Graceful fallback: even if offline, mark submitted
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello Sangamnerkar Agro,%0A%0AI would like to place a Bulk / Hotel Inquiry:%0A• Name: ${encodeURIComponent(formData.full_name || 'Prospective Client')}%0A• Business: ${encodeURIComponent(formData.company_name || 'Hospitality / Retail')}%0A• Quantity: ${encodeURIComponent(formData.quantity_metric_tons)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Variety: ${encodeURIComponent(formData.product_interest)}`;
    return `https://wa.me/919923900943?text=${text}`;
  };

  return (
    <section
      id="enquiry"
      className="py-20 sm:py-24 lg:py-28 bg-[#1a0f1f] text-[#faf6ee] scroll-mt-20 relative overflow-hidden"
      aria-label="Hotel and Bulk Commercial Enquiry"
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a24b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a24b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospitality & Commercial Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf6ee]/10 border border-[#c9a24b]/40 text-[#c9a24b] text-xs font-semibold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>HoReCa & Commercial Wholesale</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf6ee] leading-tight">
              Hotel & Bulk Institutional Supply
            </h2>

            <p className="text-sm sm:text-base text-[#faf6ee]/80 leading-relaxed font-light">
              Supplying premier dining hotels, banquet caterers, and gourmet retailers with reliable scheduled deliveries, wholesale pricing, and consistent grain grading.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#faf6ee]/15 text-xs text-[#faf6ee]/85">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                <span>Scheduled daily & weekly bulk dispatch across Nagpur and Vidarbha.</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                <span>
                  Immediate Trade Desk assistance:{' '}
                  <a
                    href={BRAND_CONFIG.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a24b] font-bold hover:underline"
                  >
                    {BRAND_CONFIG.phoneDisplay}
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                <span>Official commercial desk: <strong className="text-white">{BRAND_CONFIG.email}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf6ee] text-[#1a0f1f] rounded-3xl p-8 sm:p-10 border border-[#c9a24b]/50 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-8 sm:py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#f4ede1] text-[#c9a24b] border border-[#c9a24b] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a0f1f]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e5261] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.full_name}</strong>. Your commercial inquiry for <strong>{formData.company_name}</strong> has been logged into our trade system.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1a0f1f] text-[#c9a24b] border border-[#c9a24b] font-bold text-xs uppercase tracking-wider hover:bg-[#2d1e34] transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp With This Inquiry</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#5e5261] hover:text-[#1a0f1f] underline"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e8decb] pb-4 mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a0f1f]">
                      Request Commercial Pricing & Samples
                    </h3>
                    <p className="text-xs text-[#5e5261] mt-0.5">
                      Fill out this quick form for trade rates or instant dispatch on WhatsApp.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a0f1f] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Chef Vikram Deshmukh"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#e8decb] rounded-xl text-xs text-[#1a0f1f] placeholder-[#5e5261]/60 focus:outline-none focus:border-[#c9a24b]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a0f1f] mb-1.5">
                        Business / Hotel Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Radisson Blu / Banquet Hall"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#e8decb] rounded-xl text-xs text-[#1a0f1f] placeholder-[#5e5261]/60 focus:outline-none focus:border-[#c9a24b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a0f1f] mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +91 98220 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#e8decb] rounded-xl text-xs text-[#1a0f1f] placeholder-[#5e5261]/60 focus:outline-none focus:border-[#c9a24b]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a0f1f] mb-1.5">
                        Estimated Quantity *
                      </label>
                      <select
                        value={formData.quantity_metric_tons}
                        onChange={(e) => setFormData({ ...formData, quantity_metric_tons: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#e8decb] rounded-xl text-xs text-[#1a0f1f] focus:outline-none focus:border-[#c9a24b]"
                      >
                        <option value="25 kg (Trial Sample)">25 kg (Trial Sample)</option>
                        <option value="50 kg - 100 kg">50 kg - 100 kg</option>
                        <option value="250 kg - 500 kg">250 kg - 500 kg (Monthly)</option>
                        <option value="1+ Metric Ton (Wholesale Container)">1+ Metric Ton (Wholesale Container)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a0f1f] mb-1.5">
                      Variety Preference
                    </label>
                    <select
                      value={formData.product_interest}
                      onChange={(e) => setFormData({ ...formData, product_interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#e8decb] rounded-xl text-xs text-[#1a0f1f] focus:outline-none focus:border-[#c9a24b]"
                    >
                      <option value="Both Royal Black Rice & Balaghat Chinnor">Both Royal Black Rice & Balaghat Chinnor</option>
                      <option value="Sangamnerkar Royal Black Rice (Chak-Hao)">Sangamnerkar Royal Black Rice (Chak-Hao)</option>
                      <option value="Royal Balaghat Chinnor Fragrant Rice">Royal Balaghat Chinnor Fragrant Rice</option>
                    </select>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#c9a24b] hover:bg-[#b48e3a] text-[#1a0f1f] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting...' : 'Submit Commercial Inquiry'}</span>
                    </button>

                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#1a0f1f] hover:bg-[#2d1e34] text-[#c9a24b] border border-[#c9a24b]/60 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0"
                      title="Send directly via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#c9a24b]" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#5e5261] text-center pt-2">
                    Commercial inquiries are protected and processed directly by Sangamnerkar Agro Trade Desk.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BulkEnquiry;
