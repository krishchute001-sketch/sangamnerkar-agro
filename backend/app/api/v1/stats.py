from fastapi import APIRouter, Depends
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.product import Product
from app.models.inquiry import Inquiry
from app.models.investor import InvestorDoc
from app.models.career import JobPosting
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/stats", tags=["Corporate & Admin Stats"])

@router.get("/corporate")
async def get_corporate_stats():
    return {
        "global_export_countries": 90,
        "milling_capacity_mt_per_hour": 195,
        "farmer_network_count": 140000,
        "storage_capacity_mt": 1000000,
        "heritage_years": 135,
        "purity_guarantee_percent": 100,
        "green_energy_mw": 145,
    }

@router.get("/dashboard")
async def get_admin_dashboard_stats(
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    total_products = await db.scalar(select(func.count(Product.id)))
    total_inquiries = await db.scalar(select(func.count(Inquiry.id)))
    pending_inquiries = await db.scalar(select(func.count(Inquiry.id)).where(Inquiry.status == "Pending"))
    total_investor_docs = await db.scalar(select(func.count(InvestorDoc.id)))
    active_jobs = await db.scalar(select(func.count(JobPosting.id)).where(JobPosting.is_active == True))
    return {
        "total_products": total_products or 0,
        "total_inquiries": total_inquiries or 0,
        "pending_inquiries": pending_inquiries or 0,
        "total_investor_docs": total_investor_docs or 0,
        "active_jobs": active_jobs or 0,
    }
