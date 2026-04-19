import type { Metadata } from 'next'
import { Cairo, Almarai } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { SplashScreen } from '@/components/ui/splash-screen'

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
  title: 'توزدغت للعقار والبناء | شقق وبقع أرضية للبيع في تيزنيت والمغرب',
  description: 'اكتشف أفضل المشاريع العقارية مع توزدغت. شقق سكنية عصرية، بقع أرضية مجهزة، ومكاتب إدارية في تيزنيت، أكادير، وأيت ملول. بنينا ثقتكم بجودة إنجازاتنا.',
  keywords: 'Tozdaght, توزدغت, tozdagh, tozdaght.ma, tozdagt, touzdaght, عقارات تيزنيت, شقق للبيع تيزنيت, إقامة النجمة',
  authors: [{ name: 'Tozdaght Immobilière' }],
  openGraph: {
    title: 'توزدغت للعقار والبناء - جودة ومصداقية',
    description: 'شركة متخصصة في تطوير المشاريع العقارية السكنية والتجارية في المغرب.',
    type: 'website',
    locale: 'ar_MA',
    url: 'https://tozdaght.ma',
    siteName: 'توزدغت للعقار والبناء',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'توزدغت للعقار والبناء',
    description: 'مشاريع عقارية متميزة في تيزنيت وسوس',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "توزدغت للعقار والبناء - Tozdaght Immobilière",
    "image": "https://tozdaght.ma/images/logo.png",
    "@id": "https://tozdaght.ma",
    "url": "https://tozdaght.ma",
    "telephone": "0702060323",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الشقة 2 الطابق 1 عمارة 34 تجزئة الحرية",
      "addressLocality": "Tiznit",
      "postalCode": "85000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.6974,
      "longitude": -9.7317
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/tozdaght",
      "https://www.instagram.com/tozdaght"
    ]
  }

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${almarai.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-cairo antialiased">
        <Providers>
          <SplashScreen />
          {children}
        </Providers>
      </body>
    </html>
  )
}
