import type { Metadata } from 'next'
import { Cairo, Almarai } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { SplashScreen } from '@/components/ui/splash-screen'

const baseUrl = process.env.NEXTAUTH_URL || 'https://tozdaght.ma'

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
  metadataBase: new URL('https://tozdaght.ma'),
  title: 'توزدغت للعقار والبناء | Tozdaght (v22)',
  description: 'شركة متخصصة في مجال العقار والبناء في المغرب - تيزنيت، أكادير، أيت ملول',
  keywords: 'عقار, بناء, تيزنيت, أكادير, المغرب, شقق, أراضي, تجزئة',
  authors: [{ name: 'Tozdaght Immobilière' }],
  openGraph: {
    title: 'توزدغت للعقار والبناء',
    description: 'شركة متخصصة في مجال العقار والبناء في المغرب',
    type: 'website',
    url: 'https://tozdaght.ma',
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
          <SplashScreen />
          {children}
        </Providers>
      </body>
    </html>
  )
}
