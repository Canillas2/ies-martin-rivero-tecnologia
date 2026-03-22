# 🚀 Guía Rápida de Despliegue - Martín Rivero Tecnología

## Pasos para Desplegar en Firebase

### 1. Configurar Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto llamado `martin-rivero-tecnologia`
3. Habilita los siguientes servicios:
   - **Authentication** → Email/Password
   - **Firestore Database** → Modo producción
   - **Hosting**
   - **Analytics** (opcional)

### 2. Obtener Configuración de Firebase

1. En Firebase Console, ve a **Project Settings** (⚙️)
2. Scroll down hasta "Your apps"
3. Click en el icono web `</>`
4. Registra la app con nombre "martin-rivero-tecnologia-web"
5. Copia la configuración que aparece

### 3. Actualizar Configuración Local

Edita `src/config/firebase.js` y reemplaza con tu configuración:

```javascript
export const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
  measurementId: "G-XXXXXXXXXX"
};
```

### 4. Instalar Dependencias

```bash
cd martin-rivero-tecnologia
npm install
```

### 5. Instalar y Configurar Firebase CLI

```bash
# Instalar Firebase Tools globalmente
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar Firebase en el proyecto
firebase init
```

Durante `firebase init`, selecciona:
- ✅ Firestore
- ✅ Hosting
- Proyecto: Selecciona el que creaste
- Firestore rules: `firestore.rules` (ya existe)
- Firestore indexes: `firestore.indexes.json` (ya existe)
- Public directory: `dist`
- Single-page app: **Yes**
- GitHub deploys: No (por ahora)

### 6. Poblar Base de Datos

```bash
node scripts/seedDatabase.js
```

Esto creará:
- ✅ Usuario admin (admin@martinriverotecnologia.es / Admin1234)
- ✅ 6 cursos
- ✅ 11 asignaturas
- ✅ 12 temas de ejemplo

### 7. Desplegar Reglas de Firestore

```bash
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

### 8. Construir la Aplicación

```bash
npm run build
```

Esto generará la carpeta `dist/` con la aplicación optimizada.

### 9. Desplegar en Firebase Hosting

```bash
firebase deploy --only hosting
```

O usar el script npm:
```bash
npm run deploy
```

### 10. Acceder a tu Aplicación

Tras el despliegue, verás URLs como:
- **Hosting URL**: `https://tu-proyecto.web.app`
- **Hosting URL alternativa**: `https://tu-proyecto.firebaseapp.com`

## 🔐 Credenciales de Administrador

Por defecto:
- **Email**: admin@martinriverotecnologia.es
- **Contraseña**: Admin1234

⚠️ **IMPORTANTE**: Cambia estas credenciales en producción.

## 🧪 Probar Localmente Antes de Desplegar

```bash
# Desarrollo local
npm run dev
# Abre http://localhost:5173

# Probar build de producción
npm run build
npm run preview
# Abre http://localhost:4173
```

## 📊 Verificar Despliegue

1. Abre la URL de hosting
2. Verifica que la página carga correctamente
3. Prueba el dark mode
4. Navega por los cursos y asignaturas
5. Intenta hacer login en `/login`
6. Accede al panel admin en `/admin`

## ❌ Solución de Problemas Comunes

### Error: "Firebase not configured"
- Verifica que `src/config/firebase.js` tenga tu configuración real
- Asegúrate de haber guardado los cambios

### Error: "Permission denied" en Firestore
- Despliega las reglas: `firebase deploy --only firestore:rules`
- Verifica que el usuario tenga rol `admin` en Firestore

### Error: "Module not found"
- Ejecuta `npm install` de nuevo
- Borra `node_modules` y `package-lock.json`, luego `npm install`

### Error en PowerShell (Windows)
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Build falla
- Verifica que todas las dependencias estén instaladas
- Revisa errores en la consola
- Asegúrate de tener Node.js 18+

## 🔄 Actualizar Contenido

Para actualizar contenido después del despliegue:
1. Modifica los archivos necesarios
2. `npm run build`
3. `firebase deploy --only hosting`

Para actualizar reglas de Firestore:
1. Edita `firestore.rules`
2. `firebase deploy --only firestore:rules`

## 📱 Próximos Pasos

- [ ] Personalizar contenidos en Firestore
- [ ] Cambiar credenciales de admin
- [ ] Configurar dominio personalizado (opcional)
- [ ] Implementar CRUD completo en panel admin
- [ ] Añadir Google Analytics
- [ ] Configurar notificaciones por email

## 🆘 Soporte

Si encuentras problemas:
1. Revisa la [documentación de Firebase](https://firebase.google.com/docs)
2. Consulta el README.md del proyecto
3. Revisa los logs: `firebase functions:log`

---

**¡Listo! Tu aplicación educativa está en la web 🎉**
