import React, { useState, useRef } from "react";
import { Sparkles, ChevronDown, ChevronUp, Users, Music } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="container">
        <div className="row align-items-start mb-5">
          {/* Texto */}
          <div
            className="col-lg-6 col-12 order-lg-1 order-2 px-3 px-lg-4"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h3 className="mb-3 text-break">SALÓN PLANTA BAJA - RECEPCIÓN</h3>

            {/* Descripción principal */}
            <p className="text-start">
              Traspasando una puerta doble de cedro de gran estilo accedes a un
              recibidor amplio y luminoso, con livings elegantes y un importante
              araña de caireles. La experiencia visual se completa con sillones
              nórdicos negro de pana, patas de madera y cómodos butacones altos
              con mesas tipo cafetín.
            </p>
            {/* Capacidad destacada */}
            <div className="d-flex flex-wrap gap-4 mb-3">
              <div className="d-flex align-items-center">
                <Users size={24} className="me-2 flex-shrink-0" />
                <div>
                  <strong>130</strong> personas (recepción)
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Users size={24} className="me-2 flex-shrink-0" />
                <div>
                  <strong>70</strong> personas (cena formal)
                </div>
              </div>
            </div>

            {/* Contenido expandible */}
            <div
              style={{
                maxHeight: expanded ? "1000px" : "0",
                overflow: "hidden",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-start mt-3">
                <strong>Ideal para:</strong> Recepciones, cumpleaños informales
                (mínimo 50 personas), presentación de productos, desayunos o
                meriendas de trabajo, eventos corporativos, sala de reuniones,
                capacitaciones y publicidad.
              </p>

              <h5 className="mt-4 mb-3">Características y Servicios:</h5>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>
                    Mobiliario Living nórdico en pana negra con lámparas de pie
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Barra de trago y Shimmer</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Music size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>
                    Iluminación LED, sonido profesional y pista de baile
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Guardarropas y cortinados de pana claro</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Máquina de humo y aire acondicionado</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Baños con terminaciones de categoría y accesibles</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Seguridad y circuito de monitoreo</span>
                </li>
              </ul>
            </div>

            {/* Botón expandir/colapsar */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="btn btn-dark mt-3 d-flex align-items-center"
            >
              {expanded ? (
                <>
                  Ver menos <ChevronUp size={20} className="ms-2" />
                </>
              ) : (
                <>
                  Ver más detalles <ChevronDown size={20} className="ms-2" />
                </>
              )}
            </button>
          </div>

          {/* Imagen con efecto 3D */}
          <div
            className="col-lg-6 col-12 mb-4 mb-lg-0 order-lg-2 order-1 px-3 px-lg-4"
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
      </div>
    </section>
  );
};

export default SalonRecepcion;
