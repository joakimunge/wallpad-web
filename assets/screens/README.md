# Website screenshots: all placeholders

Every image in this folder is a **placeholder**: a real Hearth screenshot from the app's demo home,
taken during development (October 2026) and reused here so the site shows the real product. They
will be replaced with proper, matched shots later. Pick final shots together with the owner.

How they're made: cropped and resized from `home_assistant_native/ios/screenshots/`, converted to
WebP (quality 82). Each file has a `.json` sidecar with its origin (written by `impeccable
embed-prompt`). Pairs ending `-light` / `-dark` swap with the page's appearance; a file without a
pair shows in both.

When replacing: keep the file name and update the `width`/`height` attributes where the file is used
if the size changes. Capture from the demo home only (no real homes, names or places). Status bar
times should match within a pair and ideally across the page.

| File | Used on | Shows now (source) | Should show eventually |
| --- | --- | --- | --- |
| `room-ipad-light.webp` / `-dark` | Landing hero (main image); no-YAML guide | Living room on iPad, lamps glowing teal, amber, violet; cropped to the cards (`review/lamp-glow-3/ipad-*.png`) | A room page on iPad landscape at its best: three or four lamps on in different colours, climate, a speaker playing. Light and dark from the same moment. |
| `home-phone-light.webp` / `-dark` | Landing hero (iPhone over the iPad) | Home on iPhone (`review/tabbar-2/phone-home-*.png`). Light and dark show different scroll positions. | Home on iPhone, top of page, same scroll in both appearances. |
| `setup-signin-phone-light.webp` / `-dark` | Landing, setup step 1 | "There's your home." sign-in (`review/onboarding-polish/theres-your-home-phone-*.png`) | Same screen, current build. |
| `setup-rooms-phone-light.webp` / `-dark` | Landing, setup step 2 | "Finding rooms" setup moment (`critique-2026-10-21*/phone-*-13-setup-moment.png`, older build) | "Your home is ready" with Create my dashboard, light and dark (only a light one exists today). |
| `setup-done-phone-light.webp` / `-dark` | Landing, setup step 3 | Setup complete, 9 rooms, 81 cards (`critique-2026-10-21*/phone-*-14-setup-complete.png`, older build) | Same screen, current build, or the first room page right after setup. |
| `home-ipad-light.webp` / `-dark` | Landing "What's on the Home page?"; iPad guide; comparison guide | Light: Home on iPad with lit room tiles (`review/lit-rooms/ipad-home-light.png`). Dark: older build, different layout, scrolled (`critique-2026-10-21-dark/ipad-dark-01-home.png`) | Home on iPad portrait, same content in light and dark, nothing cut off. |
| `lamps-phone-light.webp` / `-dark` | Landing "How do lights look?" | Living room on iPhone, lamps glowing (`review/lamp-glow-3/phone-*.png`) | Same, current build. |
| `rooms-phone-light.webp` / `-dark` | Landing "How do lights look?" | Rooms tab, lit rooms in amber (`review/lit-rooms/phone-rooms-*.png`) | Same, current build. |
| `search-phone-light.webp` / `-dark` | Landing "Is there an iPhone version?" | Search with type and room chips (`review/search/phone-search-first-*.png`) | Same, or search with a query typed. |
| `player-phone.webp` | Landing "Is there an iPhone version?" | Music player sheet with speaker picker, always dark (`review/tabbar-search/phone-player-sheet-dark.png`) | Player with real-looking artwork and the speaker menu open. |
| `standby-ipad.webp` | Landing "Can it go on a wall?" | Standby on iPad portrait (`critique-2026-10-21-dark/ipad-dark-06-standby.png`, older build) | Standby on iPad landscape, current build, ideally photographed on a real wall-mounted iPad. |
| `edit-ipad-light.webp` / `-dark` | Landing "What can I change?"; no-YAML guide | Arranging Home with handles and Magic layout, cropped (`review/edit-chrome/ipad-*-home-arranging.png`) | Same, current build. |
| `setup-signin-ipad-light.webp` | iPad guide, setup | iPad sign-in, cropped (`review/onboarding-polish/theres-your-home-ipad-light.png`) | Same with a dark pair. |
| `og-hearth.jpg` | Social preview (`og:image`) on every page | Top of the room crop, 1200×630 | A designed 1200×630 share image: the iPad room page with the name Hearth, made with the owner. |
