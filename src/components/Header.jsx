function Header() {
  return (
    <header className="text-center mb-4 sm:mb-6 md:mb-8">
      <div className="flex justify-center items-center gap-1.5 sm:gap-2.5 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
        <span className="flower-float text-gold-400/70">✿</span>
        <span className="star-pulse text-gold-400">✦</span>
        <span className="star-pulse text-gold-400">✦</span>
        <span className="star-pulse text-gold-400">✦</span>
        <span className="flower-float text-gold-400/70">✿</span>
      </div>
      <h1 className="shimmer-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-titulo leading-tight">
        80 años
      </h1>
      <div className="divider-animate h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3 sm:mt-4 md:mt-5 w-2/3 sm:w-3/4 rounded-full" />
    </header>
  )
}

export default Header
