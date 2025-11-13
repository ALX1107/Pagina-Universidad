export const enviarFormulario = async (formulario) => {
  const res = await fetch("http://localhost:3001/api/formulario", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formulario),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.mensaje || "Error en la respuesta del servidor");
  }

  return await res.json();
};
