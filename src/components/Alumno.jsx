import React from 'react';

function Alumno({ ruta, usuario, rol, equipo, onSectionClick }) {
  const handleSectionClick = (section) => {
    if (onSectionClick) {
      onSectionClick(section);
    }
  };

  return (
    <div className="relative">
      <section className="w-auto bg-blancoPrincipal text-negroPrincipal p-4 pl-12 rounded-xl ml-8">
        <div className="absolute -left-5 top-5">
          <img 
            src={ruta} 
            alt="User img" 
            className="w-24 h-24 rounded-3xl object-contain border-2 border-blancoPrincipal"
          />
        </div>
        
        <div className="w-full flex flex-col items-center space-y-2">
          <div className="flex flex-col w-full ml-4">
            <h1 className="text-lg md:text-2xl 2xl:text-3xl font-medium">{usuario}</h1>
            <div className="flex w-full gap-2">
              <p className="text-sm md:text-base 2xl:text-lg text-gray-400">{rol}</p>
              <p className="text-sm md:text-base 2xl:text-lg">{equipo}</p>
            </div>
          </div>
          
          <div className="flex justify-end w-full">


            <div className="relative group">
              <button
                onClick={() => handleSectionClick('escritorio')}
                className="m-2 px-3 py-2 bg-amarilloPrincipal rounded-lg md:text-base 2xl:text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <i className="bi bi-person-workspace"></i>
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Escritorio
                <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black transform -translate-x-1/2"></div>
              </div>
            </div>
            

            <div className="relative group">
              <button
                onClick={() => handleSectionClick('edificio')}
                className="m-2 px-2 py-2 bg-amarilloPrincipal rounded-lg md:text-lg 2xl:text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <i className="bi bi-bank"></i>
                <i className="bi bi-plus text-xs"></i>
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Nuevo Edificio
                <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black transform -translate-x-1/2"></div>
              </div>
            </div>
            

            <div className="relative group">
              <button
                onClick={() => handleSectionClick('espacio')}
                className="m-2 px-2 py-2 bg-amarilloPrincipal rounded-lg md:text-lg 2xl:text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <i className="bi bi-buildings"></i>
                <i className="bi bi-plus text-xs"></i>
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Nuevo Espacio
                <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black transform -translate-x-1/2"></div>
              </div>
            </div>
            

            <div className="relative group">
              <button
                onClick={() => handleSectionClick('personaje')}
                className="m-2 px-2 py-2 bg-amarilloPrincipal rounded-lg md:text-lg 2xl:text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <i className="bi bi-people"></i>
                <i className="bi bi-plus text-xs"></i>
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Nuevo Personaje
                <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alumno;