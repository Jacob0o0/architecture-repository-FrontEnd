import React from 'react'

function Tarjeta({ ruta }) {
    return (
        <div class="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 p-0 sm:pd-5 flex flex-col">
            <div class="m-2 sm:m-6 flex flex-col bg-blancoPrincipal rounded-15px shadow-xl">
                <img src={ ruta } alt="user img" class="w-50 h-60 object-cover rounded-15px"/>
                <div class="p-5 flex flex-col space-y-3 overflow-x-auto">
                    <p class="text-xl">Edificio Subido</p>
                    <div class="flex space-x-3 text-sm">
                        <p class="bg-green-300 p-2 rounded-15px">Aprobado</p>
                        <p class="bg-gray-300 p-2 rounded-15px">15/06/2024</p>
                    </div>
                    <div class="flex flex-col items-start justify-center space-y-2">
                        <p>Subido por:</p>
                        <div class="flex flex-row justify-center items-center space-x-2">
                            <div class="flex space-x-2">
                                <i class="bi bi-person-circle"></i>
                                <p>Karla06</p>
                            </div>
                            <p class="pl-2 pr-2 bg-gray-300 rounded-15px">Equipo 6</p>
                        </div>
                    </div>
                    <div class="pt-5 flex flex-row justify-center items-center space-x-5">
                        <button class="p-3 bg-amarilloPrincipal rounded-15px shadow-md hover:scale-125 transition-transform  duration-500 ease-in-out">Ver detalles</button>
                        <button class="px-3 py-2 bg-amarilloPrincipal rounded-full shadow-md hover:scale-125 transition-transform  duration-500 ease-in-out">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta