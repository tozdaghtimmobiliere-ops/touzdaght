import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { requireAuth, requireSuperAdmin } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get buildings by project
router.get('/', async (req, res) => {
  try {
    const { project } = req.query

    if (!project) {
      return res.status(400).json({ error: 'Project ID is required' })
    }

    const buildings = await prisma.building.findMany({
      where: { projectId: parseInt(project as string) },
      include: {
        _count: {
          select: { apartments: true },
        },
      },
      orderBy: { name: 'asc' },
    })

    res.json({
      success: true,
      data: buildings,
    })
  } catch (error) {
    console.error('Get buildings error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get building by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const building = await prisma.building.findUnique({
      where: { id: parseInt(id) },
      include: {
        apartments: {
          orderBy: [{ floor: 'asc' }, { unitNumber: 'asc' }],
        },
        project: {
          select: { name: true, slug: true },
        },
      },
    })

    if (!building) {
      return res.status(404).json({ error: 'Building not found' })
    }

    res.json({
      success: true,
      data: building,
    })
  } catch (error) {
    console.error('Get building error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create building (super admin only)
router.post('/', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { projectId, name, floorsCount, apartmentsPerFloor, totalSurface } = req.body

    const building = await prisma.building.create({
      data: {
        projectId: parseInt(projectId),
        name,
        floorsCount: parseInt(floorsCount),
        apartmentsPerFloor: parseInt(apartmentsPerFloor),
        totalSurface: totalSurface ? parseFloat(totalSurface) : null,
      },
    })

    // Auto-generate apartments
    const apartments = []
    for (let floor = 0; floor < floorsCount; floor++) {
      for (let unit = 1; unit <= apartmentsPerFloor; unit++) {
        apartments.push({
          buildingId: building.id,
          floor,
          unitNumber: unit,
          status: 'available',
        })
      }
    }

    await prisma.apartment.createMany({
      data: apartments,
    })

    res.json({
      success: true,
      data: building,
      message: 'Building created with apartments',
    })
  } catch (error) {
    console.error('Create building error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update building (super admin only)
router.put('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { name, floorsCount, apartmentsPerFloor, totalSurface } = req.body

    const building = await prisma.building.update({
      where: { id: parseInt(id) },
      data: {
        name,
        floorsCount: floorsCount ? parseInt(floorsCount) : undefined,
        apartmentsPerFloor: apartmentsPerFloor ? parseInt(apartmentsPerFloor) : undefined,
        totalSurface: totalSurface ? parseFloat(totalSurface) : undefined,
      },
    })

    res.json({
      success: true,
      data: building,
      message: 'Building updated successfully',
    })
  } catch (error) {
    console.error('Update building error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete building (super admin only)
router.delete('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params

    await prisma.building.delete({
      where: { id: parseInt(id) },
    })

    res.json({
      success: true,
      message: 'Building deleted successfully',
    })
  } catch (error) {
    console.error('Delete building error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
