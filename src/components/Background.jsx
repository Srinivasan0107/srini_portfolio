import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'

// Detect dark mode
const isDark = () => document.documentElement.classList.contains('dark')

// Canvas particle system — adapts color to theme
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: -999, y: -999 }
    let dark = isDark()

    // Watch theme changes
    const observer = new MutationObserver(() => { dark = isDark() })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY })

    const count = Math.min(70, Math.floor(window.innerWidth / 18))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Dark: amber, Light: orange-brown
      const color = dark ? '245, 158, 11' : '180, 83, 9'
      const lineColor = dark ? '245, 158, 11' : '180, 83, 9'

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          p.x += (dx / dist) * 1.5
          p.y += (dy / dist) * 1.5
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${dark ? p.opacity : p.opacity * 0.7})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const alpha = (dark ? 0.15 : 0.12) * (1 - dist / 130)
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 1 }} />
}

// Floating geometric shape — visible in both modes
function FloatingShape({ shape, size, top, left, duration, delay, rotate }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left, width: size, height: size }}
      animate={{
        y: [-18, 18, -18],
        rotate: rotate ? [0, 360] : [0, 0],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {shape === 'circle' && (
        <div className="w-full h-full rounded-full border-2"
          style={{ borderColor: 'var(--accent)' }} />
      )}
      {shape === 'square' && (
        <div className="w-full h-full border-2"
          style={{ borderColor: 'var(--accent)', borderRadius: '6px' }} />
      )}
      {shape === 'triangle' && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,95 5,95" fill="none"
            stroke="var(--accent)" strokeWidth="3" />
        </svg>
      )}
      {shape === 'ring' && (
        <div className="w-full h-full rounded-full border-2"
          style={{ borderColor: 'var(--accent)', boxShadow: '0 0 12px var(--accent)' }} />
      )}
    </motion.div>
  )
}

export default function Background() {
  const orb1X = useSpring(useMotionValue(0), { stiffness: 18, damping: 15 })
  const orb1Y = useSpring(useMotionValue(0), { stiffness: 18, damping: 15 })
  const orb2X = useSpring(useMotionValue(0), { stiffness: 10, damping: 18 })
  const orb2Y = useSpring(useMotionValue(0), { stiffness: 10, damping: 18 })
  const orb3X = useSpring(useMotionValue(0), { stiffness: 6, damping: 20 })
  const orb3Y = useSpring(useMotionValue(0), { stiffness: 6, damping: 20 })

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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const shapes = [
    { shape: 'ring',     size: isMobile ? 70  : 140, top: '6%',  left: '4%',  duration: 7,  delay: 0,   rotate: false },
    { shape: 'triangle', size: isMobile ? 50  : 90,  top: '12%', left: '84%', duration: 9,  delay: 1,   rotate: true  },
    { shape: 'square',   size: isMobile ? 35  : 65,  top: '55%', left: '91%', duration: 8,  delay: 2,   rotate: true  },
    { shape: 'circle',   size: isMobile ? 55  : 110, top: '68%', left: '2%',  duration: 11, delay: 0.5, rotate: false },
    { shape: 'ring',     size: isMobile ? 40  : 80,  top: '38%', left: '47%', duration: 13, delay: 3,   rotate: false },
    { shape: 'triangle', size: isMobile ? 30  : 55,  top: '83%', left: '68%', duration: 6,  delay: 1.5, rotate: true  },
    { shape: 'square',   size: isMobile ? 25  : 45,  top: '28%', left: '18%', duration: 10, delay: 4,   rotate: true  },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Canvas particle network */}
      <ParticleCanvas />

      {/* Animated grid — more visible in both modes */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: gridScrollY,
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0,
        }}
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 1 — top right, accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 300 : 600,
          height: isMobile ? 300 : 600,
          top: '-12%', right: '-8%',
          background: 'radial-gradient(circle at 35% 35%, var(--accent), transparent 65%)',
          filter: 'blur(60px)',
          opacity: 0.22,
          x: orb1X, y: orbScrollY,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — bottom left, indigo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 240 : 480,
          height: isMobile ? 240 : 480,
          bottom: '-5%', left: '-10%',
          background: 'radial-gradient(circle at 60% 60%, #6366f1, transparent 65%)',
          filter: 'blur(70px)',
          opacity: 0.18,
          x: orb2X, y: orb2Y,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb 3 — center, accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 200 : 380,
          height: isMobile ? 200 : 380,
          top: '35%', left: '45%',
          background: 'radial-gradient(circle, var(--accent), transparent 65%)',
          filter: 'blur(80px)',
          opacity: 0.1,
          x: orb3X, y: orb3Y,
        }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Orb 4 — top left, teal */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 160 : 320,
          height: isMobile ? 160 : 320,
          top: '18%', left: '-5%',
          background: 'radial-gradient(circle, #14b8a6, transparent 65%)',
          filter: 'blur(70px)',
          opacity: 0.14,
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((s, i) => <FloatingShape key={i} {...s} />)}

      {/* Light mode: soft colored overlay for depth */}
      <div className="absolute inset-0 dark:hidden"
        style={{
          background: 'radial-gradient(ellipse at 80% 10%, rgba(217,119,6,0.08) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(99,102,241,0.07) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}
