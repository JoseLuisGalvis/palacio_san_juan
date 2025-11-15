import React from "react";
import { Sparkles, Image, Users } from "lucide-react";
import recepcion from "../assets/images/recepcion.png";

const SalonRecepcion = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Texto */}
        <div
          className="col-lg-6 order-lg-1 order-2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h3 className="mb-3">Recepción</h3>
          <p className="text-start text-md-justify">
            Un espacio cálido y elegante que da la bienvenida a tus invitados.
            Ideal para recibir, tomar fotos y comenzar el evento con estilo.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Espacio amplio</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Iluminación premium</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Image size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Ideal para fotos y recepción de invitados</span>
            </li>
          </ul>
        </div>

        {/* Imagen */}
        <div
          className="col-lg-6 mb-4 mb-lg-0 order-lg-2 order-1"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src={recepcion}
            alt="Salón Recepción"
            className="img-fluid rounded shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SalonRecepcion;
