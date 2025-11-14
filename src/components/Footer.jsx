import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logoWhite from "../assets/images/logoWhite.png";
import qr from "../assets/images/qr.png";

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer className={`py-5 ${darkMode ? "bg-dark" : "bg-dark"} text-light`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 d-flex flex-column align-items-center text-center">
            <a
              className="navbar-brand d-flex flex-column align-items-center"
              href="#"
            >
              {/* Ícono decorativo del logo - ARRIBA */}
              <img
                src={logoWhite}
                alt="Palacio San Juan"
                className="logo-icon"
                style={{
                  height: "55px",
                  width: "auto",
                  marginBottom: "0.5em",
                }}
              />

              {/* Contenedor de texto - ABAJO */}
              <div className="d-flex flex-column align-items-center">
                {/* Título principal */}
                <div
                  className="logo-title-footer"
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
                  className="logo-subtitle-footer mb-2"
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
            <h6
              className="fw-bold mb-3 col-title-footer"
              style={{ color: "#ffff" }}
            >
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

          <div className="col-md-2">
            <h6
              className="fw-bold mb-3 col-title-footer"
              style={{ color: "#ffff" }}
            >
              QR
            </h6>
            {/* Ícono decorativo del logo - ARRIBA */}
            <img
              src={qr}
              alt="QR Ws Palacio San Juan"
              className="qr-icon"
              style={{
                height: "100px",
                width: "auto",
                marginBottom: "0.5em",
                borderRadius: "0.5em",
              }}
            />
          </div>

          <div className="col-md-4">
            <h6
              className="fw-bold mb-3 col-title-footer"
              style={{ color: "#ffff" }}
            >
              Contacto
            </h6>
            <p className="mb-2">
              <MapPin size={16} className="me-2" />
              Martín Rodríguez 520, Quilmes
            </p>
            <p className="mb-2">
              <Phone size={16} className="me-2" />
              +54 11 2649-6197
            </p>
            <p className="mb-2 mail-text">
              <Mail size={16} className="me-2" />
              palaciosanjuaneventos@gmail.com
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
