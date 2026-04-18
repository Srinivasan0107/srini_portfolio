import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import Intro from './components/Intro'

export default function App() {
  const [dark, setDark] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Lock body scroll until intro is done
  useEffect(() => {
    if (!introDone) {
      document.body.style.overflowX = 'hidden'
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [introDone])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div>
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}

      <AnimatePresence>
        {introDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen relative"
          >
            <Background />
            <div className="relative" style={{ zIndex: 1 }}>
              <Navbar dark={dark} toggleDark={toggleDark} />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <Certifications />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
