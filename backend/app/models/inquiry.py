import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Text, DateTime
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

def generate_uuid() -> str:
    return str(uuid.uuid4())

class Inquiry(Base):
    __tablename__ = "inquiries"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    inquiry_type: Mapped[str] = mapped_column(String(50), default="Export")
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    company_name: Mapped[str] = mapped_column(String(200), nullable=True)
    email: Mapped[str] = mapped_column(String(150), nullable=False)
    phone: Mapped[str] = mapped_column(String(50), nullable=False)
    country: Mapped[str] = mapped_column(String(100), default="India")
    product_interest: Mapped[str] = mapped_column(String(200), nullable=True)
    quantity_metric_tons: Mapped[str] = mapped_column(String(50), nullable=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(50), default="Pending")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
