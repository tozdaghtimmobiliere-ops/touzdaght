'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, CheckCircle, MessageCircle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackButton } from '@/components/ui/back-button'
import { useLanguage } from '@/components/providers'
import { buildWhatsAppUrl, generateWhatsAppMessage, cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ParcelStatus } from '@/components/sections/parcel-status'
import { ImageSlider } from '@/components/sections/image-slider'

// ─── Formulaire réservation terrain ───────────────────────────────────────────
function ParcelBookingForm({ parcels, projectName, cityName }: { parcels: any[]; projectName: string; cityName: string }) {
  const availableParcels = parcels.filter((p) => p.status === 'available')
  const [selectedParcel, setSelectedParcel] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '', notes: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const parcel = availableParcels.find((p) => p.id === parseInt(selectedParcel))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!parcel) return

    const message = generateWhatsAppMessage(projectName, cityName, {
      parcelNumber: parcel.parcelNumber,
      parcelCode: parcel.parcelCode,
      zone: parcel.zoneType,
    })
    const url = buildWhatsAppUrl('212702060323', message)
    window.open(url, '_blank')
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <div className="w-16 h-16 bg-status-available/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-status-available" />
        </div>
        <h3 className="font-almarai text-xl font-bold text-text-primary mb-2">
          تم إرسال طلبك بنجاح!
        </h3>
      </div>
    )
  }

  if (availableParcels.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <p className="text-text-muted">لا توجد بقع متاحة للحجز</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <h3 className="font-almarai text-2xl font-bold text-text-primary mb-2">احجز بقعتك الآن</h3>
      <p className="text-text-secondary mb-6">سيتواصل معكم فريقنا في أقرب وقت ممكن</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Projet */}
        <div>
          <label className="form-label">المشروع</label>
          <input
            type="text"
            value={`${projectName} - ${cityName}`}
            disabled
            className="form-input bg-background-alt"
          />
        </div>

        {/* Sélection de la bقعة */}
        <div>
          <label className="form-label">البقعة *</label>
          <select
            required
            value={selectedParcel}
            onChange={(e) => setSelectedParcel(e.target.value)}
            className="form-input"
          >
            <option value="">اختر البقعة</option>
            {availableParcels.map((p) => (
              <option key={p.id} value={p.id}>
                بقعة {p.parcelNumber} — {p.parcelCode} — {p.surface} م² — منطقة {p.zoneType}
              </option>
            ))}
          </select>
        </div>

        {/* Infos contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">الاسم الكامل *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
              placeholder="الاسم الكامل"
            />
          </div>
          <div>
            <label className="form-label">رقم الهاتف *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="form-input"
              placeholder="رقم الهاتف"
            />
          </div>
        </div>

        <div>
          <label className="form-label">ملاحظات</label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="form-input resize-none"
            placeholder="ملاحظات إضافية"
          />
        </div>

        <button
          type="submit"
          disabled={!selectedParcel}
          className={cn(
            'w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-colors',
            selectedParcel
              ? 'bg-status-available text-white hover:bg-green-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          )}
        >
          <MessageCircle className="w-5 h-5" />
          تواصل عبر واتساب
        </button>
      </form>
    </div>
  )
}

// ─── Page principale terrain ───────────────────────────────────────────────────
export default function NajmaTerrainPage() {
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

  const whatsappMessage = generateWhatsAppMessage('تجزئة النجمة - البقع الأرضية', 'تيزنيت', {})
  const whatsappUrl = buildWhatsAppUrl('212702060323', whatsappMessage)

  const hasAvailableParcels = project?.parcels?.some((p: any) => p.status === 'available')

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
              تجزئة النجمة — البقع الأرضية
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              بقع أرضية في موقع استراتيجي متميز في قلب تيزنيت
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
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">المساحة الإجمالية للتجزئة</p>
                <p className="font-semibold text-text-primary">30,000 م²</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">عدد البقع</p>
                <p className="font-semibold text-text-primary">86 بقعة</p>
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
          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start gap-2 mb-8 bg-white p-2 rounded-xl">
              <TabsTrigger value="plans" className="px-6 py-3">مخططات التجزئة</TabsTrigger>
              {project?.parcels?.length > 0 && (
                <TabsTrigger value="parcels" className="px-6 py-3">وضعية البقع</TabsTrigger>
              )}
              <TabsTrigger value="progress" className="px-6 py-3">تقدم الأشغال</TabsTrigger>
              {hasAvailableParcels && (
                <TabsTrigger value="booking" className="px-6 py-3">حجز البقعة</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="plans">
              <ImageSlider images={[]} projectSlug="najma" category="plans" type="terrain" />
            </TabsContent>

            {project?.parcels?.length > 0 && (
              <TabsContent value="parcels">
                <ParcelStatus
                  parcels={project.parcels}
                  projectName="تجزئة النجمة"
                  cityName="تيزنيت"
                />
              </TabsContent>
            )}

            <TabsContent value="progress">
              <ImageSlider images={[]} projectSlug="najma" category="chantier" type="terrain" />
            </TabsContent>

            {hasAvailableParcels && (
              <TabsContent value="booking">
                <ParcelBookingForm
                  parcels={project?.parcels || []}
                  projectName="تجزئة النجمة"
                  cityName="تيزنيت"
                />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}