# Image prompts

The eight photographs on the site were generated from these prompts and are
live in `images/` — keep this file as the reference for replacing any of them,
so a new picture lands in the same set rather than beside it.

They share one house-style block, which is what makes the set read as a single
commissioned shoot rather than eight unrelated pictures — paste that block
into **every** prompt. The exception is the banner, prompt 8, which starts
from a photograph of its own.

## How to use

1. Generate each image with the house style + the per-image prompt below.
2. Save it under the **filename** given, at the **aspect ratio** given.
3. Put the files in `images/` and push. Long edge ≤ 2000 px.
4. Each one is then converted to WebP plus a JPEG fallback and wired into the
   page with its own `alt` text; the panorama is cropped to 2:1 for the band.

Keep `images/bowl-top.svg` in the repo even after swapping the hero — it is
also the browser-tab icon, which needs to stay vector.

---

## House style — prepend to every prompt

> Editorial food photography for a minimalist print magazine. Warm
> paper-cream backdrop (#fdf9f6), soft diffused north-window daylight, gentle
> honest shadows, matte surfaces. Muted warm palette: cream, warm grey, deep
> brown-black, and a single vermilion red (#b03d26) accent. Generous negative
> space, calm restrained composition, nothing cluttered or styled-up. Medium
> format look, 80mm, f/4, natural colour, fine film grain. No text, no
> signage, no logos, no watermarks.

**Negative prompt** (if your tool takes one)

> text, letters, watermark, logo, brand name, 3D render, CGI, cartoon,
> illustration, oversaturated, HDR, teal-orange grading, cluttered props,
> plastic food, hands, faces, busy background

---

## 1 · Hero bowl — `01-hero-bowl.jpg` · 1:1 (1400 × 1400)

> Directly overhead, one bowl of shoyu ramen centred on a cream surface. Clear
> amber broth, fine wavy noodles, restrained toppings: two slices of rolled
> chashu pork, a halved marinated egg with a jammy orange yolk, one sheet of
> nori leaning against the rim, thin scallion rings, a few menma bamboo
> shoots. A pair of plain wooden chopsticks resting across the rim at a slight
> angle. Faint steam. A wide, quiet margin of empty cream all around the bowl.

Where it goes: Story hero, and the pattern for any future square image.

## 2 · Night yatai — `02-yatai-night.jpg` · 3:2 (1800 × 1200)

> A small wooden yatai — a mobile ramen cart — parked on a quiet street after
> dark. One red-orange paper lantern glowing, a plain dark noren curtain under
> the roof, steam lifting off a pot on the counter. Night falls away into
> brown-black behind. One customer present only as a soft silhouette at the
> counter, unrecognisable. Warm pools of lamplight, cinematic but calm, no
> readable writing anywhere.

Where it goes: Story, "Arrival by port".

## 3 · The lift — `03-bowl-chopsticks.jpg` · 3:2 (1800 × 1200)

> Close three-quarter view of a ramen bowl with chopsticks lifting a tangle of
> noodles clear of the broth, caught mid-lift. Steam catching the light from
> the side. The broth surface and one slice of chashu visible below. Only
> hands' absence — chopsticks enter the frame from the top right, no hands or
> arms. Background dissolves into soft cream shadow.

Where it goes: Story, "Regions, briefly".

## 4 · Ingredients — `04-ingredients.jpg` · 3:2 (1800 × 1200)

> Overhead flat lay of raw ramen components on cream, spaced apart with air
> between them, almost like a specimen chart: a nest of fresh yellow alkaline
> noodles, two brown eggs, a slab of raw pork belly, three scallions, two
> sheets of dark nori, a head of garlic, a knob of ginger, a small dark glass
> bottle of soy sauce. No boards, no linen, no scattered props.

Where it goes: Recipe hero.

## 5 · The pot — `05-broth-pot.jpg` · 3:2 (1800 × 1200)

> A tall stainless steel stockpot on a stove, lid off, pale golden chicken
> broth at a bare simmer, steam rising in a slow column. A ladle resting
> beside it and a small dish of dark soy tare in the foreground. The kitchen
> behind reduced to soft cream and warm grey shapes, out of focus.
> Workmanlike, quiet, not glossy.

Where it goes: Recipe, "Method".

## 6 · Shopfront — `06-shopfront.jpg` · 3:2 (1800 × 1200)

> The exterior of a small ramen shop at dusk, seen straight on. A deep
> vermilion noren curtain hanging in the doorway, one paper lantern lit beside
> it, warm light spilling out onto the pavement. Through the gap under the
> curtain, two customers at a counter as soft silhouettes. Plain façade, no
> legible signage or characters anywhere. Blue-grey dusk against warm interior
> light.

Where it goes: Places hero.

## 7 · Alley — `07-alley-panorama.jpg` · 2:1 (2000 × 1000)

> A narrow alley of small ramen shops at night, lanterns receding into the
> distance, wet asphalt throwing back warm reflections. Deep shadow with warm
> highlights, no readable signs, no faces, nobody identifiable. Panoramic,
> still, slightly lonely.

Where it goes: Places, the wide band between the Israel and Japan sections.
This one replaces the Israel↔Japan diagram, so its caption will change with it.

## 8 · Banner, from your own photograph — `08-banner.jpg` · 21:9 (2400 × 1030)

**Done** — the banner is now Stas at a counter at night, made from his own
photograph with variant A below. The notes stay here for regenerating it.

This one is image-to-image: you supply a photograph of yourself holding a
bowl, and the model relights and reframes it into the site's banner rather
than inventing a new person. Dropping a new `08-banner` in `images/` is the
whole swap.

Two things the banner needs from the composition, whichever variant you pick:
**you on the right, the left two-thirds quiet**, because the label and the
title sit bottom-left over the photograph; and **width** — it spans the whole
window, so anything under about 2000 px softens on a large screen.

The page crops the banner from the right edge, so a horizontal crop only ever
eats the empty left side and never the subject. On a phone the box is close to
square and keeps roughly the right half of the frame, so the bowl wants to be
somewhere in the right two-thirds, not at the far left.

### The source photograph

What gives the model the most to work with:

- Waist-up or half-length, shot **horizontally**, both hands on the bowl at
  about chest height. A tight headshot leaves nothing to crop into a wide band.
- Even, soft light on your face — a window, or shade outdoors. No hard flash,
  no strong colour cast from a screen or a neon sign.
- A plain, uncluttered background; it is going to be replaced anyway, but a
  busy one bleeds into the result.
- Looking either straight at the camera or down into the bowl. Both read well;
  down into the bowl is warmer and needs less of your face to survive editing.
- 1500 px or more on the long edge.

### Variant A · night counter — recommended

Works with the banner exactly as it is built: near-white type over a dark
photograph.

> Use the supplied photograph as the source for the person. Keep their face,
> hair, build, glasses and clothing exactly as they are — do not restyle,
> beautify, slim, smooth, age or otherwise change them, and do not replace
> them with a different person. Only relight them and rebuild the scene
> around them.
>
> Rebuild it as a wide editorial banner: they are sitting at a small ramen
> counter late at night, holding a steaming bowl of ramen in both hands, lit
> by one warm overhead lamp above the counter. Place them in the right third
> of the frame, turned slightly toward the camera. The left two-thirds falls
> away into deep brown-black shadow with almost nothing in it. Warm amber
> light on the bowl, their hands and one side of their face; steam rising and
> catching the lamp. Muted warm palette: cream, warm grey, brown-black and a
> single vermilion accent. Medium format look, 80mm, f/2.8, natural colour,
> fine film grain. No text, no signage, no logos, no watermarks.
>
> 21:9, 2400 × 1030.

### Variant B · cream daylight

Matches the daylight photographs on the Story and Recipe pages. It needs the
banner's other treatment — dark type over a pale scrim — which is one class
in the markup: `<section class="banner is-light">`.

> Use the supplied photograph as the source for the person. Keep their face,
> hair, build, glasses and clothing exactly as they are — do not restyle,
> beautify, slim, smooth, age or otherwise change them, and do not replace
> them with a different person. Only relight them and rebuild the scene
> around them.
>
> Rebuild it as a wide editorial banner: they are standing against a plain
> warm paper-cream wall in soft diffused north-window daylight, holding a
> bowl of ramen at chest height in both hands, looking down into it. Place
> them in the right third of the frame; the left two-thirds is empty
> paper-cream wall. Gentle honest shadows, matte surfaces, faint steam, no
> props and nothing else in the frame. Muted warm palette: cream, warm grey,
> brown-black and a single vermilion accent. Medium format look, 80mm, f/4,
> natural colour, fine film grain. No text, no signage, no logos, no
> watermarks.
>
> 21:9, 2400 × 1030.

### Negative prompt

> different face, changed identity, beauty filter, smoothed skin, plastic
> skin, distorted face, extra fingers, malformed hands, warped bowl, text,
> letters, watermark, logo, 3D render, CGI, cartoon, oversaturated, HDR,
> teal-orange grading, busy background

### Tool notes

- **Gemini / Nano Banana, ChatGPT image editing, Flux Kontext** — attach the
  photograph and paste the prompt as an edit instruction. The identity
  sentence at the top is what keeps your face yours; leave it in.
- **Midjourney** — put the photograph's URL first, then the prompt, then
  `--ar 21:9 --iw 2`. For a closer likeness use `--cref <photo url> --cw 100`.
- **If the tool cannot output 21:9**, generate 3:2 with yourself right of
  centre and plenty of headroom, and it can be cropped to the band afterwards.
- Generate three or four and pick — identity survives some runs better than
  others. Check hands and the rim of the bowl before choosing; those are where
  these models fail first.

### Without a photograph

If you would rather keep people out of it:

> A wide, dark, atmospheric banner: the far end of a ramen counter late at
> night, three bowls set out along the worn wood, steam drifting up through
> one warm overhead light. Deep brown-black shadow fills the left third of
> the frame with almost nothing in it. Warm light pooled to the right. No
> faces, no hands, no readable signage.

---

## If you would rather keep illustrations

Swap the first sentence of the house style for:

> Minimal flat vector illustration, clean thin ink linework, three flat colours
> only, no gradients, no shading.

and keep everything else — palette, negative space, no text. The same seven
subjects then arrive as drawings instead of photographs.
