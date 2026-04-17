import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-8, 0, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-8 md:right-24 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }}
        />
        <div
          className="absolute bottom-32 left-8 w-32 h-32 rounded-full opacity-5"
          style={{ background: 'var(--text-primary)' }}
        />
        {/* Grid lines decoration */}
        <svg
          className="absolute top-0 right-0 opacity-5 w-1/2 h-1/2"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1={i * 44}
              y1="0"
              x2={i * 44}
              y2="400"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i + 10}
              x1="0"
              y1={i * 44}
              x2="400"
              y2={i * 44}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--accent)' }}
              />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                Available for Internships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="font-display font-bold leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--text-primary)' }}
            >
              Srinivasan{' '}
              <span style={{ color: 'var(--accent)' }}>B</span>
              <span style={{ color: 'var(--text-secondary)' }}>.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease: 'easeOut' }}
              className="font-display text-xl md:text-2xl font-medium mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: 'easeOut' }}
              className="font-body text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              CS Engineering student at Easwari Engineering College, specializing in AI & ML.
              Building scalable apps with Java, Spring Boot, and React.js.
              AWS Club Technical Lead with 10+ certifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                download="Srinivasan_B_Resume.pdf"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-outline flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { href: contact.github, icon: <Github size={18} />, label: 'GitHub' },
                { href: contact.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: `mailto:${contact.email}`, icon: <Mail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <ArrowDown size={14} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
