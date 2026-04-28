import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Features' },
  { label: 'Pricing' },
  { label: 'Blog', hasDropdown: true },
  { label: 'Restaurants' },
  { label: 'Food', hasDropdown: true },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between px-2 pt-1 pb-6"
    >
      <div className="flex items-center gap-2 cursor-pointer group">
        <img
          src="/avatars/Logo2.png"
          alt="Olive Logo"
          className="w-20 h-20 object-contain select-none"
          draggable="false"
        />
      </div>

      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <button
            key={link.label}
            className="flex items-center gap-0.5 px-3.5 py-2 rounded-full text-sm font-medium text-[#2d4a35] hover:bg-[#1a3522]/8 transition-all duration-200 cursor-pointer"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown size={14} className="text-[#2d4a35]/60 mt-px" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-[#1a3522] px-3 py-2 rounded-full hover:bg-[#1a3522]/8 transition-all duration-200 hidden md:block">
          Sign in
        </button>
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(26, 53, 34, 0.38)' }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-[#1a3522] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-btn transition-colors duration-200"
        >
          Get Olive
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </motion.nav>
  )
}
