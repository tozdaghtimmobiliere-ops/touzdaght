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

export default function ProjectDetailPage() {
  const params = useParams()
  const { city, slug } = params
  const { t } = useLanguage()

  const APARTMENT_INFO: Record<string, { surface: string; composition: string }> = {
    touhmo: { surface: '81 m²', composition: t('project_detail.specifications.standard') },
    'hay-ta9adom': { surface: '60 - 65 m²', composition: t('project_detail.specifications.standard') },
    gelmim: { surface: '70 m²', composition: t('project_detail.specifications.standard') },
    tilila: { surface: '64 m²', composition: t('project_detail.specifications.small') },
    'ain-zarqa': { surface: '52 - 56 m²', composition: t('project_detail.specifications.small') },
    najma: { surface: '70 m²', composition: t('project_detail.specifications.standard') },
  }

  const APARTMENT_SURFACE: Record<string, string> = {
    'touhmo': '81 m²',
    'gelmim': '70 m²',
    'hay-ta9adom': '60 - 65 m²',
    'tilila': '64 m²',
    'ain-zarqa': '52 - 56 m²',
  }

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
      <main className="min-h-screen bg-cream">
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-6">
            <div className="spinner-gold" />
            <span className="text-secondary/40 font-bold tracking-widest uppercase text-xs">Chargement...</span>
          </div>
        </div>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-cream">
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
             <MapPin className="w-12 h-12 text-gold/20 mx-auto mb-4" />
             <p className="text-secondary/40 font-bold uppercase tracking-widest">Projet non trouvé</p>
          </div>
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
  }[projectSlug] || '/images/najma/najma-thumbnail.jpg'

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero */}
      <section className="relative pt-[70px] min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={project.name}
            className="w-full h-full object-cover render-4k" 
            onError={(e) => { (e.target as HTMLImageElement).src = '/images/najma/najma-thumbnail.jpg' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-black/20" />
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold/30 bg-black/30 backdrop-blur-md mb-8">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-white text-xs font-black uppercase tracking-[0.2em]">{project.city.name}</span>
            </div>
            
            <h1 className="font-almarai text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 max-w-4xl leading-tight">
              {project.name}
            </h1>
            
            {project.description && (
              <p className="font-cairo text-white/70 text-xl md:text-2xl max-w-3xl leading-relaxed">
                {project.description}
              </p>
            )}
            
            <div className="mt-12 h-1 w-24 bg-gold shadow-[0_0_20px_#C9A84C]" />
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
              <div className="w-9 h-9 rounded-xl flex items-center justify-center opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))' }}>
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.location')}</p>
                <p className="font-bold text-secondary text-sm">{project.city.name}</p>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))' }}>
                <Building className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.type')}</p>
                <p className="font-bold text-secondary text-sm">
                  {t(`project_detail.types.${project.type}`)}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))' }}>
                <CheckCircle className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.status')}</p>
                <p className={cn('font-bold text-sm',
                  project.status === 'active' ? 'text-gold' : 'text-secondary/50')}>
                  {t(`status.${project.status}`)}
                </p>
              </div>
            </div>

            {/* Area */}
            {displayArea && (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center opacity-80"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))' }}>
                  <Ruler className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.area')}</p>
                  <p className="font-bold text-secondary text-sm">{displayArea}</p>
                </div>
              </div>
            )}

            {/* WhatsApp */}
            <div className="mr-auto">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-8 py-3 rounded-xl bg-secondary text-white font-black text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className="relative z-10 w-4 h-4 text-gold group-hover:text-secondary transition-colors" />
                <span className="relative z-10 group-hover:text-secondary transition-colors">{t('project_detail.info.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24" style={{ background: '#FAF7F2' }}>
        <div className="container-custom">
          <Tabs defaultValue={defaultTab} className="w-full">
            {/* TabsList */}
            <TabsList className="w-full flex flex-wrap justify-start gap-4 mb-12 p-3 rounded-2xl bg-white border border-border shadow-2xl">
              {showDesignTab && (
                <TabsTrigger value="design"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-secondary data-[state=active]:text-gold data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.design')}
                </TabsTrigger>
              )}
              {showStatusTab && (
                <TabsTrigger value="status"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-secondary data-[state=active]:text-gold data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.status')}
                </TabsTrigger>
              )}
              {showProgressTab && (
                <TabsTrigger value="progress"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-secondary data-[state=active]:text-gold data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.progress')}
                </TabsTrigger>
              )}
              {showBookingTab && (
                <TabsTrigger value="booking"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-secondary data-[state=active]:text-gold data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.booking')}
                </TabsTrigger>
              )}
              {showParcelsTab && (
                <TabsTrigger value="parcels"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-secondary data-[state=active]:text-gold data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.parcels')}
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
                          <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.area')}</p>
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
                        <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.composition')}</p>
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