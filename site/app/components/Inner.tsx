/* Shared inner-page machinery — dedicated routes import these; [...slug] only for leftovers.
   Not a cloned PageHero: each kind composes its own title band. */
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

export const H2: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  fontSize: 52,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  margin: 0,
};

export const pad = (extra?: CSSProperties): CSSProperties => ({
  paddingLeft: "var(--pad, 96px)",
  paddingRight: "var(--pad, 96px)",
  ...extra,
});

export const maxW = { maxWidth: 1440 } as const;

export function InnerHeader({ dark = true }: { dark?: boolean }) {
  // Header is composed per page via Chrome; this helper renders nothing.
  return null;
}

/* Title band — used by service / industry / capability / legal / journal pages.
   Each page passes a distinct eyebrow + dek so no two folds read the same. */
export function TitleBand({
  eyebrow,
  title,
  dek,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  dek?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section
      style={{
        ...pad({ paddingTop: 168, paddingBottom: 72 }),
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ ...maxW, display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
        <div>
          <div className="kicker kicker--accent">{eyebrow}</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 74,
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              margin: "18px 0 0",
              maxWidth: "16ch",
            }}
          >
            {title}
          </h1>
        </div>
        {dek || aside ? (
          <div style={{ paddingBottom: 6 }}>
            {dek ? (
              <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: "var(--muted)" }}>{dek}</p>
            ) : null}
            {aside ? <div style={{ marginTop: 20 }}>{aside}</div> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* Statement band — large editorial claim with supporting copy (one idea per band). */
export function StatementBand({
  kicker,
  children,
  tone = "cream",
}: {
  kicker?: string;
  children: ReactNode;
  tone?: "cream" | "dark" | "cream2";
}) {
  const cls = tone === "dark" ? "band--dark" : tone === "cream2" ? "band--cream-2" : "";
  return (
    <section className={cls} style={pad({ paddingTop: 96, paddingBottom: 96 })}>
      <div style={maxW}>
        {kicker ? <div className="kicker kicker--accent">{kicker}</div> : null}
        <div style={{ marginTop: kicker ? 24 : 0 }}>{children}</div>
      </div>
    </section>
  );
}

/* Numbered process rows — tabular index, not a card grid. */
export function ProcessRows({
  items,
  dark = false,
}: {
  items: { n: string; title: string; copy: string; tags?: string[] }[];
  dark?: boolean;
}) {
  return (
    <div style={maxW}>
      <hr className="rule" />
      {items.map((p, i) => (
        <div
          key={p.n + p.title}
          style={{
            display: "grid",
            gridTemplateColumns: "72px minmax(200px, 0.8fr) minmax(0, 1.5fr)",
            gap: 32,
            alignItems: "baseline",
            padding: "38px 0",
            borderBottom: i < items.length - 1 ? "1px solid var(--line)" : "none",
          }}
        >
          <span className="idx" style={{ color: "var(--accent)" }}>
            {p.n}
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.15 }}>{p.title}</span>
          <span>
            <span style={{ fontSize: 16, lineHeight: 1.6, color: dark ? "rgba(244,241,234,0.78)" : "var(--muted)", display: "block" }}>
              {p.copy}
            </span>
            {p.tags?.length ? (
              <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="kicker"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 4,
                      padding: "5px 10px",
                      fontSize: 11.5,
                      color: dark ? "rgba(244,241,234,0.55)" : "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </span>
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
}

/* Case band — published case study, quoted from their site (challenge/approach/results). */
export function CaseBand({
  client,
  sector,
  challenge,
  approach,
  results,
  metrics,
  tags,
  quote,
  who,
  org,
  ctaHref = "/case-studies",
  ctaLabel = "View Case Studies",
}: {
  client: string;
  sector: string;
  challenge: string;
  approach: string;
  results: string;
  metrics?: { v: string; k: string }[];
  tags?: string[];
  quote?: string;
  who?: string;
  org?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="band--dark" style={pad({ paddingTop: 96, paddingBottom: 96 })}>
      <div style={maxW}>
        <div className="kicker kicker--accent">Published Case Study</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20, flexWrap: "wrap", marginTop: 18 }}>
          <h2 style={{ ...H2, color: "#f4f1ea", fontSize: 46 }}>{client}</h2>
          <span className="kicker" style={{ color: "rgba(244,241,234,0.55)" }}>
            {sector}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 40, marginTop: 44 }}>
          {[
            { h: "The Challenge", p: challenge },
            { h: "The Approach", p: approach },
            { h: "The Result", p: results },
          ].map((b) => (
            <div key={b.h}>
              <div className="kicker" style={{ color: "var(--accent)", marginBottom: 12 }}>
                {b.h}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.62, margin: 0, color: "rgba(244,241,234,0.85)" }}>{b.p}</p>
            </div>
          ))}
        </div>
        {metrics?.length ? (
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginTop: 48, paddingTop: 36, borderTop: "1px solid var(--line-dark)" }}>
            {metrics.map((m) => (
              <div key={m.k}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1, color: "var(--accent)" }}>{m.v}</div>
                <div className="kicker" style={{ marginTop: 8, color: "rgba(244,241,234,0.6)" }}>
                  {m.k}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {tags?.length ? (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,234,0.6)",
                  border: "1px solid var(--line-dark)",
                  borderRadius: 4,
                  padding: "6px 12px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {quote ? (
          <figure style={{ margin: "48px 0 0", maxWidth: "78ch" }}>
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 22,
                lineHeight: 1.45,
                color: "rgba(244,241,234,0.92)",
              }}
            >
              “{quote}”
            </blockquote>
            {who ? (
              <figcaption className="kicker" style={{ marginTop: 14, color: "var(--accent)" }}>
                {who} — {org}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <Link href={ctaHref} className="btn btn--accent" style={{ marginTop: 44, color: "#241d12" }}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}

/* Closing CTA band — their phones (client-facing), shared across inners. */
export function CloseBand({
  line1 = "Every great company is built on",
  line2 = "a foundation of intelligent systems.",
  cta = "Schedule Strategy Session",
}: {
  line1?: string;
  line2?: string;
  cta?: string;
}) {
  return (
    <section style={{ ...pad({ paddingTop: 110, paddingBottom: 110 }), background: "var(--cream-2)", borderTop: "1px solid var(--line)" }}>
      <div style={{ ...maxW, display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "end" }}>
        <h2 style={{ ...H2, fontSize: 62, maxWidth: "16ch" }}>
          {line1}{" "}
          <span className="display-em" style={{ fontStyle: "italic" }}>
            {line2}
          </span>
        </h2>
        <div style={{ display: "grid", gap: 16 }}>
          <Link href="/contact" className="btn btn--ink" style={{ width: "fit-content" }}>
            {cta}
          </Link>
          <div className="kicker" style={{ display: "flex", gap: 10 }}>
            <a href="tel:3487753434" style={{ color: "inherit", textDecoration: "none" }}>
              348-7753434
            </a>
            <span style={{ opacity: 0.5 }}>·</span>
            <a href="tel:8886021919" style={{ color: "inherit", textDecoration: "none" }}>
              888-6021919
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
