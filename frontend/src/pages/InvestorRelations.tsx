import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { InvestorCategory, InvestorDoc } from '../types';
import { FileText, Download, TrendingUp, ShieldCheck, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

export const InvestorRelations: React.FC = () => {
  const [categories, setCategories] = useState<InvestorCategory[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInvestorData = async () => {
      try {
        const data = await api.getInvestorCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to load investor data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInvestorData();
  }, []);

  const allDocuments: InvestorDoc[] = categories.flatMap((cat) => cat.documents);

  const displayedDocs =
    activeTab === 'all'
      ? allDocuments
      : categories.find((c) => c.slug === activeTab)?.documents || [];

  return (
    <div className="bg-[#fafaf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Shareholder Center
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Investor Relations & Governance
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Transparent corporate disclosures, audited financial performance, corporate governance
            charters, and shareholder value creation reports.
          </p>
        </div>

        {/* Stock Ticker Banner Card */}
        <div className="bg-[#0b1320] text-white rounded-2xl p-6 sm:p-8 border border-amber-900/40 shadow-xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">NSE: SANGAMAGRO • BSE: 530813</span>
              <h3 className="font-heading text-2xl font-bold text-white flex items-center">
                ₹428.50 <span className="text-emerald-400 text-sm font-semibold ml-2">▲ +2.45% (+10.25)</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-xs">
            <div className="border-l border-slate-800 pl-4">
              <span className="text-slate-400 block">52-Week High</span>
              <span className="font-bold text-slate-200 mt-0.5 block">₹495.00</span>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <span className="text-slate-400 block">52-Week Low</span>
              <span className="font-bold text-slate-200 mt-0.5 block">₹312.20</span>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <span className="text-slate-400 block">Market Cap</span>
              <span className="font-bold text-slate-200 mt-0.5 block">₹9,840 Cr</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-colors ${
              activeTab === 'all'
                ? 'bg-slate-900 text-amber-300 shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Filings & Reports
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-colors ${
                activeTab === cat.slug
                  ? 'bg-slate-900 text-amber-300 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Documents Listing */}
        <div className="space-y-4 mb-16">
          {displayedDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-800 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-900">{doc.title}</h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1.5">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700">
                      {doc.fiscal_year}
                    </span>
                    {doc.quarter && (
                      <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-200/60">
                        {doc.quarter}
                      </span>
                    )}
                    <span>Published: {doc.published_date}</span>
                    <span>• {doc.file_size_formatted || '2.4 MB'}</span>
                  </div>
                </div>
              </div>

              <a
                href={doc.file_url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center shrink-0 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 mr-2" />
                Download PDF
              </a>
            </div>
          ))}
        </div>

        {/* Investor Grievance & Contact Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
            Investor Grievance & Compliance Desk
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Company Secretary & Compliance Officer</span>
              <p>Ashok Sharma, FCS</p>
              <p className="mt-1">compliance@sangamnerkaragro.com</p>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Registrar & Share Transfer Agent (RTA)</span>
              <p>Alankit Assignments Ltd.</p>
              <p className="mt-1">205-208, Anarkali Complex, Jhandewalan Extension, New Delhi</p>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Direct Shareholder Helpline</span>
              <p>Phone: +91 (120) 4060-350</p>
              <p className="mt-1">Hours: Mon - Fri, 9:30 AM - 5:30 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
