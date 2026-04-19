'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  { 
    slug: 'najma', 
    name: 'Tadjiat Najma', 
    city: 'Tiznit', 
    image: '/images/najma/najma-thumbnail.jpg',
    tag: 'Signature'
  },
  { 
    slug: 'gelmim', 
    name: 'Appartements Guelmim', 
    city: 'Guelmim', 
    image: '/images/gelmim/gelmim.png',
    tag: 'Premium'
  },
  { 
    slug: 'touhmo', 
    name: 'Résidentiel Touhmo', 
    city: 'Ait Melloul', 
    image: '/images/touhmo/touhmo.png',
    tag: 'Confort'
  },
  { 
    slug: 'terrains', 
    name: 'Lotissements Terrains', 
    city: 'Sud Maroc', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
    tag: 'Invest'
  },
  { 
    slug: 'immeuble', 
    name: 'Immeubles Commerciaux', 
    city: 'Grand Agadir', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    tag: 'Business'
  }
]

export function FeaturedProjects() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 border border-gold/20 rounded-full mb-6 bg-gold/5">
             <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase">Portfolio d&apos;Exception</span>
          </div>
          <h2 className="font-almarai text-4xl md:text-6xl font-black text-white mb-8">
            Nos <span className="gold-text">Réalisations</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              <Link href={`/projects/${project.slug}`} className="block relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-secondary-dark shadow-luxury">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Refined Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-12">
                  <div className="flex items-center justify-between mb-4">
                     <div className="px-6 py-2 bg-accent text-white text-[12px] font-black uppercase tracking-widest rounded-lg">
                       {project.tag}
                     </div>
                     <div className="flex items-center gap-2 text-white/40 text-[12px] font-black tracking-widest uppercase">
                       <MapPin className="w-4 h-4 text-accent" />
                       {project.city}
                     </div>
                  </div>
                  
                  <h3 className="font-almarai text-2xl lg:text-3xl font-black text-white mb-8 group-hover:text-gold transition-colors duration-500">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gold group-hover:translate-x-2 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Découvrir le projet</span>
                    <ArrowUpRight className="w-5 h-5 border border-gold/20 rounded-lg p-1" />
                  </div>
                </div>

                {/* Glass Glow effect on hover */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2.5rem] group-hover:border-gold/30 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 text-center"
        >
          <Link href="/projects" className="inline-flex items-center gap-6 group">
            <span className="text-white/40 text-sm font-medium tracking-widest uppercase group-hover:text-gold transition-colors">Voir tous les projets</span>
            <div className="w-12 h-px bg-white/20 group-hover:bg-gold transition-all group-hover:w-24" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
