import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ className = 'space-x-4' }) {
  return (
    <nav className={className} aria-label="Main navigation">
      <Link to="/peliculas" className="hover:underline">
        Películas
      </Link>
      <Link to="/interpretes" className="hover:underline">
        Intérpretes
      </Link>
    </nav>
  );
}

export default Nav;
