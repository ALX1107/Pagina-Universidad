import { useState } from "react";
import { enviarFormulario } from "../api/formularioAPI";
import "../assets/styles.css";

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
    const data = await enviarFormulario(formulario);
    alert(`Respuesta backend: ${data.mensaje}`);
  } catch (error) {
    alert("Ocurrió un error al enviar el formulario: " + error.message);
    console.error(error);
  }
};

  return (
    <form onSubmit={handleSubmit} id="form">
      <h1>Formulario de información</h1>
      <p>Llena el siguiente formulario para recibir toda la información de la carrera de tu interés</p>

      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
      <select name="carrera" onChange={handleChange} required>
        <option value="">Seleccione carrera</option>
        <option value="ingenieria">Ingeniería</option>
        <option value="matematica">Matemática y Física</option>
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
