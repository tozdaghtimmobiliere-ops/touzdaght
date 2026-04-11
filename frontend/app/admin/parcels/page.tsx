'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Check, X } from 'lucide-react'
import { projectsApi, parcelsApi } from '@/lib/api'
import { cn } from '@/lib/utils'

interface Project {
  id: number
  name: string
  city: { name: string }
  type: string
  parcels: any[]
}

export default function ParcelsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [parcels, setParcels] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedParcel, setSelectedParcel] = useState<any>(null)
  const [newStatus, setNewStatus] = useState('')
  const [filters, setFilters] = useState({ zone: '', usage: '' })

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedProject) {
      fetchParcels(selectedProject)
    }
  }, [selectedProject])

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.getAll()
      const projectsWithParcels = response.data.data.filter((p: any) => p.type === 'lotissement')
      setProjects(projectsWithParcels)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching projects:', error)
      setIsLoading(false)
    }
  }

  const fetchParcels = async (projectId: number) => {
    try {
      const response = await parcelsApi.getByProject(projectId)
      setParcels(response.data.data)
    } catch (error) {
      console.error('Error fetching parcels:', error)
    }
  }

  const handleParcelClick = (parcel: any) => {
    setSelectedParcel(parcel)
    setNewStatus(parcel.status)
    setModalOpen(true)
  }

  const handleStatusChange = async () => {
    if (!selectedParcel || !newStatus) return

    try {
      await parcelsApi.updateStatus(selectedParcel.id, newStatus)
      if (selectedProject) {
        fetchParcels(selectedProject)
      }
      setModalOpen(false)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const filteredParcels = parcels.filter((parcel) => {
    if (filters.zone && parcel.zoneType !== filters.zone) return false
    if (filters.usage && parcel.usageType !== filters.usage) return false
    return true
  })

  // Group by zone
  const parcelsByZone = filteredParcels.reduce((acc: any, parcel) => {
    if (!acc[parcel.zoneType]) acc[parcel.zoneType] = []
    acc[parcel.zoneType].push(parcel)
    return acc
  }, {})

  const zones = Array.from(new Set(parcels.map((p) => p.zoneType).filter(Boolean))) as string[]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
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

      {/* Filters */}
      {selectedProject && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap gap-4">
            <select
              value={filters.zone}
              onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
              className="form-input w-auto"
            >
              <option value="">جميع المناطق</option>
              {zones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
            <select
              value={filters.usage}
              onChange={(e) => setFilters({ ...filters, usage: e.target.value })}
              className="form-input w-auto"
            >
              <option value="">جميع الاستخدامات</option>
              <option value="residential">سكني</option>
              <option value="commercial">تجاري</option>
            </select>
            <button
              onClick={() => setFilters({ zone: '', usage: '' })}
              className="px-4 py-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
            >
              إعادة ضبط
            </button>
          </div>
        </div>
      )}

      {/* Parcels Grid */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {Object.entries(parcelsByZone).map(([zone, zoneParcels]: [string, any]) => (
            <div key={zone} className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-almarai font-bold text-xl text-text-primary mb-4">
                منطقة {zone}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {zoneParcels.map((parcel: any) => (
                  <button
                    key={parcel.id}
                    onClick={() => handleParcelClick(parcel)}
                    className={cn(
                      'p-4 rounded-lg border-2 text-center transition-all hover:scale-105',
                      parcel.status === 'available' && 'border-status-available bg-status-available/5',
                      parcel.status === 'sold' && 'border-status-sold bg-status-sold/5',
                      parcel.status === 'reserved' && 'border-status-reserved bg-status-reserved/5'
                    )}
                  >
                    <div className="font-bold text-lg text-text-primary">{parcel.parcelNumber}</div>
                    <div className="text-sm text-text-muted">{parcel.parcelCode}</div>
                    <div className="text-sm text-text-secondary mt-1">{parcel.surface} م²</div>
                    <div
                      className={cn(
                        'mt-2 px-2 py-1 rounded text-xs font-semibold text-white',
                        parcel.status === 'available' && 'bg-status-available',
                        parcel.status === 'sold' && 'bg-status-sold',
                        parcel.status === 'reserved' && 'bg-status-reserved'
                      )}
                    >
                      {parcel.status === 'available' && 'متاحة'}
                      {parcel.status === 'sold' && 'مباعة'}
                      {parcel.status === 'reserved' && 'محجوزة'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Legend */}
      {selectedProject && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-status-available" />
              <span className="text-text-secondary text-sm">متاحة</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-status-sold" />
              <span className="text-text-secondary text-sm">مباعة</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-status-reserved" />
              <span className="text-text-secondary text-sm">محجوزة</span>
            </div>
          </div>
        </div>
      )}

      {/* Status Change Modal */}
      {modalOpen && selectedParcel && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="font-almarai font-bold text-xl text-text-primary mb-4">
              تغيير حالة البقعة
            </h3>
            <p className="text-text-secondary mb-6">
              البقعة رقم {selectedParcel.parcelNumber} ({selectedParcel.parcelCode}) - منطقة {selectedParcel.zoneType}
            </p>

            <div className="space-y-3 mb-6">
              <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-background-alt">
                <input
                  type="radio"
                  name="status"
                  value="available"
                  checked={newStatus === 'available'}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-4 h-4 text-primary"
                />
                <span className="w-4 h-4 rounded-full bg-status-available" />
                <span>متاحة</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-background-alt">
                <input
                  type="radio"
                  name="status"
                  value="sold"
                  checked={newStatus === 'sold'}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-4 h-4 text-primary"
                />
                <span className="w-4 h-4 rounded-full bg-status-sold" />
                <span>مباعة</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-background-alt">
                <input
                  type="radio"
                  name="status"
                  value="reserved"
                  checked={newStatus === 'reserved'}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-4 h-4 text-primary"
                />
                <span className="w-4 h-4 rounded-full bg-status-reserved" />
                <span>محجوزة</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 px-4 py-3 border border-border rounded-lg hover:bg-background-alt transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={handleStatusChange}
                className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                تأكيد
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
