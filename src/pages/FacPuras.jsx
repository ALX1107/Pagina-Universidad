import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function FacPuras() {
  return (
   <div className="facultad-page">
  <div className="facultad-header">
    <h1>Facultad de Ciencias Puras y Naturales</h1>
    <p>
      Esta facultad es el corazón del pensamiento científico en la Universidad Central. Forma profesionales con una sólida base teórica y experimental en las ciencias fundamentales, capaces de investigar, innovar y resolver problemas complejos que impactan en la tecnología, la salud, el medio ambiente y la educación. Aquí se cultiva la curiosidad, el rigor y la pasión por descubrir cómo funciona el universo.
    </p>
  </div>

  <div className="facultad-content">
    <h2>Programas que ofrece:</h2>
    <ul>
      <li>
        <strong>Matemática:</strong> Enfocada en el análisis, la abstracción y la modelación de fenómenos. Forma expertos en álgebra, análisis, estadística y matemáticas aplicadas, con aplicaciones en ciencia, tecnología y finanzas.
        <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Neurons_in_the_brain.jpg/640px-Neurons_in_the_brain.jpg" alt="Matemáticas" style={{ width: '100%', maxWidth: '500px', marginTop: '10px', borderRadius: '8px' }} />
      </li>
      <li>
        <strong>Física:</strong> Explora las leyes fundamentales del universo, desde la mecánica clásica hasta la física cuántica. Prepara investigadores y profesionales para laboratorios, centros tecnológicos y proyectos de innovación científica.
        <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Particle_collision_event.jpg/640px-Particle_collision_event.jpg" alt="Física" style={{ width: '100%', maxWidth: '500px', marginTop: '10px', borderRadius: '8px' }} />
      </li>
      <li>
        <strong>Química:</strong> Estudia la estructura, propiedades y transformaciones de la materia. Los estudiantes se forman en química orgánica, inorgánica, analítica y ambiental, con énfasis en investigación y aplicación industrial.
        <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chemical_equilibrium_lab.jpg/640px-Chemical_equilibrium_lab.jpg" alt="Química" style={{ width: '100%', maxWidth: '500px', marginTop: '10px', borderRadius: '8px' }} />
      </li>
      <li>
        <strong>Biología:</strong> Aborda la vida en todas sus formas, desde la genética molecular hasta la ecología. El programa integra biotecnología, bioinformática y conservación ambiental, formando biólogos comprometidos con el planeta.
        <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Plant_cell_structure-en.svg/640px-Plant_cell_structure-en.svg.png" alt="Biología" style={{ width: '100%', maxWidth: '500px', marginTop: '10px', borderRadius: '8px' }} />
      </li>
    </ul>

    <h2>Actividades Destacadas:</h2>
    <ul className="actividades-lista">
      <li>🔬 Olimpiadas científicas interuniversitarias</li>
      <li>🧪 Proyectos de laboratorio en física, química y biología</li>
      <li>📊 Modelación matemática aplicada a problemas reales</li>
      <li>🌱 Salidas de campo para estudios ecológicos y biodiversidad</li>
      <li>🧬 Talleres de biotecnología y bioinformática</li>
      <li>📚 Publicaciones estudiantiles en revistas científicas</li>
      <li>🧠 Clubes de ciencia y cafés académicos</li>
      <li>💡 Participación en ferias de innovación y ciencia abierta</li>
    </ul>
  </div>

  <div className="volver-inicio">
    <Link to="/">← Llena el Formulario para recibir más información de costos y pensum de la carrera</Link>
  </div>
</div>

  );
}
