# 🗂️ Estructura del Proyecto - Martín Rivero Tecnología

```
martin-rivero-tecnologia/
│
├── 📄 CHECKLIST.md              # Checklist de implementación
├── 📄 DEPLOYMENT.md             # Guía de despliegue
├── 📄 INSTRUCCIONES.md          # Instrucciones inmediatas
├── 📄 README.md                 # Documentación completa
├── 📄 RESUMEN.md                # Resumen ejecutivo
│
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 firebase.json             # Configuración Firebase
├── 📄 firestore.indexes.json   # Índices Firestore
├── 📄 firestore.rules           # Reglas de seguridad
├── 📄 index.html                # HTML principal
├── 📄 package.json              # Dependencias y scripts
├── 📄 postcss.config.js         # Configuración PostCSS
├── 📄 tailwind.config.js        # Configuración Tailwind
├── 📄 vite.config.js            # Configuración Vite
│
├── 📁 scripts/
│   └── 📄 seedDatabase.js       # Script para poblar BD
│
└── 📁 src/
    │
    ├── 📄 App.jsx               # Componente principal
    ├── 📄 main.jsx              # Punto de entrada
    ├── 📄 index.css             # Estilos globales
    │
    ├── 📁 components/
    │   │
    │   ├── 📁 ui/               # Componentes Shadcn UI
    │   │   ├── 📄 accordion.jsx
    │   │   ├── 📄 badge.jsx
    │   │   ├── 📄 breadcrumb.jsx
    │   │   ├── 📄 button.jsx
    │   │   ├── 📄 card.jsx
    │   │   ├── 📄 input.jsx
    │   │   ├── 📄 skeleton.jsx
    │   │   └── 📄 switch.jsx
    │   │
    │   ├── 📄 BreadcrumbNav.jsx # Navegación jerárquica
    │   ├── 📄 Footer.jsx        # Pie de página
    │   ├── 📄 Navbar.jsx        # Barra de navegación
    │   └── 📄 ProtectedRoute.jsx # Protección de rutas
    │
    ├── 📁 config/
    │   └── 📄 firebase.js       # Configuración Firebase
    │
    ├── 📁 contexts/
    │   ├── 📄 AuthContext.jsx   # Contexto autenticación
    │   └── 📄 ThemeContext.jsx  # Contexto tema
    │
    ├── 📁 lib/
    │   ├── 📄 firebase.js       # Inicialización Firebase
    │   └── 📄 utils.js          # Utilidades
    │
    └── 📁 pages/
        ├── 📄 AdminDashboard.jsx    # Panel admin
        ├── 📄 AsignaturaPage.jsx    # Vista asignatura
        ├── 📄 ContactoPage.jsx      # Página contacto
        ├── 📄 DepartamentoPage.jsx  # Página departamento
        ├── 📄 Home.jsx              # Página inicio
        ├── 📄 LoginPage.jsx         # Página login
        └── 📄 RecursosPage.jsx      # Página recursos
```

---

## 📊 Resumen por Categorías

### 📄 Documentación (5 archivos)
- CHECKLIST.md
- DEPLOYMENT.md
- INSTRUCCIONES.md
- README.md
- RESUMEN.md

### ⚙️ Configuración (9 archivos)
- .gitignore
- firebase.json
- firestore.indexes.json
- firestore.rules
- index.html
- package.json
- postcss.config.js
- tailwind.config.js
- vite.config.js

### 🎨 Componentes UI (8 archivos)
- accordion.jsx
- badge.jsx
- breadcrumb.jsx
- button.jsx
- card.jsx
- input.jsx
- skeleton.jsx
- switch.jsx

### 🧩 Componentes Principales (4 archivos)
- BreadcrumbNav.jsx
- Footer.jsx
- Navbar.jsx
- ProtectedRoute.jsx

### 📱 Páginas (7 archivos)
- AdminDashboard.jsx
- AsignaturaPage.jsx
- ContactoPage.jsx
- DepartamentoPage.jsx
- Home.jsx
- LoginPage.jsx
- RecursosPage.jsx

### 🔧 Utilidades y Core (8 archivos)
- App.jsx
- main.jsx
- index.css
- firebase.js (config)
- firebase.js (lib)
- utils.js
- AuthContext.jsx
- ThemeContext.jsx

### 📜 Scripts (1 archivo)
- seedDatabase.js

---

## 🎯 Flujo de Navegación

```
┌─────────────────────────────────────────────────────────┐
│                     NAVBAR (Sticky)                      │
│  Logo | Inicio | Departamento | Cursos ▼ | Recursos |   │
│       | Contacto | 🔍 Búsqueda | 🌓 Dark Mode | Admin   │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      BREADCRUMB                          │
│         Inicio > Cursos > 3º ESO > Tema 3               │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    CONTENIDO PRINCIPAL                   │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │   Página   │  │   Página   │  │   Página   │       │
│  │   Inicio   │  │ Asignatura │  │   Admin    │       │
│  └────────────┘  └────────────┘  └────────────┘       │
│                                                          │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                       FOOTER                             │
│  Departamento de Tecnología – IES Martín Rivero         │
│  Ronda (Málaga) | Contacto | Redes Sociales            │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Flujo de Datos

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│   React Router      │
│   (Navegación)      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│   Componente        │
│   Página            │
└──────┬──────────────┘
       │
       ├──────────────────────┐
       │                      │
       ▼                      ▼
┌──────────────┐    ┌──────────────────┐
│ ThemeContext │    │   AuthContext    │
│ (Dark Mode)  │    │ (Autenticación)  │
└──────────────┘    └────────┬─────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Firebase Auth   │
                    └────────┬────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Firestore  │    │  Firestore   │    │  Firestore  │
│   Cursos    │    │ Asignaturas  │    │    Temas    │
└─────────────┘    └──────────────┘    └─────────────┘
       │                     │                     │
       └─────────────────────┴─────────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Renderizado   │
                    │   en Pantalla   │
                    └─────────────────┘
```

---

## 🎨 Jerarquía de Componentes

```
App
├── ThemeProvider
│   └── AuthProvider
│       └── Router
│           ├── Navbar
│           │   ├── Logo
│           │   ├── Menu Desktop
│           │   │   └── Dropdown Cursos
│           │   ├── Search
│           │   ├── Dark Mode Switch
│           │   └── Menu Mobile
│           │
│           ├── Routes
│           │   ├── Home
│           │   │   ├── Hero Section
│           │   │   ├── Cursos Cards
│           │   │   └── Features Section
│           │   │
│           │   ├── AsignaturaPage
│           │   │   ├── BreadcrumbNav
│           │   │   ├── Header
│           │   │   └── Accordion (Temas)
│           │   │       ├── Trigger (Título + Badges)
│           │   │       └── Content
│           │   │           ├── Descripción
│           │   │           ├── Contenido HTML
│           │   │           ├── Video YouTube
│           │   │           └── Recursos
│           │   │
│           │   ├── DepartamentoPage
│           │   │   ├── BreadcrumbNav
│           │   │   └── Cards Info
│           │   │
│           │   ├── RecursosPage
│           │   │   ├── BreadcrumbNav
│           │   │   └── Recursos por Categoría
│           │   │
│           │   ├── ContactoPage
│           │   │   ├── BreadcrumbNav
│           │   │   ├── Info Contacto
│           │   │   └── Formulario
│           │   │
│           │   ├── LoginPage
│           │   │   └── Login Form
│           │   │
│           │   └── AdminDashboard (Protected)
│           │       ├── Stats Cards
│           │       └── Quick Actions
│           │
│           └── Footer
│               ├── Info Departamento
│               ├── Enlaces Rápidos
│               └── Redes Sociales
```

---

## 🔐 Modelo de Seguridad

```
┌─────────────────────────────────────────────────────┐
│              Firestore Security Rules                │
└─────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Cursos    │  │ Asignaturas │  │    Temas    │
│             │  │             │  │             │
│ Read: ✅ All│  │ Read: ✅ All│  │ Read: ✅ All│
│ Write: Admin│  │ Write: Admin│  │ Write: Admin│
└─────────────┘  └─────────────┘  └─────────────┘

┌─────────────┐  ┌─────────────────┐
│  Usuarios   │  │  Comentarios    │
│             │  │                 │
│ Read: Self  │  │ Read: Aprobados │
│ Write: Admin│  │ Create: Auth    │
└─────────────┘  │ Update: Admin   │
                 └─────────────────┘
```

---

## 📈 Estadísticas del Proyecto

| Categoría | Cantidad |
|-----------|----------|
| **Total Archivos** | 42 |
| **Componentes React** | 19 |
| **Páginas** | 7 |
| **Contextos** | 2 |
| **Componentes UI** | 8 |
| **Líneas de Código** | ~3,500+ |
| **Dependencias** | 25+ |

---

**🎉 Proyecto completo y bien organizado**

Desarrollado con ❤️ para la educación
