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

<<<<<<< HEAD
          {/* Main Content Container */}
          <div className="relative flex flex-col items-center justify-center px-6">
             
             {/* Logo Section with Glow */}
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

               {/* Inner Radial Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />
             </div>

             {/* Text Section */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
=======
            {/* Welcoming Text - Lined up with logo */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
>>>>>>> fddb665599c87882d3b8a8caf043033199a7ea8c
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-center"
<<<<<<< HEAD
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
=======
            >
               <h1 className="font-almarai text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  {t('splash.welcome')}
               </h1>
               
               <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                 <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#C9A84C]" />
                 <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold to-transparent" />
               </div>
>>>>>>> fddb665599c87882d3b8a8caf043033199a7ea8c

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
