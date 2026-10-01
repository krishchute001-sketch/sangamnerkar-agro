import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { Mail, Phone, MapPin, Globe2, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'Export';
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    inquiry_type: initialType,
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    country: 'India',
    product_interest: initialProduct,
    quantity_metric_tons: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.submitInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fafaf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Global Trade & Contact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Commercial Team
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Whether you are a global commodity importer, retail supermarket distributor, or hospitality
            group, our international trade specialists are ready to structure your container shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Global Offices (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b1320] text-white p-8 rounded-3xl border border-amber-900/40 shadow-xl space-y-6">
              <div>
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
                  Global Headquarters
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Sangamnerkar Agro Black Rice & Chinnor Rice Limited
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    5188, World Trade Tower, Barakhamba Road, Connaught Place, New Delhi 110001, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>+91 (120) 4060-300 (Domestic & International)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>export@sangamnerkaragro.com | trade@sangamnerkaragro.com</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-2">
                  Operating Export Ports
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Jandiala Guru ICD (Punjab), Nhava Sheva (JNPT Mumbai), Mundra Port (Gujarat), Kolkata Port (Eastern Region).
                </p>
              </div>
            </div>

            {/* Regional Presence */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">
                International Representative Hubs
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-800 block">🇦🇪 Middle East & GCC Desk</span>
                  <p>Al Ras Trade Center, Deira, Dubai, UAE</p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">🇬🇧 European & UK Distribution Hub</span>
                  <p>St Mary Axe, City of London, United Kingdom</p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">🇺🇸 North America Logistics</span>
                  <p>Edison Commercial Park, New Jersey, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-slate-900 mb-3">
                    Trade Inquiry Logged
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, {formData.full_name}. Your trade inquiry for{' '}
                    <strong>{formData.product_interest || 'bulk agro products'}</strong> has been
                    assigned to our Senior Export Desk. A formal CIF/FOB proforma estimate will be
                    sent to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        inquiry_type: 'Export',
                        full_name: '',
                        company_name: '',
                        email: '',
                        phone: '',
                        country: 'India',
                        product_interest: '',
                        quantity_metric_tons: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-amber-300 font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-heading text-2xl font-bold text-slate-900">
                      Submit B2B Export / Trade Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete this form for wholesale pricing, container freight estimates, or distributor partnership inquiries.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Inquiry Type Radio / Buttons */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Inquiry Nature *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Export', 'Domestic Wholesale', 'Institutional / Horeca', 'General'].map(
                          (type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, inquiry_type: type })}
                              className={`py-2 px-2 text-[11px] font-semibold rounded-xl border text-center transition-all ${
                                formData.inquiry_type === type
                                  ? 'bg-slate-900 text-amber-300 border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {type}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company_name}
                          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="e.g. Global Foods Trading Ltd"
                        />
                      </div>
                    </div>

                    {/* Email, Phone & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="corporate@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="+1 555-0199"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Country of Destination *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="e.g. United Kingdom"
                        />
                      </div>
                    </div>

                    {/* Product & Volume */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Product Range of Interest
                        </label>
                        <input
                          type="text"
                          value={formData.product_interest}
                          onChange={(e) => setFormData({ ...formData, product_interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="e.g. Imperial Black Rice, Balaghat Chinnor, Jai Shree Ram"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Estimated Volume (Metric Tons / FCL)
                        </label>
                        <input
                          type="text"
                          value={formData.quantity_metric_tons}
                          onChange={(e) => setFormData({ ...formData, quantity_metric_tons: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="e.g. 2 x 20ft FCL (50 MT)"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Detailed Specifications / Incoterms Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Specify target packaging (5kg/25kg), CIF port, target ship dates, or certificate requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-slate-950 hover:bg-amber-600 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {submitting ? 'Transmitting Request...' : 'Transmit Export Enquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
