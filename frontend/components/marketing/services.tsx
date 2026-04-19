'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Briefcase, Home, FileText, Users } from 'lucide-react'

const services = [
  { title: 'Édification', desc: 'Bâtiments résidentiels et complexes commerciaux haute-fidélité.', icon: Building2 },
  { title: 'Aménagement', desc: 'Viabilisation stratégique et urbanisme de luxe.', icon: MapPin },
  { title: 'Expertise', desc: 'Gestion intégrale du cycle de vie des actifs immobiliers.', icon: Briefcase },
  { title: 'Patrimoine', desc: 'Transactions exclusives et gestion de portefeuille privé.', icon: Home },
  { title: 'Ingénierie', desc: 'Études techniques avancées et modélisation architecturale.', icon: FileText },
  { title: 'Capital', desc: 'Joint-ventures stratégiques et structuration de fonds.', icon: Users },
]

export function Services() {
  return (
    <section className="section-padding relative bg-secondary-dark">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-almarai text-4xl md:text-5xl font-black text-white mb-6">
            Services <span className="text-gold">Sélectifs</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm tracking-wide">
            Une ingénierie de précision au service des ambitions les plus exigeantes.
          </p>
          <div className="h-px w-24 bg-gold/40 mx-auto mt-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 shadow-luxury overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="font-almarai text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {service.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
