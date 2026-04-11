'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn, getStatusColor, getStatusText, getFloorName, buildWhatsAppUrl, generateWhatsAppMessage } from '@/lib/utils'
import { useLanguage } from '@/components/providers'

interface ApartmentStatusProps {
  buildings: any[]
  projectName: string
  cityName: string
}

const content = {
  ar: {
    selectBuilding: 'اختر العمارة',
    floor: 'الطابق',
    unit: 'شقة',
    available: 'متاحة',
    sold: 'مباعة',
    reserved: 'محجوزة',
    soldAlert: 'هذه الشقة تم بيعها، الرجاء اختيار شقة أخرى.',
    legend: 'الحالة:',
  },
  fr: {
    selectBuilding: 'Choisir le bâtiment',
    floor: 'Étage',
    unit: 'Appartement',
    available: 'Disponible',
    sold: 'Vendu',
    reserved: 'Réservé',
    soldAlert: 'Cet appartement est déjà vendu. Veuillez en choisir un autre.',
    legend: 'Légende:',
  },
  en: {
    selectBuilding: 'Select building',
    floor: 'Floor',
    unit: 'Apartment',
    available: 'Available',
    sold: 'Sold',
    reserved: 'Reserved',
    soldAlert: 'This apartment has already been sold. Please choose another one.',
    legend: 'Legend:',
  },
}

export function ApartmentStatus({ buildings, projectName, cityName }: ApartmentStatusProps) {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  const [selectedBuilding, setSelectedBuilding] = useState(buildings[0]?.id)

  const building = buildings.find((b) => b.id === selectedBuilding)

  // Group apartments by floor
  const apartmentsByFloor = building?.apartments?.reduce((acc: any, apt: any) => {
    if (!acc[apt.floor]) acc[apt.floor] = []
    acc[apt.floor].push(apt)
    return acc
  }, {})

  const floors = apartmentsByFloor ? Object.keys(apartmentsByFloor).sort((a, b) => parseInt(b) - parseInt(a)) : []

  const handleApartmentClick = (apartment: any) => {
    if (apartment.status === 'sold') {
      alert(t.soldAlert)
      return
    }

    if (apartment.status === 'available') {
      const message = generateWhatsAppMessage(projectName, cityName, {
        unitNumber: apartment.unitNumber,
        floor: apartment.floor,
        building: building?.name,
      })
      const url = buildWhatsAppUrl('212702060323', message)
      window.open(url, '_blank')
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      {/* Building Selector */}
      {buildings.length > 1 && (
        <div className="mb-8">
          <h3 className="font-semibold text-text-primary mb-4">{t.selectBuilding}</h3>
          <div className="flex flex-wrap gap-3">
            {buildings.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBuilding(b.id)}
                className={cn(
                  'px-6 py-3 rounded-lg font-semibold transition-colors',
                  selectedBuilding === b.id
                    ? 'bg-primary text-white'
                    : 'bg-background-alt text-text-secondary hover:bg-primary-light'
                )}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Apartments by Floor */}
      {building && (
        <div className="space-y-8">
          {floors.map((floor) => (
            <motion.div
              key={floor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-border rounded-xl p-6"
            >
              <h4 className="font-almarai font-bold text-lg text-text-primary mb-4">
                {getFloorName(parseInt(floor), language)}
              </h4>
              <div className="flex flex-wrap gap-4">
                {apartmentsByFloor[floor]
                  .sort((a: any, b: any) => a.unitNumber - b.unitNumber)
                  .map((apartment: any) => (
                    <button
                      key={apartment.id}
                      onClick={() => handleApartmentClick(apartment)}
                      className={cn(
                        'apartment-circle',
                        apartment.status,
                        apartment.status === 'available' && 'hover:scale-110'
                      )}
                      title={`${t.unit} ${apartment.unitNumber}`}
                    >
                      {apartment.unitNumber}
                    </button>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-semibold text-text-primary mb-3">{t.legend}</p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-status-available" />
            <span className="text-text-secondary text-sm">{t.available}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-status-sold" />
            <span className="text-text-secondary text-sm">{t.sold}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-status-reserved" />
            <span className="text-text-secondary text-sm">{t.reserved}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
