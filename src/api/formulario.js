import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ mensaje: "Método no permitido" });
  }

  const { nombre, apellidos, carrera, ciudad, correo } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // URL pública del PDF desde la carpeta /public
    const pdfUrl = `https://${process.env.VERCEL_URL}/pdfs/${carrera}.pdf`;

    await transporter.sendMail({
      from: `"Admisiones Universidad" <${process.env.EMAIL_USER}>`,
      to: correo,
      subject: `Información sobre la carrera de ${carrera}`,
      text: `Hola ${nombre},\n\nGracias por tu interés en ${carrera}. Te adjuntamos un PDF con la información solicitada.\n\nSaludos cordiales.`,
      attachments: [
        {
          filename: `${carrera}.pdf`,
          href: pdfUrl,  // Nodemailer descarga el PDF desde la URL pública
        },
      ],
    });

    res.status(200).json({ mensaje: "Formulario enviado correctamente. Revisa tu correo." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ mensaje: "Error al enviar el correo." });
  }
}
