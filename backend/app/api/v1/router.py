from fastapi import APIRouter
from app.api.v1.auth import router as auth_router
from app.api.v1.categories import router as categories_router
from app.api.v1.products import router as products_router
from app.api.v1.investors import router as investors_router
from app.api.v1.news import router as news_router
from app.api.v1.careers import router as careers_router
from app.api.v1.inquiries import router as inquiries_router
from app.api.v1.stats import router as stats_router

api_v1_router = APIRouter(prefix="/api/v1")
api_v1_router.include_router(auth_router)
api_v1_router.include_router(categories_router)
api_v1_router.include_router(products_router)
api_v1_router.include_router(investors_router)
api_v1_router.include_router(news_router)
api_v1_router.include_router(careers_router)
api_v1_router.include_router(inquiries_router)
api_v1_router.include_router(stats_router)
