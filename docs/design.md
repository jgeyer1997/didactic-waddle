# Design

Riferimento visivo: `source/poster.jpeg` (molto bianco, titoli grandi, filetti
sottili, corpo del testo leggero).

## Colori

Sono ammessi **solo** questi quattro valori. Ogni altra tinta deve essere una
trasparenza di uno di essi, dichiarata come variabile in `:root`.

| Variabile | Valore | Uso |
| --- | --- | --- |
| `--bianco` | `#FFFFFF` | sfondo della pagina |
| `--verde` | `#1E3A2E` | titoli di sezione, icone, pulsante primario, fascia "partner" |
| `--bordeaux` | `#6E1D2B` | occhielli, filetti, stati hover |
| `--nero` | `#000000` | titoli e testo corrente |

Toni secondari già definiti: `--testo` (nero 82%), `--testo-tenue` (58%),
`--linea` (12%), `--velo` (verde 4%, sfondo delle sezioni alternate).

## Tipografia

Montserrat da Google Fonts, pesi 400/500/600/700.

- Titoli — 600, 700 solo per l'`h1` dell'hero
- Testo — 400
- Testo in grassetto — 500/600 (`strong` è impostato a 600)

Le dimensioni dei titoli usano `clamp()`, quindi scalano senza media query.

## Convenzioni CSS

- File unico, ordinato per sezione della pagina; ogni blocco ha un commento.
- Nomi delle classi in italiano, stile BEM: `.prodotto__titolo`, `.fase__icona`.
- Variabili in `:root` per colori, larghezza massima e gutter; niente valori
  esadecimali sparsi nel foglio.
- Le icone di "Come lavoriamo" sono SVG inline che ereditano `stroke: var(--verde)`.

## Breakpoint

| Larghezza | Effetto |
| --- | --- |
| ≤ 1100px | nascosta la filigrana del marchio nell'hero |
| ≤ 980px | prodotti su 2 colonne, fasi 2×2, contatti e "chi siamo" su una colonna |
| ≤ 900px | menu a scomparsa con pulsante hamburger |
| ≤ 620px | tutto su una colonna, logo e spaziature ridotti |

## Immagini del marchio

`assets/img/logo.jpg` e `assets/img/marchio.png` sono ritagli di
`source/logo.jpeg` con lo sfondo portato a bianco puro: sul bianco della pagina
il JPEG originale lasciava un rettangolo grigio visibile.
