[README.md](https://github.com/user-attachments/files/29166754/README.md)
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

- ✅ Tareas con título, descripción, fecha límite y subtareas
- 🏠 **Pantalla de Inicio** — tareas más próximas a vencer, proyectos vistos recientemente, y tareas añadidas recientemente
- 📁 Proyectos estilo Asana (vistas Lista / Tablero / Resumen)
- 📂 Secciones personalizables por proyecto y en "Mis tareas" (con "Tareas recientes" por defecto)
- 🖱️ **Drag & drop** en el Tablero para mover tareas entre secciones (mouse y táctil)
- ➕ **Botón flotante con menú** — un toque despliega "Nueva tarea" / "Nuevo proyecto"
- 🧭 **Barra de navegación inferior** con 5 accesos: Inicio, Mis tareas, Proyectos, Buscar y Perfil
- 🔍 **Búsqueda dedicada** con filtro por Tareas o Proyectos
- 👤 **Pantalla de perfil completa** — foto (subida desde el dispositivo, guardada como base64 en localStorage), nombre editable con ícono de lápiz para activar la edición e iniciales automáticas como avatar de respaldo, acceso al Resumen, notificaciones, exportar/importar datos en .json, y "Acerca de"
- 🔔 Notificaciones de vencimiento (con verificación de soporte del navegador)
- 🌙 Dark mode nativo
- 📶 Funciona 100% offline — datos en `localStorage`, Service Worker cachea los recursos (incluido el script de íconos tras la primera carga)
- 📱 Interfaz adaptada para pantallas móviles

## Notas técnicas

- Los íconos se cargan desde `unpkg.com/lucide` la primera vez que hay conexión; el Service Worker los cachea para uso offline después. Si el ícono no carga (sin conexión y sin caché previo), la interfaz no se rompe — simplemente el espacio queda vacío y los botones siguen siendo funcionales.
- El drag & drop usa Pointer Events (no el HTML5 Drag and Drop API clásico), para que funcione igual con mouse, dedo o stylus — necesario para que se sienta nativo dentro del APK generado con Median.co.

## Datos

Todos los datos se guardan en `localStorage` del dispositivo.
No requiere internet ni servidor backend (salvo para la carga inicial de íconos).
