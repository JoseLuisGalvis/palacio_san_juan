import React from "react";
import { Users } from "lucide-react";
import aboutUs from "../assets/images/fachAbout.webp";

const AboutUs = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`about-section py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* 🔹 Imagen */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="about-image-wrapper position-relative">
              <img
                src={aboutUs}
                alt="Palacio San Juan Interior"
                width="800"
                height="600"
                className="about-image img-fluid rounded shadow-lg"
                loading="lazy"
              />
              <div className="about-image-border"></div>
            </div>
          </div>

          {/* 🔹 Texto */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="about-text">
              <h2 className="about-title mb-4">SOBRE NOSOTROS</h2>

              <p className="mb-4 text-start text-md-justify about-paragraph">
                Ubicado a minutos del centro de Quilmes, se encuentra Palacio
                San Juan, un espacio único que no podes dejar de conocer, con
                arquitectura francesa y fachada de categoría ofrece en su
                interior instalaciones de primer nivel, atención personalizada y
                un equipo profesional dedicado a hacer realidad cada detalle
                para que seas el verdadero anfitrión de tu evento.
              </p>
              <p>
                Brindamos un servicio integral: Salón, Catering, Barra libre,
                Coordinacion de evento, Dj, Sonido, Iluminación, ambientación y
                más...
              </p>

              <p className="mb-4 text-start text-md-justify about-paragraph">
                Momentos especiales de tu vida que vamos a acompañarte:
                <br />
                <span>
                  Fiestas de 15 - Bodas - Bar/Bat Mitzvah - Cumpleaños -
                  Corporativos - Egresados - Publicidad
                </span>
              </p>

              <div className="row g-3 text-center text-md-start">
                <div className="col-12 col-md-6">
                  <div className="about-stat d-flex align-items-center justify-content-center justify-content-md-start">
                    <Users size={32} className="about-icon me-2" />
                    <div>
                      <h5 className="mb-0 fw-bold">130</h5>
                      <small>Capacidad</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
