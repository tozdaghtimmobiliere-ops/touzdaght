'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { MapPin, Phone, Building, CheckCircle, Ruler } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { cn, buildWhatsAppUrl, generateWhatsAppMessage } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ApartmentStatus } from '@/components/sections/apartment-status'
import { ParcelStatus } from '@/components/sections/parcel-status'
import { ImageSlider } from '@/components/sections/image-slider'
import { BookingForm } from '@/components/sections/booking-form'
import { BackButton } from '@/components/ui/back-button'

const content = {
  ar: {
    tabs: {
      design: 'تصميم المشروع',
      status: 'وضعيات الشقق',
      progress: 'تقدم الأشغال',
      booking: 'حجز الشقة',
      parcels: 'وضعية البقع',
    },
    info: {
      location: 'الموقع',
      type: 'النوع',
      status: 'الحالة',
      area: 'مساحة الشقة',
      whatsapp: 'تواصل عبر واتساب',
    },
    types: {
      residence: 'إقامة',
      house: 'منزل',
      lotissement: 'تجزئة',
      commercial: 'تجاري',
    },
    status: { active: 'نشط', completed: 'مكتمل' },
    composition: 'مكونات الشقة',
  },
  fr: {
    tabs: {
      design: 'Plan du projet',
      status: 'État des appartements',
      progress: 'Avancement des travaux',
      booking: 'Réserver',
      parcels: 'État des parcelles',
    },
    info: {
      location: 'Emplacement',
      type: 'Type',
      status: 'Statut',
      area: 'Surface appartement',
      whatsapp: 'Contacter sur WhatsApp',
    },
    types: {
      residence: 'Résidence',
      house: 'Maison',
      lotissement: 'Lotissement',
      commercial: 'Commercial',
    },
    status: { active: 'Actif', completed: 'Terminé' },
    composition: 'Composition',
  },
  en: {
    tabs: {
      design: 'Project design',
      status: 'Apartment status',
      progress: 'Construction progress',
      booking: 'Book',
      parcels: 'Parcel status',
    },
    info: {
      location: 'Location',
      type: 'Type',
      status: 'Status',
      area: 'Apartment area',
      whatsapp: 'Contact on WhatsApp',
    },
    types: {
      residence: 'Residence',
      house: 'House',
      lotissement: 'Subdivision',
      commercial: 'Commercial',
    },
    status: { active: 'Active', completed: 'Completed' },
    composition: 'Composition',
  },
}

const APARTMENT_INFO: Record<string, { surface: string; composition: string }> = {
  touhmo: { surface: '81 م²', composition: 'غرفتان + صالون + مطبخ + حمامان' },
  'hay-ta9adom': { surface: '60 - 65 م²', composition: 'غرفتان + صالون + مطبخ + حمامان' },
  gelmim: { surface: '70 م²', composition: 'غرفتان + صالون + مطبخ + حمامان' },
  tilila: { surface: '64 م²', composition: 'غرفة + صالون + مطبخ + حمامان' },
  'ain-zarqa': { surface: '52 - 56 م²', composition: 'غرفة أو غرفتان + صالون + مطبخ + حمامان' },
  najma: { surface: '', composition: 'غرفتان + صالون + مطبخ + حمام' },
}

const APARTMENT_SURFACE: Record<string, string> = {
  'touhmo': '81 م²',
  'gelmim': '70 م²',
  'hay-ta9adom': '60 - 65 م²',
  'tilila': '64 م²',
  'ain-zarqa': '52 - 56 م²',
}

export default function ProjectDetailPage() {
  const params = useParams()
  const { city, slug } = params
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setProject(data.data)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    }
  }, [slug])

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

  if (!project) {
    return (
      <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-screen">
          <p className="text-secondary/40">المشروع غير موجود</p>
        </div>
        <Footer />
      </main>
    )
  }

  const hasAvailableUnits =
    project.buildings?.some((b: any) => b.apartments?.some((a: any) => a.status === 'available')) ||
    project.parcels?.some((p: any) => p.status === 'available')

  const isLotissement = project.type === 'lotissement'
  const projectSlug = slug as string
  const whatsappMessage = generateWhatsAppMessage(project.name, project.city.name, {})
  const whatsappUrl = buildWhatsAppUrl(project.whatsapp || '212702060323', whatsappMessage)

  const showDesignTab = true
  const showStatusTab = project.buildings?.length > 0
  const showProgressTab = true
  const showBookingTab = hasAvailableUnits && project.status === 'active' && !isLotissement
  const showParcelsTab = isLotissement

  const defaultTab = showDesignTab ? 'design' : showStatusTab ? 'status' : 'parcels'
  const apartmentInfo = APARTMENT_INFO[projectSlug]
  const displayArea = APARTMENT_SURFACE[projectSlug] || (project.totalArea ? `${project.totalArea} م²` : null)

  const heroImage = {
    'najma': '/images/najma/najma-hero.png',
    'gelmim': '/images/gelmim/gelmim-hero.png',
    'ain-zarqa': '/images/ain-zarqa/ain-zarqa-hero.png',
    'tilila': '/images/tilila/tilila-hero.png',
    'touhmo': '/images/touhmo/touhmo-hero.png',
    'hay-ta9adom': '/images/hay-ta9adom/hay-ta9adom-hero.png',
  }[projectSlug]

  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute inset-0">
          {heroImage ? (
            <img src={heroImage} alt={project.name}
              className="w-full h-full object-cover opacity-30" />
          ) : (
            <div className="w-full h-full opacity-10"
              style={{ background: 'linear-gradient(135deg, #C9A84C, transparent)' }} />
          )}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(7,14,26,0.6), rgba(7,14,26,0.85))' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-gold opacity-60" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {project.city.name}
              </span>
            </div>
            <h1 className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
              {project.name}
            </h1>
            {project.description && (
              <p className="text-white/50 text-lg max-w-2xl">{project.description}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white border-b border-border sticky top-[70px] z-30"
        style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">{t.info.location}</p>
                <p className="font-bold text-secondary text-sm">{project.city.name}</p>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                <Building className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">{t.info.type}</p>
                <p className="font-bold text-secondary text-sm">
                  {t.types[project.type as keyof typeof t.types]}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                <CheckCircle className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">{t.info.status}</p>
                <p className={cn('font-bold text-sm',
                  project.status === 'active' ? 'text-status-available' : 'text-secondary/50')}>
                  {t.status[project.status as keyof typeof t.status]}
                </p>
              </div>
            </div>

            {/* Area */}
            {displayArea && (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                  <Ruler className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">{t.info.area}</p>
                  <p className="font-bold text-secondary text-sm">{displayArea}</p>
                </div>
              </div>
            )}

            {/* WhatsApp */}
            <div className="mr-auto">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="whatsapp-btn text-sm px-5 py-2.5">
                <Phone className="w-4 h-4" />
                {t.info.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding" style={{ background: '#FAF7F2' }}>
        <div className="container-custom">
          <Tabs defaultValue={defaultTab} className="w-full">
            {/* TabsList */}
            <TabsList className="w-full flex flex-wrap justify-start gap-2 mb-8 p-2 rounded-2xl bg-white border border-border"
              style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.05)' }}>
              {showDesignTab && (
                <TabsTrigger value="design"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all data-[state=active]:text-secondary data-[state=inactive]:text-secondary/50 data-[state=inactive]:hover:text-secondary"
                  style={{ background: 'transparent' }}>
                  {t.tabs.design}
                </TabsTrigger>
              )}
              {showStatusTab && (
                <TabsTrigger value="status"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all data-[state=active]:text-secondary data-[state=inactive]:text-secondary/50">
                  {t.tabs.status}
                </TabsTrigger>
              )}
              {showProgressTab && (
                <TabsTrigger value="progress"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all data-[state=active]:text-secondary data-[state=inactive]:text-secondary/50">
                  {t.tabs.progress}
                </TabsTrigger>
              )}
              {showBookingTab && (
                <TabsTrigger value="booking"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all data-[state=active]:text-secondary data-[state=inactive]:text-secondary/50">
                  {t.tabs.booking}
                </TabsTrigger>
              )}
              {showParcelsTab && (
                <TabsTrigger value="parcels"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all data-[state=active]:text-secondary data-[state=inactive]:text-secondary/50">
                  {t.tabs.parcels}
                </TabsTrigger>
              )}
            </TabsList>

            {/* Design Tab */}
            {showDesignTab && (
              <TabsContent value="design">
                <div className="bg-white rounded-2xl border border-border overflow-hidden"
                  style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
                  <div className="p-1">
                    <ImageSlider images={[]} projectSlug={projectSlug} category="plans" />
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Status Tab */}
            {showStatusTab && (
              <TabsContent value="status">
                {/* Apartment Info Card */}
                {apartmentInfo && (
                  <div className="mb-6 p-5 rounded-2xl border border-gold/20 flex flex-wrap gap-6 items-center"
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))' }}>
                    {apartmentInfo.surface && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
                          <Ruler className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">مساحة الشقة</p>
                          <p className="font-bold text-secondary text-lg">{apartmentInfo.surface}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
                        <Building className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-secondary/40 text-xs font-bold uppercase tracking-wider">{t.composition}</p>
                        <p className="font-bold text-secondary">{apartmentInfo.composition}</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-white rounded-2xl border border-border overflow-hidden"
                  style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
                  <ApartmentStatus
                    buildings={project.buildings}
                    projectName={project.name}
                    cityName={project.city.name}
                  />
                </div>
              </TabsContent>
            )}

            {/* Progress Tab */}
            {showProgressTab && (
              <TabsContent value="progress">
                <div className="bg-white rounded-2xl border border-border overflow-hidden"
                  style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
                  <div className="p-1">
                    <ImageSlider images={[]} projectSlug={projectSlug} category="chantier" />
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Booking Tab */}
            {showBookingTab && (
              <TabsContent value="booking">
                <div className="bg-white rounded-2xl border border-border overflow-hidden"
                  style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
                  <BookingForm project={project} buildings={project.buildings} />
                </div>
              </TabsContent>
            )}

            {/* Parcels Tab */}
            {showParcelsTab && (
              <TabsContent value="parcels">
                <div className="bg-white rounded-2xl border border-border overflow-hidden"
                  style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
                  <ParcelStatus
                    parcels={project.parcels}
                    projectName={project.name}
                    cityName={project.city.name}
                  />
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}