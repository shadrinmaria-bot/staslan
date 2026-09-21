# Ramen — a three-page minimal site

A small static site about ramen, in English, three pages sharing one minimalist style.

| Page | File | Content |
| --- | --- | --- |
| Story | `index.html` | A short history of ramen: arrival from China, the postwar yatai years, instant noodles, a timeline, the anatomy of a bowl, regional styles. |
| Recipe | `recipe.html` | Tokyo-style shoyu ramen for two: ingredient lists, eight steps, notes. |
| Places | `places.html` | Five well-known ramen places — two in Tel Aviv, three in Japan — plus counter etiquette. |

Everything is plain HTML and one stylesheet (`styles.css`). No build step, no
dependencies, no JavaScript: open `index.html` in a browser, or serve the folder
with anything (`npx http-server .`).

## Style

- Off-white paper, ink text, a single red accent; serif headings, sans body.
- Shared header, navigation and footer on all three pages.
- Responsive down to phone width, and a dark theme via `prefers-color-scheme`.

## Images

The illustrations in `images/` are hand-written SVG in the site's palette — no
external requests, no licensing to worry about, sharp at any size.

To use real photographs instead, drop them in `images/` and change the `src` on
the relevant `<img>`: the layout sizes images by their container, so a landscape
JPEG works in place of the wide SVGs (`yatai`, `bowl-side`, `ingredients`,
`pot`, `noren`) and a square one in place of `bowl-top.svg`. Keep the `alt` text
or write new text describing the photo.

| File | Used on | Subject |
| --- | --- | --- |
| `bowl-top.svg` | Story (hero), favicon | A bowl seen from above |
| `yatai.svg` | Story | A mobile ramen cart at night |
| `bowl-side.svg` | Story | Steaming bowl, chopsticks lifting noodles |
| `ingredients.svg` | Recipe (hero) | Ingredient flat-lay |
| `pot.svg` | Recipe | Simmering stockpot, ladle, tare |
| `noren.svg` | Places (hero) | Shop front with noren curtain |
| `map.svg` | Places | Israel and Japan |
