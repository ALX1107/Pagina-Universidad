import React from "react";
import "../assets/styles.css"; // Asegúrate de tener este CSS importado

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <h4 className="footer-heading">CONTÁCTANOS:</h4>

        <div className="footer-info">
          <h5>Número de celular:</h5>
          <p>7458792</p>
        </div>

        <div className="footer-info">
          <h5>Email:</h5>
          <p>universidadCentral@gmail.com</p>
        </div>

        <div className="footer-info">
          <h5>Ubicación:</h5>
          <p>Av. Arce Nro. 4561</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; ALEXCM DESIGN | ALEXANDER CONDORI</p>
      </div>
    </footer>
  );
}
