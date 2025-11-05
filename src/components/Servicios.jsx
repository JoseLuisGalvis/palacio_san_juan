import React from "react";
import {
  Gift,
  Users,
  Building2,
  Shield,
  Headphones,
  Lightbulb,
  Armchair,
} from "lucide-react";

const Servicios = ({ darkMode }) => {
  const serviciosData = {
    instalaciones: [
      "Excelencia en diseño y arquitectura",
      "Capacidad para 130 personas",
      "Recepción en planta baja amueblada",
      "Salón principal en primer piso (acceso por escalera y ascensor)",
      "Suite privada para homenajeados",
      "Estacionamiento cubierto para 30 vehículos",
      "Playroom ambientado para niños de hasta 6 años",
      "Barras de tragos en recepción y salón principal",
    ],
    seguridad: [
      "Circuito cerrado de cámaras",
      "WiFi en todo el salón",
      "Luces de emergencia",
      "Grupo electrógeno",
    ],
    personal: [
      "Asistencia técnica",
      "Seguridad con sala de monitoreo",
      "Asistencia médica (Unidad Coronaria)",
      "Servicio de limpieza",
    ],
    otros: [
      "Asistencia personalizada durante el evento",
      "Un camarero cada 10 personas",
      "Kit de amenities en los baños",
    ],
    musica: [
      "Sonido ambiental en recepción",
      "Consola de sonido",
      "Parlantes potenciados",
      "Sistema de bajos",
      "Estilo musical personalizado",
      "Micrófonos inalámbricos",
      "DJ y VJ con pantalla durante todo el evento",
    ],
    iluminacion: [
      "Iluminación perimetral con protones",
      "Cabezas robóticas y strobos laser",
      "Máquina de humo",
      "Techo con bolas espejadas y cortina LED",
    ],
    mobiliario: [
      "Livings estilo nórdico (pana negra)",
      "Mesas de arrime y mesas tipo cafetin con butacas en pana",
      "Mesa Tiffany espejada con arreglos florales, velas, portarretratos varios y objetos decorativos",
      "Lámparas nórdicas",
      "Mesa principal vestida o Tiffany espejada",
      "Centros de mesa y velitas de noche",
      "Mesas redondas para 10 personas",
      "Sillas Tiffany de madera blancas con almohadón blanco",
    ],
  };

  return (
    <section
      id="servicios"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: darkMode ? "#c0c0c0" : "#505050" }}
          >
            EL SALÓN
          </h2>
          <p
            className="lead"
            style={{
              color: darkMode ? "#999" : "#666",
              fontSize: "1.1rem",
              letterSpacing: "2px",
            }}
          >
            Servicios Incluidos
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Building2
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  INSTALACIONES
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.instalaciones.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Shield
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  SEGURIDAD
                </h4>
              </div>
              <ul className="list-unstyled mb-4">
                {serviciosData.seguridad.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center mb-4 mt-5">
                <Gift
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  OTROS SERVICIOS
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.otros.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Users
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  PERSONAL DURANTE TODO EL EVENTO
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.personal.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Headphones
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  MÚSICA Y TÉCNICA
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.musica.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Lightbulb
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  ILUMINACIÓN
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.iluminacion.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div
              className={`p-4 h-100 ${
                darkMode ? "bg-dark" : "bg-white"
              } shadow-sm rounded`}
            >
              <div className="d-flex align-items-center mb-4">
                <Armchair
                  size={32}
                  style={{ color: "#c0c0c0", marginRight: "15px" }}
                />
                <h4
                  className="service-title fw-bold mb-0"
                  style={{
                    color: darkMode ? "#c0c0c0" : "#303030",
                    letterSpacing: "1px",
                  }}
                >
                  MOBILIARIO
                </h4>
              </div>
              <ul className="list-unstyled">
                {serviciosData.mobiliario.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <span style={{ color: "#c0c0c0", marginRight: "10px" }}>
                      •
                    </span>
                    <span style={{ color: darkMode ? "#bbb" : "#555" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Servicios;
