from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, ConfigDict

class InvestorDocBase(BaseModel):
    category_id: str
    title: str
    fiscal_year: str
    quarter: Optional[str] = "Annual"
    file_url: str
    file_size_formatted: Optional[str] = "2.4 MB"
    published_date: str

class InvestorDocCreate(InvestorDocBase):
    pass

class InvestorDocResponse(InvestorDocBase):
    id: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class InvestorCategoryBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    display_order: int = 0

class InvestorCategoryCreate(InvestorCategoryBase):
    pass

class InvestorCategoryResponse(InvestorCategoryBase):
    id: str
    documents: List[InvestorDocResponse] = []

    model_config = ConfigDict(from_attributes=True)
