# graphenglass.com — nueva web

Sitio estático (HTML + CSS + JS, sin dependencias ni build). Se despliega subiendo la carpeta `site/` tal cual a cualquier hosting o CDN.

Para verlo en local: `python3 -m http.server 8000` dentro de esta carpeta.

## Estructura

| Página | Función |
|---|---|
| `index.html` | Home — los cinco bloques definidos en la presentación de estructura |
| `capabilities.html` | Capacidades, metodología vertical integrada y calendario de 10 semanas |
| `technologies.html` | Índice de tecnologías y mapa de posicionamiento industrial |
| `multilayer.html` | Ficha MultiLayer + tabla de prestaciones + signature management |
| `gohnex.html` | Ficha GOHNEX + comparativa GOHNEX / GOHNEX HD |
| `applications.html` | Índice de aplicaciones |
| `uav-defence.html` | Vertical estratégica UAV / Defence |
| `infrastructure.html` | Aplicación en infraestructura |
| `architectural.html` | Series Architectural y Ambient |
| `industrialization.html` | Capacidad industrial — GraphenTower |
| `about.html` | Compañía, I+D, propiedad industrial y trayectoria |
| `contact.html` | Formulario de proyecto con campos de routing a CRM |
| `legal.html` | Estructura del aviso legal, pendiente de redacción jurídica |

El contenido sigue `../content/graphenglass-com.md`.

## Imágenes

Las fotografías proceden de la presentación comercial vigente (`Graphenglass_SDGPLATIN_DIGEID.pdf`), reescaladas a 1800 px y comprimidas.

Donde no había foto adecuada se ha dejado un **hueco marcado** (`<div class="ph">`) con la descripción de la imagen que falta. Para sustituirlo, cambiar el `div` por `<img src="assets/img/archivo.jpg" alt="...">`. Huecos pendientes:

- Celosía / fachada Architectural (home, applications, architectural — 4 huecos)
- Diagrama del proceso grafeno + fibras + resinas → GOHNEX / MultiLayer (technologies)
- Pieza GOHNEX de geometría 3D compleja sobre fondo claro (gohnex)
- Retrato del equipo fundador o planta (about)
- Primeras piezas de grafeno compacto, para el bloque de trayectoria (about)
- Aplicación industrial futura (applications)

## Pendientes antes de publicar

1. **Formulario**: no tiene endpoint. Falta conectar el envío y el routing al CRM (los campos `origen`, `lead_type` y `application` ya están preparados).
2. **Aviso legal y cookies**: `legal.html` es solo la estructura; debe redactarlo asesoría jurídica conforme a RGPD/LOPDGDD, con banner de consentimiento.
3. **Enlaces externos**: `Request Manufacturing` (industrialization) y las marcas de producto (infrastructure) apuntan a `#` hasta que se confirmen los dominios.
4. **Versión en inglés**: el sitio está en español con nomenclatura y CTAs en inglés. Para mercado internacional de defensa hará falta versión EN completa.
5. **Tipografías**: se cargan Inter y JetBrains Mono desde Google Fonts. Si se prefiere alojarlas en el propio servidor, sustituir el `<link>` de cada página.
6. **Logotipo**: se usa el nombre en texto. Falta el logotipo real de la marca y un favicon definitivo (ahora hay un `favicon.svg` provisional).
