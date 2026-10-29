# Copy drafts to write together

Everything here is **draft copy written by a worker**, not final. Each line on the site carries a
`data-draft="ID"` attribute (or a `<!-- DRAFT … -->` comment for meta and structured data). Open any
page with `?drafts` (for example `http://127.0.0.1:8765/?drafts`) to see every draft outlined with
its ID. Copy without an ID is the existing, owner-approved site copy, kept as it was.

When a line is final, remove its `data-draft` attribute and tick it here.

Also check the **facts** marked "Fact check": a few drafts state things about the app that a worker
inferred from PRODUCT.md and the screenshots.

## Landing page (`index.html`)

| ID | Where | Draft | Alternatives |
| --- | --- | --- | --- |
| D01 | Nav link | Setup | How it works · Getting started |
| D02 | Nav and footer link | Guides | Help · Questions |
| D03 | Hero button (shown until the App Store link is live; then it becomes the quiet button) | How setup works | See how setup works · Take a look |
| D04 | Label over the question chips | What people ask first | Common questions · Jump to |
| D05 | The eight question chips | How does setup work? · What's on the Home page? · How do lights look? · Is there an iPhone version? · Can it go on a wall? · What can I change? · Where does my data go? · More questions | Shorter: Setup · Home · Lights · iPhone · On the wall · Changes · Privacy · FAQ |
| D06 | Setup heading (was "Setup takes about a minute") | How does setup work? | Setup takes about a minute (old) · From sign-in to dashboard |
| D07 | Setup answer line | Sign in to your Home Assistant and tap once. Hearth builds the dashboard from your areas, so there's no YAML and no layout to plan. | "Sign in, tap once, and every area has its page. No YAML, no layout to plan." · "There's nothing to set up beyond signing in." |
| D08 | Setup step captions | 1 Hearth finds your Home Assistant. Sign in. · 2 Tap Create my dashboard. Hearth sorts everything into rooms. · 3 Every area has its page. That's it. | 1 Sign in · 2 Tap once · 3 Done (minimal) · or describe what's on screen: "There's your home." / "Finding rooms" / "Setup complete" |
| D09 | Home heading (was "One page for the whole house") | What's on the Home page? | One page for the whole house (old) · What's on Home? |
| D10 | Lights heading (was "A page for each room") | How do lights look? | A page for each room (old) · What does a room look like? |
| D11 | iPhone heading (was "Full-screen music", now covers phone + music) | Is there an iPhone version? | Does it work on iPhone? · Hearth on iPhone |
| D12 | iPhone answer | Yes. The same home fits your phone, with Home, Rooms and Music along the bottom and a search for any room, device or scene. | "Yes. Home, Rooms and Music sit along the bottom, and search finds any room, device or scene." · "Yes, made for one hand: Home, Rooms, Music and search." |
| D13 | Wall heading (was "For a spare iPad on the wall") | Can it go on a wall? | For a spare iPad on the wall (old) · Does it work as a wall panel? |
| D14 | Wall answer (old sub-line with "Yes. Put a spare iPad up" added) | Yes. Put a spare iPad up where everyone passes and it becomes the household screen. | Keep the old line unchanged · "Yes. A spare iPad on the wall becomes the household screen." |
| D15 | Change heading (was "What you can change") | What can I change? | What you can change (old) · How much can I customise? |
| D16 | Privacy heading (was "Privacy") | Where does my data go? | Privacy (old) · Is it private? |
| D17 | FAQ heading | More questions | Questions · FAQ |
| D18–D26 | FAQ questions and answers (also mirrored in FAQPage JSON-LD in the page head; keep both in step) | See the page. D18 replace HA? · D19 account? · D20 devices · D21 integrations · D22 away from home · D23 household and admin · D24 existing HA dashboards · D25 live camera video · D26 alerts | Drop to five or six if it feels long. Candidates to cut: D24, D26. |
| D27 | Guides heading | Guides | Guides and answers · Read more |
| D28–D30 | Guide titles and one-line descriptions (also on `/guides/`) | See "Guides" below | |
| D31 | Closing button (shown while the App Store link is hidden) | Read the iPad guide | See how setup works · Back to the questions |
| D32 | iPhone music line (old copy reworded: "The Play on button moves…" became "move what's playing to another speaker") | Open any speaker for big artwork and simple controls, and move what's playing to another speaker, using what your speakers already support. | Keep the old line with "Play on" if that's still the button's name. **Fact check:** the current player shows a speaker picker ("Soundbar ▾"); is "Play on" still a thing? |
| D33 | Privacy detail (old copy plus "in the app or on this site") | …There are no analytics, ads or trackers, in the app or on this site. | Keep the old line unchanged. **Fact check:** true for this site as built (fonts are self-hosted, no third-party requests). |
| A01–A20 | Alt text for every screenshot | Describes what each screen shows | Review once final screenshots exist; alt text should match the final shots. |
| D90 | `og:image:alt` | A room in Hearth on iPad: lamp cards glowing in their own light colours, blinds, a speaker and sensors. | Write with the final share image. |
| D91 | SoftwareApplication JSON-LD | name, alternateName "Hearth · Smart Home Dashboard", description (existing lede), category LifestyleApplication, OS, featureList | **Decide:** App Store category (Lifestyle or Utilities?), whether to add `offers` (price) and `installUrl` at launch, and the feature list wording. |

Old copy that is gone from the landing page: "Watch the tour" button (there is no tour video yet),
the tour section, and the "Setup takes about a minute" heading. The rest of the old copy is kept word
for word.

## Guides (`guides/`)

Every guide is draft from top to bottom (`data-draft="G1"`, `G2`, `G3`, hub `G0`). Key lines:

| ID | Draft | Alternatives |
| --- | --- | --- |
| G0 | Hub: "Guides" / "Straight answers about using Hearth with your Home Assistant, each with the steps and the limits." | "Help and answers" / "How Hearth works with your Home Assistant." |
| D28 / G1-title | A Home Assistant dashboard for iPad · "What you need, how setup goes, and how to keep a wall iPad tidy." | "Home Assistant on iPad, without building a dashboard" · "The iPad dashboard for Home Assistant" |
| G1-answer | Hearth is an iPad app that turns your Home Assistant into a finished dashboard. Install it, sign in to your Home Assistant, tap once, and each of your areas gets its own page. / It runs on any iPad with iPadOS 16 or later, so a spare older iPad on the wall works too. | Lead with the wall: "Put a spare iPad on the wall and…" |
| D29 / G2-title | A Home Assistant dashboard without YAML · "How Hearth builds pages from your areas, and what it leaves to you." | "Home Assistant dashboard, no YAML needed" · "Can I get a Home Assistant dashboard without YAML?" |
| G2-answer | You don't need YAML, or to place a single card. Hearth reads your Home Assistant's areas, devices and how you use them, and builds the dashboard itself on iPad and iPhone. / You can still rename, resize or remove anything afterwards. | |
| D30 / G3-title | Hearth or a dashboard you build yourself · "An honest comparison with Home Assistant's own dashboards." | "Hearth vs Lovelace" (matches search wording, but Lovelace is an old name) · "Should I build my own Home Assistant dashboard?" |
| G3-answer | Build your own Home Assistant dashboard if you want to shape every card and show anything in your system, in any browser. Choose Hearth if you want a calm, finished dashboard on iPad and iPhone without designing or maintaining one. / They don't exclude each other: Hearth doesn't change your Home Assistant dashboards. | |

**Fact checks in the guides** (worker inferences, please confirm):

1. G1: "Can two iPads show different dashboards? Yes… pick one on each iPad." Is the dashboard choice per device?
2. G1: suggesting iPadOS Guided Access for a wall iPad. Is that what you recommend, or does Hearth have its own kiosk behaviour?
3. G2 and G3: "The only thing Hearth writes back is a room for a device that has none, and only when an admin chooses it." Still true with HEA-91 (room moving) planned?
4. G2: "Diagnostic sensors, duplicates and technical names are left off the pages." Accurate wording for the curation rules?
5. G2: "use Set up again in Hearth to rebuild the dashboards. Your sign-in stays."
6. G3 table: claims about Home Assistant's own dashboards ("can generate a dashboard for you", "visual editor or YAML", "any browser and the companion apps", "kiosk setup"). Kept general on purpose; check the wording is fair.
7. All pages: "Updated 29 October 2026" dates.

## Not copy, but needs the owner

- The privacy policy (`privacy.html`) says Hearth shows and controls "your own Home Assistant, or your
  Apple Home". The rest of the site only talks about Home Assistant. Is Apple Home support real? If
  not, the policy should change (its substance was left untouched here).
- The Hearth mark still contains a flame; the brand notes say no candles or fire imagery. The app icon
  is undecided (HEA-94).
