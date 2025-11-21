import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav({ className = "space-x-4" }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Nav escritorio */}
      <div className={`hidden md:flex ${className}`} aria-label="Main navigation">
        <NavLink to="/inicio" className="hover:underline">Inicio</NavLink>
        <NavLink to="/peliculas" className="hover:underline">Películas</NavLink>
        <NavLink to="/interpretes" className="hover:underline">Intérpretes</NavLink>
        <NavLink to="/admin" className="hover:underline">Admin</NavLink>
      </div>

      {/* Botón hamburguesa */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="text-3xl w-12 h-12 flex items-center justify-center rounded"
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {open && (
        <div
          id="mobile-menu"                  // ← Necesario para aria-controls
          className="absolute right-2 top-full mt-1 bg-white border border-gray-300 rounded shadow-md md:hidden flex flex-col z-50"
        >
          <NavLink 
            to="/inicio"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-black hover:bg-gray-100"
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/peliculas"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-black hover:bg-gray-100"
          >
            Películas
          </NavLink>
          <NavLink 
            to="/interpretes"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-black hover:bg-gray-100"
          >
            Intérpretes
          </NavLink>
          <NavLink 
            to="/admin"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-black hover:bg-gray-100"
          >
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
