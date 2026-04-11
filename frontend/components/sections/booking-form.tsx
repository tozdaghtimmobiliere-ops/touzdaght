'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
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
    if (!selectedApartment) return

    const message = generateWhatsAppMessage(project.name, project.city.name, {
      unitNumber: selectedApartment.unitNumber,
      floor: selectedApartment.floor,
      building: isSingleBuilding ? undefined : building?.name,
    })

    const url = buildWhatsAppUrl(project.whatsapp || '212702060323', message)
    window.open(url, '_blank')
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

  if (!hasAvailableApartments) {
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
          <div>
            <label className="form-label">{t.project}</label>
            <input
              type="text"
              value={`${project.name} - ${project.city.name}`}
              disabled
              className="form-input bg-background-alt"
            />
          </div>

          {/* العمارة — seulement si plusieurs bâtiments */}
          {!isSingleBuilding && (
            <div>
              <label className="form-label">{t.building} *</label>
              <select
                required
                value={selectedBuilding}
                onChange={(e) => {
                  setSelectedBuilding(e.target.value)
                  setSelectedFloor('')
                  setSelectedUnit('')
                }}
                className="form-input"
              >
                <option value="">{t.selectBuilding}</option>
                {buildings.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* الطابق */}
          {(selectedBuilding || isSingleBuilding) && (
            <div>
              <label className="form-label">{t.floor} *</label>
              <select
                required
                value={selectedFloor}
                onChange={(e) => {
                  setSelectedFloor(e.target.value)
                  setSelectedUnit('')
                }}
                className="form-input"
              >
                <option value="">{t.selectFloor}</option>
                {availableFloors.map((floor: number) => (
                  <option key={floor} value={floor}>
                    {getFloorName(floor, language)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* الشقة */}
          {selectedFloor && (
            <div>
              <label className="form-label">{t.unit} *</label>
              <select
                required
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="form-input"
              >
                <option value="">{t.selectUnit}</option>
                {availableUnits?.map((unit: any) => (
                  <option key={unit.id} value={unit.id}>
                    {t.unit} {unit.unitNumber}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Infos contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">{t.name} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
                placeholder={t.name}
              />
            </div>
            <div>
              <label className="form-label">{t.phone} *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
                placeholder={t.phone}
              />
            </div>
          </div>

          <div>
            <label className="form-label">{t.notes}</label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="form-input resize-none"
              placeholder={t.notes}
            />
          </div>

          <button
            type="submit"
            disabled={!selectedUnit}
            className={cn(
              'w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-colors',
              selectedUnit
                ? 'bg-status-available text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            )}
          >
            <MessageCircle className="w-5 h-5" />
            {t.submit}
          </button>
        </form>
      </motion.div>
    </div>
  )
}