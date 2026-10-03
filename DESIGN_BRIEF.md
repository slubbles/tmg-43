# DESIGN BRIEF (source of truth)

- Lead ID: `24f3615134494fdabfd998d316e51af3`
- Schema: `genesis_brief/v1`
- Brief hash: `1038ae0d9e96c33d`
- Generated: `2026-10-03T01:25:43+00:00`

Agents MUST follow this brief. If a change contradicts it, update this file
and note why in TASKS.md before shipping.

## Contact
- Name: Thela Media Group
- Email: partners@tmg.agency
- Phone: (none)
- Company: Thela Media Group

## Existing site
- Has site: yes
- URL: https://tmg.agency/
- Preference: `keep_bios_rebuild`

## Brand
- Brand name: TMG
- Tagline: Advertising systems connected by intelligence infrastructure

### About
Thela Media Group (TMG) builds advertising systems connected by intelligence infrastructure. Elite systems for the most demanding campaigns — strategy, creative, media buying, analytics, automation, and intelligence backbones helping brands spend smarter and grow with confidence.

Platforms: Velocity (paid media deployment), Catalyst (marketing ops automation), Genesis (creative/campaign support), Oracle (market and performance intelligence).

Industries: healthcare, finance, technology, real estate, and energy. Trusted partnership approach with measurable growth.

## Visual references
1. https://www.palantir.com/

## Style
- Chips: modern, classic, sophisticated
- Notes: (none)

## Colors
- Mode: `designer_choose`
- Palette: (designer choose)

## Type system
- Inferred niche: `agency` — this kind of business on every page. Do not restyle into a different vertical (no clinic look on a builder, no Casa membership on an agency).
- Display: 56px / H1: 44px / H2: 32px / body: 17px (ratio 1.22)
- Factory craft for `agency`. Match them. Never substitute SpaceX black + Barlow.
- Hard rules: hero display ≥ 44px on desktop, body never below 16px.
- Section padding: min 96px desktop / 64px mobile. Max line measure 70ch.
- H1 and H2 must be visually distinct (weight or size, not just both bold).
## Craft (extracted from the reference — match, do not approximate)

- Hero grammar: photo with info plate
- Section padding: 96px top/bottom (desktop), scale ~0.7 on mobile
- Corner radius: 0px
- Buttons: radius 4px
- Type: display 56px / H1 44px / H2 32px / body 17px
- Motion: none — static, composed
- Photography: one strong photograph or their work; no metric theater, no logo salad of fake clients
- Density: measured editorial, case or work bands, no 0+ grids
- Nav: wordmark left, work/services + about + contact, one CTA
- Forbidden: true black + Barlow Condensed (SpaceX default); Shadcn Space demo routes (/hero-01, /navbar-01); 0+/0x/0% metric theater; invented Trusted by N companies; Unsplash/Pexels people when they have real photos; copying Casa/Superpower/NOR.MA offers, cities, or memberships

## Scope
- Mode: `multipage`
- REQUIRED ROUTES this job (existing_site_nav, 41 slugs). Every slug must exist as a Next.js route at the same path. Do not skip any.
  - `/`
  - `/contact`
  - `/platforms/velocity-ai`
  - `/platforms/catalyst`
  - `/platforms/genesis`
  - `/platforms/oracle`
  - `/case-studies`
  - `/services/ai-powered-strategy`
  - `/services/marketing-intelligence`
  - `/services/creative-development`
  - `/services/brand-architecture`
  - `/services/performance-media`
  - `/services/marketing-attribution`
  - `/services/digital-transformation`
  - `/services/content-strategy`
  - `/services/customer-analytics`
  - `/services/marketing-automation`
  - `/services/fractional-cmo-services`
  - `/industries/healthcare-life-sciences`
  - `/industries/financial-services`
  - `/industries/technology-saas`
  - `/industries/real-estate`
  - `/industries/energy-utilities`
  - `/industries/retail-ecommerce`
  - `/industries/manufacturing`
  - `/industries/professional-services`
  - `/industries/education`
  - `/industries/non-profit`
  - `/platforms/artificial-intelligence`
  - `/platforms/machine-learning-models`
  - `/platforms/predictive-analytics`
  - `/platforms/data-science`
  - `/platforms/crm-integration`
  - `/platforms/api-development`
  - `/platforms/real-time-optimization`
  - `/platforms/ab-testing-platform`
  - `/insights`
  - `/growth-framework`
  - `/blog`
  - `/privacy`
  - `/terms`
- Route parity is the full sitemap. Do not add /hero-01 /navbar-01 /topbar-01 demo routes.

## LOOK vs CONTENT (do not mix)
- **Anti-slop / craft bar:** follow CRAFT.md (homepage recipe + anti-slop) and the seeded `look_packet/` — do not restate long don't-lists here.
- **LOOK (visual only):** look_packet/ + look-library URL for this niche — layout, type, spacing, motion, photography *style*. Not IA, not copy. Their current site is CONTENT unless preference is verbatim_migrate. Do not clone a WordPress / KW template. Do not apply a black SpaceX theme.
- **CONTENT (facts only):** this brief + existing_site.url. Name, copy, services, prices, cities, phone, email, testimonials.
- NEVER copy prices, memberships, cities, or service lists from a visual reference (no Casa $199, no Bay Area unless this brief says so).
- NEVER invent star ratings, review counts, “EST. YEAR”, customer counts, or other stats unless they appear in this brief or the current site.
- If the brief or current site shows 0+, 0x, blank, or placeholder metrics: **OMIT the results/stats metric grid entirely**. Do not ship a wall of empty 0+ cards. Do not invent 600+ / 4.2x / 38% or “Trusted by 600+ companies”.
- Client logo strip: only logos that exist as real local `public/` files and load at 200. No empty rounded boxes. Prefer direct `/brand/logos/*.svg|png` over broken `/_next/image` optimizer URLs. If a logo file is missing, drop that logo — do not leave a blank tile. On dark pages, put logo tiles on a **hard light plate** (`style={{backgroundColor:'#ffffff'}}` or `bg-primary` when primary is white) — black wordmarks (Novak/BE-class ASSET_LOCK marks) are invisible on black/zinc. Do not trust `bg-white` alone; factory Tailwind themes often leave it inert.
- Never bake HTML entities into JSX/TS strings (`&#x27;`, `&amp;`, `&lt;`). Use real Unicode (`'`, `&`, `<`). Double-escaped entities render as literal `&#x27;` on the page and fail the visual gate.
- Tailwind v4: ship `postcss.config.mjs` with `@tailwindcss/postcss`, and `@source` globs in `globals.css` for `app/`, `components/`, `lib/`. Copy `THEME.css` into `globals.css` after the import. Do not use Railway-style `vercel.json` services blocks. Do not add `bg-black`/`text-white` just to satisfy a gate — those classes are not the look.
- Add this feedback widget on every page (job id is this build). It posts to the status site, not UserBack:
  `<script src="https://genesis-web-woad.vercel.app/genesis-feedback.js" data-job="JOB_ID" defer></script>`
  Replace JOB_ID with the numeric job id from the project folder name.
- If they have a current site: scrape THAT url for copy/photos/nav/logo/phone (CONTENT). Visual refs are LOOK only. Keep their brand accent on buttons/links; do not copy their WP layout, type scale, or boxed sections.

## Information architecture (do not cram)
- One idea per section. Hero is not the whole homepage.
- If the current site has distinct blocks (about, services, hours, contact, articles), give each its own section and/or route. Extra sections are required. Compressing their copy to fit a template is a fail.
- Do not paraphrase a long about into a short hero blurb and drop the rest. Keep their words; give them space.
- Lead form name/email/phone is **ops only**. Never put it on the client site. Footer/contact = **their** phone/email/address from the current site or brief brand facts.
- Images: download every photo you show into `public/` and render it with a plain `<img>` and that local path. Never `/_next/image` (those URLs 404 and the page shows empty boxes). If the file is missing, omit the image. Same-host photos from the current site. No Unsplash or stock people when that site has real photos.
- Header wordmark = ASSET_LOCK logo_urls (their mark). Never a stock headshot in the nav.
- Use LOOK_TOKENS.md for background, type, radius. One GSAP/CSS motion on the hero if tokens.motion is true.

## Product constraints (Genesis)
- Factory stack: latest pins in FACTORY STACK STANDARD (Next 15.x, React 19, TW v4, GSAP, Sentry env-ready)
- Vercel: `vercel --prod --yes --name` from `.genesis_vercel.json` (brand slug). Do not accept a random `*-murex-six` slug.
- Deploy to Vercel; report DEPLOY_URL and GITHUB_URL
- Personalized to this brief — no generic template look
- analyze_reference on LOOK urls for design; analyze existing_site for content when present
