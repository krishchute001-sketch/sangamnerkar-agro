import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Product, CorporateStats } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CorporateTicker } from '../components/CorporateTicker';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Leaf,
  FileText,
  Clock,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [stats, setStats] = useState<CorporateStats>({
    global_export_countries: 90,
    milling_capacity_mt_per_hour: 195,
    farmer_network_count: 140000,
    storage_capacity_mt: 1000000,
    heritage_years: 135,
    purity_guarantee_percent: 100,
    green_energy_mw: 145,
  });

  const faqs = [
    {
      q: "What makes Manipur Chak-Hao Black Rice unique, and why is it called 'Forbidden Rice'?",
      a: "Chak-Hao is an indigenous heirloom grain native to the valleys of Manipur, India, protected by a prestigious Geographical Indication (GI) tag. Historically reserved exclusively for imperial royalty due to its longevity and health benefits, it boasts 180mg of natural anthocyanins per 100g (higher antioxidant density than wild blueberries), low glycemic index, and an exquisite roasted hazelnut fragrance.",
    },
    {
      q: "How long is your Basmati aged, and why does silo aging matter?",
      a: "Our signature Basmati varieties (such as 1121 XXL and Traditional Himalayan Basmati) are aged for a minimum of 12 to 24 months in our climate-monitored 1,000,000 MT concrete silos. Curing naturally reduces internal moisture to 11.5–12.5% and crystallizes the starch amylose chains, ensuring the grains expand over 2.5x in length upon cooking without clumping or breaking.",
    },
    {
      q: "What is your Minimum Order Quantity (MOQ) for international containerized exports?",
      a: "Our standard export MOQ is one 20-foot Full Container Load (FCL, approximately 20 to 25 Metric Tons). We also support multi-SKU consolidated shipments combining aged Basmati, Chak-Hao Black Rice, and Rice Bran Oil for international distributors and retail supermarket chains.",
    },
    {
      q: "Which international food safety and organic accreditations do you possess?",
      a: "Our milling and processing complexes are certified under BRCGS Grade AA, US FDA Registration, ISO 22000 & 9001, USDA Organic, India Organic (NPOP), Halal, and Kosher standards. Every export consignment is genetically fingerprinted for 100% varietal purity.",
    },
    {
      q: "Do you offer private label (OEM) packaging for supermarket brands?",
      a: "Yes. We offer turnkey private label packaging solutions including nitrogen-flushed stand-up zipper pouches, vacuum bricks, premium woven jute bags, and bulk 25kg/50kg poly-woven sacks branded with your company's artwork and barcode specifications.",
    },
    {
      q: "How can I request commercial pricing or CIF/FOB export quotes?",
      a: "You can submit an inquiry directly through our online B2B Trade Enquiry form on this website or email export@krishagro.com. Our international trade specialists will prepare a formal CIF/FOB quotation with shipping schedules within 24 business hours.",
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const [prods, statsData] = await Promise.all([
          api.getProducts({ is_featured: true }),
          api.getCorporateStats(),
        ]);
        setFeaturedProducts(prods);
        setStats(statsData);
      } catch (err) {
        console.error('Failed to fetch home page data', err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Grand Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#070e1b] overflow-hidden">
        {/* Background Image & Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
            alt="Paddy Fields at Sunrise"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b] via-transparent to-[#070e1b]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Heritage Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-600/50 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ESTABLISHED 1889 • 135 YEARS OF GRAIN MASTERY</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-md">
            The Pinnacle of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Himalayan Basmati & Imperial Black Rice
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            From the snowmelt waters of the Himalayas to the heirloom terraces of Manipur. We cultivate,
            age, and export the world's most aromatic grains to over 90+ countries worldwide.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center"
            >
              Explore Our Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact-us?type=Export"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/40 text-amber-300 font-bold text-sm tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center"
            >
              Request Bulk Export Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Corporate Metrics Ticker */}
      <CorporateTicker stats={stats} />

      {/* 3. Spotlighting Imperial Black Rice & Heritage */}
      <section className="py-24 bg-[#0a111e] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1000&q=80"
                  alt="Imperial Black Rice Heritage"
                  className="w-full h-[480px] object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-8">
                  <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
                    Heirloom GI Tag Grain
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    Manipur Chak-Hao Forbidden Grain
                  </h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Rich in natural anthocyanins (180mg/100g), with a roasted hazelnut finish and gluten-free vitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                <Award className="w-4 h-4" />
                <span>Superfood Innovation & Agricultural Purity</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Honoring 135 Years of Farmer Partnerships & Modern Agronomy
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Just as KRBL redefined Basmati rice globally with India Gate, Krish Agro brings
                together generational breeding with modern circular processing. We work directly with
                over 140,000 contracted farming families, providing non-GMO certified seeds, satellite crop health
                monitoring, and fair trade assured buybacks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                  <h5 className="font-semibold text-sm text-white">DNA Fingerprint Purity</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Every export batch is genetically verified for 100% Basmati & heirloom authenticity.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Leaf className="w-6 h-6 text-emerald-400 mb-2" />
                  <h5 className="font-semibold text-sm text-white">Zero Pesticide Residue</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Fully compliant with strict European Union (EU) & US FDA MRL safety tolerances.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about-us"
                  className="inline-flex items-center text-sm font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase group"
                >
                  Discover Our Complete Heritage Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase */}
      <section className="py-24 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-700 font-semibold text-xs tracking-widest uppercase block mb-2">
                Curated Selection
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Signature Product Portfolio
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="mt-4 md:mt-0 text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center uppercase tracking-wider group"
            >
              View All Product Ranges
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Farm-To-Fork & Milling Technology */}
      <section className="py-24 bg-[#080f1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase block mb-2">
              Engineering Grain Excellence
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              State-of-the-Art Processing Infrastructure
            </h2>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Operating world-class contact-less milling plants equipped with Swiss Bühler optical sorting,
              temperature-controlled silos, and automated packaging lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0e1728] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                24-Month Silo Maturation
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Aging under scientific humidity management crystallizes starch, reducing moisture to 12%
                for zero stickiness and exceptional elongation during cooking.
              </p>
            </div>

            <div className="bg-[#0e1728] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Optical Color Sorting
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                High-definition camera sorters inspect individual grains at 50,000 frames per second,
                ejecting imperfect kernels and foreign particulates.
              </p>
            </div>

            <div className="bg-[#0e1728] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Circular Zero-Waste Milling
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                100% of discarded paddy husk fuels our 145 MW captive clean power plant, while bran is
                physically refined into heart-healthy gamma oryzanol oil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Investor Relations Quick Banner */}
      <section className="py-16 bg-[#0f172a] border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#131d33] via-[#1a2846] to-[#131d33] rounded-2xl p-8 sm:p-12 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <FileText className="w-4 h-4" />
                <span>Investor Relations & Corporate Disclosures</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Integrated Annual Report FY 2025-26
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Explore our audited balance sheet, quarterly filings, corporate governance charters, and strategic ESG metrics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider text-center hover:bg-amber-400 transition-colors shadow-md"
              >
                Download Annual Report (PDF)
              </a>
              <Link
                to="/investor-relations"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider text-center hover:bg-slate-800 transition-colors"
              >
                Investor Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5. Frequently Asked Questions (FAQ) Section - Anchorable via #faq */}
      <section id="faq" className="py-24 bg-[#fafaf7] scroll-mt-20 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-1.5 text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Buyer & Importer Knowledge Hub</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Common questions regarding our heirloom Black Rice, 24-month silo aging, container export logistics, and private labeling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:border-amber-500/40 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
                  >
                    <span className="font-heading text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Global B2B Export Call to Action */}
      <section className="py-20 bg-amber-600 text-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Partner With India's Leading Grain Exporter
          </h2>
          <p className="mt-4 text-base sm:text-lg text-amber-950/90 font-medium max-w-2xl mx-auto">
            Looking for containerized shipments of Aged 1121 Basmati, Heirloom Black Rice, or customized private label packaging?
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact-us?type=Export"
              className="px-8 py-4 rounded-xl bg-slate-950 text-amber-300 font-bold text-sm tracking-wider uppercase hover:bg-slate-900 transition-all shadow-xl"
            >
              Submit Trade Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
