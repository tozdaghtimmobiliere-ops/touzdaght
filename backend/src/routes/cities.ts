import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { requireAuth, requireSuperAdmin } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get all cities (public)
router.get('/', async (req, res) => {
  try {
    const cities = await prisma.city.findMany({
      include: {
        _count: {
          select: { projects: true },
        },
      },
      orderBy: { name: 'asc' },
    })

    res.json({
      success: true,
      data: cities,
    })
  } catch (error) {
    console.error('Get cities error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get city by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params

    const city = await prisma.city.findUnique({
      where: { slug },
      include: {
        projects: {
          select: {
            id: true,
            name: true,
            slug: true,
            type: true,
            status: true,
            mainImage: true,
            _count: {
              select: { buildings: true, parcels: true },
            },
          },
        },
      },
    })

    if (!city) {
      return res.status(404).json({ error: 'City not found' })
    }

    res.json({
      success: true,
      data: city,
    })
  } catch (error) {
    console.error('Get city error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create city (super admin only)
router.post('/', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { name, slug, heroImage } = req.body

    const city = await prisma.city.create({
      data: {
        name,
        slug,
        heroImage,
      },
    })

    res.json({
      success: true,
      data: city,
      message: 'City created successfully',
    })
  } catch (error) {
    console.error('Create city error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update city (super admin only)
router.put('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { name, slug, heroImage } = req.body

    const city = await prisma.city.update({
      where: { id: parseInt(id) },
      data: {
        name,
        slug,
        heroImage,
      },
    })

    res.json({
      success: true,
      data: city,
      message: 'City updated successfully',
    })
  } catch (error) {
    console.error('Update city error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete city (super admin only)
router.delete('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params

    // Check if city has projects
    const city = await prisma.city.findUnique({
      where: { id: parseInt(id) },
      include: { projects: true },
    })

    if (city?.projects.length) {
      return res.status(400).json({
        error: 'Cannot delete city with existing projects',
      })
    }

    await prisma.city.delete({
      where: { id: parseInt(id) },
    })

    res.json({
      success: true,
      message: 'City deleted successfully',
    })
  } catch (error) {
    console.error('Delete city error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
