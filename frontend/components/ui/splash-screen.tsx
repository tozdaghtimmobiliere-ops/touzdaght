'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Only show once per session to prevent annoyance
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash_v2')
    if (hasSeenSplash) {
      setIsVisible(false)
      return
    }

    // Hide after animation finishes (total ~2.8 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash_v2', 'true')
    }, 2800)

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
           exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           className="fixed inset-0 z-[100] flex items-center justify-center"
           style={{ background: '#0A1628', backdropFilter: 'blur(10px)' }}
        >
          {/* Animated Logo Container */}
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ 
               scale: 0.3, 
               opacity: 0, 
               x: '40vw', 
               y: '-40vh',
             }}
             transition={{ duration: 0.8, ease: "easeInOut" }}
             className="relative flex flex-col items-center justify-center"
          >
             {/* Glowing Aura */}
             <motion.div
               animate={{ 
                 scale: [1, 1.4, 1],
                 opacity: [0.2, 0.5, 0.2] 
               }}
               transition={{ 
                 duration: 2, 
                 repeat: Infinity,
                 ease: "easeInOut" 
               }}
               className="absolute w-64 h-64 rounded-full filter blur-[80px] pointer-events-none"
               style={{ background: '#C9A84C' }}
             />

             {/* Logo image */}
             <motion.img 
               src="/images/logo.png" 
               alt="Tozdaght Logo"
               initial={{ filter: 'brightness(0.5)' }}
               animate={{ filter: 'brightness(1.5)' }}
               transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
               className="w-48 md:w-64 h-auto relative z-10 drop-shadow-2xl"
               style={{ mixBlendMode: 'screen' }}
             />

             {/* Welcome Text */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="mt-8 text-center z-10"
             >
                <div className="font-almarai text-4xl font-bold text-white mb-2 tracking-wide">
                  مرحباً بكم
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-3" />
                <div className="tracking-[0.4em] text-sm font-bold bg-clip-text text-transparent"
                     style={{ backgroundImage: 'linear-gradient(to right, #E8D5A0, #C9A84C)' }}>
                  TOZDAGHT IMMOBILIÈRE
                </div>
             </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
