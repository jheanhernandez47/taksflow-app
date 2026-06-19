# TaskFlow — PWA de Gestión de Tareas

App de tareas offline-first construida como PWA, lista para Netlify y Median.co.

## Archivos del proyecto

```
taskapp/
├── index.html      ← App completa (HTML + CSS + JS)
├── sw.js           ← Service Worker (offline)
├── manifest.json   ← Manifiesto PWA
├── icon-192.png    ← Ícono app
├── icon-512.png    ← Ícono splash
└── netlify.toml    ← Headers Netlify
```

## 1. Despliegue en Netlify

1. Ve a https://app.netlify.com
2. Arrastra la carpeta `taskapp/` al panel de Netlify (drag & drop)
3. Tu app estará en una URL como: `https://tu-nombre.netlify.app`

## 2. Generar APK con Median.co

1. Ve a https://median.co
2. Haz clic en **"Create App"**
3. Pega la URL de tu app de Netlify
4. Configuración recomendada:
   - **App Name:** TaskFlow
   - **Orientation:** Portrait
   - **Status Bar:** Dark / Transparent
   - **Pull to Refresh:** Disabled
   - **Navigation:** Full screen (sin barra de navegación del browser)
5. Descarga el APK y pruébalo en tu dispositivo Android

## Funcionalidades

- ✅ Tareas con título, descripción, prioridad y fecha límite
- 📁 Proyectos con color e ícono personalizados
- 🏷 Categorías (Personal, Trabajo, Escuela, Salud, Finanzas)
- ✓ Subtareas con progreso visual
- 📊 Resumen estadístico
- 🔔 Notificaciones de vencimiento
- 🌙 Dark mode nativo
- 📶 Funciona 100% offline (datos en localStorage)
- 📱 Interfaz adaptada para pantallas móviles

## Datos

Todos los datos se guardan en `localStorage` del dispositivo.
No requiere internet ni servidor backend.
