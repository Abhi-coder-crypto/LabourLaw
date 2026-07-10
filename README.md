# Labour Codes — Maru Consultancy Services

A multi-page business website for Maru Consultancy Services (Labour Codes) — an Indian labour law
compliance consultancy — with a full Admin Panel for editing site content.

## Stack
- **React 19** + **TypeScript** + **Vite 8** (frontend, port 5000)
- **Express** + **Mongoose/MongoDB** backend (port 8787, proxied under `/api` in dev via Vite)
- **Cloudinary** for image/video uploads
- **JWT in an httpOnly cookie** for admin auth (signed with `SESSION_SECRET`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** for animations
- **React Router v7** for client-side routing
- **Lucide React** for icons

## Pages
Public:
- `/` — Home (content from `/api/home`)
- `/about` — About
- `/services` — Services listing (from `/api/services`)
- `/services/:slug` — Service detail (from `/api/services/:slug`)
- `/clientele` — Clientele
- `/resources` — Resources / blog
- `/careers` — Careers (from `/api/careers`)
- `/careers/:slug` — Career detail (from `/api/careers/:slug`)
- `/contact` — Contact

Admin (protected, JWT cookie session):
- `/admin/login` — Admin login
- `/admin/home` — Edit Home page content
- `/admin/about` — Edit About page content
- `/admin/services` — Create/edit/delete services (incl. detail-page fields)
- `/admin/clientele` — Edit Clientele page content
- `/admin/resources` — Manage Resources / blog posts
- `/admin/careers` — Create/edit/delete career postings

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with:
   ```
   MONGODB_URI=your-mongodb-connection-string
   CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
   SESSION_SECRET=a-long-random-string
   ```
3. (Optional) seed initial content and a default admin user:
   ```bash
   npm run seed
   ```
   Idempotent — only creates documents that don't already exist. The seeded admin credentials are
   `admin` / `ChangeMe123!` unless overridden via env vars — **change this password after first
   login** (there is no in-app "change password" UI yet; update the `Admin` document's hash directly
   in MongoDB, or re-run seed with different env-provided credentials against a fresh database).

## Running the app

```bash
npm run dev
```
Runs both the Express API (port 8787) and the Vite dev server (port 5000, proxies `/api` to 8787)
via `concurrently`.

## Other scripts
```bash
npm run build      # TypeScript compile + Vite production build
npm run start       # Production server (serves built dist/ + API) — requires NODE_ENV=production
npm run lint        # Oxlint
npm run preview     # Preview production build locally
```

## Environment variables
- `MONGODB_URI` — MongoDB connection string
- `CLOUDINARY_URL` — Cloudinary account URL for image/video uploads
- `SESSION_SECRET` — JWT signing secret for admin auth cookies (required; the server refuses to
  start without it)

## Deployment
See `ecosystem.config.cjs` for a sample PM2 process definition for deploying the built site on a VPS.
