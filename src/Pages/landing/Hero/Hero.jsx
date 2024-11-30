import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
            <div className="hero-text">
              <h1>
                Poke page
              </h1>
              <span>Bienvenido a pokemon go</span>
              <p>
                Realizado por Juan Caceres Miranda
              </p>
              <button className="btn" onClick={() => navigate('/pokemonv2')}>Get Started pokemon →</button>
            </div>
      </div>
    </section>
  );
}
export default Hero;

