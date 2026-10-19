# Asfalti Mirko SRL: sito

Sito catalogo per *Asfalti Mirko SRL*, rivenditore a Forlì di prodotti
impermeabilizzanti e isolanti termici di otto marchi diversi.

Statico, senza build né dipendenze: HTML, CSS e JavaScript vanilla.
Identità visiva ispirata a Mutina (fotografia di prodotto, palette neutra fredda,
accento verde pisello) - vedi [`DESIGN.md`](DESIGN.md).

## Anteprima

Apri semplicemente `index.html` nel browser. In alternativa, un server locale:

```bash
python -m http.server 8125
```

poi visita `http://localhost:8125`.

## Struttura

```
index.html                 home: hero + striscia loghi + griglia 8 marchi + zona servita + FAQ + contatti
aziende/copernit.html      indice categorie Copernit (membrane, primer) + 6 sottopagine
aziende/sekure.html        indice categorie Sekure (linee vita, accessori) + 2 sottopagine
aziende/stiferite.html     pagina marchio
aziende/isolex.html        pagina marchio
aziende/knaufinsulation.html pagina marchio
aziende/eternoivica.html   pagina marchio
aziende/tema.html          pagina marchio
aziende/coveritalia.html   pagina marchio
styles/tokens.css          design tokens (colori, tipografia, spaziature)
styles/main.css            layout e componenti
scripts/hero.js            marquee loghi hero
scripts/main.js            nav mobile, reveal allo scroll
img/loghi/                 loghi marchio
img/prodotti/               foto prodotto
img/hero.webp              foto hero (stock, da sostituire)
img/og.png, img/favicon.svg, img/apple-touch-icon.png   asset social/favicon
robots.txt, sitemap.xml    indicizzazione motori di ricerca
DESIGN.md                  documentazione del sistema visivo
```

## Note sui contenuti

- **Dati reali:** ragione sociale, indirizzo (Via Selo 29, 47122 Forlì FC), P.IVA/CF
  (04600230405), telefono (0543 795139), email (asfaltimirkosrl@libero.it), PEC
  (asfalti.mirko@cert.cna.it), zona servita (Forlì ed Emilia-Romagna).
- **Tutti gli otto marchi** (Copernit, Stiferite, Isolex, Knauf Insulation,
  Eternoivica, TeMa, Cover Italia, Sekure): nomi prodotto, descrizioni, loghi e
  foto presi fedelmente dai rispettivi siti ufficiali.
- Logo del cliente: icona marchio (`img/loghi/asfalti-mirko-mark.svg`, variante
  chiara per il footer) convertita dal file DWG fornito dal cliente e
  ricolorata nel verde pisello del brand (il DWG usava un verde CAD generico).
  Usata anche per favicon, apple-touch-icon e immagine social.
- Foto hero (`img/hero.webp`, copertura in lamiera grecata): stock da Unsplash,
  da sostituire con una foto reale del cliente quando disponibile.

## Pubblicazione (GitHub Pages)

Impostazioni - Pages - *Deploy from a branch* - `main` / `root`. Il sito è già
relativo alle path, quindi funziona anche in sottocartella. Dominio:
`asfaltimirko.it` (file `CNAME`, DNS su Cloudflare, non gestito da qui).

---
Sito ufficiale di Asfalti Mirko SRL, pubblicato su `asfaltimirko.it`.
