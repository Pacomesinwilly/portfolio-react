import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'Site KONOULA',
    desc: 'Site web complet pour KONOULA — plateforme d\'accompagnement psychologique et d\'orientation professionnelle. Conçu et développé entièrement pour un client réel au Bénin.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Client réel'],
    color: '#818CF8',
    status: 'Livré ✓',
    github: 'https://github.com/Pacomesinwilly/konoula-website',
    gitlab: 'https://github.com/Pacomesinwilly/konoula-website',
  },
  {
    num: '02',
    title: 'Logistiq Web — DYRA',
    desc: 'Application de gestion logistique de colis et marchandises. Développé durant mon stage à DYRA Natitingou — traçabilité complète, gestion d\'entrepôts, suivi en temps réel.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Stage DYRA'],
    color: '#F97316',
    status: 'Stage ✓',
    github: 'https://gitlab.com/DYRA-Benin/logistiq_web',
    gitlab: 'https://gitlab.com/DYRA-Benin/logistiq_web',
  },
  {
    num: '03',
    title: 'Portfolio React',
    desc: 'Portfolio personnel développé avec React, Vite, Tailwind CSS et Framer Motion. Design sombre avec animations fluides.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    color: '#22C55E',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/portfolio-react',
    gitlab: 'https://gitlab.com/pacomesinwilly/portfolio-react',
  },
  {
    num: '04',
    title: 'Network Monitor',
    desc: 'Outil Python de surveillance réseau local — scan automatique des IPs, ping, logs horodatés.',
    tags: ['Python', 'Linux', 'Réseau'],
    color: '#06B6D4',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/network-monitor',
    gitlab: 'https://gitlab.com/pacomesinwilly/network-monitor',
  },
  {
    num: '05',
    title: 'E-commerce Laravel',
    desc: 'Plateforme e-commerce complète avec authentification, panier et dashboard admin.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: '#EF4444',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/ecommerce-laravel',
    gitlab: 'https://gitlab.com/pacomesinwilly/ecommerce-laravel',
  },
  {
    num: '06',
    title: 'API REST Node.js',
    desc: 'API RESTful sécurisée avec JWT, gestion utilisateurs et base de données.',
    tags: ['Node.js', 'Express', 'JWT'],
    color: '#D4A843',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/api-node',
    gitlab: 'https://gitlab.com/pacomesinwilly/api-node',
  },
  {
    num: '07',
    title: 'Dashboard Firebase',
    desc: 'Dashboard analytique temps réel avec Firebase et graphiques Chart.js.',
    tags: ['React', 'Firebase', 'Chart.js'],
    color: '#EC4899',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/dashboard-react',
    gitlab: 'https://gitlab.com/pacomesinwilly/dashboard-react',
  },
  {
    num: '08',
    title: 'Automation Réseau',
    desc: 'Déploiement automatisé Apache avec Python, Ansible et Docker.',
    tags: ['Python', 'Ansible', 'Docker'],
    color: '#22C55E',
    status: 'En cours',
    github: 'https://github.com/Pacomesinwilly/automation',
    gitlab: 'https://gitlab.com/pacomesinwilly/automation',
  },
]
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function GitLabIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
    </svg>
  )
}

function LinkBtn({ href, color, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '7px 14px', borderRadius: '6px', fontSize: '0.78rem',
        background: '#1a1a1a', color: '#E8E8E8',
        border: '1px solid #2a2a2a', textDecoration: 'none',
        fontWeight: 500, transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color
        e.currentTarget.style.color = color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#2a2a2a'
        e.currentTarget.style.color = '#E8E8E8'
      }}
    >
      {children}
    </a>
  )
}

export default function Projects() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Ce que je construis
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8' }}>Mes projets</h2>
          <p style={{ color: '#555', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Chaque projet est disponible sur GitHub et GitLab — clique pour consulter le code source.
          </p>
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
                position: 'relative', overflow: 'hidden',
              }}
            >
              <span style={{
                position: 'absolute', top: '1rem', right: '1.25rem',
                fontSize: '3rem', fontFamily: 'Playfair Display, serif',
                color: '#1a1a1a', fontWeight: 900, lineHeight: 1, userSelect: 'none',
              }}>{p.num}</span>

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

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem',
                    background: '#1a1a1a', color: '#888', border: '1px solid #2a2a2a',
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ height: '2px', background: `linear-gradient(to right, ${p.color}, transparent)`, borderRadius: '1px', marginBottom: '1.25rem' }} />

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <LinkBtn href={p.github} color="#F97316">
                  <GitHubIcon /> GitHub
                </LinkBtn>
                <LinkBtn href={p.gitlab} color="#FC6D26">
                  <GitLabIcon /> GitLab
                </LinkBtn>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}