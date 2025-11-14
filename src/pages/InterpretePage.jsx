import Layout from "../components/Layout";
import Interprete from "../components/Interprete";
import peliculas from "../data/peliculas";

function InterpretePage() {
    return (

  <Layout titulo="Intérpretes de películas destacadas" sectionId="interpretes">
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
              >
                {actor.biografia}
              </Interprete>
            ))
          )}
        </div>
    </Layout>
  )
}

export default InterpretePage;