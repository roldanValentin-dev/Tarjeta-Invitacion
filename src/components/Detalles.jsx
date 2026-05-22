const MAPS_URL = 'https://maps.google.com/?q=C.+6+y+C.+35+Villa+Mariano+Moreno'

function Detalles() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center gap-5 sm:gap-6">
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lavender-500 font-bold font-body mb-1">
            Fecha
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-lavender-700 italic">
            Sábado 13 de junio
          </p>
        </div>

        <div className="w-12 h-px bg-gradient-to-r from-transparent via-lavender-300/40 to-transparent" />

        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lavender-500 font-bold font-body mb-1">
            Hora
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-lavender-700 italic">
            12:30 hs
          </p>
        </div>

        <div className="w-12 h-px bg-gradient-to-r from-transparent via-lavender-300/40 to-transparent" />

        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lavender-500 font-bold font-body mb-1">
            Lugar
          </p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-lavender-700 italic leading-relaxed">
            Calle 35, Casa 6<br />
            Villa Mariano Moreno
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-lavender-500/10 hover:bg-lavender-500/20 text-lavender-600 hover:text-lavender-500 text-xs font-bold tracking-wide rounded-full border border-lavender-300/30 hover:border-lavender-300/60 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}

export default Detalles
