# TMG (Thela Media Group) — website rebuild

Factory rebuild of https://tmg.agency/ — Next.js 15 / React 19 / Tailwind v4,
static marketing frontend, deployed on Vercel as **tmg-43**.

- Design brief / content facts / asset lock live in the parent job folder
  (`../DESIGN_BRIEF.md`, `../CONTENT_FACTS.md`, `../ASSET_LOCK.md`).
- Look grammar: cuberto / basement / nor.ma packets (`../look_packet/`) —
  oversized serif display, few large bands, photography as material.
- Photography and logos are the client's own locked assets in `public/photos/`.

## Run

```sh
bun install
bun run build
node server.js   # serves on :3000
```

## Notes

- `/api/health` → `{ok:true}`; `/api/submit` posts contact leads to
  `WEBHOOK_URL_CONTACT` when set, and confirms offline when unset.
- The 0+ / 0x placeholder metric rows on the client's current homepage are
  intentionally omitted (brief rule: no metric theater). Case-study numbers
  are the published ones from their live /case-studies page.
