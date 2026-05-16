import ScrollReveal from '../components/ScrollReveal'

const skills = [
  { category: 'Développement Web', color: '#F97316', items: ['HTML / CSS', 'JavaScript', 'PHP', 'Laravel', 'React', 'Node.js'] },
  { category: 'Bases de données', color: '#D4A843', items: ['MySQL', 'Firebase', 'PostgreSQL', 'Modélisation'] },
  { category: 'DevOps & Systèmes', color: '#22C55E', items: ['Docker', 'Docker Compose', 'Linux', 'Déploiement'] },
  { category: 'Bureautique avancée', color: '#818CF8', items: ['Excel macros VBA', 'Systèmes sécurisés', 'PowerPoint', 'Word'] },
  { category: 'Design & PAO', color: '#EC4899', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'] },
  { category: 'Réseaux & Télécoms', color: '#06B6D4', items: ['Architecture réseau', 'Systèmes & Réseaux', 'Télécommunications'] },
]

const timeline = [
  { year: '2021 – 2022', title: '1ère année électronique', place: 'Lycée Technique Natitingou', color: '#444' },
  { year: '2022 – 2023', title: 'CAP Électricité', place: 'Lycée Technique Natitingou', color: '#444' },
  { year: 'mai – août 2022', title: 'Stage académique', place: 'YOUPILAB, Godomey, Bénin', color: '#F97316', isExp: true },
  { year: '2023 – 2024', title: 'Baccalauréat Électronique', place: 'Lycée Technique Natitingou — Mention Assez Bien', color: '#D4A843' },
  { year: 'juin – sept 2023', title: 'Stage académique', place: 'YOUPILAB, Godomey, Bénin', color: '#F97316', isExp: true },
  { year: '2024 – 2027', title: 'Licence Informatique Réseaux & Télécoms', place: 'ESGIS, Cotonou — En cours', color: '#22C55E' },
  { year: 'août – sept 2025', title: 'Stage académique', place: 'DYRA, Natitingou, Bénin', color: '#F97316', isExp: true },
]

export default function About() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <ScrollReveal delay={0.1}>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Qui suis-je
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8', marginBottom: '1.5rem' }}>
              A propos de moi
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.95rem' }}>
                Etudiant en 2eme annee de Licence en Informatique Reseaux et Telecommunications a{' '}
                <span style={{ color: '#E8E8E8' }}>ESGIS Benin</span>, je suis passionne par le developpement web
                et les systemes Linux. Curieux et oriente pratique, mon objectif est de devenir ingenieur
                developpeur web et reseau.
              </p>
              <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.95rem' }}>
                Je cree des <span style={{ color: '#F97316' }}>solutions concretes</span> pour les entreprises
                africaines — des applications web completes aux systemes Excel securises avec macros VBA,
                en passant par le deploiement Docker et la gestion de bases de donnees.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#E8E8E8', marginBottom: '1.5rem' }}>Competences</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {skills.map(function(s) {
                return (
                  <div key={s.category} style={{
                    background: '#111',
                    border: '1px solid #1f1f1f',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: '3px solid ' + s.color,
                  }}>
                    <p style={{ color: s.color, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>
                      {s.category}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {s.items.map(function(item) {
                        return (
                          <span key={item} style={{
                            padding: '3px 10px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            background: '#1a1a1a',
                            color: '#888',
                            border: '1px solid #2a2a2a',
                          }}>
                            {item}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#E8E8E8', marginBottom: '1.5rem' }}>Parcours</h3>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '1px', background: '#1f1f1f' }} />
              {timeline.map(function(t, i) {
                return (
                  <div key={i} style={{ position: 'relative', marginBottom: '1.5rem' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-1.85rem',
                      top: '5px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: t.color,
                      border: '2px solid #0A0A0A',
                    }} />
                    <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '10px', padding: '0.9rem 1.1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                        <span style={{ color: '#E8E8E8', fontSize: '0.9rem', fontWeight: 500 }}>{t.title}</span>
                        {t.isExp && (
                          <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', background: '#F9731620', color: '#F97316', border: '1px solid #F9731640' }}>
                            Experience
                          </span>
                        )}
                      </div>
                      <p style={{ color: '#666', fontSize: '0.8rem' }}>{t.place}</p>
                      <p style={{ color: t.color, fontSize: '0.75rem', marginTop: '4px' }}>{t.year}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
