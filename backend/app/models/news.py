import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Text, Boolean, DateTime
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

def generate_uuid() -> str:
    return str(uuid.uuid4())

class NewsArticle(Base):
    __tablename__ = "news_articles"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    title: Mapped[str] = mapped_column(String(300), nullable=False)
    slug: Mapped[str] = mapped_column(String(300), unique=True, index=True, nullable=False)
    category: Mapped[str] = mapped_column(String(100), default="Press Release")
    excerpt: Mapped[str] = mapped_column(Text, nullable=False)
    content_html: Mapped[str] = mapped_column(Text, nullable=False)
    cover_image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    author: Mapped[str] = mapped_column(String(100), default="Corporate Communications")
    is_published: Mapped[bool] = mapped_column(Boolean, default=True)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
