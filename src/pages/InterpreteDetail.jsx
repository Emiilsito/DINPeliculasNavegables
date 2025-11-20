import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";
import Layout from "../components/Layout";

function InterpreteDetail() {
  const { id } = useParams();
  const actor = peliculas.find((a) => a.id === parseInt(id));

  if (!actor) {
    return (
      <Layout titulo="Intérprete no encontrado" sectionId="interprete-detail">
        <p className="body-text">El intérprete no existe.</p>
      </Layout>
    );
  }

  return (
    <Layout titulo={actor.nombre} sectionId="interprete-detail">

      {/* IMAGEN CENTRADA */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src={actor.imagen}
          alt={actor.nombre}
          className="imagen-interprete"
          style={{ maxWidth: "350px", width: "100%" }}
        />
      </div>

      {/* DESCRIPCIÓN */}
      <p className="body-text" style={{ marginTop: "20px" }}>
        {actor.biografia}
      </p>

    </Layout>
  );
}

export default InterpreteDetail;
