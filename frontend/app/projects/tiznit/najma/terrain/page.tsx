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
const fallbackProjectData = {
  parcels: [
    // --- Residential (سكني) ---
    { id: 1, parcelNumber: '1', parcelCode: 'P-001', surface: 84, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 2, parcelNumber: '2', parcelCode: 'P-002', surface: 84, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 3, parcelNumber: '3', parcelCode: 'P-003', surface: 105, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 4, parcelNumber: '4', parcelCode: 'P-004', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 5, parcelNumber: '5', parcelCode: 'P-005', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'sold' },
    { id: 6, parcelNumber: '6', parcelCode: 'P-006', surface: 106, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    
    { id: 7, parcelNumber: '7', parcelCode: 'P-007', surface: 91, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 10, parcelNumber: '10', parcelCode: 'P-010', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 11, parcelNumber: '11', parcelCode: 'P-011', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 12, parcelNumber: '12', parcelCode: 'P-012', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 13, parcelNumber: '13', parcelCode: 'P-013', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 14, parcelNumber: '14', parcelCode: 'P-014', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    
    { id: 15, parcelNumber: '15', parcelCode: 'P-015', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 16, parcelNumber: '16', parcelCode: 'P-016', surface: 85, zoneType: 'R+2', usageType: 'residential', status: 'sold' },
    { id: 17, parcelNumber: '17', parcelCode: 'P-017', surface: 81, zoneType: 'R+2', usageType: 'residential', status: 'sold' },
    { id: 34, parcelNumber: '34', parcelCode: 'P-034', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 37, parcelNumber: '37', parcelCode: 'P-037', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 38, parcelNumber: '38', parcelCode: 'P-038', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    
    { id: 43, parcelNumber: '43', parcelCode: 'P-043', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 44, parcelNumber: '44', parcelCode: 'P-044', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 45, parcelNumber: '45', parcelCode: 'P-045', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 46, parcelNumber: '46', parcelCode: 'P-046', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'sold' },
    { id: 47, parcelNumber: '47', parcelCode: 'P-047', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'available' },
    { id: 48, parcelNumber: '48', parcelCode: 'P-048', surface: 80, zoneType: 'R+2', usageType: 'residential', status: 'sold' },

    // --- Commercial (تجاري) ---
    { id: 8, parcelNumber: '8', parcelCode: 'P-008', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 9, parcelNumber: '9', parcelCode: 'P-009', surface: 81, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 18, parcelNumber: '18', parcelCode: 'P-018', surface: 85, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 19, parcelNumber: '19', parcelCode: 'P-019', surface: 85, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 32, parcelNumber: '32', parcelCode: 'P-032', surface: 86, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 33, parcelNumber: '33', parcelCode: 'P-033', surface: 100, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    
    { id: 35, parcelNumber: '35', parcelCode: 'P-035', surface: 90, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 36, parcelNumber: '36', parcelCode: 'P-036', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 39, parcelNumber: '39', parcelCode: 'P-039', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 40, parcelNumber: '40', parcelCode: 'P-040', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },
    { id: 41, parcelNumber: '41', parcelCode: 'P-041', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 42, parcelNumber: '42', parcelCode: 'P-042', surface: 81, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    
    { id: 49, parcelNumber: '49', parcelCode: 'P-049', surface: 81, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 50, parcelNumber: '50', parcelCode: 'P-050', surface: 80, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 51, parcelNumber: '51', parcelCode: 'P-051', surface: 92, zoneType: 'R+2', usageType: 'commercial', status: 'available' },
    { id: 52, parcelNumber: '52', parcelCode: 'P-052', surface: 93, zoneType: 'R+2', usageType: 'commercial', status: 'sold' },

    // --- R+3 Commercial (تجاري) ---
    { id: 20, parcelNumber: '20', parcelCode: 'P-020', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 21, parcelNumber: '21', parcelCode: 'P-021', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 22, parcelNumber: '22', parcelCode: 'P-022', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 23, parcelNumber: '23', parcelCode: 'P-023', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 24, parcelNumber: '24', parcelCode: 'P-024', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 25, parcelNumber: '25', parcelCode: 'P-025', surface: 147, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 26, parcelNumber: '26', parcelCode: 'P-026', surface: 140, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 27, parcelNumber: '27', parcelCode: 'P-027', surface: 140, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 53, parcelNumber: '53', parcelCode: 'P-053', surface: 150, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 54, parcelNumber: '54', parcelCode: 'P-054', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 55, parcelNumber: '55', parcelCode: 'P-055', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 56, parcelNumber: '56', parcelCode: 'P-056', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 57, parcelNumber: '57', parcelCode: 'P-057', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 58, parcelNumber: '58', parcelCode: 'P-058', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },
    { id: 59, parcelNumber: '59', parcelCode: 'P-059', surface: 141, zoneType: 'R+3', usageType: 'commercial', status: 'available' },

    // --- R+4 Residential (سكني) ---
    { id: 30, parcelNumber: '30', parcelCode: 'P-030', surface: 254, zoneType: 'R+4', usageType: 'residential', status: 'available' },
    { id: 86, parcelNumber: '86', parcelCode: 'P-086', surface: 870, zoneType: 'R+4', usageType: 'residential', status: 'available' },

    // --- R+4 Commercial (تجاري) ---
    { id: 28, parcelNumber: '28', parcelCode: 'P-028', surface: 214, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 29, parcelNumber: '29', parcelCode: 'P-029', surface: 233, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 31, parcelNumber: '31', parcelCode: 'P-031', surface: 243, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 60, parcelNumber: '60', parcelCode: 'P-060', surface: 212, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 61, parcelNumber: '61', parcelCode: 'P-061', surface: 212, zoneType: 'R+4', usageType: 'commercial', status: 'sold' },
    { id: 62, parcelNumber: '62', parcelCode: 'P-062', surface: 211, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 63, parcelNumber: '63', parcelCode: 'P-063', surface: 211, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 64, parcelNumber: '64', parcelCode: 'P-064', surface: 210, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 65, parcelNumber: '65', parcelCode: 'P-065', surface: 209, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 66, parcelNumber: '66', parcelCode: 'P-066', surface: 259, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 67, parcelNumber: '67', parcelCode: 'P-067', surface: 386, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 68, parcelNumber: '68', parcelCode: 'P-068', surface: 286, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 69, parcelNumber: '69', parcelCode: 'P-069', surface: 246, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 70, parcelNumber: '70', parcelCode: 'P-070', surface: 292, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 71, parcelNumber: '71', parcelCode: 'P-071', surface: 245, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 72, parcelNumber: '72', parcelCode: 'P-072', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 73, parcelNumber: '73', parcelCode: 'P-073', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 74, parcelNumber: '74', parcelCode: 'P-074', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 75, parcelNumber: '75', parcelCode: 'P-075', surface: 244, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 76, parcelNumber: '76', parcelCode: 'P-076', surface: 249, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 77, parcelNumber: '77', parcelCode: 'P-077', surface: 257, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 78, parcelNumber: '78', parcelCode: 'P-078', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 79, parcelNumber: '79', parcelCode: 'P-079', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 80, parcelNumber: '80', parcelCode: 'P-080', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'sold' },
    { id: 81, parcelNumber: '81', parcelCode: 'P-081', surface: 250, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 82, parcelNumber: '82', parcelCode: 'P-082', surface: 241, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 83, parcelNumber: '83', parcelCode: 'P-083', surface: 240, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 84, parcelNumber: '84', parcelCode: 'P-084', surface: 201, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
    { id: 85, parcelNumber: '85', parcelCode: 'P-085', surface: 200, zoneType: 'R+4', usageType: 'commercial', status: 'available' },
  ]
}

export default function NajmaTerrainPage() {

  const { language } = useLanguage()
  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects/najma`)
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