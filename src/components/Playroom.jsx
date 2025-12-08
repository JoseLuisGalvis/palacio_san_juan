import React, { useState } from "react";
import { Bed, Sparkles } from "lucide-react";
import suite1 from "../assets/images/kidsroom1.webp";
import suite2 from "../assets/images/kidsroom2.webp";

const Playroom = ({ darkMode }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="suites"
      className={`playroom-section py-5 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Texto */}
        <div
          className="col-lg-6 order-lg-1 order-2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h3 className="mb-3">PLAYROOM</h3>

          <p className="text-start text-md-justify">
            Un espacio especialmente diseñado para que los más pequeños se
            diviertan de forma segura mientras los adultos disfrutan del evento.
            Con juegos y entretenimiento. Ambientado con estilo Montessori para
            niños de hasta 6 años.
          </p>

          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Zona colorida y estimulante</span>
            </li>

            <li className="mb-2 d-flex align-items-start">
              <Bed size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Área de descanso para los niños</span>
            </li>
          </ul>
        </div>

        {/* Carrusel */}
        <div
          className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div
            id="playroomCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div className="carousel-inner playroom-carousel">
              {[suite1, suite2].map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  } h-100`}
                >
                  <img
                    src={img}
                    alt={`Playroom ${index + 1}`}
                    loading="lazy"
                    width="500"
                    height="500"
                    className={`playroom-image ${
                      hoveredImage === index ? "hovered" : ""
                    }`}
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
              ))}
            </div>

            {/* Controles */}
            <button
              className="carousel-control-prev playroom-control"
              type="button"
              data-bs-target="#playroomCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Anterior</span>
            </button>

            <button
              className="carousel-control-next playroom-control"
              type="button"
              data-bs-target="#playroomCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Siguiente</span>
            </button>

            {/* Indicadores */}
            <div className="carousel-indicators playroom-indicators">
              <button
                type="button"
                data-bs-target="#playroomCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#playroomCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playroom;
