# Products

The nine categories and their labels come from the "I nostri prodotti" section
of `https://www.ipfs.it`, a site owned by the client. The photographs were
downloaded from `https://www.ipfs.it/images/` (the client holds the rights).

## Published categories

| Category | Image on the page |
| --- | --- |
| Alberghi e Ristoranti | `alberghi1.jpg` |
| Arte e Architettura | `arte3.jpg` |
| Associazioni ed Onlus | `associazioni3.jpg` |
| Moda | `moda1.jpg` |
| Cosmetica e Farmaceutica | `cosmesi1.jpg` |
| Immobiliare e Real Estate | `immobiliare2.jpg` |
| Sport e Turismo | `sport1.jpg` |
| Fiere ed Eventi | `eventi2.jpg` |
| Studi Legali e Finanza | `finanza1.jpg` |

## Image archive

`assets/products/` holds all 35 photographs from the original section, 3–4 per
category, not just the nine that are published: they are there so a shot can be
swapped without downloading it again. The filenames follow the originals,
except for the real-estate category, renamed from `brochure gabetti-crop-u3199.jpg`,
`cartello vetrina.jpg` and `cartolina.jpg` to `immobiliare1-3.jpg` to remove
spaces and references to a single customer.

## How they render on the page

The originals are small (roughly 312×208 px) and show printed pieces
"floating" on a white background. On the page they sit in a 210px-tall box with
`object-fit: contain` and `object-position: center bottom`, so the headings stay
aligned across columns and the images are never scaled beyond their own
resolution. If the client supplies high-resolution shots, that value can be
raised in `.product img`.

When replacing a shot, pick one with a white background: photographs taken in
context (for example `immobiliare1.jpg`, a roll-up shot indoors) break the
uniformity of the grid.
