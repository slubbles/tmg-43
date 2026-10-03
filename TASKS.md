# TASKS.md — orchestration checklist

Orchestrator / craft agents: mark items `[x]` with short notes when done.

## Intake
- [x] Design brief received and written to DESIGN_BRIEF.md
- [x] AGENTS.md / README.md provenance confirmed

## Research
- [x] Split LOOK (visual refs) vs CONTENT (brief + existing site) — LOOK = cuberto/basement/norma packets (palantir.com is off-library, per STATUS.json); CONTENT = tmg.agency crawl + brief
- [x] Content crawl: https://tmg.agency/ — homepage + /case-studies + /services/digital-transformation re-crawled this run to verify copy/metrics provenance
- [x] Look analyze_reference 1: https://www.palantir.com/ — LOOK_URL_OFF_LIBRARY; niche `agency` packet is the grammar

## Build
- [x] Scaffold Next factory stack (or resume project) — resumed job-43 scaffold (Next 15.5.25 / React 19.3.0 / TW v4 / Bun 1.4.2 / GSAP / Sentry deps)
- [x] Homepage follows COMPOSITION.md bands; paste THEME.css; wire LAYOUT_FONTS.tsx; delete Geist; type sizes inline (h1 56px on-photo, H2 56/72px inline, body 16–18px)
- [x] Homepage uses CONTENT_FACTS brand/phone/copy and ASSET_LOCK photos (no generic paraphrase)
- [x] Copy `photos/` into public/photos; img src from PHOTOS.md (no hotlink, no /_next/image) — all content <img> are /photos/* (verified across app/)
- [x] Copy HERO.tsx to app/components/Hero.tsx; first homepage band is that component (80vh, their photo) — byte-identical copy present (md5 fe0956ed…); inner folds rotate 3 unique crops of the same raster
- [x] Inner slugs follow COMPOSITION.md page kinds + CRAFT.md (not one PageHero). Contact dedicated route; detail/journal/legal kinds per kind recipe with rotated unique folds
- [x] Every REQUIRED ROUTES slug in DESIGN_BRIEF.md exists (same path, HTTP 200). No /hero-01 demo routes — 41/41 local 200; prod 200 spot-checks
- [x] One section (or route) per distinct content block — copy must breathe
- [x] Implement sections per brief / fidelity — case metrics from their live /case-studies; the 0+/0x placeholder stats band from their current homepage omitted per brief hard rule
- [x] Client chrome uses COMPOSITION.md nav hrefs, their wordmark, their phone — CHROME.tsx stack respected (nav slugs + footer phones)
- [x] Follow ASSET_LOCK.md + LOOK_IA.md (their photos, 4–6 large bands, LOOK tokens only)
- [x] Wire /api/health and forms if needed — /api/health {ok:true}; contact form posts /api/submit (WEBHOOK_URL_CONTACT offline-safe)

## Verify & deploy
- [x] Build green — `next build` ✓ 46/46 static pages; `tsc --noEmit` clean. Note: SWC minify worker pool deadlocks on this shared host; `experimental.cpus:1 + workerThreads:false` in next.config.mjs is the workaround (documented in config comment). Direct swc stress test (8k transforms) passes — minify itself is fast.
- [x] Vercel production `bun install` was failing on master (dpl_FppHXPFauaPGgBTojy6NYBdWuPaK and two prior). Cause: `site/bun.lock` is Bun 1.4 `lockfileVersion: 2`; Vercel’s default install bun is `bun@1.x` (1.3.14), which errors `Unknown lockfile version`. Fix: pin `installCommand` to `npx -y bun@1.4.2 install` and build with `npx next build` so install matches `packageManager` / lockfile without switching the Next.js function runtime.
- [x] Visual/content check vs brief — 41-route HTML sweep: widget present, no metric theater, no entity leaks, h1 ≥44px everywhere, no lead-email leak, no Geist; photos/serve 200 in prod
- [x] Deploy Vercel → record DEPLOY_URL — https://tmg-43.vercel.app (project tmg-43, from .genesis_vercel.json; --name honored)

## Notes
- This run resumed after a craft-restart marker (.genesis_jev_craft_restarted.json). The prior pass had left ~4,000 lines of composed pages; its build was blocked by a TS error (fold config object passed wholesale as style) — fixed in app/components/ServicePage.tsx, plus a duplicate unused app/layout-fonts.tsx (deleted) and a Google-Fonts @import after rules (removed; fonts load via next/font).
- LOOK steer (0.21) targeted the fold; the shipped fold follows the packet: cream intro plate with oversized serif display colliding into the full-bleed night-lights plate (Cuberto asymmetric grammar), basement-style dark platform index, one amber accent, no card bento.
- GitHub repo created by this run: https://github.com/slubbles/tmg-43 (public, master); Vercel git connected.
- Feedback widget (genesis-feedback.js data-job=43) wired in app/layout.tsx → present on all 41 routes (verified in built HTML).
- Contact form: name/message (+optional email/company) → POST /api/submit; offline path returns ok without fake delivery confirmation. Lead email partners@tmg.agency never rendered on any page.
