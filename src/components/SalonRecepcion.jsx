import React, { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, Users, Music } from "lucide-react";
import recepcion from "../assets/images/recepcion.png";
import recepcionWebp from "../assets/images/recepcion.webp";

const SalonRecepcion = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

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

          {/* Carrusel con efectos mejorados */}
          <div
            className="col-lg-6 col-12 mb-4 mb-lg-0 order-lg-2 order-1 px-3 px-lg-4"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div
              id="recepcionCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div
                className="carousel-inner rounded shadow-lg"
                style={{
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <div className="carousel-item active h-100">
                  <img
                    src={recepcion}
                    className="d-block w-100 h-100"
                    alt="Salón Recepción 1"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      transform:
                        hoveredImage === 0 ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.5s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredImage(0)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
                <div className="carousel-item h-100">
                  <img
                    src={recepcionWebp}
                    className="d-block w-100 h-100"
                    alt="Salón Recepción 2"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      transform:
                        hoveredImage === 1 ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.5s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredImage(1)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
              </div>

              {/* Controles del carrusel con estilo mejorado */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#recepcionCarousel"
                data-bs-slide="prev"
                style={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                  }}
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#recepcionCarousel"
                data-bs-slide="next"
                style={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                  }}
                ></span>
                <span className="visually-hidden">Siguiente</span>
              </button>

              {/* Indicadores mejorados */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#recepcionCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#recepcionCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonRecepcion;
