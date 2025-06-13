import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function FacIng() {
  return (
    <div className="facultad-page">
  <div className="facultad-header">
    <h1>Facultad de Ingeniería</h1>
    <p>
      La Facultad de Ingeniería de la Universidad Central impulsa la formación de profesionales visionarios, capaces de diseñar, construir y liderar soluciones tecnológicas e infraestructurales que transformen el entorno. Con un enfoque práctico, ético y multidisciplinario, nuestros programas preparan a los estudiantes para enfrentar los desafíos de un mundo en constante evolución.
    </p>
  </div>

  <div className="facultad-content">
    <h2>Programas que ofrece:</h2>
    <ul>
      <li>
        <strong>Ingeniería en Sistemas:</strong> Forma expertos en desarrollo de software, inteligencia artificial, ciberseguridad y análisis de datos. Los estudiantes adquieren habilidades para liderar la transformación digital y crear soluciones tecnológicas innovadoras en diversos sectores.
      </li>
      <li>
        <strong>Ingeniería Civil:</strong> Prepara profesionales para diseñar, construir y gestionar obras de infraestructura como puentes, edificios, carreteras y sistemas hidráulicos. Se enfatiza el uso de tecnologías modernas, sostenibilidad y responsabilidad social en cada proyecto.
      </li>
    </ul>

    <h2>Actividades Destacadas:</h2>
    <ul className="actividades-lista">
      <li>🛠️ Proyectos de innovación tecnológica interdisciplinarios</li>
      <li>📡 Hackatones y competencias de programación</li>
      <li>🏗️ Simulaciones de diseño estructural y modelado BIM</li>
      <li>🔬 Ferias de ciencia, tecnología y emprendimiento</li>
      <li>🌐 Talleres de inteligencia artificial y ciberseguridad</li>
      <li>📐 Prácticas en laboratorios de materiales, hidráulica y redes</li>
      <li>🧠 Conferencias con expertos en ingeniería y tecnología</li>
      <li>🚧 Visitas técnicas a obras civiles y centros de innovación</li>
    </ul>
  </div>

  <div className="volver-inicio">
    <Link to="/">← Llena el Formulario para recibir mas informacion de costos y pensum  de la carrera  </Link>
  </div>
</div>

  );
}
