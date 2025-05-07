import React from 'react'

function Banner({ ruta, titulo, ocultarTitulo }) {
  return (
    <div className="relative w-full max-h-[300px] mb-12" id="top">
      <div className="w-full h-full overflow-hidden">
        <img 
          src={ruta} 
          alt="imagen principal" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {ocultarTitulo ? null : (
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-4/5 md:w-3/4 lg:w-2/3 bg-blancoPrincipal rounded-xl text-negroPrincipal" 
          id="titulo_pagina"
        >
          <p className="font-medium text-xl md:text-2xl 2xl:text-4xl text-center p-4 md:p-5">
            {titulo}
          </p>
        </div>
      )}
    </div>
  )
}

export default Banner