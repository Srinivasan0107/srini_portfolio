import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Experience
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-heading mb-14"
        >
          Where I've Led
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px md:left-8"
            style={{ background: 'var(--border)' }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative pl-14 pb-12 md:pl-20"
            >
              {/* Dot */}
              <div
                className="absolute left-3.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 md:left-6"
                style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }}
              />

              <div className="card">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <p className="font-body text-base" style={{ color: 'var(--accent)' }}>
                      {exp.org}
                    </p>
                  </div>
                  <span className="badge shrink-0">{exp.period}</span>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                      <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
