# 🚀 Plataforma Educativa - Tecnología IES Martín Rivero

Un portal web moderno, rápido y dinámico diseñado específicamente para el departamento de **Tecnología, Digitalización, Informática y Robótica** del IES Martín Rivero.

![Estado](https://img.shields.io/badge/Estado-Desarrollo_Activo-success)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Modern_Build-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-BaaS-FFCA28?logo=firebase&logoColor=black)

---

## 🎯 Descripción del Proyecto

Esta plataforma interactiva sirve como punto de encuentro entre docentes y alumnos. Permite acceder de forma estructurada e intuitiva a todo el material educativo de los cursos (ESO y Bachillerato), incluyendo:

- 📚 **Temarios y Apuntes:** Acceso rápido y organizado por curso.
- 🎥 **Vídeos Interactivos:** Visualización de contenido multimedia directamente en la plataforma.
- 💾 **Descargas:** Archivos PDF, esquemas y recursos didácticos.
- 🎨 **Diseño Premium:** Interfaz de usuario moderna utilizando principios de *Glassmorphism*, modo oscuro optimizado, y animaciones fluidas para atrapar la atención del alumno.

---

## 🛠️ Tecnologías Usadas

El proyecto está construido con un stack moderno, pensado para ser rápido y fácilmente desplegable en plataformas como **Vercel** o **Firebase Hosting**:

- **Frontend:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Rendimiento ultra rápido)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + UI Tokens modernos
- **Componentes:** Basados en [Radix UI](https://www.radix-ui.com/) y estructura [Shadcn UI](https://ui.shadcn.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Enrutamiento:** [React Router v6](https://reactrouter.com/)
- **Backend (BaaS):** [Firebase](https://firebase.google.com/) (Firestore para la base de datos y Auth)

---

## 📸 Capturas de Pantalla

> *(Nota: Sube tus capturas a la carpeta del repositorio y actualiza las rutas a continuación)*

![Vista Principal del Portal](./preview.png)

*(Añade más capturas mostrando los temas, el reproductor de vídeo y la sección móvil)*

---

## ⚙️ Cómo ejecutarlo en entorno local

Sigue estos pasos para arrancar el proyecto en tu propio ordenador:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/ies-martin-rivero-tecnologia.git
   cd ies-martin-rivero-tecnologia
   ```

2. **Instala las dependencias necesarias:**
   ```bash
   npm install
   ```

3. **Configura tus credenciales:**
   - Asegúrate de tener tu configuración de Firebase en `src/config/firebase.js` si la base de datos es privada.

4. **Arranca el entorno de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Visualiza la aplicación:**
   - Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador preferido.

---

## 🌍 Despliegue en Vercel

Dado que quieres alojarlo en Vercel, el proceso es muy directo:
1. Inicia sesión en [Vercel](https://vercel.com).
2. Selecciona **"Add New Project"** e importa este repositorio desde GitHub.
3. El _Framework Preset_ debería detectarse automáticamente como **Vite**.
4. Deja el comando de compilación por defecto (`npm run build`) y la carpeta de salida (`dist`).
5. ¡Haz click en **Deploy** y tu web estará online en minutos!

---
*Desarrollado con ❤️ para transformar la educación tecnológica.*
