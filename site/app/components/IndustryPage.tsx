/* Industry page factory layout — dedicated routes, unique copy + fold rotation per slug. */
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./Chrome";
import { CaseBand, CloseBand } from "./Inner";

export type IndustryFold = 0 | 1 | 2;

export type IndustryPageData = {
  eyebrow: string;
  title: ReactNode;
  dek: string;
  landscape: { h: string; intro: string; rows: { v: string; k: string }[]; statement: string };
  solutions: { n: string; t: string; d: string; tags?: string[] }[];
  caseStudy?: Parameters<typeof CaseBand>[0];
  quote?: { q: string; who: string; org: string };
  close?: { line1: string; line2: string; cta: string };
};

export function IndustryPage({ data, fold }: { data: IndustryPageData; fold: IndustryFold }) {
  const foldStyles = [
    // 0: center-bottom anchored (case-studies family)
    {
      imgStyle: { objectPosition: "center 62%" } as React.CSSProperties,
      overlay: "linear-gradient(to top, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.48) 60%, rgba(11,10,8,0.2) 100%)",
      align: "flex-start" as const,
    },
    // 1: left-weighted diagonal
    {
      imgStyle: { objectPosition: "28% center" } as React.CSSProperties,
      overlay: "linear-gradient(100deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.52) 48%, rgba(11,10,8,0.14) 82%)",
      align: "flex-start" as const,
    },
    // 2: right-weighted
    {
      imgStyle: { objectPosition: "76% center" } as React.CSSProperties,
      overlay: "linear-gradient(260deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.52) 48%, rgba(11,10,8,0.14) 82%)",
      align: "flex-end" as const,
    },
  ][fold];

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
            <div style={{ maxWidth: 840 }}>
              <div className="kicker kicker--accent">{data.eyebrow}</div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 74,
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  color: "#f4f1ea",
                  margin: "20px 0 0",
                  maxWidth: "15ch",
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

      {/* Landscape */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">{data.landscape.h}</div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: 56, marginTop: 24, alignItems: "start" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 46, lineHeight: 1.1, margin: 0, maxWidth: "22ch" }}>
              {data.landscape.intro}
            </h2>
            <div>
              <hr className="rule" style={{ marginBottom: 8 }} />
              {data.landscape.rows.map((r, i) => (
                <div key={r.k} style={{ display: "grid", gridTemplateColumns: "minmax(110px, 0.45fr) minmax(0, 1.6fr)", gap: 24, padding: "20px 0", borderBottom: i < data.landscape.rows.length - 1 ? "1px solid var(--line)" : "none", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1 }}>{r.v}</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)" }}>{r.k}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1.3, margin: "56px 0 0", maxWidth: "48ch" }}>
            {data.landscape.statement}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Industry Solutions</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "22ch" }}>
            Built for how this market actually buys
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {data.solutions.map((s, i) => (
              <div key={s.n + s.t} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.7fr) minmax(0, 1.5fr)", gap: 32, padding: "38px 0", borderBottom: i < data.solutions.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{s.n}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 31, lineHeight: 1.1, display: "block" }}>{s.t}</span>
                  {s.tags?.length ? (
                    <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                      {s.tags.map((t) => (
                        <span key={t} className="kicker" style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "5px 10px", fontSize: 11.5 }}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "56ch" }}>{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <CloseBand {...(data.close ?? { line1: "Every great company is built on", line2: "a foundation of intelligent systems.", cta: "Schedule Consultation" })} />
      <SiteFooter />
    </main>
  );
}
