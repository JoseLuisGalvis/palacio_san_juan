import React from "react";
import { Bed, Sparkles, Users } from "lucide-react";
import suite1 from "../assets/images/suite1.png";
import suite2 from "../assets/images/suite2.png";

const Suite = ({ darkMode }) => {
  return (
    <section
      id="suites"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Carrusel imágenes */}
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div
            id="suiteCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner rounded shadow-lg"
              style={{ height: "500px" }}
            >
              <div className="carousel-item active h-100">
                <img
                  src={suite1}
                  className="d-block w-100 h-100"
                  alt="Suite 1"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src={suite2}
                  className="d-block w-100 h-100"
                  alt="Suite 2"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Controles del carrusel */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#suiteCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#suiteCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>

            {/* Indicadores */}
            <div className="carousel-indicators">
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
          <h3 className="fw-bold mb-3">Suites Exclusivas</h3>
          <p className="text-start text-md-justify">
            Disfrutá de suites amplias y confortables, diseñadas para ofrecer la
            mejor experiencia a los novios, artistas o invitados especiales.
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
              <span>Ideal para novios e invitados VIP</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Suite;
