import React, { useState } from 'react';
import { Sparkles, X, MessageCircle, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { theme } from '../theme';
import { Button } from '../components/ui/Button';

interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'black-rice' | 'chinnor-rice' | 'jai-shree-ram' | 'culinary';
  categoryLabel: string;
  imageSrc: string;
  description: string;
  aspectRatio?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Cooked Heirloom Black Rice',
    category: 'black-rice',
    categoryLabel: 'Black Rice',
    imageSrc: '/images/cooked-black-rice.jpg',
    description: 'Freshly prepared heirloom Manipur Chak-Hao black rice in a rustic ceramic bowl, rich in dark purple anthocyanins with a distinct nutty fragrance.',
  },
  {
    id: 'g-2',
    title: 'Raw Heirloom Black Rice Grains',
    category: 'black-rice',
    categoryLabel: 'Black Rice',
    imageSrc: '/images/hero-1.jpg',
    description: 'Unpolished whole grains of certified Chak-Hao black rice with intact bran layers, delivering 3x higher antioxidants than blueberries.',
  },
  {
    id: 'g-3',
    title: 'Balaghat Chinnor Fragrant Kernels',
    category: 'chinnor-rice',
    categoryLabel: 'Balaghat Chinnor',
    imageSrc: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1000&q=80',
    description: 'Authentic Geographical Indication (GI-696) tagged Chinnor rice from the mineral-rich soils of Balaghat, renowned for its sweet floral perfume.',
  },
  {
    id: 'g-4',
    title: 'Jai Shree Ram Slender White Grains',
    category: 'jai-shree-ram',
    categoryLabel: 'Jai Shree Ram',
    imageSrc: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80',
    description: 'Hand-selected fine grains celebrated for silky texture, delicate fragrance, and effortless daily digestibility in Indian households.',
  },
  {
    id: 'g-5',
    title: 'Nagpur Hotel Gourmet Plating',
    category: 'culinary',
    categoryLabel: 'Hotel & Culinary',
    imageSrc: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80',
    description: 'Signature rice preparations curated by executive chefs at premier luxury hotels in Nagpur, showcasing non-sticky fluffiness and aroma.',
  },
  {
    id: 'g-6',
    title: 'Professional Hospitality Kitchens',
    category: 'culinary',
    categoryLabel: 'Hotel & Culinary',
    imageSrc: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80',
    description: 'Dependable wholesale supply delivered regularly to Nagpur fine-dining restaurants, banquets, and premier catering groups for 6+ years.',
  },
  {
    id: 'g-7',
    title: 'Wholesome Family Table Dining',
    category: 'culinary',
    categoryLabel: 'Hotel & Culinary',
    imageSrc: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    description: 'Nutritious, antioxidant-packed meals bringing farm purity straight from our fields to dining tables across Nagpur and beyond.',
  },
  {
    id: 'g-8',
    title: 'Lush Paddy Terroirs at Sunrise',
    category: 'culinary',
    categoryLabel: 'Hotel & Culinary',
    imageSrc: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    description: 'Sustainable heritage cultivation honoring regenerative agronomy, pristine river basin soils, and fair smallholder farmer buybacks.',
  },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FBF6EE] min-h-screen py-12 sm:py-20 text-[#2C221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EC] border border-[#2F6B3A]/20 text-[#2F6B3A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            <span>Sangamnerkar Agro Visual Showcase</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5A2A27] tracking-tight leading-tight">
            Our Visual Gallery
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#665952] leading-relaxed">
            Explore authentic photography of our raw grains, freshly cooked heirloom bowls, and the culinary confidence trusted by Nagpur's premier hotels.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'black-rice', label: 'Black Rice (Chak-Hao)' },
            { id: 'chinnor-rice', label: 'Balaghat Chinnor Rice' },
            { id: 'jai-shree-ram', label: 'Jai Shree Ram Rice' },
            { id: 'culinary', label: 'Hotel & Culinary Plating' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#5A2A27] text-[#FBF6EE] shadow-md scale-102'
                  : 'bg-white text-[#5A2A27] border border-[#E8DEC8] hover:bg-[#F5ECE0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#E8DEC8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5ECE0]">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#5A2A27]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-[#5A2A27] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5A2A27]/85 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Card Caption */}
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-[#5A2A27] leading-snug group-hover:text-[#2F6B3A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#665952] mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200"
          >
            <div
              className="relative bg-[#FBF6EE] border-2 border-[#E8DEC8] rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#5A2A27] shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative w-full max-h-[55vh] bg-[#F5ECE0] overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[55vh]"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-[#EAF3EC] text-[#2F6B3A] text-xs font-semibold uppercase tracking-wider">
                    {selectedImage.categoryLabel}
                  </span>
                  <span className="text-xs text-[#9A8E87]">• Authentic Photography</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#5A2A27]">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-[#665952] leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-[#2F6B3A] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6B3A]" />
                    <span>Nagpur Hotel Regular Supplier • 6+ Years</span>
                  </div>

                  <Button
                    href={theme.contact.whatsappUrl}
                    external
                    variant="whatsapp"
                    size="md"
                    leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
                  >
                    Inquire via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 sm:mt-24 rounded-[32px] bg-[#F5ECE0] border border-[#E8DEC8] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs uppercase font-bold text-[#2F6B3A] tracking-wider block mb-2">
            Experience the Purity
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#5A2A27]">
            Looking for Bulk Samples or Direct Household Orders?
          </h2>
          <p className="mt-3 text-sm text-[#665952] max-w-xl mx-auto leading-relaxed">
            Order directly via WhatsApp or connect with our family team for luxury hotel supply across Nagpur and central India.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={theme.contact.whatsappUrl}
              external
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
            >
              Order on WhatsApp
            </Button>
            <Button
              to="/contact-us"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Contact Our Team
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
