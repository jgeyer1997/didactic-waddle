# IPSO FACTO SYNERGY SRL — showcase site

Static single-page site. No build step, no dependencies.
Local preview: `python3 -m http.server`, then open `http://localhost:8000`.

## Language

The page copy is in Italian — that is the client's audience, and the wording is
fixed by them. Everything else is in English: code comments, documentation,
CSS class names and custom properties, HTML ids, JavaScript identifiers.
Do not introduce new Italian identifiers or comments.

## Files

| Path | Contents |
| --- | --- |
| `index.html` | all page content |
| `assets/css/styles.css` | all styles |
| `assets/js/main.js` | mobile menu and footer year |
| `assets/img/` | logo (`logo.jpg`) and brand mark (`marchio.png`) |
| `assets/products/` | product photographs |
| `source/` | the client's original material, not published |

## Constraints

The palette, the fonts and the provenance of the copy are fixed by the client.
Read the relevant document **before** making changes:

- [docs/design.md](docs/design.md) — colours, typography, CSS conventions, breakpoints
- [docs/content.md](docs/content.md) — where each piece of copy and each contact detail comes from
- [docs/products.md](docs/products.md) — the 9 categories and their images
