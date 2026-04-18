import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function Intro({ onComplete }) {
  const containerRef = useRef(null)
  const [done, setDone] = useState(false)

  const { scrollYProgress } = useScroll({ target: containerRef })

  // Text reveals as you scroll
  const nameOpacity   = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const nameY         = useTransform(scrollYProgress, [0, 0.25], [0, -60])
  const line1Opacity  = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const line2Opacity  = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const line3Opacity  = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const scrollHintOp  = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const overlayOp     = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  // When scroll reaches end, trigger exit
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v >= 0.98 && !done) {
        setDone(true)
        setTimeout(() => onComplete(), 400)
      }
    })
    return unsub
  }, [done])

  if (done) return null

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ background: 'var(--bg)' }}>

        {/* Background orb */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600, height: 600,
            background: 'radial-gradient(circle, var(--accent), transparent 65%)',
            filter: 'blur(100px)',
            opacity: 0.12,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Name — fades out as you scroll */}
        <motion.div
          style={{ opacity: nameOpacity, y: nameY }}
          className="absolute text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display font-bold"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: 'var(--text-primary)', lineHeight: 1 }}
          >
            Srinivasan<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-mono text-sm tracking-widest uppercase mt-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full Stack · AI/ML · AWS
          </motion.p>
        </motion.div>

        {/* Scroll reveal lines */}
        <div className="absolute text-center px-6 max-w-2xl">
          <motion.p
            style={{ opacity: line1Opacity }}
            className="font-display font-semibold mb-6"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', color: 'var(--text-primary)', opacity: line1Opacity }}
          >
            Building things that matter.
          </motion.p>
          <motion.p
            style={{ opacity: line2Opacity }}
            className="font-body text-lg mb-6"
            style={{ color: 'var(--text-secondary)', opacity: line2Opacity }}
          >
            From government platforms to AI systems —<br />
            crafting scalable, impactful solutions.
          </motion.p>
          <motion.p
            style={{ opacity: line3Opacity }}
            className="font-mono text-sm tracking-widest uppercase"
            style={{ color: 'var(--accent)', opacity: line3Opacity }}
          >
            2nd Place · IIT Madras · AWS Technical Lead
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: scrollHintOp }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-secondary)' }}>
            Scroll to enter
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </motion.div>
        </motion.div>

        {/* White/dark overlay that covers everything at the end */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'var(--bg)', opacity: overlayOp }}
        />
      </div>
    </div>
  )
}
