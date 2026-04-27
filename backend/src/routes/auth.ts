import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { generateTokens } from '../utils/jwt'
import { body, validationResult } from 'express-validator'

const router = Router()
const prisma = new PrismaClient()

// Login
router.post('/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
], async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { username, password } = req.body
    const cleanedUsername = username.trim().toLowerCase();
    
    console.log(`Login attempt for: [${cleanedUsername}]`);

    const admin = await prisma.admin.findUnique({
      where: { username: cleanedUsername },
    })

    if (!admin) {
      console.log(`User not found in DB: [${cleanedUsername}]`);
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isValidPassword = await bcrypt.compare(password, admin.passwordHash)
    console.log(`Password match for ${cleanedUsername}: ${isValidPassword}`);

    if (!isValidPassword) {
      console.log(`Password mismatch for ${cleanedUsername}`);
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const tokens = generateTokens({
      userId: admin.id,
      username: admin.username,
      role: admin.role,
    })

    res.json({
      success: true,
      data: {
        user: {
          id: admin.id,
          username: admin.username,
          role: admin.role,
        },
        tokens,
      },
    })
  } catch (error: any) {
    console.error('FULL LOGIN ERROR:', error.message, error.stack)
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    })
  }
})

// Get current user
router.get('/me', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    const { verifyAccessToken } = await import('../utils/jwt')
    const payload = verifyAccessToken(token)

    const admin = await prisma.admin.findUnique({
      where: { id: payload.userId },
      select: { id: true, username: true, role: true },
    })

    if (!admin) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ success: true, data: admin })
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
})

// Logout
router.post('/logout', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Logged out successfully' })
})

// Emergency create admin (REMOVE AFTER USE)
router.get('/create-test-admin', async (req: Request, res: Response) => {
  try {
    const passwordHash = await bcrypt.hash('admin123456', 12)
    const admin = await prisma.admin.upsert({
      where: { username: 'admin@touzdght' },
      update: { passwordHash },
      create: {
        username: 'admin@touzdght',
        passwordHash,
        role: 'super_admin',
      },
    })
    res.json({ success: true, message: 'Admin created/updated', username: admin.username })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router
