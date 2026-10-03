/* /blog — journal index (their practical briefs + foundational reading). */
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { CloseBand } from "../components/Inner";

export const metadata = {
  title: "Marketing Blog | AI, Strategy & Growth Insights | TMG",
  description:
    "Succinct perspective for leaders making decisions about AI, data, media, attribution, and revenue growth.",
};

const BRIEFS = [
  { cat: "AI Strategy", title: "Treat AI as an Operating Model, Not a Tool Rollout", dek: "A practical way to move AI from scattered experiments into governed marketing workflows that improve speed, quality, and accountability.", meta: "2026 Brief · 9 min read" },
  { cat: "Measurement", title: "Attribution Needs a Reset Around Incrementality", dek: "Why channel reports are not enough, and how marketing teams can combine attribution, testing, and business context to defend spend with confidence.", meta: "2026 Brief · 9–10 min read" },
  { cat: "Customer Analytics", title: "Retention Data Belongs in Acquisition Decisions", dek: "Why campaign performance should be judged by the customers it creates, not only the conversions it records.", meta: "2026 Brief · 9–10 min read" },
  { cat: "Intelligence", title: "Executive Dashboards Should Force Decisions", dek: "A dashboard earns its place when it clarifies tradeoffs, priorities, and next actions for the people funding growth.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Optimization", title: "Real-Time Optimization Requires Better Inputs", dek: "Speed helps only when goals, conversion events, quality signals, and budget rules are clear and correct.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Data", title: "Your First-Party Data Needs a Practical Owner", dek: "Clean customer data is a management discipline before it is a technology project.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Media", title: "Media Plans Need Flexibility Before They Need More Budget", dek: "Why static allocation plans break down when costs, demand, inventory, and creative performance move faster than the spreadsheet behind them.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Experimentation", title: "Testing Programs Fail When They Chase Trivia", dek: "A practical standard for experiments that resolve real business questions instead of cataloging cosmetic preferences.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Demand Generation", title: "Pipeline Quality Beats Lead Volume", dek: "A better operating model for teams that need qualified opportunities, not larger lists of weak leads.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Lifecycle Operations", title: "Marketing Automation Should Remove Friction, Not Add Noise", dek: "How to use automation to improve lifecycle momentum without creating more clutter for buyers or sales teams.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Revenue Operations", title: "CRM Integration Is a Revenue Problem, Not an IT Project", dek: "Disconnected CRM fields, lifecycle stages, and source rules create missed follow-up and weak reporting.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Marketing Leadership", title: "When a Fractional CMO Makes Sense", dek: "How to decide whether the team needs senior marketing leadership before another full-time hire.", meta: "2026 Brief · 8–10 min read" },
  { cat: "Creative", title: "Creative Velocity Only Matters With Controls", dek: "How to scale creative variation without flooding campaigns with unstructured noise.", meta: "2026 Brief · 9–11 min read" },
  { cat: "Content", title: "AI Search Rewards Clear, Structured Expertise", dek: "How to make content easier for buyers, search engines, and AI answer systems to understand and verify.", meta: "2026 Brief · 9–11 min read" },
  { cat: "Brand", title: "Brand Architecture Still Matters in a Performance Culture", dek: "Clear brand structure helps buyers understand options and helps campaigns stay consistent as the business grows.", meta: "2026 Brief · 8–10 min read" },
];

const READING = [
  { cat: "Reference · Growth Strategy", title: "Build the Growth System Before Scaling Spend", dek: "A concise planning guide for teams that want more growth without sending more money into an unclear system.", meta: "8–10 min read" },
  { cat: "Reference · Strategy Evaluation", title: "Use Case Studies to Pressure-Test Strategy", dek: "How to read case studies for decision logic, operating change, and proof instead of surface-level outcomes.", meta: "8–10 min read" },
  { cat: "Reference · Marketing Operations", title: "Audit the Stack Before Adding More Software", dek: "Why most teams need cleaner data flow, ownership, and integration before they need another platform.", meta: "8–10 min read" },
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — unique statement plate with index count */}
      <section className="band--dark" style={{ padding: "220px var(--pad, 96px) 104px" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: 56, alignItems: "end" }}>
          <div>
            <div className="kicker kicker--accent">TMG Blog</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 88,
                lineHeight: 1.0,
                letterSpacing: "-0.015em",
                color: "#f4f1ea",
                margin: "20px 0 0",
                maxWidth: "13ch",
              }}
            >
              Clear thinking for{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>modern</span> growth
            </h1>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.75)", margin: 0 }}>
            Succinct perspective for leaders making decisions about AI, data,
            media, attribution, and revenue growth.
          </p>
        </div>
      </section>

      {/* Practical briefs — dated editorial index */}
      <section style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Practical Briefs</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "24ch" }}>
            Useful prompts for improving the systems that turn marketing activity into business results
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {BRIEFS.map((b, i) => (
              <div key={b.title} style={{ display: "grid", gridTemplateColumns: "minmax(150px, 0.35fr) minmax(0, 1.6fr) minmax(0, 1fr) auto", gap: 32, padding: "30px 0", borderBottom: i < BRIEFS.length - 1 ? "1px solid var(--line)" : "none", alignItems: "baseline" }}>
                <span className="kicker">{b.cat}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.15, display: "block" }}>{b.title}</span>
                  <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)", display: "block", marginTop: 7, maxWidth: "56ch" }}>{b.dek}</span>
                </span>
                <span className="idx">{b.meta}</span>
                <span aria-hidden style={{ fontSize: 22 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote — dark */}
      <section className="band--dark" style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <figure style={{ margin: 0, maxWidth: "60ch" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1.3, color: "#f4f1ea" }}>
              “The best marketing content is not promotional. It is genuinely
              useful perspective that helps marketers think more clearly and
              make better decisions.”
            </blockquote>
            <figcaption className="kicker" style={{ marginTop: 22, color: "var(--accent)" }}>
              TMG Team — Thela Media Group
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Foundational reading */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Foundational Reading</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "24ch" }}>
            Reference points for teams tightening strategy before investing in more activity
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {READING.map((r, i) => (
              <div key={r.title} style={{ display: "grid", gridTemplateColumns: "minmax(180px, 0.45fr) minmax(0, 1.6fr) auto auto", gap: 32, padding: "30px 0", borderBottom: i < READING.length - 1 ? "1px solid var(--line)" : "none", alignItems: "baseline" }}>
                <span className="kicker">{r.cat}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.15, display: "block" }}>{r.title}</span>
                  <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)", display: "block", marginTop: 7, maxWidth: "56ch" }}>{r.dek}</span>
                </span>
                <span className="idx">{r.meta}</span>
                <span aria-hidden style={{ fontSize: 22 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CloseBand
        line1="Need a sharper read on"
        line2="your growth system?"
        cta="Talk Through Priorities"
      />
      <SiteFooter />
    </main>
  );
}
