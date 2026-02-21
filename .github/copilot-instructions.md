<!-- Repo: Aman-Portfolio (Next.js + Tailwind) -->
# Copilot instructions for code edits

Purpose
- Help contributors and AI agents make targeted changes to this Next.js portfolio.

Big picture
- This is a Next.js React portfolio (root-level `pages/` routes + `components/`).
- UI uses Tailwind CSS (`tailwind.config.js`, `styles/globals.css`).
- Static assets live under `public/assets/` and are imported directly in components (e.g. `components/Skills.jsx`).

Key files and patterns (examples)
- Page routes: `pages/index.js`, `pages/crypto.jsx`, `pages/netflix.jsx` — edit these for route content.
- Components: `components/Skills.jsx`, `components/Projects.jsx`, `components/ProjectItem.jsx` — small, default-exported function components that contain local arrays (e.g. `skills` in `Skills.jsx`).
- Images: components import image files like `import Html from "../public/assets/skills/html.png"` and use `next/image`.

Developer workflows
- Start dev server: `npm run dev` (runs `next dev`) and open http://localhost:3000.
- Build for production: `npm run build` (runs `next build`).
- Lint: `npm run lint`.

Deployment notes (important to check)
- `firebase.json` sets hosting `public: "build"` and rewrites to `/index.html`. The repo currently has Next build scripts but no `next export` script; static export default output is `out`. Confirm with the owner whether deployment uses:
  - a static export (`next build && next export`) and which output dir is expected, or
  - a Node server (`next start`) behind hosting. Adjust `firebase.json` or npm scripts accordingly.
- This repo also lists `gh-pages` and `firebase` deps — check for any custom deploy scripts before changing hosting config.

Project-specific conventions
- Components are simple and self-contained: update local arrays (e.g. `skills`) inside component files rather than adding a separate data module unless data is reused.
- Styling is inline via Tailwind utility classes; avoid introducing CSS-in-JS unless necessary.
- Image imports are static (file imports), so when adding images place them under `public/assets/` and update imports.

What you can safely change
- Content and copy in `pages/` and `components/`.
- Add new assets under `public/assets/` and reference them from components.
- Tailwind utilities and component layout tweaks.

What to check or ask the owner before making changes
- Confirm deploy target and intended build output directory given `firebase.json` expects `build`.
- If adding external images served by `next/image`, check `next.config.js` for allowed domains (currently minimal config).

If you modify files, run these locally to validate
```bash
npm install
npm run dev          # local dev
npm run build        # production build check
```

If anything in this file is unclear, tell me which area (build, deploy, images, or components) and I'll expand with exact edit examples.
