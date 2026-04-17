import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

function SkillBar({ name, level, img, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          {img && (
            <img
              src={img}
              alt={name}
              width={18}
              height={18}
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
            />
          )}
          <span className="font-body text-sm" style={{ color: 'var(--text-primary)' }}>{name}</span>
        </div>
        <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{level}%</span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--accent)' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Skills
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-heading mb-14"
        >
          Tools of the Trade
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="card"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-lg"
                  style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}
                >
                  {cat.icon}
                </span>
                <span className="font-display font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                  {cat.category}
                </span>
              </div>
              {cat.items.map((item, j) => (
                <SkillBar key={item.name} name={item.name} level={item.level} img={item.img} delay={i + j} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
