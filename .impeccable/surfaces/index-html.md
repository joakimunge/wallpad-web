---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["guides"]
---

## Scope

Landing page `index.html` for Hearth at wallpad.app. Mode: Persuade. Guide pages under `guides/` are Read surfaces that share this world's frame.

## Audience, job, action

A Home Assistant owner, often on a phone from a forum or search link, deciding whether Hearth is worth installing. They need: what it is, that it works with their own HA, what it looks like on iPad and iPhone, what setup costs them, and where their data goes. Action: the App Store button (hidden until the URL is set); until then, the answers themselves and the guides.

Proof: real screenshots from the app's demo home only (placeholders now, listed in `assets/screens/README.md`). No testimonials, numbers, prices or ratings.

Constraints: copy is written with the owner; new lines carry `<!-- DRAFT -->` and are listed in COPY-DRAFTS.md. Static HTML/CSS, no trackers, fonts self-hosted.

## Chosen structure

Dealt lead of a surface roll (unattended run: worker inferred from the brief, no decision page served): the page is the visitor's own questions, answered in order, each answered first in one sentence and then proved with the real screen.

Ranked structural candidates: 1 the dashboard as the page (sections as Hearth cards on its grid); 2 connect, then it builds itself (the page enacts setup); 3 one evening at home (day, lamplight, night bands); 4 device narrative with alternating splits; 5 the owner's questions, answered with the real screen; 6 the wall iPad photographed in a hallway; 7 a printed quick-start card.

## Direction contract

THESIS: Hearth answers before it sells. The page is the questions a Home Assistant owner actually asks, each answered in its first sentence and proved by the app's own screen. It refuses the device-mockup hero with feature cards and the alternating split rows.

OWN-WORLD: Hearth's Paper: warm paper ground #F4F2EE, card grey #E9E6E0, ink #2A2724, the app's inverted ink card, tangerine only for one live phrase and live dots; lamp glow amber as one full-bleed field; standby night as one dark band. Nunito (rounded, after the app's SF Rounded headings) for display, system text for reading. Screens sit on Paper cards with the app's 22px corner, no device bezels. Search-style chips index the questions.

STORY: The visitor learns what Hearth is in one line, sees their kind of home already arranged, finds their own question in the chip row, gets a straight answer with honest limits, and leaves with the App Store or a guide.

FIRST VIEWPORT: Top: slim bar, mark and name left, Guides and Privacy right, small App Store button when live. Left-aligned H1 at display scale over two lines with one tangerine phrase; one-sentence lede; action row (App Store, "How setup works"); requirement line. Directly below, still in the first viewport on desktop, a wide band of real screens: the iPad living room with glowing lamps cropped to its content, the iPhone Home overlapping its lower right. Under it the question chips.

FORM: Owner's questions answered with the real screen, position 5 of 7 on the ranked list. seed:1eca9a17d4e46548. Signature interaction: a Day / Evening switch in the app's segmented-control style swaps the page and every screenshot between Paper light and dark, revealed as a circle spreading from the switch (View Transitions), instant under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
