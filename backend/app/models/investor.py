import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Text, Integer, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

def generate_uuid() -> str:
    return str(uuid.uuid4())

class InvestorCategory(Base):
    __tablename__ = "investor_categories"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    slug: Mapped[str] = mapped_column(String(150), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    display_order: Mapped[int] = mapped_column(Integer, default=0)

    documents: Mapped[list["InvestorDoc"]] = relationship("InvestorDoc", back_populates="category", cascade="all, delete-orphan")

class InvestorDoc(Base):
    __tablename__ = "investor_docs"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    category_id: Mapped[str] = mapped_column(String(36), ForeignKey("investor_categories.id"), nullable=False)
    title: Mapped[str] = mapped_column(String(250), nullable=False)
    fiscal_year: Mapped[str] = mapped_column(String(50), nullable=False)
    quarter: Mapped[str] = mapped_column(String(20), nullable=True)
    file_url: Mapped[str] = mapped_column(String(500), nullable=False)
    file_size_formatted: Mapped[str] = mapped_column(String(50), default="2.4 MB")
    published_date: Mapped[str] = mapped_column(String(50), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    category: Mapped["InvestorCategory"] = relationship("InvestorCategory", back_populates="documents")
