import { motion } from 'framer-motion'
import { Apple } from 'lucide-react'
import TrustBadge from './Badge'
import PhoneMockup from './PhoneMockup'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-4 pb-0">
      <div className="mb-8">
        <TrustBadge />
      </div>

      <motion.h1
        {...fadeUp(0.2)}
        className="text-[#1a3522] leading-[1.08] tracking-tight mb-6 max-w-xl mx-auto"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(40px, 6vw, 62px)',
          fontWeight: 800,
        }}
      >
        The Safest Way to
        <br />
        Shop for Groceries
      </motion.h1>

      <motion.p
        {...fadeUp(0.3)}
        className="text-[#5a7a62] mb-9 max-w-sm mx-auto leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 400 }}
      >
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
        from Your Family's Diet and Get Expert-Backed Food Insights
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: '0 8px 32px rgba(26, 53, 34, 0.42)',
          }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 bg-[#1a3522] text-white font-semibold px-7 py-3.5 rounded-full shadow-btn transition-all duration-200"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px' }}
        >
          <Apple size={17} />
          Download for iOS
        </motion.button>
      </motion.div>

      <div className="w-full flex justify-center" style={{ minHeight: '500px' }}>
        <PhoneMockup />
      </div>
    </section>
  )
}
