function Foto() {
  return (
    <div className="text-center">
      <div className="foto-group relative inline-block -rotate-[1.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-700 ease-out">
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <div className="bg-white p-2 pb-8 rounded-sm shadow-[0_4px_20px_rgba(200,150,200,0.18),0_8px_40px_rgba(200,150,200,0.1),inset_0_1px_0_rgba(255,255,255,0.8),0_0_35px_10px_rgba(232,122,138,0.15)] ring-1 ring-lavender-200/30">
          <div className="foto-glow overflow-hidden rounded-sm relative foto-vignette">
            <div className="foto-zoom w-28 sm:w-32 md:w-40 lg:w-48 aspect-[3/4]">
              <img
                src="/img/abuela.jpg"
                alt="Luci"
                className="w-full h-full object-[center_35%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foto
