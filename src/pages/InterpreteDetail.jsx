import { Link, useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";
import Layout from "../components/Layout";

function InterpreteDetail() {
  const { id } = useParams();
  const [peliculaId, actorIndex] = id.split("-").map(Number);

  const navigate = useNavigate();

  const peliculaInicial = peliculas.find(p => p.id === peliculaId);
  const actor = peliculaInicial?.actores?.[actorIndex];

  if (!actor) {
    return (
      <Layout titulo="Intérprete no encontrado" sectionId="interprete-detail">
        <p className="body-text">Este intérprete no existe.</p>
      </Layout>
    );
  }

  const peliculasActor = peliculas.filter(p =>
    p.actores.some(a => a.nombre === actor.nombre)
  );

  return (
    <Layout titulo={actor.nombre} sectionId="interprete-detail">
      
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

      <main className="mt-0" role="main">
        <section aria-labelledby="detalle-interprete" className="mb-6" role="region">
          <h2 id="detalle-interprete" className="sr-only">Detalle del intérprete</h2>

          <figure className="flex justify-center my-6">
            <img
              src={actor.imagen}
              alt={`Fotografía de ${actor.nombre}`}
              className="imagen-interprete"
              style={{ maxWidth: "350px", width: "100%" }}
            />
            {actor.biografia && <figcaption className="sr-only">{actor.biografia}</figcaption>}
          </figure>

          <p className="body-text">{actor.biografia}</p>
        </section>

        <section aria-labelledby="peliculas-interprete" className="mt-6" role="region">
          <h2 id="peliculas-interprete" className="text-xl font-bold mb-4">
            Películas en las que participa
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {peliculasActor.map(pelicula => (
              <li key={pelicula.id}>
                <Link
                  to={`/peliculas/${pelicula.id}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Ver detalle de la película ${pelicula.nombre}`}
                >
                  <article className="flex flex-col items-start gap-3 p-4 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300" aria-labelledby={`pelicula-${pelicula.id}-titulo`}>
                    <figure className="w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                      <img src={pelicula.cartelera} alt={`Cartel de la película ${pelicula.nombre}`} className="w-full h-full object-cover"/>
                      <figcaption className="sr-only">{pelicula.nombre}</figcaption>
                    </figure>
                    <header>
                      <h3 id={`pelicula-${pelicula.id}-titulo`} className="font-bold text-lg">{pelicula.nombre}</h3>
                    </header>
                    <p className="text-sm">
                      <strong>Director:</strong> {pelicula.director}<br/>
                      <strong>Género:</strong> {pelicula.clasificacion}<br/>
                      <strong>Nota:</strong> {pelicula.nota}<br/>
                      <strong>Recaudación:</strong> {pelicula.recaudacion}
                    </p>
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

export default InterpreteDetail;
