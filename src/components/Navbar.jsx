import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#top'); // valor por defecto

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#top', icon: 'bi-house' },
    { label: 'Espacios', href: '#espacios', icon: 'bi-bank' },
    { label: 'Edificios', href: '#edificios', icon: 'bi-buildings' },
    { label: 'Autores', href: '#biografias', icon: 'bi-people' },
    { label: 'Contacto', href: '#contacto', icon: 'bi-envelope-at' },
  ];

  return (
    <aside className="z-10 h-full flex flex-row bg-negroPrincipal absolute lg:static">
      <div id="navbar" className={`h-full p-10 flex flex-col overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
        <div className="mb-8 bg-blancoPrincipal rounded-15px flex flex-row items-center justify-center">
          <i className="p-2 bi bi-search"></i>
          <div className="p-2 pl-0 flex flex-col items-start">
            <p className="user font-semibold">Buscar</p>
          </div>
        </div>

        <nav className="h-auto mb-4 rounded-15px">
          <ul className="space-y-4 flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`group shadow-md rounded-15px p-3 transition-colors duration-300 ease-in-out cursor-pointer ${
                  activeSection === item.href
                    ? 'bg-amarilloPrincipal'
                    : 'hover:bg-amarilloPrincipal'
                }`}
              >
                <a className="flex" href={item.href}>
                  <i
                    className={`p-2 bi ${item.icon} ${
                      activeSection === item.href
                        ? 'text-negroPrincipal'
                        : 'text-blancoPrincipal/70 group-hover:text-negroPrincipal'
                    }`}
                  ></i>
                  <span
                    className={`p-2 ${
                      activeSection === item.href
                        ? 'text-negroPrincipal'
                        : 'text-blancoPrincipal/70 group-hover:text-negroPrincipal'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/editor/"
          className="mt-4 md:mt-auto lg:mt-auto mb-0 bg-blancoPrincipal rounded-15px flex flex-row items-center justify-center"
        >
          <i className="p-4 bi bi-person-circle text-4xl"></i>
          <div className="p-4 pl-0 flex flex-col items-start">
            <p className="user font-semibold">Karla Tovar</p>
            <p className="rol text-gray-500">Alumno</p>
          </div>
        </a>
      </div>

      <div
        id="toggleButton"
        className="h-screen bg-amarilloPrincipal flex items-center justify-center"
        onClick={toggleNavbar}
      >
        <i className="bi bi-list text-negroPrincipal font-bold"></i>
      </div>
    </aside>
  );
}

export default Navbar;
