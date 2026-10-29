---
name: Hearth (wallpad.app)
description: The Hearth app's Paper look carried onto the web; warm paper, ink, one tangerine for what is live.
colors:
  paper: "#f4f2ee"
  paper-quiet: "#ebe8e2"
  card: "#e9e6e0"
  raised: "#ffffff"
  ink: "#2a2724"
  ink-soft: "#57514a"
  ink-faint: "#6b645b"
  on-card: "#48443f"
  on-card-text: "#f4f2ee"
  tangerine: "#e07b39"
  tangerine-text: "#9a4614"
  tangerine-display: "#c25a1a"
  lamplight: "#f6d9a0"
  lamplight-ink-soft: "#5a4630"
  line: "rgba(42, 39, 36, 0.13)"
  line-soft: "rgba(42, 39, 36, 0.07)"
  paper-dark: "#161513"
  paper-quiet-dark: "#1c1a18"
  card-dark: "#211f1d"
  raised-dark: "#2d2b28"
  ink-dark: "#ede9e1"
  ink-soft-dark: "#bfb8ae"
  ink-faint-dark: "#9c958b"
  on-card-dark: "#e8e4dc"
  on-card-text-dark: "#1d1b19"
  tangerine-dark: "#f29a58"
  lamplight-dark: "#3a2610"
  lamplight-ink-soft-dark: "#d9c7ad"
  night: "#0f0e0d"
  night-card: "#1d1b19"
  night-ink: "#ede9e1"
  night-soft: "#b9b2a8"
typography:
  display:
    fontFamily: "Nunito, ui-rounded, SF Pro Rounded, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Nunito, ui-rounded, SF Pro Rounded, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Nunito, ui-rounded, SF Pro Rounded, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  answer:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.18rem, 2vw, 1.42rem)"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 550
    lineHeight: 1.3
  button:
    fontFamily: "Nunito, ui-rounded, SF Pro Rounded, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  code: "6px"
  card: "22px"
  phone: "13.5% / 6.2%"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1200px"
  section: "clamp(72px, 10vw, 136px)"
  block: "clamp(40px, 6vw, 64px)"
  chip-gap: "10px"
components:
  button-primary:
    backgroundColor: "{colors.on-card}"
    textColor: "{colors.on-card-text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "50px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "50px"
  chip:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 16px 10px 13px"
    height: "44px"
  screen-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
  screen-card-phone:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.phone}"
  appearance-switch:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.pill}"
    padding: "3px"
  appearance-switch-selected:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "40px"
    height: "34px"
  step-number:
    backgroundColor: "{colors.on-card}"
    textColor: "{colors.on-card-text}"
    rounded: "{rounded.pill}"
    size: "30px"
  short-answer:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(20px, 3vw, 28px) clamp(20px, 3vw, 30px)"
  closing-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(32px, 6vw, 72px) clamp(24px, 6vw, 72px)"
---

# Design System: Hearth (wallpad.app)

## Overview

**Creative North Star: "The App, Laid on Paper"**

The site is the Hearth app's Paper look at page scale: a warm off-white ground, ink type, grey cards with the app's soft 22px corner, and real screenshots set directly on that paper with no device bezels. The page reads as a calm sequence of questions and answers. Each section is one answer and one proof, and the screens do the persuading.

Colour stays restrained without going grey. Ink and paper do almost all the work; tangerine appears only where something is live, and two full-bleed bands carry the atmosphere: a lamplight field the colour of a lit lamp and a night band that is always dark, like the app's wall standby. Light and dark follow the device unless the visitor picks one in a segmented switch that copies the app's own control. Display type is rounded (Nunito, after the app's SF Rounded headings); reading type is the system face.

Read surfaces (guides, privacy) share the same frame (nav, footer, buttons, screens) and settle into one calm column with a sticky contents list.

**Key Characteristics:**
- Warm paper ground, ink text, grey app cards; no pure white page and no pure black text.
- One tangerine, reserved for the live phrase and accent hairlines.
- Real screenshots on Paper cards, light and dark in pairs, swapped with the theme.
- Two atmospheric bands at most per page: lamplight and night.
- Rounded display face, system reading face, pill-shaped controls.

## Colors

Warm, low-chroma neutrals carry the page; tangerine is the only hue, and lamplight amber is a field rather than an accent.

### Primary
- **Tangerine** (`tangerine`, dark `tangerine-dark`): graphics only. Focus rings, underline colour on text links, selection tint. Never used for body text in light mode, because it is too light on paper.
- **Tangerine Ink** (`tangerine-text`): tangerine for small words that must stay readable on paper (5.8:1).
- **Tangerine at Display Size** (`tangerine-display`): the one live phrase inside an H1 (about 3.9:1 on paper, so large text only).

### Secondary
- **Lamplight** (`lamplight`, dark `lamplight-dark`): the background of the full-bleed lamplight band, taken from the app's lit lamp tiles. Its secondary text uses `lamplight-ink-soft`, not `ink-soft`.

### Neutral
- **Paper** (`paper` / `paper-dark`): page ground.
- **Quiet Paper** (`paper-quiet` / `paper-quiet-dark`): a calmer band for words-only sections such as privacy.
- **Card Grey** (`card` / `card-dark`): the app's card; behind screenshots, the appearance switch track, inline code.
- **Raised** (`raised` / `raised-dark`): chips, the selected switch segment, the short-answer box.
- **Ink** (`ink` / `ink-dark`): headings, strong text, the answer line.
- **Soft Ink** (`ink-soft` / `ink-soft-dark`): paragraphs and nav links at rest.
- **Faint Ink** (`ink-faint` / `ink-faint-dark`): meta lines, captions, icons inside chips and lists (5.3:1 on paper).
- **Inverted On Card** (`on-card` / `on-card-dark`, text `on-card-text`): the app's "on" card, used for primary buttons and step numbers. It inverts in dark mode (light card, dark text).
- **Hairlines** (`line`, `line-soft`): dividers in lists, FAQ, tables, footer; `line-soft` is the 1px ring around cards and chips.
- **Night** (`night`, `night-card`, `night-ink`, `night-soft`): the always-dark wall band. In dark mode the band goes darker still (#080807) and gains hairline borders top and bottom so it still reads as a band.

### Named Rules
**The Live Tangerine Rule.** Tangerine marks what is happening now: one phrase per page heading at most, plus accent hairlines and focus. Buttons, icons and headings are ink, never tangerine.

**The Two Bands Rule.** A page carries at most one lamplight field and one night band. Every other section sits on paper or quiet paper.

**The Paired Theme Rule.** Every token has a light and a dark value, and every screenshot that has both renders comes in a light/dark pair that follows the page theme.

## Typography

**Display Font:** Nunito, self-hosted variable 400 to 900 (with ui-rounded, SF Pro Rounded, system-ui)
**Body Font:** the system face (system-ui, -apple-system, Segoe UI, Roboto)
**Mono:** ui-monospace, used only for inline code in guides

**Character:** A soft, heavy rounded display face that echoes the app's headings, over a plain system face that reads like iOS itself.

### Hierarchy
- **Display** (800, clamp 2.4rem to 4.75rem, 1.06, -0.03em): the page H1, max 22ch, balanced. Guides use a smaller clamp (2.2rem to 3.9rem, max 18ch).
- **Headline** (800, clamp 1.85rem to 3rem, 1.06, -0.02em): section questions. In guide prose, clamp 1.5rem to 2rem.
- **Title** (750, 1.25rem, 1.25): H3, guide list titles, FAQ questions (Nunito 750 at clamp 1.08rem to 1.22rem), table headers.
- **Answer** (system 500, clamp 1.18rem to 1.42rem, 1.5, ink): the one-sentence answer that opens each section.
- **Body** (system 400, 1.0625rem, 1.6; 1.68 in guide prose, max 68ch): paragraphs in soft ink, max about 40em in landing sections.
- **Label** (system 550, 0.98rem): nav links, chips, step captions. Small group headings (the chip row title, "On this page") are system 650 at about 1rem in soft or faint ink, sentence case.
- **Button** (Nunito 700, 1.02rem): all pill buttons and the brand name (800, 1.4rem).

### Named Rules
**The Rounded Voice Rule.** Nunito is for headings, buttons, numbers and the brand only; anything read at length is the system face.

**The Sentence Case Rule.** No uppercase tracked labels above site headings. Small group headings are sentence case in the reading face.

## Layout

A single centred container (max 1200px) with a fluid gutter (16px to 40px). Sections stack vertically with generous fluid padding (72px to 136px); a section following another plain section drops its top padding so answers flow. Inside a section the head (question, answer, supporting text) is capped at 46rem and left-aligned; proof follows below or beside it.

Recurring spatial patterns: a hero with a wide iPad screen and a phone overlapping its lower right; a three-up step row that becomes a horizontal snap-scroller under 700px (66% columns, edge-to-edge); an annotated screen with a sticky ruled list beside it (6fr / 5fr); two phones side by side with the second dropped by up to 64px; text and screen split 5fr / 6fr inside the lamplight and night bands. Splits collapse to one column at 900px. Guides use a content column (max 68ch) with a 15rem sticky contents list on the right, collapsing above the prose at 960px. The nav hides its text links under 720px and keeps the brand and appearance switch.

## Elevation & Depth

Depth is soft and ambient, with every shadow built from two warm-tinted variables (`--shadow`, `--shadow-near`) that deepen in dark mode. Surfaces are separated first by tone (paper, card, raised) and by a 1px `line-soft` ring; shadows are long, low and diffuse, never offset hard.

### Shadow Vocabulary
- **Screen lift** (`0 0 0 1px line-soft, 0 2px 6px -2px shadow-near, 0 30px 60px -30px shadow`): every screenshot card and the closing card.
- **Night screen** (`0 0 0 1px rgba(237,233,225,0.09), 0 40px 90px -30px rgba(0,0,0,0.9)`): screens inside the night band.
- **Chip rest / hover** (`0 0 0 1px line-soft, 0 1px 2px shadow-near` to `0 0 0 1px line, 0 6px 14px -8px shadow`): chips; the short-answer box uses the rest value.
- **Button** (`0 6px 16px -8px shadow`, hover `0 10px 22px -10px shadow`): primary buttons.
- **Selected segment** (`0 1px 2px shadow-near, 0 2px 8px -4px shadow`): the active appearance segment.

### Named Rules
**The Warm Shadow Rule.** Shadows use the warm ink-tinted shadow tokens and a negative spread so they pool under the object; no grey or black drop shadows with positive spread.

## Shapes

Two corner languages: the app's card corner (22px) for every container that holds content or a screenshot, and full pills (999px) for every control: buttons, chips, the appearance switch, step numbers, the skip link. Phone screenshots use an elliptical radius (13.5% / 6.2%) that matches the device's own screen corner, so no bezel is drawn. Inline code is 6px. Lists, FAQ and tables are open rows separated by hairlines, not boxed.

## Components

### Buttons
Tactile, rounded and ink-coloured; they press in.
- **Shape:** full pill (999px), min height 50px.
- **Primary:** the inverted on card (`on-card` with `on-card-text`), Nunito 700, 12px 24px padding, soft button shadow.
- **Hover / Active:** shadow grows on hover; every button scales to 0.97 on press with the out-expo ease.
- **Quiet:** transparent with a `line` border, ink text; hover darkens the border. On the closing card it takes the card's own text colour.
- **Text link:** ink text, 2px tangerine underline offset 5px, thickening to 3px on hover.
- **App Store badge:** Apple's own black badge (13px corner, 10px small variant), hidden until the store URL is set. It follows Apple's artwork rules, not the Paper palette.

### Chips
- **Style:** raised surface, ink label (system 550), a 17px faint-ink line icon on the left, pill shape, min height 44px, `line-soft` ring.
- **State:** hover deepens the ring and adds a soft lift; press scales to 0.97. Chips are navigation into the page's questions, styled after the app's search chips.

### Cards / Containers
- **Corner Style:** 22px, or the phone radius for phone screens.
- **Background:** card grey behind screenshots; raised for the guide short-answer box; ink (#2a2724 light, #2d2b28 dark) for the closing card.
- **Shadow Strategy:** screen lift (see Elevation).
- **Border:** a 1px `line-soft` ring drawn as a shadow, not a border.
- **Internal Padding:** screens have none (the image fills); boxes use fluid 20px to 72px.

### Navigation
Sticky top bar, 66px tall, paper at 90% with a saturated 14px backdrop blur; a hairline appears under it once the page scrolls. Brand mark and name left; soft-ink links (550) that turn ink on hover or when current; then the appearance switch and the small App Store badge. Under 720px only brand, switch and badge remain. Guides add underlined breadcrumbs in faint ink.

### Appearance Switch (signature)
The app's segmented control: a card-grey pill track with a `line-soft` border and 3px inset, two 40 by 34px pill segments with 18px sun and moon line icons. The selected segment is raised with the selected-segment shadow. Changing it swaps the theme and every paired screenshot, revealed as a circle spreading from the switch over 0.8s (View Transitions); instant under reduced motion.

### Step Numbers
30px ink-on circles (inverted on card, Nunito 800 0.95rem) beside a short ink caption; reused for numbered "how" lists in guides.

### Lists, FAQ, Tables
Open rows ruled with `line` hairlines top and bottom. FAQ questions are Nunito 750 with a faint plus icon that rotates 45 degrees when open. Guide lists end each row with a faint arrow that slides 4px right on hover.

### Motion
One ease (`cubic-bezier(0.16, 1, 0.3, 1)`). Screens settle once when first seen (from 28px down, 0.985 scale, 3px blur, 0.6 opacity over 1.1s), only when script runs and motion is welcome; content is visible by default.

## Do's and Don'ts

### Do:
- **Do** set real app screenshots on card-grey 22px cards (or the phone radius) with the screen lift shadow, and ship light and dark renders as a pair.
- **Do** open every section with the question as a headline and a one-sentence answer in the answer style.
- **Do** use the inverted on card for primary buttons and step numbers, and pills for every control.
- **Do** keep tangerine to one live phrase per heading, link underlines and focus rings; use `tangerine-text` when it must be read at small size.
- **Do** give every new colour a light and a dark value, and check secondary text against its band (lamplight uses `lamplight-ink-soft`).
- **Do** use line SVG icons from the shared sprite, inheriting faint ink.

### Don't:
- **Don't** draw device bezels or mockup frames around screenshots.
- **Don't** colour buttons, icons or whole headings tangerine.
- **Don't** add more than one lamplight field or one night band to a page.
- **Don't** put uppercase tracked eyebrows or kickers above site headings. The app's own uppercase status lines appear only inside screenshots, as the app draws them.
- **Don't** set long reading text in Nunito, or headings in the system face.
- **Don't** use hard offset or grey drop shadows; depth comes from tone, the hairline ring and warm diffuse shadow.
- **Don't** add candle or fire imagery for warmth; warmth comes from lamplight and paper. The Hearth mark is the identity asset and is used as shipped.
