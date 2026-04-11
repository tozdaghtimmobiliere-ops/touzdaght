import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { requireAuth, requireAdmin } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get parcels by project
router.get('/', async (req, res) => {
  try {
    const { project, zone, usage } = req.query

    if (!project) {
      return res.status(400).json({ error: 'Project ID is required' })
    }

    const where: any = { projectId: parseInt(project as string) }
    if (zone) where.zoneType = zone
    if (usage) where.usageType = usage

    const parcels = await prisma.parcel.findMany({
      where,
      orderBy: [{ zoneType: 'asc' }, { parcelNumber: 'asc' }],
    })

    res.json({
      success: true,
      data: parcels,
    })
  } catch (error) {
    console.error('Get parcels error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get parcel by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const parcel = await prisma.parcel.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: {
          select: { name: true, slug: true, city: true },
        },
      },
    })

    if (!parcel) {
      return res.status(404).json({ error: 'Parcel not found' })
    }

    res.json({
      success: true,
      data: parcel,
    })
  } catch (error) {
    console.error('Get parcel error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update parcel status (admin only)
router.patch('/:id/status', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!['available', 'sold', 'reserved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' })
    }

    const oldParcel = await prisma.parcel.findUnique({
      where: { id: parseInt(id) },
    })

    const parcel = await prisma.parcel.update({
      where: { id: parseInt(id) },
      data: { status },
    })

    // Log the change
    await prisma.reservationLog.create({
      data: {
        adminId: req.user!.userId,
        unitType: 'parcel',
        unitId: parseInt(id),
        oldStatus: oldParcel?.status || 'unknown',
        newStatus: status,
      },
    })

    res.json({
      success: true,
      data: parcel,
      message: 'Status updated successfully',
    })
  } catch (error) {
    console.error('Update parcel status error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create parcel (super admin only)
router.post('/', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { projectId, parcelNumber, parcelCode, usageType, zoneType, surface, price } = req.body

    const parcel = await prisma.parcel.create({
      data: {
        projectId: parseInt(projectId),
        parcelNumber: parseInt(parcelNumber),
        parcelCode,
        usageType,
        zoneType,
        surface: surface ? parseFloat(surface) : null,
        price: price ? parseFloat(price) : null,
        status: 'available',
      },
    })

    res.json({
      success: true,
      data: parcel,
      message: 'Parcel created successfully',
    })
  } catch (error) {
    console.error('Create parcel error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update parcel (admin only)
router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { parcelNumber, parcelCode, usageType, zoneType, surface, price, status } = req.body

    const parcel = await prisma.parcel.update({
      where: { id: parseInt(id) },
      data: {
        parcelNumber: parcelNumber ? parseInt(parcelNumber) : undefined,
        parcelCode,
        usageType,
        zoneType,
        surface: surface ? parseFloat(surface) : undefined,
        price: price ? parseFloat(price) : undefined,
        status,
      },
    })

    res.json({
      success: true,
      data: parcel,
      message: 'Parcel updated successfully',
    })
  } catch (error) {
    console.error('Update parcel error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete parcel (super admin only)
router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params

    await prisma.parcel.delete({
      where: { id: parseInt(id) },
    })

    res.json({
      success: true,
      message: 'Parcel deleted successfully',
    })
  } catch (error) {
    console.error('Delete parcel error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
