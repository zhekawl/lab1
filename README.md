# Course Catalog — Lab 2

This repository contains the styled course catalog for the Advanced Web Technologies lab, using Tailwind CSS and shadcn/ui components for a responsive catalog interface.

- Key files:
  - [lib/courses.ts](lib/courses.ts) — mock data functions
  - [components/CourseCard.tsx](components/CourseCard.tsx) — styled Server Component using shadcn Card and Button
  - [components/LikeButton.tsx](components/LikeButton.tsx) — Client Component with `useState`
  - [app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx), [app/about/page.tsx](app/about/page.tsx)
  - [app/courses/page.tsx](app/courses/page.tsx), [app/courses/[id]/page.tsx](app/courses/%5Bid%5D/page.tsx)

The course list is now responsive and looks polished on mobile, tablet, and desktop screens.

Start the dev server with:

```bash
npm install
npm run dev
```
