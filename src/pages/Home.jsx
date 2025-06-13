// ./pages/Home.jsx
import Carousel from '../components/Carousel';
import TextoDerecha from '../components/TextoDerecha';
import MisionVision from '../components/MisionVision';
import Facultades from '../components/facultades';
import Formulario from '../components/Formulario';
import NombreU from '../components/NombreU';

import '../App.css';
import '../assets/styles.css';
export default function Home({ aulasImages, canchasImages, laboratoriosImages }) {
  return (
    <>
    <NombreU/>
      <main className="instalaciones-section">
        <h2>Conoce Nuestras Instalaciones</h2>
        <div className="instalaciones-contenedor">
          <div className="d-flex flex-column gap-4">
            <div className="caja-carrusel">
              <Carousel id="carouselAulas" images={aulasImages} />
            </div>
            <div className="caja-carrusel">
              <Carousel id="carouselCanchas" images={canchasImages} />
            </div>
            <div className="caja-carrusel">
              <Carousel id="carouselLaboratorios" images={laboratoriosImages} />
            </div>
          </div>
          <div className="texto-derecha-container">
            <TextoDerecha />
          </div>
        </div>
      </main>
      <MisionVision />
      <Facultades />
      <Formulario />
    </>
  );
}
