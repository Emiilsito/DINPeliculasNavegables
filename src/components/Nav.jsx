import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ className = 'space-x-4' }) {
  return (
    <nav className={className} aria-label="Main navigation">
      <Link to="/inicio" className="hover:underline">
        Inicio
      </Link>
      <Link to="/peliculas" className="hover:underline">
        Películas
      </Link>
      <Link to="/interpretes" className="hover:underline">
        Intérpretes
      </Link>
      <Link to="/admin" className="hover:underline">
        Admin
      </Link>
    </nav>
  );
}

export default Nav;
