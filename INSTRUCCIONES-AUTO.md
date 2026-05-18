# 🚗 INSTRUCCIONES PARA AGREGAR LA IMAGEN DEL AUTO

## ✨ Efectos Implementados:
- ✅ **Entrada Lateral**: El auto entra deslizándose desde la derecha (200px)
- ✅ **Flotación Continua**: Movimiento suave arriba/abajo cada 4 segundos  
- ✅ **Reflejo Espejado**: Efecto de reflejo en el suelo con líneas brillantes azules
- ✅ **Resplandor Azul**: Glow envolvente en azul eléctrico

## 📋 Paso 1: Preparar tu Imagen

### Requisitos de la Imagen:
- **Formato**: PNG con fondo transparente (RECOMENDADO) o JPG
- **Resolución**: Mínimo 1200px de ancho
- **Orientación**: Vista lateral del auto (3/4 preferiblemente)
- **Calidad**: Alta resolución para verse nítida

### Herramientas para Quitar Fondo (si es necesario):
1. **remove.bg** - https://www.remove.bg/ (Gratis, automático)
2. **Photoshop** - Herramienta de selección rápida
3. **GIMP** - Software gratuito similar a Photoshop

## 📁 Paso 2: Guardar la Imagen

1. **Guarda tu imagen** en la carpeta:
   ```
   golden-detailing/src/assets/images/
   ```

2. **Nombre sugerido**: `auto-hero.png` o `scirocco-azul.png`

## 💻 Paso 3: Editar el Código

### Abrir archivo: `src/components/Hero.jsx`

**Busca estas líneas (alrededor de línea 74-80):**

```jsx
<div className="car-image">
  {/* INSTRUCCIÓN: Reemplaza el src con tu imagen del auto */}
  {/* Ejemplo: <img src="/src/assets/images/tu-auto.png" alt="Auto Golden Detailing" /> */}
  <div className="placeholder-car">
    <span className="placeholder-text">🚗</span>
    <p className="upload-text">Agregá tu imagen aquí</p>
  </div>
</div>
```

**Reemplaza TODO ese bloque por:**

```jsx
<div className="car-image">
  <img 
    src="/src/assets/images/auto-hero.png" 
    alt="Auto Golden Detailing" 
  />
</div>
```

⚠️ **IMPORTANTE**: Cambia `auto-hero.png` por el nombre exacto de tu archivo.

## 🎨 Paso 4: Ajustes Opcionales (CSS)

Si necesitas ajustar el tamaño del auto, edita: `src/components/Hero.css`

```css
.car-container {
  width: 90%;           /* Cambiar para hacer más grande/chico */
  max-width: 700px;     /* Tamaño máximo */
}
```

## 🔄 Paso 5: Ver los Cambios

1. **Si el servidor está corriendo**, los cambios se verán automáticamente
2. **Si no está corriendo**, ejecuta:
   ```bash
   npm run dev
   ```

## 🎭 Efectos Aplicados Automáticamente:

### 1. Entrada Lateral (al cargar la página):
```jsx
initial={{ opacity: 0, x: 200 }}    // Comienza 200px a la derecha
animate={{ opacity: 1, x: 0 }}      // Se mueve al centro
transition={{ duration: 1.2 }}      // Toma 1.2 segundos
```

### 2. Flotación Continua:
```jsx
animate={{ y: [0, -20, 0] }}        // Sube 20px y baja
transition={{ 
  duration: 4,                       // Ciclo de 4 segundos
  repeat: Infinity                   // Se repite infinitamente
}}
```

### 3. Reflejo Espejado:
- Capa debajo del auto con gradiente azul
- Líneas horizontales brillantes
- Efecto de perspectiva 3D
- Desenfoque sutil (blur: 3px)

## 🎯 Resultado Final:

Tu auto aparecerá:
1. ✨ Entrando desde la derecha con suavidad
2. 🌊 Flotando suavemente arriba y abajo
3. 💎 Con reflejo espejado en el "suelo"
4. ⚡ Rodeado de resplandor azul eléctrico

## 🆘 Problemas Comunes:

### La imagen no aparece:
- ✅ Verifica el nombre del archivo
- ✅ Confirma que está en `/src/assets/images/`
- ✅ Revisa la consola del navegador (F12) por errores

### La imagen es muy grande/chica:
- Edita `max-width` en `.car-container` (Hero.css)

### El reflejo se ve mal:
- Ajusta `bottom` en `.car-reflection` para moverlo más cerca/lejos del auto

---

## 📸 Recomendación de Imagen:

Basándote en tu referencia del **VW Scirocco azul**:
- Vista lateral 3/4
- Fondo transparente
- Auto en posición horizontal
- Buena iluminación que resalte el azul

¡Listo para lucir espectacular! 🚀✨
