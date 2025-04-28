import React from 'react'

function Banner({ ruta, titulo, ocultarTitulo }) {
  return (
    <div className="w-[100%] flex items-end justify-center relative" id="top">
      <img src={ruta} alt="imagen principal" className="w-[100%]" />
      {ocultarTitulo ? null : (
        <div className="w-[100%] flex justify-center bg-gray-500 bg-opacity-50 absolute text-blancoPrincipal" id="titulo_pagina">
          <p className="text-bold text-3xl sm:text-4xl md:text-5xl lg:9xl p-5">{titulo}</p>
        </div>
      )}
    </div>
  )
}

export default Banner