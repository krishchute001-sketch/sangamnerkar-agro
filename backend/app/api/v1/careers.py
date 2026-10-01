from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.career import JobPosting, JobApplication
from app.schemas.career import (
    JobPostingResponse,
    JobPostingCreate,
    JobApplicationResponse,
    JobApplicationCreate,
)
from app.api.deps import get_current_admin
from app.models.user import AdminUser

router = APIRouter(prefix="/careers", tags=["Careers & Talent"])

@router.get("/jobs", response_model=List[JobPostingResponse])
async def list_jobs(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(JobPosting)
        .where(JobPosting.is_active == True)
        .order_by(JobPosting.created_at.desc())
    )
    return result.scalars().all()

@router.post("/jobs", response_model=JobPostingResponse, status_code=status.HTTP_201_CREATED)
async def create_job(
    body: JobPostingCreate,
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    job = JobPosting(**body.model_dump())
    db.add(job)
    await db.commit()
    await db.refresh(job)
    return job

@router.post("/apply", response_model=JobApplicationResponse, status_code=status.HTTP_201_CREATED)
async def apply_job(
    body: JobApplicationCreate,
    db: AsyncSession = Depends(get_db),
):
    job_result = await db.execute(select(JobPosting).where(JobPosting.id == body.job_id))
    if not job_result.scalar_one_or_none():
        raise HTTPException(status_code=404, detail="Job position not found")
    app = JobApplication(**body.model_dump())
    db.add(app)
    await db.commit()
    await db.refresh(app)
    return app

@router.get("/applications", response_model=List[JobApplicationResponse])
async def list_applications(
    db: AsyncSession = Depends(get_db),
    admin: AdminUser = Depends(get_current_admin),
):
    result = await db.execute(select(JobApplication).order_by(JobApplication.submitted_at.desc()))
    return result.scalars().all()
