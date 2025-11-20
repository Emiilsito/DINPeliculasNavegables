import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";
import Layout from "../components/Layout";

function PeliculaDetail() {
  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  if (!pelicula) {
    return (
      <Layout titulo="Película no encontrada" sectionId="pelicula-detail">
        <p className="body-text">La película no existe.</p>
      </Layout>
    );
  }

  return (
    <Layout titulo={pelicula.nombre} sectionId="pelicula-detail">

      {/* IMAGEN CENTRADA */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src={pelicula.cartelera}
          alt={pelicula.nombre}
          className="imagen-interprete"
          style={{ maxWidth: "350px", width: "100%" }}
        />
      </div>

      {/* DESCRIPCIÓN */}
      <p className="body-text" style={{ marginTop: "20px" }}>
        {pelicula.resumen}
      </p>

    </Layout>
  );
}

export default PeliculaDetail;
