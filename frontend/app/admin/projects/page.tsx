'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Eye, Building2, MapPin } from 'lucide-react'
import { projectsApi, citiesApi } from '@/lib/api'
import { cn } from '@/lib/utils'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [cities, setCities] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({ city: '', type: '', status: '' })
  const [searchQuery, setSearchQuery] = useState('')
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<any>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [projectsRes, citiesRes] = await Promise.all([
        projectsApi.getAll(),
        citiesApi.getAll(),
      ])
      setProjects(projectsRes.data.data || [])
      setCities(citiesRes.data.data || [])
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!projectToDelete) return

    try {
      await projectsApi.delete(projectToDelete.id)
      setProjects(projects.filter((p) => p.id !== projectToDelete.id))
      setDeleteModalOpen(false)
      setProjectToDelete(null)
    } catch (error) {
      console.error('Error deleting project:', error)
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (filters.city && project.city.slug !== filters.city) return false
    if (filters.type && project.type !== filters.type) return false
    if (filters.status && project.status !== filters.status) return false
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const projectTypes = {
    residence: 'إقامة',
    house: 'منزل',
    lotissement: 'تجزئة',
    commercial: 'تجاري',
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
        <h2 className="font-almarai font-bold text-2xl text-text-primary">إدارة المشاريع</h2>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-5 h-5" />
          إضافة مشروع جديد
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث عن مشروع..."
              className="w-full pr-10 pl-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <select
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="form-input w-auto"
          >
            <option value="">جميع المدن</option>
            {cities.map((city) => (
              <option key={city.id} value={city.slug}>
                {city.name}
              </option>
            ))}
          </select>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="form-input w-auto"
          >
            <option value="">جميع الأنواع</option>
            <option value="residence">إقامة</option>
            <option value="house">منزل</option>
            <option value="lotissement">تجزئة</option>
            <option value="commercial">تجاري</option>
          </select>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="form-input w-auto"
          >
            <option value="">جميع الحالات</option>
            <option value="active">نشط</option>
            <option value="completed">مكتمل</option>
          </select>
          <button
            onClick={() => {
              setFilters({ city: '', type: '', status: '' })
              setSearchQuery('')
            }}
            className="px-4 py-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
          >
            إعادة ضبط
          </button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background-alt">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">المشروع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">المدينة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">النوع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">الوحدات</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-background-alt/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-text-primary">{project.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{project.city?.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-background-alt rounded-full text-sm text-text-secondary">
                      {projectTypes[project.type as keyof typeof projectTypes]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        'px-3 py-1 rounded-full text-sm font-semibold',
                        project.status === 'active'
                          ? 'bg-status-available/10 text-status-available'
                          : 'bg-status-sold/10 text-status-sold'
                      )}
                    >
                      {project.status === 'active' ? 'نشط' : 'مكتمل'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {project._count?.buildings || project._count?.parcels || 0}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projects/${project.city.slug}/${project.slug}`}
                        target="_blank"
                        className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
                        title="عرض"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors"
                        title="تعديل"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => {
                          setProjectToDelete(project)
                          setDeleteModalOpen(true)
                        }}
                        className="p-2 text-status-sold hover:bg-status-sold/10 rounded-lg transition-colors"
                        title="حذف"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">لا توجد مشاريع مطابقة للبحث</p>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteModalOpen && projectToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="font-almarai font-bold text-xl text-text-primary mb-4">تأكيد الحذف</h3>
            <p className="text-text-secondary mb-6">
              هل أنت متأكد من حذف المشروع &quot;{projectToDelete.name}&quot;؟ لا يمكن التراجع عن هذا الإجراء.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false)
                  setProjectToDelete(null)
                }}
                className="flex-1 px-4 py-3 border border-border rounded-lg hover:bg-background-alt transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-status-sold text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                حذف
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
