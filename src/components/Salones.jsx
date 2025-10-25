import React, { useState } from "react";
import { Users, Star, ChevronDown, ChevronUp } from "lucide-react";
import ws_icono from "../assets/icons/ws.png";

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
      img: "https://plus.unsplash.com/premium_photo-1681841407033-39c32907a8ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
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
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      features: ["Pista de Baile", "Proyector HD", "Bar Incluido", "Zona VIP"],
    },
  ];

  return (
    <section
      id="salones"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="container py-5">
        {/* Encabezado de la sección */}
        <div className="text-center mb-5">
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              color: "#d4af37",
              fontFamily: "'Cinzel', Georgia, serif",
              letterSpacing: "0.1em",
            }}
          >
            Nuestros Salones
          </h2>
          <p
            className="lead"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Espacios elegantes y versátiles para cada ocasión
          </p>
        </div>

        {/* Grid de 2 salones - Vista Compacta/Expandida */}
        <div className="row g-4 justify-content-center">
          {salonesData.map((salon, idx) => {
            const isExpanded = expandedSalon === idx;

            return (
              <div className="col-lg-6 col-md-12" key={idx}>
                <div
                  className={`card shadow-lg ${darkMode ? "bg-secondary" : ""}`}
                  style={{
                    border: "none",
                    transition: "all 0.4s ease",
                    overflow: "hidden",
                    borderRadius: "12px",
                  }}
                >
                  {/* Imagen del salón */}
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={salon.img}
                      className="card-img-top"
                      alt={salon.title}
                      style={{
                        height: isExpanded ? "280px" : "400px",
                        objectFit: "cover",
                        transition: "all 0.4s ease",
                      }}
                    />

                    {/* Overlay con título */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        padding: "60px 30px 30px",
                      }}
                    >
                      <h3
                        className="fw-bold mb-0"
                        style={{
                          color: "#d4af37",
                          fontSize: "2.2rem",
                          fontFamily: "'Cinzel', Georgia, serif",
                          letterSpacing: "0.08em",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        {salon.title}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido de la card */}
                  <div className="card-body p-4">
                    {/* Vista Colapsada - Solo botón VER MÁS */}
                    {!isExpanded && (
                      <button
                        onClick={() => toggleSalon(idx)}
                        className="btn w-100"
                        style={{
                          backgroundColor: "#d4af37",
                          border: "none",
                          color: "#000",
                          fontWeight: "600",
                          padding: "14px",
                          borderRadius: "8px",
                          transition: "all 0.3s",
                          fontFamily: "'Montserrat', sans-serif",
                          letterSpacing: "0.05em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#c19b2e";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#d4af37";
                        }}
                      >
                        VER MÁS
                        <ChevronDown size={20} />
                      </button>
                    )}

                    {/* Vista Expandida - Información completa */}
                    {isExpanded && (
                      <div
                        style={{
                          animation: "fadeIn 0.4s ease",
                        }}
                      >
                        {/* Capacidad */}
                        <div
                          className="mb-3 d-flex align-items-center gap-2"
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            color: "#d4af37",
                          }}
                        >
                          <Users size={22} />
                          {salon.capacity}
                        </div>

                        {/* Descripción */}
                        <p
                          className="mb-4"
                          style={{
                            fontSize: "0.95rem",
                            lineHeight: "1.6",
                            color: darkMode ? "#e0e0e0" : "#555",
                          }}
                        >
                          {salon.desc}
                        </p>

                        {/* Características del salón */}
                        <div className="mb-4">
                          <h6
                            className="fw-bold mb-3"
                            style={{
                              color: darkMode ? "#d4af37" : "#2c3e50",
                              fontSize: "0.9rem",
                              letterSpacing: "0.05em",
                            }}
                          >
                            CARACTERÍSTICAS
                          </h6>
                          <div className="row g-2">
                            {salon.features.map((feature, featureIdx) => (
                              <div className="col-6" key={featureIdx}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "0.85rem",
                                    color: darkMode ? "#c0c0c0" : "#666",
                                  }}
                                >
                                  <Star
                                    size={14}
                                    style={{ color: "#d4af37", flexShrink: 0 }}
                                  />
                                  <span>{feature}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Botones: WhatsApp y Cerrar */}
                        <div className="d-flex gap-2">
                          <a
                            href={`https://wa.me/1133649070?text=${encodeURIComponent(
                              `Hola, me gustaría consultar disponibilidad del ${salon.title} para mi evento`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn flex-grow-1"
                            style={{
                              backgroundColor: "#25D366",
                              border: "none",
                              color: "#fff",
                              fontWeight: "600",
                              padding: "12px",
                              borderRadius: "8px",
                              transition: "all 0.3s",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#1fb855";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#25D366";
                            }}
                          >
                            <img
                              src={ws_icono}
                              alt="WhatsApp"
                              width="24"
                              height="24"
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                            CONSULTAR
                          </a>

                          <button
                            onClick={() => toggleSalon(idx)}
                            className="btn"
                            style={{
                              backgroundColor: darkMode ? "#555" : "#e0e0e0",
                              border: "none",
                              color: darkMode ? "#fff" : "#000",
                              fontWeight: "600",
                              padding: "12px 20px",
                              borderRadius: "8px",
                              transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = darkMode
                                ? "#666"
                                : "#d0d0d0";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = darkMode
                                ? "#555"
                                : "#e0e0e0";
                            }}
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

        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Salones;
