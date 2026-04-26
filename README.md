# Lexama Labs — Marketing Website

The official marketing site for Lexama Labs, built with Next.js 15, React 19, Tailwind CSS v4, and TypeScript.

## Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v4 (utility classes only — no component library)
- **Icons**: Lucide React
- **Fonts**: Geist (body) + JetBrains Mono (labels/eyebrows) via `next/font/google`
- **Deployment**: Vercel (primary) — auto-deploys on push to `main`

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

## Brand — Design tokens

All tokens are defined as CSS variables in `globals.css` and registered with Tailwind via `@theme inline`.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#080D1A` | Primary dark background |
| `--surface` | `#0D1625` | Card / section surface |
| `--card` | `#111C32` | Card alt background |
| `--edge` | `#1A2D4A` | Border color |
| `--edge-hover` | `#2A4570` | Border hover state |
| `--blue` | `#3B82F6` | Primary accent — CTAs, icons |
| `--blue-dark` | `#2563EB` | Button hover state |
| `--cyan` | `#06B6D4` | Secondary accent — horizontal bar, star ratings |
| `--sky` | `#60A5FA` | Highlight — logo dot, gradient endpoint |
| `--teal` | `#22D3EE` | Eyebrow / label color, gradient endpoint |
| `--text-primary` | `#F1F5F9` | Headings on dark backgrounds |
| `--text-secondary` | `#94A3B8` | Body text on dark backgrounds |
| `--text-tertiary` | `#64748B` | Muted / metadata text on dark backgrounds |

### Typography

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Body / headings | Geist | varies | 400–800 | Default for all prose |
| Eyebrow labels | JetBrains Mono | 11px | 600 | Uppercase, 3px letter-spacing, `#22D3EE` |
| Metadata / mono | JetBrains Mono | 10–13px | 400–600 | Technical labels, footer text |

Use the `<Eyebrow>` component (`src/components/Eyebrow.tsx`) for all section labels. Pass `light` prop on white backgrounds.

### Logo

The Lexama Labs mark ("The Bracket") is defined in `src/components/LogoMark.tsx`.

| Element | Color |
|---|---|
| Vertical bar | `#3B82F6` |
| Horizontal bar | `#06B6D4` |
| Dot | `#60A5FA` |
| Background (icon) | `#0D1625` |

Use `<LogoIcon>` for the square icon mark. Use `<LogoWordmark>` for icon + "Lexama Labs" text. Pass `dark={false}` when placing on light backgrounds.
