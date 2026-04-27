'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Building, ArrowLeft } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { cn } from '@/lib/utils'
import { BackButton } from '@/components/ui/back-button'
import { ProjectCard as SharedProjectCard } from '@/components/ui/project-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Select } from '@/components/ui/select'

const content = {
  ar: {
    title: 'مشاريعنا',
    subtitle: 'اكتشف مجموعة مشاريعنا العقارية المتميزة في مختلف مدن المغرب',
    currentProjects: 'المشاريع الحالية',
    currentSubtitle: 'مشاريع نشطة متاحة للحجز والاستثمار',
    pastProjects: 'المشاريع السابقة',
    pastSubtitle: 'مشاريع أنجزناها بنجاح',
    filter: { all: 'جميع المدن', allTypes: 'جميع الأنواع', active: 'نشط', completed: 'مكتمل' },
    noProjects: 'لا توجد مشاريع متاحة',
    viewDetails: 'عرض التفاصيل',
    reset: 'إعادة ضبط',
  },
  fr: {
    title: 'Nos projets',
    subtitle: 'Découvrez notre portfolio de projets immobiliers au Maroc',
    currentProjects: 'Projets actuels',
    currentSubtitle: 'Projets actifs disponibles à la réservation',
    pastProjects: 'Projets passés',
    pastSubtitle: 'Projets réalisés avec succès',
    filter: { all: 'Toutes les villes', allTypes: 'Tous les types', active: 'Actif', completed: 'Terminé' },
    noProjects: 'Aucun projet disponible',
    viewDetails: 'Voir les détails',
    reset: 'Réinitialiser',
  },
  en: {
    title: 'Our projects',
    subtitle: 'Discover our real estate portfolio across Morocco',
    currentProjects: 'Current projects',
    currentSubtitle: 'Active projects available for booking',
    pastProjects: 'Past projects',
    pastSubtitle: 'Successfully completed projects',
    filter: { all: 'All cities', allTypes: 'All types', active: 'Active', completed: 'Completed' },
    noProjects: 'No projects available',
    viewDetails: 'View details',
    reset: 'Reset',
  },
}

const projectTypes: Record<string, Record<string, string>> = {
  ar: { residence: 'إقامة', house: 'منزل', lotissement: 'تجزئة', commercial: 'تجاري' },
  fr: { residence: 'Résidence', house: 'Maison', lotissement: 'Lotissement', commercial: 'Commercial' },
  en: { residence: 'Residence', house: 'House', lotissement: 'Subdivision', commercial: 'Commercial' },
}

const projectImages: Record<string, string> = {
  'najma': '/images/najma/najma-thumbnail.jpg',
  'gelmim': '/images/gelmim/gelmim.png',
  'ain-zarqa': '/images/ain-zarqa/ain-zarqa.png',
  'tilila': '/images/tilila/tilila.png',
  'touhmo': '/images/touhmo/touhmo.png',
  'hay-ta9adom': '/images/hay-ta9adom/9li3a.jpg',
}

const cityOverrides: Record<string, string> = {
  'najma': 'تيزنيت - R+2/R+3/R+4',
  'gelmim': 'تيزنيت - R+3',
  'touhmo': 'أيت ملول - R+2',
  'hay-ta9adom': 'القليعة - R+1',
  'najma-plateau': 'تيزنيت - R+3 مع قبو',
}



export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar
  const types = projectTypes[language as keyof typeof projectTypes] || projectTypes.ar

  const [projects, setProjects] = useState<any[]>([])
  const [cities, setCities] = useState<{ name: string; slug: string }[]>([])
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data)
          const cityMap = new Map<string, { name: string; slug: string }>()
          data.data.forEach((p: any) => {
            if (p.city?.slug && !cityMap.has(p.city.slug))
              cityMap.set(p.city.slug, { name: p.city.name, slug: p.city.slug })
          })
          setCities(Array.from(cityMap.values()))
        }
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  const filtered = projects.filter((p) => {
    if (selectedCity && p.city.slug !== selectedCity) return false
    if (selectedType && p.type !== selectedType) return false
    return true
  })

  const active = filtered.filter((p) => p.status === 'active')
  const completed = filtered.filter((p) => p.status === 'completed')

  return (
    <main className="min-h-screen bg-background dark:bg-dark">
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="مشاريعنا" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">مشاريعنا</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl">
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Sticky Filters */}
      <div className="sticky top-[70px] z-40 bg-white dark:bg-dark border-b border-border dark:border-white/10 shadow-sm transition-colors">
        <div className="container-custom py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
              className="w-auto min-w-[160px] !py-2 text-sm">
              <option value="">{t.filter.all}</option>
              {cities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </Select>
            <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
              className="w-auto min-w-[160px] !py-2 text-sm">
              <option value="">{t.filter.allTypes}</option>
              <option value="residence">{types.residence}</option>
              <option value="house">{types.house}</option>
              <option value="lotissement">{types.lotissement}</option>
              <option value="commercial">{types.commercial}</option>
            </Select>
            {(selectedCity || selectedType) && (
              <button onClick={() => { setSelectedCity(''); setSelectedType('') }}
                className="px-4 py-2 text-xs font-bold text-gold border border-gold/30 rounded-lg hover:bg-gold hover:text-secondary transition-all">
                {t.reset}
              </button>
            )}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <Skeleton key={i} className="h-[400px] rounded-2xl" />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* المشاريع الحالية */}
          {active.length > 0 && (
            <section className="section-padding bg-background dark:bg-dark">
              <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} className="mb-10">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-1 h-10 rounded-full" style={{ background: 'linear-gradient(to bottom, #C9A84C, #A8863A)' }} />
                    <div>
                      <h2 className="font-almarai text-2xl md:text-3xl font-bold text-secondary dark:text-white">{t.currentProjects}</h2>
                      <p className="text-secondary/40 dark:text-gray-400 text-sm">{t.currentSubtitle}</p>
                    </div>
                    <span className="mr-auto px-4 py-1.5 rounded-full text-xs font-bold text-secondary dark:text-white bg-gold">
                      {active.length}
                    </span>
                  </div>
                  <div className="h-px mt-4" style={{ background: 'linear-gradient(to right, #C9A84C30, transparent)' }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {active.map((project, index) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <SharedProjectCard project={project} types={types} t={t} projectImages={projectImages} cityOverrides={cityOverrides} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* المشاريع السابقة */}
          {completed.length > 0 && (
            <section className="section-padding bg-background-alt dark:bg-secondary/20">
              <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} className="mb-10">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-1 h-10 rounded-full bg-secondary/30" />
                    <div>
                      <h2 className="font-almarai text-2xl md:text-3xl font-bold text-secondary dark:text-white">{t.pastProjects}</h2>
                      <p className="text-secondary/40 dark:text-gray-400 text-sm">{t.pastSubtitle}</p>
                    </div>
                    <span className="mr-auto px-4 py-1.5 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                      {completed.length}
                    </span>
                  </div>
                  <div className="h-px mt-4 bg-secondary/10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completed.map((project, index) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="opacity-80">
                      <SharedProjectCard project={project} types={types} t={t} projectImages={projectImages} cityOverrides={cityOverrides} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {filtered.length === 0 && (
            <div className="container-custom py-24 text-center">
              <p className="text-secondary/40 text-lg">{t.noProjects}</p>
            </div>
          )}
        </>
      )}

      <Footer />
    </main>
  )
}