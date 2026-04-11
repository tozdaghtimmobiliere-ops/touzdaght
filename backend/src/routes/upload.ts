import { Router } from 'express'
import { v2 as cloudinary } from 'cloudinary'
const CloudinaryStorage = require('multer-storage-cloudinary')
import multer from 'multer'
import { requireAuth, requireSuperAdmin } from '../middleware/auth'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Configure storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'tozdaght',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ quality: 'auto', fetch_format: 'auto' }],
  } as any,
})

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
})

// Upload single image
router.post('/image', requireAuth, requireSuperAdmin, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' })
    }

    const file = req.file as any

    res.json({
      success: true,
      data: {
        url: file.path,
        publicId: file.filename,
      },
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Upload failed' })
  }
})

// Upload multiple images
router.post('/images', requireAuth, requireSuperAdmin, upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images provided' })
    }

    const files = req.files as any[]
    const urls = files.map(file => ({
      url: file.path,
      publicId: file.filename,
    }))

    res.json({
      success: true,
      data: urls,
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Upload failed' })
  }
})

// Save project image to database
router.post('/project-image', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { projectId, url, category, label, order } = req.body

    const image = await prisma.projectImage.create({
      data: {
        projectId: parseInt(projectId),
        url,
        category,
        label,
        order: order || 0,
      },
    })

    res.json({
      success: true,
      data: image,
      message: 'Image saved successfully',
    })
  } catch (error) {
    console.error('Save image error:', error)
    res.status(500).json({ error: 'Failed to save image' })
  }
})

// Delete image from Cloudinary and database
router.delete('/:id', requireAuth, requireSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params

    const image = await prisma.projectImage.findUnique({
      where: { id: parseInt(id) },
    })

    if (!image) {
      return res.status(404).json({ error: 'Image not found' })
    }

    // Delete from Cloudinary
    const publicId = image.url.split('/').pop()?.split('.')[0]
    if (publicId) {
      await cloudinary.uploader.destroy(`tozdaght/${publicId}`)
    }

    // Delete from database
    await prisma.projectImage.delete({
      where: { id: parseInt(id) },
    })

    res.json({
      success: true,
      message: 'Image deleted successfully',
    })
  } catch (error) {
    console.error('Delete image error:', error)
    res.status(500).json({ error: 'Failed to delete image' })
  }
})

export default router
