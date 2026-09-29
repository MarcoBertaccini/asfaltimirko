# DESIGN.md — Asfalti Mirko

Sistema visivo del sito dimostrativo. Concept: **campionario tecnico**. Asfalti Mirko non produce, rivende: il sito si comporta come uno schedario di materiali da costruzione (isolanti, membrane) organizzato per marchio, non come una landing commerciale. Riferimento di stile: Mutina (mutina.it) — non clonato, ne riprendiamo i principi: fotografia di prodotto protagonista, palette neutra e fredda, molto white space, griglia a 2 colonne per i contenuti in vetrina.

## Principi

- Il colore di marca è dato dal cliente (verde pisello scuro): unico accento, mai usato come sfondo diffuso — solo per link, CTA, stati hover, piccoli dettagli.
- Sfondo neutro **freddo** (grigio-pietra, non crema calda): coerente col mondo di isolanti/membrane bituminose, non con una landing "editoriale calda".
- Niente numerazione decorativa (01/02/03): la griglia dei 10 marchi non è una sequenza, quindi niente indici finti.
- Una sola famiglia allargata: tutto in un grotesk unico (General Sans), differenziato solo per peso/tracking tra titoli e corpo — coerente col tono "moderno" richiesto, evita la coppia serif-display + sans-body ormai standard.
- Testo allineato a sinistra ovunque (lettura da scheda tecnica), tranne la striscia loghi che scorre full-width.

## Colore (token in `styles/tokens.css`)

| Ruolo | Token | Hex |
|---|---|---|
| Fondo pagina | `--stone` | `#E8EAE3` |
| Sezioni alternate | `--stone-2` | `#DEE1D7` |
| Superfici/card | `--surface` | `#F6F7F3` |
| Testo | `--ink` | `#181A16` |
| Testo secondario | `--ink-soft` | `#565A4C` |
| Accento di marca | `--pea` | `#4E5C2A` |
| Accento hover/scuro | `--pea-dark` | `#3B4620` |
| Linee/divisori | `--line` | `#D2D5C7` |
| Superficie inversa (footer) | `--ink` su `--surface-inv` `#12130F` | |

Nessun secondo colore decorativo: il verde pisello resta l'unico segnale cromatico oltre al neutro.

## Tipografia (Google Fonts / Fontshare)

- **General Sans** (Fontshare), un'unica famiglia: pesi 500/600 per i titoli con tracking leggermente negativo alle dimensioni grandi, 400 per corpo e UI.
- Nessuna label maiuscolo-tutto-tondo, nessun eyebrow sopra i titoli, nessun trattino em nei meta.
- Scala fluida via `clamp()`, `--step--1 … --step-5`. Corpo testo max ~72 caratteri per riga.

## Layout

- Contenitore `--maxw: 1280px`, gutter fluido `clamp(1rem, 4vw, 3rem)`.
- Hero: titolo breve allineato a sinistra + striscia a scorrimento continuo dei 10 loghi marchio (unica animazione oltre al reveal, richiesta esplicitamente dal cliente).
- Griglia marchi: 2 colonne (desktop), 1 (mobile), card cliccabili con immagine prodotto + nome marchio + un'unica riga di descrizione — non 3+ colonne uniformi.
- Pagina marchio: header con logo/nome + blurb breve, poi griglia prodotti 3 colonne (desktop) / 2 (mobile), niente pagina di dettaglio per singolo prodotto.
- Divisori hairline (`--line`) usati con parsimonia, solo tra sezioni macro, non su ogni card.

## Motion

- Solo `transform`/`opacity`, `IntersectionObserver` per il reveal.
- Striscia loghi hero: marquee CSS in loop, in pausa su hover/focus e sotto `prefers-reduced-motion`.
- Reveal fade/rise all'ingresso delle sezioni, nessun'altra animazione (niente tilt, niente cursore custom: qui il tono è tecnico, non showcase-agenzia).

## Accessibilità

- Landmark semantici, skip link, focus visibile ad alto contrasto su `--pea-dark`.
- Alt descrittivi su loghi/prodotti reali; immagini stock dei marchi placeholder marcate come decorative solo se prive di informazione.
- Contrasto testo/fondo verificato (ink su stone, pea-dark su surface per i link).
- Tap target ≥ 44px su card e link di navigazione mobile.

## File

```
index.html              home: hero + striscia loghi + griglia marchi + zona servita + contatti
aziende/<slug>.html      una pagina per marchio (stesso template, 10 pagine)
styles/tokens.css        design tokens
styles/main.css          layout e componenti
scripts/hero.js          marquee loghi hero
scripts/main.js          nav mobile, reveal allo scroll
img/loghi/               loghi marchio (reali per Stiferite/Copernit, wordmark placeholder per gli altri)
img/prodotti/            immagini prodotto (reali per Stiferite/Copernit, stock coerenti per i placeholder)
```

## Nota sui dati

Dati reali: ragione sociale, indirizzo (Via Selo 29, 47122 Forlì FC), P.IVA/CF 04600230405, telefono 0543 795139, PEC asfalti.mirko@cert.cna.it, zona servita Forlì ed Emilia-Romagna. Marchi Stiferite e Copernit: nomi prodotto e descrizioni presi fedelmente dai rispettivi siti ufficiali. Marchi "Azienda 3"–"Azienda 10" e relativi prodotti sono placeholder dichiarati, da sostituire con i marchi reali del cliente.
