'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react'
import { projectsApi, uploadApi } from '@/lib/api'

export default function MediaPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [images, setImages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedProject) {
      fetchImages(selectedProject)
    }
  }, [selectedProject])

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.getAll()
      setProjects(response.data.data || [])
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching projects:', error)
      setIsLoading(false)
    }
  }

  const fetchImages = async (projectId: number) => {
    try {
      const response = await projectsApi.getImages(projectId)
      setImages(response.data.data || [])
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    if (!e.target.files || !selectedProject) return

    setUploading(true)
    try {
      const files = Array.from(e.target.files)
      const uploadPromises = files.map(async (file) => {
        const response = await uploadApi.uploadImage(file)
        const { url } = response.data.data
        return uploadApi.saveProjectImage({
          projectId: selectedProject,
          url,
          category,
          label: category === 'plan' ? 'مخطط' : category === 'chantier' ? 'ورش' : 'صورة',
        })
      })

      await Promise.all(uploadPromises)
      fetchImages(selectedProject)
    } catch (error) {
      console.error('Error uploading images:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (imageId: number) => {
    if (!confirm('هل أنت متأكد من حذف هذه الصورة؟')) return
    try {
      await uploadApi.deleteImage(imageId)
      if (selectedProject) {
        fetchImages(selectedProject)
      }
    } catch (error) {
      console.error('Error deleting image:', error)
    }
  }

  const planImages = images.filter((img) => img.category === 'plan')
  const chantierImages = images.filter((img) => img.category === 'chantier')
  const otherImages = images.filter((img) => !['plan', 'chantier'].includes(img.category))

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="font-almarai font-bold text-2xl text-text-primary">إدارة الصور</h2>
      </div>

      {/* Project Selector */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <label className="block text-sm font-semibold text-text-primary mb-3">اختر المشروع</label>
        <select
          value={selectedProject || ''}
          onChange={(e) => setSelectedProject(Number(e.target.value))}
          className="form-input max-w-md"
        >
          <option value="">اختر مشروعاً</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name} - {project.city.name}
            </option>
          ))}
        </select>
      </div>

      {selectedProject && (
        <>
          {/* Upload Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-text-primary mb-4">رفع صور جديدة</h3>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary-dark transition-colors">
                <Upload className="w-5 h-5" />
                رفع مخططات
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e, 'plan')}
                  disabled={uploading}
                />
              </label>
              <label className="flex items-center gap-2 px-4 py-3 bg-accent text-secondary rounded-lg cursor-pointer hover:bg-accent-light transition-colors">
                <Upload className="w-5 h-5" />
                رفع صور الأشغال
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e, 'chantier')}
                  disabled={uploading}
                />
              </label>
            </div>
            {uploading && (
              <p className="text-primary mt-4">جاري الرفع...</p>
            )}
          </div>

          {/* Images Grid */}
          <div className="space-y-8">
            {/* Plan Images */}
            {planImages.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-text-primary mb-4">المخططات ({planImages.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {planImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <div className="aspect-square bg-background-alt rounded-lg overflow-hidden">
                        {image.url ? (
                          <img src={image.url} alt={image.label} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-text-muted" />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="absolute top-2 right-2 p-2 bg-status-sold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {image.label && (
                        <p className="text-xs text-text-muted mt-1 text-center">{image.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chantier Images */}
            {chantierImages.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-text-primary mb-4">صور الأشغال ({chantierImages.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {chantierImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <div className="aspect-square bg-background-alt rounded-lg overflow-hidden">
                        {image.url ? (
                          <img src={image.url} alt={image.label} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-text-muted" />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="absolute top-2 right-2 p-2 bg-status-sold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {image.label && (
                        <p className="text-xs text-text-muted mt-1 text-center">{image.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {images.length === 0 && (
              <div className="bg-white rounded-xl p-12 shadow-sm text-center">
                <ImageIcon className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <p className="text-text-muted">لا توجد صور لهذا المشروع</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
