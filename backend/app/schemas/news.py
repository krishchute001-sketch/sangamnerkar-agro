from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict

class NewsArticleBase(BaseModel):
    title: str
    slug: str
    category: str = "Press Release"
    excerpt: str
    content_html: str
    cover_image_url: Optional[str] = None
    author: Optional[str] = "Corporate Communications"
    is_published: bool = True

class NewsArticleCreate(NewsArticleBase):
    pass

class NewsArticleUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    category: Optional[str] = None
    excerpt: Optional[str] = None
    content_html: Optional[str] = None
    cover_image_url: Optional[str] = None
    author: Optional[str] = None
    is_published: Optional[bool] = None

class NewsArticleResponse(NewsArticleBase):
    id: str
    published_at: datetime

    model_config = ConfigDict(from_attributes=True)
