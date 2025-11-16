import React, { useState, useRef } from "react";
import { Sparkles, Image } from "lucide-react";
import recepcion from "../assets/images/recepcion.png";

// Componente wrapper reutilizable para efecto 3D
const Tilt3D = ({ children, intensity = 10, glareIntensity = 0.3 }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / intensity;
    const rotateY = (centerX - x) / intensity;

    setRotation({ x: rotateX, y: rotateY });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: glareIntensity });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="position-relative"
    >
      {children}
      {/* Brillo dinámico */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 50%)`,
          pointerEvents: "none",
          borderRadius: "inherit",
          transition: "opacity 0.1s ease-out",
        }}
      />
    </div>
  );
};

const SalonRecepcion = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Texto */}
        <div
          className="col-lg-6 order-lg-1 order-2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h3 className="mb-3">RECEPCIÓN</h3>
          <p className="text-start text-md-justify">
            Un espacio cálido y elegante que da la bienvenida a tus invitados.
            Ideal para recibir, tomar fotos y comenzar el evento con estilo.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Espacio amplio</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Iluminación premium</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Image size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Ideal para fotos y recepción de invitados</span>
            </li>
          </ul>
        </div>

        {/* Imagen con efecto 3D */}
        <div
          className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Tilt3D intensity={15} glareIntensity={0.2}>
            <img
              src={recepcion}
              alt="Salón Recepción"
              className="img-fluid rounded shadow-lg"
              loading="lazy"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.3s ease",
              }}
            />
          </Tilt3D>
        </div>
      </div>
    </section>
  );
};

export default SalonRecepcion;
