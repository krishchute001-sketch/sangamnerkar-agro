# Krish Agro & Black Rice Corporate Enterprise Platform
*Inspired by [KRBL Limited](https://krblrice.com/) (India Gate Basmati Rice)*

An enterprise-grade, high-performance web platform for global agricultural FMCG exports, heritage Basmati, and Manipur Chak-Hao Black Rice. Featuring a public corporate portal, B2B wholesale lead processing, investor relations filing center, and a secure staff Content Management System (CMS).

---

## Tech Stack Overview

- **Backend**: **FastAPI** (Python 3.12+), **SQLAlchemy 2.0 (Async)**, **Pydantic v2**, **Alembic**, **PostgreSQL** (with Async SQLite local fallback), **Redis** (caching & rate-limiting), **JWT Security**.
- **Frontend**: **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, **Lucide Icons**, **React Router v6**, **Axios**.
- **DevOps & Infrastructure**: **Docker**, **Docker Compose**, **Nginx Gateway Reverse Proxy**, **Cloudflare CDN / SSL**, **Cloudflare R2 / AWS S3** for media & PDF storage.
- **VCS**: Git & GitHub.

---

## System Architecture

```
                      [ User Browser / Search Crawlers / Staff ]
                                         │
                                         ▼
                     [ Cloudflare Edge CDN & SSL Termination ]
                                         │
                                         ▼
                  [ Gateway Nginx Reverse Proxy (Port 80/443) ]
                         │                               │
                 Route / │                       Route /api/v1
                         ▼                               ▼
       [ Frontend (React + Vite + Nginx) ]      [ Backend (FastAPI / Uvicorn) ]
                                                         │
                                        ┌────────────────┴────────────────┐
                                        ▼                                 ▼
                             [ PostgreSQL 16 DB ]                 [ Redis 7 Cache ]
```

---

## Directory Structure

```
.
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── auth.py          # Admin login & authentication
│   │   │   │   ├── categories.py    # Product categories
│   │   │   │   ├── products.py      # Grain catalog with agronomic specs & search
│   │   │   │   ├── investors.py     # Annual reports, quarterly earnings & filings
│   │   │   │   ├── news.py          # Press releases & corporate announcements
│   │   │   │   ├── careers.py       # Job postings & candidate applications
│   │   │   │   ├── inquiries.py     # B2B export & domestic lead capture
│   │   │   │   ├── stats.py         # Corporate achievements & admin metrics
│   │   │   │   └── router.py        # Central v1 router
│   │   │   └── deps.py              # JWT authentication dependencies
│   │   ├── core/
│   │   │   ├── config.py            # Pydantic Settings configuration
│   │   │   ├── database.py          # Async SQLAlchemy engine & sessionmaker
│   │   │   └── security.py          # PBKDF2 cryptography & JWT tokens
│   │   ├── models/                  # Declarative database entities
│   │   ├── schemas/                 # Pydantic v2 request/response schemas
│   │   ├── seed.py                  # Realistic KRBL enterprise seed data
│   │   └── main.py                  # FastAPI application entrypoint
│   ├── tests/
│   │   ├── conftest.py              # Pytest async database fixtures
│   │   └── test_api.py              # Automated test suite
│   ├── Dockerfile                   # Production Python container
│   └── requirements.txt             # Locked Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/              # Navbar, Footer, ProductCard, CorporateTicker
│   │   ├── context/                 # AuthContext for staff CMS sessions
│   │   ├── pages/                   # Home, About, Portfolio, ProductDetail,
│   │   │                            # ExploreRice, InvestorRelations, Sustainability,
│   │   │                            # MediaNews, Careers, ContactUs, AdminDashboard
│   │   ├── services/api.ts          # Axios client with offline fallback mocks
│   │   ├── types/index.ts           # Shared TypeScript interfaces
│   │   ├── App.tsx                  # Router & layout orchestration
│   │   └── index.css                # Tailwind CSS v4 design system
│   ├── Dockerfile                   # Multi-stage production container
│   ├── nginx.conf                   # Static SPA routing configuration
│   └── vite.config.ts               # Vite configuration with proxy
│
├── nginx/
│   └── default.conf                 # Gateway Nginx reverse proxy configuration
├── docker-compose.yml               # Multi-container production composition
└── README.md
```

---

## Quickstart: Local Development

### 1. Run the Backend API (FastAPI)

```bash
cd backend

# Activate virtual environment
source .venv/bin/activate   # On Windows: .venv\Scripts\activate

# Run automated tests
PYTHONPATH=. pytest tests/ -v

# Start development server with live reload
uvicorn app.main:app --reload --port 8000
```
- Interactive Swagger UI: **http://localhost:8000/docs**
- Health Check: **http://localhost:8000/health**

### 2. Run the Frontend (React + Vite)

```bash
cd frontend

# Install dependencies (already installed)
npm install

# Start Vite dev server
npm run dev
```
- Public Website: **http://localhost:5173**
- Staff CMS Portal: **http://localhost:5173/admin/login**

---

## Default Administrative Credentials

The database automatically seeds an initial administrative user on first startup:

- **Portal URL**: `/admin/login`
- **Email**: `admin@krblrice.com`
- **Password**: `Admin@123456`

---

## Production Deployment: Private VPS (Recommended)

Running the entire stack on a **Private VPS** (e.g. \$10–\$20/mo Hetzner or DigitalOcean Droplet) is dramatically simpler and more cost-effective than AWS managed services:

### 1. Launch on VPS via Docker Compose

```bash
# Clone repository onto VPS
git clone <your-github-repo-url>
cd <repo-folder>

# Start all containers in the background
docker compose up -d --build
```

### 2. Configure Domain & Cloudflare (Free Global CDN + SSL)

1. Point your domain's Nameservers to **Cloudflare**.
2. In Cloudflare DNS settings, add an **A Record**:
   - `Type`: `A`
   - `Name`: `@` (and `www`)
   - `IPv4 address`: `<Your VPS Public IP>`
   - `Proxy status`: **Proxied (Orange Cloud)**
3. In Cloudflare SSL/TLS settings, set SSL mode to **Full (Strict)**.
4. Your website is immediately live with HTTPS, edge DDoS mitigation, and global asset caching!
