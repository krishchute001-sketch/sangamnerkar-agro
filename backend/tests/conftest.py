import pytest_asyncio
from app.seed import seed_database

@pytest_asyncio.fixture(scope="session", autouse=True)
async def initialize_db():
    await seed_database()
