# Tarjeta de Invitación — 80 años de Luci

## Resumen del proyecto

Tarjeta de invitación digital interactiva para el cumpleaños de Luci, desarrollada con **React + Vite + Tailwind CSS**.

---

## Componentes

| Componente | Descripción |
|---|---|
| `Header` | Título "80 años" con efecto shimmer |
| `Nombre` | Nombre "Luci" con gradiente lavanda-rosa |
| `Foto` | Foto en estilo polaroid con revelado circular y sparkles hover |
| `Invitacion` | "Acompañame a festejar mis 80 años" con comillas animadas |
| `Detalles` | Fecha, hora, lugar y botón Google Maps |
| `Contador` | Cuenta regresiva en tiempo real (actualiza cada 60s) |
| `Pastel` | SVG de pastel con velas animadas y frase de agradecimiento |
| `Mensaje` | Chiste sobre el efectivo con glow pulse |
| `Asistencia` | Botón "Confirmar Asistencia" que abre modal |
| `RSVPModal` | Modal con formulario que envía a WhatsApp |
| `Footer` | Firma "Con amor, Tus hijos y tus nietos" |

---

## Cambios realizados

### Visuales y contenido
- Texto de invitación cambiado a *"Acompañame a festejar mis 80 años"*
- Frase de agradecimiento agregada debajo del pastel
- Color del "Desarrollado por" cambiado a lavanda-600 (más visible)
- Fondo de imagen floral (1.7MB) — pendiente de comprimir
- Footer corregido (se habían colado textos basura)

### Animaciones
- `cardFloat` modificada para incluir `scale(1.008)` (efecto respiración)
- Confeti infinito (cambió a `infinite` en vez de `forwards`)
- Foto: eliminado `slowZoom` que causaba blur al escalar al 115%
- Título: keyframes `shimmer` movidos del config de Tailwind al CSS directo
- Font-smoothing agregado al body para mejor renderizado

### Rendimiento
- Reducidas animaciones concurrentes:
  - Pétalos: 8 → eliminados (no funcionaban)
  - Glitter: 8 → 4
  - Sparkles: 8 → 4
  - Confeti: 15 → 16 (dejado)
  - Card-sparkles: 6 → 3
- `will-change: transform` agregado a elementos animados fixed
- Eliminado parallax scroll que causaba repaints
- Eliminado `backdrop-filter: blur(16px)` de la tarjeta

### Bugs corregidos
- `flood-color` → `floodColor` en SVG del pastel (error React)
- `borderGlow` con underscores en box-shadow (sintaxis inválida)
- Div vacío en Header eliminado
- Footer corrupto (texto `este` y `pode` basura)
- Contador: cambiado de `useMemo` estático a `useState` + `setInterval`

### Limpieza de código muerto
- `PETALS` (definición y render)
- `.btn-whatsapp`, `@keyframes btnPulse`
- `.divider-animate`, `@keyframes drawDivider`
- `animation.shimmer` y `keyframes.shimmer` duplicados en tailwind.config

---

## Tecnologías

- React 19
- Vite 8
- Tailwind CSS 3
- Google Fonts: Great Vibes, Playfair Display, Lato, Cormorant Garamond

## Comandos

```bash
npm run dev       # Desarrollo
npm run build     # Producción
npm run preview   # Vista previa del build
```
