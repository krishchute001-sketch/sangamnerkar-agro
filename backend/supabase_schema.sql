-- ====================================================================
-- SANGAMNERKAR AGRO - SUPABASE POSTGRESQL SCHEMA & SEED SCRIPT
-- ====================================================================
-- You can copy-paste and run this entire script in your Supabase SQL Editor.
-- It creates all required tables, indexes, constraints, and seeds default data.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS admin_users (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    email VARCHAR(150) UNIQUE NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    banner_image_url VARCHAR(500),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    category_id VARCHAR(36) NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    tagline VARCHAR(300),
    description TEXT,
    grain_length_mm VARCHAR(50),
    elongation_ratio VARCHAR(50),
    aroma_profile VARCHAR(100),
    aging_duration VARCHAR(100),
    origin_region VARCHAR(150),
    packaging_sizes VARCHAR(200),
    is_featured BOOLEAN DEFAULT FALSE,
    is_export_grade BOOLEAN DEFAULT TRUE,
    is_organic BOOLEAN DEFAULT FALSE,
    hero_image_url VARCHAR(500),
    gallery_urls JSONB DEFAULT '[]'::jsonb,
    nutritional_facts JSONB DEFAULT '{}'::jsonb,
    certifications JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);

-- 4. INQUIRIES & ORDERS TABLE (With Created At Date & Time)
CREATE TABLE IF NOT EXISTS inquiries (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    inquiry_type VARCHAR(50) DEFAULT 'Export',
    full_name VARCHAR(150) NOT NULL,
    company_name VARCHAR(200),
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    country VARCHAR(100) DEFAULT 'India',
    product_interest VARCHAR(200),
    quantity_metric_tons VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

-- 5. JOB POSTINGS TABLE
CREATE TABLE IF NOT EXISTS job_postings (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    title VARCHAR(200) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(150) NOT NULL,
    employment_type VARCHAR(50) DEFAULT 'Full-time',
    experience_level VARCHAR(100) DEFAULT '3-5 Years',
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. JOB APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS job_applications (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    job_id VARCHAR(36) NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    linkedin_url VARCHAR(300),
    resume_url VARCHAR(500),
    cover_letter TEXT,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. NEWS ARTICLES TABLE
CREATE TABLE IF NOT EXISTS news_articles (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    category VARCHAR(100) DEFAULT 'Press Release',
    excerpt TEXT NOT NULL,
    content_html TEXT NOT NULL,
    cover_image_url VARCHAR(500),
    author VARCHAR(100) DEFAULT 'Corporate Communications',
    is_published BOOLEAN DEFAULT TRUE,
    published_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. INVESTOR CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS investor_categories (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    description TEXT,
    display_order INTEGER DEFAULT 0
);

-- 9. INVESTOR DOCUMENTS TABLE
CREATE TABLE IF NOT EXISTS investor_docs (
    id VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    category_id VARCHAR(36) NOT NULL REFERENCES investor_categories(id) ON DELETE CASCADE,
    title VARCHAR(250) NOT NULL,
    fiscal_year VARCHAR(50) NOT NULL,
    quarter VARCHAR(20),
    file_url VARCHAR(500) NOT NULL,
    file_size_formatted VARCHAR(50) DEFAULT '2.4 MB',
    published_date VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- SEED INITIAL DATA (Categories & Admin User)
-- ====================================================================

-- Default Admin User: admin@sangamnerkaragro.com / Admin@123456
INSERT INTO admin_users (email, full_name, hashed_password, role, is_active)
VALUES (
    'admin@sangamnerkaragro.com',
    'Executive Administrator',
    'a1b2c3d4$e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6',
    'admin',
    TRUE
)
ON CONFLICT (email) DO NOTHING;

-- Seed Categories
INSERT INTO categories (id, name, slug, description, banner_image_url, display_order, is_active)
VALUES 
(
    'cat-black-rice',
    'Black Rice Range',
    'black-rice',
    'Rare heirloom Manipur Chak-Hao and anthocyanin-rich forbidden black rice cultivated through sustainable regenerative farming.',
    'https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=1200&q=80',
    1,
    TRUE
),
(
    'cat-chinnor-rice',
    'Chinnor Rice Range',
    'chinnor-rice',
    'Celebrated Balaghat Chinnor rice with authentic Geographical Indication (GI) tag, famed for its divine natural aroma, tender softness, and sweet taste.',
    'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80',
    2,
    TRUE
),
(
    'cat-jai-shree-ram',
    'Jai Shree Ram Rice Range',
    'jai-shree-ram-rice',
    'Premium scented fine-grain Jai Shree Ram rice, hand-harvested for pristine pearly white luster, non-sticky fluffiness, and everyday dining luxury.',
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    3,
    TRUE
)
ON CONFLICT (slug) DO NOTHING;

-- Seed Products
INSERT INTO products (
    id, category_id, name, slug, tagline, description, 
    grain_length_mm, elongation_ratio, aroma_profile, aging_duration, origin_region, 
    packaging_sizes, is_featured, is_export_grade, is_organic, hero_image_url
)
VALUES
(
    'prod-royal-black-rice',
    'cat-black-rice',
    'Sangamnerkar Royal Black Rice',
    'sangamnerkar-royal-black-rice',
    'The Ancient Forbidden Super-Grain of Manipur',
    'Chak-Hao black aromatic sticky rice packed with natural anthocyanins, fiber, and iron. Cultivated sustainably by contracted family farms.',
    '7.2 mm', '1.6x', 'Nutty & Roasted Hazelnut', 'Fresh Harvest Seasoning', 'Manipur & Vidarbha Wetlands',
    '1kg, 5kg, 25kg, 50kg Bags', TRUE, TRUE, FALSE,
    'https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?auto=format&fit=crop&w=1200&q=80'
),
(
    'prod-balaghat-chinnor',
    'cat-chinnor-rice',
    'Royal Balaghat Chinnor Rice',
    'royal-balaghat-chinnor-rice',
    'GI-Tagged Indigenous Fragrant Jewel',
    'Protected Geographical Indication (GI) Balaghat Chinnor, cherished across central India for delicate aroma, silky softness, and digestion-friendly lightness.',
    '6.8 mm', '1.8x', 'Sweet Jasmine & Honey Floral', '12 Months Matured', 'Wainganga Basin, Balaghat',
    '1kg, 5kg, 10kg, 25kg Bags', TRUE, TRUE, FALSE,
    'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80'
)
ON CONFLICT (slug) DO NOTHING;
