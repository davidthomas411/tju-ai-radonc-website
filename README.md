# TJU Radiation Oncology AI Research Website

Public-facing site for the Center for Excellence in AI within Jefferson Radiation Oncology. The home page is a curated overview that points visitors to the canonical sections for full content: `/projects`, `/team`, and `/news`.

## Features
- App Router-based Next.js site with focused, canonical section pages.
- Curated home page previews for projects, team, and news.
- Project category tabs on `/projects`.
- Team profiles with FaceTracker animation and dedicated detail pages.
- Content-driven pages for publications, patents, students, and news.
- Branded design system with Tailwind CSS and Radix UI primitives.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS + tailwindcss-animate + typography
- Radix UI components
- Framer Motion
- Vercel Blob (media uploads)

## Getting Started

### Prerequisites
- Node.js version compatible with your Next.js version (Node 18+ recommended).
- npm or pnpm

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build and run production
```bash
npm run build
npm run start
```

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint the codebase

## Environment Variables
Create a `.env.local` file if you plan to use media upload endpoints.

```
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

Used by:
- `app/api/upload-video/route.ts`
- `app/actions/upload-faces.ts`

## Content and Data
Most content lives in structured data files for reuse across pages.

- Team
  - `lib/faculty-data.ts` - canonical bios and profile metadata.
  - `lib/team-structure.ts` - team grouping and featured members.
  - `components/team-member-card.tsx` - shared team card UI.
- Projects
  - `lib/project-areas.ts` - category metadata used for previews and navigation.
  - Canonical category pages:
    - `app/projects/quality-safety/page.tsx`
    - `app/projects/reducing-side-effects/page.tsx`
    - `app/projects/improving-cure-rates/page.tsx`
    - `app/projects/education/page.tsx`
- News
  - `lib/news-data.ts` - canonical news items and article content.
  - `app/news/page.tsx` and `app/news/[slug]/page.tsx`
- Publications
  - `lib/publications-data.ts`
  - `app/publications/page.tsx`
- Patents
  - `lib/patents-data.ts`
  - `app/patents/page.tsx`
- Students
  - `lib/students-data.ts`
  - `app/students/page.tsx`

## Media Assets
- Static images and logos live under `public/images`.
- FaceTracker images are served from Vercel Blob:
  - `components/face-tracker.tsx` builds URLs using `blobFaceId` in `lib/faculty-data.ts`.
  - The upload helper at `/upload-faces` pushes face-looker outputs to `faces/{facultySlug}/...`.

## Key Routes
- `/` - curated overview
- `/projects` - projects landing with tabs for major categories
- `/projects/quality-safety`, `/projects/reducing-side-effects`, `/projects/improving-cure-rates`, `/projects/education`
- `/team` and `/team/[slug]`
- `/news` and `/news/[slug]`
- `/publications`, `/patents`, `/students`, `/about`
- `/privacy`, `/terms`

## Deployment
The site is optimized for Vercel. Build and deploy with `npm run build` and `npm run start` locally, or connect the repo to Vercel for CI builds and previews.

## Contributing
When updating content:
1. Update structured data in `lib/` first.
2. Keep the home page as a preview-only overview.
3. Add new assets to `public/images` or Vercel Blob as appropriate.
