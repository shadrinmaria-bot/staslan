# Ramen — a three-page minimal site

A small static site about ramen, in English, three pages sharing one minimalist style.

| Page | File | Content |
| --- | --- | --- |
| Story | `index.html` | A short history of ramen: arrival from China, the postwar yatai years, instant noodles, a timeline, the anatomy of a bowl, regional styles. |
| Recipe | `recipe.html` | Tokyo-style shoyu ramen for two: ingredient lists, eight steps, notes. |
| Places | `places.html` | Five well-known ramen places — two in Tel Aviv, three in Japan — plus counter etiquette. |

Plain HTML, two stylesheets, no JavaScript, no build step and no dependencies:
open `index.html` in a browser, or serve the folder with anything
(`npx http-server .`).

## Style

The design direction is recorded in `.impeccable.md`; the short version:

- **Type** — Shippori Mincho for display, Zen Kaku Gothic New for text. Both
  are contemporary Japanese faces whose Latin reads warm and precise, which
  suits the subject better than another editorial serif.
- **Colour** — OKLCH throughout: warm paper, warm ink and one vermilion
  accent, with every neutral tinted slightly toward the accent hue. Faint text
  clears 4.5:1 against the paper in both themes.
- **Space** — a 4pt scale with semantic names, fluid section rhythm, body
  measure capped at 66ch.
- **Print devices** — hairline rules, dotted menu leaders in the ingredient
  lists, numbered steps and places, one raised initial per page.
- Responsive to phone width, dark theme via `prefers-color-scheme`, one
  staggered reveal on load that respects `prefers-reduced-motion`.

## Fonts

`fonts.css` carries both families as Latin-only subsets embedded as data URIs:
no third-party requests, and the type still renders when a page is opened
straight from disk (Chrome refuses font files over `file://` as cross-origin).

The woff2 sources live in `fonts/`. To rebuild the stylesheet after changing
them:

```sh
python3 tools/build-fonts.py
```

## Images

The illustrations in `images/` are hand-written SVG in the site's palette — no
external requests, no licensing to worry about, sharp at any size.

`IMAGE-PROMPTS.md` holds a matched set of generation prompts if you want
photographs instead, with the filename and aspect ratio each one should use.

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
