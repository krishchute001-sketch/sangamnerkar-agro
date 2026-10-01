from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class TokenPayload(BaseModel):
    sub: Optional[str] = None

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class AdminUserBase(BaseModel):
    email: EmailStr
    full_name: str
    role: str = "admin"
    is_active: bool = True

class AdminUserCreate(AdminUserBase):
    password: str

class AdminUserResponse(AdminUserBase):
    id: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
