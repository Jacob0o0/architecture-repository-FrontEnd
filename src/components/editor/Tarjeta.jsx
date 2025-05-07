import React from 'react'

function Tarjeta({ ruta, className }) {
  return (
    // Eliminamos las clases de ancho fijo y las reemplazamos con un className personalizable
    <div className={`${className || ''} flex flex-col`}>
      <div className="w-full h-80 overflow-hidden relative rounded-lg shadow-xl cursor-pointer group/card hover:scale-105 transition-transform duration-300">
        {/* Imagen de fondo */}
        <div
          className="absolute w-full h-full top-0 left-0"
          style={{
            backgroundImage: `url(${ruta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Gradiente */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-gradient-to-t from-black to-transparent group-hover/card:opacity-80"></div>
        
        {/* Contenido */}
        <div className="relative z-10 flex flex-col p-5 h-full justify-end">
          <p className="text-base md:text-lg 2xl:text-xl font-semibold text-white">Kiosco Morisco</p>
          
          <div className="flex flex-col items-start justify-center space-y-2 text-xs md:text-sm 2xl:text-base text-white">
            <div className="flex flex-row items-center space-x-2">
              <div className="flex space-x-2">
                <i className="bi bi-person-circle"></i>
                <p>Karla Tovar</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-xs mt-2">
            <p className="bg-green-300 px-2 py-1 rounded-lg">Aprobado</p>
            <p className="bg-gray-300 px-2 py-1 rounded-lg">15/06/2024</p>
          </div>
          
          <div className="pt-3 flex flex-row justify-start items-center space-x-2 text-xs md:text-sm">
            <button className="w-[150px] px-2 py-1 border text-blancoPrincipal hover:bg-amarilloPrincipal hover:text-negroPrincipal hover:border-hidden rounded-full">Ver detalles</button>
            <button className="px-2 py-1 border text-blancoPrincipal hover:bg-amarilloPrincipal hover:text-negroPrincipal hover:border-hidden rounded-full">
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarjeta