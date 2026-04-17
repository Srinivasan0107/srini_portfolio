import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const cardRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-2xl cursor-default h-full"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}22 0%, transparent 60%), var(--card-bg, #ffffff08)`
            : 'var(--card-bg, #ffffff08)',
          border: `1px solid ${hovered ? project.color + '66' : 'var(--border, #ffffff15)'}`,
          boxShadow: hovered
            ? `0 20px 60px -12px ${project.color}44, 0 0 0 1px ${project.color}22, inset 0 1px 0 ${project.color}33`
            : '0 4px 24px -4px rgba(0,0,0,0.3)',
          transition: 'all 0.35s ease',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Glossy top sheen */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: hovered
              ? `linear-gradient(90deg, transparent, ${project.color}88, transparent)`
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
            transition: 'all 0.35s ease',
          }}
        />

        {/* Glossy inner highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
            borderRadius: '16px 16px 0 0',
          }}
        />

        {/* Top accent bar */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: hovered ? '100%' : '48px' }}
          transition={{ duration: 0.4 }}
        />

        <div className="p-6 pt-5 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <span
              className="text-3xl"
              style={{
                filter: hovered ? `drop-shadow(0 0 8px ${project.color}88)` : 'none',
                transition: 'filter 0.3s ease',
              }}
            >
              {project.icon}
            </span>
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}33`,
              }}
            >
              {project.subtitle}
            </span>
          </div>

          <h3
            className="font-display font-bold text-lg mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>
          <p
            className="font-body text-sm leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="text-xs font-mono px-2 py-0.5 rounded-md"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}25`,
                }}
              >
                ✓ {h}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-md font-mono"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-body transition-all"
            style={{
              color: hovered ? project.color : 'var(--text-secondary)',
              transition: 'color 0.3s ease',
            }}
          >
            <Github size={14} />
            View Code
          </a>
        </div>

        {/* Bottom glossy reflection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: `linear-gradient(0deg, ${project.color}08 0%, transparent 100%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Projects
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-heading mb-3"
        >
          What I've Built
        </motion.h2>
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-body text-base mb-14"
          style={{ color: 'var(--text-secondary)' }}
        >
          Real-world applications solving real problems.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
