'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, ArrowLeft, Building2, Home, MapPin, Briefcase, FileText, Users, Phone } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { cn } from '@/lib/utils'

const content = {
  ar: {
    hero: {
      badge: 'مشروع تجزئة وإقامة النجمة – تيزنيت',
      title: 'تجزئة وإقامة النجمة في قلب مدينة تيزنيت',
      subtitle: 'نقدم لكم مشاريع عقارية متطورة بمعايير عالمية تجمع بين الفخامة والعملية',
      cta: 'اكتشف المشروع',
      ctaSecondary: 'تواصل معنا',
    },
    about: {
      label: 'من نحن',
      title: 'توزدغت للعقار والبناء',
      paragraph1: 'توزدغت هي شركة متخصصة في مجال العقار والبناء، تقدم حلولاً متكاملة في تطوير وإنجاز المشاريع العقارية وفق أعلى معايير الجودة والاحترافية.',
      paragraph2: 'تتمثل مهمة الشركة في تصميم وتنفيذ مشاريع سكنية وعمرانية تلبي احتياجات العملاء، مع توفير مواكبة شاملة في جميع مراحل المشروع.',
      servicesLabel: 'تقدم توزدغت مجموعة من الخدمات تشمل:',
      services: [
        'تطوير المشاريع العقارية',
        'البناء والتشييد',
        'تهيئة الأراضي',
        'إدارة المشاريع',
        'استشارات عقارية',
        'شراكات استثمارية',
      ],
      cta: 'اعرف المزيد',
      stats: [
        { number: '+10', label: 'سنوات خبرة' },
        { number: '+6', label: 'مشاريع' },
        { number: '+200', label: 'وحدة' },
        { number: '+500', label: 'عميل' },
      ],
    },
    services: {
      title: 'خدماتنا المتميزة',
      subtitle: 'نقدم مجموعة شاملة من الخدمات العقارية بأعلى معايير الجودة',
      items: [
        { title: 'البناء والعمارة', desc: 'تشييد المباني السكنية والتجارية بأعلى معايير الجودة', icon: Building2 },
        { title: 'تجهيز الأراضي', desc: 'تهيئة وتجهيز الأراضي وتحويلها إلى مشاريع سكنية متكاملة', icon: MapPin },
        { title: 'تسيير المشاريع', desc: 'إدارة شاملة لجميع مراحل المشاريع العقارية', icon: Briefcase },
        { title: 'الأعمال العقارية', desc: 'خدمات متكاملة في بيع وشراء وتأجير العقارات', icon: Home },
        { title: 'الدراسات التقنية', desc: 'دراسات تقنية ومعمارية دقيقة لضمان نجاح المشاريع', icon: FileText },
        { title: 'شراكات استثمارية', desc: 'فرص استثمارية مميزة بشراكات استراتيجية ناجحة', icon: Users },
      ],
    },
    projects: {
      title: 'مشاريعنا المتميزة',
      subtitle: 'اكتشف مجموعة مشاريعنا العقارية في مختلف مدن المغرب',
      cta: 'عرض جميع المشاريع',
    },
    cta: {
      title: 'هل تبحث عن استثمار عقاري مضمون؟',
      subtitle: 'تواصل معنا الآن للحصول على استشارة مجانية ومعرفة المزيد عن فرص الاستثمار',
      button: 'تواصل معنا',
      phone: 'اتصل بنا مباشرة',
    },
  },
  fr: {
    hero: {
      badge: 'Projet An-Najma – Tiznit',
      title: 'Quartier résidentiel et commercial moderne au cœur de Tiznit',
      subtitle: 'Nous proposons des projets immobiliers de standing alliant luxe et praticité.',
      cta: 'Découvrir le projet',
      ctaSecondary: 'Nous contacter',
    },
    about: {
      label: 'Qui sommes-nous',
      title: 'Tozdaght Immobilier & Construction',
      paragraph1: 'Tozdaght est une société spécialisée dans l\'immobilier et la construction, proposant des solutions intégrées selon les normes les plus élevées.',
      paragraph2: 'Notre mission est de concevoir et réaliser des projets résidentiels répondant aux besoins des clients, avec un accompagnement complet.',
      servicesLabel: 'Nos services comprennent :',
      services: [
        'Développement immobilier',
        'Construction',
        'Aménagement de terrains',
        'Gestion de projets',
        'Conseil immobilier',
        'Partenariats',
      ],
      cta: 'En savoir plus',
      stats: [
        { number: '+10', label: 'Ans d\'exp.' },
        { number: '+6', label: 'Projets' },
        { number: '+200', label: 'Unités' },
        { number: '+500', label: 'Clients' },
      ],
    },
    services: {
      title: 'Nos services',
      subtitle: 'Une gamme complète de services immobiliers selon les plus hauts standards',
      items: [
        { title: 'Construction', desc: 'Construction de bâtiments résidentiels et commerciaux', icon: Building2 },
        { title: 'Aménagement', desc: 'Viabilisation et aménagement de terrains', icon: MapPin },
        { title: 'Gestion', desc: 'Gestion complète de toutes les phases des projets', icon: Briefcase },
        { title: 'Transactions', desc: 'Services complets de vente, achat et location', icon: Home },
        { title: 'Études techniques', desc: 'Études techniques et architecturales précises', icon: FileText },
        { title: 'Partenariats', desc: 'Opportunités d\'investissement attractives', icon: Users },
      ],
    },
    projects: {
      title: 'Nos projets',
      subtitle: 'Découvrez notre portfolio de projets immobiliers au Maroc',
      cta: 'Voir tous les projets',
    },
    cta: {
      title: 'Vous cherchez un investissement immobilier sûr ?',
      subtitle: 'Contactez-nous pour une consultation gratuite',
      button: 'Contactez-nous',
      phone: 'Appelez-nous',
    },
  },
  en: {
    hero: {
      badge: 'An-Najma Project – Tiznit',
      title: 'Modern residential and commercial district in the heart of Tiznit',
      subtitle: 'We offer premium real estate projects combining luxury and practicality.',
      cta: 'Explore the project',
      ctaSecondary: 'Contact us',
    },
    about: {
      label: 'About us',
      title: 'Tozdaght Real Estate & Construction',
      paragraph1: 'Tozdaght is specialized in real estate and construction, providing integrated solutions according to the highest standards.',
      paragraph2: 'Our mission is to design and implement residential projects that meet client needs with full support.',
      servicesLabel: 'Our services include:',
      services: [
        'Real estate development',
        'Construction',
        'Land development',
        'Project management',
        'Real estate consulting',
        'Investment partnerships',
      ],
      cta: 'Learn more',
      stats: [
        { number: '+10', label: 'Years exp.' },
        { number: '+6', label: 'Projets' },
        { number: '+200', label: 'Units' },
        { number: '+500', label: 'Clients' },
      ],
    },
    services: {
      title: 'Our services',
      subtitle: 'A comprehensive range of real estate services to the highest standards',
      items: [
        { title: 'Construction', desc: 'Building residential and commercial properties', icon: Building2 },
        { title: 'Land development', desc: 'Preparation and development of land', icon: MapPin },
        { title: 'Management', desc: 'Full management of all project phases', icon: Briefcase },
        { title: 'Transactions', desc: 'Complete services for selling, buying, renting', icon: Home },
        { title: 'Technical studies', desc: 'Precise technical and architectural studies', icon: FileText },
        { title: 'Partnerships', desc: 'Attractive investment opportunities', icon: Users },
      ],
    },
    projects: {
      title: 'Our projects',
      subtitle: 'Discover our real estate portfolio across Morocco',
      cta: 'View all projects',
    },
    cta: {
      title: 'Looking for a secure real estate investment?',
      subtitle: 'Contact us now for a free consultation',
      button: 'Contact us',
      phone: 'Call us directly',
    },
  },
}

// Projets fixes affichés dans l'accueil — najma et gelmim en priorité
const FEATURED_PROJECTS = [
  { slug: 'najma', name: 'تجزئة النجمة', city: 'تيزنيت', citySlug: 'tiznit', status: 'active', image: '/images/najma/najma.png' },
  { slug: 'gelmim', name: 'شقق طريق كلميم', city: 'تيزنيت', citySlug: 'tiznit', status: 'active', image: '/images/gelmim/gelmim.png' },
  { slug: 'touhmo', name: 'توهمو', city: 'أيت ملول', citySlug: 'ait-melloul', status: 'active', image: '/images/touhmo/touhmo.png' },
  { slug: 'hay-ta9adom', name: 'حي التقدم', city: 'لقليعة', citySlug: 'l9li3a', status: 'active', image: '/images/hay-ta9adom/hay-ta9adom.png' },
]

// ─── Hero Slider ───────────────────────────────────────────────────────────────
function HeroSlider({ t }: { t: any }) {
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
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.id} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: selectedIndex === index ? 1 : 0, zIndex: selectedIndex === index ? 1 : 0 }}>
          <img src={slide.src} alt={`slide ${index}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container-custom text-center text-white px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gold opacity-70" />
              <span className="text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 border border-gold/30 rounded-full backdrop-blur-sm bg-black/20">
                {t.hero.badge}
              </span>
              <div className="h-px w-8 bg-gold opacity-70" />
            </div>

           <h1 className="font-almarai font-bold mb-6 max-w-4xl mx-auto leading-tight text-center">
            <span style={{ color: '#E53E3E', fontSize:'clamp(2rem, 8vw, 5rem)', lineHeight: '1' }} className="block mb-2">
              جديد
            </span>
            <span className="text-gold block text-3xl md:text-5xl lg:text-6xl">
              تجزئة وإقامة النجمة في قلب مدينة تيزنيت
            </span>
          </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/projects/tiznit/najma"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-secondary transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
                {t.hero.cta}
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20">
                {t.hero.ctaSecondary}
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
function StatsBar({ stats }: { stats: any[] }) {
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

// ─── Projects Section (juste après slider) ─────────────────────────────────────
function ProjectsSection({ t }: { t: any }) {
  return (
    <section className="section-padding" style={{ background: '#FAF7F2' }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">مشاريعنا</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </div>
          <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary mb-4">{t.projects.title}</h2>
          <p className="text-secondary/50 max-w-xl mx-auto text-sm">{t.projects.subtitle}</p>
          <div className="gold-line w-12 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div key={project.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link href={`/projects/${project.citySlug}/${project.slug}`}>
                <div className="group rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-400 bg-white"
                  style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={project.image} alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-status-available text-white">
                        نشط
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border group-hover:border-gold/20 transition-colors">
                    <div className="flex items-center gap-1.5 text-gold text-xs font-semibold mb-1">
                      <MapPin className="w-3 h-3" />
                      {project.city}
                    </div>
                    <h3 className="font-almarai font-bold text-secondary group-hover:text-gold transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
            {t.projects.cta}
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection({ t }: { t: any }) {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0A1628, #1A2E4A)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.lesmaisonsferrian.be/medias/photos/blog/2023/IMG-comment-vendre-bien-immobilier-rapidement-maison-vente-etapes-hainaut.jpg"
                alt="توزدغت" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold rounded-tr-xl opacity-60" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold rounded-bl-xl opacity-60" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-gold text-center"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
              <span className="block text-3xl font-bold text-secondary">+10</span>
              <span className="text-secondary/80 text-xs font-semibold">سنوات خبرة</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-bold text-xs uppercase tracking-widest">{t.about.label}</span>
            </div>
            <h2 className="font-almarai text-3xl md:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
            <div className="gold-line w-12 mb-6" />
            <p className="text-white/70 mb-4 leading-relaxed">{t.about.paragraph1}</p>
            <p className="text-white/70 mb-6 leading-relaxed">{t.about.paragraph2}</p>
            <p className="font-bold text-white mb-4 text-sm">{t.about.servicesLabel}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {t.about.services.map((service: string, index: number) => (
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
              {t.about.cta}
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ──────────────────────────────────────────────────────────
function ServicesSection({ t }: { t: any }) {
  return (
    <section className="section-padding" style={{ background: '#FAF7F2' }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">خدماتنا</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </div>
          <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary mb-4">{t.services.title}</h2>
          <p className="text-secondary/50 max-w-xl mx-auto text-sm">{t.services.subtitle}</p>
          <div className="gold-line w-12 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service: any, index: number) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border hover:border-gold/30 transition-all duration-300 bg-white"
              style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.04)' }}>
              <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-almarai font-bold text-lg text-secondary mb-2 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ───────────────────────────────────────────────────────────────
function CTASection({ t }: { t: any }) {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #070E1A 0%, #0A1628 60%, #0D1F3C 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #3B7BC8, transparent)' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">استثمر معنا</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </div>
          <h2 className="font-almarai text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-sm">{t.cta.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-lg"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
              {t.cta.button}
            </Link>
            <a href="tel:0702060323"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 border border-white/20 hover:border-gold/40 bg-white/5 hover:bg-white/10">
              <Phone className="w-4 h-4 text-gold" />
              {t.cta.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider t={t} />
      <StatsBar stats={t.about.stats} />
      <ProjectsSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
      <CTASection t={t} />
      <Footer />
    </main>
  )
}