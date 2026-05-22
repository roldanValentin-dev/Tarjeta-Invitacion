function Foto() {
  return (
    <div className="text-center">
      <div className="inline-block">
        <div className="bg-white p-2 pb-7 rounded-sm shadow-[0_4px_20px_rgba(224,80,104,0.18),0_8px_40px_rgba(224,80,104,0.1)] ring-1 ring-rose-300/20">
          <div className="overflow-hidden rounded-sm w-72 sm:w-80 md:w-96 aspect-[3/4]">
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
