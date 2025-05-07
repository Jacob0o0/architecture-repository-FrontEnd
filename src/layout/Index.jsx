import React, { useState } from 'react';
import Banner from '../components/Banner';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Index() {
  // Estado para controlar si el div está abierto o cerrado
  const [isOpen, setIsOpen] = useState(true);

  // Función para alternar el estado de visibilidad
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="z-0 h-full w-full bg-grisPrincipal flex flex-col items-center space-y-10 overflow-y-auto mx-auto">
        <Banner ruta="imgs/main-index.jpg" titulo="Mi Título" ocultarTitulo={true} />

        <div className="bg-blancoPrincipal w-full max-w-2xl md:max-w-5xl 2xl:max-w-7xl flex flex-col items-center p-6 sm:p-10 rounded-2xl mb-10 relative">
        <div className="w-full">
          <div 
            className="flex justify-center cursor-pointer"
            onClick={toggleInfo}
          >
            <h2 className="font-medium text-xl md:text-2xl 2xl:text-4xl text-center">Información</h2>
            
          </div>

          {isOpen && (
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="w-full sm:w-1/2">
                <img
                  src="/imgs/imageInfo.png"
                  alt="Información"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col items-start space-y-6">
                <div className="container mt-3 text-xs md:text-sm 2xl:text-lg space-y-4">
                  <p>
                    El siglo XIX es importante para México por representar los primeros pasos como nación independiente y con ello, un tiempo de profundos cambios sociales, políticos y económicos. Un tiempo convulso, caracterizado por constantes luchas y contiendas ideológicas en esa constante búsqueda por definir el rumbo del naciente país. El quehacer arquitectónico, sin duda no escapa a todas estas transformaciones y es el reflejo de la "cultura" de la época, con todo lo que ello significa.
                  </p>

                  <p>
                    "Espacio arquitectónico en México" es el resultado de la colaboración de estudiantes de la carrera de Arquitectura en la Facultad de Estudios Superiores Acatlán, UNAM, que tiene como objetivo: el conocimiento, la difusión y revalorización del patrimonio arquitectónico del siglo XIX y principios del siglo XX desarrollado en la Ciudad de México.
                  </p>

                  <p>
                    Es un espacio formado por y para estudiantes de arquitectura, así como para profesores, arquitectos y para todo aquel interesado en conocer las características del espacio arquitectónico de toda una época, bajo una premisa: si conocemos nuestro pasado podremos valorarlo y solo así construir nuestro futuro.
                  </p>
                </div>
                <div className="flex flex-col items-start m-0 text-xs 2xl:text-base">
                  <p className="text-gray-500"><em>Arq. Rosa Alejandra Guzmán Martínez</em></p>
                  <p className="text-gray-500"><em>Profesora de la Facultad de Estudios Superiores Acatlán, UNAM</em></p>
                  <p className="text-gray-500"><em>Arquitectura</em></p>
                </div>
              </div>
            </div>
          )}
        </div>

        
        <button 
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amarilloPrincipal rounded-full flex items-center justify-center shadow-md hover:bg-amarilloPrincipal transition-colors"
          onClick={toggleInfo}
          aria-label="Toggle información"
        >
          {isOpen ? (
            <ChevronUp className="text-negroPrincipal" />
          ) : (
            <ChevronDown className="text-negroPrincipal" />
          )}
        </button>
      </div>
    </main>
  );
}

export default Index;
