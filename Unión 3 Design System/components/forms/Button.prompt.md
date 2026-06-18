Bold, uppercase, square-cornered action button — the primary CTA across Unión 3 surfaces; use `whatsapp` variant for the "Pide cita" booking action.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowIcon />}>Pide cita</Button>
<Button variant="whatsapp" size="lg" icon={<WhatsAppIcon />}>Pide cita por WhatsApp</Button>
<Button variant="secondary">Ver servicios</Button>
```

Variants: `primary` (brand red, glow), `whatsapp` (green), `secondary` (outline), `ghost`. Sizes `sm | md | lg`. Pass icons as React nodes via `icon` / `iconRight`. Hovers lift 2px.
