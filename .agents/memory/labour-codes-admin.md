---
name: Labour Codes admin panel architecture
description: Node/Express + MongoDB admin backend bolted onto an existing Vite/React site — durable decisions and gotchas.
---

- Two-process dev setup: Express API and Vite must both run under one `npm run dev` (via `concurrently`), with Vite proxying `/api` to the Express port. If adding new backend routes, they go under `/api/*` and the Vite proxy config doesn't need per-route changes.
- Auth secret must be mandatory, not defaulted. Early implementation fell back to a hardcoded JWT secret when `SESSION_SECRET` was unset — a real security hole. The middleware now throws at startup if `SESSION_SECRET` is missing; never reintroduce a fallback secret.
- Content models are intentionally simple: a singleton `Home` doc, and `Service`/`Job` collections that merge "listing" and "detail page" fields into one schema (no separate detail-page table). Keep this shape consistent if extending — don't reintroduce parallel hardcoded detail maps in the frontend.
- Public pages fetch content client-side from the API and must handle loading/error/not-found states explicitly (blank screen during fetch, explicit message on error/404) rather than silently rendering with stale/hardcoded fallback data — this was flagged and fixed once already.
- Seed script creates a default admin (`admin` / a placeholder password) only if no admin exists. There is no in-app change-password flow; document this as a known gap whenever touching admin auth.
