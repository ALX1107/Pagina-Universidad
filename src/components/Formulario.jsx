import { useState } from "react";
import '../assets/styles.css';

export default function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    carrera: "",
    ciudad: "",
    correo: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.mensaje || 'Error en la respuesta del servidor');
      }

      const data = await res.json();
      alert(`Respuesta backend: ${data.mensaje}\nDatos: ${JSON.stringify(data.datos)}`);
    } catch (error) {
      alert("Ocurrió un error al enviar el formulario: " + error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form">
        <p><h1>Formulario de información</h1></p>
        <p>Llena el siguiente formulario para recibir toda la informacion de la carrera de tu interes</p>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
      <select name="carrera" onChange={handleChange} required>
        <option value="">Seleccione carrera</option>
        <option value="ingenieria">Ingeniería</option>
        <option value="medicina">Matemática y Fisica</option>
        <option value="derecho">Derecho</option>
        <option value="economia">Economía</option>
        <option value="arquitectura">Arquitectura</option>
      </select>
      <input name="ciudad" placeholder="Ciudad" onChange={handleChange} required />
      <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}
