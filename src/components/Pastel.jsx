function Pastel() {
  return (
    <div className="text-center">
      <svg viewBox="0 0 200 220" className="w-28 sm:w-32 md:w-36 h-auto mx-auto drop-shadow-[0_4px_8px_rgba(200,150,200,0.2)]" fill="none">
        <ellipse cx="100" cy="212" rx="70" ry="8" fill="rgba(200,150,200,0.06)" />
        <ellipse cx="100" cy="205" rx="64" ry="6" fill="#E1D1EC" />
        <ellipse cx="100" cy="202" rx="60" ry="4" fill="#F0E6F6" />

        <rect x="36" y="142" width="128" height="56" rx="3" fill="#F4C2C8" filter="url(#cakeShadow)" />
        <rect x="36" y="142" width="128" height="8" rx="3" fill="#E87A8A" opacity="0.6" />

        <rect x="54" y="100" width="92" height="46" rx="3" fill="#D9C4E8" filter="url(#cakeShadow)" />
        <rect x="54" y="100" width="92" height="6" rx="3" fill="#C9A9D6" opacity="0.5" />

        <circle cx="60" cy="170" r="1.5" fill="#E87A8A" opacity="0.4" />
        <circle cx="85" cy="164" r="1.5" fill="#C9A9D6" opacity="0.4" />
        <circle cx="100" cy="170" r="1.5" fill="#E87A8A" opacity="0.4" />
        <circle cx="115" cy="164" r="1.5" fill="#C9A9D6" opacity="0.4" />
        <circle cx="140" cy="170" r="1.5" fill="#E87A8A" opacity="0.4" />

        <rect x="78" y="76" width="4" height="26" rx="2" fill="#E87A8A" opacity="0.7" />
        <rect x="98" y="71" width="4" height="31" rx="2" fill="#C9A9D6" opacity="0.7" />
        <rect x="118" y="76" width="4" height="26" rx="2" fill="#D9C4E8" opacity="0.7" />

        <ellipse cx="80" cy="72" rx="2" ry="4.5" fill="#FBBF24" className="flame" />
        <ellipse cx="80" cy="72" rx="1" ry="2" fill="#FFF" className="flame-inner" />
        <ellipse cx="100" cy="66" rx="2" ry="4.5" fill="#FBBF24" className="flame" style={{ animationDelay: '0.15s' }} />
        <ellipse cx="100" cy="66" rx="1" ry="2" fill="#FFF" className="flame-inner" style={{ animationDelay: '0.15s' }} />
        <ellipse cx="120" cy="72" rx="2" ry="4.5" fill="#FBBF24" className="flame" style={{ animationDelay: '0.3s' }} />
        <ellipse cx="120" cy="72" rx="1" ry="2" fill="#FFF" className="flame-inner" style={{ animationDelay: '0.3s' }} />

        <defs>
          <filter id="cakeShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#C9A9D6" floodOpacity="0.2" />
          </filter>
        </defs>
      </svg>
      <p className="font-serif text-sm sm:text-base text-lavender-500 italic mt-3 leading-relaxed px-2">
        Gracias a todos los que me acompañan<br />en este camino y son parte de mi historia
      </p>
    </div>
  )
}

export default Pastel
