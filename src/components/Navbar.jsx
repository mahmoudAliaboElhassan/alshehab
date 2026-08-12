import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '966XXXXXXXXX' // ← حط رقمك هنا

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-darkBrown sticky top-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between"
    >
      <span className="text-cream font-black text-lg tracking-wide">
        الشهاب للمكيفات
      </span>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="bg-gold text-darkBrown font-bold text-sm px-5 py-2 rounded-md hover:brightness-110 transition"
      >
        تواصل معنا
      </a>
    </motion.nav>
  )
}
