# TASKS.md — orchestration checklist

Orchestrator / craft agents: mark items `[x]` with short notes when done.

## Intake
- [x] Design brief received and written to DESIGN_BRIEF.md
- [ ] AGENTS.md / README.md provenance confirmed

## Research
- [ ] Split LOOK (visual refs) vs CONTENT (brief + existing site)
- [ ] Content crawl: https://tmg.agency/
- [ ] Look analyze_reference 1: https://www.palantir.com/

## Build
- [ ] Scaffold Next factory stack (or resume project)
- [ ] Homepage follows COMPOSITION.md bands; paste THEME.css; wire LAYOUT_FONTS.tsx; delete Geist; type sizes inline
- [ ] Homepage uses CONTENT_FACTS brand/phone/copy and ASSET_LOCK photos (no generic paraphrase)
- [ ] Copy `photos/` into public/photos; img src from PHOTOS.md (no hotlink, no /_next/image)
- [ ] Copy HERO.tsx to app/components/Hero.tsx; first homepage band is that component (80vh, their photo)
- [ ] Inner slugs follow COMPOSITION.md page kinds + CRAFT.md (not one PageHero). About/team/contact/listing/process are dedicated page.tsx — not [...slug]. Same type/pad/photography as home
- [ ] Every REQUIRED ROUTES slug in DESIGN_BRIEF.md exists (same path, HTTP 200). No /hero-01 demo routes
- [ ] One section (or route) per distinct content block — copy must breathe
- [ ] Implement sections per brief / fidelity
- [ ] Client chrome uses COMPOSITION.md nav hrefs, their wordmark, their phone — not a kit Home/About/Services/Contact
- [ ] Follow ASSET_LOCK.md + LOOK_IA.md (their photos, 4–6 large bands, LOOK tokens only)
- [ ] Wire /api/health and forms if needed

## Verify & deploy
- [ ] Build green
- [ ] Visual/content check vs brief
- [ ] Deploy Vercel → record DEPLOY_URL

## Notes
_Agent notes go here._
