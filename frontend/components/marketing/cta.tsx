'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function EnterpriseCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Animated Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full"
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-almarai text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
            Prêt à Élever Votre <br /> 
            <span className="text-gold">Standard de Vie ?</span>
          </h2>
          
          <p className="font-cairo text-white/50 max-w-2xl mx-auto mb-16 text-lg">
            Rejoignez l&apos;élite et découvrez des opportunités d&apos;investissement conçues pour durer des générations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link 
              href="/contact"
              className="px-12 py-6 bg-white text-secondary font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              Consultation Privée
            </Link>
            
            <Link 
              href="/about"
              className="px-12 py-6 border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:border-gold hover:text-gold transition-all duration-500"
            >
              Notre Vision
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
