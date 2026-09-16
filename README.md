# stacknet.dev

The official website for **Stacknet.dev** — a modern web development studio building
websites, web applications, SaaS products, digital platforms and backend systems.

> We build the web worth visiting.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- Clean global CSS architecture with design tokens (no UI framework)
- `next/font` — Manrope, DM Mono, Instrument Serif
- Fully static output (SSG), zero client dependencies beyond React

## Design system

The site is built on a small set of primitives before any section:

- **Color** — deep near-black neutrals with a single electric-lime accent, used sparingly
- **Typography** — Manrope (UI/headlines), DM Mono (technical labels), Instrument Serif (editorial emphasis)
- **Spacing / grid** — CSS variables + `clamp()` for fluid, mobile-first responsiveness
- **Motion** — restrained reveals, hover transitions, and a subtle custom cursor; fully respects `prefers-reduced-motion`

Design tokens live in [`app/globals.css`](app/globals.css); component styles in
[`app/components.css`](app/components.css); content in [`lib/data.ts`](lib/data.ts).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/         layout, page, global + component CSS, robots, sitemap, icon
components/   Navbar, Hero, Ticker, Services, Stack, Work, Process,
             Philosophy, Testimonials, FAQ, CTA, Footer + primitives
lib/         data.ts — all copy and content
```

## Notes

- Case studies and testimonials are clearly marked **placeholders** — no real client
  claims, logos, or fabricated statistics are used.
- Targets WCAG 2.2 AA: semantic HTML, keyboard-accessible navigation and FAQ,
  visible focus states, and reduced-motion support.

---

© 2026 Stacknet.dev · Built for the web.
