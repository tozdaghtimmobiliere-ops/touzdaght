'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/components/providers'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash_v3')
    if (hasSeenSplash) {
      setIsVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash_v3', 'true')
    }, 4000)

    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, scale: 1.1 }}
           transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
           className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
           style={{ 
             background: 'radial-gradient(circle at center, #0D1F3C 0%, #070E1A 100%)',
             backdropFilter: 'blur(20px)' 
           }}
        >
          {/* Animated Background Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none"
            style={{ background: '#C9A84C' }}
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] pointer-events-none"
            style={{ background: '#3B7BC8' }}
          />

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
                      boxShadow: [
                        '0 0 40px rgba(201, 168, 76, 0.1)',
                        '0 0 70px rgba(201, 168, 76, 0.3)',
                        '0 0 40px rgba(201, 168, 76, 0.1)'
                      ] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full p-2 border border-gold/20 backdrop-blur-md bg-black/20"
                 >
                   <img 
                      src="/images/logo.png" 
                      alt="Tozdaght Logo"
                      className="w-32 md:w-48 h-auto"
                      style={{ 
                        filter: 'drop-shadow(0px 0px 8px rgba(201, 168, 76, 0.5))',
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
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-center"
             >
                <h1 className="font-almarai text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-normal leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                    {t('splash.welcome')}
                  </span>
                </h1>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50" />
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#C9A84C]" />
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50" />
                </div>

                <p className="font-cairo text-lg md:text-xl text-gold/80 font-medium tracking-wide mb-8 max-w-2xl">
                  {t('splash.subtitle')}
                </p>

                <div className="tracking-[0.6em] text-xs md:text-sm font-black bg-clip-text text-transparent uppercase opacity-60"
                     style={{ backgroundImage: 'linear-gradient(to right, #E8D5A0, #C9A84C, #E8D5A0)' }}>
                  {t('brand.name')} IMMOBILIÈRE
                </div>
             </motion.div>
          </div>

          {/* Modern Progress Bar (Subtle) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.5, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gold origin-left z-[110] shadow-[0_0_15px_#C9A84C]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
