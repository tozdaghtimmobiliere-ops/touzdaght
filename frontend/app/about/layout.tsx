import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن - Tozdaght للعقار والبناء',
  description: 'تعرف على شركة توزدغت (Tozdaght) المتخصصة في العقار والبناء. خبرة أكثر من 10 سنوات في تطوير المشاريع العقارية السكنية والتجارية في تيزنيت وسوس.',
  keywords: ['Tozdaght', 'عن توزدغت', 'شركة عقار تيزنيت', 'بناء وتشييد سوس'],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
