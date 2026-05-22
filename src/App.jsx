import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Nombre from './components/Nombre'
import Foto from './components/Foto'
import Invitacion from './components/Invitacion'
import Detalles from './components/Detalles'
import Asistencia from './components/Asistencia'
import Footer from './components/Footer'
import RSVPModal from './components/RSVPModal'

const GLITTER = Array.from({ length: 4 }, (_, i) => ({
  id: `gl${i}`,
  left: `${(i * 12 + Math.sin(i * 1.4) * 5) % 100}%`,
  delay: `${i * 0.6}s`,
  duration: `${14 + (i % 4) * 3}s`,
  size: 2 + (i % 3),
}))

const SPARKLES = Array.from({ length: 4 }, (_, i) => ({
  id: `sp${i}`,
  left: `${(i * 12 + Math.sin(i * 1.8) * 4 + 4) % 100}%`,
  top: `${(i * 12 + Math.cos(i * 1.3) * 5 + 8) % 100}%`,
  delay: `${i * 0.9 + Math.sin(i * 0.4) * 0.3}s`,
  size: 7 + (i % 2) * 3,
}))

const NOTES = [
  { id: 'n1', left: '12%', delay: '1.5s', duration: '20s', note: '♩' },
  { id: 'n2', left: '78%', delay: '3s', duration: '24s', note: '♪' },
  { id: 'n3', left: '42%', delay: '4.5s', duration: '18s', note: '♫' },
  { id: 'n4', left: '90%', delay: '6s', duration: '22s', note: '♬' },
]

const CONFETTI_COLORS = ['#E05068', '#C088C8', '#E8808E', '#D0A8D8', '#D43850', '#B070B8']
const CONFETTI = Array.from({ length: 8 }, (_, i) => ({
  id: `c${i}`,
  left: `${(i * 12.5 + Math.sin(i * 2.1) * 3) % 100}%`,
  delay: `${Math.sin(i * 0.7) * 1.2 + 0.8}s`,
  duration: `${3 + Math.sin(i * 0.5) * 1.2 + 1.5}s`,
  rotation: `${180 + Math.sin(i * 0.9) * 300}deg`,
  w: `${4 + Math.sin(i * 1.3) * 3 + 3}px`,
  h: `${6 + Math.sin(i * 0.8) * 4 + 4}px`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
}))

const CARD_SPARKLES = Array.from({ length: 3 }, (_, i) => ({
  id: `cs${i}`,
  top: `${15 + i * 14 + Math.sin(i * 2.3) * 6}%`,
  left: `${8 + i * 16 + Math.cos(i * 1.7) * 5}%`,
  delay: `${i * 0.5}s`,
}))

function App() {
  const [loading, setLoading] = useState(true)
  const [ripples, setRipples] = useState([])
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const cursorRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => window.scrollTo(0, 0), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (loading) return
    const el = revealRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('revealed'), 200 + i * 120)
    })
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    items.forEach((child) => obs.observe(child))
    return () => obs.disconnect()
  }, [loading])

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
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800)
  }

  return (
    <>
      {loading && (
        <div className="preloader">
          <h1 className="shimmer-title text-7xl sm:text-8xl md:text-9xl font-titulo">80</h1>
        </div>
      )}

      <div
        className="relative min-h-screen flex items-center justify-center p-3 sm:p-4 overflow-x-hidden cursor-enabled"
        style={{
          backgroundImage: 'url("/img/a_beautiful_background_pattern_of_delicate_pink_and_purple_flowers_with.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          ref={cursorRef}
          className="hidden sm:block fixed pointer-events-none z-[9999] text-rose-400 text-xl opacity-0 transition-opacity duration-200"
          style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)', textShadow: '0 0 10px rgba(224,80,104,0.4)' }}
        >
          ✦
        </div>

        {GLITTER.map((g) => (
          <div
            key={g.id}
            className="particle glitter-dot"
            style={{
              left: g.left,
              width: g.size,
              height: g.size,
              background: 'radial-gradient(circle, #E8808E, #C088C8)',
              boxShadow: '0 0 6px 2px rgba(224,80,104,0.25)',
              animationDelay: g.delay,
              animationDuration: g.duration,
            }}
          />
        ))}

        {NOTES.map((n) => (
          <div key={n.id} className="music-note text-lg sm:text-xl" style={{ left: n.left, animationDelay: n.delay, animationDuration: n.duration }}>{n.note}</div>
        ))}

        {CONFETTI.map((c) => (
          <div key={c.id} className="confetti-piece" style={{ left: c.left, width: c.w, height: c.h, '--rotation': c.rotation, background: c.color, animationDuration: c.duration, animationDelay: c.delay }} />
        ))}

        {SPARKLES.map((s) => (
          <div key={s.id} className="sparkle-star" style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, fontSize: s.size }} />
        ))}

        <div className="card-wrapper w-full max-w-lg mx-auto my-4 sm:my-6 md:my-8">
          <div
            className="card-enter relative w-full rounded-[2rem] shadow-[0_12px_60px_rgba(224,80,104,0.15),0_4px_16px_rgba(224,80,104,0.08)] border border-rose-300/50 p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
            onClick={handleCardClick}
            style={{
              backgroundColor: 'rgba(255, 240, 242, 0.96)',
            }}
          >
            {/* Corner decorations */}
            <span className="corner-flower text-sm sm:text-base" style={{ top: '0.75rem', left: '0.75rem', '--rot': '-15deg' }}>🌸</span>
            <span className="corner-flower text-sm sm:text-base" style={{ top: '0.75rem', right: '0.75rem', '--rot': '15deg' }}>🌸</span>
            <span className="corner-flower text-sm sm:text-base" style={{ bottom: '0.75rem', left: '0.75rem', '--rot': '15deg' }}>🌸</span>
            <span className="corner-flower text-sm sm:text-base" style={{ bottom: '0.75rem', right: '0.75rem', '--rot': '-15deg' }}>🌸</span>

            {/* Inner card sparkles */}
            {CARD_SPARKLES.map((s) => (
              <span
                key={s.id}
                className="card-sparkle"
                style={{ top: s.top, left: s.left, animationDelay: s.delay }}
              >
                ✦
              </span>
            ))}

            {ripples.map((r) => (
              <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
            ))}

            <div ref={revealRef} className="space-y-6 sm:space-y-8">
              {/* Container 1: Header */}
              <div className="reveal section-card text-center">
                <Header />
                <div className="mt-2">
                  <Nombre />
                </div>
              </div>

              {/* Container 2: Photo */}
              <div className="reveal text-center">
                <Foto />
              </div>

              {/* Invitation text */}
              <div className="reveal section-card text-center">
                <Invitacion />
              </div>

              {/* Container 3: Details + Confirm button */}
              <div className="reveal section-card">
                <Detalles />
                <div className="mt-10 sm:mt-12">
                  <Asistencia onOpenModal={() => setRsvpOpen(true)} />
                </div>
              </div>

              {/* Footer */}
              <div className="reveal section-card">
                <Footer />
              </div>
            </div>
          </div>
        </div>

        <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      </div>
    </>
  )
}

export default App
