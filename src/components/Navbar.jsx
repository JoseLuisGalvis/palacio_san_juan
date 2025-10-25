import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Phone } from "lucide-react";
import logo from "../assets/images/logo.jpeg";
import ws_icono from "../assets/icons/ws.png";

const Navbar = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "shadow" : ""
      } ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
      style={{ transition: "all 0.3s" }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{ cursor: "pointer", textDecoration: "none", gap: "15px" }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
        >
          {/* Ícono decorativo del logo - IZQUIERDA */}
          <img
            src={logo}
            alt="Palacio San Juan"
            className="logo-icon"
            style={{
              height: "55px",
              width: "auto",
              filter: darkMode ? "brightness(1.1)" : "none",
            }}
          />

          {/* Contenedor de texto - DERECHA */}
          <div className="d-flex flex-column">
            {/* Título principal */}
            <div
              className="logo-title"
              style={{
                fontSize: "1.3rem",
                fontWeight: "400",
                letterSpacing: "0.15em",
                color: darkMode ? "#d4af37" : "#2c3e50",
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

        <div className="d-flex align-items-center">
          <button
            className="btn btn-link text-decoration-none me-2 d-lg-none"
            onClick={toggleDarkMode}
            style={{ color: darkMode ? "#fff" : "#000" }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="btn btn-link text-decoration-none d-lg-none"
            onClick={toggleMenu}
            style={{ color: darkMode ? "#fff" : "#000" }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("salones");
                }}
              >
                Salones
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("servicios");
                }}
              >
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contacto");
                }}
              >
                Contacto
              </a>
            </li>
            <a href="https://wa.me/1133649070" target="_blank" class="ms-auto">
              <img
                src={ws_icono}
                alt="WhatsApp"
                loading="lazy"
                width="50"
                height="50"
                id="icon-ws"
              />
            </a>
            <li className="nav-item ms-lg-3 d-none d-lg-block">
              <button
                className="btn btn-link text-decoration-none"
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Estilos responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .logo-icon {
            height: 45px !important;
          }
          .logo-title {
            font-size: 1.1rem !important;
            letter-spacing: 0.1em !important;
          }
          .logo-subtitle {
            font-size: 0.55rem !important;
            gap: 6px !important;
          }
          .logo-line {
            width: 30px !important;
          }
        }

        @media (max-width: 576px) {
          .logo-icon {
            height: 40px !important;
          }
          .logo-title {
            font-size: 0.95rem !important;
          }
          .logo-subtitle {
            font-size: 0.5rem !important;
            gap: 5px !important;
          }
          .logo-line {
            width: 25px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
