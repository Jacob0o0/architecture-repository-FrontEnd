import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('/#top');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/#top', icon: 'bi-house' },
    { label: 'Espacios', href: '/#espacios', icon: 'bi-bank' },
    { label: 'Edificios', href: '/#edificios', icon: 'bi-buildings' },
    { label: 'Autores', href: '/#biografias', icon: 'bi-people' },
    { label: 'Contacto', href: '/#contacto', icon: 'bi-envelope-at' },
  ];

  return (
    <aside className="z-10 h-full flex flex-col bg-negroPrincipal w-auto lg:static transition-all duration-300">
      <div className={`h-full p-4 flex flex-col overflow-y-auto ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        
        {/* Toggle  */}
        <button
          onClick={toggleNavbar}
          className={`mb-4 p-2 text-blancoPrincipal hover:text-amarilloPrincipal transition-colors ${isOpen ? 'self-start' : 'self-center'}`}
        >
          <i className="bi bi-list text-2xl"></i>
        </button>

        {/* Buscador no sirve jejeje*/}
        <div 
            onClick={() => !isOpen && setIsOpen(true)}
            className={`mb-8 text-blancoPrincipal rounded-15px flex flex-row items-center justify-start cursor-pointer ${isOpen ? 'self-start' : 'self-center'}`}>
          <i className="p-2 bi bi-search text-lg"></i>
          {isOpen && (
            <div className="p-2 pl-0 flex flex-col items-start">
              <p className="user font-base">Buscar...</p>
            </div>
          )}
        </div>

        {/* Menú */}
        <nav className="h-auto mb-4 rounded-15px">
          <ul className="space-y-4 flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`w-full group shadow-md rounded-15px py-3 ${isOpen ? 'px-4' : 'px-0 flex justify-center'} transition-colors duration-300 ease-in-out cursor-pointer ${
                  activeSection === item.href
                    ? 'bg-amarilloPrincipal'
                    : 'hover:bg-amarilloPrincipal'
                }`}
              >
                <a className={`flex items-center ${!isOpen && 'justify-center'}`} href={item.href}>
                  <i
                    className={`bi ${item.icon} text-xl ${
                      activeSection === item.href
                        ? 'text-negroPrincipal'
                        : 'text-blancoPrincipal/70 group-hover:text-negroPrincipal'
                    }`}
                  ></i>
                  {isOpen && (
                    <span
                      className={`ml-2 ${
                        activeSection === item.href
                          ? 'text-negroPrincipal'
                          : 'text-blancoPrincipal/70 group-hover:text-negroPrincipal'
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Usuario */}
        <a
          href="/editor/"
          className={`mt-auto text-blancoPrincipal rounded-15px flex ${isOpen ? 'flex-col items-start' : 'flex-col items-center'} justify-center`}
        >
          <img 
            src="/imgs/Profile.png"
            alt='Profile'
            className="w-12 h-12 object-contain"
          />
          <p className="rol text-gray-500 text-xs mt-3 order-2">Alumno</p>
          {isOpen && (
            <div className="mt-3 pl-0 flex flex-col items-start order-1">
              <p className="user font-semibold">Karla Tovar</p>
            </div>
          )}
        </a>
      </div>
    </aside>
  );
}

export default Navbar;