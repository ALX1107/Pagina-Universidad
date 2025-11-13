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

    await transporter.sendMail({
      from: `"Admisiones Universidad" <${process.env.EMAIL_USER}>`,
      to: correo,
      subject: `Información sobre la carrera de ${carrera}`,
      text: `Hola ${nombre}, gracias por tu interés en ${carrera}.`,
    });

    res.status(200).json({ mensaje: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al enviar el correo" });
  }
}
