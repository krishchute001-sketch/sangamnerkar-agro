from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.investor import InvestorCategory, InvestorDoc
from app.schemas.investor import (
    InvestorCategoryResponse,
    InvestorCategoryCreate,
    InvestorDocResponse,
    InvestorDocCreate,
)
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/investors", tags=["Investor Relations"])

@router.get("/categories", response_model=List[InvestorCategoryResponse])
async def list_investor_categories(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(InvestorCategory)
        .options(selectinload(InvestorCategory.documents))
        .order_by(InvestorCategory.display_order.asc())
    )
    return result.scalars().all()

@router.get("/documents", response_model=List[InvestorDocResponse])
async def list_investor_documents(
    category_slug: Optional[str] = None,
    fiscal_year: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
):
    query = select(InvestorDoc)
    if category_slug:
        cat_result = await db.execute(select(InvestorCategory).where(InvestorCategory.slug == category_slug))
        cat = cat_result.scalar_one_or_none()
        if cat:
            query = query.where(InvestorDoc.category_id == cat.id)
    if fiscal_year:
        query = query.where(InvestorDoc.fiscal_year == fiscal_year)
    query = query.order_by(InvestorDoc.created_at.desc())
    result = await db.execute(query)
    return result.scalars().all()

@router.post("/categories", response_model=InvestorCategoryResponse, status_code=status.HTTP_201_CREATED)
async def create_investor_category(
    body: InvestorCategoryCreate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    cat = InvestorCategory(**body.model_dump())
    db.add(cat)
    await db.commit()
    await db.refresh(cat)
    return cat

@router.post("/documents", response_model=InvestorDocResponse, status_code=status.HTTP_201_CREATED)
async def create_investor_document(
    body: InvestorDocCreate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    doc = InvestorDoc(**body.model_dump())
    db.add(doc)
    await db.commit()
    await db.refresh(doc)
    return doc

@router.delete("/documents/{doc_id}")
async def delete_investor_document(
    doc_id: str,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(InvestorDoc).where(InvestorDoc.id == doc_id))
    doc = result.scalar_one_or_none()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    await db.delete(doc)
    await db.commit()
    return {"message": "Document removed"}
