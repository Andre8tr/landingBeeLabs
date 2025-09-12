import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelector(".navbar-menu") as HTMLElement;
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    function openMenu() {
      menu.classList.remove("hidden");
      // Forzar reflujo para que la transición se active
      void menu.offsetWidth;
      menu.classList.remove("opacity-0", "translate-x-full");
      menu.classList.add("opacity-100", "translate-x-0");
    }

    function closeMenu() {
      menu.classList.add("opacity-0", "translate-x-full");
      menu.classList.remove("opacity-100", "translate-x-0");
      setTimeout(() => menu.classList.add("hidden"), 300); // igual a duration-300
    }

    burger.forEach((b) => b.addEventListener("click", openMenu));
    close.forEach((c) => c.addEventListener("click", closeMenu));
    backdrop.forEach((b) => b.addEventListener("click", closeMenu));

    return () => {
      burger.forEach((b) => b.removeEventListener("click", openMenu));
      close.forEach((c) => c.removeEventListener("click", closeMenu));
      backdrop.forEach((b) => b.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-purple-700">
            BeeLabs
          </div>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-purple-700">
              Inicio
            </a>
            <a href="#" className="hover:text-purple-700">
              Servicios
            </a>
            <a href="#" className="hover:text-purple-700">
              Contacto
            </a>
          </nav>

          {/* Botón hamburguesa (mobile) */}
          <button className="navbar-burger md:hidden text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <div className="navbar-menu fixed inset-0 z-50 hidden opacity-0 transform translate-x-full transition-all duration-300 ease-in-out">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto shadow-xl">
          <div className="flex items-center mb-8 justify-between">
            <div className="text-2xl font-bold text-purple-700">BeeLabs</div>
            <button className="navbar-close text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-purple-700">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-700">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-700">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
