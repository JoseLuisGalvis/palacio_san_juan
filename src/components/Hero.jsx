import React from "react";
import videoBg from "../assets/video/video.mp4"; // ✅ importa el video local

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center position-relative"
    >
      {/* 🔹 Video de fondo */}
      <video
        className="hero-video"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Capa de superposición */}
      <div className="hero-overlay"></div>

      {/* 🔹 Contenido visible arriba del video */}
      <div className="hero-content container text-white position-relative">
        <h1
          className="display-3 fw-bold mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Palacio San Juan
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
