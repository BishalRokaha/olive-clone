import { motion } from 'framer-motion'

const avatars = [
  { img: '/avatars/user1.png' },
  { img: '/avatars/user2.png' },
  { img: '/avatars/user3.png' },
  { img: '/avatars/user4.png' },
  { text: '+5k', bg: '#1a3522', color: '#eef3ef', small: true }, // keep this one as text
]

export default function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-center gap-3"
    >
      {/* Avatar cluster */}
      <div className="flex items-center">
        {avatars.map((av, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-full border-2 border-[#eef3ef] font-semibold"
            style={{
              width: 30,
              height: 30,
              background: av.bg,
              color: av.color,
              fontSize: av.small ? '9px' : '10px',
              marginLeft: i === 0 ? 0 : -8,
              zIndex: avatars.length - i,
              position: 'relative',
            }}
          >
            {av.img ? (
              <img
                src={av.img}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              av.text
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-[#3d6146] font-medium">
        Trusted by thousands of healthy families
      </p>
    </motion.div>
  )
}
