# landoz.nl – website

Een statische website: losse HTML-pagina's, één stylesheet en geen database of CMS. Zet de inhoud van deze map in de root van je hosting en de site werkt.

## Wat er in de map zit

- `index.html`, `cases/`, `over-mij/` – de Nederlandse pagina's
- `en/` – de Engelse pagina's (`en/about/` is Over mij)
- `404.html` en `en/404.html` – pagina niet gevonden
- `css/style.css` – alle opmaak: lettertypes, kleuren (tokens), focusstijl, skip-link en de stijlen van alle onderdelen. De HTML bevat geen losse `style="…"` meer; elk element heeft een klasse met een herkenbare naam (zie hieronder)
- `images/` – alle beelden als WebP, `og/` – deelafbeeldingen voor LinkedIn (1200 × 630)
- `fonts/` – Roboto Slab en Source Sans 3, zelf gehost (geen Google Fonts), met hun licenties
- `favicon/` – het LZ-monogram, `cv/` – je CV als pdf
- `sitemap.xml` en `robots.txt` – voor Google

Elke pagina heeft al een titel, beschrijving, Open Graph-tags, hreflang voor NL/EN, favicon en het Plausible-script. De homepage en Over mij bevatten gestructureerde data over jou (Person-schema, met ANVA als werkgever). Elke casepagina heeft een kruimelpad (Home › Cases › case) voor Google.

## Lokaal bekijken

Dubbelklik op `index.html`. Alle links, afbeeldingen en lettertypes zitten in de map zelf, dus de site werkt ook rechtstreeks vanaf je computer. Alleen Plausible heeft internet nodig.

## Online zetten

Aanrader: **Netlify** of **Cloudflare Pages**. Beide zijn gratis voor een site als deze, regelen automatisch https en tonen `404.html` vanzelf.

1. Maak een account en sleep deze map naar het uploadvak (Netlify: "Deploy manually").
2. Koppel je domein landoz.nl in de instellingen en volg de DNS-instructies.
3. Controleer daarna één casepagina in de LinkedIn Post Inspector.

Blijf je liever bij je huidige hosting, upload dan de inhoud van deze map via FTP naar de root. Vraag je host hoe je `404.html` instelt als foutpagina.

## Vóór livegang aanpassen

- **E-mail**: alle contactknoppen gaan naar `landozeil@gmail.com`.
- **CV**: `cv/CV_Lando_Zeilstra.pdf` is je huidige CV. Vervang het door de bijgewerkte versie met dezelfde bestandsnaam.
- **Plausible**: maak een account op plausible.io en voeg landoz.nl toe, anders meet het script niets.
- **Toestemming**: controleer per opdrachtgever of de schermen en details getoond mogen worden.

## Klassenamen in de HTML

De namen volgen het onderdeel waar ze bij horen (BEM-stijl: `blok__element--variant`):

- `site-header`, `site-nav`, `lang-switch`, `site-footer` – kop, menu, taalknop en voettekst
- `case-card` (homepage en 404) en `case-row` (Cases-pagina) – de casekaarten. Alleen de titel (`case-card__link`) is de link; een onzichtbare laag maakt de hele kaart klikbaar. Laat die opbouw zo, dan leest een screenreader alleen de titel voor
- `case-intro`, `case-hero`, `case-body`, `case-section`, `case-design`, `figure`, `figure__image--phone` – de opbouw van een casepagina
- `case-pager` en `case-pager--top` – de vorige/volgende-balk onder en boven aan een case
- `hero`, `hero-illustration`, `featured`, `clients`, `services`, `quote` – de homepage
- `visually-hidden` – tekst die alleen een screenreader voorleest (bijvoorbeeld "opent in een nieuw tabblad" bij de cv-links)

## Afbeeldingen

De bestandsnaam eindigt op de breedte in pixels:

- `<case>-cover-800.webp` en `-1600.webp` – de intro-afbeelding van een case: een vlakke screenshot op het zandkleurige vlak (#F1EEE7). Gebruikt op de homepage, de Cases-pagina, de 404 en bovenaan de case
- `<naam>-646.webp` – desktopschermen (uit het laptopframe geknipt)
- `<naam>-442.webp` – telefoonschermen (uit het telefoonframe geknipt, met transparante hoeken)
- `<naam>-800.webp` / `-1600.webp` – overige screenshots en Figma-beelden
- `anva-hero-940.webp` / `-1880.webp` – het ANVA-scherm in de hero van de homepage

Nieuwe afbeelding? Gebruik WebP, maak een 800- en een 1600-versie voor brede beelden, geef `width` en `height` mee en schrijf een alt-tekst die beschrijft wat je ziet. Het bijschrift (`figcaption`) vertelt waarom het ertoe doet; laat alt en bijschrift dus niet hetzelfde zijn.

Deelafbeeldingen (`og/`) hebben dezelfde opzet: rode balk, kicker, titel en je naam links, de cover rechts. Pas je een casetitel aan, vernieuw dan ook `og/<case>.png` en `og/<case>-en.png`.

## Menu, vergroten, hover en printen

- **Afbeelding vergroten**: zet een afbeelding in `<a href="…-1600.webp" class="zoom">…</a>` en laad `js/lightbox.js` onderaan de pagina. Klikken of Enter opent een venster met de grote versie; Esc, de knop Sluiten of een klik naast de afbeelding sluit het en de focus gaat terug. Zonder JavaScript opent de link gewoon de grote afbeelding.
- **Hamburgermenu**: onder 880 px klapt het menu in achter een knop "Menu" (`js/menu.js`, op elke pagina geladen). De knop heeft `aria-expanded`, Esc sluit het menu en zet de focus terug op de knop, en een klik ernaast sluit het ook. Zonder JavaScript blijft het gewone menu zichtbaar. Vanaf 880 px staat het volledige menu in de header. De header is op alle schermbreedtes sticky.
- **Casekaarten**: bij hover krijgt de kaart een rode rand, een lichte schaduw en een onderstreepte titel.
- **Printen of opslaan als pdf**: menu, vorige/volgende-balken, contactblok en voettekst vallen weg en afbeeldingen breken niet over een pagina-einde (`@media print` onderaan `style.css`).

## Getest

Alle pagina's zijn getest met axe-core op WCAG 2.0 tot en met 2.2 (A en AA) plus best practices, op 390 en 1280 pixels breed: geen automatische overtredingen. Ook gecontroleerd: reflow op 320 px, vergrote tekstafstand (1.4.12), kopstructuur, zichtbare focus bij toetsenbordgebruik en de toegankelijkheidsboom (wat een screenreader voorleest). Doe na grote wijzigingen nog een handmatige test met VoiceOver (Cmd+F5).
