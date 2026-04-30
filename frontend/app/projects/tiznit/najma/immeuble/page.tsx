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

const fallbackProjectData = {
  name: 'تجزئة النجمة',
  slug: 'najma',
  city: { name: 'تيزنيت' },
  buildings: [
    {
      id: 1,
      name: 'A',
      apartments: [
        { id: 101, unitNumber: '1', floor: 0, surface: 80, rooms: 3, status: 'available' },
        { id: 102, unitNumber: '2', floor: 0, surface: 80, rooms: 3, status: 'available' },
        { id: 111, unitNumber: '1', floor: 1, surface: 80, rooms: 3, status: 'available' },
        { id: 112, unitNumber: '2', floor: 1, surface: 80, rooms: 3, status: 'available' },
        { id: 121, unitNumber: '1', floor: 2, surface: 80, rooms: 3, status: 'available' },
        { id: 122, unitNumber: '2', floor: 2, surface: 80, rooms: 3, status: 'available' },
        { id: 131, unitNumber: '1', floor: 3, surface: 80, rooms: 3, status: 'sold' },
        { id: 132, unitNumber: '2', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 141, unitNumber: '1', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 142, unitNumber: '2', floor: 4, surface: 80, rooms: 3, status: 'available' },
      ]
    },
    {
      id: 2,
      name: 'B',
      apartments: [
        // Floor 0 (Ground): 2,4,5 sold
        { id: 201, unitNumber: '1', floor: 0, surface: 80, rooms: 3, status: 'available' },
        { id: 202, unitNumber: '2', floor: 0, surface: 80, rooms: 3, status: 'sold' },
        { id: 203, unitNumber: '3', floor: 0, surface: 80, rooms: 3, status: 'available' },
        { id: 204, unitNumber: '4', floor: 0, surface: 80, rooms: 3, status: 'sold' },
        { id: 205, unitNumber: '5', floor: 0, surface: 80, rooms: 3, status: 'sold' },
        // Floor 1: 4,5 sold; 1,2,3 unavailable
        { id: 211, unitNumber: '1', floor: 1, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 212, unitNumber: '2', floor: 1, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 213, unitNumber: '3', floor: 1, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 214, unitNumber: '4', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        { id: 215, unitNumber: '5', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        // Floor 2: 1,2 sold; 3,4,5 unavailable
        { id: 221, unitNumber: '1', floor: 2, surface: 80, rooms: 3, status: 'sold' },
        { id: 222, unitNumber: '2', floor: 2, surface: 80, rooms: 3, status: 'sold' },
        { id: 223, unitNumber: '3', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 224, unitNumber: '4', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 225, unitNumber: '5', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        // Floor 3: 2 sold
        { id: 231, unitNumber: '1', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 232, unitNumber: '2', floor: 3, surface: 80, rooms: 3, status: 'sold' },
        { id: 233, unitNumber: '3', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 234, unitNumber: '4', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 235, unitNumber: '5', floor: 3, surface: 80, rooms: 3, status: 'available' },
        // Floor 4: available
        { id: 241, unitNumber: '1', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 242, unitNumber: '2', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 243, unitNumber: '3', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 244, unitNumber: '4', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 245, unitNumber: '5', floor: 4, surface: 80, rooms: 3, status: 'available' },
      ]
    },
    {
      id: 3,
      name: 'C',
      apartments: [
        // Floor 0: 2 sold; 1,3,4 unavailable
        { id: 301, unitNumber: '1', floor: 0, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 302, unitNumber: '2', floor: 0, surface: 80, rooms: 3, status: 'sold' },
        { id: 303, unitNumber: '3', floor: 0, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 304, unitNumber: '4', floor: 0, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 305, unitNumber: '5', floor: 0, surface: 80, rooms: 3, status: 'available' },
        // Floor 1: 3,4,5 sold; 1,2 unavailable
        { id: 311, unitNumber: '1', floor: 1, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 312, unitNumber: '2', floor: 1, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 313, unitNumber: '3', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        { id: 314, unitNumber: '4', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        { id: 315, unitNumber: '5', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        // Floor 2: 2,4 sold; 1,3,5 unavailable
        { id: 321, unitNumber: '1', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 322, unitNumber: '2', floor: 2, surface: 80, rooms: 3, status: 'sold' },
        { id: 323, unitNumber: '3', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 324, unitNumber: '4', floor: 2, surface: 80, rooms: 3, status: 'sold' },
        { id: 325, unitNumber: '5', floor: 2, surface: 80, rooms: 3, status: 'unavailable' },
        // Floor 3: 1 sold; 3 unavailable
        { id: 331, unitNumber: '1', floor: 3, surface: 80, rooms: 3, status: 'sold' },
        { id: 332, unitNumber: '2', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 333, unitNumber: '3', floor: 3, surface: 80, rooms: 3, status: 'unavailable' },
        { id: 334, unitNumber: '4', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 335, unitNumber: '5', floor: 3, surface: 80, rooms: 3, status: 'available' },
        // Floor 4: 4 sold
        { id: 341, unitNumber: '1', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 342, unitNumber: '2', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 343, unitNumber: '3', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 344, unitNumber: '4', floor: 4, surface: 80, rooms: 3, status: 'sold' },
        { id: 345, unitNumber: '5', floor: 4, surface: 80, rooms: 3, status: 'available' },
      ]
    },
    {
      id: 4,
      name: 'D',
      apartments: [
        { id: 401, unitNumber: '1', floor: 0, surface: 80, rooms: 3, status: 'available' },
        { id: 402, unitNumber: '2', floor: 0, surface: 80, rooms: 3, status: 'available' },
        // Floor 1: 1,2 sold
        { id: 411, unitNumber: '1', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        { id: 412, unitNumber: '2', floor: 1, surface: 80, rooms: 3, status: 'sold' },
        // Floor 2: 2 sold
        { id: 421, unitNumber: '1', floor: 2, surface: 80, rooms: 3, status: 'available' },
        { id: 422, unitNumber: '2', floor: 2, surface: 80, rooms: 3, status: 'sold' },
        // Floor 3: 2 sold
        { id: 431, unitNumber: '1', floor: 3, surface: 80, rooms: 3, status: 'available' },
        { id: 432, unitNumber: '2', floor: 3, surface: 80, rooms: 3, status: 'sold' },
        { id: 441, unitNumber: '1', floor: 4, surface: 80, rooms: 3, status: 'available' },
        { id: 442, unitNumber: '2', floor: 4, surface: 80, rooms: 3, status: 'available' },
      ]
    }
  ]
}

export default function NajmaImmeublePage() {
  const { language } = useLanguage()
  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://tozdaght-backend-api.vercel.app/api/projects/najma`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setProject(data.data)
        } else {
          setProject(fallbackProjectData)
        }
        setIsLoading(false)
      })
      .catch(() => {
        setProject(fallbackProjectData)
        setIsLoading(false)
      })
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
  const whatsappUrl = buildWhatsAppUrl('212713379197', whatsappMessage)

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