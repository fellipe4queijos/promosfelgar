# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A high-conversion, mobile-first landing page for a WhatsApp VIP deals group. Built with TanStack Start and deployed on Netlify. The page is a single-scroll experience with one goal: get the visitor to click the WhatsApp CTA.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── favicon.ico
│   └── placeholder.png
├── src/
│   ├── data/
│   │   └── products.ts          # Legacy product data (unused by main page)
│   ├── routes/
│   │   ├── __root.tsx           # Root layout: HTML shell, global head meta (pt-BR lang)
│   │   ├── index.tsx            # MAIN LANDING PAGE — all sections live here
│   │   └── products/
│   │       └── $productId.tsx   # Legacy product detail route (unused)
│   ├── router.tsx               # TanStack Router setup
│   └── styles.css               # Tailwind + Google Fonts + custom keyframe animations
├── netlify.toml                 # Build command, publish dir (dist/client), dev port
├── package.json
├── tsconfig.json                # strict mode, @/* alias for src/*
└── vite.config.ts               # TanStack Start + Tailwind + Netlify plugin
```

## Key Files

### `src/routes/index.tsx`
The entire landing page. Contains:
- `WHATSAPP_LINK` constant — **change this** to the real group invite URL before going live.
- `CTAButton` — reusable green WhatsApp CTA button with pulsing glow animation.
- `BenefitCard` / `StepCard` — small presentational components for the benefits and how-it-works sections.
- `LandingPage` — the main export with all page sections (Hero, Benefits, How it Works, Footer, Sticky Mobile CTA).

### `src/styles.css`
- Imports Tailwind CSS 4.
- Imports Inter font from Google Fonts.
- Defines `cta-pulse` (WhatsApp green glow animation on CTA buttons) and `float-badge` (floating badge effect) keyframes.

## Page Sections (top to bottom)

1. **Hero** — Headline, sub-headline, primary CTA, social proof counter.
2. **Benefits** — 3-card grid: Economia Real, Alertas de Bug, Zero Spam.
3. **How It Works** — 3-step vertical timeline with a secondary CTA.
4. **Footer** — Copyright + liability disclaimer.
5. **Sticky Mobile CTA** — Fixed bottom bar visible only on `<md` breakpoints.

## Conventions

- **Mobile-first**: all layout decisions default to mobile; `md:` breakpoints add desktop refinements.
- **Dark theme**: background `#0f0f0f`, text `white/60–90`, accent `#25D366` (WhatsApp green).
- **One external link**: the WhatsApp invite URL (`WHATSAPP_LINK`). Always `target="_blank" rel="noopener noreferrer"`.
- Tailwind utility classes only — no CSS modules or styled-components.

## Non-obvious Decisions

- The sticky mobile CTA (`md:hidden`) mirrors the hero CTA text but with shorter copy ("Entrar no Grupo Grátis") to fit smaller screens without wrapping.
- The `cta-pulse` animation uses a box-shadow pulse rather than `scale` to avoid layout shift on mobile.
- The root `<html lang="pt-BR">` is set in `__root.tsx` because the entire site is Portuguese.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Start with Netlify feature emulation (port 8888)
npm run build    # Production build → dist/client/
```
