# IPSO FACTO SYNERGY SRL — showcase site

Home page for the graphic design company Ipso Facto Synergy SRL (Solaro, MI):
profile, working method, product categories and contact details.

Static single-page site: HTML, CSS and one JavaScript file, with no build step
and no dependencies beyond the Montserrat font served by Google Fonts.

The page content is written in Italian, since that is the client's audience.
Everything else — comments, documentation and code identifiers — is in English.

## Local preview

```sh
python3 -m http.server
```

Then open <http://localhost:8000>. A local server is required (rather than
opening the file directly) because the Google map does not load from `file://`.

## Publishing

Copy the contents of the folder, excluding `source/`, to any static host.

## Documentation

- [CLAUDE.md](CLAUDE.md) — project map
- [docs/design.md](docs/design.md) — colours, typography, breakpoints
- [docs/content.md](docs/content.md) — provenance of the copy and contact details
- [docs/products.md](docs/products.md) — product categories and images
