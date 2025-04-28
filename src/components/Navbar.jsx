import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <aside class="z-10 h-full flex flex-row bg-negroPrincipal absolute lg:static">
        <div id="navbar" 
            className={`h-full p-10 flex flex-col overflow-y-auto ${isOpen ? '' : 'hidden'}`}   
        >
            <div class="mb-8 bg-blancoPrincipal rounded-15px flex flex-row items-center justify-center">
                <i class="p-2 bi bi-search"></i>
                <div class="p-2 pl-0 flex flex-col items-start">
                    <p class="user font-semibold">Buscar</p>
                </div>
            </div>
            <nav class="h-auto mb-4 bg-blancoPrincipal p-4 rounded-15px">
                <ul class="space-y-4 flex flex-col">
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#top">
                            <i class="p-2 bi bi-house-door-fill"></i>
                            <span class="p-2">Home</span>
                        </a>
                    </li>
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#info">
                            <i class="p-2 bi bi-info-circle-fill"></i>
                            <span class="p-2">Información</span>
                        </a>
                    </li>
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#espacios">
                            <i class="p-2 bi bi-bank"></i>
                            <span class="p-2">Espacios</span>
                        </a>
                    </li>
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#edificios">
                            <i class="p-2 bi bi-buildings-fill"></i>
                            <span class="p-2">Edificios</span>
                        </a>
                    </li>
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#biografias">
                            <i class="p-2 bi bi-people-fill"></i>
                            <span class="p-2">Biografías</span>
                        </a>
                    </li>
                    <li class="bg-blancoPrincipal shadow-md rounded-15px hover:bg-amarilloPrincipal p-3 transition-colors duration-300 ease-in-out">
                        <a class="flex" href="#contacto">
                            <i class="p-2 bi bi-search-heart"></i>
                            <span class="p-2">Contacto</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <a href="/editor/" class="mt-4 md:mt-auto lg:mt-auto mb-0 bg-blancoPrincipal rounded-15px flex flex-row items-center justify-center">
                <i class="p-4 bi bi-person-circle text-4xl"></i>
                <div class="p-4 pl-0 flex flex-col items-start">
                    <p class="user font-semibold">Karla Tovar</p>
                    <p class="rol text-gray-500">Alumno</p>
                </div>
            </a>
        </div>
        <div id="toggleButton" class="h-screen bg-amarilloPrincipal flex items-center justify-center" onClick={toggleNavbar}>
            <i class="bi bi-list text-negroPrincipal font-bold"></i>
        </div>
    </aside>
  )
}

export default Navbar