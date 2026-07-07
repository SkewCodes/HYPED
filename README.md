# HYPED — Brand Home Site

The front door of the Hyped ecosystem. One page that makes hyped.trade, hyped.launch, hyped.bet, and hyped.max feel like one inevitable thing.

## Stack

- **TypeScript** (strict)
- **Next.js** App Router (SSG pages + one API route)
- **Tailwind v4** (custom theme)
- **Zod** (waitlist validation)
- **Vitest** (unit tests)

## Getting Started

```bash
cp .env.example .env.local
# Fill in SITE_URL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm test` | Run Vitest |

## Fonts

The site uses two typefaces loaded via `next/font/local`:

- **Inter** (body) — woff2 files in `public/fonts/`
- **Clash Display** (display) — placeholder files included; replace with licensed woff2 when the brand decision is finalized

## Media Assets

All video loops and poster images go in `public/media/`. The site is a picture frame — quality comes from the video assets.

Required assets (see spec for full details):
- `hero-loop` (mp4 + webm + poster.webp)
- `trade-loop`, `launch-loop`, `bet-loop`, `max-loop`
- `waitlist-loop`

## Environment Variables

| Name | Required | Notes |
|---|---|---|
| `SITE_URL` | Yes | Public URL, no trailing slash |
| `SUPABASE_URL` | Yes (for waitlist) | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (for waitlist) | Server-only key |

## Deployment

Deploy to Vercel with root directory set to `hyped-site/`. The waitlist API runs as a serverless function automatically.
