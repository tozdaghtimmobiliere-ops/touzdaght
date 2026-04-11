# توزدغت للعقار والبناء | Tozdaght Immobilière

## 🏠 نظرة عامة | Overview

موقع عقاري متكامل لشركة توزدغت للعقار والبناء، شركة مغربية متخصصة في مجال العقار والبناء مقرها تيزنيت.

Full-stack real estate website for Tozdaght Immobilière, a Moroccan company specialized in real estate and construction based in Tiznit.

## 🛠️ التقنيات المستخدمة | Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Embla Carousel** (Sliders)
- **Radix UI** (Components)

### Backend
- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **Cloudinary** (Image uploads)

## 📁 هيكل المشروع | Project Structure

```
tozdaght/
├── frontend/          # Next.js 14 Frontend
│   ├── app/          # App Router
│   ├── components/   # React Components
│   ├── lib/          # Utilities & API
│   └── public/       # Static assets
├── backend/          # Express.js Backend
│   ├── src/
│   │   ├── routes/   # API Routes
│   │   ├── middleware/
│   │   └── utils/
├── database/         # Prisma Schema & Migrations
│   └── prisma/
└── package.json      # Root package.json
```

## 🚀 التثبيت والتشغيل | Installation & Setup

### 1. Clone the repository

```bash
cd tozdaght
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install

# Install database dependencies
cd ../database && npm install
```

### 3. Environment Variables

Create `.env` files:

**Root `.env`:**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/tozdaght
JWT_SECRET=your_super_secret_jwt_key_min_64_characters
JWT_REFRESH_SECRET=your_refresh_secret_key_min_64_characters
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WHATSAPP=212702060323
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SUPER_ADMIN_USER=nezha@touzdght
SUPER_ADMIN_PASS=nezhatouzdght2026
ADMIN_USER=rachid@touzdght
ADMIN_PASS=rachidtouzdght2026
PORT=5000
NODE_ENV=development
```

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WHATSAPP=212702060323
```

**Backend `.env`:**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/tozdaght
JWT_SECRET=your_super_secret_jwt_key
JWT_REFRESH_SECRET=your_refresh_secret
PORT=5000
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Database Setup

```bash
# Generate Prisma client
cd database
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed the database
npx prisma db seed
```

### 5. Run the application

```bash
# From root directory - Run both frontend and backend
npm run dev

# Or run separately:
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

The application will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 👤 بيانات الدخول | Login Credentials

### Super Admin
- **Username:** `nezha@touzdght`
- **Password:** `nezhatouzdght2026`
- **Access:** Full CRUD operations

### Admin
- **Username:** `rachid@touzdght`
- **Password:** `rachidtouzdght2026`
- **Access:** Manage units and parcels status only

## 📱 الميزات الرئيسية | Key Features

### Frontend
- ✅ **RTL Support** - Arabic (primary), French, English
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Hero Slider** - Full-screen image carousel
- ✅ **Project Listings** - Filter by city and type
- ✅ **Apartment Status** - Visual floor plans with status colors
- ✅ **Parcel Management** - Grid view for lotissement projects
- ✅ **WhatsApp Integration** - Direct booking inquiries
- ✅ **Contact Form** - Customer inquiries

### Backend
- ✅ **REST API** - Complete CRUD operations
- ✅ **JWT Authentication** - Secure login system
- ✅ **Role-based Access** - Super Admin & Admin roles
- ✅ **Image Upload** - Cloudinary integration
- ✅ **Database Seeding** - Pre-populated project data

### Admin Panel
- ✅ **Dashboard** - Statistics and overview
- ✅ **Project Management** - CRUD operations (Super Admin)
- ✅ **Unit Management** - Update apartment status
- ✅ **Parcel Management** - Update parcel status
- ✅ **City Management** - Add/edit cities (Super Admin)

## 🗄️ قاعدة البيانات | Database Schema

### Models
- **City** - Cities (Tiznit, Agadir, Ait Melloul, L9li3a)
- **Project** - Real estate projects
- **Building** - Buildings within projects
- **Apartment** - Individual units
- **Parcel** - Land parcels for lotissement
- **Admin** - Admin users
- **ReservationLog** - Status change logs

## 🎨 نظام الألوان | Color System

```css
--primary: #2563EB        /* Blue - Buttons, links */
--primary-dark: #1A4DB8   /* Dark blue - Hover */
--secondary: #0A1628      /* Dark blue - Header, footer */
--accent: #C9A84C         /* Gold - Premium elements */
--background: #FFFFFF     /* White - Page background */
--background-alt: #F0F4FF /* Light blue - Alternate sections */
--status-available: #38A169 /* Green - Available */
--status-sold: #E53E3E    /* Red - Sold */
--status-reserved: #F6AD55 /* Orange - Reserved */
```

## 📂 المسارات | Routes

### Public Routes
- `/` - Home
- `/about` - About us
- `/contact` - Contact
- `/projects` - All projects
- `/projects/[city]` - Projects by city
- `/projects/[city]/[slug]` - Project detail

### Admin Routes
- `/admin` - Login
- `/admin/dashboard` - Dashboard (Super Admin)
- `/admin/projects` - Project management (Super Admin)
- `/admin/units` - Unit management
- `/admin/parcels` - Parcel management
- `/admin/media` - Image management (Super Admin)
- `/admin/cities` - City management (Super Admin)

## 🔌 API Endpoints

### Auth
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Cities
- `GET /api/cities` - List cities
- `GET /api/cities/:slug` - Get city by slug
- `POST /api/cities` - Create city (Super Admin)
- `PUT /api/cities/:id` - Update city (Super Admin)
- `DELETE /api/cities/:id` - Delete city (Super Admin)

### Projects
- `GET /api/projects` - List projects
- `GET /api/projects/:slug` - Get project by slug
- `POST /api/projects` - Create project (Super Admin)
- `PUT /api/projects/:id` - Update project (Super Admin)
- `DELETE /api/projects/:id` - Delete project (Super Admin)

### Apartments
- `GET /api/apartments?building=:id` - List apartments
- `PATCH /api/apartments/:id/status` - Update status (Admin)

### Parcels
- `GET /api/parcels?project=:id` - List parcels
- `PATCH /api/parcels/:id/status` - Update status (Admin)

## 🚀 النشر | Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

### Backend (Railway)
```bash
cd backend
railway up
```

### Database (Railway PostgreSQL)
1. Create PostgreSQL database on Railway
2. Update `DATABASE_URL` in environment variables
3. Run migrations

## 📞 التواصل | Contact

**Tozdaght Immobilière**
- **Address:** الشقة 2 الطابق 1 عمارة 34 تجزئة الحرية، حي اليوسفية، تيزنيت
- **Phone:** 0702060323
- **WhatsApp:** [wa.me/212702060323](https://wa.me/212702060323)

## 📄 License

This project is proprietary software for Tozdaght Immobilière.

---

<p align="center">
  <strong>توزدغت للعقار والبناء</strong><br>
  <em>حلول عقارية متكاملة بمعايير عالمية</em>
</p>
