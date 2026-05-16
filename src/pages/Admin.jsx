import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ADMIN_PASSWORD = 'pacome2025'

const stats = [
  { label: 'Projets', value: '6', color: '#F97316' },
  { label: 'Commits', value: '48+', color: '#22C55E' },
  { label: 'Compétences', value: '15+', color: '#818CF8' },
  { label: 'Stages', value: '3', color: '#D4A843' },
]

export default function Admin() {
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuth(true)
      setError('')
    } else {
      setError('Mot de passe incorrect')
      setPassword('')
    }
  }

  if (!auth) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#0A0A0A',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#111', border: '1px solid #1f1f1f',
            borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '380px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '12px',
              background: '#F9731620', border: '1px solid #F9731640',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1rem', fontSize: '1.5rem',
            }}>🔐</div>
            <h2 style={{ color: '#E8E8E8', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>
              Zone Admin
            </h2>
            <p style={{ color: '#555', fontSize: '0.8rem' }}>Accès réservé — Pacôme SINWILLY</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#666', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a',
                  borderRadius: '8px', padding: '11px 14px', color: '#E8E8E8',
                  fontSize: '0.9rem', outline: 'none', fontFamily: 'DM Sans, sans-serif',
                }}
              />
            </div>

            {error && (
              <p style={{ color: '#EF4444', fontSize: '0.8rem', marginBottom: '1rem' }}>
                {error}
              </p>
            )}

            <button type="submit" style={{
              width: '100%', background: '#F97316', color: '#fff',
              border: 'none', borderRadius: '8px', padding: '12px',
              fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Accéder →
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem', padding: '80px 2rem 4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>
              Connecté
            </p>
            <h2 style={{ color: '#E8E8E8', fontSize: '1.8rem' }}>Dashboard Admin</h2>
          </div>
          <button
            onClick={() => setAuth(false)}
            style={{
              background: 'transparent', border: '1px solid #2a2a2a',
              color: '#666', padding: '8px 16px', borderRadius: '6px',
              cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Déconnexion
          </button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: '#111', border: '1px solid #1f1f1f',
                borderRadius: '12px', padding: '1.25rem',
                borderLeft: '3px solid ' + s.color,
              }}
            >
              <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{s.label}</p>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: s.color }}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '1.5rem' }}
        >
          <h3 style={{ color: '#E8E8E8', marginBottom: '1rem', fontSize: '1rem' }}>Projets en cours</h3>
          {[
            { name: 'Portfolio React', progress: 85, color: '#F97316' },
            { name: 'Network Monitor', progress: 60, color: '#22C55E' },
            { name: 'E-commerce Laravel', progress: 70, color: '#EF4444' },
            { name: 'API Node.js', progress: 65, color: '#D4A843' },
            { name: 'Dashboard Firebase', progress: 50, color: '#818CF8' },
            { name: 'Automation Réseau', progress: 75, color: '#06B6D4' },
          ].map((p) => (
            <div key={p.name} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: '#888', fontSize: '0.85rem' }}>{p.name}</span>
                <span style={{ color: p.color, fontSize: '0.8rem' }}>{p.progress}%</span>
              </div>
              <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '4px' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: p.progress + '%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ height: '4px', borderRadius: '4px', background: p.color }}
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}