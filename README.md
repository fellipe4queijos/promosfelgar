# Grupo VIP de Promoções — Landing Page

A high-conversion, mobile-first landing page built to capture WhatsApp group sign-ups for a VIP deals community. The page is designed as a single-scroll experience inspired by classic e-book sales pages: one clear message, one action.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000). If using Netlify CLI for local edge/function emulation:

```bash
netlify dev
```

This starts on port 8888 with full Netlify feature emulation.

## Configuring the WhatsApp Link

Open `src/routes/index.tsx` and replace the `WHATSAPP_LINK` constant value with your actual WhatsApp group invite URL:

```ts
const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR-REAL-LINK'
```

## Building for Production

```bash
npm run build
```

Output is in `dist/client/`. Netlify picks this up automatically via `netlify.toml`.
