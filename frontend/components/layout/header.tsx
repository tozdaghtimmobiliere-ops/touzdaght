'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/providers'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

function LogoWithShine({ t, isLanded }: { t: (k: string) => string, isLanded: boolean }) {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Base Logo with Bomb Effect Triggered by isLanded */}
      <motion.img
        src="/images/logo.png"
        alt={t('brand.name')}
        animate={isLanded ? {
          scale: [1, 1.12, 1],
          filter: [
            'brightness(1) drop-shadow(0 0 0px rgba(201,168,76,0))',
            'brightness(1.6) drop-shadow(0 0 30px rgba(201,168,76,0.7))',
            'brightness(1) drop-shadow(0 0 0px rgba(201,168,76,0))'
          ]
        } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 relative z-10"
      />
      
      {/* Enhanced Masked Shine Overlay - Dual Sweep */}
      <div 
        className="absolute inset-x-0 h-24 pointer-events-none z-20 overflow-hidden"
        style={{
          maskImage: 'url(/images/logo.png)',
          WebkitMaskImage: 'url(/images/logo.png)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center'
        }}
      >
        <motion.div
          animate={{ 
            x: ['-150%', '250%'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 1.0,
            ease: "easeInOut"
          }}
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] blur-md"
        />
        <motion.div
          animate={{ 
            x: ['-150%', '250%'],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 1.7,
            ease: "easeInOut"
          }}
          className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-gold-light/40 to-transparent skew-x-[-20deg] blur-xl"
        />
      </div>
    </div>
  )
}

export function Header() {
  const [isLanded, setIsLanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Check if splash was already seen
    const hasSeen = sessionStorage.getItem('hasSeenSplash_v31')
    if (hasSeen) {
      setIsLanded(true)
    } else {
      // Trigger shine/bomb slightly after splash is gone
      const landedTimer = setTimeout(() => setIsLanded(true), 3500)
      return () => clearTimeout(landedTimer)
    }
  }, [])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cities, setCities] = useState<any[]>([])
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/cities`)
      .then((res) => res.json())
      .then((data) => { if (data.success) setCities(data.data) })
      .catch(console.error)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      isScrolled
        ? 'bg-secondary/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-gold/20'
        : 'bg-secondary border-b border-white/5'
    )}>
      {/* Dynamic Gold top line */}
      <motion.div 
        animate={isScrolled ? { opacity: 1, scaleX: 1 } : { opacity: 0.4, scaleX: 0.8 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" 
      />

      <div className="container-custom">
        <div className={cn(
          "flex items-center justify-between transition-all duration-700",
          isScrolled ? "h-[80px]" : "h-[100px]"
        )}>

<<<<<<< HEAD
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt={t('brand.name')}
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 2px 12px rgba(201,168,76,0.3)) brightness(1.1)' }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-almarai font-bold text-xl text-white block leading-tight">
                {t('brand.name')}
              </span>
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                IMMOBILIÈRE
              </span>
            </div>
=======
          {/* Logo - Restored to static mounting for total reliability */}
          <Link href="/" className="flex items-center gap-3 group h-20 w-48 relative">
            <LogoWithShine t={t} isLanded={isLanded} />
            {/* Logo Under-glow */}
            <div className="absolute inset-0 bg-gold/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
>>>>>>> fddb665599c87882d3b8a8caf043033199a7ea8c
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link 
              href="/" 
              className={cn(
                "relative font-cairo text-sm font-bold transition-all duration-500 group",
                isActive('/') ? "text-gold" : "text-white/80 hover:text-white"
              )}
            >
              <span className="relative z-10">{t('nav.home')}</span>
              {isActive('/') && (
                <motion.div layoutId="nav-active" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold shadow-[0_0_10px_#C9A84C]" />
              )}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold/50 group-hover:w-full transition-all duration-500" />
            </Link>

            <div className="relative group/projects">
              <button 
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
                className={cn(
                  "flex items-center gap-2 font-cairo text-sm font-bold transition-all duration-500 hover:text-gold",
                  isActive('/projects') ? "text-gold" : "text-white/80"
                )}
              >
                {t('nav.projects')}
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500", isProjectsOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-secondary/80 backdrop-blur-3xl border border-gold/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden py-3"
                  >
                    <div className="px-5 py-2 mb-2 border-b border-white/5">
                      <span className="text-[10px] font-black tracking-[0.2em] text-gold/50 uppercase">Explorer</span>
                    </div>
                    {cities.map((city) => (
                      <Link
                        key={city.id}
                        href={`/projects/${city.slug}`}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-all group/item"
                      >
                        <span className="font-cairo text-sm text-white/90 group-hover/item:text-gold group-hover/item:translate-x-1 transition-all">
                          {city[`name_${language}`]}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-gold/0 group-hover/item:bg-gold shadow-[0_0_8px_#C9A84C] transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/about" 
              className={cn(
                "relative font-cairo text-sm font-bold transition-all duration-500 group",
                isActive('/about') ? "text-gold" : "text-white/80 hover:text-white"
              )}
            >
              <span className="relative z-10">{t('nav.about')}</span>
              {isActive('/about') && (
                <motion.div layoutId="nav-active" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold shadow-[0_0_10px_#C9A84C]" />
              )}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold/50 group-hover:w-full transition-all duration-500" />
            </Link>

            <Link 
              href="/contact" 
              className={cn(
                "relative font-cairo text-sm font-bold transition-all duration-500 group",
                isActive('/contact') ? "text-gold" : "text-white/80 hover:text-white"
              )}
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              {isActive('/contact') && (
                <motion.div layoutId="nav-active" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold shadow-[0_0_10px_#C9A84C]" />
              )}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold/50 group-hover:w-full transition-all duration-500" />
            </Link>
          </nav>

          {/* Language and CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 p-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setLanguage('ar')}
                className={cn(
                  "px-5 py-2 rounded-full text-[11px] font-black transition-all duration-500",
                  language === 'ar' ? "bg-gold text-secondary shadow-[0_0_20px_rgba(201,168,76,0.5)]" : "text-white/50 hover:text-white"
                )}
              >
                العربية
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={cn(
                  "px-5 py-2 rounded-full text-[11px] font-black transition-all duration-500",
                  language === 'fr' ? "bg-gold text-secondary shadow-[0_0_20px_rgba(201,168,76,0.5)]" : "text-white/50 hover:text-white"
                )}
              >
                Français
              </button>
            </div>

            <Link 
              href="/contact"
              className="relative px-8 py-3 bg-gradient-to-r from-gold to-[#E8D5A0] text-secondary font-cairo font-black text-sm rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_15px_40px_rgba(201,168,76,0.6)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">{t('nav.estimate')}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-gold transition-all hover:bg-gold/10 rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Glassy */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[90px] bottom-0 bg-secondary/95 backdrop-blur-2xl z-[45] overflow-y-auto"
          >
            <div className="container-custom py-12 flex flex-col gap-8">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-almarai text-3xl font-black text-white hover:text-gold transition-all"
              >
                {t('nav.home')}
              </Link>
              
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black text-gold/40 uppercase tracking-[0.3em]">
                  {t('nav.projects')}
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/projects/${city.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-cairo text-xl font-bold text-white/70 hover:text-gold px-4 py-3 border-r-2 border-gold/10 hover:border-gold transition-all"
                    >
                      {city[`name_${language}`]}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-almarai text-3xl font-black text-white hover:text-gold transition-all"
              >
                {t('nav.about')}
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-almarai text-3xl font-black text-white hover:text-gold transition-all"
              >
                {t('nav.contact')}
              </Link>

              <div className="h-px bg-white/5 my-4" />

              <div className="flex items-center gap-4">
                <button
                  onClick={() => { setLanguage('ar'); setIsMobileMenuOpen(false); }}
                  className={cn(
                    "flex-1 py-5 rounded-2xl font-black transition-all border",
                    language === 'ar' ? "bg-gold border-gold text-secondary shadow-gold-lg" : "bg-white/5 border-white/10 text-white/40"
                  )}
                >
                  العربية
                </button>
                <button
                  onClick={() => { setLanguage('fr'); setIsMobileMenuOpen(false); }}
                  className={cn(
                    "flex-1 py-5 rounded-2xl font-black transition-all border",
                    language === 'fr' ? "bg-gold border-gold text-secondary shadow-gold-lg" : "bg-white/5 border-white/10 text-white/40"
                  )}
                >
                  Français
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}