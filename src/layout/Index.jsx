import React from 'react'

import Banner from '../components/Banner'

function Index() {
  return (
    <main class="z-0 h-full w-full bg-blancoPrincipal flex flex-col items-center space-y-10 overflow-y-auto">
        <Banner ruta="imgs/main-index.jpg" titulo="Mi Título" ocultarTitulo={true} />

        <div class="bg-blancoPrincipal w-[80%] flex flex-col items-center shadow-2xl p-10 sm:p-20 pt-10 pb-10 rounded-15px mb-10">
            <h2 class="font-bold text-4xl">Información</h2>
            <div class="flex flex-col items-end space-y-10">
                <div class="container mt-5 text-xl space-y-6">
                    <p>
                        El siglo XIX es importante para México por  representar los primeros pasos como nación independiente y con ello, un tiempo de profundos cambios sociales, políticos y económicos. Un tiempo convulso, caracterizado por constantes luchas  y contiendas ideológicas en esa constante búsqueda por definir el rumbo del naciente país. El quehacer arquitectónico, sin duda  no escapa a todas estas transformaciones  y es el reflejo de la “cultura” de la época, con todo lo que ello significa.
                    </p>

                    <p>
                        “Espacio arquitectónico en México”  es el resultado de la colaboración de estudiantes de la carrera de Arquitectura  en la  Facultad de Estudios Superiores Acatlán, UNAM,  que tiene como objetivo : el conocimiento, la  difusión  y revalorización del patrimonio arquitectónico  del siglo XIX  y principios del siglo XX desarrollado en la Ciudad de México.
                    </p>

                    <p>
                        Es un espacio formado por y para estudiantes de arquitectura, así como para profesores ,arquitectos y para todo aquel interesado en conocer las características  del espacio arquitectónico  de toda una época, bajo una premisa:  si conocemos nuestro pasado podremos valorarlo y solo así construir nuestro futuro.
                    </p>
                </div>
                <div class="flex flex-col items-end m-0">
                    <p class="text-gray-500"><em>Arq. Rosa Alejandra Guzmán Martínez</em></p>
                    <p class="text-gray-500"><em>Profesora de la Facultad de Estudios Superiores Acatlán, UNAM</em></p>
                    <p class="text-gray-500"><em>Arquitectura</em></p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Index