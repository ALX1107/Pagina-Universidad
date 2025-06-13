import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function FacPol() {
  return (
    <div className="facultad-page">
      <div className="facultad-header">
        <h1>Facultad de Ciencias Políticas y Derecho</h1>
        <p>
          Esta facultad forma profesionales comprometidos con la justicia, la democracia y la participación ciudadana, capaces de transformar la sociedad a través del conocimiento del derecho y la política.
        </p>
      </div>

      <div className="facultad-content">
  <h2>Programas que ofrece:</h2>
  <ul>
    <li>Derecho</li>
    <li>Ciencias Políticas</li>
    <li>Relaciones Internacionales</li>
  </ul>

  <h2>Sobre la carrera de Derecho:</h2>
  <p>
    La carrera de Derecho forma profesionales con pensamiento crítico, responsabilidad social y una sólida formación
    jurídica. A lo largo de la carrera, los estudiantes exploran temas como derecho civil, penal, constitucional,
    internacional, ambiental, corporativo y derechos humanos, además de herramientas modernas como la mediación, el
    arbitraje y el análisis jurisprudencial. Aprenden a utilizar el poder de la palabra y la ley para defender causas
    justas y transformar realidades.
  </p>

  <h2>Actividades Destacadas:</h2>
  <ul className="actividades-lista">
    <li>⚖️ Simulacros de juicios orales</li>
    <li>🧠 Foros de debate jurídico y político</li>
    <li>📚 Talleres de análisis de jurisprudencia</li>
    <li>🌍 Modelos de Naciones Unidas</li>
    <li>🗣️ Club de oratoria y argumentación legal</li>
    <li>📝 Publicaciones en revistas académicas de Derecho</li>
    <li>🤝 Atención jurídica comunitaria en clínicas legales</li>
    <li>👩‍⚖️ Participación en concursos nacionales e internacionales</li>
  </ul>

  <blockquote className="frase-inspiradora">
    “El Derecho no solo se estudia, se vive. Es la herramienta para construir justicia en cada rincón del mundo.”
  </blockquote>
</div>


      <div className="volver-inicio">
        <Link to="/">← Llena el Formulario para recibir mas informacion de costos y pensum  de la carrera  </Link>
      </div>
    </div>
  );
}
