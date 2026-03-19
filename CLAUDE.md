# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a full-stack developer, built with Next.js 16 (app router), React 19, HeroUI v2, and Tailwind CSS 3.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build (uses --webpack; Turbopack has SSR issues with HeroUI)
pnpm start      # Start production server
pnpm lint       # Run ESLint (uses eslint CLI directly; `next lint` was removed in Next.js 16)
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
- **API routes**: `app/(site)/submit-form/route.ts` (Postmark email) and `app/github-contributions/[username]/route.ts` (GitHub contribution scraper with 1-hour memory cache).

### Styling

- Tailwind CSS with HeroUI plugin and custom tech-stack color tokens (e.g., `typescript`, `reactjs`, `nextjs`, `aws`, `python`)
- Dark/light mode via `next-themes` (class-based)
- Tailwind Variants (`primitives.ts`) for title/subtitle component patterns
- Custom fonts loaded locally in `/app/fonts/` — Inter (sans) and FiraCode (mono)
- Prettier with `prettier-plugin-tailwindcss` for class sorting and `prettier-plugin-organize-imports` for import ordering

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json).

## Environment Variables

- `POSTMARK_SERVER_TOKEN` — Required for contact form email submission
