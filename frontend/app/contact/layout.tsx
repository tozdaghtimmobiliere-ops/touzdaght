import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اتصل بنا - Tozdaght للعقار والبناء',
  description: 'تواصل مع فريق توزدغت (Tozdaght) للحصول على استشارات عقارية أو استفسارات حول شققنا وبقعنا الأرضية في تيزنيت وسوس. نحن هنا لخدمتكم.',
  keywords: ['اتصل بتوزدغت', 'رقم توزدغت', 'عنوان شركة توزدغت', 'واتساب توزدغت'],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
