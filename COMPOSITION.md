# COMPOSITION.md — ship this site, not a kit

Niche: `agency`

Read DESIGN_BRIEF.md, CRAFT.md, and LOOK_REFS.md first. Paste THEME.css into app/globals.css after @import "tailwindcss".
Homepage bands below. Inner slugs use the page-kind recipes — not a cloned PageHero.
Core inners get the same type, pad, and photography budget as home (CRAFT.md).
Do not replace these bands with a Shadcn Space / Homely / Atomist demo page.
At most 4 Space/shadcn blocks, white-labeled into THESE bands.
Never add /hero-01 /navbar-01 /topbar-01 /footer-02 routes.

## Homepage bands (in this order)

1. Hero: editorial type, one photograph, one CTA — not metric theater
2. Work / cases: 3–6 real pieces or clients they named — omit empty logo strips
3. What we do: 3–5 services from the brief, not a SaaS bento
4. About: their words
5. Contact: their phone/email; form → /api/submit

Hero grammar: photo with info plate

## Inner pages (not a cloned PageHero)

Every REQUIRED ROUTES slug uses the recipe for its kind. Shared chrome: nav + footer only.
Do not ship one PageHero with title/image props on every secondary route.
Core kinds (about, team, contact, listing, process) are **dedicated routes** (`app/about-us/page.tsx`, `app/contact/page.tsx`, …). `app/[...slug]/page.tsx` is only for leftover generic URLs — never for /about-us, /meet-the-team, /buy, /sell, /contact, /houston-communities.
Inner pages get the same type, space, and photography as home (CRAFT.md). Title + one photo + a related-link dump is a fail (Loken 38–40). LOOK_REFS.md is type/space/photo only.

### Contact (1 slugs)

1. Title: H1 Contact / Visit at inner display size, their address if they have one — not a cloned home fold
2. Facts: phone, email, hours, address from CONTENT_FACTS as type, not a card kit — never the lead form
3. Form: name/message only → POST /api/submit, same type tokens as home
4. Map or area note only if they already show one
Slugs: `/contact`

### Detail (one plan, home, dish, project) (30 slugs)

1. Title + one full-width photo of THIS item (plan, home, dish, project) — unique crop
2. Facts: the specs/copy they already publish for this slug, 70ch, home-scale pad
3. More large photos of this item — omit if none; never empty boxes
4. Related: 2–4 sibling items as large stills — omit if none; not a 'More from' link dump
5. Close: contact / request this item
Slugs: `/platforms/velocity-ai`, `/case-studies`, `/services/ai-powered-strategy`, `/services/marketing-intelligence`, `/services/creative-development`, `/services/brand-architecture`, `/services/performance-media`, `/services/marketing-attribution`, and 22 more

### Journal index (2 slugs)

1. Title: Journal / News as they name it, inner display type
2. List: dated posts they have, headline + dek — no lorem cards, no kit magazine grid
Slugs: `/insights`, `/blog`

### Legal (2 slugs)

1. Title
2. Their policy text. If missing, a short honest stub — not a law-firm template
Slugs: `/privacy`, `/terms`

### Other inner pages (5 slugs)

1. Title band unique to this slug — not a cloned fold, not the home hero
2. The content this URL already has, split into 2–3 bands with home-scale type and pad
3. Close: contact CTA
Slugs: `/platforms/catalyst`, `/platforms/genesis`, `/platforms/oracle`, `/industries/manufacturing`, `/industries/education`


## Their copy (must appear on the homepage)

Use CONTENT_FACTS.md words. Do not paraphrase into generic template copy.
- Brand: TMG
- Phone: 348-7753434, 888-6021919
- Headings: Elite Systems for the Most Demanding Campaigns · The New Standard We believe great advertising is built on judgment, data, and discipline. · Our platforms power AI-driven marketing intelligence that transforms brands across healthcare, finance, technology, real estate, and energy. · Our Platforms
- Keep: "Advertising systems connected by intelligence infrastructure"
- Keep: "In an era of noise, precision is the only currency. TMG combines strategy, creative, media buying, analytics, automation, and intelligence backbones to help brands spend smarter an"
- Photos: 1 same-host files in ASSET_LOCK. Download into public/. No Unsplash.


## Type (inline styles — required)

- Put sizes on the element as style={{...}} — do not trust text-5xl / text-lg to win the cascade.
- Display / hero line: fontSize 56px, lineHeight 1.05, on desktop.
- H1: fontSize 44px. H2: fontSize 32px. Body: fontSize 17px, maxWidth 70ch.
- Section padding: paddingTop/Bottom 96px desktop, ~67px mobile.
- Nav wordmark is their logo file from ASSET_LOCK, never a stock headshot.
- Copy HERO.tsx to app/components/Hero.tsx — first band. minHeight 80vh, objectFit cover. Not a 200px card.
- One idea per band. Hero is not the whole homepage.

## Hard fails
- Anti-slop: see CRAFT.md + look_packet/ (no purple→blue gradients; no equal 3-col card grids as the whole language)
- True black + Barlow Condensed unless their live site already is that look
- 0+ / 0x / 0% metric grids; invented Trusted by N companies
- Unsplash / Pexels when they have real photos
- Next `/_next/image` srcs; missing files left as empty boxes
- Lorem ipsum, Welcome to our website, Built with Next.js, Acme Inc
- Lead form email/phone on the client site
- Geist / Geist Mono left from create-next-app — use LAYOUT_FONTS.tsx
- Homepage missing their brand / phone / copy / photos from CONTENT_FACTS
- Template nav (Home / About / Services / Contact) when those are not their slugs
- Hero type under 44px or section pad under 64px (inline or THEME.css — not text-5xl)
- Hero photo as a 200px card / empty box when PHOTOS.md lists a (hero) file
- Core inner page that is title + one photo + related links (CRAFT.md)

## Craft bar
- Follow CRAFT.md (homepage recipe + anti-slop). LOOK_REFS.md + look_packet/ are type/space/photo grammar.
- Core inners match homepage type, pad, and photography effort.

## Hero fold

Copy job `HERO.tsx` to `app/components/Hero.tsx` and render it as the homepage first band.
Do not rewrite it as a 200px card. Do not drop the minHeight or the photo.
If PHOTOS.md lists a `(hero)` file, that src is already in HERO.tsx.
Paste THEME.css so className="hero" paints 80vh + object-fit cover.
Empty/placeholder imgs in the fold fail.

## Chrome

- Wordmark: TMG from ASSET_LOCK (logo file if listed, else the name as type).
- Nav hrefs in this order. Do not substitute Home / About / Services / Contact unless those are their slugs:
  - `/blog` Blog
  - `/insights` Insights
  - `/industries/education` Education
  - `/industries/manufacturing` Manufacturing
  - `/platforms/catalyst` Catalyst
  - `/platforms/genesis` Genesis
  - `/platforms/oracle` Oracle
- Footer: TMG. Phone 348-7753434, 888-6021919. Never the lead form email. Never “Your Company”.
- Copy job `CHROME.tsx` for the header and footer. Do not replace it with a generic stack.
- Load fonts via LAYOUT_FONTS.tsx on <html>. Paste THEME.css into globals.css.
- If they have no photos: large type + color fields + their mark. No stock people.
