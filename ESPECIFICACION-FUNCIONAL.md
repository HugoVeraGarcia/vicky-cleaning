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

> Los tres objetivos se atienden hoy por teléfono, WhatsApp, SMS y correo. La web
> no tiene formulario: es una decisión cerrada de la clienta (sección 8). El
> objetivo 2 se cumple cuando alguien llama o escribe pidiendo presupuesto, no
> cuando envía nada desde la página.

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
| Razón social | `Vicky's Cleaning with a Smile and More` — coincide con el nombre comercial |
| Nombre comercial | `Vicky's Cleaning with a Smile and More` |
| Persona de contacto | Vicky Reyes |
| Año de fundación | 2009 (17 años en 2026) |
| Tamaño del equipo | 25 personas |
| Seguros | Workers' compensation + general liability |
| Idioma del sitio | **Inglés únicamente** |

### 2.2 Contacto (NAP)

| Campo | Valor |
|---|---|
| Teléfono principal | `+1 (239) 285-6103` → `tel:+12392856103` |
| Teléfono secundario | `+1 (239) 300-5332` → `tel:+12393005332` |
| WhatsApp | `+1 (239) 285-6103` → `wa.me/12392856103` |
| Correo | `Viky1912@hotmail.com` |
| Dirección | `3845 Beck Blvd, Suite 828R, Naples, FL 34114` |
| Horario | Monday – Saturday, 7:00 AM – 7:00 PM |
| Dominio | `www.vickycleaningnaples.com` — sin la `s` de "Vicky's". Pendiente de contratar |
| TikTok | `https://www.tiktok.com/@vickyscleaning239` |

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

> ⚠️ Estado a **12 de agosto de 2026**. El formulario de presupuesto, los botones
> y el alta de newsletter se retiraron del sitio, y la clienta confirmó que no
> vuelven. Seis requisitos de la sección 6 quedaron descartados por ello. Ver 3.6.

### 3.1 Qué hay

La página principal es un único archivo `index.html` (~64 KB, ~970 líneas) autocontenido: HTML + CSS en `<style>` + JS en `<script>`. Sin build ni `node_modules`. Junto a él, una carpeta `images/` con las fotografías servidas desde el propio dominio y `videos/`, hoy sin uso en la página.

Desde agosto de 2026 el sitio **ya no es de una sola página**: hay tres páginas legales (`privacy.html`, `terms.html`, `accessibility.html`), cada una autocontenida con su propio `<style>` reducido. Ver RF-05.

Única dependencia en tiempo de ejecución además de las fuentes: **GSAP 3.12.2** por CDN, usada solo para la animación de las tarjetas al pasar el cursor.

### 3.2 Estructura del documento, en orden

| # | Sección | Ancla / ID | Notas |
|---|---|---|---|
| 1 | Top bar | `#topbar` | Zonas + horario. Se oculta al hacer scroll > 50px |
| 2 | Header | `#hdr` | Fijo. Gana `.scrolled` a > 50px. Logo + menú + teléfono |
| 3 | Hero | — | Imagen de fondo con Ken Burns, h1, párrafo, 3 badges. **Sin CTA** |
| 4 | Stats | `.stats` | 4 contadores animados (`.count[data-to]`) |
| 5 | Servicios | `#services` | 8 tarjetas. Ya no son pulsables |
| 6 | Marquesina | `#mq` | Ciudades, inyectadas por JS |
| 7 | Promises | — | 4 tarjetas = las 4 objeciones |
| 8 | Antes / después | `#cmp`, `#hnd` | Deslizador arrastrable |
| 9 | Cómo funciona | `#how` | 4 pasos |
| 10 | Zonas | `#areas` | Rejilla + iframe de Google Maps. Cada `.area[data-query]` recarga el mapa en esa ciudad |
| 11 | Reseñas | `#reviews` | 3 tarjetas tipo conversación de SMS |
| 12 | Nosotros | `#about` | Imagen + checklist |
| 13 | FAQ | `#faq` | 7 `<details>` |
| 14 | Banda CTA | `.cta-band` | Solo el titular. **Sin texto ni botón** |
| 15 | Pie | `footer` | 4 columnas. Sin newsletter ni franja de empleo |
| 16 | Modales de contacto | `#email-modal`, `#phone-modal` | Ocultos. Muestran correo y teléfono en grande |
| 17 | Botones flotantes | `#fabs` | WhatsApp siempre; *Text us* solo en móvil (`.mobile-only`). Aparecen a > 520px |
| 18 | Cookies | `#cookie` | Banner, cookie `vc_consent` |
| 19 | JSON-LD | — | `HouseholdCleaningService` |

**Retirado:** la sección de formulario `#estimate` (`#qform` / `#qok`), que ocupaba la
posición 13, y el alta de newsletter `#newsform` del pie.

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

Un IIFE con todo el comportamiento, más un bloque suelto al final para GSAP. Bloques:

- Header/topbar/FABs por scroll
- `IntersectionObserver` para `.reveal`
- Contadores animados
- Inyección de la marquesina
- Deslizador antes/después (pointer events + auto-demo al entrar en viewport)
- Banner de cookies (`document.cookie`, clave `vc_consent`)
- Click en tarjeta de zona → recarga el iframe del mapa en esa ciudad y la marca `.active`
- Brillo del botón siguiendo el cursor
- Fallback si una imagen falla
- Año del pie con `new Date().getFullYear()`
- Modales de contacto: en móvil el botón abre `mailto:` / `tel:`, en escritorio muestra el dato. El reparto se decide **en el clic** con `matchMedia('(max-width:767px), (pointer:coarse)')`, no al cargar
- *(fuera del IIFE)* GSAP: elevación de `.card`, `.promise` y `.phone-card` al pasar el cursor

> ⚠️ Todo el IIFE va en un mismo ámbito sin `try/catch`. Un `getElementById` que
> devuelva `null` aborta **todos los bloques posteriores**. Ya ocurrió: tras retirar
> el formulario, el script seguía buscando `#qform` y eso dejó sin funcionar los
> modales y las tarjetas de zona. Al borrar markup, hay que borrar su JS.

### 3.5 Contrato de datos del formulario *(no implementado hoy)*

El formulario ya no existe en el sitio. Esta tabla se conserva como el diseño de
campos acordado, para cuando se reconstruya con la API propia (RF-01). El
honeypot y los valores de cada campo siguen siendo válidos como punto de partida:

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

### 3.6 Qué se retiró, y qué queda en su lugar

| Retirado | Motivo | Consecuencia |
|---|---|---|
| Formulario `#estimate` completo | Decisión de la clienta: el contacto se atiende por teléfono y mensajería | RF-01 a RF-04 y RF-11 descartados |
| Los 7 botones `.btn` de la página | Decisión de la clienta | No queda ninguna llamada a la acción visual |
| Alta de newsletter `#newsform` | Decisión de la clienta: gestionará las comunicaciones por correo manualmente | RF-14 descartado |
| Franja "We're hiring" del pie | Decisión de la clienta | Afecta a F2-04 |
| Sección de vídeo | El autoplay con sonido lo bloquea el navegador | `videos/vicky.mp4` sigue en el repositorio, sin usar |

**Vías de contacto que quedan hoy**, y son las únicas:

1. Teléfono del header — `tel:` directo.
2. Botón flotante de WhatsApp — visible en todo dispositivo.
3. Botón flotante *Text us* — **solo móvil**, `sms:`.
4. Iconos de correo y teléfono del pie — en móvil abren la app; en escritorio abren un modal con el dato para copiarlo.
5. Los mismos datos en texto en la columna *Contact* del pie.

**Esto es deliberado y está confirmado.** En escritorio no hay formulario ni
botones: el usuario llama, escribe por WhatsApp o copia el correo del modal. La
petición de presupuesto, que es el objetivo 2 de la sección 1.2, se atiende por
esos canales y no dentro de la web. Ver la sección 8.

---

## 4. Restricciones técnicas (reglas duras)

1. **Stack:** HTML + CSS + JavaScript plano. Un solo archivo `index.html` para la página principal.
2. **Sin frameworks, sin build, sin bundler.** Nada de React, Vue, Tailwind, Sass ni paso de compilación.
3. **Sin dependencias de terceros en tiempo de ejecución**, salvo: las fuentes, GSAP para animación, el servicio de formulario y la analítica. Todas por CDN en la cabecera.
4. **Cero `localStorage` / `sessionStorage`.** Solo cookies con `try/catch` (ya implementado así).
5. **El CSS vive en el `<style>` del propio archivo.** No dividir en hojas externas mientras el sitio sea de una página.
6. **Todo el texto visible en inglés.** Comentarios de código y commits, en español si lo prefieres.
7. **Respetar `prefers-reduced-motion`.** Ya hay un bloque `@media` que anula animaciones; mantenerlo al añadir nuevas.
8. **No introducir precios** en ningún punto del sitio.

---

## 5. Deuda técnica conocida

| ID | Problema | Impacto |
|---|---|---|
| ~~DT-01~~ | ~~Las imágenes se cargan por *hotlink* desde `images.unsplash.com`.~~ | **Resuelto.** Las 14 imágenes se sirven desde `images/`. Falta convertirlas a WebP/AVIF y darles `width`/`height` (RF-07). |
| **DT-02** | Fuentes cargadas desde `fonts.googleapis.com` con `<link>` bloqueante. | Penaliza LCP y añade una petición a un tercero antes del consentimiento de cookies. |
| **DT-03** | El `<iframe>` de Google Maps se carga siempre, **antes** de que el usuario acepte cookies. | Carga scripts de terceros sin consentimiento y pesa en el rendimiento. |
| **DT-04** | El banner de cookies guarda la preferencia pero **no condiciona nada**: no hay ningún script que dependa de ella. | En cuanto se añada GA4 (RF-12) hay que respetar `vc_consent`, o el banner es decorativo. |
| ~~DT-05~~ | ~~El año del pie sale de `document.lastModified`.~~ | **Resuelto.** Usa `new Date().getFullYear()`. |
| ~~DT-06~~ | ~~El `<input type="file">` no tiene atributo `name`.~~ | **Sin objeto.** El formulario ya no existe. Tenerlo en cuenta al reconstruirlo. |
| **DT-07** | El deslizador antes/después usa la misma foto con un filtro CSS para el "antes". | Es honesto como maqueta, pero engañoso en producción. Necesita un par real. |
| ~~DT-08~~ | ~~Los testimonios son inventados.~~ | **Resuelto.** Sustituidos por cuatro mensajes reales de clientes. |
| **DT-09** | Queda CSS de bloques ya borrados: `.form-*`, `.fstep`, `.progress`, `.chip*`, `.upload`, `.hp`, `.news`, `.hiring`. Unas 45 reglas sin ningún elemento que las use. | Peso muerto y ruido para quien lea el archivo. Se puede borrar sin efecto visible. |
| **DT-10** | `images/bee-logo.png` pesa 2 MB y se muestra a 55 px. | Es la descarga más pesada del sitio. Bloquea el objetivo de rendimiento de RF-16. |
| **DT-11** | `videos/vicky.mp4` sigue versionado pero ninguna página lo referencia. | Infla el repositorio sin aportar nada. Borrarlo o volver a usarlo. |
| ~~DT-12~~ | ~~El `canonical` apunta a un dominio no contratado.~~ | **Resuelto.** Las cuatro páginas apuntan a `www.vickycleaningnaples.com`. `vickyscleaning.com` estaba registrado por un tercero. |

---

## 6. Requisitos funcionales pendientes

Prioridades: **P0** bloquea la publicación · **P1** debe estar en el lanzamiento · **P2** posterior.

> ⚠️ **RF-01, RF-02, RF-03, RF-04, RF-11 y RF-14 están descartados.** La clienta
> decidió no tener formulario ni newsletter en el sitio (ver secciones 3.6 y 8).
> Ya no bloquean la publicación. Se conservan tachados, no borrados: si algún día
> se reconsidera, el trabajo ya está analizado y no hay que rehacerlo.

---

### ~~RF-01 · Backend del formulario de presupuesto~~ — **descartado**

El formulario se retiró del sitio y no se reconstruye: la clienta atiende las peticiones por teléfono, WhatsApp, SMS y correo. Antes de retirarlo se había descartado ya el backend de terceros en favor de una API propia, que tampoco se construirá.

Lo que sigue se conserva por si la decisión cambia.

**Qué hacer**

- Reconstruir el formulario con los campos de la tabla 3.5.
- Definir el endpoint de la API propia: URL, método, formato y respuesta de error.
- Añadir `name="photos"` al input de archivo, o decidir que no se admiten adjuntos.
- Enviar con `fetch` y `FormData`.
- Recuperar la pantalla de éxito y añadir un estado de error visible si la petición falla.
- Deshabilitar el botón y mostrar un indicador mientras se envía, para evitar dobles envíos.

**Criterio de aceptación**

- [ ] Un envío real llega al correo de la clienta con **todos** los campos de la tabla 3.5, legibles y etiquetados.
- [ ] Si el usuario adjuntó fotos, llegan o hay un enlace de descarga; si el plan elegido no las admite, el campo se ha eliminado del formulario y en su lugar hay una instrucción de enviarlas por texto.
- [ ] Si la red falla, el usuario ve un mensaje de error y sus datos siguen en el formulario.
- [ ] Un doble clic en enviar no genera dos solicitudes.

---

### ~~RF-02 · Validación por pasos~~ — **descartado: no hay formulario**

Cuando el formulario existía, los botones *Continue* avanzaban sin comprobar nada, y la validación final solo miraba que tres campos no estuvieran vacíos. Al reconstruirlo, no repetir eso.

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

### ~~RF-03 · Notificación al negocio~~ — **descartado: no hay formulario**

La clienta prefiere trabajar por mensajes de texto, y ahora los recibe directamente en el móvil. No hay nada que notificar.

**Qué hacer**

- Mínimo viable: el correo de aviso llega a una dirección que ella tenga configurada en el móvil con notificación activa. Coste cero.
- Opcional si el volumen lo justifica: Zapier o Make conectando el formulario con Twilio para enviarle un SMS con nombre, teléfono, ciudad y servicio.
- El asunto del correo debe permitir triaje de un vistazo: `Nuevo estimate — {city} — {svc}`.

**Criterio de aceptación**

- [ ] Desde que se envía el formulario hasta que ella lo ve en el móvil pasan menos de 2 minutos.
- [ ] El aviso incluye el teléfono del cliente en formato pulsable.

---

### ~~RF-04 · Antispam real~~ — **descartado: no hay formulario**

El diseño incluía un honeypot (`company_website`), que frena bots básicos. No es suficiente cuando el formulario esté indexado.

**Qué hacer**

- Montar el captcha en la API propia: hCaptcha o Cloudflare Turnstile suelen ser opciones sin fricción y sin coste. **La verificación del token debe hacerse en el servidor**; hacerla solo en el cliente no protege nada.
- Mantener el honeypot.
- Descartar en cliente los envíos con menos de 3 segundos de vida del formulario.

**Criterio de aceptación**

- [ ] Un envío programático directo al endpoint sin resolver el captcha es rechazado.
- [ ] Un usuario real completa el formulario sin resolver ningún puzle visual.

---

### RF-05 · Páginas legales — **P0** *(hecho, pendiente de revisión jurídica)*

Creadas `privacy.html`, `terms.html` y `accessibility.html`. Los tres enlaces del pie de `index.html` ya apuntan a ellas, y las tres enlazan entre sí y de vuelta a la principal.

**Cómo se resolvió**

- **No replican la cabecera y el pie de la principal**, como decía el plan original. Sin sistema de compilación eso obligaba a duplicar 350 líneas de CSS en cada archivo, con cuatro copias que mantener sincronizadas. En su lugar son autocontenidas, con unas 40 reglas propias, los mismos tokens de color y las mismas tipografías, cabecera simple con logo y enlace de vuelta.
- La política de privacidad **describe lo que el sitio hace de verdad**, no un texto genérico: la cookie `vc_consent` y su duración, los tres terceros que se cargan (Google Maps, Google Fonts y el CDN de GSAP), y que hoy no hay formulario ni analítica. Si se añade GA4 (RF-12) hay que actualizarla.
- La declaración de accesibilidad **reconoce las carencias reales** de RF-15 en vez de afirmar conformidad total: el deslizador solo funciona arrastrando, las tarjetas de zona no son accesibles por teclado, los modales no mueven el foco y el contraste del amarillo no está auditado. Declarar una conformidad que no se tiene es peor que reconocerla.
- No llevan `<link rel="canonical">`, a la espera de resolver DT-12.

**Criterio de aceptación**

- [x] Los tres enlaces resuelven a páginas con contenido real.
- [x] La política menciona explícitamente qué datos se recogen y para qué.
- [ ] **Alguien cualificado ha revisado los tres textos.** Están redactados a partir del comportamiento real del sitio y de los datos de la sección 2, pero no son asesoramiento jurídico.

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

### RF-07 · Sustituir las fotografías — **P1** *(a medias)*

Las imágenes ya se sirven desde `images/` en lugar de Unsplash, lo que cierra DT-01. **Pero siguen siendo de stock**: solo se descargaron, no se sustituyeron. La clienta declaró tener fotos propias buenas.

**Qué hacer**

- Reemplazar los archivos de `images/` por las fotos reales, recortadas a las proporciones que usa cada bloque (hero panorámico, tarjetas 4:3, *about* 4:3).
- Convertir a WebP con AVIF de respaldo.
- `width` y `height` explícitos en cada `<img>` para evitar saltos de maquetación.
- Mantener `loading="lazy"` en todo salvo la imagen del hero.
- `alt` descriptivo y específico en cada una.

**Criterio de aceptación**

- [x] Cero peticiones a `images.unsplash.com`.
- [ ] Ninguna imagen es de stock.
- [ ] CLS < 0.1 en Lighthouse móvil.
- [ ] Ninguna imagen del hero supera los 250 KB.

---

### RF-08 · Testimonios reales — **P1** *(hecho, con un fleco)*

Los tres testimonios inventados se sustituyeron por **cuatro mensajes reales**, transcritos de capturas que aportó la clienta, manteniendo el formato de conversación.

Se publican **sin nombre, sin inicial, sin ciudad y sin estrellas**. No se recibió ninguno de esos datos y no se inventan: eso era justamente el problema anterior. Las estrellas también desaparecieron, porque un mensaje de texto no lleva una valoración de cinco estrellas asociada.

**Fleco pendiente**

- Aunque son anónimos, conviene que la clienta avise a esos clientes de que sus mensajes están publicados. Sin nombre el riesgo es bajo, pero es cortesía y evita sorpresas.
- Uno de los mensajes menciona que la casa queda vacía hasta noviembre. Es anónimo, así que no es identificable, pero si prefiere no publicar esa parte, basta recortar esa frase.

**Criterio de aceptación**

- [x] Cada testimonio corresponde a un mensaje real y verificable.
- [x] No se atribuye a nadie un nombre ni una valoración que no haya dado.
- [ ] La clienta ha avisado a las personas citadas.

---

### RF-09 · Marca: logo, favicon y og:image — **P1** *(a medias)*

El logo real (`images/bee-logo.png`) ya está en `.logo-mark` de cabecera y pie, en lugar del icono provisional en SVG. Sigue siendo mapa de bits, no vectorial, y pesa 2 MB (DT-10). Falta todo lo demás.

**Qué hacer**

- Pedir el archivo original. Si no existe, vectorizarlo.
- Redimensionar `bee-logo.png` a la resolución que realmente se usa (55 px, 110 px para pantallas de doble densidad).
- Generar favicon (32, 180 para Apple, 192 y 512 para Android) y `site.webmanifest`.
- Crear una `og:image` de 1200×630 y añadir la etiqueta correspondiente, que hoy falta.

**Criterio de aceptación**

- [x] El logo real aparece en cabecera y pie.
- [ ] El logo real aparece como favicon.
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

### ~~RF-11 · Preselección de servicio desde la tarjeta~~ — **descartado: no hay formulario**

Las tarjetas de servicio ya no son pulsables: se retiró el manejador que bajaba al formulario.

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
- Registrar como eventos: clic en cualquier `tel:`, clic en el botón de WhatsApp, clic en `sms:`, apertura de los modales de contacto de escritorio y clic en una tarjeta de zona. Cuando vuelva el formulario, añadir avance de paso y envío completado.
- Dar de alta Search Console y enviar el sitemap (RF-19).
- No instalar píxeles publicitarios todavía: la clienta dijo que la publicidad de pago va "más adelante".

**Criterio de aceptación**

- [ ] Con las cookies rechazadas, no se carga ningún script de GA4.
- [ ] En GA4 se distinguen llamadas, mensajes y WhatsApp como eventos separados.

---

### RF-13 · Verificar el canal de WhatsApp — **P1**

El botón apunta a `wa.me/12392856103`. Si ese número no está dado de alta en WhatsApp, el usuario recibe un error, que es peor que no tener el botón. En Estados Unidos el SMS es mucho más habitual.

**Qué hacer**

- Confirmar con la clienta si el número tiene WhatsApp.
- Si lo tiene: recomendar WhatsApp Business con mensaje de bienvenida y horario automático.
- Si no lo tiene: eliminar el botón y dejar solo *Text us*, que ya existe y funciona.

**Criterio de aceptación**

- [ ] El botón de WhatsApp abre una conversación real, o no existe.

---

### ~~RF-14 · Newsletter~~ — **descartado**

La clienta marcó en el cuestionario que quería enviar comunicaciones por correo, pero decidió después no tener alta en la web y **gestionar esos envíos manualmente**. Se retiró el bloque *Cleaning tips by email* del pie.

Si algún día envía correos a una lista, CAN-SPAM le sigue obligando a incluir su dirección física y un enlace de baja en cada envío, lo haga con una herramienta o a mano.

---

### RF-15 · Accesibilidad — **P1**

El sitio parte de una base razonable (enlace de salto, `aria-label` en los iconos, foco visible en los chips, respeto a `prefers-reduced-motion`), pero no se ha auditado.

**Qué hacer**

- Pasar axe o Lighthouse y corregir lo que salga.
- Verificar contraste real del amarillo sobre blanco (probablemente insuficiente para texto pequeño: usar `--brand-dark` para texto y reservar `--brand` para fondos de botón con texto marino encima).
- Recorrer todo el sitio solo con teclado, incluido el deslizador antes/después y los modales de contacto.
- Añadir alternativa accesible al deslizador (un `input[type=range]` oculto visualmente o control por flechas).
- Los modales se abren sin mover el foco a su interior ni devolverlo al cerrar, y no atrapan el tabulador. Cierran con Escape, que sí está.
- Las tarjetas de zona son `<div>` con manejador de clic: no reciben foco ni se activan con teclado. Convertirlas en `<button>`.

**Criterio de aceptación**

- [ ] Lighthouse Accessibility ≥ 95.
- [ ] Todo el sitio es recorrible y accionable solo con teclado, modales y zonas incluidos.
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

### RF-17 · SEO técnico y local — **P1** *(casi cerrado)*

**Hecho**

- `robots.txt` y `sitemap.xml` con las cuatro páginas y sus fechas reales de modificación.
- `canonical` correcto en las cuatro páginas, apuntando a `www.vickycleaningnaples.com`.
- `og:url` añadido.
- `title` y `meta description` únicos en cada página.
- JSON-LD `HouseholdCleaningService` con las 7 ciudades, horario, dirección y catálogo de 8 servicios.

**Pendiente**

- `og:image` de 1200×630 y `twitter:card` (depende de RF-09).
- Añadir `geo`, `url`, `image` y `priceRange` al JSON-LD. `priceRange` admite `$$` sin publicar precios, así que no contradice la decisión cerrada.
- Cuando exista la ficha de Google Business, añadir su URL a `sameAs`.
- Enviar el sitemap en Search Console tras el despliegue.

> ⚠️ El `canonical` declara **con `www`**. El dominio principal que se configure en el alojamiento tiene que ser el mismo, o el canónico y la redirección se contradicen. Si se prefiere el dominio sin `www`, hay que cambiar los cuatro `canonical`, el `og:url`, el `sitemap.xml` y la línea `Sitemap:` del `robots.txt`.

**Criterio de aceptación**

- [x] Los `canonical` apuntan al dominio real.
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

**F2-04 · Empleo.** Marcó las tres funciones (página de ofertas, formulario con currículum, aviso de datos) pero en prioridades lo dejó para después. La franja "We're hiring" que había en el pie se retiró, así que hoy no queda nada de empleo en el sitio.

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

Añadidas en agosto de 2026, a petición de la clienta:

- ❌ **Sin formulario de presupuesto.** La petición se atiende por teléfono, WhatsApp, SMS y correo. En escritorio la web no ofrece ninguna vía propia de contacto, y es intencionado.
- ❌ **Sin newsletter en la web.** La clienta gestionará las comunicaciones por correo manualmente.
- ❌ **Sin botones** en la página. Se retiraron los siete que había.
- ❌ **Sin franja de empleo** en el pie.
- ❌ **Sin sección de vídeo.** Se probó con el vídeo de TikTok y se descartó.
- ✅ **El botón *Text us* es solo para móvil.** En escritorio un enlace `sms:` no lleva a ninguna parte útil.
- ✅ **En escritorio, correo y teléfono se muestran en un modal** para copiarlos, en vez de lanzar una aplicación que el usuario quizá no tenga configurada.

---

## 9. Preguntas abiertas para la clienta

Bloquean requisitos concretos. Conviene resolverlas todas en una sola conversación.

| # | Pregunta | Bloquea |
|---|---|---|
| 1 | ¿El +1 (239) 285-6103 tiene WhatsApp dado de alta? | RF-13 |
| 2 | ¿Cuántas veces al año piensa editar la web ella misma? | F2-05, y el presupuesto |
| 3 | Que alguien cualificado revise los tres textos legales antes de publicar | RF-05 — la razón social ya se recibió: `Vicky's Cleaning` |
| 4 | En la pregunta 7.4 marcó a la vez "hay web anterior que sustituir" y "es nueva". ¿Existe una web antigua? ¿En qué dominio? | RF-06 — si hay dominio previo, hay que migrarlo y redirigir, no comprar uno nuevo |
| 5 | El correo es un Hotmail. ¿Seguro que no quiere correo con dominio propio? Resta credibilidad en presupuestos a empresas y comunidades. | RF-06 |
| 6 | Fotos reales del equipo y de trabajos, en alta resolución | RF-07, RF-10 |
| 7 | Avisar a los clientes de que sus mensajes están publicados, aunque sea sin nombre | RF-08 — las capturas ya se recibieron |
| 8 | Logo original, a poder ser vectorial | RF-09 |
| 9 | ¿Confirma Bonita Springs, Immokalee y Lehigh Acres como zonas de servicio? Están en la marquesina pero no en su listado. | Sección 2.4 |
| 10 | Presupuesto (respondió "por definir") y si acepta cuota mensual de mantenimiento | Alcance general |

Resueltas en agosto de 2026, recogidas ya en la sección 8:

| Pregunta | Respuesta |
|---|---|
| Retirado el formulario, ¿con qué se sustituye la petición de presupuesto? | Con nada dentro de la web. Se atiende por teléfono y mensajería |
| ¿Descarta la newsletter, o solo el bloque del pie? | Descarta la newsletter. La trabajará manualmente |
| ¿Sigue en pie construir la API propia del formulario? | No. Sin formulario no hace falta |

---

## 10. Definición de terminado — fase 1

El sitio se puede publicar cuando **todos** estos puntos sean ciertos:

- [ ] Los `RF` **P0** que siguen vivos están cerrados: RF-05 (páginas legales) y RF-06 (dominio y despliegue). RF-01 a RF-04 están descartados.
- [ ] No queda ni una foto de stock ni un testimonio inventado.
- [ ] Lighthouse móvil: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
- [ ] Todo el sitio es recorrible solo con teclado.
- [ ] Los enlaces `tel:`, `sms:` y de WhatsApp se han probado en un teléfono real, iOS y Android.
- [ ] Los modales de contacto se han probado en escritorio, y en móvil se ha comprobado que abren la aplicación.
- [ ] El `<link rel="canonical">` apunta al dominio real (DT-12).
- [ ] Las tres páginas legales existen y tienen contenido.
- [ ] La ficha de Google Business está verificada con el NAP idéntico al del sitio.
- [ ] Search Console indexa la web y el JSON-LD valida sin errores.
- [ ] La clienta ha revisado y aprobado el texto completo.

---

## Anexo A · `CLAUDE.md` para la raíz del repositorio

Ya está creado en la raíz. Esta copia se mantiene sincronizada con él.

```markdown
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
```

## Anexo B · Historial de encargos

**Primer encargo (hecho).** Empezar por RF-01, RF-02 y RF-04, con Web3Forms para
el backend, y resolver de paso DT-05 y DT-06.

**Cómo terminó.** Se descartó Web3Forms en favor de una API propia, y después se
retiró el formulario entero. La clienta confirmó que no quiere formulario ni
newsletter, así que RF-01 a RF-04, RF-11 y RF-14 quedaron descartados. Se
cerraron DT-01 y DT-05, se añadió GSAP y se hicieron los cambios de contenido y
contacto que recoge la sección 3.6.

**Siguiente encargo.** Por orden de rentabilidad:

1. RF-18, la ficha de Google Business. No es código y es lo que más llamadas trae.
   Ahora además es el principal canal de captación, porque la web no tiene ninguno propio.
2. RF-08 y RF-07: testimonios y fotos reales. Bloquean la publicación.
3. RF-05 y RF-06: páginas legales, dominio y despliegue. Los dos P0 que siguen vivos.
4. Limpieza sin dependencias externas: DT-09 (CSS muerto), DT-10 (logo de 2 MB),
   DT-11 (vídeo sin uso) y RF-15 (teclado en modales y tarjetas de zona).
