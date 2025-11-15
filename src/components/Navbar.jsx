import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/images/PSJLogo.png";
import logoWhite from "../assets/images/PSJLogoWhite.png";
import ws_icono from "../assets/icons/silverWs.png";

const Navbar = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        {/* ====== LOGO ====== */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
        >
          <img
            src={darkMode ? logoWhite : logo}
            alt="Palacio San Juan"
            className="logo-icon"
            loading="lazy"
            style={{
              height: "80px",
              width: "auto",
              filter: darkMode ? "none" : "brightness(1.05)",
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* ====== BOTONES MODO OSCURO + MENÚ ====== */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-link text-decoration-none p-2 d-lg-none"
            onClick={toggleDarkMode}
            style={{ color: darkMode ? "#fff" : "#000" }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            className="btn btn-link text-decoration-none p-2 d-lg-none"
            onClick={toggleMenu}
            style={{ color: darkMode ? "#fff" : "#000" }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ====== MENÚ DE NAVEGACIÓN ====== */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {[
              { id: "hero", label: "Inicio" },
              { id: "about", label: "Nosotros" },
              { id: "salones", label: "Salones" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Icono WhatsApp */}
            <a
              href="https://wa.link/ss5sx3"
              target="_blank"
              rel="noopener noreferrer"
              className="silverWs ms-auto"
            >
              <img
                src={ws_icono}
                alt="WhatsApp"
                loading="lazy"
                width="70"
                height="70"
                id="icon-ws"
              />
            </a>

            {/* Botón modo oscuro (desktop) */}
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
    </nav>
  );
};

export default Navbar;
