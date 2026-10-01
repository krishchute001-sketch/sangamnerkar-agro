from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr

class InquiryCreate(BaseModel):
    inquiry_type: str = "Export"
    full_name: str
    company_name: Optional[str] = None
    email: EmailStr
    phone: str
    country: str = "India"
    product_interest: Optional[str] = None
    quantity_metric_tons: Optional[str] = None
    message: str

class InquiryUpdate(BaseModel):
    status: str

class InquiryResponse(InquiryCreate):
    id: str
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
