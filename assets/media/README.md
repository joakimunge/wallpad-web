# Hearth website media

> **Note (hearth-site-v2):** the redesigned site now uses placeholder screenshots from
> `assets/screens/` (see `assets/screens/README.md`). This list is the earlier capture spec, kept for
> the tour video and final-capture sizes.

The site (`index.html`) references these exact files. Until a file exists, the page shows
a calm placeholder with the file name, so the layout never jumps. Capture everything from
the app's **demo home** (no real homes, names, places or people). Light Paper appearance
unless noted.

| File | Device / orientation | Pixel size (matches the `width`/`height` in the HTML) | Shows |
| --- | --- | --- | --- |
| `home-ipad-landscape.png` | iPad, landscape | 2360 x 1640 | Home page (hero image, also the social preview) |
| `home-ipad-portrait.png` | iPad, portrait | 1640 x 2360 | Home page: glances, room tiles, scenes, buttons, music |
| `home-iphone.png` | iPhone, portrait | 1179 x 2556 | Home page on iPhone (beside the hero iPad) |
| `room-ipad.png` | iPad, landscape | 2360 x 1640 | One room page: lamp cards, climate, a speaker |
| `standby-ipad.png` | iPad, landscape | 2360 x 1640 | Ambient standby: clock, weather (dark) |
| `player-ipad.png` | iPad, landscape | 2360 x 1640 | Full-screen music player with the Play on button visible |
| `setup-ipad.png` | iPad, landscape | 2360 x 1640 | Setup: "Your home is ready." with Create my dashboard |
| `tour-ipad.mp4` | iPad, landscape | 2360 x 1640 (or same 59:41 ratio, e.g. 1180 x 820) | 15-30 s silent loop: Home, a room, the player, standby |
| `tour-ipad-poster.png` | iPad, landscape | same as `tour-ipad.mp4` | First frame of the tour, shown before it plays |
| `rooms-iphone.mp4` | iPhone, portrait | 1179 x 2556 (or same ratio, e.g. 590 x 1278) | 10-20 s silent loop: swiping between rooms, switching a light |

Notes

- If a capture has a different size, update the `width`/`height` attributes in `index.html` to match.
- Videos: H.264 MP4, no audio track, ideally under 4 MB each (`-movflags +faststart`). They play
  muted while on screen and show controls instead when the visitor prefers reduced motion.
- PNGs: compress losslessly (e.g. `oxipng` or `pngquant --quality 85-95`) to keep the page fast.
- The status bar is hidden in the app, so no clean-up is needed there.
