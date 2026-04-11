'use client'

import { motion } from 'framer-motion'
import { Check, Target, Eye, Award } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { BackButton } from '@/components/ui/back-button'

const content = {
  ar: {
    hero: { title: 'من نحن', subtitle: 'تعرف على شركة توزدغت للعقار والبناء' },
    about: {
      label: 'من نحن',
      title: 'توزدغت للعقار والبناء',
      paragraph1: 'توزدغت هي شركة متخصصة في مجال العقار والبناء، تقدم حلولاً متكاملة في تطوير وإنجاز المشاريع العقارية وفق أعلى معايير الجودة والاحترافية.',
      paragraph2: 'تتمثل مهمة الشركة في تصميم وتنفيذ مشاريع سكنية وعمرانية تلبي احتياجات العملاء، مع توفير مواكبة شاملة في جميع مراحل المشروع.',
      servicesLabel: 'تقدم توزدغت مجموعة من الخدمات تشمل:',
      services: ['تطوير المشاريع العقارية', 'البناء والتشييد', 'تهيئة الأراضي', 'إدارة المشاريع', 'استشارات عقارية', 'شراكات استثمارية'],
    },
    mission: { title: 'مهمتنا', description: 'تقديم حلول عقارية مبتكرة ومتكاملة تلبي تطلعات عملائنا وتساهم في تنمية المجتمع من خلال مشاريع سكنية وتجارية عالية الجودة.' },
    vision: { title: 'رؤيتنا', description: 'أن نكون الشركة الرائدة في مجال العقار والبناء في جنوب المغرب، معترفاً بنا كشريك موثوق به في تحقيق أحلام العملاء العقارية.' },
    values: {
      title: 'قيمنا',
      items: [
        { title: 'الجودة', desc: 'الالتزام بأعلى معايير الجودة في جميع مشاريعنا' },
        { title: 'الشفافية', desc: 'الصراحة والوضوح في جميع تعاملاتنا مع العملاء' },
        { title: 'الابتكار', desc: 'تبني أحدث التقنيات والحلول في مجال البناء' },
        { title: 'الالتزام', desc: 'الوفاء بالمواعيد والوعود المقطوعة لعملائنا' },
      ],
    },
    stats: {
      title: 'إنجازاتنا',
      items: [
        { number: '+10', label: 'سنوات الخبرة' },
        { number: '+6', label: 'مشاريع منجزة' },
        { number: '+200', label: 'وحدة عقارية' },
        { number: '+500', label: 'عميل راضٍ' },
      ],
    },
  },
  fr: {
    hero: { title: 'Qui sommes-nous', subtitle: 'Découvrez Tozdaght Immobilier & Construction' },
    about: {
      label: 'Qui sommes-nous',
      title: 'Tozdaght Immobilier & Construction',
      paragraph1: 'Tozdaght est une société spécialisée dans l\'immobilier et la construction, proposant des solutions intégrées selon les normes les plus élevées.',
      paragraph2: 'Notre mission est de concevoir et réaliser des projets résidentiels répondant aux besoins des clients, avec un accompagnement complet.',
      servicesLabel: 'Nos services comprennent :',
      services: ['Développement immobilier', 'Construction', 'Aménagement de terrains', 'Gestion de projets', 'Conseil immobilier', 'Partenariats'],
    },
    mission: { title: 'Notre mission', description: 'Offrir des solutions immobilières innovantes qui répondent aux aspirations de nos clients et contribuent au développement de la communauté.' },
    vision: { title: 'Notre vision', description: 'Devenir l\'entreprise leader dans l\'immobilier au sud du Maroc, reconnue comme partenaire de confiance.' },
    values: {
      title: 'Nos valeurs',
      items: [
        { title: 'Qualité', desc: 'Engagement envers les normes les plus élevées' },
        { title: 'Transparence', desc: 'Honnêteté dans toutes nos transactions' },
        { title: 'Innovation', desc: 'Adoption des dernières technologies' },
        { title: 'Engagement', desc: 'Respect des délais et des promesses' },
      ],
    },
    stats: {
      title: 'Nos réalisations',
      items: [
        { number: '+10', label: 'Années d\'expérience' },
        { number: '+6', label: 'Projets réalisés' },
        { number: '+200', label: 'Unités immobilières' },
        { number: '+500', label: 'Clients satisfaits' },
      ],
    },
  },
  en: {
    hero: { title: 'About us', subtitle: 'Learn about Tozdaght Real Estate & Construction' },
    about: {
      label: 'About us',
      title: 'Tozdaght Real Estate & Construction',
      paragraph1: 'Tozdaght is specialized in real estate and construction, providing integrated solutions according to the highest standards.',
      paragraph2: 'Our mission is to design and implement residential projects that meet client needs with full support.',
      servicesLabel: 'Our services include:',
      services: ['Real estate development', 'Construction', 'Land development', 'Project management', 'Real estate consulting', 'Investment partnerships'],
    },
    mission: { title: 'Our mission', description: 'To provide innovative real estate solutions that meet our clients\' aspirations and contribute to community development.' },
    vision: { title: 'Our vision', description: 'To be the leading real estate company in southern Morocco, recognized as a trusted partner.' },
    values: {
      title: 'Our values',
      items: [
        { title: 'Quality', desc: 'Commitment to the highest quality standards' },
        { title: 'Transparency', desc: 'Honesty in all our dealings' },
        { title: 'Innovation', desc: 'Adoption of latest technologies' },
        { title: 'Commitment', desc: 'Fulfilling deadlines and promises' },
      ],
    },
    stats: {
      title: 'Our achievements',
      items: [
        { number: '+10', label: 'Years of experience' },
        { number: '+6', label: 'Projects completed' },
        { number: '+200', label: 'Real estate units' },
        { number: '+500', label: 'Satisfied clients' },
      ],
    },
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar

  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="من نحن" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">{t.about.label}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
            {t.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }} className="text-white/50 text-lg max-w-2xl">
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="section-padding" style={{ background: '#FAF7F2' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-bold text-xs uppercase tracking-widest">{t.about.label}</span>
              </div>
              <h2 className="font-almarai text-3xl md:text-4xl font-bold text-secondary mb-4">
                {t.about.title}
              </h2>
              <div className="gold-line w-12 mb-6" />
              <p className="text-secondary/70 mb-4 leading-relaxed">{t.about.paragraph1}</p>
              <p className="text-secondary/70 mb-6 leading-relaxed">{t.about.paragraph2}</p>
              <p className="font-bold text-secondary mb-4 text-sm">{t.about.servicesLabel}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.about.services.map((service: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-secondary/70 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.lesmaisonsferrian.be/medias/photos/blog/2023/IMG-comment-vendre-bien-immobilier-rapidement-maison-vente-etapes-hainaut.jpg"
                  alt="توزدغت" className="w-full h-full object-cover" />
              </div>
              {/* Gold corners */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold rounded-tr-xl opacity-50" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold rounded-bl-xl opacity-50" />
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl p-5 text-center shadow-gold"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A8863A)' }}>
                <span className="block text-3xl font-bold text-secondary">+10</span>
                <span className="text-secondary/80 text-xs font-semibold">سنوات خبرة</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold opacity-40" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">رؤيتنا ومهمتنا</span>
              <div className="h-px w-8 bg-gold opacity-40" />
            </div>
            <div className="gold-line w-12 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: t.mission.title, desc: t.mission.description },
              { icon: Eye, title: t.vision.title, desc: t.vision.description },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all group"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))' }}>
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-almarai font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: '#FAF7F2' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold opacity-60" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">قيمنا</span>
              <div className="h-px w-8 bg-gold opacity-60" />
            </div>
            <h2 className="font-almarai text-3xl font-bold text-secondary mb-2">{t.values.title}</h2>
            <div className="gold-line w-12 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-border hover:border-gold/30 transition-all group"
                style={{ boxShadow: '0 4px 20px rgba(10,22,40,0.04)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))' }}>
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-almarai font-bold text-lg text-secondary mb-2 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-secondary/50 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C40, transparent)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold opacity-40" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">أرقامنا</span>
              <div className="h-px w-8 bg-gold opacity-40" />
            </div>
            <h2 className="font-almarai text-3xl font-bold text-white mb-2">{t.stats.title}</h2>
            <div className="gold-line w-12 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/10 group-hover:border-gold/30 transition-all"
                  style={{ background: 'rgba(201,168,76,0.05)' }}>
                  <span className="font-almarai text-2xl font-bold text-gold">{stat.number}</span>
                </div>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}