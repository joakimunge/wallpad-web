# Website copy: decisions

**All decided 2026-10-29.** The owner delegated the copy decisions to the coordinator; every line
below is final and its `data-draft` marker is gone from the pages. (`?drafts` still works as a review
aid if new drafts are marked later.)

## Landing page (`index.html`)

- [x] D01 Nav link: **How it works** (also on the guides and the privacy page)
- [x] D02 Nav and footer link: **Guides**
- [x] D03 Hero button (until the App Store link is live): **How setup works**
- [x] D04 Label over the chips: **Jump to**
- [x] D05 Chips: **Setup · Home · Lights · iPhone · On the wall · Changes · Privacy · FAQ**
- [x] D06 Setup heading: **Setup takes about a minute**
- [x] D07 Setup answer: **Sign in, tap once, and every area has its page. No YAML, no layout to plan.**
- [x] D08 Step captions: **1 Sign in · 2 Tap once · 3 Done**
- [x] D09 Home heading: **One page for the whole house** (original)
- [x] D10 Lights heading: **A page for each room** (original)
- [x] D11 iPhone heading: **Hearth on iPhone**
- [x] D12 iPhone answer (fact fixed: the phone tab bar is Home, Rooms and a Search button; music lives
  in a mini player on every tab): **The same home fits your phone: Home and Rooms along the bottom, a
  search that finds any room, device or scene, and your music one tap away on every page.**
- [x] D13 Wall heading: **For a spare iPad on the wall** (original)
- [x] D14 Wall answer: **Yes. A spare iPad on the wall becomes the household screen.**
- [x] D15 Change heading: **What you can change** (original)
- [x] D16 Privacy heading: **Privacy** (original)
- [x] D17 FAQ heading: **Questions**
- [x] D18–D23, D25 FAQ: kept as drafted and checked against the current app (Home Assistant only,
  iOS/iPadOS 16+, free; no tab names mentioned). Mirrored in the FAQPage JSON-LD.
- [x] D24 (existing HA dashboards) and D26 (alerts): **cut** from the page and the JSON-LD. The
  comparison guide still covers existing dashboards.
- [x] D27 Guides heading: **Guides**
- [x] D28–D30 Guide titles: **A Home Assistant dashboard for iPad · A Home Assistant dashboard without
  YAML · Hearth or a dashboard you build yourself**, one-liners kept
- [x] D31 Closing button (until the App Store link is live): **See how setup works** (links to the
  setup section)
- [x] D32 Music line: original copy, the button is still called **Play on**
- [x] D33 Privacy detail: kept (no analytics, ads or trackers, in the app or on this site)
- [x] A01–A20 Alt text: kept as drafted; A03/A04 corrected to match the current placeholder (the
  iPhone Home shows an open door, departures and a camera). **Revisit all alt text with the final
  screenshots.**
- [x] D90 `og:image:alt`: kept
- [x] D91 SoftwareApplication JSON-LD: Lifestyle (App Store primary Lifestyle, secondary Utilities),
  free (`offers` price 0), "iOS 16 or later, iPadOS 16 or later"; `alternateName`, `description` and
  `featureList` kept (no Music tab, no Apple Home). `installUrl` is added by `site.js` from
  `config.js` once the App Store link is set.

## Guides (`guides/`)

- [x] G0–G3 accepted as drafted, with these fact decisions:
  1. Per-device dashboards: each iPad or iPhone picks its own dashboard.
  2. Guided Access: kept, phrased as an optional iPadOS feature to lock the iPad to Hearth.
  3. Write-back: "Apart from controlling your devices, the only change Hearth makes in Home Assistant
     is giving a room to a device that has none, and only when an admin chooses it."
  4. Curation wording: as drafted.
  5. Set up again keeps the sign-in: true.
  6. Home Assistant dashboard claims stay general and fair; kiosk setups usually need extra tools.
  7. Dates: as drafted.

## Other decisions (owner, 2026-10-29)

- **Home Assistant only:** version 1 is marketed for Home Assistant only. Marketing copy, guides, FAQ,
  `llms.txt` and structured data make no Apple Home claims. The privacy policy keeps its Apple Home
  mention, because it must cover everything the app can connect to.
- **Logo:** keep the current Hearth mark until proper branding is done.
- **`llms.txt`:** says the app is free, for Home Assistant on iPhone and iPad (iOS/iPadOS 16+).
