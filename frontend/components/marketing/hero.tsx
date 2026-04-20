'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const slides = [
  { id: 1, src: '/images/najma/slider-najma-1.png' },
  { id: 2, src: '/images/najma/slider-najma-2.png' },
  { id: 3, src: '/images/najma/slider-najma-3.png' },
  { id: 4, src: '/images/najma/slider-najma-4.png' },
  { id: 5, src: '/images/najma/slider-najma-5.png' },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Slide Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" } 
            }}
            className="absolute inset-0"
          >
            <img 
              src={slides[index].src} 
              alt="Luxury Estate" 
              className="w-full h-full object-cover"
            />
            {/* Museum-grade Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/20 to-secondary/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-secondary/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container-custom text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-xl border border-gold/40 px-6 py-2.5 rounded-full shadow-luxury">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] text-gold uppercase">
              Édition Signature 2026
            </span>
          </div>

          <h1 className="font-almarai text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Redéfinir l&apos;Excellence <br /> 
            <span className="text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold via-gold-light to-gold">
              Immobilière
            </span>
          </h1>

          <p className="font-cairo text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Découvrez des espaces conçus avec une précision chirurgicale, où l&apos;architecture rencontre l&apos;art de vivre.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link 
              href="/projects"
              className="group relative px-10 py-5 bg-gold text-secondary font-black text-sm uppercase tracking-widest rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,168,76,0.4)] hover:-translate-y-1.5 overflow-hidden"
            >
              <span className="relative z-10">Explorer Portfolio</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
            </Link>

            <Link 
              href="/contact"
              className="group px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-3xl text-white font-black text-sm uppercase tracking-widest rounded-2xl transition-all duration-500 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-1.5"
            >
              Contact Direct
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Luxury Scroll Guide */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-gold to-transparent">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/4 bg-gold"
          />
        </div>
        <span className="text-[9px] font-black tracking-[0.6em] text-gold uppercase">DÉFILER</span>
      </div>
    </section>
  )
}
