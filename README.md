# dylanernst.dev

Dylan Ernst's developer portfolio — Vite + React + TypeScript, deployed to [dylanernst.dev](https://dylanernst.dev) via GitHub Pages.

## Run commands

**First time:**
```bash
npm install        # Node 18+
npm run dev        # http://localhost:5173
```

**Day to day:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build      # tsc -b + vite build → dist/
npm run preview    # serve the build locally
```

## Structure

- `src/data/site.ts` — **single source of truth**: all copy, projects, experience, skills, and links. Edit content here, never in components.
- `src/styles/global.css` — design tokens (GrayScale "ink" palette) + all component styles. Re-skin from the `:root` block.
- `src/components/` — one section per file: Header, Hero, About, Projects, Experience, Contact, Footer.
- `public/CNAME` — custom-domain record, copied into `dist/` on build.
- `public/compsci/static/recital.html` — legacy senior-recital program page, kept so old printed/shared links still resolve.

## Deploying

GitHub Pages serves the **built** site, not the source. Either:
1. Repo Settings → Pages → Source: **GitHub Actions**, with a deploy workflow (`.github/workflows/deploy.yml`), or
2. build locally and publish `dist/` to a `gh-pages` branch.
