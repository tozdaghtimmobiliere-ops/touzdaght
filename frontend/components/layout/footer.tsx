'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers'

const footerContent = {
  ar: {
    tagline: 'نبني أحلامك بأعلى معايير الجودة',
    companyTitle: 'تواصل معنا',
    projectsTitle: 'مشاريعنا',
    linksTitle: 'روابط سريعة',
    servicesTitle: 'خدماتنا',
    rights: '© 2026 Tozdaght Immobilière — جميع الحقوق محفوظة',
    address: 'الشقة 2 الطابق 1 عمارة 34\nتجزئة الحرية، تيزنيت',
    services: [
      'تطوير المشاريع العقارية',
      'البناء والتشييد',
      'تهيئة الأراضي',
      'إدارة المشاريع',
      'استشارات عقارية',
      'شراكات استثمارية',
    ],
    links: [
      { href: '/', label: 'الرئيسية' },
      { href: '/about', label: 'من نحن' },
      { href: '/projects', label: 'المشاريع' },
      { href: '/contact', label: 'اتصل بنا' },
    ],
  },
  fr: {
    tagline: 'Nous construisons vos rêves selon les plus hauts standards',
    companyTitle: 'Contactez-nous',
    projectsTitle: 'Nos projets',
    linksTitle: 'Liens rapides',
    servicesTitle: 'Nos services',
    rights: '© 2026 Tozdaght Immobilière — Tous droits réservés',
    address: 'Appartement 2, 1er étage, Immeuble 34\nQuartier El Youssoufia, Tiznit',
    services: [
      'Développement immobilier',
      'Construction',
      'Aménagement de terrains',
      'Gestion de projets',
      'Conseil immobilier',
      'Partenariats',
    ],
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'Qui sommes-nous' },
      { href: '/projects', label: 'Projets' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  en: {
    tagline: 'Building your dreams to the highest standards',
    companyTitle: 'Contact us',
    projectsTitle: 'Our projects',
    linksTitle: 'Quick links',
    servicesTitle: 'Our services',
    rights: '© 2026 Tozdaght Immobilière — All rights reserved',
    address: 'Apartment 2, 1st floor, Building 34\nEl Youssoufia District, Tiznit',
    services: [
      'Real estate development',
      'Construction',
      'Land development',
      'Project management',
      'Real estate consulting',
      'Investment partnerships',
    ],
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About us' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact' },
    ],
  },
}

const projects = [
  { name: 'تجزئة النجمة', href: '/projects/tiznit/najma', city: 'تيزنيت' },
  { name: 'شقق طريق كلميم', href: '/projects/tiznit/gelmim', city: 'تيزنيت' },
  { name: 'العين الزرقاء', href: '/projects/tiznit/ain-zarqa', city: 'تيزنيت' },
  { name: 'تيليلا', href: '/projects/agadir/tilila', city: 'أكادير' },
  { name: 'توهمو', href: '/projects/ait-melloul/touhmo', city: 'أيت ملول' },
  { name: 'حي التقدم', href: '/projects/l9li3a/hay-ta9adom', city: 'لقليعة' },
]

export function Footer() {
  const { language } = useLanguage()
  const content = footerContent[language as keyof typeof footerContent] || footerContent.ar

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070E1A 0%, #0A1628 50%, #0D1F3C 100%)' }}>

      {/* Gold top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-3"
          style={{ background: 'radial-gradient(circle, #3B7BC8, transparent)' }} />
      </div>

      <div className="container-custom relative z-10 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <img src="/images/logo.png" alt="توزدغت" className="h-12 w-auto object-contain" />
              <div>
                <span className="font-almarai font-bold text-xl text-white block">توزدغت</span>
                <span className="text-gold text-xs tracking-widest">IMMOBILIÈRE</span>
              </div>
            </Link>

            <p className="text-white/50 text-sm mb-6 leading-relaxed">{content.tagline}</p>

            <h4 className="text-gold font-bold mb-4 text-sm uppercase tracking-wider">{content.companyTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/60 text-sm whitespace-pre-line leading-relaxed">{content.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <a href="tel:0702060323" className="text-white/60 hover:text-gold transition-colors text-sm">
                  0702060323
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <a href="mailto:contact@tozdaght.ma" className="text-white/60 hover:text-gold transition-colors text-sm">
                  contact@tozdaght.ma
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/40 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-wider pb-2 border-b border-gold/20">
              {content.projectsTitle}
            </h4>
            <ul className="space-y-2.5">
              {projects.map((project) => (
                <li key={project.href}>
                  <Link href={project.href}
                    className="group flex items-center justify-between text-white/60 hover:text-gold transition-all duration-200 text-sm py-1">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                      {project.name}
                    </span>
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-wider pb-2 border-b border-gold/20">
              {content.linksTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="group flex items-center justify-between text-white/60 hover:text-gold transition-all duration-200 text-sm py-1">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                      {link.label}
                    </span>
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-wider pb-2 border-b border-gold/20">
              {content.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.services.map((service, index) => (
                <li key={index}
                  className="flex items-center gap-2 text-white/60 text-sm py-1">
                  <span className="w-1 h-1 bg-gold/40 rounded-full flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{content.rights}</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-white/30 text-xs">Made with ♥ in Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  )
}