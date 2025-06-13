import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NombreU from './components/NombreU';
import FacFin from './pages/FacFin';
import FacIng from './pages/FacIng';
import FacPol from './pages/FacPol';
import FacPuras from './pages/FacPuras';
import Home from './pages/Home';

import './App.css';
import './assets/styles.css';

function App() {
  const aulasImages = [
    { src: '/img/aula1.jfif', alt: 'Aula 1' },
    { src: '/img/aula2.jpg', alt: 'Aula 2' },
    { src: '/img/aula3.jpg', alt: 'Aula 3' },
  ];

  const canchasImages = [
    { src: '/img/c1.png', alt: 'Cancha 1' },
    { src: '/img/c2.png', alt: 'Cancha 2' },
    { src: '/img/c3.png', alt: 'Cancha 3' },
  ];

  const laboratoriosImages = [
    { src: '/img/bib1.jpg', alt: 'Laboratorio 1' },
    { src: '/img/bib2.jfif', alt: 'Laboratorio 2' },
    { src: '/img/bib3.jpg', alt: 'Laboratorio 3' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
    
        <Route
          path="/"
          element={
            <Home
              aulasImages={aulasImages}
              canchasImages={canchasImages}
              laboratoriosImages={laboratoriosImages}
            />
          }
        />
        <Route path="/FacFin" element={<FacFin />} />
        <Route path="/FacIng" element={<FacIng />} />
        <Route path="/FacPol" element={<FacPol />} />
        <Route path="/FacPuras" element={<FacPuras />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
