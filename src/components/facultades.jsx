import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function Facultades() {
  const facultades = [
    {
      img: "/img/Grace in Motion.jfif",
      texto: "FACULTAD CIENCIAS POLITICAS Y DERECHO",
      link: "/FacPol",
    },
    {
      img: "/img/Engineering aesthetic.jfif",
      texto: "FACULTAD DE INGENIERIA",
      link: "/FacIng",
    },
    {
      img: "/img/descarga (1).jfif",
      texto: "FACULTAD DE CIENCIAS PURAS",
      link: "/FacPuras",
    },
    {
      img: "/img/descarga (2).jfif",
      texto: "FACULTAD CIENCIAS FINANCIERAS",
      link: "/FacFin",
    },
  ];

  return (
    <section className="facultades-section" id="Facultades">
      <div className="facultades-container">
        <h1 className="facultades-title">FACULTADES</h1>
        <div className="facultades-grid">
          {facultades.map((fac, index) => (
            <div className="facultad-card" key={index}>
              <img src={fac.img} alt="imagen facultad" className="facultad-img" />
              <div className="facultad-hover">
                <Link to={fac.link}>
                  <img src="/img/objectselect_104418.png" alt="icono" className="hover-icon" />
                </Link>
                <p>{fac.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
