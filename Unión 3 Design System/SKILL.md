---
name: union3-design
description: Use this skill to generate well-branded interfaces and assets for Unión 3 (taller mecánico in Sant Boi de Llobregat), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Unión 3 — dark, industrial, modern car-repair workshop. Spanish, "tú", no emoji, uppercase display.
- **Colors:** red `#CC0000` (single accent), black `#0A0A0A`, white `#FFFFFF`; WhatsApp green `#25D366` for booking only.
- **Type:** Anton (display, uppercase) + Archivo (text/UI). Loaded via Google Fonts in `tokens/fonts.css`.
- **Tokens:** link `styles.css` to get all CSS custom properties.
- **Components:** load `_ds_bundle.js`, then `const { Button, ServiceCard, StatCard, Eyebrow, Badge, BeforeAfterSlider } = window.UniN3DesignSystem_c91c39`.
- **Reference screen:** `ui_kits/landing/index.html` — full animated landing page (intro → hero → services → before/after → trust → CTA → footer).
- **Primary CTA:** "Pide cita por WhatsApp".
