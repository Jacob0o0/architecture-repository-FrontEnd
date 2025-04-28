import React, {useState} from 'react'

import Banner from '../components/Banner'
import SeccionesEditor from '../components/SeccionesEditor'
import Alumno from '../components/Alumno'

import Escritorio from '../components/editor/Escritorio'
import Edificio from '../components/editor/Edificio'
import Espacio from '../components/editor/Espacio'
import Personaje from '../components/editor/Personaje'

function Editor() {
    const [selectedSection, setSelectedSection] = useState(null);

    const handleSectionClick = (section) => {
      setSelectedSection(section);
    };
  
    const renderSection = () => {
      switch (selectedSection) {
        case 'escritorio':
            return <Escritorio ruta="../imgs/empty-person.png"></Escritorio>;
        case 'edificio':
            return <Edificio></Edificio>
        case 'espacio':
            return <Espacio></Espacio>
        case 'personaje':
            return <Personaje></Personaje>
        default:
          return null;
      }
    };

    return (
        <main class="z-0 h-full w-full bg-blancoPrincipal flex flex-col items-center space-y-10 overflow-y-auto">
            <Banner ruta="../imgs/cover_home.png" titulo="Editor" ocultarTitulo={false} />

            <Alumno ruta="../imgs/empty-person.png" usuario={"Karla06"} rol={"Alumno"} nombreCompleto={"Karla Abigail Tovar Salazar"}></Alumno>

            <div class="max-w-full flex justify-center space-x-4">
                <div class="max-w-[85vw] space-y-3">
                    <button onClick={() => handleSectionClick('escritorio')} 
                            class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                        <i class="bi bi-person-workspace"></i>
                    </button>
                    <button onClick={() => handleSectionClick('edificio')} 
                            class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                        <i class="bi bi-bank"></i>
                        <i class="bi bi-plus"></i>
                    </button>
                    <button onClick={() => handleSectionClick('espacio')} 
                            class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                        <i class="bi bi-buildings-fill"></i>
                        <i class="bi bi-plus"></i>
                    </button>
                    <button onClick={() => handleSectionClick('personaje')} 
                            class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                        <i class="bi bi-people-fill"></i>
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
            </div>

            {renderSection()}

        </main>
    )
}

export default Editor