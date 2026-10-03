# AGENTS.md — Genesis job harness

Lead: `24f3615134494fdabfd998d316e51af3`

## Source of truth
1. Read `DESIGN_BRIEF.md`, `COMPOSITION.md`, `CRAFT.md`, `LOOK_REFS.md`, `look_packet/`, `THEME.css`, `LAYOUT_FONTS.tsx`, and `HERO.tsx` before any craft.
2. Follow factory playbook + FACTORY STACK STANDARD injected in the task.
3. Update `TASKS.md` as you complete work (check items off, add notes).
4. If you change direction vs the brief, update `DESIGN_BRIEF.md` and note why.

## Do
- LOOK from reference URLs; CONTENT from this brief / existing site
- Compose the homepage as COMPOSITION.md bands; copy HERO.tsx to app/components/Hero.tsx as the first band; inner slugs as COMPOSITION.md page kinds with homepage craft budget (CRAFT.md); paste THEME.css into globals.css; wire LAYOUT_FONTS.tsx; delete Geist
- Split their copy into separate sections/pages — do not cram
- analyze_reference on look URLs; crawl existing_site for copy when present
- Hero video when a LOOK reference has video (see reference_media.json)
- Ship Vercel preview; YOU create the GitHub repo (see below)
- Write DEPLOY_URL and GITHUB_URL in the job result

## GitHub (Grok CLI does this — not a Python hook)
- After the Next app builds, from the app directory (where package.json is):
- Read `.genesis_github.json` in the job root for `{owner, name}` (brand slug + job id).
- `export GH_TOKEN="$GITHUB_TOKEN"`
- `gh repo create "$owner/$name" --public --source . --remote origin --push`
- If `gh` missing: `git init && git add -A && git commit -m preview && git push` using the token in the remote URL.
- Repo name = brand slug + job id (e.g. `tmg-4`). Never use the playbook title.
- Last line of result: `GITHUB_URL: https://github.com/<owner>/<name>`

## Don't
- Ignore DESIGN_BRIEF.md
- Copy prices/cities/services from a look reference
- Invent services, cities, testimonials, star ratings, EST. year, or stats not in the brief / current site
- Put the lead's form email/phone on the client site
- Use Unsplash/stock when the current site has real photos
- Cram About + Services + Hours + Contact into one section
