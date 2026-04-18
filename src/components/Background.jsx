import { useEffect, useRef, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'

// Canvas particle system
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: -999, y: -999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY })

    // Create particles
    const count = Math.min(60, Math.floor(window.innerWidth / 20))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move & draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          p.x += (dx / dist) * 1.2
          p.y += (dy / dist) * 1.2
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`
        ctx.fill()
      })

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

// Floating geometric shape
function FloatingShape({ shape, size, top, left, duration, delay, rotate }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left, width: size, height: size }}
      animate={{
        y: [-15, 15, -15],
        rotate: rotate ? [0, 360] : [0, 0],
        opacity: [0.04, 0.1, 0.04],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {shape === 'circle' && (
        <div className="w-full h-full rounded-full border"
          style={{ borderColor: 'var(--accent)', opacity: 0.3 }} />
      )}
      {shape === 'square' && (
        <div className="w-full h-full border"
          style={{ borderColor: 'var(--accent)', opacity: 0.3, borderRadius: '4px' }} />
      )}
      {shape === 'triangle' && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,95 5,95" fill="none"
            stroke="var(--accent)" strokeWidth="2" opacity="0.3" />
        </svg>
      )}
      {shape === 'ring' && (
        <div className="w-full h-full rounded-full border-2"
          style={{ borderColor: 'var(--accent)', opacity: 0.2 }} />
      )}
    </motion.div>
  )
}

export default function Background() {
  // Mouse parallax for orbs
  const orb1X = useSpring(useMotionValue(0), { stiffness: 18, damping: 15 })
  const orb1Y = useSpring(useMotionValue(0), { stiffness: 18, damping: 15 })
  const orb2X = useSpring(useMotionValue(0), { stiffness: 10, damping: 18 })
  const orb2Y = useSpring(useMotionValue(0), { stiffness: 10, damping: 18 })
  const orb3X = useSpring(useMotionValue(0), { stiffness: 6, damping: 20 })
  const orb3Y = useSpring(useMotionValue(0), { stiffness: 6, damping: 20 })

  // Scroll parallax
  const { scrollYProgress } = useScroll()
  const orbScrollY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const gridScrollY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      orb1X.set(dx * 50)
      orb1Y.set(dy * 50)
      orb2X.set(dx * -30)
      orb2Y.set(dy * -30)
      orb3X.set(dx * 20)
      orb3Y.set(dy * 20)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Responsive orb sizes
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const shapes = [
    { shape: 'ring',     size: isMobile ? 60  : 120, top: '8%',  left: '5%',  duration: 7,  delay: 0,   rotate: false },
    { shape: 'triangle', size: isMobile ? 40  : 80,  top: '15%', left: '85%', duration: 9,  delay: 1,   rotate: true  },
    { shape: 'square',   size: isMobile ? 30  : 60,  top: '55%', left: '92%', duration: 8,  delay: 2,   rotate: true  },
    { shape: 'circle',   size: isMobile ? 50  : 100, top: '70%', left: '3%',  duration: 11, delay: 0.5, rotate: false },
    { shape: 'ring',     size: isMobile ? 35  : 70,  top: '40%', left: '48%', duration: 13, delay: 3,   rotate: false },
    { shape: 'triangle', size: isMobile ? 25  : 50,  top: '85%', left: '70%', duration: 6,  delay: 1.5, rotate: true  },
    { shape: 'square',   size: isMobile ? 20  : 40,  top: '30%', left: '20%', duration: 10, delay: 4,   rotate: true  },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Canvas particle network */}
      <ParticleCanvas />

      {/* Scroll-reactive animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: gridScrollY,
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 1 — top right, accent, scroll + mouse parallax */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 280 : 550,
          height: isMobile ? 280 : 550,
          top: '-10%',
          right: '-8%',
          background: 'radial-gradient(circle at 35% 35%, var(--accent), transparent 65%)',
          filter: 'blur(70px)',
          opacity: 0.13,
          x: orb1X,
          y: orbScrollY,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — bottom left, blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 220 : 450,
          height: isMobile ? 220 : 450,
          bottom: '0%',
          left: '-10%',
          background: 'radial-gradient(circle at 60% 60%, #6366f1, transparent 65%)',
          filter: 'blur(80px)',
          opacity: 0.08,
          x: orb2X,
          y: orb2Y,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb 3 — mid center, subtle */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 180 : 350,
          height: isMobile ? 180 : 350,
          top: '35%',
          left: '45%',
          background: 'radial-gradient(circle, var(--accent), transparent 65%)',
          filter: 'blur(90px)',
          opacity: 0.05,
          x: orb3X,
          y: orb3Y,
        }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Orb 4 — top left, teal */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 150 : 300,
          height: isMobile ? 150 : 300,
          top: '20%',
          left: '-5%',
          background: 'radial-gradient(circle, #14b8a6, transparent 65%)',
          filter: 'blur(80px)',
          opacity: 0.06,
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}

      {/* Vignette edges */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, var(--bg) 100%)',
          opacity: 0.6,
        }}
      />
    </div>
  )
}
