const MAPS_URL = 'https://maps.google.com/?q=C.+6+y+C.+35+Villa+Mariano+Moreno'

function MapPin() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function Detalles() {
  return (
    <div className="text-center mb-6 sm:mb-8 md:mb-10 space-y-5 sm:space-y-6">
      <div className="divider-animate-delayed h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto w-1/2 sm:w-2/3 rounded-full" />
      <div className="space-y-5 sm:space-y-6 md:space-y-8">
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Fecha</p>
            <p className="font-serif text-2xl sm:text-3xl text-stone-800">Sábado 13 de junio</p>
          </div>
        </div>
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Hora</p>
            <p className="font-serif text-2xl sm:text-3xl text-stone-800">18:00 hs</p>
          </div>
        </div>
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Lugar</p>
            <p className="font-serif text-xl sm:text-2xl text-stone-800 leading-relaxed">
              Calle 35, Casa 6<br />
              Villa Mariano Moreno
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-gold-500/10 hover:bg-gold-500/20 text-gold-700 hover:text-gold-600 text-xs sm:text-sm font-bold tracking-wide rounded-full border border-gold-300/30 hover:border-gold-300/60 transition-all"
            >
              <MapPin />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="divider-animate-delayed h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto w-1/2 sm:w-2/3 rounded-full" />
    </div>
  )
}

export default Detalles
