import type { Metadata } from 'next'
import { Cairo, Almarai } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
})

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700', '800'],
  variable: '--font-almarai',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'توزدغت للعقار والبناء | Tozdaght Immobilière',
  description: 'شركة متخصصة في مجال العقار والبناء في المغرب - تيزنيت، أكادير، أيت ملول',
  keywords: 'عقار, بناء, تيزنيت, أكادير, المغرب, شقق, أراضي, تجزئة',
  authors: [{ name: 'Tozdaght Immobilière' }],
  openGraph: {
    title: 'توزدغت للعقار والبناء',
    description: 'شركة متخصصة في مجال العقار والبناء في المغرب',
    type: 'website',
    locale: 'ar_MA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${almarai.variable}`}>
      <body className="font-cairo antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
