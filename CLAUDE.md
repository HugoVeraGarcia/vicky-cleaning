# Vicky's Cleaning — sitio web

Sitio de una página para una empresa familiar de limpieza en Naples, Florida.
La especificación funcional completa está en ESPECIFICACION-FUNCIONAL.md. Léela
antes de tocar nada; los datos del negocio de su sección 2 son la fuente de verdad.

## Reglas duras

- HTML, CSS y JS planos. Un solo archivo `index.html`. Sin build, sin frameworks,
  sin Tailwind, sin bundler.
- El CSS va en el `<style>` del propio archivo. El JS, en el `<script>` del final,
  dentro del IIFE que ya existe.
- Nada de `localStorage` ni `sessionStorage`. Solo cookies con try/catch.
- Todo el texto visible, en inglés. Comentarios y commits, en español.
- Nunca añadir precios al sitio. Es una decisión cerrada de la clienta.
- El amarillo `--brand` es solo para acciones y acentos, nunca para bloques de
  texto ni fondos grandes.
- Mantener el bloque `@media (prefers-reduced-motion: reduce)` cubriendo toda
  animación nueva.
- Librerías permitidas: GSAP (animaciones), servicio de formulario, analítica,
  fuentes. Cargadas vía CDN en la cabeza del HTML.

## Datos que no se inventan

Teléfonos, correo, dirección, horario, número de empleados, años de actividad,
zonas de servicio y nombre de la empresa están en la sección 2 de la
especificación. Si necesitas un dato que no está ahí, pregunta: no lo rellenes.

El correo es Viky1912@hotmail.com — con una sola k. Es correcto.

## Comprobaciones antes de dar algo por terminado

- Abrir en 390px y en 1440px y revisar que no haya scroll horizontal.
- Consola sin errores.
- Probar el formulario de los tres pasos hasta el final.
- Recorrer con teclado desde el primer enlace hasta el botón de enviar.

## Flujo de trabajo

Una rama por requisito, nombrada `rf-01-backend-formulario` y similares.
Commits en español, en imperativo. No mezclar requisitos en un mismo commit.