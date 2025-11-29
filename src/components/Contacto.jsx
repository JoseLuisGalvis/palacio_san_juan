import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SalonMap from "./SalonMap";

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // limpia error al escribir
  };

  const validate = () => {
    const newErrors = {};

    // Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{4,}$/.test(formData.nombre.trim())) {
      newErrors.nombre = "El nombre solo puede contener letras y espacios.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido.";
    }

    // Teléfono
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{6,15}$/.test(formData.telefono)) {
      newErrors.telefono = "Debe contener solo números (mínimo 6 dígitos).";
    }

    // Tipo de evento
    if (!formData.tipoEvento)
      newErrors.tipoEvento = "Selecciona un tipo de evento.";

    // Fecha
    if (!formData.fecha) newErrors.fecha = "Selecciona una fecha.";

    // Mensaje
    if (!formData.mensaje.trim())
      newErrors.mensaje = "El mensaje es obligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      tipoEvento: formData.tipoEvento,
      fecha: formData.fecha,
      mensaje: formData.mensaje,
      enviado: new Date().toLocaleString("es-AR"),
    };

    try {
      // --- Enviar correo con EmailJS ---
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // --- Redirección a WhatsApp ---
      const mensaje =
        `Hola! Me contacto desde la web de Palacio San Juan.%0A%0A` +
        `Nombre: ${formData.nombre}%0A` +
        `Email: ${formData.email}%0A` +
        `Teléfono: ${formData.telefono}%0A` +
        `Tipo de evento: ${formData.tipoEvento}%0A` +
        `Fecha: ${formData.fecha}%0A` +
        `Mensaje: ${formData.mensaje}`;

      window.open(`https://wa.me/5491126496197?text=${mensaje}`, "_blank");

      alert("Tu consulta fue enviada correctamente.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoEvento: "",
        fecha: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className={`p-4 rounded shadow ${darkMode ? "bg-secondary" : "bg-white"}`}
    >
      <h4 className="mb-4">Solicita tu Presupuesto</h4>
      <form onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            placeholder="Nombre completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && (
            <small className="text-danger">{errors.nombre}</small>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        {/* Teléfono */}
        <div className="mb-3">
          <input
            type="tel"
            className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
            placeholder="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          {errors.telefono && (
            <small className="text-danger">{errors.telefono}</small>
          )}
        </div>

        {/* Tipo de evento */}
        <div className="mb-3">
          <select
            className={`form-select ${errors.tipoEvento ? "is-invalid" : ""}`}
            name="tipoEvento"
            value={formData.tipoEvento}
            onChange={handleChange}
            required
          >
            <option value="">Tipo de evento</option>
            <option>Boda</option>
            <option>XV Años</option>
            <option>Cumpleaños</option>
            <option>Evento Corporativo</option>
            <option>Otro</option>
          </select>
          {errors.tipoEvento && (
            <small className="text-danger">{errors.tipoEvento}</small>
          )}
        </div>

        {/* Fecha */}
        <div className="mb-3">
          <input
            type="date"
            className={`form-control ${errors.fecha ? "is-invalid" : ""}`}
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          {errors.fecha && (
            <small className="text-danger">{errors.fecha}</small>
          )}
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <textarea
            className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
            rows="4"
            placeholder="Cuéntanos sobre tu evento..."
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          {errors.mensaje && (
            <small className="text-danger">{errors.mensaje}</small>
          )}
        </div>

        <button
          type="submit"
          className="btn w-100 py-2 btn-contact"
          disabled={sending}
        >
          {sending ? "Enviando..." : "Enviar Consulta"}
        </button>
      </form>
    </div>
  );
};

// Sección completa con mapa y datos
const Contacto = ({ darkMode }) => {
  return (
    <section
      id="contacto"
      className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="contact-title display-5 text-dark mb-4">
              CONTÁCTANOS
            </h2>
            <p className="lead mb-4">Hagamos realidad tu evento soñado</p>

            <div className="mb-3 d-flex align-items-start">
              <MapPin size={24} className="me-3 mt-1" />
              <div>
                <h6 className="fw-bold">Dirección</h6>
                <p>Martín Rodríguez 520, Quilmes, Buenos Aires 1878</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Phone size={24} className="me-3 mt-1" />
              <div>
                <h6 className="fw-bold">Teléfono</h6>
                <p>+54 11 2649 6197</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Mail size={24} className="me-3 mt-1" />
              <div>
                <h6 className="fw-bold">Email</h6>
                <p className="mail-text">palaciosanjuaneventos@gmail.com</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <Clock size={24} className="me-3 mt-1" />
              <div>
                <h6 className="fw-bold">Horario de Atención (Cita Previa)</h6>
                <p>
                  Lunes a Viernes: 09:00 - 19:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="zoom-in">
            <SalonMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
