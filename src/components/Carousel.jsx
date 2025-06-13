import React from 'react';
import "../assets/styles.css";

export default function Carousel({ id, images }) {
  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1500" // tiempo en milisegundos
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? ' active' : ''}`}
          >
            <img src={img.src} className="d-block w-100" alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
