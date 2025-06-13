import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

app.post('/api/formulario', async (req, res) => {
  const { nombre, apellidos, carrera, ciudad, correo } = req.body;

  const archivoPath = path.join(__dirname, 'pdfs', `${carrera}.pdf`);
  if (!fs.existsSync(archivoPath)) {
    return res.status(404).json({ mensaje: 'No se encontró el archivo PDF.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ejemplocorreo@gmail.com',
        pass: 'contraseña',
      },
    });

    await transporter.sendMail({
      from: '"Admisiones Universidad" <condorimartinezalexander@gmail.com>',
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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
