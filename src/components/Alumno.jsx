import React from 'react'

function Alumno({ ruta, usuario, rol, nombreCompleto }) {
  return (
    <section class="w-auto h-auto flex flex-row bg-blancoPrincipal text-negroPrincipal p-5 m-10 rounded-xl shadow-md">
        <img src={ ruta } alt="User img" class="w-24 h-24 rounded-full mr-3 object-cover"/>
        <div class="flex flex-col justify-center space-y-3">
            <div class="flex flex-col sm:flex-row justify-between">
                <p class="text-3xl font-semibold"> { usuario } </p>
                <div class="flex items-center w-auto">
                    <p class="text-l p-1 pr-2 pl-2 bg-amarilloPrincipal rounded-15px">{ rol }</p>
                </div>
            </div>
            <p class="text-xl text-gray-400">{ nombreCompleto }</p>
        </div>
    </section>
  )
}

export default Alumno