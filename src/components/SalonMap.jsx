import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import salonImage from "../assets/images/dali.webp"; // cambia si tu imagen tiene otro nombre o ruta

// Icono personalizado del marcador
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const SalonMap = () => {
  // Coordenadas del salón (Quilmes)
  const position = [-34.720123, -58.256789];

  return (
    <div
      style={{ height: "400px", width: "100%" }}
      className="rounded overflow-hidden shadow"
    >
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Capa base del mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Marcador con popup */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <img
                src={salonImage}
                alt="Fachada Palacio San Juan"
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
              />
              <strong>Palacio San Juan</strong>
              <p style={{ margin: 0 }}>
                Martín Rodríguez 520, Quilmes, Buenos Aires 1878
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SalonMap;
