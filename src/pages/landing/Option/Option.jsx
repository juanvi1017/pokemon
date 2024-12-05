import React from "react";
import search from "../../../assets/images/search.svg"
import filter from "../../../assets/images/filter.svg"
import "./Option.css";

// Uso de react memo para evitar renderizar nuevamente la pagina si no ha tenido cambios
function Option() {

  return (
    <section className="option">
      <div className="container">
        <div className="option-text">
          <img
            src={search}
            alt="search Illustration"
          />
          <h1>
            Detalle
          </h1>
          <p>
            Detalle de los pokemon seleccionado, podras ver informacion detallada de los diferentes pokemon, habilidades, tipos y mucho más.
          </p>
        </div>
        <div className="option-text">
          <img
            src={filter}
            alt="filter Illustration"
          />
          <h1>
            Filtros
          </h1>
          <p>
          Busqueda de pokemon por nombre, una forma facil de encontrar lo que buscas, solo si conoces el nombre
          </p>
        </div>
      </div>
    </section>
  );
}
export default React.memo(Option);

