# giftscored.com

Nuxt 3 (Vue 3) + TypeScript + Tailwind. Fully-static export via `nuxi generate`.

## Stack (intentionally distinct from sibling Ramban Group properties)

- **Framework:** Nuxt 3 (Vue 3). Different build system, routing, and component model from the other Ramban Group scaffolds on purpose.
- **Styling:** Tailwind CSS with a research-journal palette — forest (`#2d4a3a`) + chalk (`#f5f3ed`) + copper (`#b87333`). Typography: Libre Caslon Text (serif headings) + Work Sans (body + UI) via Google Fonts.
- **Hosting target:** Render (static site). DNS at Namecheap.
- **Editorial byline:** Robin Lake, Methodology Editor (disclosed pen name).
- **Ownership disclosure:** Ramban Group, transparent on `/about/`.

## Editorial model

GiftScored is a **methodology-first editorial publication**. The product is the rubric — four weighted dimensions on a 0–100 scale, with the weights published on the methodology pages. We do **not** claim to hand-test products we score; scores synthesise public signals (long-track-record editorial reviews, cross-retailer consumer-review density, manufacturer specifications, return-policy documents). See `/editorial/` for full standards.

## Local development

```
cd C:/Users/ChadE/GEO/giftscored
npm install
npm run dev
```

Open <http://localhost:3000/>.

## Static export (Render-ready)

```
npm run generate
```

Nuxt writes the pre-rendered static site to `.output/public/`. Upload that directory to Render, Cloudflare Pages, Netlify, or any static host.

## Project structure

```
giftscored/
├── app.vue                       # Root app wrapper (NuxtLayout + NuxtPage)
├── assets/
│   └── css/main.css              # Tailwind directives + base typography
├── composables/
│   ├── site.ts                   # SITE constant (domain, editor, parent)
│   ├── schema.ts                 # Schema.org @graph helpers
│   └── useJsonLd.ts              # JSON-LD injection helper
├── layouts/
│   └── default.vue               # Header (nav) + footer
├── nuxt.config.ts
├── package.json
├── pages/
│   ├── index.vue                 # Homepage (rubric overview + FAQ)
│   ├── methodology/
│   │   ├── index.vue             # Hub
│   │   ├── how-we-pick.vue
│   │   ├── how-we-score.vue
│   │   └── quarterly-refresh.vue
│   ├── about.vue
│   ├── editorial.vue
│   ├── contact.vue
│   ├── privacy.vue
│   └── terms.vue
├── postcss.config.js
├── public/
│   ├── robots.txt
│   └── llms.txt
├── tailwind.config.js
└── tsconfig.json
```

## The rubric (at a glance)

| Dimension | Weight |
|---|---|
| Brand & review density | 30% |
| Category fit | 30% |
| Price-to-value | 25% |
| Giftability | 15% |

Full documentation at `/methodology/how-we-score/`.

## Deployment

See `DEPLOYMENT.md` for the Render + Namecheap DNS + ProtonMail Business + Matomo recipe.
