# landoz.nl – website

Een statische website: losse HTML-pagina's, één stylesheet en geen database of CMS. Zet de inhoud van deze map in de root van je hosting en de site werkt.

## Wat er in de map zit

- `index.html`, `cases/`, `over-mij/` – de Nederlandse pagina's
- `en/` – de Engelse pagina's (`en/about/` is Over mij)
- `404.html` en `en/404.html` – pagina niet gevonden
- `css/style.css` – kleuren, focusstijl, skip-link en mobiele aanpassingen
- `images/` – foto's als WebP, `og/` – deelafbeeldingen voor LinkedIn
- `fonts/` – Roboto Slab en Source Sans 3, zelf gehost (geen Google Fonts), met hun licenties
- `favicon/` – het LZ-monogram, `cv/` – je CV als pdf
- `sitemap.xml` en `robots.txt` – voor Google

Elke pagina heeft al een titel, beschrijving, Open Graph-tags, hreflang voor NL/EN, favicon en het Plausible-script. De homepage en Over mij bevatten gestructureerde data over jou (Person-schema).

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
- **Placeholders**: zoek op `[` om alle plekken te vinden die nog ingevuld moeten worden (cijfers en namen bij testimonials).
- **Plausible**: maak een account op plausible.io en voeg landoz.nl toe, anders meet het script niets.
- **Toestemming**: controleer per opdrachtgever of de schermen en details getoond mogen worden.

## Getest

Alle 20 pagina's zijn getest met axe-core op WCAG 2.0 tot en met 2.2 (A en AA) plus best practices, op 320 en 1280 pixels breed: geen automatische overtredingen en geen horizontaal scrollen. Alle links en afbeeldingen werken zowel lokaal (dubbelklikken) als via een webserver. Doe vóór je de site WCAG AA noemt nog een handmatige test met toetsenbord en screenreader.
