'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  "Développement de Projets",
  "Construction & Édification",
  "Aménagement de Terrains",
  "Gestion Immobilière",
  "Conseil Stratégique",
  "Partenariats d'Investissement"
]

export function About() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxury rotate-2 hover:rotate-0 transition-transform duration-1000">
              <img 
                src="https://www.lesmaisonsferrian.be/medias/photos/blog/2023/IMG-comment-vendre-bien-immobilier-rapidement-maison-vente-etapes-hainaut.jpg" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                alt="Tozdaght Signature Architecture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            {/* Geometric Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold/30 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-3 2h-32 border-b border-l border-gold/30 rounded-bl-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Héritage & Vision</span>
            </div>
            
            <h2 className="font-almarai text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
              Tozdaght Immobilier <br /> 
              <span className="text-gold/80 italic">& Construction</span>
            </h2>

            <p className="font-cairo text-white/60 text-lg mb-8 leading-relaxed">
              Fondée sur les principes de durabilité et d&apos;élégance, Tozdaght s&apos;est imposée comme une référence incontournable dans le paysage architectural marocain.
            </p>

            <p className="font-cairo text-white/50 text-md mb-12 leading-relaxed italic border-l-2 border-gold/20 pl-6">
              "Notre mission est de concevoir et réaliser des projets résidentiels qui ne sont pas seulement des bâtiments, mais des héritages."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <Check className="w-3 h-3 text-gold group-hover:text-secondary transition-colors" />
                  </div>
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-5 border border-gold/30 text-gold font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-secondary hover:shadow-gold-lg transition-all duration-500">
              Découvrir Notre Histoire
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
