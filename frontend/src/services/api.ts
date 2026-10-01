import axios from 'axios';
import {
  Category,
  Product,
  InvestorCategory,
  InvestorDoc,
  NewsArticle,
  JobPosting,
  Inquiry,
  CorporateStats,
  AdminUser,
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('krbl_admin_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fallback Mock Data focusing on Black Rice, Chinnor Rice, and Jai Shree Ram Rice
const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Black Rice Range',
    slug: 'black-rice',
    description: 'Rare heirloom Manipur Chak-Hao and anthocyanin-rich forbidden black rice cultivated through sustainable regenerative farming.',
    banner_image_url: 'https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=1200&q=80',
    display_order: 1,
    is_active: true,
  },
  {
    id: 'cat-2',
    name: 'Chinnor Rice Range',
    slug: 'chinnor-rice',
    description: 'Celebrated Balaghat Chinnor rice with authentic Geographical Indication (GI) tag, famed for its divine natural aroma, tender softness, and sweet taste.',
    banner_image_url: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80',
    display_order: 2,
    is_active: true,
  },
  {
    id: 'cat-3',
    name: 'Jai Shree Ram Rice Range',
    slug: 'jai-shree-ram-rice',
    description: 'Premium scented fine-grain Jai Shree Ram rice, hand-harvested for pristine pearly white luster, non-sticky fluffiness, and everyday dining luxury.',
    banner_image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    display_order: 3,
    is_active: true,
  },
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    category_id: 'cat-1',
    name: 'Sangamnerkar Royal Black Rice (Chak-Hao)',
    slug: 'sangamnerkar-royal-black-rice-chak-hao',
    tagline: "The Emperor's Forbidden Grain - 3x Anthocyanin Antioxidants & Deep Nutty Aroma",
    description: 'Cultivated in the pristine valleys of Northeast India and certified pesticide-free, our Imperial Black Rice (Chak-Hao) is revered worldwide for its lustrous midnight hue, rich antioxidant profile (higher than blueberries), and distinct roasted hazelnut finish.',
    grain_length_mm: '7.10 mm',
    elongation_ratio: '1.8x',
    aroma_profile: 'Roasted Hazelnut & Warm Bran Aroma',
    aging_duration: 'Naturally cured 6 months',
    origin_region: 'Manipur & Assam Valleys, India',
    packaging_sizes: '500g, 1kg Standup Pouch, 5kg Cloth Bag, 25kg Poly-woven Bulk',
    is_featured: true,
    is_export_grade: true,
    is_organic: true,
    hero_image_url: 'https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=800&q=80',
    gallery_urls: ['https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=800&q=80'],
    nutritional_facts: { serving_size: '100g', calories: 356, protein: '8.9g', anthocyanins: '180mg', fiber: '4.8g', iron: '3.5mg' },
    certifications: ['USDA Organic', 'India Organic', 'BRC Global Standards', 'ISO 22000', 'Halal'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[0],
  },
  {
    id: 'p-2',
    category_id: 'cat-2',
    name: 'Royal Balaghat Chinnor Rice (GI Tagged)',
    slug: 'royal-balaghat-chinnor-rice',
    tagline: 'The Queen of Fragrant Indigenous Grains - Certified GI Tagged Heritage',
    description: 'Cultivated in the mineral-rich soils of Balaghat (Madhya Pradesh) and officially awarded the Geographical Indication (GI) tag. Renowned for its captivating natural floral perfume, sweet delicate taste, and ultra-soft, tender texture.',
    grain_length_mm: '6.85 mm',
    elongation_ratio: '2.1x',
    aroma_profile: 'Divine Sweet Floral Chinnor Aroma',
    aging_duration: '12 Months Natural Maturation',
    origin_region: 'Balaghat Terroir, Madhya Pradesh, India',
    packaging_sizes: '1kg, 5kg Zipper Pouch, 10kg Tin, 25kg Non-Woven Bag',
    is_featured: true,
    is_export_grade: true,
    is_organic: true,
    hero_image_url: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    gallery_urls: ['https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80'],
    nutritional_facts: { serving_size: '100g', calories: 348, protein: '7.9g', fiber: '1.4g', carbs: '77g' },
    certifications: ['GI Tag Certified (GI-696)', 'BRCGS Grade AA', 'FSSC 22000', 'Halal'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'p-3',
    category_id: 'cat-3',
    name: 'Jai Shree Ram Premium Rice',
    slug: 'jai-shree-ram-premium-rice',
    tagline: 'Pristine Fine Grain Daily Luxury - Silky Texture & Gentle Fragrance',
    description: 'Hand-selected from heritage fertile tracts, Jai Shree Ram rice is an exquisite fine grain renowned for its silky slender texture, pristine pearly white color, and gentle natural scent. Non-sticky and easily digestible, it elevates daily gourmet dining, biryanis, and aromatic spiced rice preparations.',
    grain_length_mm: '7.20 mm',
    elongation_ratio: '2.0x',
    aroma_profile: 'Subtle Warm Scented Aroma',
    aging_duration: '12 Months Aged in Climate-Controlled Silos',
    origin_region: 'Central Agro Plains, India',
    packaging_sizes: '1kg, 5kg, 10kg, 25kg Non-Woven & Poly-woven Bulk',
    is_featured: true,
    is_export_grade: true,
    is_organic: false,
    hero_image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    gallery_urls: [],
    nutritional_facts: { serving_size: '100g', calories: 350, protein: '8.1g', fiber: '1.1g' },
    certifications: ['ISO 9001', 'HACCP', 'Halal', 'US FDA Registered'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[2],
  },
];

const MOCK_INVESTOR_DOCS: InvestorCategory[] = [
  {
    id: 'inv-1',
    name: 'Financial Results & Annual Reports',
    slug: 'financial-results',
    description: 'Audited annual statements, balance sheets, and quarterly investor presentations.',
    display_order: 1,
    documents: [
      {
        id: 'doc-1',
        category_id: 'inv-1',
        title: 'Integrated Annual Report FY 2025-26: Sustaining Leadership in Specialty & Black Rice',
        fiscal_year: 'FY 2025-26',
        quarter: 'Annual',
        file_url: 'https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf',
        file_size_formatted: '14.8 MB',
        published_date: 'August 2026',
        created_at: new Date().toISOString(),
      },
      {
        id: 'doc-2',
        category_id: 'inv-1',
        title: 'Q1 FY 2025-26 Unaudited Financial Results & Earnings Deck',
        fiscal_year: 'FY 2025-26',
        quarter: 'Q1',
        file_url: 'https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf',
        file_size_formatted: '3.2 MB',
        published_date: 'July 2026',
        created_at: new Date().toISOString(),
      },
    ],
  },
  {
    id: 'inv-2',
    name: 'Corporate Governance & Policies',
    slug: 'corporate-governance',
    description: 'Board charters, code of ethics, and statutory disclosures.',
    display_order: 2,
    documents: [
      {
        id: 'doc-3',
        category_id: 'inv-2',
        title: 'Code of Business Conduct and Ethics for Board of Directors',
        fiscal_year: 'Perpetual',
        quarter: 'Policy',
        file_url: 'https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf',
        file_size_formatted: '1.1 MB',
        published_date: 'Revised 2026',
        created_at: new Date().toISOString(),
      },
    ],
  },
];

export const api = {
  // Stats
  getCorporateStats: async (): Promise<CorporateStats> => {
    try {
      const res = await apiClient.get('/stats/corporate');
      return res.data;
    } catch {
      return {
        global_export_countries: 90,
        milling_capacity_mt_per_hour: 195,
        farmer_network_count: 140000,
        storage_capacity_mt: 1000000,
        heritage_years: 6,
        purity_guarantee_percent: 100,
        green_energy_mw: 145,
      };
    }
  },

  // Categories
  getCategories: async (): Promise<Category[]> => {
    try {
      const res = await apiClient.get('/categories');
      return res.data.length ? res.data : MOCK_CATEGORIES;
    } catch {
      return MOCK_CATEGORIES;
    }
  },

  // Products
  getProducts: async (params?: { category_slug?: string; search?: string; is_featured?: boolean }): Promise<Product[]> => {
    try {
      const res = await apiClient.get('/products', { params });
      return res.data.length ? res.data : MOCK_PRODUCTS;
    } catch {
      let filtered = [...MOCK_PRODUCTS];
      if (params?.category_slug) {
        filtered = filtered.filter((p) => p.category?.slug === params.category_slug);
      }
      if (params?.search) {
        const s = params.search.toLowerCase();
        filtered = filtered.filter((p) => p.name.toLowerCase().includes(s) || p.description?.toLowerCase().includes(s));
      }
      if (params?.is_featured !== undefined) {
        filtered = filtered.filter((p) => p.is_featured === params.is_featured);
      }
      return filtered;
    }
  },

  getProductBySlug: async (slug: string): Promise<Product | null> => {
    try {
      const res = await apiClient.get(`/products/${slug}`);
      return res.data;
    } catch {
      return MOCK_PRODUCTS.find((p) => p.slug === slug) || null;
    }
  },

  // Investor Relations
  getInvestorCategories: async (): Promise<InvestorCategory[]> => {
    try {
      const res = await apiClient.get('/investors/categories');
      return res.data.length ? res.data : MOCK_INVESTOR_DOCS;
    } catch {
      return MOCK_INVESTOR_DOCS;
    }
  },

  // News
  getNews: async (): Promise<NewsArticle[]> => {
    try {
      const res = await apiClient.get('/news');
      return res.data;
    } catch {
      return [
        {
          id: 'news-1',
          title: 'Sangamnerkar Agro Expands Organic Black Rice & GI Chinnor Export Footprint to 18 New European & Gulf Markets',
          slug: 'sangamnerkar-agro-expands-black-rice-chinnor-europe-gulf-export',
          category: 'Press Release',
          excerpt: 'Shipments of certified Chak-Hao black rice and aromatic Balaghat Chinnor scaled past 15,000 metric tons this fiscal year.',
          content_html: '<p>Direct partnerships with smallholder farmers deliver guaranteed buyback rates for indigenous specialty grains.</p>',
          cover_image_url: 'https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=800&q=80',
          author: 'Corporate Communications',
          is_published: true,
          published_at: new Date().toISOString(),
        },
      ];
    }
  },

  // Careers
  getJobs: async (): Promise<JobPosting[]> => {
    try {
      const res = await apiClient.get('/careers/jobs');
      return res.data;
    } catch {
      return [
        {
          id: 'j-1',
          title: 'Global Export Sales Director (Black Rice, Chinnor & Specialty Grains)',
          department: 'International Business',
          location: 'New Delhi HQ / Dubai Hub',
          employment_type: 'Full-time',
          experience_level: '8-12 Years',
          description: 'Lead multi-million-dollar bulk rice import contracts, distributor appointment, and containerized logistics across UAE, Saudi Arabia, and Europe.',
          requirements: 'Demonstrated track record in FMCG / agro-commodity international exports, fluent in trade finance.',
          is_active: true,
          created_at: new Date().toISOString(),
        },
      ];
    }
  },

  applyForJob: async (data: any) => {
    return apiClient.post('/careers/apply', data);
  },

  // Inquiries
  submitInquiry: async (data: Partial<Inquiry>): Promise<Inquiry> => {
    try {
      const res = await apiClient.post('/inquiries', data);
      return res.data;
    } catch {
      return {
        id: 'inq-offline-' + Date.now(),
        inquiry_type: data.inquiry_type || 'Export',
        full_name: data.full_name || '',
        company_name: data.company_name,
        email: data.email || '',
        phone: data.phone || '',
        country: data.country || 'India',
        product_interest: data.product_interest,
        quantity_metric_tons: data.quantity_metric_tons,
        message: data.message || '',
        status: 'Pending',
        created_at: new Date().toISOString(),
      };
    }
  },

  // Admin CMS
  adminLogin: async (credentials: { email: string; password: string }) => {
    const res = await apiClient.post('/auth/login-json', credentials);
    return res.data;
  },

  getAdminMe: async (): Promise<AdminUser> => {
    const res = await apiClient.get('/auth/me');
    return res.data;
  },

  getAdminInquiries: async (): Promise<Inquiry[]> => {
    const res = await apiClient.get('/inquiries');
    return res.data;
  },

  updateInquiryStatus: async (id: string, status: string): Promise<Inquiry> => {
    const res = await apiClient.patch(`/inquiries/${id}/status`, { status });
    return res.data;
  },

  createProduct: async (productData: any): Promise<Product> => {
    const res = await apiClient.post('/products', productData);
    return res.data;
  },

  deleteProduct: async (id: string) => {
    const res = await apiClient.delete(`/products/${id}`);
    return res.data;
  },
};
