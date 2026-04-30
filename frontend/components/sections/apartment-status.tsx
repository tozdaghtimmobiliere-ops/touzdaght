'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn, getFloorName, buildWhatsAppUrl, generateWhatsAppMessage } from '@/lib/utils'
import { useLanguage } from '@/components/providers'

interface ApartmentStatusProps {
  buildings: any[]
  projectName: string
  cityName: string
}

// Helper: get floor label from building's custom labels or fall back to default
function getCustomFloorLabel(building: any, floor: number, language: string): string {
  if (building?.floorLabels) {
    try {
      const labels = JSON.parse(building.floorLabels) as string[]
      if (labels[floor]) return labels[floor]
    } catch {}
  }
  return getFloorName(floor, language)
}

const content = {
  ar: {
    selectBuilding: 'اختر العمارة',
    floor: 'الطابق',
    unit: 'شقة',
    available: 'متاحة',
    sold: 'محجوزة',
    reserved: 'محجوزة',
    unavailable: 'غير متوفرة حاليا',
    soldAlert: 'هذه الشقة تم بيعها، الرجاء اختيار شقة أخرى.',
    unavailableAlert: 'هذه الشقة غير متوفرة حاليا.',
    legend: 'الحالة:',
  },
  fr: {
    selectBuilding: 'Choisir le bâtiment',
    floor: 'Étage',
    unit: 'Appartement',
    available: 'Disponible',
    sold: 'Vendu',
    reserved: 'Réservé',
    unavailable: 'Indisponible actuellement',
    soldAlert: 'Cet appartement est déjà vendu. Veuillez en choisir un autre.',
    unavailableAlert: 'Cet appartement est indisponible actuellement.',
    legend: 'Légende:',
  },
  en: {
    selectBuilding: 'Select building',
    floor: 'Floor',
    unit: 'Apartment',
    available: 'Available',
    sold: 'Sold',
    reserved: 'Reserved',
    unavailable: 'Unavailable',
    soldAlert: 'This apartment has already been sold. Please choose another one.',
    unavailableAlert: 'This apartment is currently unavailable.',
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

    if (apartment.status === 'unavailable') {
      alert(t.unavailableAlert)
      return
    }

    if (apartment.status === 'available') {
      const message = generateWhatsAppMessage(projectName, cityName, {
        unitNumber: apartment.unitNumber,
        floor: apartment.floor,
        building: building?.name,
      })
      const url = buildWhatsAppUrl('212713379197', message)
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
                {getCustomFloorLabel(building, parseInt(floor), language)}
              </h4>
              <div className="flex flex-wrap gap-4">
                {apartmentsByFloor[floor]
                  .sort((a: any, b: any) => a.unitNumber - b.unitNumber)
                  .map((apartment: any) => (
                    <button
                      key={apartment.id}
                      onClick={() => handleApartmentClick(apartment)}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white transition-all duration-300 cursor-pointer"
                      style={{
                        background:
                          apartment.status === 'sold'
                            ? 'linear-gradient(135deg, #E53E3E, #C53030)'
                            : apartment.status === 'reserved'
                            ? 'linear-gradient(135deg, #F6AD55, #DD6B20)'
                            : apartment.status === 'unavailable'
                            ? 'linear-gradient(135deg, #94a3b8, #64748b)'
                            : 'linear-gradient(135deg, #38A169, #2F855A)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        cursor: (apartment.status === 'sold' || apartment.status === 'unavailable') ? 'not-allowed' : 'pointer',
                        opacity: apartment.status === 'sold' ? 0.7 : 1,
                      }}
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
            <span className="w-4 h-4 rounded-full bg-status-unavailable" />
            <span className="text-text-secondary text-sm">{t.unavailable}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
