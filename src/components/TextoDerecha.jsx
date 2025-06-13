import React from 'react';
import "../assets/styles.css";

export default function TextoDerecha() {
  return (
    <div className="texto-derecha-container">
      <div className="texto-caja">
        <h2>Aulas</h2>
        <p>
          Contamos con aulas equipadas con proyector, pizarra acrílica y sillas ergonómicas. Espacios cómodos y bien iluminados.
        </p>
      </div>

      <div className="texto-caja">
        <h2>Cancha Deportiva</h2>
        <p>
          Nuestra cancha multifuncional permite practicar diversas disciplinas como fútbol, voleibol y básquet.
        </p>
      </div>

      <div className="texto-caja">
        <h2>Laboratorio</h2>
        <p>
          El laboratorio está equipado con computadoras modernas, conexión a internet y software especializado.
        </p>
      </div>
    </div>
  );
}
