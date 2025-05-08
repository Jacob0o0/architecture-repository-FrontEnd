import React, { useState } from 'react';
import Banner from '../components/Banner';
import Alumno from '../components/Alumno';
import Tarjeta from '../components/editor/Tarjeta';
import Escritorio from '../components/editor/Escritorio';
import Edificio from '../components/editor/Edificio';
import Espacio from '../components/editor/Espacio';
import Personaje from '../components/editor/Personaje';

function Editor() {
  const [selectedSection, setSelectedSection] = useState(null);
  
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  
  const renderSection = () => {
    switch (selectedSection) {
      case 'escritorio':
        return <Escritorio ruta="../imgs/kiosco-morisco.jpg" />;
      case 'edificio':
        return <Edificio />;
      case 'espacio':
        return <Espacio />;
      case 'personaje':
        return <Personaje />;
      default:
        return null;
    }
  };
  
  return (
    <main className="z-0 h-full w-full bg-grisPrincipal flex flex-col items-center space-y-10 overflow-y-auto">
      <Banner ruta="../imgs/banner_Editor.jpeg" titulo="Editor" ocultarTitulo={false} />
      
      <div className='w-full flex flex-row items-center justify-center gap-4 space-x-4'>
        <Alumno
          ruta="../imgs/profile2.png"
          usuario="Karla Tovar"
          rol="Alumno"
          equipo="Equipo 6"
          onSectionClick={handleSectionClick}
        />

        <Tarjeta
          ruta="../imgs/kiosco-morisco.jpg"
          className="w-1/2 h-2/3"  // Puedes poner cualquier clase de ancho aquí: w-1/4, w-64, etc.
        />
      </div>
      
      {renderSection()}
    </main>
  );
}

export default Editor;