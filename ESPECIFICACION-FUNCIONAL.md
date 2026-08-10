# Especificación funcional — Web de Vicky's Cleaning with a Smile and More

**Versión:** 1.0 · 5 de agosto de 2026
**Destino:** documento de partida para Claude Code
**Fecha objetivo de publicación:** septiembre de 2026

---

## 0. Cómo usar este documento

Este es el contrato funcional del proyecto. Todo lo que aparece aquí como **dato del negocio** (sección 2) es información real proporcionada por la clienta y **no debe inventarse, corregirse ni completarse**. Todo lo que aparece como requisito `RF-##` (sección 6) tiene un criterio de aceptación verificable.

Cuando algo no esté en este documento, no lo asumas: está en la sección 9 (preguntas abiertas) o hay que preguntarlo.

---

## 1. Contexto

### 1.1 El cliente

Vicky's Cleaning with a Smile and More es una empresa familiar de limpieza con sede en Naples, Florida. Lleva 17 años operando y tiene 25 empleados. Hoy consigue clientes por boca a boca, por los rótulos de los vehículos de la empresa y algo por redes sociales. No tiene web operativa ni ficha de Google Business verificada.

### 1.2 Qué tiene que conseguir la web

En orden de importancia, según lo que declaró la clienta:

1. Que la llamen por teléfono.
2. Que pidan presupuesto (*free estimate*).
3. Que escriban por WhatsApp o mensaje de texto.

Textualmente prefiere que los clientes **le escriban por mensaje de texto o por correo electrónico**. Ese es el canal que hay que privilegiar en el diseño de las llamadas a la acción.

### 1.3 Cómo se medirá el éxito

A los 6 meses: aumento medible en presupuestos solicitados, llamadas y mensajes recibidos, y clientes nuevos atribuibles a la web. Esto implica que la analítica (RF-12) no es opcional.

### 1.4 Cliente ideal y objeciones

Residencias fijas, público adulto a adulto mayor, poder adquisitivo medio-alto, que busca limpieza con frecuencia fija.

Las cuatro objeciones que la clienta escucha antes de contratar, y que la web debe responder explícitamente:

| Objeción | Dónde se responde hoy |
|---|---|
| El precio | Sección *promises*, tarjeta 3 + FAQ 1 |
| Mantener horario, día y equipo fijos | Sección *promises*, tarjetas 2 y 4 + FAQ 2 |
| Dar acceso a la casa cuando no están | Sección *promises*, tarjeta 1 + FAQ 3 |
| Confianza en quién entra | *hero badges*, sección *about*, FAQ 7 |

**No debilitar estos bloques al iterar.** Son la parte de la web que convierte.

---

## 2. Datos maestros del negocio

> Fuente única de verdad. Si algún dato aparece distinto en el código, gana esta tabla.

### 2.1 Identidad

| Campo | Valor |
|---|---|
| Nombre comercial | `Vicky's Cleaning with a Smile and More` |
| Persona de contacto | Vicky Reyes |
| Año de fundación | 2009 (17 años en 2026) |
| Tamaño del equipo | 25 personas |
| Seguros | Workers' compensation + general liability |
| Idioma del sitio | **Inglés únicamente** |

### 2.2 Contacto (NAP)

| Campo | Valor |
|---|---|
| Teléfono principal | `(239) 300-5332` → `tel:+12393005332` |
| Teléfono secundario | `(239) 285-6103` → `tel:+12392856103` |
| Correo | `Viky1912@hotmail.com` |
| Dirección | `3845 Beck Blvd, Suite 828R, Naples, FL 34114` |
| Horario | Monday – Saturday, 7:00 AM – 7:00 PM |
| TikTok | `https://www.tiktok.com/@vickycleaning239` |

> ⚠️ El correo es **`Viky1912`** con una sola `k`, no `Vicky`. Es correcto tal cual. No lo "arregles".

### 2.3 Servicios

En este orden de prioridad comercial. Los tres primeros son los que la clienta más quiere vender.

1. Recurring home & apartment cleaning
2. Airbnb & vacation rental turnovers
3. Office cleaning
4. Move-in / move-out cleaning
5. Post-remodel cleaning
6. Post-construction final clean
7. HOA & community common areas
8. Rentals & model homes *(bloque adicional, no es un servicio independiente en su listado)*

### 2.4 Zonas de servicio

Naples · Fort Myers · Cape Coral · Marco Island · Estero · Golden Gate Estates · Punta Gorda

Todas en Collier, Lee y Charlotte County. La marquesina incluye además tres zonas marcadas como "area" (Bonita Springs, Immokalee, Lehigh Acres) que son aproximaciones; **confirmar con la clienta antes de publicar** o eliminarlas.

### 2.5 Política de precios

**No se publica ningún precio, ni "desde", ni rangos, ni calculadora.** Decisión explícita de la clienta. Todo el sitio empuja hacia *free estimate*.

---

## 3. Estado actual del código

### 3.1 Qué hay

Un único archivo `index.html` (~73 KB, ~1.800 líneas) autocontenido: HTML + CSS en `<style>` + JS en `<script>`. Sin dependencias, sin build, sin `node_modules`.

### 3.2 Estructura del documento, en orden

| # | Sección | Ancla / ID | Notas |
|---|---|---|---|
| 1 | Top bar | `#topbar` | Zonas + horario. Se oculta al hacer scroll > 50px |
| 2 | Header | `#hdr` | Fijo. Gana `.scrolled` a > 50px |
| 3 | Hero | — | Imagen de fondo con Ken Burns, h1, 2 CTA, 3 badges |
| 4 | Stats | `.stats` | 4 contadores animados (`.count[data-to]`) |
| 5 | Servicios | `#services` | 8 tarjetas |
| 6 | Marquesina | `#mq` | Ciudades, inyectadas por JS |
| 7 | Promises | — | 4 tarjetas = las 4 objeciones |
| 8 | Antes / después | `#cmp`, `#hnd` | Deslizador arrastrable |
| 9 | Cómo funciona | `#how` | 4 pasos |
| 10 | Zonas | `#areas` | Rejilla + iframe de Google Maps |
| 11 | Reseñas | `#reviews` | 3 tarjetas tipo conversación de SMS |
| 12 | Nosotros | `#about` | Imagen + checklist |
| 13 | Formulario | `#estimate` | 3 pasos, `#qform` / `#qok` |
| 14 | FAQ | `#faq` | 7 `<details>` |
| 15 | Banda CTA | `.cta-band` | |
| 16 | Pie | `footer` | 4 columnas + `#newsform` + franja de empleo |
| 17 | Botones flotantes | `#fabs` | WhatsApp + Text us, aparecen a > 520px |
| 18 | Cookies | `#cookie` | Banner, cookie `vc_consent` |
| 19 | JSON-LD | — | `HouseholdCleaningService` |

### 3.3 Sistema de diseño (tokens ya definidos en `:root`)

```css
--brand:       #F5B301   /* amarillo del logo. SOLO para acciones */
--brand-light: #FFD34D
--brand-dark:  #D89D00
--ink:         #12263F   /* azul marino, contraste principal */
--ink-2:       #1E3A5F
--cream:       #FFF8EA   /* fondo de secciones alternas */
--cream-2:     #FFF3DA
--text:        #17222E
--muted:       #5D6E80
--line:        #E7EDF3
--line-warm:   #EFE3C8
--radius:      20px
```

**Regla de color:** el amarillo `--brand` está reservado a botones de acción, acentos e iconos. Nunca como fondo de bloques grandes de texto ni como color de párrafo. La proporción objetivo es ~60% blanco/crema, ~30% marino, ~10% amarillo.

**Tipografía:** `Fraunces` para títulos (`.display`), `Plus Jakarta Sans` para el resto. Ambas desde Google Fonts (ver deuda técnica DT-02).

**Breakpoints:** `1020px` (rejillas de dos columnas → una), `880px` (menú y logo compactos), `700px` (móvil).

### 3.4 JavaScript actual

Un único IIFE, sin dependencias. Bloques:

- Header/topbar/FABs por scroll
- `IntersectionObserver` para `.reveal`
- Contadores animados
- Inyección de la marquesina
- Deslizador antes/después (pointer events + auto-demo al entrar en viewport)
- Navegación del formulario por pasos
- Newsletter (demo)
- Banner de cookies (`document.cookie`, clave `vc_consent`)
- Click en tarjeta de servicio → scroll a `#estimate`
- Brillo del botón siguiendo el cursor
- Fallback si una imagen falla

### 3.5 Contrato de datos del formulario

Campos actuales de `#qform`, con su atributo `name`:

| `name` | Tipo | Requerido | Valores |
|---|---|---|---|
| `svc` | radio | sí (default) | Home or apartment · Airbnb / rental turnover · Office · Move-in / move-out · Post-remodel or construction · HOA / community |
| `freq` | radio | sí (default) | Weekly · Every 2 weeks · Monthly · One time · Per turnover |
| `bed` | select | no | Studio · 1 · 2 · 3 · 4 · 5 or more · Not applicable |
| `bath` | select | no | 1 · 2 · 3 · 4 or more · Not applicable |
| `sqft` | text | no | libre |
| *(file)* | file | no | **falta `name`** — ver RF-01 |
| `name` | text | **sí** | |
| `phone` | tel | **sí** | |
| `email` | email | **sí** | |
| `city` | select | sí (default) | las 7 zonas + Other |
| `reply` | radio | sí (default) | Text message · Email · Phone call |
| `notes` | textarea | no | |
| `company_website` | text | — | **honeypot**, debe llegar vacío |

---

## 4. Restricciones técnicas (reglas duras)

1. **Stack:** HTML + CSS + JavaScript plano. Un solo archivo `index.html` para la página principal.
2. **Sin frameworks, sin build, sin bundler.** Nada de React, Vue, Tailwind, Sass ni paso de compilación.
3. **Sin dependencias de terceros en tiempo de ejecución**, salvo: las fuentes, el servicio de formulario y la analítica.
4. **Cero `localStorage` / `sessionStorage`.** Solo cookies con `try/catch` (ya implementado así).
5. **El CSS vive en el `<style>` del propio archivo.** No dividir en hojas externas mientras el sitio sea de una página.
6. **Todo el texto visible en inglés.** Comentarios de código y commits, en español si lo prefieres.
7. **Respetar `prefers-reduced-motion`.** Ya hay un bloque `@media` que anula animaciones; mantenerlo al añadir nuevas.
8. **No introducir precios** en ningún punto del sitio.

---

## 5. Deuda técnica conocida

| ID | Problema | Impacto |
|---|---|---|
| **DT-01** | Las 11 imágenes se cargan por *hotlink* desde `images.unsplash.com`. | Dependencia de un tercero sin control de disponibilidad ni de formato. Hay que descargarlas, convertirlas y servirlas desde el propio dominio. |
| **DT-02** | Fuentes cargadas desde `fonts.googleapis.com` con `<link>` bloqueante. | Penaliza LCP y añade una petición a un tercero antes del consentimiento de cookies. |
| **DT-03** | El `<iframe>` de Google Maps se carga siempre, **antes** de que el usuario acepte cookies. | Carga scripts de terceros sin consentimiento y pesa en el rendimiento. |
| **DT-04** | El banner de cookies guarda la preferencia pero **no condiciona nada**: no hay ningún script que dependa de ella. | En cuanto se añada GA4 (RF-12) hay que respetar `vc_consent`, o el banner es decorativo. |
| **DT-05** | El año del pie sale de `document.lastModified.slice(6,10)`. | Frágil y semánticamente incorrecto. Sustituir por `new Date().getFullYear()`. |
| **DT-06** | El `<input type="file">` no tiene atributo `name`. | Aunque se conecte un backend, el archivo no se enviaría. |
| **DT-07** | El deslizador antes/después usa la misma foto con un filtro CSS para el "antes". | Es honesto como maqueta, pero engañoso en producción. Necesita un par real. |
| **DT-08** | Los testimonios son inventados. | **No puede publicarse así.** Ver RF-08. |

---

## 6. Requisitos funcionales pendientes

Prioridades: **P0** bloquea la publicación · **P1** debe estar en el lanzamiento · **P2** posterior.

---

### RF-01 · Backend del formulario de presupuesto — **P0**

Hoy el formulario se rellena, valida mínimamente y muestra la pantalla de agradecimiento **sin enviar nada a ninguna parte**. Los datos se pierden.

**Qué hacer**

- Elegir un backend de formularios sin servidor. Candidatos, con sus límites al momento de escribir esto (verificar antes de contratar, cambian a menudo): Web3Forms (plan gratuito sin límite de envíos, admite adjuntos), Netlify Forms (integrado si se aloja allí, adjuntos normalmente en plan de pago), Formspree (50 envíos/mes gratis, adjuntos solo de pago).
- Añadir `name="photos"` al input de archivo (DT-06).
- Sustituir el `submit` actual por un `fetch` real con `FormData`.
- Mantener la pantalla `#qok` como estado de éxito y añadir un estado de error visible si la petición falla.
- Deshabilitar el botón y mostrar un indicador mientras se envía, para evitar dobles envíos.

**Criterio de aceptación**

- [ ] Un envío real llega al correo de la clienta con **todos** los campos de la tabla 3.5, legibles y etiquetados.
- [ ] Si el usuario adjuntó fotos, llegan o hay un enlace de descarga; si el plan elegido no las admite, el campo se ha eliminado del formulario y en su lugar hay una instrucción de enviarlas por texto.
- [ ] Si la red falla, el usuario ve un mensaje de error y sus datos siguen en el formulario.
- [ ] Un doble clic en enviar no genera dos solicitudes.

---

### RF-02 · Validación por pasos — **P0**

Hoy los botones *Continue* avanzan sin comprobar nada, y la validación final solo mira que tres campos no estén vacíos.

**Qué hacer**

- Bloquear el avance de cada paso hasta que sus campos obligatorios estén completos.
- Validar formato de correo y de teléfono estadounidense.
- Mostrar el mensaje de error junto al campo, no como `alert()`.
- Marcar el campo con `aria-invalid` y asociar el mensaje con `aria-describedby`.

**Criterio de aceptación**

- [ ] No se puede llegar al paso 3 sin haber elegido servicio y frecuencia.
- [ ] `correo@` , `correo.com` y `123` son rechazados con un mensaje claro.
- [ ] Un lector de pantalla anuncia el error al enfocar el campo.

---

### RF-03 · Notificación al negocio — **P0**

La clienta prefiere trabajar por mensajes de texto.

**Qué hacer**

- Mínimo viable: el correo de aviso llega a una dirección que ella tenga configurada en el móvil con notificación activa. Coste cero.
- Opcional si el volumen lo justifica: Zapier o Make conectando el formulario con Twilio para enviarle un SMS con nombre, teléfono, ciudad y servicio.
- El asunto del correo debe permitir triaje de un vistazo: `Nuevo estimate — {city} — {svc}`.

**Criterio de aceptación**

- [ ] Desde que se envía el formulario hasta que ella lo ve en el móvil pasan menos de 2 minutos.
- [ ] El aviso incluye el teléfono del cliente en formato pulsable.

---

### RF-04 · Antispam real — **P0**

Hay un honeypot (`company_website`), que frena bots básicos. No es suficiente cuando el formulario esté indexado.

**Qué hacer**

- Activar el captcha que traiga el servicio elegido (hCaptcha o Cloudflare Turnstile suelen ser opciones sin fricción y sin coste).
- Mantener el honeypot.
- Descartar en cliente los envíos con menos de 3 segundos de vida del formulario.

**Criterio de aceptación**

- [ ] Un envío programático directo al endpoint sin resolver el captcha es rechazado.
- [ ] Un usuario real completa el formulario sin resolver ningún puzle visual.

---

### RF-05 · Páginas legales — **P0**

Los tres enlaces del pie (`Privacy Policy`, `Terms of Service`, `Accessibility`) apuntan a `#`.

**Qué hacer**

- Crear `privacy.html`, `terms.html` y `accessibility.html` con la misma cabecera y pie que la principal.
- La política de privacidad debe cubrir el formulario, el correo, la analítica y las cookies.
- No aplica el RGPD (empresa y clientes en Florida), pero sí conviene una política de privacidad real por el formulario y por si se hace publicidad en Google o Meta.

**Criterio de aceptación**

- [ ] Los tres enlaces resuelven a páginas con contenido real.
- [ ] La política menciona explícitamente qué datos recoge el formulario y para qué.

---

### RF-06 · Dominio, alojamiento, SSL y despliegue — **P0**

No hay ni dominio ni hosting.

**Qué hacer**

- Comprar dominio. Sugerencias: `vickyscleaning239.com`, `vickyscleaningnaples.com`.
- Desplegar en Cloudflare Pages o Netlify. Ambos permiten uso comercial en plan gratuito y traen SSL. **Evitar el plan Hobby de Vercel: prohíbe expresamente el uso comercial.**
- Configurar el despliegue desde el repositorio de Git, no arrastrando archivos.
- Redirección de `www` a apex (o al revés), consistente.

**Criterio de aceptación**

- [ ] `https://` funciona sin advertencias.
- [ ] Un `git push` a `main` publica automáticamente.
- [ ] Existe una URL de previsualización por rama para enseñar cambios a la clienta antes de publicarlos.

---

### RF-07 · Sustituir las fotografías — **P1**

Las 11 imágenes son de stock. La clienta declaró tener fotos propias buenas.

**Qué hacer**

- Descargar las fotos reales, recortarlas a las proporciones que usa cada bloque (hero panorámico, tarjetas 4:3, *about* 4:3).
- Convertir a WebP con AVIF de respaldo, servir desde `/img/` del propio dominio (resuelve DT-01).
- `width` y `height` explícitos en cada `<img>` para evitar saltos de maquetación.
- Mantener `loading="lazy"` en todo salvo la imagen del hero.
- `alt` descriptivo y específico en cada una.

**Criterio de aceptación**

- [ ] Cero peticiones a `images.unsplash.com`.
- [ ] CLS < 0.1 en Lighthouse móvil.
- [ ] Ninguna imagen del hero supera los 250 KB.

---

### RF-08 · Testimonios reales — **P1** *(bloqueante ético)*

Los tres testimonios actuales están inventados. **No se puede publicar el sitio con ellos.**

**Qué hacer**

- Pedir a la clienta capturas de los mensajes reales de clientes.
- Transcribirlos manteniendo el formato de conversación ya maquetado.
- Usar nombre de pila e inicial del apellido. Pedir permiso.
- Si no hay material suficiente, **eliminar la sección entera** hasta tenerlo. Una sección menos es mejor que testimonios falsos.

**Criterio de aceptación**

- [ ] Cada testimonio corresponde a un mensaje real y verificable.
- [ ] Hay constancia del permiso de cada persona citada.

---

### RF-09 · Marca: logo, favicon y og:image — **P1**

Hoy el logotipo es un icono provisional generado en SVG. La clienta tiene su logo solo como imagen, no vectorial.

**Qué hacer**

- Pedirle el archivo original. Si no existe, vectorizarlo.
- Sustituir `.logo-mark` en cabecera y pie.
- Generar favicon (32, 180 para Apple, 192 y 512 para Android) y `site.webmanifest`.
- Crear una `og:image` de 1200×630 y añadir la etiqueta correspondiente, que hoy falta.

**Criterio de aceptación**

- [ ] El logo real aparece en cabecera, pie y favicon.
- [ ] Al compartir el enlace en WhatsApp o Facebook se ve una imagen correcta.

---

### RF-10 · Antes / después real — **P1**

Ver DT-07.

**Qué hacer**

- Conseguir un par de fotos del mismo espacio, mismo encuadre, antes y después.
- Eliminar el filtro CSS `.before-img`.

**Criterio de aceptación**

- [ ] Las dos imágenes son fotografías distintas y reales del mismo lugar.

---

### RF-11 · Preselección de servicio desde la tarjeta — **P1**

Hoy pulsar una tarjeta de servicio baja al formulario pero no preselecciona nada.

**Qué hacer**

- Añadir `data-service` a cada `.card` con el valor exacto del radio `svc` correspondiente.
- Al pulsar, marcar ese radio antes de hacer scroll.
- Las tarjetas 5 y 6 (post-remodel y post-construction) mapean ambas a `Post-remodel or construction`. La tarjeta 8 (rentals & model homes) mapea a `Airbnb / rental turnover`.

**Criterio de aceptación**

- [ ] Pulsar "Office cleaning" deja *Office* marcado al llegar al formulario.
- [ ] El scroll sigue siendo suave y no salta de más.

---

### RF-12 · Analítica y medición — **P1**

La clienta quiere saber si la web funciona. Hoy no hay nada instalado.

**Qué hacer**

- Instalar Google Analytics 4, **condicionado al consentimiento de cookies** (resuelve DT-04).
- Registrar como eventos: clic en cualquier `tel:`, clic en el botón de WhatsApp, clic en `sms:`, avance de cada paso del formulario, y envío completado.
- Dar de alta Search Console y enviar el sitemap (RF-19).
- No instalar píxeles publicitarios todavía: la clienta dijo que la publicidad de pago va "más adelante".

**Criterio de aceptación**

- [ ] Con las cookies rechazadas, no se carga ningún script de GA4.
- [ ] En GA4 se distinguen llamadas, mensajes y formularios como eventos separados.
- [ ] Se ve en qué paso del formulario abandona la gente.

---

### RF-13 · Verificar el canal de WhatsApp — **P1**

El botón apunta a `wa.me/12393005332`. Si ese número no está dado de alta en WhatsApp, el usuario recibe un error, que es peor que no tener el botón. En Estados Unidos el SMS es mucho más habitual.

**Qué hacer**

- Confirmar con la clienta si el número tiene WhatsApp.
- Si lo tiene: recomendar WhatsApp Business con mensaje de bienvenida y horario automático.
- Si no lo tiene: eliminar el botón y dejar solo *Text us*, que ya existe y funciona.

**Criterio de aceptación**

- [ ] El botón de WhatsApp abre una conversación real, o no existe.

---

### RF-14 · Newsletter — **P1**

La clienta marcó que sí quiere enviar comunicaciones por correo. El formulario del pie es una demo.

**Qué hacer**

- Conectar `#newsform` a Mailchimp, Buttondown o similar.
- Añadir casilla de consentimiento explícito y enlace a la política de privacidad.
- Cumplir CAN-SPAM: dirección física del remitente y enlace de baja en cada envío.

**Criterio de aceptación**

- [ ] Un alta real aparece en la lista del proveedor.
- [ ] El correo de bienvenida incluye enlace de baja funcional.

---

### RF-15 · Accesibilidad — **P1**

El sitio parte de una base razonable (enlace de salto, `aria-label` en los iconos, foco visible en los chips, respeto a `prefers-reduced-motion`), pero no se ha auditado.

**Qué hacer**

- Pasar axe o Lighthouse y corregir lo que salga.
- Verificar contraste real del amarillo sobre blanco (probablemente insuficiente para texto pequeño: usar `--brand-dark` para texto y reservar `--brand` para fondos de botón con texto marino encima).
- Recorrer todo el sitio solo con teclado, incluido el formulario por pasos y el deslizador antes/después.
- Añadir alternativa accesible al deslizador (un `input[type=range]` oculto visualmente o control por flechas).

**Criterio de aceptación**

- [ ] Lighthouse Accessibility ≥ 95.
- [ ] Todo el recorrido hasta enviar el formulario es completable solo con teclado.
- [ ] Ningún texto por debajo de 4.5:1 de contraste.

---

### RF-16 · Rendimiento — **P1**

**Qué hacer**

- Auto-alojar las dos fuentes en WOFF2 con `font-display: swap` y precarga de las variantes usadas (resuelve DT-02).
- Cargar el mapa solo tras el consentimiento, o sustituirlo por una imagen estática enlazada a Google Maps (resuelve DT-03).
- Imágenes según RF-07.
- Cabeceras de caché en el hosting.

**Criterio de aceptación**

- [ ] Lighthouse móvil: Performance ≥ 90, LCP < 2.5 s, CLS < 0.1.
- [ ] Cero peticiones a terceros antes de aceptar cookies.

---

### RF-17 · SEO técnico y local — **P1**

Ya existe el JSON-LD `HouseholdCleaningService` con las 7 ciudades, el horario, la dirección y el catálogo de servicios. Falta el resto.

**Qué hacer**

- `sitemap.xml` y `robots.txt`.
- Revisar que `<title>` y `<meta description>` de cada página nueva sean únicos.
- Añadir `og:image` (RF-09) y `twitter:card`.
- Corregir el `<link rel="canonical">`, que hoy apunta a un dominio de ejemplo.
- Cuando exista la ficha de Google Business, añadir `sameAs` con su URL.

**Criterio de aceptación**

- [ ] El JSON-LD pasa el validador de resultados enriquecidos de Google sin errores.
- [ ] Search Console indexa la página principal sin avisos.

---

### RF-18 · Ficha de Google Business Profile — **P1** *(no es código, pero es lo más rentable)*

La clienta no tiene ficha verificada. Para una empresa de limpieza local en Naples, la ficha suele generar más llamadas que la propia web. Hoy consigue clientes por boca a boca y por los rótulos de los vehículos; la ficha de Google es la extensión natural de eso.

**Qué hacer**

- Crear y verificar la ficha con el NAP exacto de la sección 2.2 — cualquier variación en nombre, dirección o teléfono entre la ficha y la web perjudica el posicionamiento local.
- Subir fotos, servicios y zonas.
- Poner en marcha una rutina para pedir reseñas a los clientes recurrentes.
- Solo cuando haya reseñas, añadir el sello o el enlace en el pie.

**Criterio de aceptación**

- [ ] Ficha verificada, con el NAP idéntico al de la web.
- [ ] Al menos 5 reseñas antes de mostrar cualquier sello en el sitio.

---

## 7. Fase 2 (esbozada, no construir todavía)

Estas decisiones no bloquean la fase 1, pero conviene no cerrarles la puerta.

**F2-01 · Páginas por servicio.** La clienta las marcó en el cuestionario. Son siete páginas, una por servicio, cada una posicionando su búsqueda. El contenido de cada tarjeta actual ya es texto propio y sirve de semilla. Implicación para hoy: mantener la cabecera y el pie fáciles de extraer a fragmentos reutilizables, aunque hoy estén inline.

**F2-02 · Páginas por ciudad.** "House cleaning in Cape Coral", etc. Alto retorno en SEO local, pero solo con contenido diferenciado real. No generar siete páginas clonadas.

**F2-03 · Blog.** Marcado por la clienta. Requiere un gestor de contenidos, lo que enlaza con F2-05.

**F2-04 · Empleo.** Marcó las tres funciones (página de ofertas, formulario con currículum, aviso de datos) pero en prioridades lo dejó para después. Hoy solo existe una franja "We're hiring" en el pie.

**F2-05 · Decisión de CMS.** La clienta declaró que **ella actualizará la web y necesita un panel fácil**. Este HTML plano no lo tiene. Hay que preguntarle cuántas veces al año piensa cambiar algo:

- Dos o tres veces al año → dejarlo como está y que los cambios entren por una cuota mensual de mantenimiento. Más barato para ella y más rápido para el usuario.
- Cambios frecuentes o quiere el blog → migrar el mismo diseño a WordPress, Webflow o un CMS headless. Cambia el presupuesto y hay que plantearlo antes de firmar.

**F2-06 · Área de cliente.** Facturas, reprogramación, partes firmados. La clienta lo dejó fuera. Solo tiene sentido si el negocio crece hacia contratos recurrentes grandes.

---

## 8. Decisiones cerradas — no reabrir

Estas se tomaron a partir de respuestas explícitas de la clienta. Cambiarlas requiere volver a preguntarle.

- ❌ **No mostrar precios** de ningún tipo.
- ❌ **No calculadora** de precio estimado.
- ❌ **No reserva ni calendario online.**
- ❌ **No chat en vivo ni chatbot.**
- ❌ **No logotipos de empresas clientes** (declaró que no tiene).
- ❌ **No selector de idioma**: el sitio es solo en inglés.
- ❌ **No sello de reseñas de Google** hasta que exista la ficha con reseñas reales.
- ✅ **Tono:** cortés y cercano, trato de usted trasladado al inglés. Nada de jerga ni de informalidad forzada.

---

## 9. Preguntas abiertas para la clienta

Bloquean requisitos concretos. Conviene resolverlas todas en una sola conversación.

| # | Pregunta | Bloquea |
|---|---|---|
| 1 | ¿El (239) 300-5332 tiene WhatsApp dado de alta? | RF-13 |
| 2 | ¿Cuántas veces al año piensa editar la web ella misma? | F2-05, y el presupuesto |
| 3 | Razón social exacta y datos fiscales para el aviso legal (la pregunta 8.1 quedó en blanco) | RF-05 |
| 4 | En la pregunta 7.4 marcó a la vez "hay web anterior que sustituir" y "es nueva". ¿Existe una web antigua? ¿En qué dominio? | RF-06 — si hay dominio previo, hay que migrarlo y redirigir, no comprar uno nuevo |
| 5 | El correo es un Hotmail. ¿Seguro que no quiere correo con dominio propio? Resta credibilidad en presupuestos a empresas y comunidades. | RF-06 |
| 6 | Fotos reales del equipo y de trabajos, en alta resolución | RF-07, RF-10 |
| 7 | Capturas de los mensajes de clientes y permiso para publicarlos | RF-08 |
| 8 | Logo original, a poder ser vectorial | RF-09 |
| 9 | ¿Confirma Bonita Springs, Immokalee y Lehigh Acres como zonas de servicio? Están en la marquesina pero no en su listado. | Sección 2.4 |
| 10 | Presupuesto (respondió "por definir") y si acepta cuota mensual de mantenimiento | Alcance general |

---

## 10. Definición de terminado — fase 1

El sitio se puede publicar cuando **todos** estos puntos sean ciertos:

- [ ] Todos los `RF` de prioridad **P0** están cerrados.
- [ ] No queda ni una foto de stock ni un testimonio inventado.
- [ ] Un envío real del formulario llega a la clienta en menos de 2 minutos, con adjuntos si los hubiera.
- [ ] Lighthouse móvil: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
- [ ] Todo el recorrido hasta enviar el formulario funciona solo con teclado.
- [ ] Los enlaces `tel:`, `sms:` y de WhatsApp se han probado en un teléfono real, iOS y Android.
- [ ] Las tres páginas legales existen y tienen contenido.
- [ ] La ficha de Google Business está verificada con el NAP idéntico al del sitio.
- [ ] Search Console indexa la web y el JSON-LD valida sin errores.
- [ ] La clienta ha revisado y aprobado el texto completo.

---

## Anexo A · `CLAUDE.md` para la raíz del repositorio

Copia esto tal cual en `CLAUDE.md` junto al `index.html`.

```markdown
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
```

## Anexo B · Primer encargo sugerido para Claude Code

> Lee `ESPECIFICACION-FUNCIONAL.md` y `CLAUDE.md`. Empieza por los requisitos
> P0 en este orden: RF-01, RF-02, RF-04. Para RF-01 usa Web3Forms salvo que
> encuentres un motivo para no hacerlo, y explícamelo antes de implementarlo.
> Resuelve de paso DT-05 y DT-06, que son de una línea. No toques todavía las
> imágenes ni los testimonios: dependen de material que aún no tengo.
> Antes de escribir código, dime qué has entendido y qué vas a hacer.
