import { useMemo } from 'react'

function Contador() {
  const days = useMemo(() => {
    const target = new Date(2026, 5, 13, 18, 0, 0)
    const now = new Date()
    return Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)))
  }, [])

  return (
    <div className="text-center mb-5 sm:mb-6 md:mb-8">
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body mb-1">
        Faltan
      </p>
      <p className="font-titulo text-6xl sm:text-7xl md:text-8xl text-amber-800 leading-none">
        {days}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body mt-1">
        días
      </p>
    </div>
  )
}

export default Contador
