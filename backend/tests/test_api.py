import pytest
from httpx import ASGITransport, AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_health_check():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"

@pytest.mark.asyncio
async def test_categories_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/categories")
    assert response.status_code == 200
    categories = response.json()
    assert isinstance(categories, list)
    assert len(categories) > 0

@pytest.mark.asyncio
async def test_products_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/products")
    assert response.status_code == 200
    products = response.json()
    assert isinstance(products, list)
    assert len(products) > 0
    prod = products[0]
    assert "slug" in prod
    assert "name" in prod

@pytest.mark.asyncio
async def test_investor_categories_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/investors/categories")
    assert response.status_code == 200
    inv_cats = response.json()
    assert isinstance(inv_cats, list)
    assert len(inv_cats) > 0

@pytest.mark.asyncio
async def test_submit_inquiry():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        payload = {
            "inquiry_type": "Export",
            "full_name": "Test Importer",
            "company_name": "Global Grain Trading Co",
            "email": "importer@globalgrain.com",
            "phone": "+1 555 123 4567",
            "country": "United States",
            "product_interest": "Royal Balaghat Chinnor Rice",
            "quantity_metric_tons": "100 MT",
            "message": "Testing automated API verification inquiry submission."
        }
        response = await ac.post("/api/v1/inquiries", json=payload)
    assert response.status_code == 201
    inquiry = response.json()
    assert inquiry["status"] == "Pending"
    assert inquiry["email"] == "importer@globalgrain.com"

@pytest.mark.asyncio
async def test_admin_login():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        payload = {
            "email": "admin@sangamnerkaragro.com",
            "password": "Admin@123456"
        }
        response = await ac.post("/api/v1/auth/login-json", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
