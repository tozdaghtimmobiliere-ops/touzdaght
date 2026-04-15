'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackButton } from '@/components/ui/back-button'
import { useLanguage } from '@/components/providers'
import { Building2, MapPin } from 'lucide-react'

const content = {
  ar: {
    title: 'مشروع تجزئة النجمة',
    subtitle: 'اختر القسم الذي تريد الاطلاع عليه',
    immeuble: {
      title: 'الشقق السكنية',
      desc: 'استكشف الشقق السكنية الفاخرة المتاحة وتفاصيلها',
    },
    terrain: {
      title: 'البقع الأرضية',
      desc: 'استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية',
    },
    city: 'تيزنيت',
  },
  fr: {
    title: 'Projet An-Najma',
    subtitle: 'Choisissez la section que vous souhaitez consulter',
    immeuble: {
      title: 'Appartements résidentiels',
      desc: 'Découvrez les appartements de luxe disponibles et leurs détails',
    },
    terrain: {
      title: 'Terrains',
      desc: 'Découvrez les terrains disponibles et leurs emplacements stratégiques',
    },
    city: 'Tiznit',
  },
  en: {
    title: 'An-Najma Project',
    subtitle: 'Choose the section you want to consult',
    immeuble: {
      title: 'Residential apartments',
      desc: 'Explore the available luxury apartments and their details',
    },
    terrain: {
      title: 'Land parcels',
      desc: 'Explore the available land parcels and their strategic locations',
    },
    city: 'Tiznit',
  },
}

export default function NajmaSelectionPage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] bg-secondary">
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10 py-12 md:py-20">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-accent text-sm mb-3">
              <MapPin className="w-4 h-4" />
              {t.city}
            </div>
            <h1 className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-white/80 text-lg">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Cards sélection */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* Card Immeuble */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/projects/tiznit/najma/immeuble">
                <div className="bg-secondary hover:bg-secondary/90 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors overflow-hidden">
                    <img 
                      src="/images/najma/najma-thumbnail.jpg" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={t.immeuble.title}
                    />
                  </div>
                  <h2 className="font-almarai text-2xl font-bold text-white mb-3">
                    {t.immeuble.title}
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.immeuble.desc}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Card Terrain */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/projects/tiznit/najma/terrain">
                <div className="bg-secondary hover:bg-secondary/90 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors overflow-hidden">
                    <img 
                      src="/images/najma/najma-thumbnail.jpg" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={t.terrain.title}
                    />
                  </div>
                  <h2 className="font-almarai text-2xl font-bold text-white mb-3">
                    {t.terrain.title}
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.terrain.desc}
                  </p>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}