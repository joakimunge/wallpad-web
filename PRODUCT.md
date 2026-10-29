# Product

<!-- impeccable:product-schema 1 -->

_This file is the product record for the Hearth website (wallpad.app). It is derived from the app's own
record, `home_assistant_native/ios/PRODUCT.md`, by a worker running from a written brief, without an
interview. Facts marked (inferred) need the owner's confirmation._

## Platform

web

## Stack

Static HTML and CSS, no framework, no build step, served by GitHub Pages at wallpad.app (`CNAME`).
A small inline script per page; no external trackers or analytics. `auth/` is the Home Assistant
sign-in callback page for the app and must keep working.

## Users

- **Primary visitor:** someone who already runs Home Assistant (HA) at home and is looking for a
  better way to see and control it on an iPad or iPhone, usually because building an HA dashboard is
  hard and theirs is unfinished or missing. They arrive from search, AI answers, forums or the App
  Store, and want to know quickly what Hearth is, whether it works with their setup, and what it
  costs them in time.
- **Secondary visitor (inferred):** a household member or friend sent the link, and press or
  reviewers looking for exact facts.

## Product Purpose

Hearth is a native iPad and iPhone app that turns an existing Home Assistant home into a calm,
finished dashboard: connect, and it builds the dashboard from HA's areas and the devices people
actually use. The website's job is to make that offer clear and believable with the real app, answer
the questions people actually search for, and send them to the App Store once it is live.

## Positioning

**The Home Assistant dashboard you don't have to design.** Hearth reads HA's own registries (areas,
devices, entities, standard device classes) and real use, filters out noise, and builds the
dashboard itself. It works for any HA home, never tuned to one home, region, vendor or integration.
Do not claim exclusive features: HA itself has automatic dashboards and visual editing; other apps
have themes and wall-panel modes.

## Operating Context

- App journey: install, sign in to Home Assistant (HA account or address plus long-lived token) or
  try the demo, automatic setup, the dashboard.
- The app talks to HA directly on the local network (or the owner's own remote address). No Hearth
  account and no Hearth server are needed.
- Visitors read the site on phones from forum and search links, and on desktops while setting up HA.
- Work is tracked in Linear (team HEA). Website: HEA-93. Search and AI-search plan: HEA-120.

## Capabilities and Constraints

- Requires iOS/iPadOS 16 or later and the visitor's own Home Assistant.
- Card types: lights, climate, covers, locks, alarm, media with speaker switching, cameras
  (snapshots, not streams), sensors, contact sensors, departures, appliances and car charging,
  scenes, automations and scripts, folders, custom cards for unsupported entities, Home glances.
- Users can rename, resize (1x1, 2x1, 1x2, 2x2), arrange and remove cards, and make custom cards for
  function. The app owns the look; there are no styling options beyond light, dark or automatic.
- Several dashboards per home. Ambient standby for a wall iPad. Room changes written back to HA for
  admins.
- Not an HA replacement, device-pairing tool or automation editor. Not an always-on monitor: iOS
  suspends apps in the background.
- The App Store link is not live yet. Every "Download on the App Store" button stays hidden until
  `window.HEARTH_APP_STORE_URL` is set in each page.
- Pricing: undecided for the website. Do not show prices or "free" until the owner says so.

## Brand Commitments

- Name **Hearth**; site at wallpad.app. Soft, cosy, calm; no candles or fire imagery.
- The app's **Paper** look is the brand: warm paper ground, ink text, one tangerine accent used only
  for what is happening right now; lamps glow in their real light colour. Light and dark.
- Minimal words. No state words the visuals already show.
- Website and App Store copy, and screenshot choices, are written **together with the owner**.
  Workers draft and mark drafts; they never finalise copy.
- Present tense, confident, as a launched app.
- No third-party logos. Plain descriptive brand names only where needed.

## Evidence on Hand

- Real app screenshots from the demo home: `home_assistant_native/ios/screenshots/review/` (used as
  placeholders, listed in `assets/screens/README.md`).
- No testimonials, reviews, user counts, press, ratings or measured setup times. Never invent any.

## Product Principles

1. **Show the real app.** The product's own screens are the proof; claims follow what they show.
2. **Answer first.** Every page answers its question in the first lines, with honest limits.
3. **Calm over complete.** Few words, one idea per section, nothing that shouts.
4. **Works for any Home Assistant.** Never imply one vendor, region or integration is required.
5. **Consistent facts everywhere.** The same facts on every page, in `llms.txt` and in structured
   data.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast, alt text on every screenshot, semantic landmarks and headings, keyboard
focus, reduced motion respected, readable at 320px wide.
