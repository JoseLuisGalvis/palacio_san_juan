import React from "react";
import fachadaImg from "../assets/images/fachadaHero.webp"; // ✅ importa la imagen local

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="hero-section container-fluid d-flex align-items-center justify-content-center text-center position-relative"
    >
      {/* 🔹 Imagen de fondo */}
      <img
        className="hero-image"
        src={fachadaImg}
        alt="Fachada Palacio San Juan"
        loading="eager"
      />

      {/* 🔹 Capa de superposición */}
      <div className="hero-overlay"></div>

      {/* 🔹 Contenido visible arriba de la imagen */}
      <div className="hero-content container text-white position-relative">
        <h1
          className="display-3 mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          PALACIO SAN JUAN
        </h1>

        <p
          className="lead mb-4 fs-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Donde tus Sueños se convierten en Momentos Inolvidables
        </p>

        <div
          className="btn-hero-wrapper"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <button
            className="btn btn-lg px-5 py-3 btn-hero"
            onClick={() => scrollToSection("about")}
          >
            Conócenos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
