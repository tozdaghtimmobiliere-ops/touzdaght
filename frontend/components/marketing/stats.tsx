'use client'

import { motion } from 'framer-motion'

const stats = [
  { id: 1, label: 'Capital Projets', value: '1.2B+' },
  { id: 2, label: 'Superficie Totale', value: '450k m²' },
  { id: 3, label: 'Unités Vendues', value: '2,840' },
  { id: 4, label: 'Clients satisfaits', value: '1,100+' },
]

export function Stats() {
  return (
    <div className="relative z-20 bg-secondary-dark border-y border-white/5">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="font-almarai text-4xl lg:text-5xl font-black text-gold mb-3 transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40 group-hover:text-gold/60 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
