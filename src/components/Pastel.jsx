function Pastel() {
  return (
    <div className="text-center mb-5 sm:mb-6 md:mb-8">
      <svg viewBox="0 0 200 220" className="w-32 sm:w-36 md:w-40 h-auto mx-auto" fill="none">
        <ellipse cx="100" cy="212" rx="80" ry="10" fill="rgba(0,0,0,0.05)" />
        <ellipse cx="100" cy="205" rx="72" ry="8" fill="#D1D5DB" />
        <ellipse cx="100" cy="202" rx="68" ry="6" fill="#F3F4F6" />

        <rect x="30" y="140" width="140" height="58" rx="4" fill="#FCD34D" />
        <rect x="30" y="140" width="140" height="10" rx="4" fill="#F59E0B" />

        <path d="M35 147 Q55 165 75 147 Q95 170 115 147 Q135 165 155 147 Q175 165 165 147" fill="#FDE68A" />

        <rect x="50" y="95" width="100" height="50" rx="4" fill="#FDE68A" />
        <rect x="50" y="95" width="100" height="8" rx="4" fill="#FBBF24" />

        <path d="M55 101 Q70 118 85 101 Q100 122 115 101 Q130 118 145 101" fill="#FFFBEB" />

        <circle cx="55" cy="170" r="2" fill="#F59E0B" opacity="0.6" />
        <circle cx="80" cy="164" r="2" fill="#F59E0B" opacity="0.6" />
        <circle cx="100" cy="170" r="2" fill="#F59E0B" opacity="0.6" />
        <circle cx="120" cy="164" r="2" fill="#F59E0B" opacity="0.6" />
        <circle cx="145" cy="170" r="2" fill="#F59E0B" opacity="0.6" />

        <rect x="76" y="73" width="5" height="24" rx="2" fill="#EF4444" />
        <rect x="97" y="68" width="5" height="29" rx="2" fill="#3B82F6" />
        <rect x="118" y="73" width="5" height="24" rx="2" fill="#10B981" />

        <ellipse cx="78.5" cy="69" rx="2.5" ry="5" fill="#FBBF24" className="flame" />
        <ellipse cx="78.5" cy="69" rx="1.2" ry="2.5" fill="#FFF" className="flame-inner" />
        <ellipse cx="99.5" cy="63" rx="2.5" ry="5" fill="#FBBF24" className="flame" style={{ animationDelay: '0.15s' }} />
        <ellipse cx="99.5" cy="63" rx="1.2" ry="2.5" fill="#FFF" className="flame-inner" style={{ animationDelay: '0.15s' }} />
        <ellipse cx="120.5" cy="69" rx="2.5" ry="5" fill="#FBBF24" className="flame" style={{ animationDelay: '0.3s' }} />
        <ellipse cx="120.5" cy="69" rx="1.2" ry="2.5" fill="#FFF" className="flame-inner" style={{ animationDelay: '0.3s' }} />
      </svg>
    </div>
  )
}

export default Pastel
