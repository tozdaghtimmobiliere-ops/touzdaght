'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { cn } from '@/lib/utils'

const navLinks = {
  ar: [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'من نحن' },
    { href: '/projects', label: 'المشاريع' },
    { href: '/contact', label: 'اتصل بنا' },
    { href: '/admin', label: 'لوحة التحكم' },
  ],
  fr: [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'Qui sommes-nous' },
    { href: '/projects', label: 'Projets' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin' },
  ],
}

const translations = {
  ar: { projects: 'جميع المشاريع' },
  fr: { projects: 'Tous les projets' },
  en: { projects: 'All projects' },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cities, setCities] = useState<any[]>([])
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/cities`)
      .then((res) => res.json())
      .then((data) => { if (data.success) setCities(data.data) })
      .catch(console.error)
  }, [])

  const links = navLinks[language as keyof typeof navLinks] || navLinks.ar
  const t = translations[language as keyof typeof translations] || translations.ar

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-secondary/98 backdrop-blur-md shadow-2xl border-b border-gold/10'
        : 'bg-secondary'
    )}>
      {/* Gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="container-custom">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="توزدغت"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-almarai font-bold text-xl text-white block leading-tight">
                توزدغت
              </span>
              <span className="text-gold text-xs font-semibold tracking-widest">
                IMMOBILIÈRE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <div key={link.href} className="relative">
                {link.href === '/projects' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                  >
                    <button className={cn(
                      'flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-200 font-semibold text-sm',
                      isActive(link.href)
                        ? 'text-gold'
                        : 'text-white/80 hover:text-gold'
                    )}>
                      {link.label}
                      <ChevronDown className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        isProjectsOpen && 'rotate-180'
                      )} />
                    </button>

                    {isProjectsOpen && (
                      <div className="absolute top-full right-0 mt-2 w-52 rounded-xl shadow-2xl overflow-hidden z-50 border border-gold/10"
                        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)' }}>
                        {/* Header dropdown */}
                        <div className="px-4 py-2 border-b border-white/5">
                          <span className="text-gold/70 text-xs font-semibold tracking-wider uppercase">
                            {t.projects}
                          </span>
                        </div>
                        <Link
                          href="/projects"
                          className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-all text-sm font-semibold border-b border-white/5"
                        >
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {t.projects}
                        </Link>
                        {cities.map((city) => (
                          <Link
                            key={city.id}
                            href={`/projects/${city.slug}`}
                            className="flex items-center gap-2 px-4 py-2.5 text-white/70 hover:text-gold hover:bg-white/5 transition-all text-sm"
                          >
                            <span className="w-1 h-1 bg-white/30 rounded-full" />
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-lg transition-all duration-200 font-semibold text-sm relative group',
                      isActive(link.href)
                        ? 'text-gold'
                        : 'text-white/80 hover:text-gold'
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-0.5 bg-white/5 rounded-lg p-1 border border-white/10">
              {['ar', 'fr', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    'px-2.5 py-1 rounded-md text-xs font-bold transition-all duration-200',
                    language === lang
                      ? 'bg-gold text-secondary shadow-sm'
                      : 'text-white/60 hover:text-white'
                  )}
                >
                  {lang === 'ar' ? 'عر' : lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:0702060323"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 border border-gold/50 text-gold hover:bg-gold hover:text-secondary hover:border-gold hover:shadow-gold"
            >
              <Phone className="w-4 h-4" />
              <span>0702060323</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)' }}>
          <nav className="container-custom py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-xl transition-all font-semibold text-sm',
                  isActive(link.href)
                    ? 'bg-gold/10 text-gold border border-gold/20'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Cities */}
            <div className="mt-2 pt-2 border-t border-white/5">
              <p className="px-4 text-gold/60 text-xs font-bold tracking-wider mb-2 uppercase">المدن</p>
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/projects/${city.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-gold transition-colors text-sm"
                >
                  <span className="w-1 h-1 bg-gold/50 rounded-full" />
                  {city.name}
                </Link>
              ))}
            </div>

            {/* Language Switcher Mobile */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
              {['ar', 'fr', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-sm font-bold transition-all',
                    language === lang
                      ? 'bg-gold text-secondary'
                      : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
                  )}
                >
                  {lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : 'English'}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}