import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { requireAuth, requireSuperAdmin } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const { city, type, status } = req.query

    const where: any = {}
    if (city) where.city = { slug: city }
    if (type) where.type = type
    if (status) where.status = status

    const projects = await prisma.project.findMany({
      where,
      include: {
        city: {
          select: { name: true, slug: true },
        },
        _count: {
          select: { buildings: true, parcels: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    res.json({
      success: true,
      data: projects,
    })
  } catch (error) {
    console.error('Get projects error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get project by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params

    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        city: true,
        buildings: {
          include: {
            apartments: {
              orderBy: [{ floor: 'asc' }, { unitNumber: 'asc' }],
            },
          },
        },
        parcels: {
          orderBy: [{ zoneType: 'asc' }, { parcelNumber: 'asc' }],
        },
        images: {
          orderBy: { order: 'asc' },
        },
      },
    })

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error('Get project error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create project (super admin only)
router.post('/', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const {
      name,
      slug,
      cityId,
      type,
      status,
      description,
      address,
      totalArea,
      heroImage,
      mainImage,
      whatsapp,
    } = req.body

    const project = await prisma.project.create({
      data: {
        name,
        slug,
        cityId: parseInt(cityId),
        type,
        status: status || 'active',
        description,
        address,
        totalArea: totalArea ? parseFloat(totalArea) : null,
        heroImage,
        mainImage,
        whatsapp: whatsapp || '212702060323',
      },
    })

    res.json({
      success: true,
      data: project,
      message: 'Project created successfully',
    })
  } catch (error) {
    console.error('Create project error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update project (super admin only)
router.put('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const {
      name,
      slug,
      cityId,
      type,
      status,
      description,
      address,
      totalArea,
      heroImage,
      mainImage,
      whatsapp,
    } = req.body

    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        name,
        slug,
        cityId: cityId ? parseInt(cityId) : undefined,
        type,
        status,
        description,
        address,
        totalArea: totalArea ? parseFloat(totalArea) : undefined,
        heroImage,
        mainImage,
        whatsapp,
      },
    })

    res.json({
      success: true,
      data: project,
      message: 'Project updated successfully',
    })
  } catch (error) {
    console.error('Update project error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete project (super admin only)
router.delete('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params

    await prisma.project.delete({
      where: { id: parseInt(id) },
    })

    res.json({
      success: true,
      message: 'Project deleted successfully',
    })
  } catch (error) {
    console.error('Delete project error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get project images
router.get('/:id/images', async (req, res) => {
  try {
    const { id } = req.params
    const { category } = req.query

    const where: any = { projectId: parseInt(id) }
    if (category) where.category = category

    const images = await prisma.projectImage.findMany({
      where,
      orderBy: { order: 'asc' },
    })

    res.json({
      success: true,
      data: images,
    })
  } catch (error) {
    console.error('Get project images error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
