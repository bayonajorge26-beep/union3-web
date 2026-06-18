# Unión 3 — Design System

Brand and UI system for **Unión 3**, an independent car-repair workshop (*taller mecánico*) in **Sant Boi de Llobregat** (Barcelona). The system powers an animated, dark, industrial landing page and any future marketing surfaces.

> **Origin:** Built from a written brief — there is no prior codebase, Figma, or existing brand assets. All foundations (logo mark, type, color application, motion) were created here. If real brand assets, photos, or a logo exist, share them and we'll swap the placeholders.

---

## Brand context

- **Name:** Unión 3 · *taller mecánico*
- **Location:** Sant Boi de Llobregat, Barcelona
- **Services:** Mecánica general, Pre-ITV, Frenos, Distribución, Diagnóstico, Aire AC
- **Brand colors:** Red `#CC0000`, Black `#0A0A0A`, White `#FFFFFF`
- **Personality:** Industrial, dark, modern, trustworthy, no-nonsense. Mechanic you can trust.
- **Primary action:** Book an appointment via WhatsApp ("Pide cita por WhatsApp").

---

## Content fundamentals

- **Language:** Spanish (Castilian), local and approachable. Could extend to Catalan given the location — ask before adding.
- **Voice:** Direct, honest, plain. We talk to the customer as **"tú"** ("Tu taller de confianza", "Pide cita", "tu coche"). Warm but not chatty.
- **Tone:** Confidence through clarity — concrete services, clear prices, no jargon dumped on the customer. Emphasis on *confianza* (trust), *sin compromiso* (no obligation), *garantizado*.
- **Casing:** Display headings and the wordmark are **UPPERCASE** (Anton). Eyebrows/labels/buttons are uppercase with wide tracking. Body copy is sentence case.
- **Accents:** Keep Spanish accents — "UNIÓN", "diagnóstico", "años". The "Ó" is part of the wordmark.
- **Emoji:** None. The brand is industrial, not playful. Iconography carries meaning, not emoji.
- **Example copy:**
  - Hero: *"Tu taller de **confianza** en Sant Boi"* (one word in red)
  - Sub: *"Mecánica general, Pre-ITV, frenos, distribución, diagnóstico y aire acondicionado. Presupuesto sin compromiso."*
  - CTA: *"Pide cita por WhatsApp"*
  - Trust: *"+15 años de experiencia"*, *"+500 clientes"*, *"Presupuesto gratis"*

---

## Visual foundations

- **Color:** Near-black canvas (`#0A0A0A`). A single hot brand red (`#CC0000`) is the *only* accent — used sparingly for one highlighted word, CTAs, ticks, hover rules and the logo. White for primary text, a grey ramp (`--grey-100…400`) for secondary text. A dark surface ramp (`--ink-850…600`) separates cards/sections from the page. WhatsApp green (`#25D366`) appears only on the booking button.
- **Type:** Two families. **Anton** (display, single heavy weight, uppercase, tight tracking) for the wordmark, hero and section titles. **Archivo** (400–900) for everything else — sub-headings (700/800 uppercase), body (400), labels/eyebrows (700, wide tracking). High contrast between huge display and small tracked labels is the signature.
- **Spacing:** 4px base scale. Generous vertical section rhythm (`--section-y: 96px`). Max content width 1200px, 24px gutter.
- **Backgrounds:** Flat dark, no photography by default (none was provided — color placeholders used). Subtle motifs only: a faint 64px grid masked into the hero, and a soft red radial glow top-right. The CTA band is the one place a red gradient is used intentionally.
- **Corners:** Tight and mechanical — `2px`/`4px` is the default; `8px` reserved for large blocks (CTA band, slider). Nothing is very rounded except circular handles/social hover.
- **Borders:** 1px hairline `--ink-600` on cards and section dividers; 2px strong border on secondary buttons. Borders strengthen on hover.
- **Shadows:** Deep and dark (`--shadow-md/lg`) since the canvas is black. The red CTA carries a red glow (`--shadow-accent`). No soft pastel shadows.
- **Cards:** Dark fill (`--surface-card`), hairline border, tight radius. On hover they lift 4px, brighten one step, the border strengthens, and a **red top-rule wipes in** (`scaleX` from left). Icon chip flips from dark/red to red/white.
- **Animation:** Smooth and mechanical. Easing tokens: `--ease-out` (decelerate, hovers), `--ease-mech` (in-out, wipes/rules), `--ease-snap` (slight overshoot). Durations 140/240/480ms. Signature moves: the **intro** (wordmark fade+scale with a 2-frame glitch, then a red line wipes horizontally, ~2.8s), scroll-reveal (fade + 28px rise via IntersectionObserver), the red rule wipe on cards, and the draggable before/after wipe. Respects `prefers-reduced-motion`.
- **Hover states:** Buttons lift 2px and shift one red step (or brighten for green). Links fade grey→white. Cards lift + brighten + red rule. Social tiles invert to solid red.
- **Press / focus:** Press uses the darker red (`--accent-press`). Focus ring is a 3px translucent red halo (`--focus-ring`).
- **Transparency/blur:** Sparingly — the nav becomes `rgba(10,10,10,.88)` + 8px blur once scrolled; before/after labels use a slight blur chip. Otherwise surfaces are opaque.

---

## Iconography

- **System:** Inline SVG icons in a **Lucide-style** (24px grid, 2px round stroke, no fill) — see `ui_kits/landing/Icons.jsx`, which defines the full set used on the site (wrench, shield-check, disc, cog, gauge, snowflake, clock, users, tag, map-pin, phone, instagram, facebook, arrow). These are hand-matched to Lucide's geometry; if you prefer, load real **Lucide** from CDN (`https://unpkg.com/lucide@latest`) — same stroke weight, drop-in.
- **WhatsApp** uses its own filled glyph (brand mark), not a stroke icon.
- **Color:** Icons inherit `currentColor` — red on dark chips, white on hover, grey in the footer.
- **Emoji / unicode:** Not used as icons anywhere. The only non-icon glyph is the `‹›` grip inside the slider handle.
- **Substitution flag:** The Lucide-style set is a hand-built approximation. If you adopt a specific icon library, tell me and I'll standardize on it.

---

## Fonts — substitution note

No brand fonts were supplied. Chosen from Google Fonts to match the industrial brief:
- **Anton** (display) — heavy condensed grotesque, great for an automotive/industrial wordmark.
- **Archivo** (text/UI) — grotesque with a wide weight range.

Loaded via Google Fonts `@import` in `tokens/fonts.css`. **If you have licensed brand fonts, send the files** and I'll self-host them (drop `.woff2` in `assets/fonts/` and replace the `@import` with `@font-face`).

---

## Index / manifest

**Root**
- `styles.css` — entry point; `@import`s every token + font file. Consumers link this one file.
- `readme.md` — this guide. · `SKILL.md` — portable Agent Skill wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`

**`assets/`** — `logomark.svg` (red tile + grille/"3" motif), `logomark-dark.svg`

**`components/`** (namespace `window.UniN3DesignSystem_c91c39`)
- `forms/Button` — primary / whatsapp / secondary / ghost, 3 sizes, icons *(starting point)*
- `cards/ServiceCard` — dark service tile with icon chip + red hover rule *(starting point)*
- `cards/StatCard` — oversized Anton trust statistic
- `content/Eyebrow` — wide-tracked overline with red tick
- `content/Badge` — solid / outline / neutral
- `media/BeforeAfterSlider` — draggable before/after wipe *(starting point)*

**`ui_kits/landing/`** — the full animated landing page *(starting point)*: `index.html` + `Intro.jsx`, `Landing.jsx`, `Icons.jsx`

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

> Component cards and the UI kit load the compiler-generated `_ds_bundle.js`. That file (and `_ds_manifest.json`) are produced automatically — if a preview shows a bundle load error, it just hasn't been compiled yet this turn.
