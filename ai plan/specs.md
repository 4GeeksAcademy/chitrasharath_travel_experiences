# Wanderlust As-Built Specification

Last updated: 2026-05-04

## Product Summary

Wanderlust is a frontend-only travel experience application built with Next.js App Router and TypeScript. It is an image-led, editorial-style experience with static local datasets, client-side filtering and pagination, and session-only favorites state managed through React context.

The current implementation goes beyond the original five-route plan and now includes additional informational routes.

## Implemented Routes

1. `/` Home
2. `/experiences` Explorer
3. `/experiences/[id]` Experience detail by id
4. `/favorites` Favorites list
5. `/profile` User profile
6. `/about` About page
7. `/contact` Contact page

## Current Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9` with `eslint-config-next`

## App Architecture

### Global App Shell

All routes render through a shared shell in `components/layout/AppShell.tsx`:

1. `ResponsiveHeader`
2. Route content
3. `NewsletterSignup`
4. `Footer`

Favorites state is provided app-wide using `FavoritesProvider` and initialized from `userProfile.favoriteExperienceIds`.

### Typography and Theme

- Heading font: `Oswald` via `next/font/google`
- Body font: `Source Serif 4` via `next/font/google`
- Palette is controlled by CSS variables in `app/globals.css`:
  - `--color-paper`
  - `--color-sand`
  - `--color-ink`
  - `--color-muted`
  - `--color-border`
  - `--color-accent`
  - `--color-accent-strong`

## Data Model and Local Content

No backend or database is used. All data is local TypeScript.

### Main Datasets

- `data/experiences.ts`
  - Generated from `destinationSeeds`
  - 112 total experiences
  - Categories: `Adventure`, `Culture`, `Food`, `Wellness`, `Nature`
  - First 12 experiences are flagged as `featured`
- `data/experience_enrichment.ts`
  - Derived detail content per experience id
  - Adds summary, sections, gallery, accommodation, and related-region CTA
- `data/site_content.ts`
  - Navigation links, header contact, footer groups, newsletter content, and all home page section content
- `data/user_profile.ts`
  - Profile metadata, quick links, stats, tabs, actions, initial favorites list

### Shared Types

Primary exports are centralized through `types/index.ts`, re-exporting domain types and defining:

- `BreadcrumbItem`
- `FilterState`
- `PaginationState`
- `CtaVariant = "primary" | "secondary" | "ghost"`

## State Management

### Favorites

- Implemented in `components/state/favorites-context.tsx`
- Exposes:
  - `favoriteIds`
  - `favoriteIdSet`
  - `favoritesCount`
  - `isFavorite(id)`
  - `toggleFavorite(id)`
- Persistence: in-memory session only (no localStorage/API persistence)

## Explorer Behavior (URL-Driven)

Implemented in `components/experience/ExperiencesBrowser.tsx`.

### Query Parameters

- `search` (string)
- `category` (string)
- `destination` (string)
- `featured` (`true` when enabled)
- `page` (number, omitted for page 1)

### Behavior Rules

- Search, filter, featured toggle, and pagination all sync to URL query params.
- Controls prefill from URL params on load.
- URL updates use `router.replace(..., { scroll: false })`.
- Filtering is client-side with memoized selectors.
- Pagination uses a fixed page size of `9`.
- Empty state headline is always `No results found` and subtext is route-configurable.

## Route Specifications

## Home (`/`)

Client component with dynamic carousel-style sections.

### Implemented Section Order

1. Hero media section (rotating video sources with poster fallback)
2. Intro copy block with CTA
3. Press logo strip
4. Audience tile grid
5. Why-us feature grid
6. Seasonal feature spotlight (prev/next)
7. Testimonial panel (prev/next)
8. Featured experiences grid (first 6 featured items)
9. Expertise tiles
10. Editorial quote block
11. Story collage + field notes CTA block

### Home CTA Destinations

- `/experiences`
- `/experiences?featured=true`
- `/favorites`

## Experiences (`/experiences`)

Server route wrapping `ExperiencesBrowser` in `Suspense`.

### Config

- Title: `Explore curated experiences`
- Eyebrow: `Experiences`
- Hero image uses static seeded image URL
- Featured checkbox is enabled on this route (`enableFeatured`)

## Experience Detail (`/experiences/[id]`)

Dynamic server route.

### Data Resolution

- Reads `params: Promise<{ id: string }>`
- Looks up base experience in `experiences`
- Looks up enrichment in `getExperienceDetailContent(id)`
- Calls `notFound()` if either lookup fails

### Implemented Sections

1. Hero banner with breadcrumbs
2. Summary/trip facts card + favorite toggle
3. Highlights numbered list
4. Repeated detail sections (image + copy, alternating order support)
5. Gallery hero image + thumbnail grid
6. Accommodation feature card
7. Related region CTA panel with primary, secondary, and phone actions

## Favorites (`/favorites`)

Server route wrapping client `FavoritesPageContent` in `Suspense`.

### Behavior

- Favorites list is derived from `favoriteIdSet` against full experience dataset.
- If zero favorites:
  - Render hero
  - Render dedicated empty state with CTA to `/experiences`
- If favorites exist:
  - Reuse `ExperiencesBrowser` with favorites subset
  - Featured filter is not enabled on this route

## Profile (`/profile`)

Client route backed by `data/user_profile.ts` plus live `favoritesCount` from context.

### Implemented Sections

1. Hero banner
2. Two utility actions (`Experiences near me`, `Random place`)
3. Identity card with avatar and quick links
4. Stats grid (saved favorites value is live context-derived)
5. Tabs row with local active-tab state
6. Passport map CTA card

## About (`/about`)

Static informational route with:

1. Hero banner
2. Belief statement card
3. Three-column value proposition grid
4. Dark CTA panel linking to experiences

## Contact (`/contact`)

Static informational route with:

1. Hero banner
2. Contact details and dual CTA actions (`mailto`, `tel`)
3. Secondary CTA panel to `/experiences`

## Shared UI Components

### Header (`ResponsiveHeader`)

- Mobile (`< md`): brand + enquire CTA (hidden on very narrow widths) + hamburger
- Desktop (`>= md`): horizontal nav + phone + account + enquire CTA
- Mobile drawer:
  - Overlay + slide-in panel
  - `role="dialog"` and `aria-modal="true"`
  - Includes primary nav links, phone, account link, and enquire CTA

Primary nav links currently are:

- `Favorites`
- `Experiences`
- `About`

### Footer

- Desktop: expanded multi-column footer groups
- Mobile: collapsible groups using native `<details>`/`<summary>`
- Includes social links and app links

### Newsletter Signup

- Client-only form with local submitted state
- Validates non-empty email input only
- On submit, clears input and shows confirmation text
- No API integration

### Cards and Pagination

- `ExperienceCard` includes image, summary, metadata, favorite toggle, and detail link
- `ResultsPager` renders only when `totalPages > 1`

## Interaction and Accessibility Notes

- Favorite buttons expose `aria-pressed` and adaptive `aria-label`
- Mobile menu dialog semantics are present
- Breadcrumb navigation includes `aria-label="Breadcrumb"`
- Empty states are explicit and route-specific

## Current Constraints and Non-Goals

- Frontend-only; no backend integration
- No authentication
- No persisted favorites across sessions
- No checkout/booking flow
- Detail content is generated/static, not CMS-backed

## Known Divergences From Earlier Planning

- Route scope expanded from 5 routes to 7 routes (added `/about`, `/contact`).
- Favorites state uses context provider in app shell, not prop drilling from a top-level page component.
- Header nav includes `Favorites` rather than `Destinations` as a top-level item.
- Home page implements full editorial sections, including rotating video hero support.
- Explorer supports an additional featured filter toggle beyond category and destination.
