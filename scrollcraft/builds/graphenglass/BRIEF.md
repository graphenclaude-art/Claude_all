# Graphenglass — scroll-craft brief

**Status: Self-authored under explicit creative delegation.**

The user asked, verbatim: *"Explota la skill github.com/nateherkai/scroll-craft.
Dale contenido dinámico."* No interview was run for this specific build. This
counts as delegation, not a fallback, because the entire brand brief already
exists in this session's history: brand positioning, tone, page architecture,
real photography and the static 13-page site were all decided across a long
prior conversation with this same user, and this build's job is to re-express
that already-approved content as a scroll experience, not to invent a new
brand. Every decision below cites where it comes from.

---

## 1. Vibe (3–5 words) + references

**Quiet technical authority.** Not aerospace-glossy, not startup-loud. The
material talks through numbers and cross-sections, not adjectives.

References (mine, none named by the user for this specific build):
- The spec sheet of a serious composite manufacturer, read as a document, not
  a brochure — MPa, GPa, ISO/ASTM callouts sitting in plain type.
- A patent drawing: cutaway, labelled, no persuasion in the caption.
- The existing static site already built this session (13 pages, dark impact
  sections / light technical sections, JetBrains Mono for spec labels) — this
  build keeps that palette and voice, and turns the same content into a
  long-form scroll read instead of a clicked, paginated one.

## 2. Journey, in the content's own words

The static site already fixed the sequence (per the September 2026 structure
deck and the approved content plan in `content/graphenglass-com.md`). This
build honors it as chapters instead of pages:

1. Cover — "Materials to build challenges"
2. Capabilities — requisito → material → proceso → industrialización, 10 semanas
3. Technologies — MultiLayer y GOHNEX, un mismo origen de grafeno funcionalizado
4. Proven in UAV — el caso real: semialas de 120 g, apertura en vuelo, producción en serie
5. Industrialization — GraphenTower, 25.000 m², +30.000 unidades
6. Close — Cuéntanos el reto

## 3. Energy curve

Calm and declarative (cover) → measured, procedural (capabilities) → curious,
almost tactile (technologies — the material comes apart under the reader's
scroll) → a jump in conviction (the UAV photographs are real, not renders) →
settling into scale and reassurance (industrialization) → quiet, resolved
close. One clear rise, one peak, one descent. Never loud the whole way.

## 4. Feeling curve (required)

| Chapter | Feeling | What on screen causes it |
|---|---|---|
| 01 Cover | Quiet confidence | A single declarative line on bare ground, no proof yet offered, none needed |
| 02 Capabilities | Procedural trust | The 10-week timeline counts itself out in front of the reader, phase by phase |
| 03 Technologies | Tactile curiosity | The composite cross-section pulls apart layer by layer as the reader scrolls, each one naming its real material |
| 04 Proven in UAV | Conviction (**peak**) | A soldier's hands, real dirt, a real airfield — the ultralight wing that only weighs 120 g stops being a claim and becomes a photograph |
| 05 Industrialization | Settled scale | The real facility numbers (25,000 m², +30,000 units) land as counted figures against the actual plant photograph |
| 06 Close | Resolved quiet | One line, one link, the colophon — the loudest thing on the page has already happened |

## 5. The peak

**The sentence a visitor would say to a friend:** "Their drone wing weighs as
much as a phone case, and it's a photo of a real soldier holding it, not a
render."

**Lives in:** Chapter 04, Proven in UAV. This chapter gets the largest span,
the most scroll room, and a beat of near-silence right before it (the last
screen of Chapter 03 empties out to a single line before the cut).

## 6. The tell-someone sentence

**"It's the site where the drone wing comes apart to show you what's actually
inside it, then you find out it survived a real launch."**

## 7. Range: how far from premium-minimal

Editorial-technical. Not brutalist, not playful, not maximalist. Restraint is
the point: the material's own numbers are dramatic enough that the page does
not need to perform drama on top of them.

## 8. One unbroken world, or distinct chapters?

**Distinct chapters, hard cuts.** The content is inherently sectioned — a
material platform, a proven case, an industrial capability — and each of
those wants its own ground and its own register (a spec table reads nothing
like a photograph of a soldier in a field). A continuous single-world flight
would force a fake physical journey onto content that has no real geography.
This is also why grammar 2.4 (continuous world) is rejected below.

## 9. Assets already available

Eleven real photographs already extracted and optimized from the Graphenglass
commercial deck (`site/assets/img/`): UAV launch, operator, semi-wings, airframe,
MultiLayer parts and wing, GOHNEX parts, infrastructure pole, plant/lab, plant
composite tubes. **No image or video generation for this build** — no
`KIE_AI_API_KEY` is configured, and the brand already has real photography,
which the skill treats as the first-class route, not a fallback. Consequently
this build uses **zero `scrub` acts** (no video clips exist to scrub), which
is not a compromise: chaptered editorial already caps scrub at "at most one
chapter" and leans on `flow`, `reveal`, `parallax` and `count` instead.

## Authored silence

The empty final screen of Chapter 03 (a few hundred pixels of bare ground, no
copy) before the hard cut into Chapter 04's photograph is deliberate: it is
the intake of breath before the peak, not dead scroll.
