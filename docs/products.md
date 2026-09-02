# Prodotti

Le nove categorie e le etichette provengono dalla sezione "I nostri prodotti" di
`https://www.ipfs.it`, sito di proprietà del cliente. Le fotografie sono state
scaricate da `https://www.ipfs.it/images/` (il cliente ne detiene i diritti).

## Categorie pubblicate

| Categoria | Immagine in pagina |
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

## Archivio immagini

`assets/products/` contiene tutte e 35 le fotografie della sezione originale,
3–4 per categoria, non solo le nove pubblicate: sono disponibili per sostituire
uno scatto senza tornare a scaricarlo. I nomi seguono quelli di origine, tranne
la categoria immobiliare, rinominata da `brochure gabetti-crop-u3199.jpg`,
`cartello vetrina.jpg` e `cartolina.jpg` in `immobiliare1-3.jpg` per togliere
spazi e riferimenti a un singolo cliente.

## Resa in pagina

Gli originali sono piccoli (circa 312×208 px) e ritraggono stampati che
"galleggiano" su fondo bianco. In pagina occupano un riquadro alto 210px con
`object-fit: contain` e `object-position: center bottom`: così i titoli restano
allineati fra le colonne e le immagini non vengono mai ingrandite oltre la loro
risoluzione. Se il cliente fornisce scatti ad alta risoluzione si può alzare
quel valore in `.prodotto img`.

Sostituendo uno scatto, sceglierne uno con fondo bianco: le foto ambientate
(per esempio `immobiliare1.jpg`, un roll-up ripreso in un interno) spezzano
l'uniformità della griglia.
