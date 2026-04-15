'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackButton } from '@/components/ui/back-button'
import { useLanguage } from '@/components/providers'
import { Building2, MapPin, ArrowLeft } from 'lucide-react'

const content = {
  ar: {
    title: 'مشروع تجزئة النجمة',
    subtitle: 'اختر القسم الذي تريد الاطلاع عليه',
    terrain: {
      title: 'البقع الأرضية',
      desc: 'استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية',
    },
    immeuble: {
      title: 'الشقق السكنية',
      desc: 'شقق اقتصادية واجتماعية في موقع متميز بقلب مدينة تيزنيت',
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
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero */}
      <section className="relative pt-[70px] min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-light">
          <img
            src="/images/najma/najma.png"
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
            alt="Project Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-cream" />
        </div>

        <div className="container-custom relative z-10 py-16 text-center">
          <BackButton />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold/30 bg-black/20 backdrop-blur-md mb-8">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Tiznit, Maroc</span>
            </div>
            <h1 className="font-almarai text-4xl md:text-6xl font-extrabold text-white mb-6">
              {t('projects.najma.terrains').split(' — ')[0]}
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Selection Cards */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">

            {/* Card Immeuble */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <Link href="/projects/tiznit/najma/immeuble" className="block group">
                <div className="project-card-luxury bg-white group-hover:-translate-y-4 transition-all duration-500 overflow-hidden">
                  <div className="aspect-[4/3] relative flex items-center justify-center bg-cream/50 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500" />
                    <img
                      src="/images/najma/pub.jpg"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={t('projects.najma.apartments')}
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h2 className="font-almarai text-2xl md:text-3xl font-black text-secondary mb-4 group-hover:text-gold transition-colors duration-300">
                      {t('projects.najma.apartments')}
                    </h2>
                    <p className="font-cairo text-secondary/60 text-lg leading-relaxed mb-6">
                      {t('projects.najma.apartments_desc')}
                    </p>
                    <div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs border-b border-gold/30 pb-1 group-hover:border-gold transition-all">
                      VOIR PLUS
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card Terrain */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link href="/projects/tiznit/najma/terrain" className="block group">
                <div className="project-card-luxury bg-white group-hover:-translate-y-4 transition-all duration-500 overflow-hidden">
                  <div className="aspect-[4/3] relative flex items-center justify-center bg-cream/50 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500" />
                    <img
                      src="/images/najma/pub-lot.jpg"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={t('projects.najma.terrains')}
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h2 className="font-almarai text-2xl md:text-3xl font-black text-secondary mb-4 group-hover:text-gold transition-colors duration-300">
                      {t('projects.najma.terrains')}
                    </h2>
                    <p className="font-cairo text-secondary/60 text-lg leading-relaxed mb-6">
                      {t('projects.najma.terrains_desc')}
                    </p>
                    <div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs border-b border-gold/30 pb-1 group-hover:border-gold transition-all">
                      VOIR PLUS
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
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