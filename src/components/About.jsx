import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, BookOpen, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { value: '8.0', label: 'CGPA', icon: <BookOpen size={16} /> },
    { value: '5+', label: 'Projects Built', icon: <Award size={16} /> },
    { value: '10+', label: 'Certifications', icon: <Award size={16} /> },
  ]

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: 'var(--accent)' }}
            >
              About Me
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="section-heading mb-6"
            >
              Crafting Code,<br />Shaping the Future
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm a motivated Computer Science Engineering student specializing in Artificial
              Intelligence & Machine Learning at Easwari Engineering College (CGPA: 8.0/10).
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              I have hands-on experience in full-stack development using Java, Spring Boot,
              React.js, and Python. As the Technical Lead of the AWS Club, I've conducted
              cloud workshops and trained 50+ fellow students on AWS services.
            </motion.p>
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-body text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I've built 5+ real-world projects — including government platforms and
              sustainability apps — and placed 2nd at the IIT Madras E-Summit Enable Ideathon
              2026. I'm currently seeking a Software Engineering internship to contribute to
              scalable, impactful solutions.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              <span className="font-body text-sm">Chennai, Tamil Nadu, India</span>
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="card text-center"
              >
                <p
                  className="font-display font-bold mb-1"
                  style={{ fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Education card — spans 2 cols */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="card col-span-2"
            >
              <p className="font-mono text-xs mb-2" style={{ color: 'var(--accent)' }}>EDUCATION</p>
              <p className="font-display font-semibold text-base mb-0.5" style={{ color: 'var(--text-primary)' }}>
                Easwari Engineering College
              </p>
              <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                BE in CSE — Artificial Intelligence & Machine Learning
              </p>
              <div className="flex items-center justify-between">
                <span className="badge">2024 – 2028</span>
                <span className="badge" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>CGPA 8.0 / 10</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
