import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv'; // <-- para manejar variables de entorno

dotenv.config(); // Carga variables del archivo .env

// Simulación de __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ============================
// 🔐 CONFIGURACIÓN DE CORS
// ============================
// Permitimos solicitudes desde tu dominio y desde localhost (para desarrollo)
app.use(cors({
  origin: [
    'http://localhost:5173',            // entorno local
    'https://pagina-universidad-six.vercel.app' // dominio desplegado
  ],
  methods: ['GET', 'POST'],
}));

// ============================
// 📦 MIDDLEWARES
// ============================
app.use(bodyParser.json());

// ============================
// 📩 RUTA DEL FORMULARIO
// ============================
app.post('/api/formulario', async (req, res) => {
  const { nombre, apellidos, carrera, ciudad, correo } = req.body;

  const archivoPath = path.join(__dirname, 'pdfs', `${carrera}.pdf`);

  if (!fs.existsSync(archivoPath)) {
    return res.status(404).json({ mensaje: 'No se encontró el archivo PDF.' });
  }

  try {
    // ============================
    // ⚙️ CONFIGURAR NODEMAILER
    // ============================
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // correo guardado en variable de entorno
        pass: process.env.EMAIL_PASS, // contraseña de aplicación (NO se pone en el código)
      },
    });

    await transporter.sendMail({
      from: `"Admisiones Universidad" <${process.env.EMAIL_USER}>`,
      to: correo,
      subject: `Información sobre la carrera de ${carrera}`,
      text: `Hola ${nombre},\n\nGracias por tu interés en la carrera de ${carrera}. Te adjuntamos un PDF con la información solicitada.\n\nSaludos cordiales.`,
      attachments: [
        {
          filename: `${carrera}.pdf`,
          path: archivoPath,
        },
      ],
    });

    res.json({ mensaje: 'Formulario enviado correctamente. Revisa tu correo.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ mensaje: 'Error al enviar el correo.' });
  }
});

// ============================
// 🚀 INICIO DEL SERVIDOR
// ============================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
