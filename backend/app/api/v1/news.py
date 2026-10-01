from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.news import NewsArticle
from app.schemas.news import NewsArticleResponse, NewsArticleCreate, NewsArticleUpdate
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/news", tags=["News & Media"])

@router.get("", response_model=List[NewsArticleResponse])
async def list_news(
    category: Optional[str] = None,
    limit: int = 20,
    db: AsyncSession = Depends(get_db),
):
    query = select(NewsArticle).where(NewsArticle.is_published == True)
    if category:
        query = query.where(NewsArticle.category == category)
    query = query.order_by(NewsArticle.published_at.desc()).limit(limit)
    result = await db.execute(query)
    return result.scalars().all()

@router.get("/{slug}", response_model=NewsArticleResponse)
async def get_article(slug: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(NewsArticle).where(NewsArticle.slug == slug))
    article = result.scalar_one_or_none()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@router.post("", response_model=NewsArticleResponse, status_code=status.HTTP_201_CREATED)
async def create_article(
    body: NewsArticleCreate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    existing = await db.execute(select(NewsArticle).where(NewsArticle.slug == body.slug))
    if existing.scalar_one_or_none():
        raise HTTPException(status_code=400, detail="Article slug already exists")
    article = NewsArticle(**body.model_dump())
    db.add(article)
    await db.commit()
    await db.refresh(article)
    return article

@router.put("/{article_id}", response_model=NewsArticleResponse)
async def update_article(
    article_id: str,
    body: NewsArticleUpdate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(NewsArticle).where(NewsArticle.id == article_id))
    article = result.scalar_one_or_none()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    for k, v in body.model_dump(exclude_unset=True).items():
        setattr(article, k, v)
    await db.commit()
    await db.refresh(article)
    return article

@router.delete("/{article_id}")
async def delete_article(
    article_id: str,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(NewsArticle).where(NewsArticle.id == article_id))
    article = result.scalar_one_or_none()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    await db.delete(article)
    await db.commit()
    return {"message": "Article deleted"}
