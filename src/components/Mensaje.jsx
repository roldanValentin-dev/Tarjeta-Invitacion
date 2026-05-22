function Mensaje() {
  return (
    <div className="text-center bg-gradient-to-br from-lavender-50/80 to-rose-50/50 rounded-xl p-4 sm:p-5 border border-lavender-200/30">
      <p className="font-serif text-base sm:text-lg md:text-xl text-lavender-600 italic leading-relaxed">
        &laquo;Tu presencia es el mejor regalo,<br />
        pero si deseas obsequiarme algo,<br />
        <span className="glow-pulse-text not-italic font-bold text-rose-400">
          el efectivo nunca falla y siempre queda bien
        </span>&raquo;
        <span className="inline-block text-2xl sm:text-3xl mt-1 sm:mt-2 animate-bounce">😉</span>
      </p>
    </div>
  )
}

export default Mensaje
