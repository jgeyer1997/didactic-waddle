# Design

Visual reference: `source/poster.jpeg` (lots of white, large headings, thin
rules, light body text).

## Colours

**Only** these four values are allowed. Every other shade must be a
transparency of one of them, declared as a variable in `:root`.

| Variable | Value | Use |
| --- | --- | --- |
| `--white` | `#FFFFFF` | page background |
| `--green` | `#1E3A2E` | section headings, icons, primary button, "partner" band |
| `--burgundy` | `#6E1D2B` | eyebrows, rules, hover states |
| `--black` | `#000000` | headings and body text |

Secondary tones already defined: `--text` (black 82%), `--text-muted` (58%),
`--line` (12%), `--tint` (green 4%, background of the alternating sections).

## Typography

Montserrat from Google Fonts, weights 400/500/600/700.

- Headings — 600, with 700 only for the hero `h1`
- Body text — 400
- Bold text — 500/600 (`strong` is set to 600)

Heading sizes use `clamp()`, so they scale without media queries.

## CSS conventions

- A single file, ordered by page section; every block has a comment.
- English class names, BEM style: `.product__title`, `.step__icon`.
- Variables in `:root` for colours, maximum width and gutter; no hex values
  scattered through the stylesheet.
- The "Come lavoriamo" icons are inline SVGs that inherit `stroke: var(--green)`.

## Breakpoints

| Width | Effect |
| --- | --- |
| ≤ 1100px | the brand watermark in the hero is hidden |
| ≤ 980px | products in 2 columns, steps 2×2, contacts and "about" in one column |
| ≤ 900px | collapsible menu behind a hamburger button |
| ≤ 620px | everything in one column, smaller logo and spacing |

## Brand images

`assets/img/logo.jpg` and `assets/img/marchio.png` are crops of
`source/logo.jpeg` with the background pushed to pure white: against the white
of the page, the original JPEG left a visible grey rectangle.
