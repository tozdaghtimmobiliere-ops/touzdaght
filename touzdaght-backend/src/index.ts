import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

import authRoutes from './routes/auth'
import cityRoutes from './routes/cities'
import projectRoutes from './routes/projects'
import buildingRoutes from './routes/buildings'
import apartmentRoutes from './routes/apartments'
import parcelRoutes from './routes/parcels'
import uploadRoutes from './routes/upload'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000


// Security middleware
app.use(helmet())
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:3000',
      'https://touzdaght.vercel.app',
      'https://touzdaght-frontend.vercel.app',
    ]
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 attempts per minute
  message: { error: 'Too many login attempts, please try again later' },
})

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authLimiter, authRoutes)
app.use('/api/cities', cityRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/buildings', buildingRoutes)
app.use('/api/apartments', apartmentRoutes)
app.use('/api/parcels', parcelRoutes)
app.use('/api/upload', uploadRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Keep-alive ping
const BACKEND_URL = process.env.RAILWAY_PUBLIC_DOMAIN 
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` 
  : `http://localhost:${PORT}`

setInterval(async () => {
  try {
    await fetch(`${BACKEND_URL}/api/health`)
    console.log('Keep-alive ping sent')
  } catch (error) {
    console.error('Keep-alive ping failed:', error)
  }
}, 5 * 60 * 1000) // every 5 minutes

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
  })
}

export default app
