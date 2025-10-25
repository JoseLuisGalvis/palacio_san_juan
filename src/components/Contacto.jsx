import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje =
      `Hola! Me contacto desde la web de Palacio San Juan.%0A%0A` +
      `Nombre: ${formData.nombre}%0A` +
      `Email: ${formData.email}%0A` +
      `Teléfono: ${formData.telefono}%0A` +
      `Tipo de evento: ${formData.tipoEvento}%0A` +
      `Fecha: ${formData.fecha}%0A` +
      `Mensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/5491112345678?text=${mensaje}`, "_blank");
  };

  return (
    <div
      className={`p-4 rounded shadow ${darkMode ? "bg-secondary" : "bg-white"}`}
    >
      <h4 className="mb-4">Solicita tu Presupuesto</h4>
      <div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            name="tipoEvento"
            value={formData.tipoEvento}
            onChange={handleChange}
          >
            <option value="">Tipo de evento</option>
            <option>Boda</option>
            <option>XV Años</option>
            <option>Cumpleaños</option>
            <option>Evento Corporativo</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Cuéntanos sobre tu evento..."
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn w-100 py-2"
          style={{
            backgroundColor: "#d4af37",
            border: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Enviar Consulta
        </button>
      </div>
    </div>
  );
};

const Contacto = ({ darkMode }) => {
  return (
    <section
      id="contacto"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#d4af37" }}>
              Contáctanos
            </h2>
            <p className="lead mb-4">
              Estamos listos para hacer realidad tu evento soñado
            </p>

            <div className="mb-3 d-flex align-items-start">
              <MapPin
                size={24}
                className="me-3 mt-1"
                style={{ color: "#d4af37", flexShrink: 0 }}
              />
              <div>
                <h6 className="fw-bold">Dirección</h6>
                <p>Martín Rodríguez 520, Quilmes, Buenos Aires 1878</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Phone
                size={24}
                className="me-3 mt-1"
                style={{ color: "#d4af37", flexShrink: 0 }}
              />
              <div>
                <h6 className="fw-bold">Teléfono</h6>
                <p>+54 11 1234-5678</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Mail
                size={24}
                className="me-3 mt-1"
                style={{ color: "#d4af37", flexShrink: 0 }}
              />
              <div>
                <h6 className="fw-bold">Email</h6>
                <p>info@palaciosanjuan.com.ar</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Clock
                size={24}
                className="me-3 mt-1"
                style={{ color: "#d4af37", flexShrink: 0 }}
              />
              <div>
                <h6 className="fw-bold">Horario de Atención</h6>
                <p>
                  Lunes a Viernes: 10:00 - 19:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div
              className={`rounded overflow-hidden shadow ${
                darkMode ? "bg-secondary" : "bg-white"
              }`}
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8156789012345!2d-58.256789!3d-34.720123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQzJzEyLjQiUyA1OMKwMTUnMjQuNCJX!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Palacio San Juan"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
