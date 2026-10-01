from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select, or_
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.product import Product
from app.models.category import Category
from app.schemas.product import ProductResponse, ProductCreate, ProductUpdate
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/products", tags=["Products"])

@router.get("", response_model=List[ProductResponse])
async def list_products(
    category_slug: Optional[str] = None,
    is_featured: Optional[bool] = None,
    is_export_grade: Optional[bool] = None,
    is_organic: Optional[bool] = None,
    search: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
):
    query = select(Product).options(selectinload(Product.category))
    if category_slug:
        cat_result = await db.execute(select(Category).where(Category.slug == category_slug))
        category = cat_result.scalar_one_or_none()
        if category:
            query = query.where(Product.category_id == category.id)
    if is_featured is not None:
        query = query.where(Product.is_featured == is_featured)
    if is_export_grade is not None:
        query = query.where(Product.is_export_grade == is_export_grade)
    if is_organic is not None:
        query = query.where(Product.is_organic == is_organic)
    if search:
        search_filter = f"%{search}%"
        query = query.where(
            or_(
                Product.name.ilike(search_filter),
                Product.tagline.ilike(search_filter),
                Product.description.ilike(search_filter),
            )
        )
    query = query.order_by(Product.is_featured.desc(), Product.created_at.desc())
    result = await db.execute(query)
    return result.scalars().all()

@router.get("/{slug}", response_model=ProductResponse)
async def get_product(slug: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Product)
        .options(selectinload(Product.category))
        .where(Product.slug == slug)
    )
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.post("", response_model=ProductResponse, status_code=status.HTTP_201_CREATED)
async def create_product(
    body: ProductCreate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    existing = await db.execute(select(Product).where(Product.slug == body.slug))
    if existing.scalar_one_or_none():
        raise HTTPException(status_code=400, detail="Product slug already exists")
    product = Product(**body.model_dump())
    db.add(product)
    await db.commit()
    await db.refresh(product)
    
    result = await db.execute(
        select(Product)
        .options(selectinload(Product.category))
        .where(Product.id == product.id)
    )
    return result.scalar_one()

@router.put("/{product_id}", response_model=ProductResponse)
async def update_product(
    product_id: str,
    body: ProductUpdate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(
        select(Product)
        .options(selectinload(Product.category))
        .where(Product.id == product_id)
    )
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    for field, value in body.model_dump(exclude_unset=True).items():
        setattr(product, field, value)
    await db.commit()
    await db.refresh(product)
    return product

@router.delete("/{product_id}")
async def delete_product(
    product_id: str,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    await db.delete(product)
    await db.commit()
    return {"message": "Product deleted successfully"}
