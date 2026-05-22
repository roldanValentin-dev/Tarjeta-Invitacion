function Foto() {
  return (
    <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
      <div className="foto-group relative inline-block -rotate-[1.5deg] hover:rotate-0 transition-transform duration-700">
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <span className="foto-sparkle">✦</span>
        <div className="bg-white p-2 pb-8 shadow-xl rounded-sm">
          <div className="foto-glow overflow-hidden rounded-sm">
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
