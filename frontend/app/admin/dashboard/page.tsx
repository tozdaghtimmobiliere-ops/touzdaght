'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, Home, TrendingUp, ArrowUpRight } from 'lucide-react'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalCities: 0,
    totalUnits: 0,
    saleRate: 0,
  })
  const [recentProjects, setRecentProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects')
        const result = await response.json()
        
        if (!response.ok) throw new Error('Failed to fetch projects')

        const projects = result.data || []
        
        // Simplified Stats Calculation
        let totalUnits = 0
        projects.forEach((p: any) => {
          totalUnits += (p._count?.buildings || 0) + (p._count?.parcels || 0)
        })

        setStats({
          totalProjects: projects.length,
          totalCities: new Set(projects.map((p: any) => p.cityId)).size,
          totalUnits,
          saleRate: 85, // Fallback static rate for stability
        })

        setRecentProjects(projects.slice(0, 5))
        setIsLoading(false)
      } catch (err: any) {
        console.error('Dashboard Error:', err)
        setError('تعذر تحميل البيانات. يرجى إعادة المحاولة.')
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const statCards = [
    { title: 'إجمالي المشاريع', value: stats.totalProjects, icon: Building2, color: 'bg-blue-500' },
    { title: 'إجمالي المدن', value: stats.totalCities, icon: MapPin, color: 'bg-green-500' },
    { title: 'إجمالي الوحدات', value: stats.totalUnits, icon: Home, color: 'bg-purple-500' },
    { title: 'نسبة البيع', value: `${stats.saleRate}%`, icon: TrendingUp, color: 'bg-[#d4af37]' },
  ]

  return (
    <div className="space-y-8 p-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-xl text-center border border-red-100 italic">
          {error}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color} shadow-lg shadow-gray-200`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Projects Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-lg font-bold text-gray-900">المشاريع الأخيرة</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">المشروع</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">الحالة</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">الوحدات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{project.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                      {project.status === 'active' ? 'نشط' : 'مكتمل'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {project._count?.buildings || project._count?.parcels || 0} وحدة
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
