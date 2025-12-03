import React from "react";
import { Car, Clock, Shield } from "lucide-react";
import estacionamiento from "../assets/images/estacionamiento.jpg";

const Estacionamiento = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="row align-items-center mb-5 container mx-auto">
        {/* Imagen */}
        <div
          className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-1"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img
            src={estacionamiento}
            alt="Estacionamiento"
            className="img-fluid rounded shadow-lg"
            loading="lazy"
          />
        </div>
        {/* Texto */}
        <div
          className="col-lg-6 order-lg-2 order-2"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h3 className="mb-3 parking-title text-break">ESTACIONAMIENTO</h3>
          <p className="text-start text-md-justify">
            Contamos con estacionamiento propio para brindar seguridad y
            comodidad a tus invitados.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-start">
              <Car size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Acceso al salón por ascensor o escalera</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Clock size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Disponible durante todo el evento</span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <Shield size={20} className="me-2 mt-1 flex-shrink-0" />
              <span>Zona segura e iluminada</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Estacionamiento;
