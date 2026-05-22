function Foto() {
  return (
    <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
      <div className="foto-group relative inline-block">
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <div className="foto-glow inline-flex items-center justify-center rounded-2xl overflow-hidden border-[3px] border-gold-300/80 shadow-lg w-32 sm:w-36 md:w-44 lg:w-52 aspect-[3/4]">
          <div className="foto-zoom w-full h-full flex items-center justify-center">
            <img
              src="/img/abuela.jpg"
              alt="Luci"
              className="w-full h-full object-[center_35%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foto
