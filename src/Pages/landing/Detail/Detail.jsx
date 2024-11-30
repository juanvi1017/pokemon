import React from "react";
import pokemon from "../../../assets/images/pokemon.webp"
import { useNavigate } from "react-router-dom";
import "./Detail.css";

// Uso de react memo para evitar renderizar nuevamente la pagina si no ha tenido cambios
function Detail() {

  const navigate = useNavigate();

  const redired = (url) => {
    window.open(url)
  }

  return (
    <section className="detail">
      <div className="container">
        <div className="detail-text">
          <h1>
            ¿Que es pokemon y por que es un recuerdo para muchos?
          </h1>
          <p>
            Es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.
          </p>
          <button className="btn" onClick={() => redired("https://es.wikipedia.org/wiki/Pok%C3%A9mon")}>Ver más detalles →</button>
        </div>
        <div className="detail-text">
          <img
            src={pokemon}
            alt="pokemon Illustration"
          />
        </div>
        <div className="detail-text-pokedata">
        <p>
            Ver la información
          </p>
          <h1>
            Ver la data de los pokemon
          </h1>
          <button className="btn"onClick={() => navigate('/pokemonv2')}>Ver data →</button>
        </div>
      </div>
    </section>
  );
}
export default React.memo(Detail);

