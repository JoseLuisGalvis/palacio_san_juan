import React, { useEffect } from "react";
import slide1 from "../assets/images/sandwich.webp";
import slide2 from "../assets/images/empanada.webp";
import slide3 from "../assets/images/cazuela.webp";
import slide4 from "../assets/images/milanesa.webp";
import slide5 from "../assets/images/cheesecake.webp";
import slide6 from "../assets/images/coctel.webp";

const Catering = ({ darkMode }) => {
  useEffect(() => {
    // Configurar animación del carrusel
    const slides = document.querySelectorAll(".catering-slide");
    slides.forEach((slide, index) => {
      slide.style.animationDelay = `${index * 6}s`;
    });
  }, []);

  const cateringItems = [
    { id: 1, title: "Entradas Frías", image: slide1 },
    { id: 2, title: "Entradas Calientes", image: slide2 },
    { id: 3, title: "Plato Principal", image: slide3 },
    { id: 4, title: "Gourmet Joven", image: slide4 },
    { id: 5, title: "Postres", image: slide5 },
    { id: 6, title: "Bebidas", image: slide6 },
  ];

  return (
    <section
      id="catering"
      className={`catering-section ${darkMode ? "bg-dark" : "bg-white"}`}
    >
      <div className="container min-vh-100 d-flex flex-column justify-content-center py-5">
        {/* Título de la sección */}
        <div className="row my-5">
          <div className="col-12 text-center">
            <h2 className="section-title" data-aos="fade-up">
              Servicio de Catering
            </h2>
            <div
              className="title-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
          </div>
        </div>

        {/* Carrusel */}
        <div className="row">
          <div className="col-12">
            <div
              className="catering-slider-wrap"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {cateringItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`catering-slide ${index === 0 ? "active" : ""}`}
                  id={`catering-slide-${item.id}`}
                >
                  {/* Overlay oscuro */}
                  <div className="catering-overlay"></div>

                  <img
                    src={item.image}
                    alt={item.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="catering-img"
                  />

                  <div className="catering-label">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
