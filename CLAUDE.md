# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a full-stack developer, built with Next.js 16 (app router), React 19, HeroUI v2, and Tailwind CSS 3.

## Commands

```bash
pnpm dev        # Start development server (uses --webpack; Turbopack has issues with HeroUI SSR and rehype plugins)
pnpm build      # Production build (uses --webpack)
pnpm start      # Start production server
pnpm lint       # Run Biome check (linting + formatting)
pnpm lint:fix   # Auto-fix lint and format issues
pnpm format     # Format all files with Biome
```

## Architecture

### Route Groups

The app uses two Next.js route groups under `/app`:
- `(site)` — Main site pages (home, contact, projects, photos) with shared layout (navbar, footer, providers)
- `(projects-blog)` — Detailed project write-up pages (separate layout)

### Key Patterns

- **Home page grid layout**: CSS Grid with 11 columns × 9 rows on desktop, collapsing to flex column on mobile. Card components are placed across specific grid areas.
- **Dynamic imports with `ssr: false`**: Used for widgets (ClockWidget, ContributionGraphWidget) and project cards to avoid hydration mismatches with dynamic/time-based data.
- **Card-based components**: Reusable cards in `/components/cards/` represent grid items on the home page. Project-specific cards live in `/components/cards/projects/`.
- **MDX project pages**: Project detail pages use `@next/mdx` with file-based routing. Each project lives at `app/(projects-blog)/projects/[slug]/page.mdx`. A shared layout at `app/(projects-blog)/projects/layout.tsx` provides back navigation and `prose` styling via `@tailwindcss/typography`. New project pages only need a `page.mdx` file with an `export const metadata` and markdown content. `mdx-components.tsx` at the project root maps `a` to `next/link` (internal) or `target="_blank"` (external), and `img` to `next/image`.
- **API routes**: `app/(site)/submit-form/route.ts` (Postmark email) and `app/github-contributions/[username]/route.ts` (GitHub contribution scraper with 1-hour memory cache).

### Styling

- Tailwind CSS with HeroUI plugin and custom tech-stack color tokens (e.g., `typescript`, `reactjs`, `nextjs`, `aws`, `python`)
- Dark/light mode via `next-themes` (class-based)
- Tailwind Variants (`primitives.ts`) for title/subtitle component patterns
- Custom fonts loaded locally in `/app/fonts/` — Inter (sans) and FiraCode (mono)
- Biome for linting, formatting, and import organization (`biome.json`); Tailwind class sorting via `useSortedClasses` nursery rule

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json).

## Environment Variables

- `POSTMARK_SERVER_TOKEN` — Required for contact form email submission
