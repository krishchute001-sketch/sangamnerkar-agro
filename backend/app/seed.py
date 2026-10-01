import asyncio
from sqlalchemy import select
from app.core.database import AsyncSessionLocal, Base, engine
from app.core.security import get_password_hash
from app.models.user import AdminUser
from app.models.category import Category
from app.models.product import Product
from app.models.investor import InvestorCategory, InvestorDoc
from app.models.news import NewsArticle
from app.models.career import JobPosting
from app.models.inquiry import Inquiry

async def seed_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as db:
        admin_check = await db.execute(select(AdminUser).where(AdminUser.email == "admin@krblrice.com"))
        if admin_check.scalar_one_or_none():
            return

        admin = AdminUser(
            email="admin@krblrice.com",
            full_name="Executive Administrator",
            hashed_password=get_password_hash("Admin@123456"),
            role="admin",
            is_active=True,
        )
        db.add(admin)

        cat_basmati = Category(
            name="Royal Basmati Range",
            slug="royal-basmati-range",
            description="The pinnacle of Himalayan long-grain heritage, naturally aged to perfection for exquisite aroma and non-sticky elongation.",
            banner_image_url="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
            display_order=1,
        )
        cat_black = Category(
            name="Imperial Black Rice & Superfoods",
            slug="imperial-black-rice",
            description="Rare heirloom Manipur Chak-Hao and organic anthocyanin-rich forbidden black rice cultivated through sustainable regenerative farming.",
            banner_image_url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1200&q=80",
            display_order=2,
        )
        cat_regional = Category(
            name="Regional Heritage Grains",
            slug="regional-heritage-grains",
            description="India celebrated micro-terroir cultivars including aromatic Gobindobhog, tender Sona Masoori, and pristine Wada Kolam.",
            banner_image_url="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80",
            display_order=3,
        )
        cat_health = Category(
            name="Uplife Health & Wellness",
            slug="uplife-health-range",
            description="Functional whole grains, low-GI diabetic-friendly rice, sprouted brown grains, and nutrient-dense seeds.",
            banner_image_url="https://images.unsplash.com/photo-1505253758473-96b46deae2cd?auto=format&fit=crop&w=1200&q=80",
            display_order=4,
        )
        cat_byproducts = Category(
            name="Value-Added Agro By-Products",
            slug="agro-by-products",
            description="Zero-waste circular economy innovations: Physico-refined Rice Bran Oil high in Oryzanol, Furfural, and green biomass pellets.",
            banner_image_url="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
            display_order=5,
        )
        db.add_all([cat_basmati, cat_black, cat_regional, cat_health, cat_byproducts])
        await db.flush()

        p1 = Product(
            category_id=cat_black.id,
            name="Krish Heritage Royal Black Rice (Chak-Hao)",
            slug="krish-heritage-black-rice-chak-hao",
            tagline="The Emperors Forbidden Grain - 3x Anthocyanin Antioxidants & Deep Nutty Aroma",
            description="Cultivated in the pristine valleys of Northeast India and certified pesticide-free, our Imperial Black Rice (Chak-Hao) is revered worldwide for its lustrous midnight hue, rich antioxidant profile (higher than blueberries), and distinct roasted hazelnut finish. Ideal for gourmet pilafs, risotto, health bowls, and heritage desserts.",
            grain_length_mm="7.10 mm",
            elongation_ratio="1.8x",
            aroma_profile="Roasted Hazelnut & Warm Bran Aroma",
            aging_duration="Naturally cured 6 months",
            origin_region="Manipur & Assam Valleys, India",
            packaging_sizes="500g, 1kg Standup Pouch, 5kg Cloth Bag, 25kg Poly-woven Bulk",
            is_featured=True,
            is_export_grade=True,
            is_organic=True,
            hero_image_url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[
                "https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1505253758473-96b46deae2cd?auto=format&fit=crop&w=800&q=80",
            ],
            nutritional_facts={
                "serving_size": "100g",
                "calories": 356,
                "protein": "8.9g",
                "anthocyanins": "180mg",
                "fiber": "4.8g",
                "iron": "3.5mg",
            },
            certifications=["USDA Organic", "India Organic", "BRC Global Standards", "ISO 22000", "Halal"],
        )

        p2 = Product(
            category_id=cat_basmati.id,
            name="Imperial Reserve 1121 XXL Basmati",
            slug="imperial-reserve-1121-basmati",
            tagline="Worlds Longest Grain - Aged 24 Months in Climate-Controlled Silos",
            description="Hand-selected from the fertile Himalayan snowmelt plains of Punjab and Haryana. Each grain matures under rigorously controlled temperature and humidity for a minimum of two years, allowing the starch molecules to crystallize. Expands to over 24mm upon cooking with zero breakage and unmatched regal floral fragrance.",
            grain_length_mm="8.45 mm Raw / 24.2 mm Cooked",
            elongation_ratio="2.8x",
            aroma_profile="Authentic 2-AP Natural Basmati Floral Aroma",
            aging_duration="24 Months Aged in Concrete Silos",
            origin_region="Indo-Gangetic Basmati Belt, Punjab",
            packaging_sizes="1kg, 5kg Zipper Pouch, 10kg Tin, 20kg Jute Bag, 40kg Export Container",
            is_featured=True,
            is_export_grade=True,
            is_organic=False,
            hero_image_url="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[
                "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
            ],
            nutritional_facts={
                "serving_size": "100g",
                "calories": 349,
                "protein": "8.2g",
                "fiber": "1.2g",
                "carbs": "78g",
            },
            certifications=["US FDA Registered", "BRCGS Grade AA", "FSSC 22000", "Kosher", "Halal"],
        )

        p3 = Product(
            category_id=cat_basmati.id,
            name="Classic Smoked Biryani Basmati Special",
            slug="classic-smoked-biryani-basmati",
            tagline="Fluffy, Non-Sticky Grains Engineered for Dum Biryani Excellence",
            description="Designed specifically for master chefs and institutional gastronomy. The firm grain integrity resists prolonged dum steaming without curling or clumping, retaining gravy juices and rich saffron aromas.",
            grain_length_mm="8.20 mm",
            elongation_ratio="2.6x",
            aroma_profile="Sweet Nutty Basmati",
            aging_duration="18 Months Aged",
            origin_region="Haryana Terroir, India",
            packaging_sizes="5kg, 10kg, 25kg Non-Woven Bags",
            is_featured=True,
            is_export_grade=True,
            hero_image_url="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[],
            nutritional_facts={"serving_size": "100g", "calories": 350, "protein": "8.0g"},
            certifications=["ISO 9001", "HACCP", "Halal"],
        )

        p4 = Product(
            category_id=cat_health.id,
            name="Uplife Low GI Wellness Diabetic-Friendly Rice",
            slug="uplife-low-gi-wellness-rice",
            tagline="Clinically Tested Glycemic Index < 55 - Wholesome Daily Grain for Balanced Sugar",
            description="Specially developed in collaboration with premier agricultural scientists. Retains the smooth taste and soft texture of white rice while preserving resistant starch that slows glucose release.",
            grain_length_mm="6.8 mm",
            elongation_ratio="2.0x",
            aroma_profile="Mild & Delicate",
            aging_duration="12 Months",
            origin_region="Karnataka & Andhra Pradesh, India",
            packaging_sizes="1kg Vacuum Brick, 5kg Pouch",
            is_featured=False,
            is_export_grade=True,
            is_organic=False,
            hero_image_url="https://images.unsplash.com/photo-1505253758473-96b46deae2cd?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[],
            nutritional_facts={"serving_size": "100g", "calories": 340, "glycemic_index": 52},
            certifications=["Clinical GI Certified", "FSSAI", "ISO 22000"],
        )

        p5 = Product(
            category_id=cat_byproducts.id,
            name="Pure Gold Physically Refined Rice Bran Oil",
            slug="pure-gold-rice-bran-oil",
            tagline="10,000+ PPM Natural Gamma Oryzanol for Superior Heart Health",
            description="Extracted purely from the nutrient-rich brown outer layer of Basmati and fine paddy. High smoke point of 232C makes it the healthiest culinary oil for frying, sauteing, and baking without chemical solvent residue.",
            grain_length_mm="N/A (Liquid Oil)",
            elongation_ratio="N/A",
            aroma_profile="Neutral Light Taste",
            aging_duration="Freshly Processed",
            origin_region="State-of-the-art Extraction Plant, Punjab",
            packaging_sizes="1L Pet Bottle, 5L Can, 15L Tin, 200L Drum, Bulk Flexitank",
            is_featured=True,
            is_export_grade=True,
            hero_image_url="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[],
            nutritional_facts={"serving_size": "15ml", "oryzanol": "150mg", "vitamin_e": "High"},
            certifications=["AGMARK Grade 1", "US FDA", "ISO 22000"],
        )
        db.add_all([p1, p2, p3, p4, p5])

        inv_cat_fin = InvestorCategory(
            name="Financial Results & Annual Reports",
            slug="financial-results",
            description="Audited annual statements, balance sheets, statutory auditor reports, and quarterly performance decks.",
            display_order=1,
        )
        inv_cat_gov = InvestorCategory(
            name="Corporate Governance & Policies",
            slug="corporate-governance",
            description="Board charters, code of ethics, vigil mechanism, and CSR committee charters.",
            display_order=2,
        )
        inv_cat_shares = InvestorCategory(
            name="Shareholding Pattern & Disclosures",
            slug="shareholding-pattern",
            description="Quarterly shareholding patterns filed under SEBI Regulation 31 and institutional investor presentations.",
            display_order=3,
        )
        db.add_all([inv_cat_fin, inv_cat_gov, inv_cat_shares])
        await db.flush()

        doc1 = InvestorDoc(
            category_id=inv_cat_fin.id,
            title="Integrated Annual Report FY 2025-26: Sustaining Global Leadership",
            fiscal_year="FY 2025-26",
            quarter="Annual",
            file_url="https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf",
            file_size_formatted="14.8 MB",
            published_date="August 2026",
        )
        doc2 = InvestorDoc(
            category_id=inv_cat_fin.id,
            title="Q1 FY 2025-26 Financial Results & Performance Presentation",
            fiscal_year="FY 2025-26",
            quarter="Q1",
            file_url="https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf",
            file_size_formatted="3.2 MB",
            published_date="July 2026",
        )
        doc3 = InvestorDoc(
            category_id=inv_cat_gov.id,
            title="Code of Business Conduct and Ethics for Board of Directors",
            fiscal_year="Perpetual",
            quarter="Policy",
            file_url="https://krblrice.com/wp-content/uploads/2026/08/KRBL-Annual-Report-2026.pdf",
            file_size_formatted="1.1 MB",
            published_date="Revised 2026",
        )
        db.add_all([doc1, doc2, doc3])

        n1 = NewsArticle(
            title="Krish Agro Expands Organic Black Rice Export Footprint to 18 New European & Gulf Markets",
            slug="krish-agro-expands-black-rice-europe-gulf-export",
            category="Press Release",
            excerpt="Empowered by surging international demand for antioxidant-dense functional grains, shipments of certified Chak-Hao black rice scaled past 12,000 metric tons this fiscal year.",
            content_html="<p>Our commitment to regenerative agriculture and chemical-free heritage grain cultivation continues to unlock premium international markets across the EU, UK, and GCC.</p>",
            cover_image_url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80",
            author="Corporate Communications",
        )
        n2 = NewsArticle(
            title="Dhuri Milling Complex Achieves 100% Renewable Biomass & Solar Energy Milestone",
            slug="dhuri-milling-complex-100-percent-renewable-energy",
            category="Corporate",
            excerpt="In alignment with corporate net-zero commitments, all rice husks are converted on-site into clean steam and electricity, preventing over 120,000 tonnes of CO2 emissions annually.",
            content_html="<p>By capturing agricultural by-products and harnessing a 145 MW captive clean power infrastructure, our agro-industrial complexes generate surplus green energy returned to the public grid.</p>",
            cover_image_url="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80",
            author="Sustainability Division",
        )
        db.add_all([n1, n2])

        j1 = JobPosting(
            title="Global Export Sales Director (Middle East & Europe)",
            department="International Business",
            location="New Delhi HQ / Dubai Hub",
            employment_type="Full-time",
            experience_level="8-12 Years",
            description="Lead multi-million-dollar bulk rice import contracts, distributor appointment, and containerized logistics across UAE, Saudi Arabia, and Europe.",
            requirements="Demonstrated track record in FMCG / agro-commodity international exports, fluent in LC/trade finance and container freight negotiation.",
        )
        db.add(j1)

        inq1 = Inquiry(
            inquiry_type="Export",
            full_name="Marcus Vance",
            company_name="Vance Organic Foods Ltd (London, UK)",
            email="m.vance@vancefoods.co.uk",
            phone="+44 20 7946 0991",
            country="United Kingdom",
            product_interest="Krish Heritage Royal Black Rice (Chak-Hao)",
            quantity_metric_tons="50 MT monthly",
            message="We require USDA and EU organic certified black rice in 25kg bulk kraft bags for our UK supermarket distribution network. Please send CIF Felixstowe pricing.",
            status="Pending",
        )
        db.add(inq1)

        await db.commit()

if __name__ == "__main__":
    asyncio.run(seed_database())
