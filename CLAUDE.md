# Vicky's Cleaning — sitio web

Sitio de una página para una empresa familiar de limpieza en Naples, Florida.
La especificación funcional completa está en ESPECIFICACION-FUNCIONAL.md. Léela
antes de tocar nada; los datos del negocio de su sección 2 son la fuente de verdad.

## Reglas duras

- HTML, CSS y JS planos. Sin build, sin frameworks, sin Tailwind, sin bundler.
- La página principal es un solo archivo, `index.html`. Aparte están las tres
  páginas legales, cada una autocontenida con su propio `<style>` reducido.
- Cada archivo lleva su CSS en el `<style>` propio; nada de hojas externas. En
  `index.html`, el JS va en el `<script>` del final, dentro del IIFE que ya existe.
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
- Recorrer todo el sitio con teclado, de principio a fin.
- Al borrar markup, borrar también el JS y el CSS que lo acompañaban.

## Flujo de trabajo

Una rama por requisito, nombrada `rf-01-backend-formulario` y similares.
Commits en español, en imperativo. No mezclar requisitos en un mismo commit.