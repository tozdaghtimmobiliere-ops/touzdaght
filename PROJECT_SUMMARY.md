# Tozdaght Immobilière - Project Summary

## 🎯 Project Overview

Complete full-stack real estate website for **Tozdaght Immobilière**, a Moroccan real estate and construction company based in Tiznit.

## 📁 File Structure

```
tozdaght/
├── README.md                          # Main documentation
├── PROJECT_SUMMARY.md                 # This file
├── package.json                       # Root package.json
├── .env.example                       # Environment variables template
├── .gitignore                         # Git ignore rules
│
├── frontend/                          # Next.js 14 Frontend
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── next-env.d.ts
│   │
│   ├── app/                          # App Router
│   │   ├── layout.tsx                # Root layout with fonts & RTL
│   │   ├── globals.css               # Global styles
│   │   ├── page.tsx                  # Home page
│   │   ├──
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx              # All projects listing
│   │   │   └── [city]/
│   │   │       ├── page.tsx          # City projects
│   │   │       └── [slug]/
│   │   │           └── page.tsx      # Project detail with tabs
│   │   └── admin/
│   │       ├── page.tsx              # Admin login
│   │       ├── layout.tsx            # Admin layout with sidebar
│   │       ├── dashboard/
│   │       │   └── page.tsx          # Admin dashboard
│   │       ├── projects/
│   │       │   └── page.tsx          # Project management
│   │       ├── units/
│   │       │   └── page.tsx          # Unit status management
│   │       ├── parcels/
│   │       │   └── page.tsx          # Parcel status management
│   │       ├── cities/
│   │       │   └── page.tsx          # City management
│   │       └── media/
│   │           └── page.tsx          # Image upload management
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx            # Site header with navigation
│   │   │   └── footer.tsx            # Site footer
│   │   ├── sections/
│   │   │   ├── apartment-status.tsx  # Apartment status display
│   │   │   ├── parcel-status.tsx     # Parcel status display
│   │   │   ├── image-slider.tsx      # Image carousel
│   │   │   └── booking-form.tsx      # Booking form
│   │   ├── ui/
│   │   │   └── tabs.tsx              # Tabs component
│   │   └── providers.tsx             # Context providers
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utility functions
│   │   └── api.ts                    # API client
│   │
│   └── public/                       # Static assets
│       └── images/                   # Image assets
│
├── backend/                          # Express.js Backend
│   ├── package.json
│   ├── tsconfig.json
│   │
│   └── src/
│       ├── index.ts                  # Server entry point
│       ├── types/
│       │   └── index.ts              # TypeScript types
│       ├── utils/
│       │   └── jwt.ts                # JWT utilities
│       ├── middleware/
│       │   └── auth.ts               # Auth middleware
│       └── routes/
│           ├── auth.ts               # Auth routes
│           ├── cities.ts             # City routes
│           ├── projects.ts           # Project routes
│           ├── buildings.ts          # Building routes
│           ├── apartments.ts         # Apartment routes
│           ├── parcels.ts            # Parcel routes
│           └── upload.ts             # Upload routes
│
└── database/                         # Prisma Database
    ├── package.json
    └── prisma/
        ├── schema.prisma             # Database schema
        └── seed.ts                   # Seed data
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install all dependencies
npm install
cd frontend && npm install
cd ../backend && npm install
cd ../database && npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### 3. Setup Database

```bash
cd database
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run Development Servers

```bash
# From root directory
npm run dev

# Or separately:
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

## 📊 Features Implemented

### Frontend
- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ RTL Support (Arabic primary)
- ✅ Multilingual (AR/FR/EN)
- ✅ Responsive design
- ✅ Hero slider with autoplay
- ✅ Project listings with filters
- ✅ Apartment status visualization
- ✅ Parcel grid for lotissement
- ✅ WhatsApp integration
- ✅ Contact form
- ✅ Animations with Framer Motion

### Backend
- ✅ Express.js REST API
- ✅ TypeScript
- ✅ JWT Authentication
- ✅ Role-based access (Super Admin / Admin)
- ✅ Prisma ORM
- ✅ PostgreSQL database
- ✅ Cloudinary image upload
- ✅ Complete CRUD operations

### Admin Panel
- ✅ Login with JWT
- ✅ Dashboard with statistics
- ✅ Project management (Super Admin)
- ✅ Unit status management
- ✅ Parcel status management
- ✅ City management (Super Admin)
- ✅ Image upload management

### Database
- ✅ Cities table
- ✅ Projects table
- ✅ Buildings table
- ✅ Apartments table
- ✅ Parcels table
- ✅ Admins table
- ✅ Reservation logs
- ✅ Complete seed data

## 🔐 Default Login Credentials

### Super Admin
- **Username:** `nezha@touzdght`
- **Password:** `nezhatouzdght2026`

### Admin
- **Username:** `rachid@touzdght`
- **Password:** `rachidtouzdght2026`

## 🌐 API Endpoints

### Auth
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### Cities
- `GET /api/cities`
- `GET /api/cities/:slug`
- `POST /api/cities` (Super Admin)
- `PUT /api/cities/:id` (Super Admin)
- `DELETE /api/cities/:id` (Super Admin)

### Projects
- `GET /api/projects`
- `GET /api/projects/:slug`
- `POST /api/projects` (Super Admin)
- `PUT /api/projects/:id` (Super Admin)
- `DELETE /api/projects/:id` (Super Admin)

### Apartments
- `GET /api/apartments?building=:id`
- `PATCH /api/apartments/:id/status` (Admin)

### Parcels
- `GET /api/parcels?project=:id`
- `PATCH /api/parcels/:id/status` (Admin)

### Upload
- `POST /api/upload/image` (Super Admin)
- `POST /api/upload/images` (Super Admin)
- `DELETE /api/upload/:id` (Super Admin)

## 📱 Pages

### Public
- `/` - Home with hero slider
- `/about` - About us
- `/contact` - Contact form
- `/projects` - All projects
- `/projects/[city]` - Projects by city
- `/projects/[city]/[slug]` - Project detail

### Admin
- `/admin` - Login
- `/admin/dashboard` - Dashboard
- `/admin/projects` - Project management
- `/admin/units` - Unit management
- `/admin/parcels` - Parcel management
- `/admin/cities` - City management
- `/admin/media` - Image management

## 🎨 Design System

### Colors
- Primary: `#2563EB` (Blue)
- Primary Dark: `#1A4DB8`
- Secondary: `#0A1628` (Dark blue)
- Accent: `#C9A84C` (Gold)
- Background: `#FFFFFF`
- Background Alt: `#F0F4FF`
- Status Available: `#38A169` (Green)
- Status Sold: `#E53E3E` (Red)
- Status Reserved: `#F6AD55` (Orange)

### Fonts
- Body: Cairo (400, 600, 700, 800)
- Headings: Almarai (400, 700, 800)

## 📝 Notes

1. **Images:** Placeholder images are used. Replace with actual images in `/frontend/public/images/`

2. **Environment Variables:** Make sure to set all required environment variables before running

3. **Database:** PostgreSQL is required. Update `DATABASE_URL` with your credentials

4. **Cloudinary:** Set up Cloudinary account for image uploads

5. **WhatsApp:** Update phone number in environment variables

## 🛠️ Next Steps

1. Add actual project images
2. Configure Cloudinary credentials
3. Set up production database
4. Deploy to Vercel (frontend) and Railway (backend)
5. Configure custom domain
6. Set up SSL certificates
7. Add Google Analytics
8. Configure SEO meta tags

## 📞 Support

For any issues or questions, please contact:
- **Email:** contact@tozdaght.ma
- **Phone:** 0702060323
- **WhatsApp:** [wa.me/212702060323](https://wa.me/212702060323)

---

**Tozdaght Immobilière** - حلول عقارية متكاملة بمعايير عالمية
