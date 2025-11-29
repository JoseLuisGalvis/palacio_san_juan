import React, { useState } from "react";
import { Bed, Sparkles, Users } from "lucide-react";
import suite1 from "../assets/images/suite1.png";
import suite2 from "../assets/images/suite2.png";

const Suite = ({ darkMode }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="suites"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Carrusel con efectos mejorados */}
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div
            id="suiteCarousel"
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
                  src={suite1}
                  className="d-block w-100 h-100"
                  alt="Suite 1"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    transform: hoveredImage === 0 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.5s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredImage(0)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src={suite2}
                  className="d-block w-100 h-100"
                  alt="Suite 2"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    transform: hoveredImage === 1 ? "scale(1.05)" : "scale(1)",
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
              data-bs-target="#suiteCarousel"
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
              data-bs-target="#suiteCarousel"
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
                data-bs-target="#suiteCarousel"
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
                data-bs-target="#suiteCarousel"
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

        {/* Texto */}
        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
          <h3 className="mb-3">SUITES EXCLUSIVAS</h3>
          <p className="text-start text-md-justify">
            En nuestras Suites encontrarás espacios pensados y creados para que
            disfrutes cada momento. Con variedad de amenities y confort para
            prepararte para tus 15, tu boda o tu evento especial.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-start">
              <Bed size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Espacios privados y confortables</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Decoración elegante</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Users size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Ideal para quinceañeras y novios</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Suite;
