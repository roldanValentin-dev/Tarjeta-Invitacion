import { useState, useEffect, useRef } from 'react'

const BURST_COLORS = ['#E87A8A', '#C9A9D6', '#E8B4B8', '#D9C4E8', '#FBBF24']

function RSVPModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('yes')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const modal = modalRef.current
    if (!modal) return
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `¡Hola! ${name} ${attendance === 'yes' ? 'confirma' : 'no podrá'} asistir al cumpleaños de Luci 🎉\n\n${message ? `Mensaje: ${message}` : 'Sin mensaje'}`
    )
    window.open(`https://wa.me/5493815233053?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setName('')
      setAttendance('yes')
      setMessage('')
      setSubmitted(false)
    }, 1800)
  }

  const burst = submitted && Array.from({ length: 20 }, (_, i) => ({
    id: `burst${i}`,
    left: `${20 + Math.random() * 60}%`,
    delay: `${Math.random() * 0.25}s`,
    color: BURST_COLORS[i % BURST_COLORS.length],
    fall: `${40 + Math.random() * 60}px`,
    spin: `${Math.random() * 720 - 360}deg`,
  }))

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-lavender-500/15 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="modal-enter relative w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_60px_rgba(200,150,200,0.2)] border border-white/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted && burst.map((b) => (
          <div
            key={b.id}
            className="confetti-burst-piece"
            style={{
              left: b.left,
              top: '40%',
              background: b.color,
              animationDelay: b.delay,
              '--fall': b.fall,
              '--spin': b.spin,
            }}
          />
        ))}

        <div className={`transition-all duration-500 ease-in-out ${submitted ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-lavender-300 hover:text-rose-400 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <h4 className="font-titulo text-3xl sm:text-4xl text-lavender-600 mb-6 text-center leading-none">Confirmar</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-lavender-500 font-bold font-body ml-1">Nombre</label>
              <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Tu nombre..."
                className="w-full bg-lavender-50/60 border border-lavender-200/50 rounded-2xl py-3 px-4 text-sm text-lavender-700 placeholder:text-lavender-300/60 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all mt-1"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-lavender-500 font-bold font-body ml-1">¿Asistirás?</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <label className="flex items-center justify-center gap-2 bg-lavender-50/60 p-3 rounded-2xl cursor-pointer border-2 border-transparent has-[:checked]:border-rose-400 transition-all">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === 'yes'}
                    onChange={() => setAttendance('yes')}
                    className="text-rose-400 focus:ring-rose-300 h-3.5 w-3.5"
                  />
                  <span className="font-body text-sm text-lavender-700 font-semibold">¡Sí!</span>
                </label>
                <label className="flex items-center justify-center gap-2 bg-lavender-50/60 p-3 rounded-2xl cursor-pointer border-2 border-transparent has-[:checked]:border-lavender-400 transition-all">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === 'no'}
                    onChange={() => setAttendance('no')}
                    className="text-lavender-400 focus:ring-lavender-300 h-3.5 w-3.5"
                  />
                  <span className="font-body text-sm text-lavender-600">No podré</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-lavender-500 font-bold font-body ml-1">Mensaje para Luci</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dedícale unas palabras..."
                rows="2"
                className="w-full bg-lavender-50/60 border border-lavender-200/50 rounded-2xl py-3 px-4 text-sm text-lavender-700 placeholder:text-lavender-300/60 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all mt-1 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lavender-400 to-rose-400 text-white font-bold tracking-widest text-xs py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(200,150,200,0.25)] hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              CONFIRMAR
            </button>
          </form>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${submitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="text-center">
            <p className="font-serif text-2xl text-lavender-600 italic mb-2">¡Gracias!</p>
            <p className="font-body text-sm text-lavender-500">Tu confirmación se envió</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVPModal
