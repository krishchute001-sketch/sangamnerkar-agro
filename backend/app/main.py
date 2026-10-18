import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.router import api_v1_router
from app.seed import seed_database

@asynccontextmanager
async def lifespan(app: FastAPI):
    import asyncio
    from app.services.email_service import email_automation_background_worker

    # Ensure tables and seed data exist
    try:
        await seed_database()
    except Exception as e:
        print(f"Startup warning during seeding: {e}")

    # Start automated 8-hour email follow-up background worker
    worker_task = asyncio.create_task(email_automation_background_worker(interval_seconds=600))
    yield
    worker_task.cancel()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Enterprise Corporate and B2B Portal API for Sangamnerkar Agro Black Rice & Chinnor Rice.",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Router
app.include_router(api_v1_router)

@app.get("/health", tags=["Health"])
async def health_check():
    db_status = "unknown"
    db_error = None
    try:
        from app.core.database import AsyncSessionLocal
        from sqlalchemy import text
        async with AsyncSessionLocal() as session:
            await session.execute(text("SELECT 1"))
            db_status = "connected"
    except Exception as e:
        db_status = "error"
        db_error = str(e)

    return {
        "status": "healthy" if db_status == "connected" else "degraded",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "commit": "live-v2",
        "database": db_status,
        "database_error": db_error,
    }

# Mount frontend SPA static files if present
STATIC_DIR = None
for candidate in [
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "static")),
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "static")),
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "dist")),
    "/app/static",
]:
    if os.path.isdir(candidate) and os.path.isfile(os.path.join(candidate, "index.html")):
        STATIC_DIR = candidate
        break

if STATIC_DIR:
    from fastapi.staticfiles import StaticFiles
    from fastapi.responses import FileResponse

    assets_dir = os.path.join(STATIC_DIR, "assets")
    if os.path.isdir(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    images_dir = os.path.join(STATIC_DIR, "images")
    if os.path.isdir(images_dir):
        app.mount("/images", StaticFiles(directory=images_dir), name="images")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        file_path = os.path.join(STATIC_DIR, full_path)
        if full_path and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(STATIC_DIR, "index.html"))
else:
    @app.get("/", tags=["Root"])
    async def root():
        return {
            "message": f"Welcome to {settings.PROJECT_NAME}",
            "documentation": "/docs",
            "health": "/health",
        }
