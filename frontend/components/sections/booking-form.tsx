'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { toast } from 'sonner'
import { cn, buildWhatsAppUrl, generateWhatsAppMessage, getFloorName } from '@/lib/utils'
import { useLanguage } from '@/components/providers'

interface BookingFormProps {
  project: any
  buildings: any[]
}

// Projets avec une seule عمارة → pas besoin de sélectionner
const SINGLE_BUILDING_PROJECTS = ['gelmim', 'touhmo', 'hay-ta9adom', 'tilila', 'ain-zarqa']

const content = {
  ar: {
    title: 'احجز شقتك الآن',
    subtitle: 'سيتواصل معكم فريقنا في أقرب وقت ممكن',
    project: 'المشروع',
    building: 'العمارة',
    floor: 'الطابق',
    unit: 'الشقة',
    name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    notes: 'ملاحظات',
    submit: 'تواصل عبر واتساب',
    selectBuilding: 'اختر العمارة',
    selectFloor: 'اختر الطابق',
    selectUnit: 'اختر الشقة',
    noAvailable: 'لا توجد وحدات متاحة',
    success: 'تم إرسال طلبك بنجاح!',
  },
  fr: {
    title: 'Réservez votre appartement',
    subtitle: 'Notre équipe vous contactera dans les plus brefs délais',
    project: 'Projet',
    building: 'Bâtiment',
    floor: 'Étage',
    unit: 'Appartement',
    name: 'Nom complet',
    phone: 'Numéro de téléphone',
    notes: 'Notes',
    submit: 'Contacter sur WhatsApp',
    selectBuilding: 'Choisir le bâtiment',
    selectFloor: 'Choisir l\'étage',
    selectUnit: 'Choisir l\'appartement',
    noAvailable: 'Aucune unité disponible',
    success: 'Votre demande a été envoyée avec succès!',
  },
  en: {
    title: 'Book your apartment',
    subtitle: 'Our team will contact you as soon as possible',
    project: 'Project',
    building: 'Building',
    floor: 'Floor',
    unit: 'Apartment',
    name: 'Full name',
    phone: 'Phone number',
    notes: 'Notes',
    submit: 'Contact on WhatsApp',
    selectBuilding: 'Select building',
    selectFloor: 'Select floor',
    selectUnit: 'Select apartment',
    noAvailable: 'No units available',
    success: 'Your request has been sent successfully!',
  },
}

export function BookingForm({ project, buildings }: BookingFormProps) {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  const isSingleBuilding = SINGLE_BUILDING_PROJECTS.includes(project?.slug)
  const isPlateau = project?.slug === 'najma-plateau'

  // Pour projet à une seule عمارة, on prend directement le premier building
  const [selectedBuilding, setSelectedBuilding] = useState(
    isSingleBuilding && buildings.length > 0 ? String(buildings[0].id) : ''
  )

  const [selectedFloor, setSelectedFloor] = useState('')
  const [selectedUnit, setSelectedUnit] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '', notes: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const building = buildings.find((b) => b.id === parseInt(selectedBuilding))

  const availableFloors: number[] = building
    ? Array.from(new Set<number>(
        building.apartments
          ?.filter((a: any) => a.status === 'available')
          .map((a: any) => a.floor as number)
      ))
    : []

  const availableUnits = building
    ? building.apartments?.filter(
        (a: any) => a.floor === parseInt(selectedFloor) && a.status === 'available'
      )
    : []

  const selectedApartment = availableUnits?.find((a: any) => a.id === parseInt(selectedUnit))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isPlateau && !selectedApartment) return

    let message = ''
    if (isPlateau) {
      if (language === 'fr') {
        message = `Bonjour,\nJe suis intéressé par le projet *${project.name}* à ${project.city.name}.\n`
      } else {
        message = `مرحباً،\nأنا مهتم بمشروع *${project.name}* في ${project.city.name}.\n`
      }
    } else {
      message = generateWhatsAppMessage(project.name, project.city.name, {
        unitNumber: selectedApartment.unitNumber,
        floor: selectedApartment.floor,
        building: isSingleBuilding ? undefined : building?.name,
      })
      message += `\n`
    }

    if (formData.name) {
      message += language === 'fr' ? `\nNom complet: ${formData.name}` : `\nالاسم الكامل: ${formData.name}`
    }
    if (formData.phone) {
      message += language === 'fr' ? `\nTéléphone: ${formData.phone}` : `\nرقم الهاتف: ${formData.phone}`
    }
    if (formData.notes) {
      message += language === 'fr' ? `\nNotes: ${formData.notes}` : `\nملاحظات: ${formData.notes}`
    }
    message += `\n`

    const url = buildWhatsAppUrl(project.whatsapp || '212702060323', message)
    window.open(url, '_blank')
    toast.success(t.success)
    setIsSubmitted(true)
  }


  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <div className="w-16 h-16 bg-status-available/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-status-available" />
        </div>
        <h3 className="font-almarai text-xl font-bold text-text-primary mb-2">{t.success}</h3>
      </div>
    )
  }

  const hasAvailableApartments = buildings.some((b) =>
    b.apartments?.some((a: any) => a.status === 'available')
  )

  if (!hasAvailableApartments && !isPlateau) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <p className="text-text-muted">{t.noAvailable}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h3 className="font-almarai text-2xl font-bold text-text-primary mb-2">{t.title}</h3>
        <p className="text-text-secondary mb-6">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Projet */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.project}</label>
            <Input
              type="text"
              value={`${project.name} - ${project.city.name}`}
              disabled
            />
          </div>

          {/* العمارة — seulement si plusieurs bâtiments et pas plateau */}
          {!isSingleBuilding && !isPlateau && (
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.building} *</label>
              <Select
                required
                value={selectedBuilding}
                onChange={(e) => {
                  setSelectedBuilding(e.target.value)
                  setSelectedFloor('')
                  setSelectedUnit('')
                }}
              >
                <option value="">{t.selectBuilding}</option>
                {buildings.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </Select>
            </div>
          )}

          {/* الطابق */}
          {(selectedBuilding || isSingleBuilding) && (
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.floor} *</label>
              <Select
                required
                value={selectedFloor}
                onChange={(e) => {
                  setSelectedFloor(e.target.value)
                  setSelectedUnit('')
                }}
              >
                <option value="">{t.selectFloor}</option>
                {availableFloors.map((floor: number) => (
                  <option key={floor} value={floor}>
                    {getFloorName(floor, language)}
                  </option>
                ))}
              </Select>
            </div>
          )}

          {/* الشقة */}
          {selectedFloor && !isPlateau && (
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.unit} *</label>
              <Select
                required
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
              >
                <option value="">{t.selectUnit}</option>
                {availableUnits?.map((unit: any) => (
                  <option key={unit.id} value={unit.id}>
                    {t.unit} {unit.unitNumber}
                  </option>
                ))}
              </Select>
            </div>
          )}

          {/* Infos contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.name} *</label>
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.name}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.phone} *</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.phone}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary dark:text-gray-300">{t.notes}</label>
            <Textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={t.notes}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            variant="luxury"
            disabled={!isPlateau && !selectedUnit}
            className={cn(
              "w-full flex items-center justify-center gap-2",
              (!isPlateau && !selectedUnit) && "opacity-50 select-none pointer-events-none"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            {t.submit}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}