import React, { useState, useRef } from "react";
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Users,
  Music,
  Monitor,
  Baby,
  Camera,
  Car,
  Wind,
  MoveUp,
} from "lucide-react";
import plantalta from "../assets/images/salon.png";

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

  const transformStyle = `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
  const glareStyle = `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 50%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.1s ease-out",
      }}
      className="position-relative"
    >
      {children}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: glareStyle,
          pointerEvents: "none",
          borderRadius: "inherit",
          transition: "opacity 0.1s ease-out",
        }}
      />
    </div>
  );
};

const SalonPlantaAlta = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-start mb-5 container mx-auto">
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <Tilt3D intensity={15} glareIntensity={0.2}>
            <img
              src={plantalta}
              alt="Salón Planta Alta"
              className="img-fluid rounded shadow-lg"
              loading="lazy"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.3s ease",
              }}
            />
          </Tilt3D>
        </div>

        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
          <h3 className="mb-3">SALÓN PLANTA ALTA</h3>

          <p className="text-start">
            Ideal para cumpleaños de 15, bodas y eventos elegantes con
            decoración refinada y ambiente íntimo.
          </p>

          <div className="d-flex gap-4 mb-3">
            <div className="d-flex align-items-center">
              <Users size={24} className="me-2" />
              <div>
                <strong>130</strong> personas (cena formal)
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Users size={24} className="me-2" />
              <div>
                <strong>150</strong> personas (coctel)
              </div>
            </div>
          </div>

          <div
            style={{
              maxHeight: expanded ? "1200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
            }}
          >
            <h5 className="mt-4 mb-3">Características y Servicios:</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Mesas redondas para 10 personas</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Sillas Tiffanys blancas con almohadón de cuero blanco
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Candelabros de cristal y topiarios</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Monitor size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Pantalla LED de 8 mts x 2.5 mts - ¡Única en la zona!
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Music size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Amplia pista de baile</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Baby size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Playroom estilo Montessori (niños hasta 6 años)</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Cortinados de pana negro</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Music size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Equipo de sonido y audio de última generación</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Wind size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Aire acondicionado central</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Baños con terminaciones de categoría y accesibles</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Camera size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Seguridad y circuito de monitoreo completo</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <MoveUp size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Escalera y ascensor</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <Car size={18} className="me-2 mt-1 flex-shrink-0" />
                <span>Estacionamiento cubierto para más de 30 autos</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleToggle}
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
      </div>
    </section>
  );
};

export default SalonPlantaAlta;
