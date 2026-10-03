/* /platforms/oracle — TMG Oracle, dedicated core route. */
import { SiteHeader, SiteFooter } from "../../components/Chrome";
import { CaseBand, CloseBand } from "../../components/Inner";

export const metadata = {
  title: "TMG Oracle | Market & Performance Intelligence | TMG",
  description:
    "TMG Oracle supports TMG's media decisions with market and performance intelligence for reading customer behavior, competitive signals, and campaign data before the next campaign move.",
};

const READ = [
  { k: "Signals", v: "Read", d: "What customers are doing" },
  { k: "Context", v: "Compare", d: "What competitors are changing" },
  { k: "Implications", v: "Decide", d: "What the campaign should consider next" },
];

const CAPS = [
  { n: "01", t: "Customer Signals", k: "Behavior Pattern Review", tags: ["Search trends", "Social sentiment", "Purchase patterns", "Economic indicators"], d: "Reads search demand, site behavior, CRM notes, and campaign response so the team can understand what customers are showing interest in now." },
  { n: "02", t: "Competitive Context", k: "Competitive Intelligence", tags: ["Offer changes", "Campaign launches", "Messaging shifts", "Product updates"], d: "Monitors visible competitive activity across channels so media, creative, and offer decisions are made with better context." },
  { n: "03", t: "Campaign Data", k: "Market Shift Analysis", tags: ["Consumer values", "Technology adoption", "Behavior changes", "Industry patterns"], d: "Separates useful signal from short-term noise so the team can decide what should change in targeting, messaging, or budget direction." },
];

const EVAL = ["Market Size & Growth", "Competitive Landscape", "Entry Timing", "Strategic Alignment", "Resource Requirements"];

const CONNECTS = [
  { name: "TMG Genesis", href: "/platforms/genesis", copy: "TMG Oracle turns market and customer signals into context TMG Genesis can use when structuring briefs, tests, and messaging notes." },
  { name: "TMG Velocity", href: "/platforms/velocity-ai", copy: "TMG Oracle helps inform where TMG Velocity should watch budget, bidding, and audience performance more closely." },
  { name: "TMG Catalyst", href: "/platforms/catalyst", copy: "TMG Oracle supplies audience and behavior context that helps TMG Catalyst shape nurture paths, segments, and attribution questions." },
];

export default function OraclePage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — statement plate with three-column read/compare/decide index (unique) */}
      <section className="band--dark" style={{ padding: "220px var(--pad, 96px) 104px" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Tool / 0.4</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 92, lineHeight: 1.0, letterSpacing: "-0.015em", color: "#f4f1ea", margin: "20px 0 0" }}>
            TMG{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>Oracle</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.8)", maxWidth: "58ch", margin: "26px 0 0" }}>
            TMG Oracle supports TMG's media decisions with market and
            performance intelligence for reading customer behavior, competitive
            signals, and campaign data before the next campaign move.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 40, marginTop: 56 }}>
            {READ.map((r) => (
              <div key={r.k} style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 20 }}>
                <div className="kicker" style={{ color: "var(--accent)" }}>{r.k}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "#f4f1ea", marginTop: 8 }}>{r.v}</div>
                <p style={{ fontSize: 15, color: "rgba(244,241,234,0.65)", margin: "8px 0 0" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 50, lineHeight: 1.08, margin: 0, maxWidth: "20ch" }}>
            Not a promise that the future is knowable. The{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>intelligence layer</span>{" "}
            before the next move.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
            TMG Oracle helps TMG read the market before briefs are written,
            media is adjusted, or nurture paths are changed — audience behavior,
            competitive context, campaign performance, and the questions worth
            testing through TMG Genesis and TMG Velocity.
          </p>
        </div>
      </section>

      {/* Intelligence capabilities */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Intelligence Capabilities</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            From signals to campaign direction
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {CAPS.map((c, i) => (
              <div key={c.n} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.7fr) minmax(0, 1.5fr)", gap: 32, padding: "40px 0", borderBottom: i < CAPS.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{c.n}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1, display: "block" }}>{c.t}</span>
                  <span className="kicker" style={{ display: "block", marginTop: 10 }}>{c.k}</span>
                </span>
                <span>
                  <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", display: "block", maxWidth: "56ch" }}>{c.d}</span>
                  <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                    {c.tags.map((t) => (
                      <span key={t} className="kicker" style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "5px 10px", fontSize: 11.5 }}>
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseBand
        client="B2C Fintech Startup"
        sector="Financial Technology"
        challenge="A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot but failed to deliver, the management team was skeptical that any agency could produce results."
        approach="TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why specific strategies were proposed, and what to expect. Rather than upselling unnecessary services, TMG advised what the team could handle internally to save costs and focused their own efforts where they could deliver the most impact."
        results="TMG's approach to business can be expressed in 2 words: trusted partnership. The team was absolutely delighted with the business results TMG helped them achieve."
        quote="We engaged 5 different digital marketing agencies who promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge and subject matter expertise. We were absolutely delighted with the business results."
        who="Carl, CMO"
        org="Fintech Startup"
        metrics={[{ v: "5", k: "Prior Failed Agencies" }, { v: "→", k: "Product-Market Fit · Cost Savings Guidance · Trusted Partnership" }]}
        ctaLabel="Schedule Consultation"
      />

      {/* Market opportunity scoring */}
      <section style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Market Opportunity Scoring</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "22ch" }}>
            A clearer set of inputs — not an automatic decision
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: "20px 0 0", maxWidth: "62ch" }}>
            TMG Oracle helps evaluate market opportunities based on size,
            competitive intensity, timing, and strategic fit. The output is a
            clearer set of inputs for TMG's media, creative, and lifecycle
            teams.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 }}>
            {EVAL.map((e) => (
              <span key={e} className="kicker" style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "10px 16px", fontSize: 12.5 }}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Connections — dark */}
      <section className="band--dark" style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Where TMG Oracle Connects</div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(244,241,234,0.75)", margin: "18px 0 0", maxWidth: "60ch" }}>
            TMG Oracle is the intelligence layer. It turns market context into
            better questions for creative, paid media, and lifecycle work.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 40, marginTop: 44 }}>
            {CONNECTS.map((c) => (
              <a key={c.name} href={c.href} style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 22, textDecoration: "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 27, color: "#f4f1ea" }}>{c.name}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,0.7)", margin: "10px 0 0" }}>{c.copy}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CloseBand
        line1="Make the next campaign move"
        line2="with better inputs."
        cta="Schedule Consultation"
      />
      <SiteFooter />
    </main>
  );
}
