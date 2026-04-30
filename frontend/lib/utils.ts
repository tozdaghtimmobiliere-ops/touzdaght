import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ar-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
  }).format(price)
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'available':
      return 'bg-status-available'
    case 'sold':
      return 'bg-status-sold'
    case 'reserved':
      return 'bg-status-reserved'
    default:
      return 'bg-gray-400'
  }
}

export function getStatusText(status: string, language: string = 'ar'): string {
  const translations: Record<string, Record<string, string>> = {
    ar: {
      available: 'متاح',
      sold: 'تم البيع',
      reserved: 'محجوز',
    },
    fr: {
      available: 'Disponible',
      sold: 'Vendu',
      reserved: 'Réservé',
    },
    en: {
      available: 'Available',
      sold: 'Sold',
      reserved: 'Reserved',
    },
  }
  return translations[language]?.[status] || status
}

export function getFloorName(floor: number | undefined, language: string = 'ar'): string {
  if (floor === undefined) return ''
  const floors: Record<string, Record<number, string>> = {
    ar: {
      0: 'الطابق الأرضي',
      1: 'الطابق الأول',
      2: 'الطابق الثاني',
      3: 'الطابق الثالث',
      4: 'الطابق الرابع',
      5: 'الطابق الخامس',
    },
    fr: {
      0: 'Rez-de-chaussée',
      1: '1er étage',
      2: '2ème étage',
      3: '3ème étage',
      4: '4ème étage',
      5: '5ème étage',
    },
    en: {
      0: 'Ground floor',
      1: '1st floor',
      2: '2nd floor',
      3: '3rd floor',
      4: '4th floor',
      5: '5th floor',
    },
  }
  return floors[language]?.[floor] || `Floor ${floor}`
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function generateWhatsAppMessage(
  projectName: string,
  cityName: string,
  unitInfo: {
    unitNumber?: number | string
    floor?: number
    building?: string
    parcelNumber?: number | string
    parcelCode?: string
    zone?: string
  }
): string {
  const { unitNumber, floor, building, parcelNumber, parcelCode, zone } = unitInfo
  const projectInfo = `${projectName || ''}${cityName ? `، ${cityName}` : ''}`

  if (parcelNumber !== undefined && parcelNumber !== null && parcelNumber !== '') {
    return `السلام عليكم، أرغب في الاستفسار عن البقعة رقم ${parcelNumber}${parcelCode ? ` (${parcelCode})` : ''}${zone ? ` منطقة ${zone}` : ''} - مشروع ${projectInfo}`
  }

  if (unitNumber !== undefined && unitNumber !== null && unitNumber !== '') {
    const floorText = getFloorName(floor, 'ar')
    const buildingText = building ? `عمارة ${building}` : ''
    return `السلام عليكم، أرغب في الاستفسار عن الشقة رقم ${unitNumber}${floorText ? ` في ${floorText}` : ''}${buildingText ? ` - ${buildingText}` : ''} - مشروع ${projectInfo}`
  }

  return `السلام عليكم، أرغب في الاستفسار عن مشروع ${projectInfo}`
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}
