
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Share2 } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const PRODUCTS = [
  {
    id: 0,
    title: 'Sea Salt & Vinegar Potato Crisps',
    brand: 'The Good Crisp Company',
    score: 39,
    scoreLabel: 'Avoid',
    thumb: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    oliveSays: "The low score comes from multiple inflammatory seed oils and high sodium content. While the brand markets itself as a better option, the ingredient quality doesn't fully support that claim for your family.",
  },
  {
    id: 1,
    title: 'Sourlittles',
    brand: 'YumEarth',
    score: 84,
    scoreLabel: 'Excellent',
    thumb: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80',
    oliveSays: "YumEarth uses organic ingredients and avoids the most common harmful additives. These are one of the better candy options — sweetened with organic cane sugar and real fruit extracts.",
  },
  {
    id: 2,
    title: 'Organic Bagels',
    brand: "Killer Dave's",
    score: 43,
    scoreLabel: 'Avoid',
    thumb: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    oliveSays: "This bread's low score comes from organic expeller pressed canola oil — a seed oil that can be harmful — along with organic cane sugar, which doesn't align with minimizing processed foods for your family.",
  },
  {
    id: 3,
    title: 'Strawberry Vanilla Sparkling Tonic',
    brand: 'Olipop',
    score: 100,
    scoreLabel: 'Excellent',
    thumb: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    oliveSays: "This drink scores perfectly thanks to its simple, wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars — a great choice for your kids.",
  },
  {
    id: 4,
    title: 'Larabar Chocolate Chip Cookie Dough',
    brand: 'Larabar',
    score: 92,
    scoreLabel: 'Excellent',
    thumb: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    oliveSays: "Larabar scores well because it's made with cashews and dates — no processed sugars, harmful additives, or seed oils. A healthier treat option that aligns well with your family's goals.",
  },
  {
    id: 5,
    title: 'San Pellegrino Sparkling Mineral Water',
    brand: 'Sanpellegrino',
    score: 52,
    scoreLabel: 'Limit',
    thumb: 'https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=800&q=80',
    oliveSays: "San Pellegrino has a moderate score mainly due to detected contaminants and a slightly acidic pH of 5.7. PFAS are not detected and microplastics are minimal, but fluoride presence is worth noting.",
  },
]

const TRACK_W   = 500   // total track width rendered
const CARD_W    = 100   // each slot occupies this much horizontal space
const CENTER_H  = 150   // active card height
const SIDE_H    = 115   // ±1 card height
const OUTER_H   = 80    // ±2 card height
const CENTER_OP = 1
const SIDE_OP   = 0.55
const OUTER_OP  = 0.28
const SIDE_BLUR = 'blur(0.8px)'
const OUTER_BLUR= 'blur(2px)'

function scoreColor(score) {
  if (score < 50) return '#d0392b'
  if (score < 70) return '#e8a020'
  return '#27a060'
}

function OliverIcon() {
  return (
    <div style={{
      width: '28px', height: '28px', borderRadius: '50%',
      background: '#1a3d22', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="10" rx="5" ry="5.5" fill="#4a9e35" />
        <ellipse cx="6" cy="8.5" rx="1.8" ry="2.5" fill="rgba(255,255,255,0.18)" />
        <path d="M8 5 C8 5 11 1.5 14 3" stroke="#2d6e1e" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  )
}

function ImageCarousel({ activeIdx }) {
  const N = PRODUCTS.length

 
  const CENTER = TRACK_W / 2
  const translateX = CENTER - (activeIdx * CARD_W + CARD_W / 2)

  return (
    <div style={{
      position: 'relative',
      width: `${TRACK_W}px`,
      left: '50%',
      transform: 'translateX(-50%)',
      overflow: 'visible',
      height: `${CENTER_H + 20}px`, 

      WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
      maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
    }}>
      <motion.div
        animate={{ x: translateX }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          position: 'absolute',
          bottom: '20px',   
          left: 0,
        }}
      >
        {PRODUCTS.map((p, i) => {
          const dist = Math.abs(i - activeIdx)
          const wrapDist = Math.min(dist, N - dist)

          const isCenter = wrapDist === 0
          const isSide   = wrapDist === 1

          const h       = isCenter ? CENTER_H : isSide ? SIDE_H : OUTER_H
          const opacity = isCenter ? CENTER_OP : isSide ? SIDE_OP : OUTER_OP
          const filter  = isCenter ? 'blur(0px)' : isSide ? SIDE_BLUR : OUTER_BLUR
          const radius  = isCenter ? '14px' : '10px'
          const shadow  = isCenter ? '0 8px 24px rgba(0,0,0,0.20)' : '0 2px 8px rgba(0,0,0,0.08)'

          return (
            <motion.div
              key={p.id}
              animate={{ height: h, opacity, filter }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: `${CARD_W - 10}px`,   
                flexShrink: 0,
                borderRadius: radius,
                overflow: 'hidden',
                boxShadow: shadow,
              }}
            >
              <img
                src={p.thumb}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '0px',
        left: 0, right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
      }}>
        {PRODUCTS.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === activeIdx ? 18 : 5,
              background: i === activeIdx ? '#1a3522' : 'rgba(26,53,34,0.20)',
            }}
            transition={{ duration: 0.3 }}
            style={{ height: '4px', borderRadius: '4px' }}
          />
        ))}
      </div>
    </div>
  )
}

function CardBody({ product }) {
  const color = scoreColor(product.score)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: '12px 16px 24px' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '10px',
            overflow: 'hidden', flexShrink: 0, background: '#f0ebe3',
          }}>
            <img src={product.thumb} alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: 1, paddingTop: '2px' }}>
            <p style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: '15px',
              fontWeight: 700, color: '#0e160e', lineHeight: 1.25, margin: '0 0 4px',
            }}>{product.title}</p>
            <p style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: '12px',
              color: '#90a898', margin: 0,
            }}>{product.brand}</p>
          </div>
          <div style={{ display: 'flex', gap: '2px', paddingTop: '2px' }}>
            <button style={{ width: '30px', height: '30px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              <Heart size={15} color="#c0d0c8" strokeWidth={1.8} />
            </button>
            <button style={{ width: '30px', height: '30px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              <Share2 size={15} color="#c0d0c8" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Score */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: color, flexShrink: 0 }} />
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '16px', fontWeight: 700, color: '#0e160e' }}>
            {product.score}/100
          </span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', fontWeight: 500, color }}>
            {product.scoreLabel}
          </span>
        </div>

        <div style={{ background: '#f4f9f4', borderRadius: '14px', padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <OliverIcon />
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', fontWeight: 700, color: '#0e160e' }}>
              Oliver Says:
            </span>
          </div>
          <p style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: '11.5px',
            color: '#4a6a52', lineHeight: 1.7, margin: 0,
          }}>
            "{product.oliveSays}"
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PhoneMockup() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((p) => (p + 1) % PRODUCTS.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '32px',
        overflow: 'visible',
      }}
    >
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '300px',
        background: '#ffffff',
        borderRadius: '44px',
        paddingTop: '14px',
        boxShadow:
          '0 0 0 1.5px rgba(190,205,195,0.55), 0 20px 56px rgba(26,53,34,0.10), 0 4px 16px rgba(26,53,34,0.06)',
        
        overflow: 'visible',
      }}>

        
        <div style={{
          width: '86px', height: '26px',
          background: '#0c1410', borderRadius: '50px',
          margin: '0 auto 14px',
        }} />

        
        <ImageCarousel activeIdx={activeIdx} />

        <div style={{
          overflow: 'hidden',
          borderBottomLeftRadius: '36px',
          borderBottomRightRadius: '36px',
          background: '#ffffff',
        }}>
          <CardBody product={PRODUCTS[activeIdx]} />
        </div>

      </div>
    </motion.div>
  )
}

