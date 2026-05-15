import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1f1f1f',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}
    >
      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#F97316', fontWeight: 700 }}>
        PS<span style={{ color: '#E8E8E8' }}>.</span>
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              color: pathname === l.to ? '#F97316' : '#888',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
              borderBottom: pathname === l.to ? '1px solid #F97316' : '1px solid transparent',
              paddingBottom: '2px',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}