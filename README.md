# Pagina-Universidad
Proyecto final materia de programación web, Se tratade la pagina web de una universidad (UNIVERSIDAD CENTRAL)
Primero se debe ingresar a la carpeta Backend y en el archivo index.js en la siguiente parte :
---
try {
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'correoejemplo@gmail.com', "agrega en esta parte tu correo"
pass: 'contraseña',               "agrega en esta parte tu contraseña generada"
},
});
---
se debe agregar el correo electronico y la contraseña, desde la cual se enviara un archivo pdf que se encuentra guardada en al carpeta Pdfs, el archivo que se enviara sera segun la carrera que se seleccione en el formulario.
Para generar contraseñas para aplicaciones (también conocidas como "contraseñas de aplicación") en tu correo electrónico, necesitas acceder a la configuración de seguridad de tu cuenta. Aquí te dejo cómo hacerlo para los proveedores más comunes:

---

### **1. Gmail (Google)**

Las contraseñas de aplicación están disponibles **solo si tienes la verificación en dos pasos activada**.

**Pasos:**

1. Ve a [https://myaccount.google.com](https://myaccount.google.com)
2. Inicia sesión y ve a la sección **"Seguridad"**.
3. Activa la **verificación en dos pasos** si aún no lo has hecho.
4. Luego, vuelve a la sección de **Seguridad** y entra en **"Contraseñas de aplicación"**.
5. Selecciona la aplicación y el dispositivo que necesitas (por ejemplo: "Correo" y "Windows").
6. Google generará una contraseña única que puedes usar en esa app.

---

### **2. Outlook (Microsoft)**

También requiere que tengas la verificación en dos pasos activada.

**Pasos:**

1. Ve a [https://account.live.com/proofs/Manage](https://account.live.com/proofs/Manage)
2. Activa la **verificación en dos pasos** si no está activada.
3. Después, en la misma página, busca **"Contraseñas de aplicación"** o accede directamente a [https://account.live.com/AppPassword](https://account.live.com/AppPassword)
4. Haz clic en **"Crear una nueva contraseña"**.
5. Se generará una contraseña única para ingresar en la aplicación deseada.

---

### **3. Yahoo Mail**

También requiere verificación en dos pasos.

**Pasos:**

1. Ve a [https://login.yahoo.com/account/security](https://login.yahoo.com/account/security)
2. Activa la **verificación en dos pasos**.
3. Luego aparecerá la opción de **"Generar contraseña de aplicación"**.
4. Selecciona el nombre de la app (por ejemplo, Outlook o Thunderbird).
5. Yahoo te dará una contraseña para usar solo en esa aplicación.

---

Para visualizar la pagina se debe tener instalado Node 
En la terminal donde se ejecutaran los comandos se debe inicializar los siguientes comandos:
"npm run dev"
se debe abrir otra terminal se debe poner el siguiente comando:
"node backend/server.js"
