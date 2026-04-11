'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, Home, TrendingUp, ArrowUpRight } from 'lucide-react'
import { projectsApi, citiesApi } from '@/lib/api'

interface Stats {
  totalProjects: number
  totalCities: number
  totalUnits: number
  soldUnits: number
  saleRate: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    totalCities: 0,
    totalUnits: 0,
    soldUnits: 0,
    saleRate: 0,
  })
  const [recentProjects, setRecentProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, citiesRes] = await Promise.all([
          projectsApi.getAll(),
          citiesApi.getAll(),
        ])

        const projects = projectsRes.data.data || []
        const cities = citiesRes.data.data || []

        // Calculate stats
        let totalUnits = 0
        let soldUnits = 0

        projects.forEach((project: any) => {
          project.buildings?.forEach((building: any) => {
            building.apartments?.forEach((apt: any) => {
              totalUnits++
              if (apt.status === 'sold') soldUnits++
            })
          })
          project.parcels?.forEach((parcel: any) => {
            totalUnits++
            if (parcel.status === 'sold') soldUnits++
          })
        })

        setStats({
          totalProjects: projects.length,
          totalCities: cities.length,
          totalUnits,
          soldUnits,
          saleRate: totalUnits > 0 ? Math.round((soldUnits / totalUnits) * 100) : 0,
        })

        setRecentProjects(projects.slice(0, 5))
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const statCards = [
    {
      title: 'إجمالي المشاريع',
      value: stats.totalProjects,
      icon: Building2,
      color: 'bg-blue-500',
      trend: '+2',
    },
    {
      title: 'إجمالي المدن',
      value: stats.totalCities,
      icon: MapPin,
      color: 'bg-green-500',
      trend: '+1',
    },
    {
      title: 'إجمالي الوحدات',
      value: stats.totalUnits,
      icon: Home,
      color: 'bg-purple-500',
      trend: '+15',
    },
    {
      title: 'نسبة البيع',
      value: `${stats.saleRate}%`,
      icon: TrendingUp,
      color: 'bg-accent',
      trend: '+5%',
    },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">{card.title}</p>
                  <p className="text-3xl font-bold text-text-primary">{card.value}</p>
                </div>
                <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center', card.color)}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-status-available text-sm">
                <ArrowUpRight className="w-4 h-4" />
                <span>{card.trend} هذا الشهر</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm"
      >
        <div className="p-6 border-b border-border">
          <h2 className="font-almarai font-bold text-xl text-text-primary">آخر المشاريع</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background-alt">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">المشروع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">المدينة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">النوع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">الوحدات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentProjects.map((project) => (
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
                      {project.type === 'residence' && 'إقامة'}
                      {project.type === 'house' && 'منزل'}
                      {project.type === 'lotissement' && 'تجزئة'}
                      {project.type === 'commercial' && 'تجاري'}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
