'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, MapPin } from 'lucide-react'
import { citiesApi } from '@/lib/api'

export default function CitiesPage() {
  const [cities, setCities] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingCity, setEditingCity] = useState<any>(null)
  const [formData, setFormData] = useState({ name: '', slug: '' })

  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = async () => {
    try {
      const response = await citiesApi.getAll()
      setCities(response.data.data || [])
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching cities:', error)
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingCity) {
        await citiesApi.update(editingCity.id, formData)
      } else {
        await citiesApi.create(formData)
      }
      fetchCities()
      setModalOpen(false)
      setEditingCity(null)
      setFormData({ name: '', slug: '' })
    } catch (error) {
      console.error('Error saving city:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('هل أنت متأكد من حذف هذه المدينة؟')) return
    try {
      await citiesApi.delete(id)
      fetchCities()
    } catch (error) {
      console.error('Error deleting city:', error)
      alert('لا يمكن حذف المدينة لأنها تحتوي على مشاريع')
    }
  }

  const openEditModal = (city: any) => {
    setEditingCity(city)
    setFormData({ name: city.name, slug: city.slug })
    setModalOpen(true)
  }

  const openCreateModal = () => {
    setEditingCity(null)
    setFormData({ name: '', slug: '' })
    setModalOpen(true)
  }

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
        <h2 className="font-almarai font-bold text-2xl text-text-primary">إدارة المدن</h2>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-5 h-5" />
          إضافة مدينة جديدة
        </button>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{city.name}</h3>
                  <p className="text-text-muted text-sm">{city.slug}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => openEditModal(city)}
                  className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(city.id)}
                  className="p-2 text-status-sold hover:bg-status-sold/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-text-secondary text-sm">
                عدد المشاريع: <span className="font-semibold">{city._count?.projects || 0}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="font-almarai font-bold text-xl text-text-primary mb-6">
              {editingCity ? 'تعديل المدينة' : 'إضافة مدينة جديدة'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">اسم المدينة</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input w-full"
                  placeholder="مثال: تيزنيت"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">الرمز (Slug)</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="form-input w-full"
                  placeholder="مثال: tiznit"
                />
                <p className="text-text-muted text-xs mt-1">يستخدم في الرابط، مثل: /projects/tiznit</p>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false)
                    setEditingCity(null)
                  }}
                  className="flex-1 px-4 py-3 border border-border rounded-lg hover:bg-background-alt transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  {editingCity ? 'حفظ التغييرات' : 'إضافة'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
