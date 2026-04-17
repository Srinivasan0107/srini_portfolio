import { Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../data'

export default function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
            SB<span style={{ color: 'var(--accent)' }}>.</span>
          </p>
          <p className="font-body text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Srinivasan B — All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: contact.github, icon: <Github size={16} />, label: 'GitHub' },
            { href: contact.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: `mailto:${contact.email}`, icon: <Mail size={16} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
