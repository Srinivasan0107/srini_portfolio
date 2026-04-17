import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { certifications, badges } from '../data'

const tagColors = {
  Cloud: '#2563eb',
  AI: '#7c3aed',
  ML: '#0891b2',
  Dev: '#16a34a',
  Network: '#ea580c',
  DB: '#d97706',
  IoT: '#059669',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: 'easeOut' },
  }),
}

function BadgeCard({ badge, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center p-4 rounded-2xl group"
      style={{
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px -8px rgba(0,0,0,0.4)' : 'none',
        textDecoration: 'none',
      }}
    >
      <div className="relative mb-3">
        <img
          src={badge.img}
          alt={badge.name}
          width={80}
          height={80}
          className="object-contain"
          style={{
            filter: hovered ? 'drop-shadow(0 4px 12px rgba(255,255,255,0.15))' : 'none',
            transition: 'filter 0.3s ease',
          }}
        />
        {hovered && (
          <div className="absolute -top-1 -right-1">
            <ExternalLink size={12} style={{ color: 'var(--accent)' }} />
          </div>
        )}
      </div>
      <p
        className="font-body text-xs font-medium leading-snug mb-1"
        style={{ color: 'var(--text-primary)', fontSize: '0.72rem' }}
      >
        {badge.name}
      </p>
      <p
        className="font-mono text-xs"
        style={{ color: 'var(--text-secondary)', fontSize: '0.65rem' }}
      >
        {badge.issuer} · {badge.issued}
      </p>
    </motion.a>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Certifications
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-heading mb-4"
        >
          Credentials
        </motion.h2>
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-body text-sm mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          Verified badges from{' '}
          <a
            href="https://www.credly.com/users/srinivasan-b.6ddd633c/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--accent)' }}
          >
            Credly
          </a>
        </motion.p>

        {/* Credly Badges */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-16">
          {badges.map((badge, i) => (
            <BadgeCard key={badge.name} badge={badge} index={i + 3} />
          ))}
        </div>

        {/* Certifications list */}
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          All Certifications
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const color = tagColors[cert.tag] || 'var(--accent)'
            return (
              <motion.div
                key={cert.name}
                custom={i + badges.length + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="card group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-md shrink-0"
                    style={{ background: `${color}18`, color }}
                  >
                    {cert.tag}
                  </span>
                </div>
                <h3
                  className="font-display font-semibold text-base leading-snug mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cert.name}
                </h3>
                <p className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {cert.issuer}
                </p>
                <div
                  className="mt-4 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: color, width: '32px' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
