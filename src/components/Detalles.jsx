const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=C.+6+%26+C.+35+Villa+Mariano+Moreno'

function MapPin() {
  return (
    <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function Detalles() {
  return (
    <div className="text-center mb-5 sm:mb-6 md:mb-8 space-y-4 sm:space-y-5">
      <div className="divider-animate-delayed h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto w-1/2 sm:w-2/3 rounded-full" />
      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Fecha</p>
            <p className="font-serif text-xl sm:text-2xl text-stone-800">Sábado 13 de junio</p>
          </div>
        </div>
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Hora</p>
            <p className="font-serif text-xl sm:text-2xl text-stone-800">18:00 hs</p>
          </div>
        </div>
        <div className="detail-item flex items-center justify-center gap-2 sm:gap-3">
          <span className="timeline-dot inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-500 shrink-0" />
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-600 font-bold font-body">Lugar</p>
            <p className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed">
              Calle 35, Casa 6<br />
              Villa Mariano Moreno
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1 text-gold-600 hover:text-gold-500 text-xs sm:text-sm transition-colors font-bold tracking-wide"
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
