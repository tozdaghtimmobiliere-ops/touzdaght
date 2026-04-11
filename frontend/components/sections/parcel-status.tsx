'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn, buildWhatsAppUrl, generateWhatsAppMessage } from '@/lib/utils'
import { useLanguage } from '@/components/providers'

interface ParcelStatusProps {
  parcels: any[]
  projectName: string
  cityName: string
}

const content = {
  ar: {
    filters: {
      all: 'الكل',
      residential: 'سكني',
      commercial: 'تجاري',
      zone: 'المنطقة',
    },
    parcel: 'بقعة',
    surface: 'المساحة',
    zone: 'المنطقة',
    usage: 'الاستعمال',
    status: 'الحالة',
    available: 'متاحة',
    sold: 'مباعة',
    reserved: 'محجوزة',
    bookNow: 'احجز الآن',
    noResidential: 'لا توجد بقع سكنية في منطقة',
    noParcels: 'لا توجد بقع متاحة',
  },
  fr: {
    filters: {
      all: 'Tout',
      residential: 'Résidentiel',
      commercial: 'Commercial',
      zone: 'Zone',
    },
    parcel: 'Parcelle',
    surface: 'Surface',
    zone: 'Zone',
    usage: 'Usage',
    status: 'Statut',
    available: 'Disponible',
    sold: 'Vendu',
    reserved: 'Réservé',
    bookNow: 'Réserver',
    noResidential: 'Aucune parcelle résidentielle dans la zone',
    noParcels: 'Aucune parcelle disponible',
  },
  en: {
    filters: {
      all: 'All',
      residential: 'Residential',
      commercial: 'Commercial',
      zone: 'Zone',
    },
    parcel: 'Parcel',
    surface: 'Area',
    zone: 'Zone',
    usage: 'Usage',
    status: 'Status',
    available: 'Available',
    sold: 'Sold',
    reserved: 'Reserved',
    bookNow: 'Book now',
    noResidential: 'No residential parcels in zone',
    noParcels: 'No parcels available',
  },
}

export function ParcelStatus({ parcels, projectName, cityName }: ParcelStatusProps) {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  const [selectedZone, setSelectedZone] = useState('')
  const [selectedUsage, setSelectedUsage] = useState('')

const zones = Array.from(new Set(parcels.map((p) => p.zoneType).filter(Boolean))) as string[]

  const filteredParcels = parcels.filter((parcel) => {
    if (selectedZone && parcel.zoneType !== selectedZone) return false
    if (selectedUsage && parcel.usageType !== selectedUsage) return false
    return true
  })

  // Group by zone
  const parcelsByZone = filteredParcels.reduce((acc: any, parcel) => {
    if (!acc[parcel.zoneType]) acc[parcel.zoneType] = []
    acc[parcel.zoneType].push(parcel)
    return acc
  }, {})

  const handleBookClick = (parcel: any) => {
    const message = generateWhatsAppMessage(projectName, cityName, {
      parcelNumber: parcel.parcelNumber,
      parcelCode: parcel.parcelCode,
      zone: parcel.zoneType,
    })
    const url = buildWhatsAppUrl('212702060323', message)
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
          className="form-input w-auto"
        >
          <option value="">{t.filters.zone}</option>
          {zones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>

        <select
          value={selectedUsage}
          onChange={(e) => setSelectedUsage(e.target.value)}
          className="form-input w-auto"
        >
          <option value="">{t.filters.all}</option>
          <option value="residential">{t.filters.residential}</option>
          <option value="commercial">{t.filters.commercial}</option>
        </select>

        <button
          onClick={() => {
            setSelectedZone('')
            setSelectedUsage('')
          }}
          className="px-4 py-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
        >
          إعادة ضبط
        </button>
      </div>

      {/* Parcels by Zone */}
      {Object.keys(parcelsByZone).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-muted">{t.noParcels}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(parcelsByZone).map(([zone, zoneParcels]: [string, any]) => {
            const residential = zoneParcels.filter((p: any) => p.usageType === 'residential')
            const commercial = zoneParcels.filter((p: any) => p.usageType === 'commercial')

            return (
              <motion.div
                key={zone}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border rounded-xl p-6"
              >
                <h4 className="font-almarai font-bold text-xl text-text-primary mb-4">
                  منطقة {zone}
                </h4>

                {/* Residential Parcels */}
                {residential.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-text-primary mb-3">{t.filters.residential}</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {residential.map((parcel: any) => (
                        <ParcelCard
                          key={parcel.id}
                          parcel={parcel}
                          t={t}
                          onBook={() => handleBookClick(parcel)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Commercial Parcels */}
                {commercial.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3">{t.filters.commercial}</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {commercial.map((parcel: any) => (
                        <ParcelCard
                          key={parcel.id}
                          parcel={parcel}
                          t={t}
                          onBook={() => handleBookClick(parcel)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* No residential in R+3 */}
                {zone === 'R+3' && residential.length === 0 && (
                  <p className="text-text-muted text-center py-4">
                    {t.noResidential} {zone}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      )}

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-border">
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

function ParcelCard({ parcel, t, onBook }: { parcel: any; t: any; onBook: () => void }) {
  return (
    <div
      className={cn(
        'p-4 rounded-lg border-2 text-center',
        parcel.status === 'available'
          ? 'border-status-available bg-status-available/5'
          : parcel.status === 'sold'
          ? 'border-status-sold bg-status-sold/5'
          : 'border-status-reserved bg-status-reserved/5'
      )}
    >
      <div className="font-bold text-lg text-text-primary">{parcel.parcelNumber}</div>
      <div className="text-sm text-text-muted">{parcel.parcelCode}</div>
      <div className="text-sm text-text-secondary mt-1">
        {parcel.surface} م²
      </div>
      <div
        className={cn(
          'mt-2 px-2 py-1 rounded text-xs font-semibold',
          parcel.status === 'available'
            ? 'bg-status-available text-white'
            : parcel.status === 'sold'
            ? 'bg-status-sold text-white'
            : 'bg-status-reserved text-white'
        )}
      >
        {t[parcel.status]}
      </div>
      {parcel.status === 'available' && (
        <button
          onClick={onBook}
          className="mt-2 w-full px-3 py-1 bg-primary text-white text-xs rounded hover:bg-primary-dark transition-colors"
        >
          {t.bookNow}
        </button>
      )}
    </div>
  )
}
