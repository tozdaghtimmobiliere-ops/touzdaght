'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, ArrowLeft, Building2, Home, MapPin, Briefcase, FileText, Users, Phone } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { cn } from '@/lib/utils'
import { ProjectCard as SharedProjectCard } from '@/components/ui/project-card'

const projectImages: Record<string, string> = {
  'najma': '/images/najma/najma-thumbnail.jpg',
  'gelmim': '/images/gelmim/gelmim.png',
  'touhmo': '/images/touhmo/touhmo.png',
  'hay-ta9adom': '/images/hay-ta9adom/9li3a.jpg',
  'najma-plateau': '/images/najma/plateau.jpg',
}

const cityOverrides: Record<string, string> = {
  'najma': 'تيزنيت - R+2/R+3/R+4',
  'gelmim': 'تيزنيت - R+3',
  'touhmo': 'أيت ملول - R+2',
  'hay-ta9adom': 'القليعة - R+1',
  'najma-plateau': 'تيزنيت - R+3 مع قبو',
}

const projectTypes: Record<string, Record<string, string>> = {
  ar: { residence: 'إقامة', house: 'منزل', lotissement: 'تجزئة', commercial: 'تجاري' },
  fr: { residence: 'Résidence', house: 'Maison', lotissement: 'Lotissement', commercial: 'Commercial' },
  en: { residence: 'Residence', house: 'House', lotissement: 'Subdivision', commercial: 'Commercial' },
}

// Projets fixes affichés dans l'accueil — najma et gelmim en priorité
const FEATURED_PROJECTS = [
  { id: 1, slug: 'najma', name: 'تجزئة النجمة — الشقق السكنية', status: 'active', type: 'residence', city: { name: 'تيزنيت', slug: 'tiznit' } },
  { id: 5, slug: 'najma-plateau', name: 'مكاتب ادارية - طريق اكلو', status: 'active', type: 'commercial', city: { name: 'تيزنيت', slug: 'tiznit' } },
  { id: 2, slug: 'gelmim', name: 'شقق حي سيدي معروف طريق كلميم', status: 'active', type: 'residence', city: { name: 'تيزنيت', slug: 'tiznit' } },
  { id: 3, slug: 'touhmo', name: 'شقق حي المزار - توهمو', status: 'active', type: 'residence', city: { name: 'أيت ملول', slug: 'ait-melloul' } },
  { id: 4, slug: 'hay-ta9adom', name: 'شقق حي التقدم', status: 'active', type: 'residence', city: { name: 'القليعة', slug: 'l9li3a' } },
]

// ─── Hero Slider ───────────────────────────────────────────────────────────────
function HeroSlider() {
  const { t } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slides = [
    { id: 1, src: '/images/najma/slider-najma-1.png' },
    { id: 2, src: '/images/najma/slider-najma-2.png' },
    { id: 3, src: '/images/najma/slider-najma-3.png' },
    { id: 4, src: '/images/najma/slider-najma-4.png' },
    { id: 5, src: '/images/najma/slider-najma-5.png' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.id} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: selectedIndex === index ? 1 : 0, zIndex: selectedIndex === index ? 1 : 0 }}>
          <img src={slide.src} alt={`Tozdaght Immobilière Project Slide ${index}`}
            className="w-full h-full object-cover render-4k" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container-custom text-center text-white px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-8 bg-red-950/60 backdrop-blur-2xl px-12 py-5 rounded-full border border-red-500/50 shadow-2xl scale-125">
              <span className="text-red-500 text-2xl font-black tracking-[0.3em] uppercase">
                {t('home.hero.badge')}
              </span>
            </div>

            <h1 className="font-almarai font-extrabold mb-8 max-w-5xl mx-auto leading-tight">
              <span className="text-white block text-4xl md:text-6xl lg:text-7xl mb-4">
                {t('home.hero.title')}
              </span>
              <div className="h-1 w-24 bg-gold mx-auto mb-6" />
            </h1>

            <p className="font-cairo text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/projects/tiznit/najma"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-secondary transition-all duration-500 hover:shadow-[0_0_30px_#C9A84C] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10">{t('home.hero.cta')}</span>
                <ArrowLeft className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white transition-all duration-300 hover:-translate-y-1 border-2 border-white/40 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white">
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <button onClick={() => setSelectedIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="slider-arrow right-6 z-20">
        <ChevronRight className="w-5 h-5 text-secondary" />
      </button>
      <button onClick={() => setSelectedIndex((prev) => (prev + 1) % slides.length)}
        className="slider-arrow left-6 z-20">
        <ChevronLeft className="w-5 h-5 text-secondary" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setSelectedIndex(index)}
            className={cn('slider-dot', selectedIndex === index && 'active')} />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gold animate-pulse" />
        <span className="text-gold text-xs tracking-widest rotate-90 origin-center">SCROLL</span>
      </div>
    </section>
  )
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar({ language }: { language: string }) {
  const stats = language === 'ar' ? [
    { number: '+10', label: 'سنوات خبرة' },
    { number: '+15', label: 'مشاريع' },
    { number: '+90', label: 'وحدة' },
    { number: '+50', label: 'زبون' },
  ] : [
    { number: '+10', label: 'Ans d\'exp.' },
    { number: '+15', label: 'Projets' },
    { number: '+90', label: 'Unités' },
    { number: '+50', label: 'Clients' },
  ]

  return (
    <div className="relative z-10"
      style={{ background: 'linear-gradient(135deg, #0A1628, #1A2E4A)' }}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="container-custom py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: any, i: number) => (
            <div key={i} className="text-center">
              <div className="font-almarai text-2xl md:text-3xl font-bold text-gold mb-1">{stat.number}</div>
              <div className="text-white/50 text-xs tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
    </div>
  )
}

// ─── Projects Section ──────────────────────────────────────────────────────────
function ProjectsSection() {
  const { t, language } = useLanguage()
  
  return (
    <section className="section-padding bg-background dark:bg-dark">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">{language === 'ar' ? 'مشاريعنا' : 'PROJETS'}</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </div>
          <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            توزدغت: أفضل المشاريع العقارية في تيزنيت وسوس
          </h2>
          <p className="text-secondary/50 dark:text-gray-400 max-w-xl mx-auto text-sm">
            استكشف مجموعتنا الحصرية من الشقق السكنية والبقع الأرضية المجهزة في أرقى أحياء تيزنيت، أكادير، وأيت ملول. استثمارك الآمن يبدأ مع توزدغت.
          </p>
          <div className="gold-line w-12 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1600px] mx-auto">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div key={project.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <SharedProjectCard 
                project={project} 
                types={projectTypes[language as keyof typeof projectTypes] || projectTypes.ar} 
                t={{ 
                  filter: { 
                    active: language === 'ar' ? 'نشط' : (language === 'fr' ? 'Actif' : 'Active'), 
                    completed: language === 'ar' ? 'مكتمل' : (language === 'fr' ? 'Terminé' : 'Completed')
                  }, 
                  viewDetails: language === 'ar' ? 'عرض التفاصيل' : (language === 'fr' ? 'Voir les détails' : 'View Details') 
                }} 
                projectImages={projectImages} 
                cityOverrides={cityOverrides} 
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
            {language === 'ar' ? 'عرض جميع المشاريع' : 'Tous les Projets'}
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  const { language } = useLanguage()
  const content = language === 'ar' ? {
    label: 'من نحن',
    title: 'توزدغت للعقار والبناء',
    p1: 'توزدغت هي شركة ناشئة في مجال العقار والبناء بمدينة تيزنيت ومنطقة سوس، حيث نقدم حلولاً عقارية متكاملة تشمل الشقق السكنية والبقع الأرضية والمكاتب الإدارية وفق معايير الجودة والاحترافية.',
    p2: 'تتمثل مهمتنا في توزدغت في تصميم وتنفيذ مشاريع عمرانية متميزة تلبي احتياجات السكن والاستثمار العقاري في المغرب، مع توفير مواكبة شاملة لزبنائنا في جميع مراحل التملك.',
    servicesLabel: 'لماذا تختار توزدغت للاستثمار العقاري؟',
    services: ['بناء وتشييد عصري', 'بقع أرضية محفظة ومجهزة', 'مواقع استراتيجية في تيزنيت', 'إدارة مشاريع احترافية', 'استشارات عقارية متخصصة', 'ضمان الجودة والمصداقية'],
    cta: 'تعرف على مشاريعنا'
  } : {
    label: 'À propos',
    title: 'Tozdaght Immobilier & Construction',
    p1: 'Tozdaght est une société spécialisée dans l\'immobilier et la construction, proposant des solutions intégrées selon les normes les plus élevées.',
    p2: 'Notre mission est de concevoir et réaliser des projets résidentiels répondant aux besoins des clients, avec un accompagnement complet.',
    servicesLabel: 'Nos services comprennent :',
    services: ['Développement', 'Construction', 'Aménagement', 'Gestion', 'Conseil', 'Partenariats'],
    cta: 'Savoir plus'
  }

  return (
    <section className="section-padding bg-secondary dark:bg-dark-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://www.lesmaisonsferrian.be/medias/photos/blog/2023/IMG-comment-vendre-bien-immobilier-rapidement-maison-vente-etapes-hainaut.jpg"
                alt="توزدغت للعقار والبناء - مشاريع سكنية متميزة في تيزنيت" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold rounded-tr-xl opacity-60" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold rounded-bl-xl opacity-60" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-bold text-xs uppercase tracking-widest">{content.label}</span>
            </div>
            <h2 className="font-almarai text-3xl md:text-4xl font-bold text-white mb-4">توزدغت للعقار والبناء - جودة ومصداقية</h2>
            <div className="gold-line w-12 mb-6" />
            <p className="text-white mb-4 leading-relaxed">{content.p1}</p>
            <p className="text-white mb-6 leading-relaxed">{content.p2}</p>
            <p className="font-bold text-white mb-4 text-sm">{content.servicesLabel}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {content.services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  {service}
                </li>
              ))}
            </ul>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 border border-gold/30 text-gold hover:bg-gold hover:text-secondary">
              {content.cta}
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ──────────────────────────────────────────────────────────
function ServicesSection() {
  const { language } = useLanguage()
  const content = language === 'ar' ? {
    title: 'خدماتنا المتميزة',
    subtitle: 'نقدم مجموعة شاملة من الخدمات العقارية بأعلى معايير الجودة',
    items: [
      { title: 'البناء والعمارة', desc: 'تشييد المباني السكنية والتجارية بأعلى معايير الجودة', icon: Building2 },
      { title: 'تجهيز الأراضي', desc: 'تهيئة وتجهيز الأراضي وتحويلها إلى مشاريع تجزئات و بقع للبيع أو البناء', icon: MapPin },
      { title: 'تسيير المشاريع', desc: 'إدارة شاملة لجميع مراحل المشاريع العقارية من مرحلة التصميم الى الاستغلال', icon: Briefcase },
      { title: 'الأعمال العقارية', desc: 'خدمات متكاملة في بيع وشراء و كراء العقارات', icon: Home },
      { title: 'الدراسات التقنية', desc: 'دراسات تقنية ومعمارية دقيقة لضمان نجاح المشاريع الصغيرة و الكبيرة', icon: FileText },
      { title: 'شراكات استثمارية', desc: 'فرص استثمارية مميزة بشراكات استراتيجية ناجحة تضمن لك مداخيل عالية', icon: Users },
    ]
  } : {
    title: 'Nos Services',
    subtitle: 'Une gamme complète de solutions immobilières premium',
    items: [
      { title: 'Construction', desc: 'Construction de bâtiments résidentiels et commerciaux', icon: Building2 },
      { title: 'Aménagement', desc: 'Viabilisation et aménagement de terrains', icon: MapPin },
      { title: 'Gestion', desc: 'Gestion complète de toutes les phases des projets', icon: Briefcase },
      { title: 'Transactions', desc: 'Vente, achat et location de propriétés', icon: Home },
      { title: 'Études', desc: 'Études techniques et architecturales précises', icon: FileText },
      { title: 'Partenariats', desc: 'Opportunités d\'investissement stratégiques', icon: Users },
    ]
  }

  return (
    <section className="section-padding bg-background dark:bg-dark">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14">
          <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary mb-4">خدماتنا العقارية المتكاملة</h2>
          <p className="text-secondary/50 max-w-xl mx-auto text-sm">{content.subtitle}</p>
          <div className="gold-line w-12 mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border dark:border-white/10 hover:border-gold/30 transition-all duration-300 bg-white dark:bg-dark-light shadow-sm">
              <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gold/10">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-almarai font-bold text-lg text-secondary dark:text-white mb-2">{service.title}</h3>
              <p className="text-secondary dark:text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ───────────────────────────────────────────────────────────────
function CTASection() {
  const { language } = useLanguage()
  const content = language === 'ar' ? {
    title: 'هل تبحث عن استثمار عقاري مضمون؟',
    subtitle: 'تواصل معنا الآن للحصول على استشارة مجانية ومعرفة المزيد عن فرص الاستثمار',
    button: 'تواصل معنا',
    phone: 'اتصل بنا مباشرة'
  } : {
    title: 'Besoin d\'un investissement sûr ?',
    subtitle: 'Contactez-nous pour une consultation gratuite et découvrez nos opportunités.',
    button: 'Nous contacter',
    phone: 'Appelez-nous'
  }

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#070E1A' }}>
      <div className="container-custom relative z-10 text-center">
        <h2 className="font-almarai text-3xl md:text-4xl font-bold text-white mb-4">{content.title}</h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10">{content.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 rounded-xl font-bold bg-gold text-secondary hover:shadow-gold-lg transition-all">
            {content.button}
          </Link>
          <a href="tel:0702060323" className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all">
            {content.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <StatsBar language={language} />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      {/* SEO Brand Dominance Section (Hidden from users, visible to crawlers) */}
      <section className="sr-only">
        <h2>Tozdaght Immobilière - توزدغت للعقار والبناء</h2>
        <p>
          شركة توزدغت المتخصصة في العقار والبناء تقدم لكم أفضل الشقق والبقع الأرضية في تيزنيت.
          Tozdaght is the leading real estate developer in Tiznit and Souss region.
          Whether you search for Tozdaght or Tozdagh, our projects like Residence An-Najma are designed for you.
          عقارات للبيع في تيزنيت، شقق مجهزة، بقع أرضية للبيع، إقامة النجمة، مشروع كلميم، توهمو أيت ملول.
        </p>
      </section>
      <Footer />
    </main>
  )
}