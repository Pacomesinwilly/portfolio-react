import { motion } from 'framer-motion'

const fade = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
})

const skills = [
  {
    category: 'Développement Web',
    color: '#F97316',
    items: ['HTML / CSS', 'JavaScript', 'PHP', 'Laravel', 'React', 'Node.js'],
  },
  {
    category: 'Bases de données',
    color: '#D4A843',
    items: ['MySQL', 'Firebase', 'PostgreSQL', 'Modélisation'],
  },
  {
    category: 'DevOps & Systèmes',
    color: '#22C55E',
    items: ['Docker', 'Docker Compose', 'Linux', 'Déploiement'],
  },
  {
    category: 'Bureautique avancée',
    color: '#818CF8',
    items: ['Excel macros VBA', 'Systèmes sécurisés', 'PowerPoint', 'Word'],
  },
  {
    category: 'Design & PAO',
    color: '#EC4899',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    category: 'Réseaux & Télécoms',
    color: '#06B6D4',
    items: ['Architecture réseau', 'Systèmes & Réseaux', 'Télécommunications'],
  },
]

const timeline = [
  { year: '2021 – 2022', title: '1ère année électronique', place: 'Lycée Technique Natitingou', color: '#444' },
  { year: '2022 – 2023', title: 'CAP Électricité', place: 'Lycée Technique Natitingou', color: '#444' },
  { year: '2023 – 2024', title: 'Baccalauréat Électronique', place: 'Lycée Technique Natitingou — Mention Assez Bien', color: '#D4A843' },
  { year: 'mai – août 2022', title: 'Stage académique', place: 'YOUPILAB, Godomey, Bénin', color: '#F97316', isExp: true },
  { year: 'juin – sept 2023', title: 'Stage académique', place: 'YOUPILAB, Godomey, Bénin', color: '#F97316', isExp: true },
  { year: '2024 – 2027', title: 'Licence Informatique Réseaux & Télécoms', place: 'ESGIS, Cotonou — En cours', color: '#22C55E' },
  { year: 'août – sept 2025', title: 'Stage académique', place: 'DYRA, Natitingou, Bénin', color: '#F97316', isExp: true },
]

export default function About() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div {...fade(0.1)} style={{ marginBottom: '4rem' }}>
          <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Qui suis-je
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8', marginBottom: '1.5rem' }}>
            À propos de moi
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Étudiant en 2ème année de Licence en Informatique Réseaux & Télécommunications à <span style={{ color: '#E8E8E8' }}>ESGIS Bénin</span>, 
              je suis passionné par le développement web et les systèmes Linux. Curieux et orienté pratique, 
              mon objectif est de devenir ingénieur développeur web et réseau.
            </p>
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Je crée des <span style={{ color: '#F97316' }}>solutions concrètes</span> pour les entreprises africaines — 
              des applications web complètes aux systèmes Excel sécurisés avec macros VBA, 
              en passant par le déploiement Docker et la gestion de bases de données.
            </p>
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div {...fade(0.2)} style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#E8E8E8', marginBottom: '1.5rem' }}>Compétences</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {skills.map((s) => (
              <div key={s.category} style={{
                background: '#111', border: '1px solid #1f1f1f',
                borderRadius: '12px', padding: '1.25rem',
                borderLeft: `3px solid ${s.color}`,
              }}>
                <p style={{ color: s.color, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>
                  {s.category}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      padding: '3px 10px', borderRadius: '20px', fontSize: '0.75rem',
                      background: '#1a1a1a', color: '#888', border: '1px solid #2a2a2a',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fade(0.3)}>
          <h3 style={{ fontSize: '1.5rem', color: '#E8E8E8', marginBottom: '1.5rem' }}>Parcours</h3>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '1px', background: '#1f1f1f' }} />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                style={{ position: 'relative', marginBottom: '1.5rem' }}
              >
                <div style={{
                  position: 'absolute', left: '-1.85rem', top: '5px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: t.color, border: '2px solid #0A0A0A',
                }} />
                <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '10px', padding: '0.9rem 1.1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ color: '#E8E8E8', fontSize: '0.9rem', fontWeight: 500 }}>{t.title}</span>
                    {t.isExp && <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', background: '#F9731620', color: '#F97316', border: '1px solid #F9731640' }}>Expérience</span>}
                  </div>
                  <p style={{ color: '#666', fontSize: '0.8rem' }}>{t.place}</p>
                  <p style={{ color: t.color, fontSize: '0.75rem', marginTop: '4px' }}>{t.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}