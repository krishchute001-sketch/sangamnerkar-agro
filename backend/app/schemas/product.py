from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, ConfigDict
from app.schemas.category import CategoryResponse

class ProductBase(BaseModel):
    category_id: str
    name: str
    slug: str
    tagline: Optional[str] = None
    description: Optional[str] = None
    grain_length_mm: Optional[str] = None
    elongation_ratio: Optional[str] = None
    aroma_profile: Optional[str] = None
    aging_duration: Optional[str] = None
    origin_region: Optional[str] = None
    packaging_sizes: Optional[str] = None
    is_featured: bool = False
    is_export_grade: bool = True
    is_organic: bool = False
    hero_image_url: Optional[str] = None
    gallery_urls: Optional[List[str]] = []
    nutritional_facts: Optional[Dict[str, Any]] = {}
    certifications: Optional[List[str]] = []

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    category_id: Optional[str] = None
    name: Optional[str] = None
    slug: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    grain_length_mm: Optional[str] = None
    elongation_ratio: Optional[str] = None
    aroma_profile: Optional[str] = None
    aging_duration: Optional[str] = None
    origin_region: Optional[str] = None
    packaging_sizes: Optional[str] = None
    is_featured: Optional[bool] = None
    is_export_grade: Optional[bool] = None
    is_organic: Optional[bool] = None
    hero_image_url: Optional[str] = None
    gallery_urls: Optional[List[str]] = None
    nutritional_facts: Optional[Dict[str, Any]] = None
    certifications: Optional[List[str]] = None

class ProductResponse(ProductBase):
    id: str
    created_at: datetime
    category: Optional[CategoryResponse] = None

    model_config = ConfigDict(from_attributes=True)
