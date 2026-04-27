'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/providers'

export function Footer() {
  const { t } = useLanguage()

  const projects = [
    { name: t('projects.najma.terrains').split(' — ')[0], href: '/projects/tiznit/najma', city: 'Tiznit' },
    { name: 'Gelmim', href: '/projects/tiznit/gelmim', city: 'Tiznit' },
    { name: 'Ain Zarqa', href: '/projects/tiznit/ain-zarqa', city: 'Tiznit' },
    { name: 'Tilila', href: '/projects/agadir/tilila', city: 'Agadir' },
    { name: 'Touhmo', href: '/projects/ait-melloul/touhmo', city: 'Ait Melloul' },
    { name: 'Hay Ta9adom', href: '/projects/l9li3a/hay-ta9adom', city: 'L9li3a' },
  ]

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
            <Link href="/" className="flex items-center mb-4 group">
              <img src="/images/logo.png" alt={t('brand.name')} className="h-18 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.25)) brightness(1.05)' }} />
            </Link>

            <p className="font-cairo text-white/50 text-sm mb-6 leading-relaxed uppercase tracking-wide">{t('footer.tagline')}</p>

            <h4 className="text-gold font-black mb-4 text-[10px] uppercase tracking-[0.2em]">{t('footer.companyTitle')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/60 text-xs whitespace-pre-line leading-relaxed">{t('footer.address')}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <a href="tel:0702060323" className="text-white/60 hover:text-gold transition-colors text-xs font-bold">
                  0702060323
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <a href="mailto:Tozdaght.immobiliere@gmail.com" className="text-white/60 hover:text-gold transition-colors text-xs font-bold break-all">
                  Tozdaght.immobiliere@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-gold font-black mb-6 text-[10px] uppercase tracking-[0.2em] pb-3 border-b border-gold/20">
              {t('footer.projectsTitle')}
            </h4>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.href}>
                  <Link href={project.href}
                    className="group flex items-center justify-between text-white/60 hover:text-gold transition-all duration-300 text-xs font-bold py-1">
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold/20 rounded-full group-hover:bg-gold transition-colors group-hover:shadow-[0_0_8px_#C9A84C]" />
                      {project.name}
                    </span>
                    <ArrowLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-black mb-6 text-[10px] uppercase tracking-[0.2em] pb-3 border-b border-gold/20">
              {t('footer.linksTitle')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', key: 'nav.home' },
                { href: '/about', key: 'nav.about' },
                { href: '/projects', key: 'nav.projects' },
                { href: '/contact', key: 'nav.contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="group flex items-center justify-between text-white/60 hover:text-gold transition-all duration-300 text-xs font-bold py-1">
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold/20 rounded-full group-hover:bg-gold transition-colors group-hover:shadow-[0_0_8px_#C9A84C]" />
                      {t(link.key)}
                    </span>
                    <ArrowLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-black mb-6 text-[10px] uppercase tracking-[0.2em] pb-3 border-b border-gold/20">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-3">
              {['Vente', 'Achat', 'Location', 'Conseil'].map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-white/50 text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-gold/30 rounded-full flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest leading-loose">
             {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-white/30 text-xs">Made with ♥ in Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  )
}