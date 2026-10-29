# Page map: candidates for wallpad.app

The search and AI-search plan (Linear HEA-120): **one focused, answer-first page per real question**,
starting with about ten genuinely useful pages, not hundreds. Each page:

- answers the question in its first lines, before selling Hearth;
- shows real screenshots of that exact case, the exact steps and honest limits;
- ends with a short FAQ mirrored in FAQPage JSON-LD, the App Store button, and a listing in
  `llms.txt` and `sitemap.xml`;
- uses the same facts as every other page (name, platforms, requirements, what it does, price once
  decided).

Thin pages hurt a new site, so a page only gets made if it can carry real, specific content. Add
more only where the first ones get cited or ranked (track the prompts monthly, per HEA-120).

**Status key:** built = exists as a draft on branch `hearth-site-v2` · candidate = not built.
**Pick** = the worker's suggestion for the first ten; we choose together.

## How a page is made

1. Copy `guides/_template.html` to `guides/<slug>/index.html` (files starting with `_` are not
   published).
2. Keep the header and footer identical to the other guides. Write the title, the short answer, what
   you need, the steps, screenshots, limits and 2–4 FAQ entries.
3. Mirror the FAQ in the page's FAQPage JSON-LD; add the page to `guides/index.html`, `llms.txt` and
   `sitemap.xml`.
4. Mark every new line `data-draft` until the copy is final.

## Per device

| Page (working title) | Question it answers | Slug | Status | Pick |
| --- | --- | --- | --- | --- |
| A Home Assistant dashboard for iPad | What's the best way to use Home Assistant on an iPad? | `home-assistant-dashboard-ipad` | built | yes |
| A Home Assistant wall panel from a spare iPad | How do I wall-mount an iPad as a Home Assistant panel? | `home-assistant-wall-ipad` | candidate | yes |
| Home Assistant on an old iPad | Can an old iPad run a Home Assistant dashboard? (iPadOS 16 floor, which models) | `home-assistant-old-ipad` | candidate | yes |
| A Home Assistant dashboard for iPhone | Is there a good Home Assistant dashboard app for iPhone? | `home-assistant-dashboard-iphone` | candidate | yes |
| Home Assistant on iPad mini | Does a dashboard fit an iPad mini? | `home-assistant-ipad-mini` | candidate | later |

## Per ecosystem in the home

Plain descriptive wording, no logos, no third-party marks in App Store keywords. Only worth a page
where Hearth does something specific and visible for that kind of device.

| Page (working title) | Question it answers | Slug | Status | Pick |
| --- | --- | --- | --- | --- |
| Hue and other smart lights on a Home Assistant dashboard | How do I control my lights from an iPad, with their real colours? | `home-assistant-lights-dashboard` | candidate | yes |
| Speakers and multi-room music | Can I control Sonos-style speakers and move music between rooms from Home Assistant on iPad? | `home-assistant-music-dashboard` | candidate | yes |
| Cameras on a Home Assistant dashboard | Can I see my cameras on an iPad dashboard? (snapshots, honest limit: not live video) | `home-assistant-camera-dashboard` | candidate | later |
| Robot vacuums | Start and dock a vacuum from the dashboard | `home-assistant-robot-vacuum-dashboard` | candidate | later |
| EV chargers and car charging | See charging progress on the wall | `home-assistant-car-charging-dashboard` | candidate | later |
| Zigbee2MQTT and ZHA devices | Do my Zigbee devices show up automatically? (via HA areas and device classes) | `home-assistant-zigbee-dashboard` | candidate | later |
| IKEA smart home devices | Do IKEA lights, blinds and sensors work? | `home-assistant-ikea-dashboard` | candidate | later |
| Apple TV and media players | Controlling TVs and media players | `home-assistant-tv-dashboard` | candidate | later |

## Per job

| Page (working title) | Question it answers | Slug | Status | Pick |
| --- | --- | --- | --- | --- |
| A hallway screen for leaving home | Departures, who's home, doors left open, on one screen by the door | `home-assistant-hallway-dashboard` | candidate | yes |
| A kitchen wall panel | Timers, appliances running, music, lights, calendar | `home-assistant-kitchen-dashboard` | candidate | later |
| A night clock and standby screen | Can a wall iPad show a calm clock at night? | `home-assistant-standby-clock` | candidate | later |
| Public transport departures on a dashboard | Show the next bus, tram or train from any departures integration | `home-assistant-departures-dashboard` | candidate | later |
| A dashboard for the whole household | Something non-technical family members can use (non-admin users) | `home-assistant-family-dashboard` | candidate | later |
| Energy at a glance | (only if Hearth gains an energy card worth showing) | `home-assistant-energy-dashboard` | candidate | no, not yet |

## Per question

| Page (working title) | Question it answers | Slug | Status | Pick |
| --- | --- | --- | --- | --- |
| A Home Assistant dashboard without YAML | Can I get a good dashboard without YAML? | `home-assistant-dashboard-without-yaml` | built | yes |
| Set up a Home Assistant dashboard in a minute | What's the fastest way to a finished dashboard? | `home-assistant-dashboard-quick-setup` | candidate | maybe (overlaps with "without YAML") |
| Home Assistant on iPad without the browser | Is there a native iPad app instead of the web dashboard? | `home-assistant-ipad-native-app` | candidate | yes |
| How Hearth picks what goes on each page | How does automatic curation work? (areas, use, noise filtering) | `how-hearth-builds-your-dashboard` | candidate | later |
| Getting your Home Assistant areas right | How should I set up areas so dashboards make sense? | `home-assistant-areas-for-dashboards` | candidate | later (useful even without Hearth) |
| Is Hearth private? | Where does my data go? (no servers, no account, no trackers) | `hearth-privacy` | candidate | later (the landing answer may be enough) |

## Comparisons, stated honestly

| Page (working title) | Question it answers | Slug | Status | Pick |
| --- | --- | --- | --- | --- |
| Hearth or a dashboard you build yourself | Should I build a Lovelace/Mushroom dashboard or use Hearth? | `hearth-vs-lovelace-dashboard` | built | yes |
| Hearth and the Home Assistant Companion app | What's the difference, and do I need both? | `hearth-vs-home-assistant-companion-app` | candidate | yes |
| Hearth and Apple Home | Should I use Apple Home with HomeKit bridge, or Hearth? | `hearth-vs-apple-home` | candidate | later |
| Hearth and browser kiosk setups | Native app vs a kiosk browser on a wall tablet | `hearth-vs-kiosk-browser` | candidate | later |

## Suggested first ten

1. A Home Assistant dashboard for iPad (built)
2. A Home Assistant dashboard without YAML (built)
3. Hearth or a dashboard you build yourself (built)
4. A Home Assistant wall panel from a spare iPad
5. Home Assistant on an old iPad
6. A Home Assistant dashboard for iPhone
7. Home Assistant on iPad without the browser
8. Hearth and the Home Assistant Companion app
9. A hallway screen for leaving home
10. Lights, or speakers and multi-room music (pick one)

Authority comes alongside, not after (HEA-120): genuine posts in the Home Assistant community
forum's project threads and r/homeassistant within their rules, and HA YouTubers. Keep the facts
identical everywhere.
