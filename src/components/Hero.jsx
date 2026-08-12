import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-darkBrown relative overflow-hidden py-20 px-6 text-center">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-repeat" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.span
          {...fadeUp(0.1)}
          className="inline-block bg-gold/20 text-gold border border-gold/40 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
        >
          نشتري مكيفاتك بأفضل سعر
        </motion.span>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-cream font-black text-4xl md:text-5xl leading-snug mb-3"
        >
          مكيفاتك تستاهل أكثر…
          <br />
          <span className="text-gold">والشهاب يعرف قيمتها</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-gold/80 text-sm font-medium mb-3">
          شركة الشهاب لشراء المكيفات بالقصيم
        </motion.p>

        <motion.p {...fadeUp(0.4)} className="text-sand text-base leading-relaxed mb-8">
          إذا عندك مكيفات قديمة، مستعملة، خربانة أو مركونة وتبي تبيعها بسعر
          يستاهلها، حنا نوصلك ونقيّم مكيفاتك ونعطيك سعرنا بكل وضوح.
          <br />
          <span className="text-cream/70 text-sm mt-1 block">
            تعاملنا مع مئات العملاء، وهدفنا إنك تبيع بسعر يرضيك وبأقل مجهود.
          </span>
        </motion.p>

        <motion.button
          {...fadeUp(0.5)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToCTA}
          className="bg-gold text-darkBrown font-black text-lg px-8 py-4 rounded-lg hover:brightness-110 transition"
        >
          اطلب تقييم مكيفاتك الآن
        </motion.button>
      </div>
    </section>
  )
}
