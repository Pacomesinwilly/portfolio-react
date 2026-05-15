import { motion } from 'framer-motion'
import { useState } from 'react'

const infos = [
  { label: 'Email', value: 'pacomesinwilly@gmail.com', href: 'mailto:pacomesinwilly@gmail.com', color: '#F97316' },
  { label: 'Téléphone', value: '+229 0156972319', href: 'tel:+2290156972319', color: '#D4A843' },
  { label: 'Localisation', value: 'Cotonou / Natitingou, Bénin 🇧🇯', href: null, color: '#22C55E' },
  { label: 'GitHub', value: 'github.com/pacomesinwilly', href: 'https://github.com/pacomesinwilly', color: '#818CF8' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%', background: '#111', border: '1px solid #2a2a2a',
    borderRadius: '8px', padding: '12px 14px', color: '#E8E8E8',
    fontSize: '0.9rem', outline: 'none', fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ color: '#F97316', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Travaillons ensemble
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8' }}>Me contacter</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>

          {/* Infos gauche */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '2rem' }}>
              Disponible pour des projets freelance, des stages ou des collaborations. N'hésitez pas à me contacter.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {infos.map((info) => (
                <div key={info.label} style={{
                  background: '#111', border: '1px solid #1f1f1f',
                  borderRadius: '10px', padding: '1rem 1.25rem',
                  borderLeft: `3px solid ${info.color}`,
                }}>
                  <p style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} style={{ color: info.color, fontSize: '0.85rem', textDecoration: 'none' }}>{info.value}</a>
                  ) : (
                    <p style={{ color: '#888', fontSize: '0.85rem' }}>{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire droite */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ color: '#666', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Votre nom</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Pacôme SINWILLY" required style={inputStyle} />
              </div>
              <div>
                <label style={{ color: '#666', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="votre@email.com" required style={inputStyle} />
              </div>
              <div>
                <label style={{ color: '#666', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Bonjour Pacôme, j'aimerais..." required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" style={{
                background: sent ? '#22C55E' : '#F97316',
                color: '#fff', border: 'none', borderRadius: '8px',
                padding: '13px 28px', fontSize: '0.9rem', fontWeight: 500,
                cursor: 'pointer', transition: 'background 0.3s',
                fontFamily: 'DM Sans, sans-serif',
              }}>
                {sent ? '✓ Message envoyé !' : 'Envoyer le message →'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}