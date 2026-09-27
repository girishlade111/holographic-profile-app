# Holographic Card Creator

A Next.js web app that turns any profile photo into a stunning holographic trading-card-style visual. Upload an image and get an interactive 3D card with a rainbow holographic foil effect that reacts to your mouse — just like a real holographic trading card tilted in the light.

Originally generated with [v0.app](https://v0.app), now maintained as a standalone open-source project.

## Features

- **Image upload** — drop or select a profile photo (client-side only, nothing leaves your browser)
- **Holographic foil effect** — prismatic rainbow sheen layered over the image with CSS masks and gradients
- **Interactive 3D tilt** — the card rotates in perspective following your mouse, with smooth easing
- **Mouse-tracked shine** — holographic mask, prismatic glow, and tiled-code overlay all follow the cursor
- **Configurable effects** — holographic parameters (perspective, transition, gradients) live in `constants/holographic.ts`
- **Dark neon UI** — slate/purple gradient background built with Tailwind CSS and shadcn/ui components
- **Static export ready** — builds to plain static files, deployable anywhere (GitHub Pages, Vercel, Netlify)

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, `output: 'export'` static export)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [Lucide](https://lucide.dev) icons
- No backend, no database, no API routes — fully client-side

## Quick Start

```bash
# install dependencies
npm install
# or: pnpm install

# run the dev server
npm run dev
# open http://localhost:3000

# build a static export (writes to ./out)
npm run build
```

## Project Structure

```
app/
  page.tsx            # main page: upload + card preview
  layout.tsx          # root layout, theme provider
  globals.css         # Tailwind + custom styles
components/
  holographic-card.tsx  # the 3D holographic card
  image-upload.tsx      # file upload input
  upload-placeholder.tsx
  theme-provider.tsx
  ui/                   # shadcn/ui primitives (button, card, ...)
hooks/
  use-holographic-tilt.ts  # mouse-tracking tilt logic
utils/
  holographic-styles.ts    # CSS mask/gradient builders for the foil effect
constants/
  holographic.ts           # card dimensions, animation config, defaults
types/
  holographic.ts           # HolographicConfig type
public/                    # static images (placeholders, holographic mesh texture)
```

## Environment Variables

None — the app runs entirely in the browser and needs no configuration.

## Deployment

- **GitHub Pages** (current): the site is statically exported (`output: 'export'` in `next.config.mjs`) and served from the `gh-pages` branch. Because GitHub Pages serves project sites from a subpath (`/<repo>/`), `next.config.mjs` sets `basePath: '/holographic-profile-app'`. **Remove `basePath` when deploying to a root domain or Vercel.**
- **Vercel**: import the repo, `npm run build` works out of the box (remove `basePath` first).
- **Any static host**: serve the `./out` directory after `npm run build`.

Live demo: https://girishlade111.github.io/holographic-profile-app/

## Security Note

Next.js is pinned to **15.2.8**, which includes patches for CVE-2025-55182 (React2Shell RCE) and related advisories affecting older 15.2.x releases. Keep it updated.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
