import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AC_TYPES = [
  { label: 'سبليت',     icon: '❄️' },
  { label: 'شباك',      icon: '🪟' },
  { label: 'دولاب',     icon: '🗄️' },
  { label: 'مركزي',     icon: '🏢' },
  { label: 'مخفي',      icon: '🔲' },
  { label: 'عمودي',     icon: '📐' },
  { label: 'مستعملة',   icon: '♻️' },
  { label: 'خربانة',    icon: '🔧' },
  { label: 'مركونة',    icon: '📦' },
]

function ACCard({ label, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-beige border border-sand rounded-xl p-4 text-center hover:border-brown/50 hover:shadow-sm transition"
    >
      <span className="text-3xl block mb-2">{icon}</span>
      <span className="text-sm font-bold text-darkBrown">{label}</span>
    </motion.div>
  )
}

export default function WhatWeBuy() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-xs font-bold uppercase tracking-widest mb-2"
        >
          ما نشتريه
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-darkBrown font-black text-3xl mb-2"
        >
          وش نشتري؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-textMuted text-sm mb-8"
        >
          ما يهمنا إذا المكيف جديد أو قديم، شغال أو خربان.
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {AC_TYPES.map((ac, i) => (
            <ACCard key={ac.label} {...ac} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-darkBrown text-sand text-sm text-center py-4 px-6 rounded-lg"
        >
          مهما كانت حالة مكيفاتك، أرسل لنا صورها وخلك تعرف{' '}
          <span className="text-gold font-bold">كم تسوى</span>
        </motion.div>
      </div>
    </section>
  )
}
