'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/components/providers'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash_v31')
    if (hasSeenSplash) {
      setIsVisible(false)
      document.body.style.overflow = 'auto'
      return
    }

    document.body.style.overflow = 'hidden'

    const visibilityTimer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = 'auto'
      sessionStorage.setItem('hasSeenSplash_v29', 'true')
    }, 3500)

    return () => {
      clearTimeout(visibilityTimer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           key="splash-container"
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.6 }}
           className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070E1A] overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(circle at center, #0D1F3C 0%, #070E1A 100%)' }} />
          
          {/* Unified Central Group */}
          <div className="flex flex-col items-center justify-center z-50 px-6 mt-[-5vh]">
            {/* Smaller, centered logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                 src="/images/logo.png" 
                 alt="Logo"
                 className="w-32 md:w-48 h-auto drop-shadow-[0_0_20px_rgba(201,168,76,0.15)]"
                 style={{ objectFit: 'contain' }}
              />
            </motion.div>

            {/* Welcoming Text - Lined up with logo */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-center"
            >
               <h1 className="font-almarai text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  {t('splash.welcome')}
               </h1>
               
               <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                 <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#C9A84C]" />
                 <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold to-transparent" />
               </div>

               <p className="font-cairo text-base md:text-xl text-gold/70 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
                 {t('splash.subtitle')}
               </p>

               <div className="tracking-[0.6em] text-[8px] md:text-xs font-black text-gold/30 uppercase">
                 {t('brand.name')} IMMOBILIÈRE
               </div>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.5, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gold origin-left z-[110]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
