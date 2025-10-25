import React from "react";
import { Heart, Gift, Users, Briefcase } from "lucide-react";

const Servicios = ({ darkMode }) => {
  const serviciosData = [
    {
      icon: <Heart size={48} />,
      title: "Decoración Premium",
      desc: "Ambientación personalizada según tu estilo",
    },
    {
      icon: <Gift size={48} />,
      title: "Catering Gourmet",
      desc: "Menús diseñados por chefs profesionales",
    },
    {
      icon: <Users size={48} />,
      title: "Staff Profesional",
      desc: "Equipo capacitado a tu servicio",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Coordinación Integral",
      desc: "Planificamos cada detalle de tu evento",
    },
  ];

  return (
    <section
      id="servicios"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-white"}`}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#d4af37" }}>
            Servicios Incluidos
          </h2>
          <p className="lead">Todo lo que necesitas en un solo lugar</p>
        </div>

        <div className="row g-4">
          {serviciosData.map((service, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="text-center p-4">
                <div className="mb-3" style={{ color: "#d4af37" }}>
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="mb-0">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
