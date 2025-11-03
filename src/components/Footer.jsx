import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";
import logoWhite from "../assets/images/logoWhite.png";

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer className={`py-5 ${darkMode ? "bg-dark" : "bg-dark"} text-light`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 text-center">
            <a className="navbar-brand d-flex align-items-center" href="#">
              {/* Ícono decorativo del logo - IZQUIERDA */}
              <img
                src={darkMode ? logoWhite : logo}
                alt="Palacio San Juan"
                className="logo-icon"
                style={{
                  height: "55px",
                  width: "auto",
                  marginRight: "1em",
                  filter: darkMode ? "brightness(1.1)" : "none",
                }}
              />

              {/* Contenedor de texto - DERECHA */}
              <div className="d-flex flex-column">
                {/* Título principal */}
                <div
                  className="logo-title"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    letterSpacing: "0.15em",
                    color: darkMode ? "#ffff" : "#ffff",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    marginBottom: "2px",
                    whiteSpace: "nowrap",
                    lineHeight: "1.2",
                  }}
                >
                  PALACIO SAN JUAN
                </div>

                {/* Línea decorativa con texto EVENTOS */}
                <div
                  className="logo-subtitle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.65rem",
                    fontWeight: "300",
                    letterSpacing: "0.35em",
                    color: darkMode ? "#a0a0a0" : "#7f8c8d",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* Línea izquierda */}
                  <div
                    className="logo-line"
                    style={{
                      width: "45px",
                      height: "1px",
                      backgroundColor: darkMode ? "#555" : "#999",
                    }}
                  ></div>

                  {/* Texto EVENTOS */}
                  <span>EVENTOS</span>

                  {/* Línea derecha */}
                  <div
                    className="logo-line"
                    style={{
                      width: "45px",
                      height: "1px",
                      backgroundColor: darkMode ? "#555" : "#999",
                    }}
                  ></div>
                </div>
              </div>
            </a>
            <p className="footer-message">
              El lugar ideal para tus eventos más especiales. Creando momentos
              inolvidables desde 2003.
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3" style={{ color: "#ffff" }}>
              Enlaces Rápidos
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("hero");
                  }}
                >
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("salones");
                  }}
                >
                  Salones
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("servicios");
                  }}
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3" style={{ color: "#ffff" }}>
              Servicios
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">Bodas</li>
              <li className="mb-2">XV Años</li>
              <li className="mb-2">Cumpleaños</li>
              <li className="mb-2">Eventos Corporativos</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3" style={{ color: "#ffff" }}>
              Contacto
            </h6>
            <p className="mb-2">
              <MapPin size={16} className="me-2" />
              Martín Rodríguez 520, Quilmes
            </p>
            <p className="mb-2">
              <Phone size={16} className="me-2" />
              +54 11 1234-5678
            </p>
            <p className="mb-2">
              <Mail size={16} className="me-2" />
              info@palaciosanjuan.com.ar
            </p>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#d4af37" }} />

        <div className="text-center">
          <p className="mb-0">
            &copy; 2025 Palacio San Juan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
