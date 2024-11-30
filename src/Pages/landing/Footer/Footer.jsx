import React from "react";
import "./Footer.css";

function Footer() {

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-text-left">
          <p>
            Realizado por Juan Caceres Miranda
          </p>
          <p>
            Ingeniero de Sistemas con enfasis en desarrollo web
          </p>
          <p>Portafolio web: <a target="_blank" href="https://juancaceresm.netlify.app/">https://juancaceresm.netlify.app/</a></p>
          <p>GitHub: <a target="_blank" href="https://github.com/juanvi1017">https://github.com/juanvi1017</a></p>
        </div>
        <div className="footer-text-right">
          <p>
            “El saber no es suficiente, debemos aplicarlo. El querer no es suficiente, debemos hacer.”
          </p>
        </div>
      </div>
    </section>
  );
}
export default Footer;

