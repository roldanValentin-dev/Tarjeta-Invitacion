import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Nombre from './components/Nombre'
import Foto from './components/Foto'
import Invitacion from './components/Invitacion'
import Detalles from './components/Detalles'
import Contador from './components/Contador'
import Pastel from './components/Pastel'
import Mensaje from './components/Mensaje'
import Asistencia from './components/Asistencia'
import Footer from './components/Footer'

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: `p${i}`,
  left: `${(i * 7 + Math.sin(i * 1.7) * 2) % 100}%`,
  delay: `${i * 0.45}s`,
  duration: `${14 + (i % 7) * 1.8}s`,
  size: 2 + (i % 4) * 2,
}))

const NOTES = [
  { id: 'n1', left: '15%', delay: '1.2s', duration: '18s', note: '♩' },
  { id: 'n2', left: '75%', delay: '2.5s', duration: '22s', note: '♪' },
  { id: 'n3', left: '45%', delay: '3.8s', duration: '16s', note: '♫' },
  { id: 'n4', left: '88%', delay: '5s', duration: '20s', note: '♬' },
]

const CONFETTI_COLORS = ['#FBBF24', '#F59E0B', '#FDE68A', '#D97706', '#FCD34D', '#FFFBEB']
const CONFETTI = Array.from({ length: 30 }, (_, i) => ({
  id: `c${i}`,
  left: `${(i * 3.3 + Math.sin(i * 2.1) * 1.5) % 100}%`,
  delay: `${Math.sin(i * 0.7) * 1.2 + 0.8}s`,
  duration: `${2.5 + Math.sin(i * 0.5) * 1.2 + 1.5}s`,
  rotation: `${180 + Math.sin(i * 0.9) * 300}deg`,
  w: `${4 + Math.sin(i * 1.3) * 3 + 3}px`,
  h: `${6 + Math.sin(i * 0.8) * 4 + 4}px`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
}))

function App() {
  const [ripples, setRipples] = useState([])
  const cursorRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => window.scrollTo(0, 0), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    let raf = null

    const move = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        el.style.left = `${e.clientX}px`
        el.style.top = `${e.clientY}px`
        raf = null
      })
    }

    const show = () => { el.style.opacity = '1' }
    const hide = () => { el.style.opacity = '0' }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', show)
    document.addEventListener('mouseleave', hide)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', show)
      document.removeEventListener('mouseleave', hide)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const handleCardClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now() + Math.random()
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700)
  }

  return (
    <div className="noise-overlay bg-animated relative min-h-screen flex items-center justify-center p-3 sm:p-4 overflow-x-hidden cursor-enabled">
      <div
        ref={cursorRef}
        className="hidden sm:block fixed pointer-events-none z-[9999] text-gold-400 text-xl opacity-0 transition-opacity duration-200"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)', textShadow: '0 0 10px rgba(251,191,36,0.6)' }}
      >
        ✦
      </div>

      {PARTICLES.map((p) => (
        <div key={p.id} className="particle" style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }} />
      ))}

      {NOTES.map((n) => (
        <div key={n.id} className="music-note text-lg sm:text-xl md:text-2xl" style={{ left: n.left, animationDelay: n.delay, animationDuration: n.duration }}>{n.note}</div>
      ))}

      {CONFETTI.map((c) => (
        <div key={c.id} className="confetti-piece" style={{ left: c.left, width: c.w, height: c.h, '--rotation': c.rotation, background: c.color, animationDuration: c.duration, animationDelay: c.delay }} />
      ))}

      <div
        className="card-enter relative max-w-lg w-full rounded-3xl shadow-[0_8px_40px_rgba(146,64,14,0.12),0_2px_10px_rgba(146,64,14,0.08)] border border-amber-200/60 p-6 sm:p-8 md:p-10 lg:p-14 my-4 sm:my-6 md:my-8 overflow-hidden"
        onClick={handleCardClick}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10l5 15 15 5-15 5-5 15-5-15-15-5 15-5z' fill='%23FBBF24' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundColor: '#FFFCF7',
        }}
      >
        {ripples.map((r) => (
          <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
        ))}

        <div className="stagger-fade">
          <Header />
          <Foto />
          <Nombre />
          <Invitacion />
          <Detalles />
          <Contador />
          <Pastel />
          <Mensaje />
          <Asistencia />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
