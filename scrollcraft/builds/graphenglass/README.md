# Graphenglass — scroll-craft build

Scroll-driven, chaptered-editorial version of the Graphenglass content, built
with the `scroll-craft` skill. See `BRIEF.md` for the full brief (self-authored
under explicit creative delegation — see that file for why).

## Run it

```
cd scrollcraft/builds/graphenglass
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## What this is, relative to `site/`

`site/` is the 13-page static site (one intention per page, per the September
2026 structure deck). This build is the same brand and largely the same
content, re-expressed as a single long-form scroll page — six hard-cut
chapters instead of thirteen clicked pages. They are two different answers to
"how should this content be experienced," not a draft and a final: keep both,
or pick one, depending on what graphenglass.com is meant to be.

## Signature move

The **Layer Section**, inside Chapter 03 (Technologies): a sticky cross-section
of MultiLayer's five real signature-management layers (matrix, EM-absorbent
charge, dielectric charge, structural reinforcement, functional additives),
each one highlighting and naming its real materials as the reader scrolls past
its step. Built with a small bespoke `IntersectionObserver`, not an engine act.

## What was verified

Desktop screenshots at 11 scroll positions plus full-page, mobile (390×844)
full-page and targeted chapter checks, and a `prefers-reduced-motion` pass —
all via Playwright/Chromium. No dead scroll, no broken images, no horizontal
overflow on mobile. Two apparent defects turned up during testing (a stat
reading "1,742 m²" instead of "25,000" and a tiny "4 g" instead of "120 g")
and both turned out to be the test script screenshotting mid-count-animation,
not real bugs — confirmed by re-shooting with a longer settle wait. One real
issue was found and fixed: the capabilities ledger and its total wrapped
awkwardly under 560px; both got a mobile-specific layout.

Not verified: a real phone (only headless Chromium was available in this
environment).
