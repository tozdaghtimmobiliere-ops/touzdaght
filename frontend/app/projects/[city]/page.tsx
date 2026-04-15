'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Building, ArrowLeft } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { cn } from '@/lib/utils'
import { BackButton } from '@/components/ui/back-button'

const content = {
  ar: {
    projectsIn: 'مشاريع في',
    noProjects: 'لا توجد مشاريع في هذه المدينة',
    viewDetails: 'عرض التفاصيل',
    status: { active: 'نشط', completed: 'مكتمل' },
    types: { residence: 'إقامة', house: 'منزل', lotissement: 'تجزئة', commercial: 'تجاري' },
  },
  fr: {
    projectsIn: 'Projets à',
    noProjects: 'Aucun projet dans cette ville',
    viewDetails: 'Voir les détails',
    status: { active: 'Actif', completed: 'Terminé' },
    types: { residence: 'Résidence', house: 'Maison', lotissement: 'Lotissement', commercial: 'Commercial' },
  },
  en: {
    projectsIn: 'Projects in',
    noProjects: 'No projects in this city',
    viewDetails: 'View details',
    status: { active: 'Active', completed: 'Completed' },
    types: { residence: 'Residence', house: 'House', lotissement: 'Subdivision', commercial: 'Commercial' },
  },
}

const projectImages: Record<string, string> = {
  'najma': '/images/najma/najma-thumbnail.jpg',
  'gelmim': '/images/gelmim/gelmim.png',
  'ain-zarqa': '/images/ain-zarqa/ain-zarqa.png',
  'tilila': '/images/tilila/tilila.png',
  'touhmo': '/images/touhmo/touhmo.png',
  'hay-ta9adom': '/images/hay-ta9adom/hay-ta9adom.png',
}

export default function CityProjectsPage() {
  const params = useParams()
  const { city } = params
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  const [cityData, setCityData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (city) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const cityProjects = data.data.filter((p: any) => p.city.slug === city)
            if (cityProjects.length > 0) {
              setCityData({
                name: cityProjects[0].city.name,
                slug: city,
                projects: cityProjects,
              })
            }
          }
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    }
  }, [city])

  if (isLoading) {
    return (
      <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            <span className="text-secondary/40 text-sm">جاري التحميل...</span>
          </div>
        </div>
      </main>
    )
  }

  if (!cityData) {
    return (
      <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-screen">
          <p className="text-secondary/40">المدينة غير موجودة</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt={cityData.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3 h-3 inline ml-1" />
              {cityData.name}
            </span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
            {t.projectsIn} {cityData.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm">
            {cityData.projects?.length} مشروع متاح
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {cityData.projects?.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-secondary/40 text-lg">{t.noProjects}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.projects?.map((project: any, index: number) => (
                <motion.div key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link href={`/projects/${city}/${project.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-400 h-full"
                      style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                      <div className="aspect-[16/10] relative overflow-hidden bg-background-alt">
                        {projectImages[project.slug] ? (
                          <img src={projectImages[project.slug]} alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-secondary/30 font-semibold">{project.name}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3">
                          <span className={cn('px-3 py-1 rounded-full text-xs font-bold shadow-sm',
                            project.status === 'active'
                              ? 'bg-status-available text-white'
                              : 'bg-secondary/80 text-white backdrop-blur-sm')}>
                            {t.status[project.status as keyof typeof t.status]}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-secondary shadow-sm">
                            {t.types[project.type as keyof typeof t.types] || project.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 border-t border-border group-hover:border-gold/20 transition-colors">
                        <div className="flex items-center gap-1.5 text-gold text-xs font-bold mb-2 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" />
                          {cityData.name}
                        </div>
                        <h3 className="font-almarai font-bold text-lg text-secondary mb-2 group-hover:text-gold transition-colors">
                          {project.name}
                        </h3>
                        {project.description && (
                          <p className="text-secondary/50 text-sm line-clamp-2 mb-4">{project.description}</p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex items-center gap-1.5 text-secondary/40 text-xs">
                            <Building className="w-3.5 h-3.5" />
                            {project._count?.buildings > 0
                              ? `${project._count.buildings} مبنى`
                              : project._count?.parcels > 0
                              ? `${project._count.parcels} بقعة` : ''}
                          </div>
                          <span className="text-gold font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                            {t.viewDetails} <ArrowLeft className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}