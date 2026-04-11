'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'

const labels = {
  ar: 'رجوع',
  fr: 'Retour',
  en: 'Back',
}

export function BackButton() {
  const router = useRouter()
  const { language } = useLanguage()
  const label = labels[language as keyof typeof labels] || labels.ar

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
    >
      <ArrowRight className="w-5 h-5" />
      {label}
    </button>
  )
}