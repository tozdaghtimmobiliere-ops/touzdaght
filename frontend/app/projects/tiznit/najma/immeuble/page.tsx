'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Building, CheckCircle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackButton } from '@/components/ui/back-button'
import { useLanguage } from '@/components/providers'
import { cn, buildWhatsAppUrl, generateWhatsAppMessage } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ApartmentStatus } from '@/components/sections/apartment-status'
import { ImageSlider } from '@/components/sections/image-slider'
import { BookingForm } from '@/components/sections/booking-form'

export default function NajmaImmeublePage() {
  const { language } = useLanguage()
  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects/najma`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProject(data.data)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-[72px] flex items-center justify-center min-h-screen">
          <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      </main>
    )
  }

  const whatsappMessage = generateWhatsAppMessage('تجزئة النجمة - الشقق السكنية', 'تيزنيت', {})
  const whatsappUrl = buildWhatsAppUrl('212702060323', whatsappMessage)

  const hasAvailableUnits = project?.buildings?.some((b: any) =>
    b.apartments?.some((a: any) => a.status === 'available')
  )

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] bg-secondary">
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10 py-12 md:py-20">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-accent text-sm mb-3">
              <MapPin className="w-4 h-4" />
              تيزنيت
            </div>
            <h1 className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
              تجزئة النجمة — الشقق السكنية
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              شقق سكنية فاخرة في قلب تيزنيت
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white border-b border-border">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">مكونات الشقة</p>
                <p className="font-semibold text-text-primary">غرفتان + صالون + مطبخ + حمام</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">المساحة الإجمالية للإمارة</p>
                <p className="font-semibold text-text-primary">870 م²</p>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-status-available text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start gap-2 mb-8 bg-white p-2 rounded-xl">
              <TabsTrigger value="design" className="px-6 py-3">تصميم المشروع</TabsTrigger>
              {project?.buildings?.length > 0 && (
                <TabsTrigger value="status" className="px-6 py-3">وضعيات الشقق</TabsTrigger>
              )}
              <TabsTrigger value="progress" className="px-6 py-3">تقدم الأشغال</TabsTrigger>
              {hasAvailableUnits && (
                <TabsTrigger value="booking" className="px-6 py-3">حجز الشقة</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="design">
              <ImageSlider images={[]} projectSlug="najma" category="plans" type="immeuble" />
            </TabsContent>

            {project?.buildings?.length > 0 && (
              <TabsContent value="status">
                <div className="bg-primary-light border border-primary/20 rounded-xl p-5 mb-6 flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">مكونات الشقة</p>
                      <p className="font-semibold text-text-primary">غرفتان + صالون + مطبخ + حمام</p>
                    </div>
                  </div>
                </div>
                <ApartmentStatus
                  buildings={project.buildings}
                  projectName="تجزئة النجمة"
                  cityName="تيزنيت"
                />
              </TabsContent>
            )}

            <TabsContent value="progress">
              <ImageSlider images={[]} projectSlug="najma" category="chantier" type="immeuble" />
            </TabsContent>

            {hasAvailableUnits && (
              <TabsContent value="booking">
                <BookingForm project={project} buildings={project?.buildings || []} />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}