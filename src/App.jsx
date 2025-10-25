import React, { useState, useEffect } from "react";
import "./App.css";

// Importar todos los componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Salones from "./components/Salones";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Configurar el tema de Bootstrap según el modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-bs-theme");
    }
  }, [darkMode]);

  // Función para alternar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Función para hacer scroll a secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      style={{ minHeight: "100vh" }}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />

      <AboutUs darkMode={darkMode} />

      <Salones darkMode={darkMode} />

      <Servicios darkMode={darkMode} />

      <Contacto darkMode={darkMode} />

      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
