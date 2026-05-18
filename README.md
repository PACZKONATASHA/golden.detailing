# 🚗 Golden Detailing - Landing Page

Landing page profesional y premium para servicio de detailing automotriz. Diseño moderno, oscuro y juvenil con animaciones suaves y experiencia de usuario optimizada.

## ✨ Características

- 🎨 **Diseño Premium**: Interfaz oscura y elegante con paleta de colores oro, azul eléctrico y negro
- 🎭 **Animaciones Suaves**: Micro-animaciones y transiciones fluidas con Framer Motion
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y escritorio
- ⚡ **Performance**: Carga rápida y rendimiento optimizado
- 🔗 **Integración Social**: Conexión directa con Instagram y WhatsApp
- 💬 **WhatsApp Flotante**: Botón interactivo con mensajes rápidos predefinidos
- 📸 **Galería Visual**: Sección para mostrar trabajos realizados
- 🔄 **Antes/Después**: Slider interactivo de transformaciones
- 📍 **Información de Contacto**: Ubicación, horarios y métodos de contacto

## 🎨 Paleta de Colores

```css
Negro Carbón:   #0D0D0D
Dorado Intenso: #F4B400
Blanco Humo:    #F5F5F5
Azul Eléctrico: #009DFF
Gris Oscuro:    #1C1C1C
```

## 🚀 Instalación

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**
   ```bash
   cd golden-detailing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   
   La aplicación se abrirá automáticamente en `http://localhost:3000`

4. **Compilar para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 📂 Estructura del Proyecto

```
golden-detailing/
├── public/              # Archivos públicos (logos, imágenes)
├── src/
│   ├── components/      # Componentes React
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── Services.jsx        # Servicios ofrecidos
│   │   ├── Gallery.jsx         # Galería de trabajos
│   │   ├── BeforeAfter.jsx     # Antes/Después
│   │   ├── Contact.jsx         # Contacto y ubicación
│   │   ├── Footer.jsx          # Pie de página
│   │   └── WhatsAppButton.jsx  # Botón flotante WhatsApp
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globales
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos base
├── index.html           # HTML principal
├── package.json         # Dependencias
└── vite.config.js       # Configuración de Vite
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconos SVG
- **React Intersection Observer** - Detección de elementos visibles
- **CSS3** - Estilos personalizados

## 📝 Personalización

### 1. Información de Contacto

Editar en todos los componentes los enlaces de WhatsApp e Instagram:

```javascript
// Reemplazar en todos los archivos:
https://wa.me/5491234567890  // Tu número de WhatsApp
@goldendetailing             // Tu usuario de Instagram
```

### 2. Ubicación

Editar en `Contact.jsx`:

```javascript
<p>Av. Principal 1234<br/>Buenos Aires, Argentina</p>
```

### 3. Servicios y Precios

Editar el array `services` en `Services.jsx`:

```javascript
const services = [
  {
    title: 'Tu Servicio',
    description: 'Descripción del servicio',
    price: 'Tu Precio',
    // ...
  }
];
```

### 4. Imágenes

Reemplazar los placeholders en:
- `Hero.jsx` - Imagen del auto principal
- `Gallery.jsx` - Fotos de trabajos
- `BeforeAfter.jsx` - Imágenes de antes/después

Coloca las imágenes en `/public/assets/` y actualiza las rutas.

### 5. Colores

Modificar las variables CSS en `index.css`:

```css
:root {
  --negro-carbon: #0D0D0D;
  --dorado-intenso: #F4B400;
  --blanco-humo: #F5F5F5;
  --azul-electrico: #009DFF;
  --gris-oscuro: #1C1C1C;
}
```

## 🎯 Secciones de la Landing Page

1. **Hero** - Presentación principal con CTA
2. **Services** - 6 servicios destacados con precios
3. **Gallery** - Galería de trabajos con integración Instagram
4. **Before/After** - Slider de transformaciones
5. **Contact** - Formulario de turnos rápidos y datos de contacto
6. **Footer** - Navegación, servicios y redes sociales
7. **WhatsApp Button** - Botón flotante con mensajes rápidos

## 🔧 Optimizaciones

- **Lazy Loading**: Imágenes cargadas según necesidad
- **Code Splitting**: División automática del código
- **Animaciones Optimizadas**: Uso de GPU para animaciones suaves
- **SEO Friendly**: Meta tags y estructura semántica
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1400px+)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### GitHub Pages

```bash
npm run build
# Configurar GitHub Pages con carpeta dist/
```

## 📧 Soporte

Para dudas o consultas sobre el código:
- Documentación de React: https://react.dev
- Documentación de Framer Motion: https://www.framer.com/motion/

## 📄 Licencia

Este proyecto es de uso libre para Golden Detailing.

---

**Desarrollado con ❤️ para Golden Detailing**

*Premium Detailing · Perfección en cada detalle*
