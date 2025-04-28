import React from 'react'

import Tarjeta from './Tarjeta'

function Escritorio({ ruta }) {
    return (
        <div class="w-[100%] flex flex-col items-center justify-center space-y-6" id="formulario">
            <div class="w-[80%] flex items-center justify-start bg-blancoPrincipal">
                <h3 class="text-3xl font-semibold">Mi escritorio</h3>
            </div>

            <div class="w-[80%] p-5 flex flex-col items-start justify-start bg-blancoPrincipal rounded-15px shadow-xl">
                <h4 class="text-xl">Elementos subidos</h4>
                <div class="border-3 h-[3px] w-[200px] bg-amarilloPrincipal"></div>

                <div class="w-[100%] flex flex-col">
                    <div class="w-[100%] mt-5 flex flex-row">
                        <div class="max-w-[90vw] space-x-6">
                            <button class="p-2 bg-amarilloPrincipal rounded-15px hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                                <i class="bi bi-bank pr-3"></i>
                                Edificios
                            </button>
                            <button class="p-2 bg-amarilloPrincipal rounded-15px hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                                <i class="bi bi-buildings-fill pr-3"></i>
                                Espacios urbanos
                            </button>
                            <button class="p-2 bg-amarilloPrincipal rounded-15px hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                                <i class="bi bi-people-fill pr-3"></i>
                                Personajes
                            </button>
                        </div>
                    </div>

                    <div class="w-[100%] flex flex-wrap justify-center items-center">
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                        <Tarjeta ruta={ruta}></Tarjeta>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Escritorio