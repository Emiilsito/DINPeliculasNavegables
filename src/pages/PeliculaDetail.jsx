import { Link, useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";
import Layout from "../components/Layout";

function PeliculaDetail() {
  const { id } = useParams();
  const pelicula = peliculas.find(p => p.id === parseInt(id));

    const navigate = useNavigate();

  if (!pelicula) {
    return (
      <Layout titulo="Película no encontrada" sectionId="pelicula-detail">
        <p className="body-text">La película no existe.</p>
      </Layout>
    );
  }

  return (
    <Layout titulo={pelicula.nombre} sectionId="pelicula-detail">
      <main className="mt-4" role="main">

      {/* Botón de volver */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Volver a la página anterior"
        >
          ← Volver
        </button>
      </div>

        {/* Imagen de la película */}
        <figure className="flex justify-center my-6">
          <img
            src={pelicula.cartelera}
            alt={`Cartel de la película ${pelicula.nombre}`}
            className="imagen-interprete"
            style={{ maxWidth: "350px", width: "100%" }}
          />
          <figcaption className="sr-only">{pelicula.nombre}</figcaption>
        </figure>

        {/* Detalles de la película */}
        <section aria-labelledby="detalles-pelicula" role="region" className="mt-6 space-y-2">
          <h2 id="detalles-pelicula" className="sr-only">Detalles de la película</h2>
          <p><strong>Director:</strong> {pelicula.director}</p>
          <p><strong>Género:</strong> {pelicula.clasificacion}</p>
          <p><strong>Nota:</strong> {pelicula.nota}</p>
          <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
        </section>

        {/* Resumen */}
        <section aria-labelledby="resumen-pelicula" role="region" className="mt-4">
          <h2 id="resumen-pelicula" className="sr-only">Resumen</h2>
          <p className="body-text">{pelicula.resumen}</p>
        </section>

        {/* Actores */}
        <section aria-labelledby="actores-pelicula" role="region" className="mt-6">
          <h2 id="actores-pelicula" className="text-xl font-bold mb-4">Actores</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pelicula.actores.map((actor, index) => (
              <li key={index}>
                <Link
                  to={`/interpretes/${pelicula.id}-${index}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Ver detalle del intérprete ${actor.nombre}`}
                >
                  <article
                    className="flex flex-col items-start gap-3 p-4 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                    aria-labelledby={`actor-${pelicula.id}-${index}-nombre`}
                  >
                    <figure className="w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={actor.imagen}
                        alt={`Foto de ${actor.nombre}`}
                        className="w-full h-full object-cover"
                      />
                      <figcaption className="sr-only">{actor.nombre}</figcaption>
                    </figure>
                    <header>
                      <h3 id={`actor-${pelicula.id}-${index}-nombre`} className="font-bold text-lg">
                        {actor.nombre}
                      </h3>
                    </header>
                    <p className="text-sm">{actor.biografia}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </Layout>
  );
}

export default PeliculaDetail;
