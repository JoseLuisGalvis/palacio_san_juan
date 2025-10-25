import React from "react";
import { Star, Users } from "lucide-react";

const AboutUs = ({ darkMode }) => {
  return (
    <section id="about" className={`py-5 ${darkMode ? "bg-dark" : "bg-white"}`}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="position-relative"
              style={{ animation: "slideInLeft 1s ease-out" }}
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Palacio San Juan Interior"
                className="img-fluid rounded shadow-lg"
                style={{ transform: "translateZ(0)" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 border border-3 rounded"
                style={{
                  borderColor: "#d4af37 !important",
                  transform: "translate(-10px, -10px)",
                  zIndex: -1,
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ animation: "slideInRight 1s ease-out" }}>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#d4af37" }}
              >
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
                  <div className="d-flex align-items-center">
                    <Star
                      size={32}
                      className="me-2"
                      style={{ color: "#d4af37" }}
                    />
                    <div>
                      <h5 className="mb-0">500+</h5>
                      <small>Eventos exitosos</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <Users
                      size={32}
                      className="me-2"
                      style={{ color: "#d4af37" }}
                    />
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
