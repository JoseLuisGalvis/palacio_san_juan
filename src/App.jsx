import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// ================================
// Componentes
// ================================
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Salones from "./components/Salones";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  // ================================
  // Estado Dark Mode
  // ================================
  const [darkMode, setDarkMode] = useState(true);

  // 🔹 Hook para aplicar la clase dark-mode al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]); // se ejecuta cada vez que cambia darkMode

  // Función para alternar dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // ================================
  // Inicializar AOS (animaciones al hacer scroll)
  // ================================
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de animación en ms
      easing: "ease-out",
      once: true, // animar solo la primera vez
      mirror: false, // no repetir al hacer scroll hacia arriba
    });
  }, []); // se ejecuta solo al montar la app

  // ================================
  // Función scroll suave a secciones
  // ================================
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // ================================
  // Render
  // ================================
  return (
    <div style={{ minHeight: "100vh" }}>
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
