"""
Supabase Database Migration & Verification Utility for Sangamnerkar Agro

Usage:
1. Set your Supabase connection string in backend/.env:
   DATABASE_URL=postgresql+asyncpg://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
2. Run:
   python backend/migrate_to_supabase.py
"""

import os
import sys
import asyncio
from pathlib import Path

# Add backend directory to sys.path
backend_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(backend_dir))

from sqlalchemy.ext.asyncio import create_async_engine
from app.core.config import settings
from app.core.database import Base
from app.seed import seed_database

async def migrate():
    db_url = settings.DATABASE_URL
    print(f"Connecting to database: {db_url.split('@')[-1] if '@' in db_url else db_url}")

    if "sqlite" in db_url:
        print("NOTE: Current DATABASE_URL is SQLite.")
        print("To connect to Supabase, update DATABASE_URL in backend/.env to your Supabase PostgreSQL connection string.")
        print("Example: postgresql+asyncpg://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres")

    print("Creating all tables in database...")
    engine = create_async_engine(db_url, echo=True)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("Tables created successfully!")

    print("Seeding initial products, categories, and admin credentials...")
    await seed_database()
    print("Database initialization complete!")

if __name__ == "__main__":
    asyncio.run(migrate())
