# CRAFT.md — production bar (~90% designer, not a kit)

Niche: `agency`

## LOOK packet notes

- ERROR: LOOK_URL_OFF_LIBRARY `https://www.palantir.com/` (host `palantir.com`) is not a curated LOOK grammar. Falling back to niche `agency` packet — do not treat the off-library URL as measured craft.

If this site could be a Shadcn / Homely / Atomist demo with their name swapped, it failed.
Home looking good while /about /team /buy are a title + one photo + related links is a fail
(Loken 38–40 class). Core inner pages get the same craft budget as home.
Open **look_packet/** (README + tokens + screenshot) before composing.

## Type
- Two families only: LOOK_TOKENS display + body. Wire LAYOUT_FONTS.tsx. Delete Geist.
- Home display: 96px, line-height 1.05. H1 56px. H2 36px. Body 16px / 70ch.
- Inner title bands: same family, 80–90% of home display, still ≥44px. Not a 28px eyebrow.
- Inline `style={{fontSize:'Npx'}}`. Do not trust text-5xl / text-lg on Tailwind v4.

## Space
- Section pad 80px desktop, ~56px mobile. Min 64px.
- Homepage: 4–6 large bands in COMPOSITION.md order. One idea per band.
- Core inners (about, team, contact, listing, process): 3–5 bands of the SAME scale.
- Negative space is intentional. Do not fill with fake metrics or equal 12-card bentos.

## Photography
- Their files from PHOTOS.md → `public/photos/` + plain `<img>`. Never `/_next/image`.
- Never Unsplash/Pexels when they have photos. Never empty boxes.
- Home hero: copy HERO.tsx (80vh, cover). Type sits on a dark plate if the photo is bright.
- Listing: 6–12 LARGE named photos (layout height hundreds of px), not a thumbnail kit grid.
- About/team: ≥2 editorial people/shop photos. Not one circle crop.
- Crop so type and faces do not collide.

## Composition
- LOOK_REFS.md grammar (type/space/photo). CONTENT_FACTS for words and IA.
- Asymmetric bands. Alternate photo-left / type-left. Do not repeat the home hero on inners.
- Inner title band is unique (crop, type size, not a cloned PageHero).
- At most 4 Space/shadcn blocks, white-labeled into THESE bands. No /hero-01 routes.

## Fold recipes (what TO DO — photograph-as-material, restraint, one accent)

Do not only avoid slop. Compose the fold like the LOOK grammar below.

### Cuberto — asymmetric type/photo collision
- Recipe id: `cuberto_asymmetric`
- DO: Oversized display, sparse words, asymmetric collision of type with full-bleed work. Photograph-as-material for the craft, not a 200px thumb. One accent; restraint — never a 12-card bento in the fold.

### Basement — oversized work on a dark field
- Recipe id: `basement_work_index`
- DO: Huge display on a dark field when tokens are dark; two or three LARGE work stills, not a mosaic. Type then oversized photo. One accent; restraint on chrome.

### NOR.MA — type-led editorial fold
- Recipe id: `norma_type_led`
- DO: Lead with measured editorial type (serif/sans pair), one idea, slow rhythm. Work or one strong photograph as a large band — not a card grid. Restraint + one accent. Cases as rooms, not SaaS feature tiles.

## Homepage recipe (pasteable — ship this skeleton)

Wire THEME.css + LAYOUT_FONTS.tsx + HERO.tsx first. Then compose:

```tsx
// app/page.tsx — skeleton; fill with CONTENT_FACTS / PHOTOS.md
import Hero from "./components/Hero"; // or app/components/Hero

export default function Home() {
  return (
    <main>
      {/* 1. Hero ~80vh — already in HERO.tsx */}
      <Hero />

      {/* 2–5. Bands — max 3 cards in any card row; prefer photo+type splits */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "420px",
        }}
      >
        <h2 style={{ fontSize: "36px", lineHeight: 1.1 }}>
          {/* their proof / services headline */}
        </h2>
        {/* optional: ≤3 cards, not equal 12-card bento */}
      </section>

      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "480px",
        }}
      >
        {/* photo-led band: large <img src="/photos/…"> + short copy */}
      </section>

      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "360px",
        }}
      >
        {/* trust / contact — their phone from CONTENT_FACTS */}
      </section>
    </main>
  );
}
```

Rules for this skeleton:
- Hero: copy HERO.tsx (minHeight 80vh, objectFit cover). Display type ≥96px inline.
- Each band: paddingTop/Bottom 80px (min 64), minHeight as above — not a flat card stack.
- Max 3 equal cards in any single row; prefer asymmetric photo + type.
- Inline fontSize: display 96px / h1 56px / h2 36px / body 16px.
- Fill bands from COMPOSITION.md order + their copy/photos — never kit filler.

## Core inner IA
- Dedicated `app/<slug>/page.tsx` for about / team / contact / listing / process.
- `[...slug]` is leftover generic URLs only.
- Title + one photo + “More from …” links = fail. Compose the COMPOSITION.md recipe.

## Hard fails (fail if present)
- True black + Barlow Condensed unless their live site already is that look
- 0+/0x/0% grids; invented Trusted by N
- Template nav Home/About/Services/Contact when those are not their slugs
- Catch-all dump of core IA
- Geist leftover from create-next-app

## Anti-slop (visual-parity hard gate — fail if present)
- No generic hero gradients: purple→blue / violet→indigo AI defaults (from-purple-*-to-blue-*, #7c3aed→#3b82f6). Use their LOOK tokens.
- No cookie-cutter 3-column equal card grids as the whole-page language. A feature row may exist; it must not BE the site.
- No equal 12-card bento dumps. Prefer 4–6 large asymmetric bands.
- Real hierarchy: size / weight / space. Display ≥56px home, inners ≥44px. Intentional whitespace (section pad ≥64px). Do not fill voids with fake metrics.
- Core inners (about, team, contact, listing, process) get home-level craft — same type/space/photo budget. Title + one photo + related links = fail.
- Photo treatment: full-bleed or large editorial crops; no 200px thumbnails; no Unsplash/Pexels when they have files; plain <img> from public/photos/.
- Compare against **look_packet/** (seeded README + tokens + screenshot) for type/space/photo grammar only — never copy their offers or IA.
