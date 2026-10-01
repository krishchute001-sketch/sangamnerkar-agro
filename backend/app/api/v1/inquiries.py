from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.inquiry import Inquiry
from app.schemas.inquiry import (
    InquiryResponse,
    InquiryCreate,
    InquiryUpdate,
)
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/inquiries", tags=["B2B & Contact Inquiries"])

@router.post("", response_model=InquiryResponse, status_code=status.HTTP_201_CREATED)
async def submit_inquiry(
    body: InquiryCreate,
    db: AsyncSession = Depends(get_db),
):
    inquiry = Inquiry(**body.model_dump())
    db.add(inquiry)
    await db.commit()
    await db.refresh(inquiry)
    return inquiry

@router.get("", response_model=List[InquiryResponse])
async def list_inquiries(
    inquiry_type: Optional[str] = None,
    status_filter: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    query = select(Inquiry)
    if inquiry_type:
        query = query.where(Inquiry.inquiry_type == inquiry_type)
    if status_filter:
        query = query.where(Inquiry.status == status_filter)
    query = query.order_by(Inquiry.created_at.desc())
    result = await db.execute(query)
    return result.scalars().all()

@router.patch("/{inquiry_id}/status", response_model=InquiryResponse)
async def update_inquiry_status(
    inquiry_id: str,
    body: InquiryUpdate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry lead not found")
    inquiry.status = body.status
    await db.commit()
    await db.refresh(inquiry)
    return inquiry
