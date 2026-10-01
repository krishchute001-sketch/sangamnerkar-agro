import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Award, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Image Container */}
        <div className="relative h-64 overflow-hidden bg-slate-900">
          <img
            src={product.hero_image_url || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.is_organic && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                🌱 100% Organic
              </span>
            )}
            {product.is_export_grade && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                ✈ Export Grade
              </span>
            )}
          </div>

          {product.category && (
            <div className="absolute bottom-3 left-3 text-xs text-amber-300 font-semibold tracking-wider uppercase drop-shadow-sm">
              {product.category.name}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {product.tagline && (
            <p className="text-xs font-medium text-amber-600 mt-1 line-clamp-1 italic">
              "{product.tagline}"
            </p>
          )}

          <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Grain Specifications Pill Grid */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-[11px]">
            {product.grain_length_mm && (
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Grain Length</span>
                <span className="font-semibold text-slate-800">{product.grain_length_mm}</span>
              </div>
            )}
            {product.aging_duration && (
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Maturation</span>
                <span className="font-semibold text-slate-800">{product.aging_duration}</span>
              </div>
            )}
            {product.aroma_profile && (
              <div className="col-span-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100/60">
                <span className="text-amber-800/70 block text-[9px] uppercase tracking-wider">Aroma Notes</span>
                <span className="font-semibold text-amber-900">{product.aroma_profile}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-50">
        <Link
          to={`/products/${product.slug}`}
          className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center group-hover:translate-x-1 transition-transform"
        >
          View Specifications
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
        <Link
          to={`/contact-us?product=${encodeURIComponent(product.name)}`}
          className="text-[11px] font-semibold bg-slate-900 text-amber-300 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-lg transition-colors shadow-sm"
        >
          Quote
        </Link>
      </div>
    </div>
  );
};
