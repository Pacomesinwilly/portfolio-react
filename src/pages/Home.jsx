import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const skills = ['React', 'Laravel', 'Docker', 'Python', 'Node.js', 'Firebase']

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem', paddingTop: '64px' }}>

      {/* Fond décoratif */}
      <div style={{
        position: 'fixed', top: 0, right: 0, width: '50vw', height: '100vh',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Texte gauche */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ color: '#F97316', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Bonjour, je suis
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '0.5rem', color: '#E8E8E8' }}
          >
            Pacôme
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#F97316' }}
          >
            SINWILLY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ color: '#888', fontSize: '1rem', lineHeight: 1.8, marginBottom: '0.5rem' }}
          >
            Développeur Web Full Stack & Réseaux
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '420px' }}
          >
            Je conçois des applications web, des systèmes sécurisés et des solutions digitales pour les entreprises africaines.
          </motion.p>

          {/* Skills pills */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
          >
            {skills.map(s => (
              <span key={s} style={{
                padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
                border: '1px solid #2a2a2a', color: '#888', background: '#111',
              }}>{s}</span>
            ))}
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/projects" style={{
              background: '#F97316', color: '#fff', padding: '12px 28px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}>
              Voir mes projets →
            </Link>
            <Link to="/contact" style={{
              border: '1px solid #2a2a2a', color: '#888', padding: '12px 28px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem',
              transition: 'all 0.2s',
            }}>
              Me contacter
            </Link>
            <a href="https://github.com/pacomesinwilly" target="_blank" rel="noreferrer" style={{
              border: '1px solid #2a2a2a', color: '#888', padding: '12px 28px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem',
            }}>
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Photo droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Cadre décoratif */}
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px',
              border: '2px solid #F97316', borderRadius: '12px', zIndex: 0,
            }} />
            <img
              src="/pacome.jpg"
              alt="Pacôme SINWILLY"
              style={{
                width: '320px', height: '400px', objectFit: 'cover', objectPosition: 'top',
                borderRadius: '12px', position: 'relative', zIndex: 1,
                filter: 'grayscale(20%)',
              }}
            />
            {/* Badge flottant */}
            <motion.div
              animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}
              style={{
                position: 'absolute', bottom: '-16px', right: '-16px', zIndex: 2,
                background: '#1A1A1A', border: '1px solid #2a2a2a',
                borderRadius: '10px', padding: '10px 16px',
              }}
            >
              <p style={{ fontSize: '0.7rem', color: '#888', marginBottom: '2px' }}>Basé à</p>
              <p style={{ fontSize: '0.85rem', color: '#F97316', fontWeight: 500 }}>🇧🇯 Bénin</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}