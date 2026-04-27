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

const PlateauStatusTable = ({ project }: { project: any }) => {
  const { language } = useLanguage()
  const isFrench = language === 'fr'

  const handleBookingClick = (unit: string, floor: string) => {
    if (!project) return;
    let message = '';
    if (isFrench) {
      message = `Bonjour,\nJe suis intéressé par le projet *${project.name}* à ${project.city.name}.\nJe souhaite réserver le *${unit}* au *${floor}*.\n\n`;
    } else {
      message = `مرحباً،\nأنا مهتم بمشروع *${project.name}* في ${project.city.name}.\nأرغب في حجز *${unit}* في *${floor}*.\n\n`;
    }
    const url = buildWhatsAppUrl(project.whatsapp || '212702060323', message);
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-gold/20 overflow-hidden" 
         style={{ boxShadow: '0 20px 60px rgba(10,22,40,0.08)' }}>
      {/* Premium Header Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-6 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <h3 className="text-xl font-bold text-white relative z-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
            <Building className="w-4 h-4 text-gold" />
          </div>
          {isFrench ? 'Disponibilité des Plateaux' : 'وضعيات المكاتب'}
        </h3>
      </div>

      <div className="overflow-x-auto p-4 md:p-8">
        <table className="w-full text-left border-collapse" dir={isFrench ? 'ltr' : 'rtl'}>
          <thead>
            <tr>
              <th className="p-5 font-bold text-secondary text-sm border-b-2 border-gold/20"></th>
              <th className="p-5 text-center border-b-2 border-gold/20">
                <div className="font-bold text-secondary text-lg mb-1">{isFrench ? 'Plateau 1' : 'مكتب 1'}</div>
                <div className="text-gold font-medium text-xs uppercase tracking-wider">{isFrench ? 'Façade Principale' : 'الواجهة الرئيسية'}</div>
              </th>
              <th className="p-5 text-center border-b-2 border-gold/20">
                <div className="font-bold text-secondary text-lg mb-1">{isFrench ? 'Plateau 2' : 'مكتب 2'}</div>
                <div className="text-gold font-medium text-xs uppercase tracking-wider">{isFrench ? 'Façade Arrière' : 'الواجهة الخلفية'}</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50/80 transition-all duration-300 group">
              <td className="p-5 font-bold text-secondary border-gray-100 whitespace-nowrap group-hover:text-primary transition-colors border-x">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  {isFrench ? '1er Etage' : 'الطابق 1'}
                </div>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100 shadow-sm">
                  {isFrench ? 'Réservée' : 'محجوز'}
                </span>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <button 
                  onClick={() => handleBookingClick(isFrench ? 'Plateau 2' : 'مكتب 2', isFrench ? '1er Etage' : 'الطابق 1')}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {isFrench ? 'Disponible' : 'متاح'}
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/80 transition-all duration-300 group bg-gray-50/30">
              <td className="p-5 font-bold text-secondary border-gray-100 whitespace-nowrap group-hover:text-primary transition-colors border-x">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  {isFrench ? '2ème Etage' : 'الطابق 2'}
                </div>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <button 
                  onClick={() => handleBookingClick(isFrench ? 'Plateau 1' : 'مكتب 1', isFrench ? '2ème Etage' : 'الطابق 2')}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {isFrench ? 'Disponible' : 'متاح'}
                </button>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100 shadow-sm">
                  {isFrench ? 'Réservée' : 'محجوز'}
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/80 transition-all duration-300 group border-b border-gray-100">
              <td className="p-5 font-bold text-secondary border-gray-100 whitespace-nowrap group-hover:text-primary transition-colors border-x">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  {isFrench ? '3ème Etage' : 'الطابق 3'}
                </div>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <button 
                  onClick={() => handleBookingClick(isFrench ? 'Plateau 1' : 'مكتب 1', isFrench ? '3ème Etage' : 'الطابق 3')}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {isFrench ? 'Disponible' : 'متاح'}
                </button>
              </td>
              <td className="p-5 text-center border-r border-gray-100">
                <button 
                  onClick={() => handleBookingClick(isFrench ? 'Plateau 2' : 'مكتب 2', isFrench ? '3ème Etage' : 'الطابق 3')}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {isFrench ? 'Disponible' : 'متاح'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const { city, slug } = params
  const { t, language } = useLanguage()

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
      if (slug === 'najma-plateau') {
        setProject({
          name: 'مكاتب ادارية - طريق اكلو',
          slug: 'najma-plateau',
          city: { name: 'تيزنيت' },
          type: 'immeuble',
          status: 'active',
          description: 'مشروع المكاتب الإدارية بطريق أكلو، فضاءات عصرية مجهزة بأحدث الوسائل لتنمية أعمالكم.',
          buildings: []
        })
        setIsLoading(false)
        return
      }

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

  const heroImage = {
    'najma': '/images/najma/najma-hero.png',
    'gelmim': '/images/gelmim/gelmim-hero.png',
    'ain-zarqa': '/images/ain-zarqa/ain-zarqa-hero.png',
    'tilila': '/images/tilila/tilila-hero.png',
    'touhmo': '/images/touhmo/touhmo-hero.png',
    'hay-ta9adom': '/images/hay-ta9adom/hay-ta9adom-hero.png',
    'najma-plateau': '/images/najma/plateau.jpg',
  }[projectSlug] || '/images/najma/najma-thumbnail.jpg'

  // Special logic for Najma Plateau (Coming Soon)
  const isPlateau = projectSlug === 'najma-plateau'
  const apartmentInfo = APARTMENT_INFO[projectSlug]
  const displayArea = APARTMENT_SURFACE[projectSlug] || (project.totalArea ? `${project.totalArea} م²` : null)
  
  const showDesignTab = true
  const showStatusTab = project.buildings?.length > 0 || isPlateau
  const showProgressTab = true
  const showBookingTab = (hasAvailableUnits && project.status === 'active' && !isLotissement) || isPlateau
  const showParcelsTab = isLotissement

  const defaultTab = showDesignTab ? 'design' : showStatusTab ? 'status' : 'parcels'

  const ComingSoon = () => (
    <div className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border border-border">
      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
        <Building className="w-10 h-10 text-gold animate-pulse" />
      </div>
      <h3 className="font-almarai text-2xl font-bold text-secondary mb-2">Coming Soon</h3>
      <p className="text-secondary/40 font-bold uppercase tracking-[0.2em] text-xs">قريباً إن شاء الله</p>
    </div>
  )

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero */}
      <section className={cn(
        "relative pt-[70px] overflow-hidden",
        isPlateau ? "bg-secondary" : "bg-dark"
      )}>
        {isPlateau && <div className="absolute inset-0 hero-overlay opacity-50" />}
        {!isPlateau && (
          <div className="absolute inset-0 overflow-hidden">
            <img src={heroImage} alt={project.name}
              className="w-full h-full object-cover render-4k blur-[4px] scale-110" 
              onError={(e) => { (e.target as HTMLImageElement).src = '/images/najma/najma-thumbnail.jpg' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-black/40" />
          </div>
        )}
        
        <div className="container-custom relative z-10 py-12 md:py-20">
          <div className="flex flex-col items-start gap-4 mb-4">
            <BackButton />
            <div className={cn(
              "flex items-center gap-2",
              isPlateau ? "text-accent" : "text-gold"
            )}>
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">{project.city.name}</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className={cn(isPlateau ? "text-right" : "text-left")}
          >
            <h1 className={cn(
              "font-almarai font-bold text-white mb-4 leading-tight",
              isPlateau ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl lg:text-7xl max-w-4xl"
            )}>
              {project.name}
            </h1>

            {isPlateau && (
              <p className="text-white/80 text-lg max-w-2xl ml-auto">
                {project.description}
              </p>
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
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-secondary data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.design')}
                </TabsTrigger>
              )}
              {showStatusTab && (
                <TabsTrigger value="status"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-secondary data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {isPlateau ? (language === 'fr' ? 'État des Bureaux' : 'وضعيات المكاتب') : t('project_detail.tabs.status')}
                </TabsTrigger>
              )}
              {showProgressTab && (
                <TabsTrigger value="progress"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-secondary data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.progress')}
                </TabsTrigger>
              )}
              {showBookingTab && (
                <TabsTrigger value="booking"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-secondary data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.booking')}
                </TabsTrigger>
              )}
              {showParcelsTab && (
                <TabsTrigger value="parcels"
                  className="px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-gold data-[state=active]:text-secondary data-[state=inactive]:text-secondary/40 hover:text-secondary">
                  {t('project_detail.tabs.parcels')}
                </TabsTrigger>
              )}
            </TabsList>

            {/* Design Tab */}
            {showDesignTab && (
              <TabsContent value="design">
                <div className="overflow-hidden">
                  <div className="p-0">
                    {isPlateau ? (
                      <ImageSlider 
                        images={[
                          { id: '4', url: '/images/najma/plateau/4.jpg', label: '' },
                          { id: '5', url: '/images/najma/plateau/5.jpg', label: '' },
                        ]} 
                      />
                    ) : (
                      <ImageSlider images={[]} projectSlug={projectSlug} category="plans" />
                    )}
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Status Tab */}
            {showStatusTab && (
              <TabsContent value="status">
                {apartmentInfo && (
                  <div className="mb-8 flex flex-wrap gap-8 items-center opacity-80">
                    {apartmentInfo.surface && (
                      <div className="flex items-center gap-3">
                        <Ruler className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.area')}</p>
                          <p className="font-bold text-secondary text-lg">{apartmentInfo.surface}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-secondary/40 text-[10px] font-black uppercase tracking-wider">{t('project_detail.info.composition')}</p>
                        <p className="font-bold text-secondary">{apartmentInfo.composition}</p>
                      </div>
                    </div>
                  </div>
                )}
                {isPlateau ? (
                  <PlateauStatusTable project={project} />
                ) : (
                  <ApartmentStatus
                    buildings={project.buildings}
                    projectName={project.name}
                    cityName={project.city.name}
                  />
                )}
              </TabsContent>
            )}

            {/* Progress Tab */}
            {showProgressTab && (
              <TabsContent value="progress">
                <div className="overflow-hidden">
                  <div className="p-0">
                    {isPlateau ? (
                      <ImageSlider 
                        images={[
                          { id: '6', url: '/images/najma/plateau/6.jpg', label: '' },
                          { id: '7', url: '/images/najma/plateau/7.jpg', label: '' },
                        ]} 
                      />
                    ) : (
                      <ImageSlider images={[]} projectSlug={projectSlug} category="chantier" />
                    )}
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Booking Tab */}
            {showBookingTab && (
              <TabsContent value="booking">
                <div className="overflow-hidden">
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