import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { requireAuth, requireAdmin } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get apartments by building
router.get('/', async (req, res) => {
  try {
    const { building } = req.query

    if (!building) {
      return res.status(400).json({ error: 'Building ID is required' })
    }

    const apartments = await prisma.apartment.findMany({
      where: { buildingId: parseInt(building as string) },
      orderBy: [{ floor: 'asc' }, { unitNumber: 'asc' }],
    })

    res.json({
      success: true,
      data: apartments,
    })
  } catch (error) {
    console.error('Get apartments error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get apartment by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const apartment = await prisma.apartment.findUnique({
      where: { id: parseInt(id) },
      include: {
        building: {
          include: {
            project: {
              select: { name: true, slug: true, city: true },
            },
          },
        },
      },
    })

    if (!apartment) {
      return res.status(404).json({ error: 'Apartment not found' })
    }

    res.json({
      success: true,
      data: apartment,
    })
  } catch (error) {
    console.error('Get apartment error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update apartment status (admin only)
router.patch('/:id/status', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!['available', 'sold', 'reserved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' })
    }

    const oldApartment = await prisma.apartment.findUnique({
      where: { id: parseInt(id) },
    })

    const apartment = await prisma.apartment.update({
      where: { id: parseInt(id) },
      data: { status },
    })

    // Log the change
    await prisma.reservationLog.create({
      data: {
        adminId: req.user!.userId,
        unitType: 'apartment',
        unitId: parseInt(id),
        oldStatus: oldApartment?.status || 'unknown',
        newStatus: status,
      },
    })

    res.json({
      success: true,
      data: apartment,
      message: 'Status updated successfully',
    })
  } catch (error) {
    console.error('Update apartment status error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update apartment (super admin only)
router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { rooms, salons, kitchens, bathrooms, surface, price, status } = req.body

    const apartment = await prisma.apartment.update({
      where: { id: parseInt(id) },
      data: {
        rooms: rooms ? parseInt(rooms) : undefined,
        salons: salons ? parseInt(salons) : undefined,
        kitchens: kitchens ? parseInt(kitchens) : undefined,
        bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
        surface: surface ? parseFloat(surface) : undefined,
        price: price ? parseFloat(price) : undefined,
        status,
      },
    })

    res.json({
      success: true,
      data: apartment,
      message: 'Apartment updated successfully',
    })
  } catch (error) {
    console.error('Update apartment error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
