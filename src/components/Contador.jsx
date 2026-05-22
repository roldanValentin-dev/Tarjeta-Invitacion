import { useState, useEffect } from 'react'

function Contador() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const target = new Date(2026, 5, 13, 12, 30, 0)

    const update = () => {
      const now = new Date()
      setDays(Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24))))
    }

    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lavender-500 font-bold font-body mb-1">
        Faltan
      </p>
      <p className="font-titulo text-6xl sm:text-7xl md:text-8xl text-lavender-600 leading-none">
        {days}
      </p>
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lavender-500 font-bold font-body mt-1">
        días
      </p>
    </div>
  )
}

export default Contador
