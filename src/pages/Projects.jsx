import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'Portfolio React',
    desc: 'Portfolio personnel développé avec React, Vite, Tailwind CSS et Framer Motion. Design sombre avec animations fluides.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    color: '#F97316',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
  {
    num: '02',
    title: 'Network Monitor',
    desc: 'Outil Python de surveillance réseau qui scanne les IPs du réseau local, effectue des pings et enregistre les résultats dans un fichier log.',
    tags: ['Python', 'Linux', 'Réseau'],
    color: '#22C55E',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
  {
    num: '03',
    title: 'E-commerce Laravel',
    desc: 'Plateforme e-commerce complète avec authentification, gestion de produits, panier et dashboard administrateur.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Auth'],
    color: '#EF4444',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
  {
    num: '04',
    title: 'API REST Node.js',
    desc: 'API RESTful sécurisée avec authentification JWT, gestion des utilisateurs et connexion MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    color: '#D4A843',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
  {
    num: '05',
    title: 'Dashboard Firebase',
    desc: 'Dashboard analytique temps réel connecté à Firebase avec graphiques dynamiques Chart.js et authentification.',
    tags: ['React', 'Firebase', 'Chart.js'],
    color: '#818CF8',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
  {
    num: '06',
    title: 'Automation Réseau',
    desc: 'Automatisation de déploiement serveur Apache avec Python, Ansible et Docker. Infrastructure as Code.',
    tags: ['Python', 'Ansible', 'Docker', 'Linux'],
    color: '#06B6D4',
    status: 'En cours',
    github: 'https://github.com/pacomesinwilly',
  },
]

export default function Projects() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Ce que je construis
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8' }}>Mes projets</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                background: '#111', border: '1px solid #1f1f1f',
                borderRadius: '14px', padding: '1.5rem',
                cursor: 'pointer', transition: 'border-color 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Numéro décoratif */}
              <span style={{
                position: 'absolute', top: '1rem', right: '1.25rem',
                fontSize: '3rem', fontFamily: 'Playfair Display, serif',
                color: '#1a1a1a', fontWeight: 900, lineHeight: 1,
                userSelect: 'none',
              }}>{p.num}</span>

              {/* Status */}
              <span style={{
                fontSize: '0.65rem', padding: '3px 8px', borderRadius: '20px',
                background: `${p.color}20`, color: p.color,
                border: `1px solid ${p.color}40`,
                marginBottom: '1rem', display: 'inline-block',
              }}>{p.status}</span>

              <h3 style={{ fontSize: '1.1rem', color: '#E8E8E8', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                {p.title}
              </h3>

              <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem',
                    background: '#1a1a1a', color: '#888', border: '1px solid #2a2a2a',
                  }}>{t}</span>
                ))}
              </div>

              {/* Barre colorée bas */}
              <div style={{ height: '2px', background: `linear-gradient(to right, ${p.color}, transparent)`, borderRadius: '1px', marginBottom: '1rem' }} />

              <a href={p.github} target="_blank" rel="noreferrer" style={{
                color: p.color, fontSize: '0.8rem', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                Voir sur GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}