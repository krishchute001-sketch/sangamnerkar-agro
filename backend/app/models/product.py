import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Text, Boolean, Integer, DateTime, ForeignKey, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base
from app.models.category import Category

def generate_uuid() -> str:
    return str(uuid.uuid4())

class Product(Base):
    __tablename__ = "products"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    category_id: Mapped[str] = mapped_column(String(36), ForeignKey("categories.id"), nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), unique=True, index=True, nullable=False)
    tagline: Mapped[str] = mapped_column(String(300), nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    grain_length_mm: Mapped[str] = mapped_column(String(50), nullable=True)
    elongation_ratio: Mapped[str] = mapped_column(String(50), nullable=True)
    aroma_profile: Mapped[str] = mapped_column(String(100), nullable=True)
    aging_duration: Mapped[str] = mapped_column(String(100), nullable=True)
    origin_region: Mapped[str] = mapped_column(String(150), nullable=True)
    packaging_sizes: Mapped[str] = mapped_column(String(200), nullable=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False)
    is_export_grade: Mapped[bool] = mapped_column(Boolean, default=True)
    is_organic: Mapped[bool] = mapped_column(Boolean, default=False)
    hero_image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    gallery_urls: Mapped[list] = mapped_column(JSON, default=list, nullable=True)
    nutritional_facts: Mapped[dict] = mapped_column(JSON, default=dict, nullable=True)
    certifications: Mapped[list] = mapped_column(JSON, default=list, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    category: Mapped["Category"] = relationship("Category", back_populates="products")
