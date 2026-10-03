# HARNESS.md — how to reconstruct this job

- Job id: `43`
- Playbook: `PLAYBOOK_MARKER=client_site_rebuild_doctrine_v8`

Read these in order. Do not invent a parallel process.

1. **Asked:** DESIGN_BRIEF.md → COMPOSITION.md → CRAFT.md → LOOK_REFS.md → LOOK_TOKENS.md → look_packet/
2. **Seeded:** THEME.css, LAYOUT_FONTS.tsx, HERO.tsx, CONTENT_FACTS.md, ASSET_LOCK.md, PHOTOS.md
3. **Envelope:** `.genesis_harness.json` (marker, look urls, niche, files)
4. **Live phases:** `.progress.json` → `trail[]` (seed → look → craft → ship → gates → repair → review)
5. **Harness steps:** `harness_trace.jsonl` (one JSON object per step; `phase`, `ok`, `gate`, `repair_round`)
6. **Gates:** `gates.json` plus `visual_gate.json`, `visual_parity.json`, `inner_pages.json`, `multipage_purity.json`,
   `route_parity.json`, `.genesis_css_gate.json`, `.genesis_jev.json`
7. **Repairs:** `.genesis_project_repair.json` (`rounds`, `last_fails`)
8. **Ship:** transcript.json, AUDIT.md (rebuilt timeline), preview URL in summary

Global join: `data/tool_trace.jsonl` filtered by `job_id`.
Pinpoint a regression: which `phase` in the trail, which `fails[]` in gates.json,
which playbook marker, which LOOK url, which `repair_round`.

Standing workflow: `docs/DEV_WORKFLOW.md` (Lauren Tan pstack default — Feature Map, prove-it-works tests, /unslop).