import Layout from "../components/Layout";
import Interprete from "../components/Interprete";
import peliculas from "../data/peliculas";

function PeliculasPage() {

return (
    
  <Layout titulo="Películas destacadas" sectionId="peliculas">
      <p className="body-text">
        Listado de peliculas disponibles:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
          .map((pelicula) => (
              <Interprete
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
              >
                {pelicula.resumen}
              </Interprete>
            ))
          }
        </div>
    </Layout>
  )
}

export default PeliculasPage;