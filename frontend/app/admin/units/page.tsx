'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Check, X, AlertCircle } from 'lucide-react'
import { projectsApi, buildingsApi, apartmentsApi } from '@/lib/api'
import { cn, getStatusColor, getFloorName } from '@/lib/utils'

interface Project {
  id: number
  name: string
  city: { name: string }
  buildings: any[]
}

export default function UnitsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedBuilding, setSelectedBuilding] = useState<number | null>(null)
  const [buildings, setBuildings] = useState<any[]>([])
  const [apartments, setApartments] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState<any>(null)
  const [newStatus, setNewStatus] = useState('')

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedProject) {
      fetchBuildings(selectedProject)
    }
  }, [selectedProject])

  useEffect(() => {
    if (selectedBuilding) {
      fetchApartments(selectedBuilding)
    }
  }, [selectedBuilding])

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.getAll()
      const projectsWithBuildings = response.data.data.filter((p: any) => p._count?.buildings > 0)
      setProjects(projectsWithBuildings)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching projects:', error)
      setIsLoading(false)
    }
  }

  const fetchBuildings = async (projectId: number) => {
    try {
      const response = await buildingsApi.getByProject(projectId)
      setBuildings(response.data.data)
      if (response.data.data.length > 0) {
        setSelectedBuilding(response.data.data[0].id)
      }
    } catch (error) {
      console.error('Error fetching buildings:', error)
    }
  }

  const fetchApartments = async (buildingId: number) => {
    try {
      const response = await apartmentsApi.getByBuilding(buildingId)
      setApartments(response.data.data)
    } catch (error) {
      console.error('Error fetching apartments:', error)
    }
  }

  const handleApartmentClick = (apartment: any) => {
    setSelectedApartment(apartment)
    setNewStatus(apartment.status)
    setModalOpen(true)
  }

  const handleStatusChange = async () => {
    if (!selectedApartment || !newStatus) return

    try {
      await apartmentsApi.updateStatus(selectedApartment.id, newStatus)
      // Refresh apartments
      if (selectedBuilding) {
        fetchApartments(selectedBuilding)
      }
      setModalOpen(false)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  // Group apartments by floor
  const apartmentsByFloor = apartments.reduce((acc: any, apt) => {
    if (!acc[apt.floor]) acc[apt.floor] = []
    acc[apt.floor].push(apt)
    return acc
  }, {})

  const floors = Object.keys(apartmentsByFloor).sort((a, b) => parseInt(b) - parseInt(a))

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

      {/* Building Selector */}
      {selectedProject && buildings.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-semibold text-text-primary mb-3">اختر العمارة</label>
          <div className="flex flex-wrap gap-3">
            {buildings.map((building) => (
              <button
                key={building.id}
                onClick={() => setSelectedBuilding(building.id)}
                className={cn(
                  'px-6 py-3 rounded-lg font-semibold transition-colors',
                  selectedBuilding === building.id
                    ? 'bg-primary text-white'
                    : 'bg-background-alt text-text-secondary hover:bg-primary-light'
                )}
              >
                عمارة {building.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Apartments Grid */}
      {selectedBuilding && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="space-y-8">
            {floors.map((floor) => (
              <div key={floor} className="border border-border rounded-xl p-6">
                <h4 className="font-almarai font-bold text-lg text-text-primary mb-4">
                  {getFloorName(parseInt(floor), 'ar')}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {apartmentsByFloor[floor]
                    .sort((a: any, b: any) => a.unitNumber - b.unitNumber)
                    .map((apartment: any) => (
                      <button
                        key={apartment.id}
                        onClick={() => handleApartmentClick(apartment)}
                        className={cn(
                          'w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110',
                          apartment.status === 'available' && 'bg-status-available text-white',
                          apartment.status === 'sold' && 'bg-status-sold text-white',
                          apartment.status === 'reserved' && 'bg-status-reserved text-white'
                        )}
                      >
                        {apartment.unitNumber}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-border">
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
        </motion.div>
      )}

      {/* Status Change Modal */}
      {modalOpen && selectedApartment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="font-almarai font-bold text-xl text-text-primary mb-4">
              تغيير حالة الشقة
            </h3>
            <p className="text-text-secondary mb-6">
              الشقة رقم {selectedApartment.unitNumber} - {getFloorName(selectedApartment.floor, 'ar')}
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
