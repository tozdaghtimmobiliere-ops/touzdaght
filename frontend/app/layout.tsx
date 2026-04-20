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
  title: {
    default: 'Tozdaght (توزدغت) | العقار والبناء - شقق وبقع أرضية في تيزنيت وسوس',
    template: '%s | Tozdaght - توزدغت'
  },
  description: 'توزدغت للعقار والبناء: الشركة الرائدة في تيزنيت وسوس. نقدم أفضل الشقق وبقع الأرض بمشاريع متميزة وجودة عالية. وجهتكم الأولى للسكن والاستثمار.',
  keywords: [
    'Tozdaght', 'توزدغت', 'tozdagh', 'tozdaght.ma', 'tozdagt', 'touzdaght', 
    'Tozdaght Immobilière', 'العقار والبناء تيزنيت', 'شقق للبيع تيزنيت', 
    'بقع أرضية تيزنيت', 'إقامة النجمة', 'عقارات تيزنيت', 'مشاريع عقارية سوس'
  ],
  authors: [{ name: 'Tozdaght Immobilière' }],
  alternates: {
    canonical: 'https://tozdaght.ma',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'توزدغت للعقار والبناء - جودة ومصداقية في تيزنيت',
    description: 'شركة متخصصة في تطوير المشاريع العقارية السكنية والتجارية الأكثر تميزاً في تيزنيت ومنطقة سوس.',
    type: 'website',
    locale: 'ar_MA',
    url: 'https://tozdaght.ma',
    siteName: 'توزدغت للعقار والبناء',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Tozdaght Immobilière Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'توزدغت للعقار والبناء - Tozdaght',
    description: 'مشاريع عقارية متميزة في تيزنيت وسوس: شقق، بقع أرضية، ومكاتب.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
  },
  verification: {
    google: 'google52d693201b4ab1f4', // Verified from your file
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://tozdaght.ma#organization",
      "name": "Tozdaght Immobilière - توزدغت للعقار والبناء",
      "url": "https://tozdaght.ma",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tozdaght.ma/images/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://tozdaght.ma/images/logo.png",
      "description": "شركة توزدغت المتخصصة في العقار والبناء في مدينة تيزنيت ومنطقة سوس. نقدم حلولاً عقارية متميزة تشمل الشقق، البقع الأرضية، والمكاتب.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "الشقة 2 الطابق 1 عمارة 34 تجزئة الحرية",
        "addressLocality": "Tiznit",
        "postalCode": "85000",
        "addressCountry": "MA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212702060323",
        "contactType": "sales",
        "areaServed": "MA",
        "availableLanguage": ["Arabic", "French"]
      },
      "sameAs": [
        "https://www.facebook.com/tozdaght",
        "https://www.instagram.com/tozdaght"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://tozdaght.ma#website",
      "url": "https://tozdaght.ma",
      "name": "Tozdaght Immobilière",
      "publisher": {
        "@id": "https://tozdaght.ma#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tozdaght.ma/projects?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Main Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "الرئيسية",
          "url": "https://tozdaght.ma"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "مشاريعنا",
          "url": "https://tozdaght.ma/projects"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "من نحن",
          "url": "https://tozdaght.ma/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "اتصل بنا",
          "url": "https://tozdaght.ma/contact"
        }
      ]
    }
  ]

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${almarai.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="9kc5L5wOyV7IO8oIFHIgLQ"
          async
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
