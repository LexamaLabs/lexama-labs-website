# Lexama Labs — Marketing Website

The official marketing site for Lexama Labs, built with Next.js 15, React 19, Tailwind CSS v4, and TypeScript.

## Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v4 (utility classes only — no component library)
- **Icons**: Lucide React
- **Font**: Geist (via `next/font/google`)
- **Deployment**: Vercel, Cloudflare Pages, or any static host (S3 + CloudFront)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & export

```bash
npm run build
```

The static export is written to `out/`. Upload that directory to any static host.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo in the Vercel dashboard — it will detect Next.js and run `npm run build` automatically.

## Deploy to Cloudflare Pages

1. Push to GitHub
2. In Cloudflare Pages, create a new project and connect the repo
3. Build command: `npm run build`
4. Output directory: `out`

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, problem statement, product spotlight, roadmap |
| `/products/edhydra` | EDHydra product page |
| `/about` | About Lexama Labs |
| `/contact` | Contact / demo request form |

## Components

| Component | Description |
|---|---|
| `Nav` | Fixed top navigation with mobile menu |
| `Footer` | Site footer with nav links and contact info |
| `FeatureCard` | Icon + title + description card (dark/light variants) |
| `CTABanner` | Full-width dark CTA section with primary + secondary buttons |
| `TestimonialPlaceholder` | Testimonial card with star rating and avatar |
| `VerticalRoadmapCard` | Roadmap vertical card with live/coming-soon status |
| `ContactForm` | Client-side contact form with loading and success states |

## Placeholder content

All placeholder content is marked with `[PLACEHOLDER]` tags. Search for them before launch:

```bash
grep -r "\[PLACEHOLDER\]" src/
grep -r "\[FOUNDER_NOTE\]" src/
```

Key items to fill before going live:

- `hello@lexama.io` in `Footer.tsx` — confirm email address
- Founder note in `about/page.tsx` — replace `[FOUNDER_NOTE]` block
- Team bios in `about/page.tsx`
- Social proof stats and testimonials in `page.tsx`
- Product screenshot / UI mockup in `products/edhydra/page.tsx`
- Pricing tiers in `products/edhydra/page.tsx`
- Calendly embed link in `contact/page.tsx`
- Form submission handler in `components/ContactForm.tsx`
- LinkedIn and GitHub URLs in `components/Footer.tsx`
- Compliance certifications in `products/edhydra/page.tsx`

## Design tokens

Core colors (set in `globals.css`):

| Value | Usage |
|---|---|
| `#0A0F1E` | Primary dark background (navy) |
| `#0f1629` | Card backgrounds |
| `#3B82F6` | Accent color (electric blue) — CTAs, icons |
| `#60A5FA` | Lighter blue — subheadings, subtle accents |
