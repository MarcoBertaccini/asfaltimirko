# Asfalti Mirko: sito (demo)

Sito **dimostrativo** catalogo per *Asfalti Mirko srl*, rivenditore a Forlì di
prodotti impermeabilizzanti e isolanti termici di circa dieci marchi diversi.

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
index.html              home: hero + striscia loghi + griglia 10 marchi + zona servita + contatti
aziende/stiferite.html   pagina marchio reale, 5 prodotti
aziende/copernit.html    pagina marchio reale, 4 prodotti
aziende/azienda-3..10    pagine marchio placeholder, 5 prodotti segnaposto ciascuna
styles/tokens.css        design tokens (colori, tipografia, spaziature)
styles/main.css          layout e componenti
scripts/hero.js          marquee loghi hero
scripts/main.js          nav mobile, reveal allo scroll
img/loghi/                loghi marchio (reali per Stiferite/Copernit, wordmark placeholder per gli altri)
img/prodotti/              foto prodotto (reali per Stiferite/Copernit, stock coerenti per i placeholder)
img/hero.webp            foto hero (stock, da sostituire)
img/og.png, img/favicon.svg, img/apple-touch-icon.png   asset social/favicon placeholder
DESIGN.md                documentazione del sistema visivo
```

## Note sui contenuti

- **Dati reali:** ragione sociale, indirizzo (Via Selo 29, 47122 Forlì FC), P.IVA/CF
  (04600230405), telefono (0543 795139), email (asfaltimirko@libero.it), PEC
  (asfalti.mirko@cert.cna.it), zona servita (Forlì ed Emilia-Romagna).
- **Marchi Stiferite e Copernit:** nomi prodotto, descrizioni e immagini presi
  fedelmente dai rispettivi siti ufficiali (stiferite.com, copernit.it).
- **Marchi "Azienda 3"-"Azienda 10"** e i relativi prodotti sono placeholder
  dichiarati (segnalati `[DA VERIFICARE]` nel sito), da sostituire con i marchi
  reali del cliente. Al posto del logo mostrano un'icona segnaposto "foto da
  inserire" (nel carosello e nelle card); le foto prodotto associate sono stock
  generiche da Unsplash, coerenti col settore ma da sostituire.
- Logo del cliente: icona marchio (`img/loghi/asfalti-mirko-mark.svg`, variante
  chiara per il footer) convertita dal file DWG fornito dal cliente e
  ricolorata nel verde pisello del brand (il DWG usava un verde CAD generico).
  Usata anche per favicon, apple-touch-icon e immagine social.
- Foto hero (`img/hero.webp`, copertura in lamiera grecata): stock da Unsplash,
  da sostituire con una foto reale del cliente quando disponibile.
- Orari di apertura non forniti dalla scheda cliente, segnalati `[DA VERIFICARE]`.

## Pubblicazione (GitHub Pages)

Impostazioni - Pages - *Deploy from a branch* - `main` / `root`. Il sito è già
relativo alle path, quindi funziona anche in sottocartella. Dominio previsto:
`asfaltimirko.zenith-studio.it` (file `CNAME`).

---
Sito realizzato come demo. Non è il sito ufficiale di Asfalti Mirko srl.
