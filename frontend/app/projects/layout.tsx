import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مشاريعنا العقارية - Tozdaght للعقار والبناء',
  description: 'اكتشف مجموعة من أفضل المشاريع العقارية في تيزنيت، أكادير، وأيت ملول. شقق متميزة، بقع أرضية مجهزة، ومكاتب إدارية من شركة توزدغت.',
  keywords: ['مشاريع توزدغت', 'شقق تيزنيت', 'بقع أرضية سوس', 'استثمار عقاري المغرب'],
}

export default function ProjectsListingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
