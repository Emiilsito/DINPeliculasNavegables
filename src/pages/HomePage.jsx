import { Link } from 'react-router-dom';

function Home() {
  return (
    <main role="main" className="space-y-6 text-center mt-6">
      <h1 className="text-3xl font-bold">Bienvenido a Películas Navegables</h1>
      <p className="text-gray-600">Explora nuestras colecciones de películas e intérpretes.</p>

      <div className="flex items-center justify-center gap-4">
        <Link
          to="/peliculas"
          className="px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Ir a la lista de películas"
        >
          Ver Películas
        </Link>
        <Link
          to="/interpretes"
          className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Ir a la lista de intérpretes"
        >
          Ver Intérpretes
        </Link>
      </div>
    </main>
  );
}

export default Home;
