export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  banner_image_url?: string;
  display_order: number;
  is_active: boolean;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  tagline?: string;
  description?: string;
  grain_length_mm?: string;
  elongation_ratio?: string;
  aroma_profile?: string;
  aging_duration?: string;
  origin_region?: string;
  packaging_sizes?: string;
  is_featured: boolean;
  is_export_grade: boolean;
  is_organic: boolean;
  hero_image_url?: string;
  gallery_urls?: string[];
  nutritional_facts?: Record<string, any>;
  certifications?: string[];
  created_at: string;
  category?: Category;
}

export interface InvestorDoc {
  id: string;
  category_id: string;
  title: string;
  fiscal_year: string;
  quarter?: string;
  file_url: string;
  file_size_formatted?: string;
  published_date: string;
  created_at: string;
}

export interface InvestorCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  display_order: number;
  documents: InvestorDoc[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content_html: string;
  cover_image_url?: string;
  author?: string;
  is_published: boolean;
  published_at: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  description: string;
  requirements: string;
  is_active: boolean;
  created_at: string;
}

export interface Inquiry {
  id: string;
  inquiry_type: string;
  full_name: string;
  company_name?: string;
  email: string;
  phone: string;
  country: string;
  product_interest?: string;
  quantity_metric_tons?: string;
  message: string;
  status: string;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: string;
}

export interface CorporateStats {
  global_export_countries: number;
  milling_capacity_mt_per_hour: number;
  farmer_network_count: number;
  storage_capacity_mt: number;
  heritage_years: number;
  purity_guarantee_percent: number;
  green_energy_mw: number;
}
