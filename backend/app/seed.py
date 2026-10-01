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
        admin_check = await db.execute(select(AdminUser).where(AdminUser.email == "admin@sangamnerkaragro.com"))
        if admin_check.scalar_one_or_none():
            return

        print("Seeding corporate database with Black Rice, Chinnor Rice, and Jai Shree Rice...")

        admin = AdminUser(
            email="admin@sangamnerkaragro.com",
            full_name="Executive Administrator",
            hashed_password=get_password_hash("Admin@123456"),
            role="admin",
            is_active=True,
        )
        db.add(admin)

        # Categories
        cat_black = Category(
            name="Imperial Black Rice Range",
            slug="imperial-black-rice",
            description="Rare heirloom Manipur Chak-Hao and anthocyanin-rich forbidden black rice cultivated through sustainable regenerative farming.",
            banner_image_url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=1200&q=80",
            display_order=1,
        )
        cat_chinnor = Category(
            name="GI-Tagged Chinnor Rice Range",
            slug="chinnor-rice-range",
            description="Celebrated Balaghat Chinnor rice with authentic Geographical Indication (GI) tag, famed for its divine natural aroma, tender softness, and sweet taste.",
            banner_image_url="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80",
            display_order=2,
        )
        cat_jaishree = Category(
            name="Jai Shree Traditional Rice Range",
            slug="jai-shree-rice-range",
            description="Premium scented fine-grain Jai Shree rice, hand-harvested for pristine pearly white luster, non-sticky fluffiness, and everyday dining luxury.",
            banner_image_url="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
            display_order=3,
        )
        cat_health = Category(
            name="Uplife Health & Superfoods",
            slug="uplife-health-range",
            description="Functional whole grain black rice flakes, gluten-free stoneground flour, sprouted seeds, and diabetic-friendly nutrition.",
            banner_image_url="https://images.unsplash.com/photo-1505253758473-96b46deae2cd?auto=format&fit=crop&w=1200&q=80",
            display_order=4,
        )
        cat_byproducts = Category(
            name="Value-Added Agro By-Products",
            slug="agro-by-products",
            description="Zero-waste circular agro innovations: Physico-refined Rice Bran Oil high in Oryzanol, furfural, and green biomass pellets.",
            banner_image_url="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
            display_order=5,
        )
        db.add_all([cat_black, cat_chinnor, cat_jaishree, cat_health, cat_byproducts])
        await db.flush()

        # Products
        p1 = Product(
            category_id=cat_black.id,
            name="Sangamnerkar Royal Black Rice (Chak-Hao)",
            slug="sangamnerkar-royal-black-rice-chak-hao",
            tagline="The Emperor's Forbidden Grain - 3x Anthocyanin Antioxidants & Deep Nutty Aroma",
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
            category_id=cat_chinnor.id,
            name="Royal Balaghat Chinnor Rice (GI Tagged)",
            slug="royal-balaghat-chinnor-rice",
            tagline="The Queen of Fragrant Indigenous Grains - Certified GI Tagged Heritage",
            description="Cultivated in the mineral-rich soils of Balaghat (Madhya Pradesh) and officially awarded the Geographical Indication (GI) tag. Renowned for its captivating natural floral perfume, sweet delicate taste, and ultra-soft, tender texture that melts in the mouth. Highly celebrated for traditional kheer, royal pulao, and signature festive dining.",
            grain_length_mm="6.85 mm",
            elongation_ratio="2.1x",
            aroma_profile="Divine Sweet Floral Chinnor Aroma",
            aging_duration="12 Months Natural Maturation",
            origin_region="Balaghat Terroir, Madhya Pradesh, India",
            packaging_sizes="1kg, 5kg Zipper Pouch, 10kg Tin, 25kg Non-Woven Bag",
            is_featured=True,
            is_export_grade=True,
            is_organic=True,
            hero_image_url="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[
                "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
            ],
            nutritional_facts={
                "serving_size": "100g",
                "calories": 348,
                "protein": "7.9g",
                "fiber": "1.4g",
                "carbs": "77g",
            },
            certifications=["GI Tag Certified (GI-696)", "BRCGS Grade AA", "FSSC 22000", "Halal"],
        )

        p3 = Product(
            category_id=cat_jaishree.id,
            name="Jai Shree Select Premium Scented Rice",
            slug="jai-shree-select-premium-rice",
            tagline="Pristine Fine Grain Daily Luxury - Silky Texture & Gentle Fragrance",
            description="Hand-selected from heritage fertile tracts, Jai Shree rice is an exquisite fine grain renowned for its silky slender texture, pristine pearly color, and gentle natural scent. Non-sticky and easily digestible, it elevates daily gourmet dining, biryanis, and aromatic spiced rice preparations.",
            grain_length_mm="7.20 mm",
            elongation_ratio="2.0x",
            aroma_profile="Subtle Warm Scented Aroma",
            aging_duration="12 Months Aged in Climate-Controlled Silos",
            origin_region="Central Agro Plains, India",
            packaging_sizes="1kg, 5kg, 10kg, 25kg Non-Woven & Poly-woven Bulk",
            is_featured=True,
            is_export_grade=True,
            hero_image_url="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[],
            nutritional_facts={"serving_size": "100g", "calories": 350, "protein": "8.1g", "fiber": "1.1g"},
            certifications=["ISO 9001", "HACCP", "Halal", "US FDA Registered"],
        )

        p4 = Product(
            category_id=cat_chinnor.id,
            name="Balaghat Chinnor Aromatic Special",
            slug="balaghat-chinnor-aromatic-special",
            tagline="Traditional Soft-Grain Fragrant Rice for Gourmet Royal Delicacies",
            description="Milled with extreme precision to protect the fragrant essential oils in the aleurone layer. When cooked, its scent fills the entire dining hall, offering an incomparable velvety softness.",
            grain_length_mm="6.70 mm",
            elongation_ratio="2.0x",
            aroma_profile="Natural Sweet Pandanic Floral",
            aging_duration="8 Months Matured",
            origin_region="Balaghat Valley, India",
            packaging_sizes="5kg, 10kg, 25kg Bags",
            is_featured=False,
            is_export_grade=True,
            hero_image_url="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            gallery_urls=[],
            nutritional_facts={"serving_size": "100g", "calories": 345, "protein": "7.8g"},
            certifications=["GI Tagged", "ISO 22000"],
        )

        p5 = Product(
            category_id=cat_byproducts.id,
            name="Pure Gold Physically Refined Rice Bran Oil",
            slug="pure-gold-rice-bran-oil",
            tagline="10,000+ PPM Natural Gamma Oryzanol for Superior Heart Health",
            description="Extracted purely from outer nutrient-rich layers of paddy. High smoke point of 232°C makes it the healthiest culinary oil for frying, sautéing, and baking without chemical solvent residue.",
            grain_length_mm="N/A (Liquid Oil)",
            elongation_ratio="N/A",
            aroma_profile="Neutral Light Taste",
            aging_duration="Freshly Processed",
            origin_region="State-of-the-art Extraction Plant, India",
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
            description="Quarterly shareholding patterns and institutional investor presentations.",
            display_order=3,
        )
        db.add_all([inv_cat_fin, inv_cat_gov, inv_cat_shares])
        await db.flush()

        doc1 = InvestorDoc(
            category_id=inv_cat_fin.id,
            title="Integrated Annual Report FY 2025-26: Sustaining Leadership in Specialty & Black Rice",
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
            title="Sangamnerkar Agro Expands Organic Black Rice & GI Chinnor Export Footprint to 18 New European & Gulf Markets",
            slug="sangamnerkar-agro-expands-black-rice-chinnor-europe-gulf-export",
            category="Press Release",
            excerpt="Empowered by surging international demand for antioxidant-dense functional grains and fragrant Chinnor rice, global shipments scaled past 15,000 metric tons this fiscal year.",
            content_html="<p>Our commitment to regenerative agriculture, certified Manipur Chak-Hao Black Rice, and authentic Balaghat Chinnor continues to unlock premium international markets across the EU, UK, and GCC.</p>",
            cover_image_url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=800&q=80",
            author="Corporate Communications",
        )
        db.add(n1)

        j1 = JobPosting(
            title="Global Export Sales Director (Black Rice, Chinnor & Specialty Grains)",
            department="International Business",
            location="New Delhi HQ / Dubai Hub",
            employment_type="Full-time",
            experience_level="8-12 Years",
            description="Lead multi-million-dollar bulk rice import contracts, distributor appointment, and containerized logistics across UAE, Saudi Arabia, Europe, and North America for Black Rice and Chinnor Rice.",
            requirements="Demonstrated track record in FMCG / agro-commodity international exports, fluent in trade finance.",
        )
        db.add(j1)

        inq1 = Inquiry(
            inquiry_type="Export",
            full_name="Marcus Vance",
            company_name="Vance Organic Foods Ltd (London, UK)",
            email="m.vance@vancefoods.co.uk",
            phone="+44 20 7946 0991",
            country="United Kingdom",
            product_interest="Sangamnerkar Royal Black Rice & Balaghat Chinnor",
            quantity_metric_tons="40 MT monthly",
            message="We require USDA and EU organic certified Black Rice (Chak-Hao) and GI Balaghat Chinnor rice in 25kg bulk kraft bags for our UK distribution network. Please send CIF Felixstowe pricing.",
            status="Pending",
        )
        db.add(inq1)

        await db.commit()
        print("Database seeded with Black Rice, Chinnor Rice, and Jai Shree Rice!")

if __name__ == "__main__":
    asyncio.run(seed_database())
