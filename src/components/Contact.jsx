import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { contact } from '../data'

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail recommended) → copy Service ID
// 3. Create an Email Template → copy Template ID
//    Template variables used: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → API Keys → copy Public Key
// Replace the three placeholders below with your actual values:
const EMAILJS_SERVICE_ID  = 'service_7r45it9'
const EMAILJS_TEMPLATE_ID = 'template_w9lsry9'
const EMAILJS_PUBLIC_KEY  = '_sqdX-5Ca1zLTzfIK'
// ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const inputStyle = {
  width: '100%',
  background: 'var(--bg)',
  border: '1.5px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '14px',
  fontFamily: 'DM Sans, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const contactItems = [
    { icon: <Mail size={16} />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <Phone size={16} />, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: <Github size={16} />, label: 'GitHub', value: 'Srinivasan0107', href: contact.github },
    { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'Srinivasan108', href: contact.linkedin },
    { icon: <MapPin size={16} />, label: 'Location', value: contact.location, href: null },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel = {
    idle:    <><Send size={14} /> Send Message</>,
    sending: <>Sending…</>,
    sent:    <>✓ Message Sent!</>,
    error:   <>✗ Failed — Try Again</>,
  }

  const btnColor = {
    idle:    'var(--text-primary)',
    sending: 'var(--text-secondary)',
    sent:    '#16a34a',
    error:   '#dc2626',
  }

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Contact
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-heading mb-4"
        >
          Let's Talk
        </motion.h2>
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-body text-base mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          Open to internship opportunities, collaborations, or just a good conversation.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {contactItems.map((item) => (
              <div key={item.label} className="card flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm truncate block hover:underline"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="card"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Message</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2"
                style={{
                  background: btnColor[status],
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s ease',
                }}
              >
                {btnLabel[status]}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
