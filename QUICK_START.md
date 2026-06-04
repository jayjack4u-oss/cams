# CAMS - Quick Reference

## 🚀 Start CAMS in 3 Steps

```bash
# 1. Clone
git clone https://github.com/jayjack4u-oss/cams.git && cd cams

# 2. Setup
cp backend/.env.example backend/.env && cp frontend/.env.example frontend/.env

# 3. Run
docker-compose up -d
```

**Wait 30 seconds, then:**
- 🌐 Frontend: http://localhost:3000
- 📡 Backend: http://localhost:5000
- 🔑 Keycloak: http://localhost:8080

---

## 🔐 Login

```
Email:    admin@tma.com
Password: admin123
```

---

## 📊 System Architecture

```
┌─────────────────────────────┐
│   React Frontend (3000)      │
└────────┬────────────────────┘
         │
┌────────▼────────────────────┐
│   Nginx Load Balancer (80)  │
└────────┬────────────────────┘
         │
┌────────▼────────────────────┐
│   Express Backend (5000)    │
└────────┬────────────────────┘
         │
    ┌────┴─────┬──────────┐
    │           │          │
┌───▼──┐  ┌────▼───┐  ┌──▼──────┐
│ PG   │  │ Redis  │  │Keycloak │
│ DB   │  │ Cache  │  │  Auth   │
└──────┘  └────────┘  └─────────┘
```

---

## 🎯 User Roles & Permissions

| Role | Can Do |
|------|--------|
| **Admin** | Manage all users, system settings |
| **Applicant** | Submit applications, upload documents |
| **QA Officer** | Review applications, verify documents |
| **Assessor** | Schedule & conduct assessments |
| **HOD** | Approve/reject after QA |
| **HQC** | Final approval, issue certificates |

---

## 📋 CA Application Workflow

```
Applicant Creates → QA Reviews → Assessor Tests → HOD Approves → HQC Issues → Certificate Active
```

**Timeline:** ~9-13 days

---

## 📁 Repository Structure

```
cams/
├── backend/          # Node.js API (11 routes)
├── frontend/         # React SPA (8 pages)
├── docker/           # Nginx, configs
├── database/         # Schema, init.sql
├── docs/             # API, Deployment, User Guide
├── docker-compose.yml
└── README.md
```

---

## 🔧 Common Commands

```bash
# View logs
docker-compose logs -f backend

# Restart services
docker-compose restart

# Stop all
docker-compose down

# Full restart
docker-compose down -v && docker-compose up -d

# Database backup
docker exec cams-postgres pg_dump -U postgres cams_db > backup.sql

# Check health
curl http://localhost:5000/health
```

---

## 📞 API Quick Reference

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@tma.com","password":"admin123"}'

# Get Applications
curl http://localhost:5000/api/applications \
  -H "Authorization: Bearer YOUR_TOKEN"

# Create Application
curl -X POST http://localhost:5000/api/applications \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"application_type":"Initial Issue"}'
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't access frontend | Check if http://localhost:3000 loads |
| Backend connection error | Run `docker-compose logs backend` |
| Database locked | Stop services: `docker-compose down` |
| Port already in use | Change port in docker-compose.yml |
| Slow performance | Check `docker stats` for resource usage |

---

## 📊 Dashboard Metrics

- 📈 Total Applications
- ⏳ Pending Reviews
- ✅ Active Certifications
- ⚠️ Expiring Soon
- 🔄 Pending Approvals

---

## 🔒 Security

- ✅ JWT authentication
- ✅ Role-based access
- ✅ Rate limiting
- ✅ HTTPS ready
- ✅ Audit logging

---

## 📦 Tech Stack

**Frontend:** React 18 + Material-UI  
**Backend:** Node.js + Express  
**Database:** PostgreSQL  
**Cache:** Redis  
**Auth:** Keycloak  
**Container:** Docker + Compose

---

## 📚 Documentation

- [API Docs](docs/API.md)
- [Database Schema](docs/DATABASE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [User Guide](docs/USER_GUIDE.md)

---

## ⚡ Performance

- Handles 50-200 concurrent users
- Response time: <500ms
- Database: 100+ connections
- Caching: Redis layer

---

## 📜 License

Proprietary - TMA Internal Use Only

---

## 👥 Support

**Issues?** Check documentation or contact admin@tma.com

---

**Status:** ✅ Production Ready | **Version:** 1.0.0-MVP | **Updated:** June 2026
