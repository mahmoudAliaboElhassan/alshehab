import { motion } from 'framer-motion'

const REASONS = [
  {
    icon: '💰',
    title: 'سعر يستاهل',
    desc: 'نقيّم مكيفاتك بناءً على حالتها ونوعها ونعطيك سعرنا بكل وضوح وشفافية.',
  },
  {
    icon: '🤝',
    title: 'ثقة مئات العملاء',
    desc: 'تعاملنا مع مئات العملاء وتعاملنا يكون واضح ومحترم من أول تواصل إلى استلام المكيفات.',
  },
  {
    icon: '⚡',
    title: 'تقييم سريع',
    desc: 'أرسل صور مكيفاتك وموقعك وخذ تقييمك بدون ما تضيع وقتك في البحث والسؤال.',
  },
  {
    icon: '🚚',
    title: 'نوصلك لمكانك',
    desc: 'ما تحتاج تشيل المكيفات ولا تدور على سيارة. فريقنا يتولى عملية الاستلام.',
  },
  {
    icon: '💵',
    title: 'بيع أسهل وأسرع',
    desc: 'بدل ما تعرض مكيفاتك وتنتظر وتتفاوض، تواصل معنا وخذ تقييمك مباشرة.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-xs font-bold uppercase tracking-widest mb-2"
        >
          مزايانا
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-darkBrown font-black text-3xl mb-8"
        >
          ليه تبيع مكيفاتك للشهاب؟
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-cream border border-sand rounded-xl p-5 hover:border-brown/40 transition"
            >
              <div className="w-10 h-10 bg-darkBrown rounded-lg flex items-center justify-center text-xl mb-3">
                {r.icon}
              </div>
              <h3 className="text-darkBrown font-bold text-base mb-1">{r.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
