import React from "react";
import salonImage from "../assets/images/salon.webp";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${salonImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔹 Capa de superposición */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // ← oscurece la imagen
          zIndex: 1,
        }}
      ></div>

      {/* 🔹 Contenido visible arriba del overlay */}
      <div
        className="container text-white position-relative"
        style={{ paddingTop: "80px", zIndex: 2 }}
      >
        <h1
          className="display-3 fw-bold mb-4"
          style={{
            animation: "fadeInUp 1s ease-out",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Palacio San Juan
        </h1>
        <p
          className="lead mb-4 fs-3"
          style={{
            animation: "fadeInUp 1s ease-out 0.3s backwards",
            color: "#d4af37",
            fontWeight: "400",
            textShadow: "1px 2px 3px rgba(0,0,0)",
          }}
        >
          Donde tus Sueños se convierten en Momentos Inolvidables
        </p>
        <button
          className="btn btn-lg px-5 py-3"
          style={{
            backgroundColor: "#d4af37",
            border: "none",
            color: "#000",
            fontWeight: "bold",
            animation: "fadeInUp 1s ease-out 0.9s backwards",
          }}
          onClick={() => scrollToSection("about")}
        >
          Conócenos
        </button>
      </div>
    </section>
  );
};

export default Hero;
