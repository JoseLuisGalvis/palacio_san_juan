import React, { useState } from "react";
import { Bed, Sparkles, Users } from "lucide-react";
import suite1 from "../assets/images/suite1.webp";
import suite2 from "../assets/images/suite2.webp";

const Suite = ({ darkMode }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="suites"
      className={`py-5 suite-section ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Carrusel */}
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
            <div className="carousel-inner suite-carousel-inner">
              <div className="carousel-item active h-100">
                <img
                  src={suite1}
                  className={`d-block w-100 h-100 suite-img ${
                    hoveredImage === 0 ? "hovered" : ""
                  }`}
                  alt="Suite 1"
                  loading="lazy"
                  width="500"
                  height="500"
                  onMouseEnter={() => setHoveredImage(0)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
              </div>

              <div className="carousel-item h-100">
                <img
                  src={suite2}
                  className={`d-block w-100 h-100 suite-img ${
                    hoveredImage === 1 ? "hovered" : ""
                  }`}
                  alt="Suite 2"
                  loading="lazy"
                  width="500"
                  height="500"
                  onMouseEnter={() => setHoveredImage(1)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
              </div>
            </div>

            {/* Controles */}
            <button
              className="carousel-control-prev suite-control"
              type="button"
              data-bs-target="#suiteCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon suite-control-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>

            <button
              className="carousel-control-next suite-control"
              type="button"
              data-bs-target="#suiteCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon suite-control-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>

            {/* Indicadores */}
            <div className="carousel-indicators suite-indicators">
              <button
                type="button"
                data-bs-target="#suiteCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#suiteCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
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
