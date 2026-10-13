/**
 * Centralized Image Asset Configuration for Sangamnerkar Agro
 * 
 * Replace or customize any image URL here without modifying the page layouts.
 * All images are royalty-free, warm-toned, and optimized with descriptive alt text.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const IMAGES = {
  // 1. Hero Section Banner
  heroBanner: {
    src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Premium indigenous heirloom rice grains arranged in traditional wooden bowls with warm earthy lighting',
    width: 2000,
    height: 1200,
  },

  // 2. Products
  blackRiceProduct: {
    src: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Sangamnerkar Royal Manipur Chak-Hao Heirloom Black Rice grains with deep anthocyanin purple-black luster',
    width: 1200,
    height: 900,
  },
  chinnorRiceProduct: {
    src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Traditional Balaghat Chinnor fragrant slender white rice grains in natural ceramic bowl',
    width: 1200,
    height: 900,
  },

  // 3. Sourcing & Process (Our Story Blocks)
  sourcingFarm: {
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=85',
    alt: 'Verdant heirloom rice paddy terraces during golden hour reflecting sustainable traditional agriculture',
    width: 1400,
    height: 950,
  },
  processingMilling: {
    src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Careful small-batch grain sorting and slow milling maintaining the natural bran layer and nutrition',
    width: 1400,
    height: 950,
  },
  packingDispatch: {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Hygienic food-grade moisture-barrier packaging ready for wholesale delivery and doorstep despatch in Nagpur',
    width: 1400,
    height: 950,
  },

  // 4. Quality & Proof Lightbox Thumbnails
  certFssaiThumbnail: {
    src: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80',
    alt: 'Official FSSAI Food Safety Hygiene Compliance Certificate placeholder document',
    width: 900,
    height: 1200,
  },
  certGiProofThumbnail: {
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    alt: 'Geographical Indication GI Registration provenance documentation placeholder for Balaghat Chinnor Rice',
    width: 900,
    height: 1200,
  },
  certLabReportThumbnail: {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    alt: 'Comprehensive NABL Accredited Laboratory Purity and Moisture Analysis Report placeholder',
    width: 900,
    height: 1200,
  },

  // 5. OpenGraph & Social Sharing
  ogImage: {
    src: '/images/og-image.jpg',
    alt: 'Sangamnerkar Agro Heritage Black Rice and Balaghat Chinnor Rice Nagpur',
    width: 1200,
    height: 630,
  },
} as const;

export default IMAGES;
