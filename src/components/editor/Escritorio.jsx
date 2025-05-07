import React from 'react'
import Tarjeta from './Tarjeta'

function Escritorio({ ruta }) {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center space-y-6" id="formulario">
      <div className="w-[80%] flex items-center justify-start">
        <h3 className="text-3xl font-semibold">Mi escritorio</h3>
      </div>
      
      <div className="w-[80%] p-5 flex flex-col items-start justify-start bg-blancoPrincipal rounded-lg shadow-xl">
        <h4 className="text-lg md:text-2xl 2xl:text-3xl font-medium">Elementos subidos</h4>
        <div className="border-3 h-[3px] w-[250px] bg-amarilloPrincipal"></div>
        
        <div className="w-[100%] flex flex-col pt-2">
          <div className="w-[100%] mt-5 flex flex-row">
            <div className="max-w-[90vw] space-x-2">
              <button className="py-3 pr-4 hover:bg-negroPrincipal hover:text-white rounded-full">
                <i className="bi bi-bank px-3 py-2 mx-1 bg-white rounded-full text-negroPrincipal"></i>
                Edificios
              </button>
              <button className="py-3 pr-4 hover:bg-negroPrincipal hover:text-white rounded-full">
                <i className="bi bi-buildings px-3 py-2 mx-1 bg-white rounded-full text-negroPrincipal"></i>
                Espacios urbanos
              </button>
              <button className="py-3 pr-4 hover:bg-negroPrincipal hover:text-white rounded-full">
                <i className="bi bi-people px-3 py-2 mx-1 bg-white rounded-full text-negroPrincipal"></i>
                Personajes
              </button>
            </div>
          </div>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8 justify-start p-4">
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
            <Tarjeta ruta={ruta} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Escritorio