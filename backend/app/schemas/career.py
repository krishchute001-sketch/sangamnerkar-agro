from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr

class JobPostingBase(BaseModel):
    title: str
    department: str
    location: str
    employment_type: str = "Full-time"
    experience_level: str = "3-5 Years"
    description: str
    requirements: str
    is_active: bool = True

class JobPostingCreate(JobPostingBase):
    pass

class JobPostingResponse(JobPostingBase):
    id: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class JobApplicationCreate(BaseModel):
    job_id: str
    full_name: str
    email: EmailStr
    phone: str
    linkedin_url: Optional[str] = None
    resume_url: Optional[str] = None
    cover_letter: Optional[str] = None

class JobApplicationResponse(JobApplicationCreate):
    id: str
    submitted_at: datetime

    model_config = ConfigDict(from_attributes=True)
