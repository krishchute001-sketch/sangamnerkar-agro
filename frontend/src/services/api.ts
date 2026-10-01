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

// Fallback Mock Data in case backend is offline
const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Imperial Black Rice & Superfoods',
    slug: 'imperial-black-rice',
    description: 'Rare heirloom Manipur Chak-Hao and anthocyanin-rich forbidden black rice.',
    banner_image_url: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1200&q=80',
    display_order: 1,
    is_active: true,
  },
  {
    id: 'cat-2',
    name: 'Royal Basmati Range',
    slug: 'royal-basmati-range',
    description: 'The pinnacle of Himalayan long-grain heritage, naturally aged to perfection.',
    banner_image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    display_order: 2,
    is_active: true,
  },
  {
    id: 'cat-3',
    name: 'Regional Heritage Grains',
    slug: 'regional-heritage-grains',
    description: 'India celebrated micro-terroir cultivars including aromatic Gobindobhog and Sona Masoori.',
    banner_image_url: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80',
    display_order: 3,
    is_active: true,
  },
  {
    id: 'cat-4',
    name: 'Uplife Health & Wellness',
    slug: 'uplife-health-range',
    description: 'Low-GI diabetic-friendly rice, sprouted brown grains, and nutrient-dense seeds.',
    banner_image_url: 'https://images.unsplash.com/photo-1505253758473-96b46deae2cd?auto=format&fit=crop&w=1200&q=80',
    display_order: 4,
    is_active: true,
  },
  {
    id: 'cat-5',
    name: 'Value-Added Agro By-Products',
    slug: 'agro-by-products',
    description: 'Zero-waste circular economy: Physico-refined Rice Bran Oil high in Oryzanol & Furfural.',
    banner_image_url: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
    display_order: 5,
    is_active: true,
  },
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    category_id: 'cat-1',
    name: 'Krish Heritage Royal Black Rice (Chak-Hao)',
    slug: 'krish-heritage-black-rice-chak-hao',
    tagline: "The Emperor's Forbidden Grain - 3x Anthocyanin Antioxidants & Deep Nutty Aroma",
    description: 'Cultivated in pristine Northeast India valleys and certified chemical-free. Known worldwide for its lustrous deep midnight color, high antioxidant density (surpassing wild blueberries), and roasted nutty taste profile.',
    grain_length_mm: '7.10 mm',
    elongation_ratio: '1.8x',
    aroma_profile: 'Roasted Hazelnut & Warm Bran Aroma',
    aging_duration: 'Naturally cured 6 months',
    origin_region: 'Manipur & Assam Valleys, India',
    packaging_sizes: '500g, 1kg Pouch, 5kg Cloth Bag, 25kg Bulk',
    is_featured: true,
    is_export_grade: true,
    is_organic: true,
    hero_image_url: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80',
    gallery_urls: ['https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80'],
    nutritional_facts: { serving_size: '100g', calories: 356, protein: '8.9g', anthocyanins: '180mg', fiber: '4.8g' },
    certifications: ['USDA Organic', 'India Organic', 'BRCGS Grade AA', 'Halal', 'ISO 22000'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[0],
  },
  {
    id: 'p-2',
    category_id: 'cat-2',
    name: 'Imperial Reserve 1121 XXL Basmati',
    slug: 'imperial-reserve-1121-basmati',
    tagline: "World's Longest Grain - Aged 24 Months in Silos",
    description: 'Matured for 2 years in climate-monitored concrete silos. Expands up to 24mm upon cooking with zero curl and mesmerizing regal floral aroma.',
    grain_length_mm: '8.45 mm Raw / 24.2 mm Cooked',
    elongation_ratio: '2.8x',
    aroma_profile: 'Authentic 2-AP Basmati Aroma',
    aging_duration: '24 Months in Concrete Silos',
    origin_region: 'Punjab & Haryana Basmati Terroir',
    packaging_sizes: '1kg, 5kg Zipper, 10kg Tin, 40kg Export Container',
    is_featured: true,
    is_export_grade: true,
    is_organic: false,
    hero_image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    gallery_urls: ['https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'],
    nutritional_facts: { serving_size: '100g', calories: 349, protein: '8.2g', fiber: '1.2g' },
    certifications: ['US FDA Registered', 'BRCGS Grade AA', 'Kosher', 'Halal'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'p-3',
    category_id: 'cat-2',
    name: 'Classic Smoked Biryani Basmati Special',
    slug: 'classic-smoked-biryani-basmati',
    tagline: 'Engineered for Dum Biryani Excellence with Intact Firmness',
    description: 'Specially aged for long culinary steaming. Retains distinct elongated grain structure without snapping or releasing stickiness.',
    grain_length_mm: '8.20 mm',
    elongation_ratio: '2.6x',
    aroma_profile: 'Sweet Nutty Basmati',
    aging_duration: '18 Months Aged',
    origin_region: 'Haryana Terroir',
    packaging_sizes: '5kg, 10kg, 25kg Non-Woven',
    is_featured: true,
    is_export_grade: true,
    is_organic: false,
    hero_image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    gallery_urls: [],
    nutritional_facts: { serving_size: '100g', calories: 350, protein: '8.0g' },
    certifications: ['ISO 9001', 'HACCP', 'Halal'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[1],
  },
  {
    id: 'p-4',
    category_id: 'cat-5',
    name: 'Pure Gold Physically Refined Rice Bran Oil',
    slug: 'pure-gold-rice-bran-oil',
    tagline: '10,000+ PPM Natural Oryzanol for Heart Health & High Smoke Point 232°C',
    description: 'Extracted purely from outer bran layers without harsh chemical solvents. High smoke point ideal for frying and gourmet culinary dressings.',
    grain_length_mm: 'N/A (Liquid Oil)',
    elongation_ratio: 'N/A',
    aroma_profile: 'Clean Neutral',
    aging_duration: 'Freshly Processed',
    origin_region: 'Punjab Agro Complex',
    packaging_sizes: '1L Bottle, 5L Can, 15L Tin, Flexitank',
    is_featured: true,
    is_export_grade: true,
    is_organic: false,
    hero_image_url: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80',
    gallery_urls: [],
    nutritional_facts: { serving_size: '15ml', oryzanol: '150mg', vitamin_e: 'High' },
    certifications: ['AGMARK Grade 1', 'US FDA', 'ISO 22000'],
    created_at: new Date().toISOString(),
    category: MOCK_CATEGORIES[4],
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
        title: 'Integrated Annual Report FY 2025-26: Sustaining Global Leadership',
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
        heritage_years: 135,
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
          title: 'Krish Agro Expands Organic Black Rice Export Footprint to 18 New European & Gulf Markets',
          slug: 'krish-agro-expands-black-rice-europe-gulf-export',
          category: 'Press Release',
          excerpt: 'Shipments of certified Chak-Hao black rice scaled past 12,000 metric tons this fiscal year with high demand across UK, EU, and GCC.',
          content_html: '<p>Direct partnerships with 8,500 smallholder farmers in Manipur and Assam deliver premium guaranteed buyback rates.</p>',
          cover_image_url: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80',
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
          title: 'Global Export Sales Director (Middle East & Europe)',
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
    } catch (e) {
      // Return simulated success if backend is offline
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
