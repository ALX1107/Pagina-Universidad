import express from 'express'; // Importa el framework Express.js para construir el servidor web.
import cors from 'cors'; // Importa el middleware 'cors' para manejar las políticas de seguridad de CORS (Cross-Origin Resource Sharing).
import bodyParser from 'body-parser'; // Importa 'body-parser' para analizar los cuerpos de las solicitudes HTTP, especialmente JSON.
import nodemailer from 'nodemailer'; // Importa Nodemailer, una librería para enviar correos electrónicos desde Node.js.
import path from 'path'; // Importa el módulo 'path' para trabajar con rutas de archivos y directorios.
import fs from 'fs'; // Importa el módulo 'fs' (File System) para interactuar con el sistema de archivos (ej. verificar si un archivo existe).
import { fileURLToPath } from 'url'; // Importa 'fileURLToPath' para obtener la ruta del archivo a partir de una URL (necesario para ES Modules).
import { dirname } from 'path'; // Importa 'dirname' para obtener el directorio de una ruta de archivo.

// Para __dirname en ES Modules
// En módulos ES (como este), __dirname y __filename no están disponibles globalmente.
// Estas líneas de código simulan su comportamiento.
const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual.
const __dirname = dirname(__filename); // Obtiene el directorio del archivo actual.

const app = express(); // Crea una instancia de la aplicación Express.
const PORT = 3001; // Define el puerto en el que el servidor escuchará las solicitudes.

// Configuración de Middlewares
// Habilita CORS para permitir solicitudes desde 'http://localhost:5173'.
// Esto es crucial para que un frontend en ese puerto pueda comunicarse con este backend.
app.use(cors({ origin: 'http://localhost:5173' }));
// Usa body-parser para analizar los cuerpos de las solicitudes entrantes como JSON.
// Esto permite acceder a los datos del formulario a través de req.body.
app.use(bodyParser.json());

// Definición de la ruta POST para el formulario de admisión.
// Esta ruta se activará cuando se envíe una solicitud POST a '/api/formulario'.
app.post('/api/formulario', async (req, res) => {
  // Desestructura los datos enviados en el cuerpo de la solicitud (desde el formulario).
  const { nombre, apellidos, carrera, ciudad, correo } = req.body;

  // Construye la ruta completa al archivo PDF basado en la carrera seleccionada.
  // Se espera que los PDFs estén en la carpeta 'pdfs' dentro del directorio del servidor.
  const archivoPath = path.join(__dirname, 'pdfs', `${carrera}.pdf`);

  // Verifica si el archivo PDF existe en la ruta especificada.
  if (!fs.existsSync(archivoPath)) {
    // Si el PDF no se encuentra, envía una respuesta de error 404 (No Encontrado) al cliente.
    return res.status(404).json({ mensaje: 'No se encontró el archivo PDF.' });
  }

  try {
    // Configura el transportador de Nodemailer para enviar correos usando Gmail.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Especifica el servicio de correo, en este caso Gmail.
      auth: {
        // Credenciales de autenticación para la cuenta de Gmail.
        // NOTA: 'pass' debe ser una contraseña de aplicación generada por Google, no la contraseña de tu cuenta.
        user: 'correoejemplo@gmail.com', // Dirección de correo del remitente.
        pass: 'contraseña', // Contraseña de aplicación.
      },
    });

    // Envía el correo electrónico de forma asíncrona.
    await transporter.sendMail({
      from: '"Admisiones Universidad" <condorimartinezalexander@gmail.com>', // Remitente del correo con un nombre amigable.
      to: correo, // Destinatario del correo (la dirección proporcionada en el formulario).
      subject: `Información sobre la carrera de ${carrera}`, // Asunto del correo, personalizado con la carrera.
      text: `Hola ${nombre},\n\nGracias por tu interés en la carrera de ${carrera}. Te adjuntamos un PDF con la información solicitada.\n\nSaludos cordiales.`, // Cuerpo del correo en texto plano.
      attachments: [
        {
          filename: `${carrera}.pdf`, // Nombre del archivo adjunto tal como aparecerá en el correo.
          path: archivoPath, // Ruta local del archivo PDF a adjuntar.
        },
      ],
    });

    // Si el correo se envía correctamente, envía una respuesta de éxito 200 OK al cliente.
    res.json({ mensaje: 'Formulario enviado correctamente. Revisa tu correo.' });
  } catch (error) {
    // Si ocurre un error durante el envío del correo:
    console.error('Error al enviar el correo:', error); // Registra el error en la consola del servidor para depuración.
    // Envía una respuesta de error 500 (Error Interno del Servidor) al cliente.
    res.status(500).json({ mensaje: 'Error al enviar el correo.' });
  }
});

// Inicia el servidor Express para que escuche las solicitudes en el puerto especificado.
app.listen(PORT, () => {
  // Cuando el servidor se inicia exitosamente, imprime un mensaje en la consola.
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});