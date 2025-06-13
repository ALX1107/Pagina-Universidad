import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/img/logo Universidad.png"
              className="img"
              id="logo"
              width="120"
              height="80"
              alt="Logo Universidad"
            />{" "}
            Universidad Central
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/">Inicio</Link>
    </li >
    <li className="nav-item">
      <a className="nav-link" href="#Facultades">Facultades</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#form">Información</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contacto">Contacto</a>
    </li>
  </ul>
</div>

        </div>
      </nav>

      
    </header>
  );
}
