import React from "react";
import SalonRecepcion from "./SalonRecepcion";
import Suite from "./Suite";
import Estacionamiento from "./Estacionamiento";

const Salones = ({ darkMode }) => {
  return (
    <section
      id="salones"
      className={`${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      } py-5 mt-5`}
    >
      <div className="container">
        <h2 className="text-center my-5 pt-5">Nuestros Salones</h2>

        <SalonRecepcion darkMode={darkMode} />
        <Suite darkMode={darkMode} />
        <Estacionamiento darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Salones;
