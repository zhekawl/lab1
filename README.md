# Course Catalog — Lab 1

This repository contains the scaffold for the Course Catalog lab (App Router, TypeScript, Server & Client Components).

- Key files:
  - [lib/courses.ts](lib/courses.ts) — mock data functions
  - [components/CourseCard.tsx](components/CourseCard.tsx) — Server Component for list items
  - [components/LikeButton.tsx](components/LikeButton.tsx) — Client Component with `useState`
  - [app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx), [app/about/page.tsx](app/about/page.tsx)
  - [app/courses/page.tsx](app/courses/page.tsx), [app/courses/[id]/page.tsx](app/courses/%5Bid%5D/page.tsx)

Follow the lab handout: run `npx create-next-app@latest course-catalog` then copy these files into the generated project (or run the project here). Start dev server with:

```bash
npm install
npm run dev
```
