function Mensaje() {
  return (
    <div className="text-center mb-5 sm:mb-6 md:mb-8 bg-gradient-to-br from-amber-50/90 to-amber-100/50 rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-200/60 shadow-inner">
      <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 italic leading-relaxed">
        &laquo;Tu presencia es el mejor regalo,<br />
        pero si deseas obsequiarme algo,<br />
        <span className="glow-pulse-text not-italic font-bold text-gold-600">
          el efectivo nunca falla y siempre queda bien
        </span>&raquo;
        <span className="bounce-gentle block text-xl sm:text-2xl mt-1 sm:mt-2">😉</span>
      </p>
    </div>
  )
}

export default Mensaje
