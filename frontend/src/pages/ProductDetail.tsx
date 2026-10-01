import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Product } from '../types';
import { ArrowLeft, CheckCircle2, Shield, Sparkles, Send, Box, Award } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;
      try {
        const data = await api.getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error('Failed to load product details', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafaf7]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Loading grain specifications...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafaf7]">
        <div className="text-center max-w-md p-8">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Grain Variant Not Found</h2>
          <p className="text-xs text-slate-500 mb-6">The requested product profile does not exist or has been archived.</p>
          <Link
            to="/portfolio"
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-amber-300 font-semibold text-xs inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fafaf7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back */}
        <Link
          to="/portfolio"
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Portfolio
        </Link>

        {/* Product Profile Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          {/* Hero Image */}
          <div className="space-y-4">
            <div className="h-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-100 shadow-inner relative">
              <img
                src={product.hero_image_url || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80'}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.is_organic && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-lg">
                    🌱 100% Certified Organic
                  </span>
                )}
                {product.is_export_grade && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-lg">
                    ✈ International Export Grade
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col justify-between">
            <div>
              {product.category && (
                <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
                  {product.category.name}
                </span>
              )}

              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>

              {product.tagline && (
                <p className="text-sm font-medium text-amber-800 mt-2 italic">
                  "{product.tagline}"
                </p>
              )}

              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Grain Technical Matrix */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4 flex items-center">
                  <Award className="w-4 h-4 text-amber-600 mr-2" />
                  Grain Agronomy & Cooking Matrix
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {product.grain_length_mm && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Grain Length</span>
                      <span className="font-bold text-slate-800 text-sm">{product.grain_length_mm}</span>
                    </div>
                  )}

                  {product.elongation_ratio && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Elongation Ratio</span>
                      <span className="font-bold text-slate-800 text-sm">{product.elongation_ratio}</span>
                    </div>
                  )}

                  {product.aging_duration && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Silo Maturation</span>
                      <span className="font-bold text-slate-800 text-sm">{product.aging_duration}</span>
                    </div>
                  )}

                  {product.origin_region && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Origin Terroir</span>
                      <span className="font-bold text-slate-800 text-sm">{product.origin_region}</span>
                    </div>
                  )}
                </div>

                {product.aroma_profile && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-100 text-xs">
                    <span className="text-amber-800/80 block text-[10px] uppercase font-semibold">Aroma & Sensory Profile</span>
                    <span className="font-bold text-amber-950 text-sm">{product.aroma_profile}</span>
                  </div>
                )}
              </div>

              {/* Packaging Variants */}
              {product.packaging_sizes && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                    Available Export & Retail Packaging
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging_sizes.split(',').map((size, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
                      >
                        📦 {size.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <Link
                to={`/contact-us?product=${encodeURIComponent(product.name)}&type=Export`}
                className="flex-1 py-4 px-6 rounded-xl bg-slate-950 text-amber-300 hover:bg-slate-900 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Request Commercial Export Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
