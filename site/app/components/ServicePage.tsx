/* Service page factory layout — dedicated routes, unique copy + fold rotation per slug. */
import type { CSSProperties, ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./Chrome";
import { CaseBand, CloseBand } from "./Inner";

export type ServiceFold = 0 | 1 | 2;

export type ServicePageData = {
  eyebrow: string;
  title: ReactNode;
  dek: string;
  problem: { h: string; rows: { v: string; k: string }[]; statement: string };
  pillars: { n: string; t: string; d: string; tags?: string[] }[];
  caseStudy?: Parameters<typeof CaseBand>[0];
  quote?: { q: string; who: string; org: string };
  close?: { line1: string; line2: string; cta: string };
};

type FoldConfig = {
  imgStyle: CSSProperties;
  overlay: string;
  align: "flex-start" | "flex-end";
};

const FOLDS: FoldConfig[] = [
  // 0: photo plate, left-weighted (Velocity family)
  {
    imgStyle: { objectPosition: "30% center" },
    overlay: "linear-gradient(100deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.15) 80%)",
    align: "flex-start",
  },
  // 1: photo plate, right-weighted (Genesis family)
  {
    imgStyle: { objectPosition: "75% center" },
    overlay: "linear-gradient(260deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.15) 80%)",
    align: "flex-end",
  },
  // 2: photo plate, center-bottom-anchored (Insights family)
  {
    imgStyle: { objectPosition: "center 70%" },
    overlay: "linear-gradient(to top, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.5) 60%, rgba(11,10,8,0.22) 100%)",
    align: "flex-start",
  },
];

export function ServicePage({ data, fold }: { data: ServicePageData; fold: ServiceFold }) {
  const foldStyles = FOLDS[fold];

  return (
    <main>
      <SiteHeader />
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/photos/hero-0.jpg"
          alt="Earth at night from orbit"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...foldStyles.imgStyle }}
        />
        <div style={{ position: "relative", padding: "220px var(--pad, 96px) 96px", background: foldStyles.overlay }}>
          <div style={{ maxWidth: 1440, display: "flex", justifyContent: foldStyles.align }}>
            <div style={{ maxWidth: 820 }}>
              <div className="kicker kicker--accent">{data.eyebrow}</div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 78,
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  color: "#f4f1ea",
                  margin: "20px 0 0",
                  maxWidth: "14ch",
                }}
              >
                {data.title}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.82)", maxWidth: "58ch", margin: "26px 0 0" }}>
                {data.dek}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem band — their 'The Cost' rows as type, not cards */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">{data.problem.h}</div>
          <div style={{ marginTop: 44 }}>
            <hr className="rule" />
            {data.problem.rows.map((r, i) => (
              <div key={r.k} style={{ display: "grid", gridTemplateColumns: "minmax(180px, 0.5fr) minmax(0, 1.6fr)", gap: 32, padding: "30px 0", borderBottom: i < data.problem.rows.length - 1 ? "1px solid var(--line)" : "none", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1 }}>{r.v}</span>
                <span style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: "62ch" }}>{r.k}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1.3, margin: "56px 0 0", maxWidth: "48ch" }}>
            {data.problem.statement}
          </p>
        </div>
      </section>

      {/* Pillars — numbered index */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">How We Deliver</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "22ch" }}>
            Built on their operating system, not generic tactics
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {data.pillars.map((p, i) => (
              <div key={p.n + p.t} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.7fr) minmax(0, 1.5fr)", gap: 32, padding: "38px 0", borderBottom: i < data.pillars.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{p.n}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 31, lineHeight: 1.1, display: "block" }}>{p.t}</span>
                  {p.tags?.length ? (
                    <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                      {p.tags.map((t) => (
                        <span key={t} className="kicker" style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "5px 10px", fontSize: 11.5 }}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "56ch" }}>{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study or quote */}
      {data.caseStudy ? <CaseBand {...data.caseStudy} ctaLabel="View Case Studies" /> : null}
      {data.quote ? (
        <section className="band--dark" style={{ padding: "104px var(--pad, 96px)" }}>
          <div style={{ maxWidth: 1440 }}>
            <figure style={{ margin: 0, maxWidth: "62ch" }}>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1.35, color: "#f4f1ea" }}>
                “{data.quote.q}”
              </blockquote>
              <figcaption className="kicker" style={{ marginTop: 20, color: "var(--accent)" }}>
                {data.quote.who} — {data.quote.org}
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <CloseBand {...(data.close ?? { line1: "Every great company is built on", line2: "a foundation of intelligent systems.", cta: "Schedule Strategy Session" })} />
      <SiteFooter />
    </main>
  );
}
