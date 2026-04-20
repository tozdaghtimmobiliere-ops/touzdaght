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
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(circle at center, #0D1F3C 0%, #070E1A 100%)' }} />
          
          <div className="relative flex flex-col items-center justify-center px-6">
             <div className="relative mb-12">
               <motion.div
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                 className="relative z-10"
               >
                 <motion.div
                    animate={{ 
                      filter: [
                        'drop-shadow(0 0 20px rgba(201, 168, 76, 0.2))',
                        'drop-shadow(0 0 40px rgba(201, 168, 76, 0.4))',
                        'drop-shadow(0 0 20px rgba(201, 168, 76, 0.2))'
                      ] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-4"
                 >
                   <img 
                      src="/images/logo.png" 
                      alt="Tozdaght Logo"
                      className="w-48 md:w-72 h-auto transition-all duration-700"
                      style={{ 
                        filter: 'drop-shadow(0px 0px 12px rgba(201, 168, 76, 0.6))',
                        objectFit: 'contain'
                      }}
                   />
                 </motion.div>
               </motion.div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />
             </div>

             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-center"
             >
                <div className="font-almarai text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-normal leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                    {t('splash.welcome')}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50" />
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#C9A84C]" />
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50" />
                </div>

               <p className="font-cairo text-base md:text-xl text-gold/70 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
                 {t('splash.subtitle')}
               </p>

               <div className="tracking-[0.6em] text-[8px] md:text-xs font-black text-gold/30 uppercase">
                 {t('brand.name')} IMMOBILIÈRE
               </div>
            </motion.div>
          </div>

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
