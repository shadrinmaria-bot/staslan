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
- **Scale** — three text sizes and two display steps, and nothing else, so the
  three pages share one hierarchy: 19px for leads, item headings and every
  accent numeral; 17px for all running text; 13px for notes, captions and
  uppercase labels. Years, step numbers and place numbers are a single rule —
  same face, size, weight and colour wherever they appear.
- **Colour** — OKLCH throughout: warm paper, warm ink and one vermilion
  accent, with every neutral tinted slightly toward the accent hue. Faint text
  clears 4.5:1 against the paper in both themes.
- **Space** — a 4pt scale with semantic names, fluid section rhythm, body
  measure capped at 66ch.
- **Print devices** — hairline rules, dotted menu leaders in the ingredient
  lists, numbered steps and places, one raised initial per page, a timeline
  split into two eras on parallel hairline axes, and a method split into two
  phases with each step's clock out in the right margin.
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

Seven photographs in `images/`, each served as WebP with a JPEG fallback:

```html
<picture>
  <source srcset="images/01-hero-bowl.webp" type="image/webp">
  <img src="images/01-hero-bowl.jpg" alt="…" width="1024" height="1024">
</picture>
```

Heroes carry `fetchpriority="high"`, everything below the fold is
`loading="lazy"`. Formats follow the position: heroes square or 3:2, in-body
figures 3:2, the wide band on the Places page 2:1. Together they weigh about
630 KB as WebP.

`images/bowl-top.svg` is the one drawing left in the repo — it is the
browser-tab icon, which needs to stay vector. The other illustrations were
replaced by the photographs and remain in git history.

`IMAGE-PROMPTS.md` holds the prompts the photographs were generated from, so a
replacement can be matched to the same set.

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
