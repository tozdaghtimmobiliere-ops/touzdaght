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
    title: 'تجزئة النجمة',
    subtitle: 'اختر القسم الذي تريد الاطلاع عليه',
    terrain: {
      title: 'البقع الأرضية',
      desc: 'استكشف البقع الأرضية المتوفرة ومواقعها الاستراتيجية',
    },
    immeuble: {
      title: 'الشقق السكنية',
      desc: 'شقق اقتصادية واجتماعية في موقع متميز بقلب مدينة تيزنيت',
    },
    offices: {
      title: 'مكاتب ادارية - طريق اكلو',
      desc: 'مكاتب إدارية بمساحات متميزة وتشطيبات عصرية لتناسب احتياجاتكم',
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
    offices: {
      title: 'Plateaux Bureau',
      desc: 'Plateaux de bureaux avec des superficies spacieuses et finitions modernes',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">

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
                    <h2 className="font-almarai text-2xl md:text-3xl font-black text-secondary mb-4 group-hover:text-gold transition-colors duration-300 flex flex-col gap-1">
                      {(() => {
                        const name = t('projects.najma.apartments');
                        const parts = name.split(/\s*(?:\u2014|\u2013|-)\s+/);
                        if (parts.length > 1) {
                          return (
                            <>
                              <span className="block">{parts[0]}</span>
                              <span className="block text-red-600 text-2xl md:text-3xl font-black leading-tight drop-shadow-sm">{parts.slice(1).join(' ')}</span>
                            </>
                          );
                        }
                        return name;
                      })()}
                    </h2>
                    <p className="font-cairo text-secondary text-lg leading-relaxed mb-6">
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
                    <h2 className="font-almarai text-2xl md:text-3xl font-black text-secondary mb-4 group-hover:text-gold transition-colors duration-300 flex flex-col gap-1">
                      {(() => {
                        const name = t('projects.najma.terrains');
                        const parts = name.split(/\s*(?:\u2014|\u2013|-)\s+/);
                        if (parts.length > 1) {
                          return (
                            <>
                              <span className="block">{parts[0]}</span>
                              <span className="block text-red-600 text-2xl md:text-3xl font-black leading-tight drop-shadow-sm">{parts.slice(1).join(' ')}</span>
                            </>
                          );
                        }
                        return name;
                      })()}
                    </h2>
                    <p className="font-cairo text-secondary text-lg leading-relaxed mb-6">
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
      {/* Project Location Map Section */}
      <section className="section-padding py-20" style={{ background: '#FAF7F2' }}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image on the Left */}
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/najma/location.jpeg" 
                  alt="موقع المشروع" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center lg:text-right flex items-center justify-center lg:justify-end gap-2">
                <span className="text-secondary/70 font-cairo">الرابط بالاقمار الصناعية</span>
                <a 
                  href="https://maps.app.goo.gl/fXcf9BPCcLGGPAeo7?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors whitespace-nowrap"
                >
                  اضغط هنا
                </a>
              </div>
            </div>
            {/* Text on the Right */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold/60" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">الموقع</span>
              </div>
              <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary mb-6">موقع المشروع</h2>
              <p className="text-secondary/70 text-lg mb-8 leading-relaxed">
                تتموقع تجزئة النجمة في قلب مدينة تيزنيت، مما يضمن لكم القرب من جميع المرافق الضرورية والخدمات العمومية، مع سهولة الولوج لمختلف أحياء المدينة.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>


      <Footer />
    </main>
  )
}