/* Capability page factory layout (the 8 technical /platforms/* slugs).
   Different rhythm from services: capability index rows + statement + case/quote. */
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./Chrome";
import { CaseBand, CloseBand } from "./Inner";

export type CapabilityFold = 0 | 1 | 2;

export type CapabilityPageData = {
  eyebrow: string;
  title: ReactNode;
  dek: string;
  statement: { intro: ReactNode; lead: string; rest: string };
  caps: { n: string; t: string; d: string; tags?: string[] }[];
  caseStudy?: Parameters<typeof CaseBand>[0];
  quote?: { q: string; who: string; org: string };
  close?: { line1: string; line2: string; cta: string };
};

export function CapabilityPage({ data, fold }: { data: CapabilityPageData; fold: CapabilityFold }) {
  const foldStyles = [
    {
      imgStyle: { objectPosition: "55% center" } as React.CSSProperties,
      overlay: "linear-gradient(to top, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.5) 62%, rgba(11,10,8,0.22) 100%)",
      align: "flex-start" as const,
    },
    {
      imgStyle: { objectPosition: "24% center" } as React.CSSProperties,
      overlay: "linear-gradient(100deg, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.14) 82%)",
      align: "flex-start" as const,
    },
    {
      imgStyle: { objectPosition: "80% center" } as React.CSSProperties,
      overlay: "linear-gradient(260deg, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.14) 82%)",
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
            <div style={{ maxWidth: 800 }}>
              <div className="kicker kicker--accent">{data.eyebrow}</div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 80,
                  lineHeight: 1.0,
                  letterSpacing: "-0.015em",
                  color: "#f4f1ea",
                  margin: "20px 0 0",
                  maxWidth: "13ch",
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

      {/* Statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.1, margin: 0, maxWidth: "22ch" }}>
            {data.statement.intro}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
            {data.statement.lead} <span style={{ color: "var(--fg)" }}>{data.statement.rest}</span>
          </p>
        </div>
      </section>

      {/* Capability index */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Capabilities</div>
          <div style={{ marginTop: 44 }}>
            <hr className="rule" />
            {data.caps.map((c, i) => (
              <div key={c.n + c.t} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.7fr) minmax(0, 1.5fr)", gap: 32, padding: "38px 0", borderBottom: i < data.caps.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{c.n}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 31, lineHeight: 1.1, display: "block" }}>{c.t}</span>
                  {c.tags?.length ? (
                    <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                      {c.tags.map((t) => (
                        <span key={t} className="kicker" style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "5px 10px", fontSize: 11.5 }}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "56ch" }}>{c.d}</span>
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
