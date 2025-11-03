import React, { useState } from "react";
import { Users, Star, ChevronDown, ChevronUp } from "lucide-react";
import ws_icono from "../assets/icons/ws.png";
import dali from "../assets/images/dali.webp";

const Salones = ({ darkMode }) => {
  const [expandedSalon, setExpandedSalon] = useState(null);

  const toggleSalon = (idx) => {
    setExpandedSalon(expandedSalon === idx ? null : idx);
  };

  const salonesData = [
    {
      title: "Salón Dalí",
      capacity: "200 personas",
      desc: "Ideal para bodas y eventos elegantes con decoración refinada y ambiente íntimo",
      img: dali,
      features: [
        "Aire Acondicionado",
        "Iluminación LED",
        "Sonido Premium",
        "Cocina Equipada",
      ],
    },
    {
      title: "Salón Imperial",
      capacity: "300 personas",
      desc: "Nuestro salón principal de lujo para grandes celebraciones y eventos corporativos",
      img: "https://placehold.co/600x400/png",
      features: ["Pista de Baile", "Proyector HD", "Bar Incluido", "Zona VIP"],
    },
  ];

  return (
    <section
      id="salones"
      className={`salones-section py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="container py-5">
        {/* Encabezado */}
        <div className="text-center mb-5" data-aos="fade-right">
          <h2 className="salones-title display-5 fw-bold mb-3">
            Nuestros Salones
          </h2>
          <p className="salones-subtitle lead">
            Espacios elegantes y versátiles para cada ocasión
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {salonesData.map((salon, idx) => {
            const isExpanded = expandedSalon === idx;
            return (
              <div
                className="col-lg-6 col-md-12"
                key={idx}
                data-aos={idx % 2 === 0 ? "fade-up" : "fade-down"} // animación alternada
              >
                <div
                  className={`salon-card card shadow-lg ${
                    darkMode ? "bg-secondary" : ""
                  }`}
                >
                  <div className="salon-image-wrapper">
                    <img
                      src={salon.img}
                      alt={salon.title}
                      className={`salon-image ${isExpanded ? "expanded" : ""}`}
                      loading="lazy"
                    />
                    <div className="salon-overlay">
                      <h3 className="salon-name fw-bold mb-0">{salon.title}</h3>
                    </div>
                  </div>

                  <div className="card-body p-4">
                    {!isExpanded && (
                      <button
                        onClick={() => toggleSalon(idx)}
                        className="btn btn-expand w-100"
                      >
                        VER MÁS <ChevronDown size={20} />
                      </button>
                    )}

                    {isExpanded && (
                      <div className="salon-details fade-in">
                        <div className="salon-capacity mb-3 d-flex align-items-center gap-2">
                          <Users size={22} /> {salon.capacity}
                        </div>

                        <p
                          className={`salon-desc mb-4 ${
                            darkMode ? "text-light" : "text-muted"
                          }`}
                        >
                          {salon.desc}
                        </p>

                        <div className="salon-features mb-4">
                          <h6 className="salon-features-title fw-bold mb-3">
                            CARACTERÍSTICAS
                          </h6>
                          <div className="row g-2">
                            {salon.features.map((feature, featureIdx) => (
                              <div className="col-6" key={featureIdx}>
                                <div className="feature-item d-flex align-items-center gap-2">
                                  <Star size={14} />
                                  <span>{feature}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="d-flex gap-2">
                          <a
                            href={`https://wa.me/1133649070?text=${encodeURIComponent(
                              `Hola, me gustaría consultar disponibilidad del ${salon.title} para mi evento`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp flex-grow-1"
                          >
                            <img
                              src={ws_icono}
                              alt="WhatsApp"
                              width="24"
                              height="24"
                              className="whatsapp-icon"
                            />
                            CONSULTAR
                          </a>

                          <button
                            onClick={() => toggleSalon(idx)}
                            className="btn btn-close-salon"
                          >
                            <ChevronUp size={20} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Salones;
