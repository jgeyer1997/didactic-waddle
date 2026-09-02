# IPSO FACTO SYNERGY SRL — sito vetrina

Home page dell'azienda grafica Ipso Facto Synergy SRL (Solaro, MI): profilo,
metodo di lavoro, categorie di prodotto e contatti.

Sito statico a pagina singola: HTML, CSS e un file JavaScript, senza build e
senza dipendenze oltre al font Montserrat servito da Google Fonts.

## Anteprima locale

```sh
python3 -m http.server
```

Poi apri <http://localhost:8000>. Serve un server locale (e non l'apertura
diretta del file) perché la mappa di Google non viene caricata da `file://`.

## Pubblicazione

Copia il contenuto della cartella, esclusa `source/`, su un qualsiasi hosting
statico.

## Documentazione

- [CLAUDE.md](CLAUDE.md) — mappa del progetto
- [docs/design.md](docs/design.md) — colori, tipografia, breakpoint
- [docs/content.md](docs/content.md) — origine dei testi e dei contatti
- [docs/products.md](docs/products.md) — categorie e immagini dei prodotti
