import Layout from "../components/Layout";
import Interprete from "../components/Interprete";
import peliculas from "../data/peliculas";

function PeliculasPage() {
  return (
    <Layout titulo="Películas destacadas" sectionId="peliculas">
      <main role="main" className="mt-4">
        <p className="body-text">
          Listado de películas disponibles:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {peliculas.map((pelicula) => (
            <li key={pelicula.id}>
              <Interprete
                id={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
                containerClassName="focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span id={`pelicula-${pelicula.id}-nombre`} className="sr-only">{pelicula.nombre}</span>
                {pelicula.resumen}
              </Interprete>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default PeliculasPage;
