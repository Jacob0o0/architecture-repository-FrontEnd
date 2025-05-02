import React from 'react'

function Banner({ ruta, titulo, ocultarTitulo }) {
  return (
    <div className="w-full flex items-end justify-center relative mb-12" id="top">
      <img src={ruta} alt="imagen principal" className="w-[100%]" />
      {ocultarTitulo ? null : (
        <div className="w-[70%] flex justify-center bg-blancoPrincipal rounded-xl absolute text-negroPrincipal -bottom-10" id="titulo_pagina">
          <p className="font-medium text-3xl sm:text-4xl md:text-5xl lg:9xl p-5">{titulo}</p>
        </div>
      )}
    </div>
  )
}

export default Banner