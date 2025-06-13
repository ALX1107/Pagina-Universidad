import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function FacFin() {
  return (
    <div className="facultad-page">
      <div className="facultad-header">
  <h1>Facultad de Ciencias Financieras</h1>
  <p>
    La Facultad de Ciencias Financieras forma líderes con visión estratégica, dominio técnico y pensamiento analítico, capaces de transformar organizaciones a través de la gestión contable, económica y financiera. Nuestros programas combinan teoría sólida con práctica aplicada, preparando profesionales para enfrentar los desafíos del entorno global.
  </p>
</div>

<div className="facultad-content">
  <h2>Programas que ofrece:</h2>
  <ul>
    <li><strong>Contaduría Pública:</strong> Enfocada en la gestión de información financiera, auditoría, tributación y control interno. Forma profesionales éticos y confiables, capaces de generar valor en empresas públicas y privadas.</li>
    <li><strong>Economía:</strong> Brinda herramientas para analizar fenómenos económicos, formular políticas públicas y asesorar en decisiones estratégicas. El egresado domina modelos cuantitativos y tiene una visión crítica del desarrollo.</li>
    <li><strong>Administración Financiera:</strong> Prepara expertos en planificación, inversión, análisis de riesgos y gestión de recursos. Ideal para quienes desean liderar áreas financieras en empresas o emprender con solidez técnica.</li>
  </ul>

  <h2>Actividades Destacadas:</h2>
  <ul className="actividades-lista">
    <li>📊 Simulaciones de bolsa y mercados financieros</li>
    <li>📈 Análisis de estados financieros reales</li>
    <li>💼 Talleres de planificación tributaria y fiscal</li>
    <li>🌐 Foros de coyuntura económica nacional e internacional</li>
    <li>🧮 Olimpiadas contables y financieras</li>
    <li>📚 Publicación de boletines económicos estudiantiles</li>
    <li>🤝 Prácticas profesionales en entidades financieras y auditoras</li>
    <li>💡 Proyectos de educación financiera comunitaria</li>
  </ul>
</div>

<div className="volver-inicio">
  <Link to="/">← Volver al inicio</Link>
</div>

    </div>
  );
}
