# LOOK_TOKENS.md — type / color / radius only

Use these on the client site. Do not copy LOOK modules (stats, platforms, membership).
- Source: niche_default
- Background: `#f4f1ea`
- Text: `#161513`
- Muted: `#6a655c`
- Display font: Instrument Serif, Georgia, serif
- Body font: Instrument Sans, Inter, system-ui, sans-serif
- Type scale: display 56px / H1 44px / H2 32px / body 17px (ratio 1.22)
- Radius: 4px
- Hero is a large photograph: True
- Motion: False
- Note: ERROR: LOOK_URL_OFF_LIBRARY host `palantir.com` is not a curated LOOK (job-41 Palantir class). Do not invent that brand's UI. LOOK_FETCH_FAILED for https://www.palantir.com/ (source=https://www.palantir.com/) — tokens/screenshots missing or unusable. Falling back to niche `agency` library craft (https://cuberto.com, https://basement.studio, https://nor.ma). Agency → cuberto/basement/norma; hospitality/real_estate → Casa/Base. Do not silently reuse a wrong vertical; do not apply true black, Barlow Condensed, or radius 0.

If source is spacex_default_temp: IGNORE these tokens. Use the niche craft in DESIGN_BRIEF. Never ship true black + Barlow Condensed.
If source is niche_default or editorial_default: use these numbers; they are the factory craft for this kind of business, not a clone of SpaceX.
If source is existing_site: verbatim clone — match their current site. Do not restyle it into a black SpaceX theme.
If accent_color is set: that is THEIR brand (buttons, links, wordmark). LOOK layout/type/space still come from the reference URL, not their WordPress.
If motion is true: one real GSAP/CSS motion on the hero (factory stack already has GSAP).
If false: still no frozen 8+ card stack — large photo-led bands.
Apply display/H1/H2/body as inline style={{fontSize:'Npx'}} — Tailwind v4 size utilities often do not paint.
