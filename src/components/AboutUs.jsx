import React from "react";
import { Star, Users } from "lucide-react";
import aboutUs from "../assets/images/aboutUs.webp";

const AboutUs = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`about-section py-5 ${darkMode ? "bg-dark" : "bg-white"}`}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* 🔹 Imagen con borde dorado animado */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="about-image-wrapper">
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

          {/* 🔹 Texto descriptivo animado */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="about-text">
              <h2 className="about-title display-5 fw-bold mb-4">
                Sobre Nosotros
              </h2>
              <p className="fs-5 mb-4">
                Con más de 20 años de experiencia,{" "}
                <strong>Palacio San Juan</strong> se ha convertido en el lugar
                predilecto para celebrar los momentos más importantes de la
                vida.
              </p>
              <p className="mb-4">
                Ubicados en el corazón de Quilmes, ofrecemos instalaciones de
                primer nivel, atención personalizada y un equipo profesional
                dedicado a hacer realidad cada detalle de tu evento soñado.
              </p>

              <div className="row g-3">
                <div className="col-6">
                  <div className="about-stat d-flex align-items-center">
                    <Star size={32} className="about-icon me-2" />
                    <div>
                      <h5 className="mb-0">500+</h5>
                      <small>Eventos exitosos</small>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about-stat d-flex align-items-center">
                    <Users size={32} className="about-icon me-2" />
                    <div>
                      <h5 className="mb-0">300</h5>
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
