import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Floating orb component
function Orb({ x, y, size, color, duration, delay, parallaxFactor }) {
  const springX = useSpring(x, { stiffness: 40, damping: 20 })
  const springY = useSpring(y, { stiffness: 40, damping: 20 })

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 40% 40%, ${color}, transparent 70%)`,
        x: springX,
        y: springY,
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.12, 0.2, 0.12],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Particle dot
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ ...style, background: 'var(--accent)' }}
      animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Background() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Orb positions that shift with mouse
  const orb1X = useSpring(useMotionValue(0), { stiffness: 20, damping: 15 })
  const orb1Y = useSpring(useMotionValue(0), { stiffness: 20, damping: 15 })
  const orb2X = useSpring(useMotionValue(0), { stiffness: 12, damping: 18 })
  const orb2Y = useSpring(useMotionValue(0), { stiffness: 12, damping: 18 })
  const orb3X = useSpring(useMotionValue(0), { stiffness: 8, damping: 20 })
  const orb3Y = useSpring(useMotionValue(0), { stiffness: 8, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy

      orb1X.set(dx * 40)
      orb1Y.set(dy * 40)
      orb2X.set(dx * -25)
      orb2Y.set(dy * -25)
      orb3X.set(dx * 15)
      orb3Y.set(dy * 15)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width: Math.random() * 3 + 1.5,
    height: Math.random() * 3 + 1.5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    opacity: 0,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Orb 1 — top right, accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle at 40% 40%, var(--accent), transparent 65%)',
          filter: 'blur(60px)',
          opacity: 0.12,
          x: orb1X,
          y: orb1Y,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — bottom left, blue tint */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: '5%',
          left: '-8%',
          background: 'radial-gradient(circle at 60% 60%, #3b82f6, transparent 65%)',
          filter: 'blur(70px)',
          opacity: 0.07,
          x: orb2X,
          y: orb2Y,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb 3 — center, subtle accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, var(--accent), transparent 65%)',
          filter: 'blur(80px)',
          opacity: 0.05,
          x: orb3X,
          y: orb3Y,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--bg), transparent)' }}
      />
    </div>
  )
}
