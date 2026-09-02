# Products

The nine categories and their labels come from the "I nostri prodotti" section
of `https://www.ipfs.it`, a site owned by the client. The photographs were
downloaded from `https://www.ipfs.it/images/` (the client holds the rights).

## Published categories

Every category shows the first image of its list when the page loads; the rest
are reached by clicking (see "Cycling through the shots" below).

| Category | Images, in order |
| --- | --- |
| Alberghi e Ristoranti | `alberghi1.jpg`, `alberghi.jpg`, `alberghi2.jpg`, `alberghi3.jpg` |
| Arte e Architettura | `arte3.jpg`, `arte.jpg`, `architetti.jpg`, `architetti2.jpg` |
| Associazioni ed Onlus | `associazioni3.jpg`, `associazioni.jpg`, `associazioni1.jpg`, `associazioni4.jpg` |
| Moda | `moda1.jpg`, `moda.jpg`, `moda2.jpg`, `moda3.jpg` |
| Cosmetica e Farmaceutica | `cosmesi1.jpg`, `cosmesi.jpg`, `farmaceutica.jpg`, `farmaceutica3.jpg` |
| Immobiliare e Real Estate | `immobiliare2.jpg`, `immobiliare3.jpg`, `immobiliare1.jpg` |
| Sport e Turismo | `sport1.jpg`, `sport.jpg`, `turismo.jpg`, `turismo3.jpg` |
| Fiere ed Eventi | `eventi2.jpg`, `eventi.jpg`, `eventi1.jpg`, `eventi3.jpg` |
| Studi Legali e Finanza | `finanza1.jpg`, `finanza.jpg`, `finanza2.jpg`, `finanza3.jpg` |

Three categories pair two families of filenames from the original site:
art with architecture, cosmetics with pharmaceuticals, sport with tourism.

## Image archive

`assets/products/` holds all 35 photographs from the original section, 3–4 per
category, and every one of them is now reachable from the page. The filenames
follow the originals, except for the real-estate category, renamed from
`brochure gabetti-crop-u3199.jpg`, `cartello vetrina.jpg` and `cartolina.jpg`
to `immobiliare1-3.jpg` to remove spaces and references to a single customer.

## How they render on the page

The originals are small (roughly 312×208 px) and show printed pieces
"floating" on a white background. On the page they sit in a 210px-tall box with
`object-fit: contain` and `object-position: center bottom`, so the headings stay
aligned across columns and the images are never scaled beyond their own
resolution. If the client supplies high-resolution shots, that value can be
raised in `.product img`.

When choosing which shot opens a category, pick one with a white background:
photographs taken in context (for example `immobiliare1.jpg`, a roll-up shot
indoors) break the uniformity of the grid, so they come later in the list.

## Cycling through the shots

Each `<img>` in the section carries a `data-images` attribute with the file
names of its category, in the order above, the one in `src` first. `main.js`
turns those images into buttons (`role`, `tabindex`, the `is-clickable` class
that gives them a pointer cursor) and a click — or Enter, or Space — moves to
the next name, wrapping round at the end. Nothing rotates on its own, and each
category is independent of the others. Without JavaScript the section is exactly
what the markup says: nine still images.
