/* /growth-framework — their Intelligence-First methodology, four pillars + roadmap. */
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { CloseBand } from "../components/Inner";

export const metadata = {
  title: "Growth Framework | Proven Methodology for AI-Powered Marketing | TMG",
  description:
    "A systematic approach to building predictable, scalable, and compounding growth through clearer strategy, unified intelligence, automated execution, and continuous learning.",
};

const OLD = [
  "Strategy based on intuition and historical patterns",
  "Manual campaign management and optimization",
  "Quarterly planning cycles that miss market shifts",
  "Siloed data preventing unified customer view",
  "Reactive optimization after performance declines",
  "Broad targeting with limited personalization",
  "Attribution gaps leave spend disconnected from business outcomes",
];

const NEW = [
  "Predictive intelligence guides every decision",
  "Fully automated optimization running 24/7/365",
  "Real-time strategy adaptation to market dynamics",
  "Unified data ecosystem with complete customer visibility",
  "Proactive optimization before issues impact performance",
  "Individual-level personalization at enterprise scale",
  "Complete attribution clarity across all touchpoints",
];

const PILLARS = [
  {
    n: "01",
    title: "Unified Intelligence",
    copy: "Before optimization comes understanding. We unify all your data sources into a single source of truth, creating complete visibility into customer behavior, campaign performance, and market dynamics.",
    points: [
      "Integration with marketing platforms, CRMs, and data sources",
      "Real-time data synchronization with automated quality validation",
      "Customer identity resolution across devices and touchpoints",
      "Historical data analysis to establish baseline and identify patterns",
      "Custom data warehouse architecture optimized for marketing AI",
      "Automated anomaly detection to catch data quality issues",
    ],
  },
  {
    n: "02",
    title: "Predictive Models",
    copy: "Predictive models are trained on your specific data, learning your customers, market dynamics, and what drives results for your business.",
    points: [
      "Predictive lead scoring deployed and tested",
      "Attribution models configured and calibrated",
      "Budget allocation recommendations generated",
      "Forecasts refined through live campaign feedback",
    ],
  },
  {
    n: "03",
    title: "Automated Execution",
    copy: "Automated campaigns go live with real-time optimization. The system begins learning from live results, continuously improving performance.",
    points: [
      "Full campaign automation activated",
      "Real-time optimization running across channels",
      "24/7 monitoring and anomaly detection",
      "Additional channels and tactics activated as confidence grows",
    ],
  },
  {
    n: "04",
    title: "Continuous Learning",
    copy: "Every outcome feeds back into the models, making predictions more accurate and actions more effective with each cycle.",
    points: [
      "ROAS targets reviewed against actual performance",
      "New high-value customer segments discovered",
      "Budget scaled based on proven performance",
      "Compounding returns becoming evident",
    ],
  },
];

const ROADMAP = [
  {
    n: "Days 1–14",
    title: "Foundation & Integration",
    copy: "We begin by connecting all your data sources and establishing baseline metrics. This creates the foundation for everything that follows.",
    points: [
      "All marketing platforms and CRMs integrated",
      "Customer data unified and validated",
      "Historical performance analysis complete",
      "Baseline KPIs established for measurement",
      "Quick wins identified for immediate implementation",
    ],
  },
  {
    n: "Days 15–30",
    title: "Model Training & Strategy",
    copy: "Predictive models are trained on your specific data, learning your customers, market dynamics, and what drives results for your business.",
    points: [
      "Predictive models trained and validated",
      "Lead scoring system deployed and tested",
      "Attribution model configured and calibrated",
      "First automated campaigns ready for launch",
    ],
  },
  {
    n: "Days 31–60",
    title: "Activation & Optimization",
    copy: "Automated campaigns go live with real-time optimization. The AI begins learning from live results, continuously improving performance.",
    points: [
      "Full campaign automation activated",
      "Real-time optimization running across channels",
      "24/7 monitoring and anomaly detection live",
      "Team training on platform and insights tools",
    ],
  },
  {
    n: "Days 61–120",
    title: "Scale & Compound",
    copy: "As the AI learns your specific patterns, performance compounds. We expand to new channels, audiences, and strategies as confidence grows.",
    points: [
      "ROAS targets reviewed against actual performance",
      "New high-value customer segments discovered",
      "Budget scaled based on proven performance",
      "Compounding returns becoming evident",
    ],
  },
];

const OPS = [
  { n: "01", t: "Monitor", d: "Intelligence systems continuously monitor performance across all channels, tracking thousands of signals in real-time to identify opportunities and risks." },
  { n: "02", t: "Predict", d: "Predictive models forecast outcomes and identify the highest-probability actions to drive results, from budget allocation to creative selection." },
  { n: "03", t: "Execute", d: "Automated systems implement optimizations instantly, adjusting bids, budgets, targeting, and messaging without human delay." },
  { n: "04", t: "Learn", d: "Every outcome feeds back into the models, making predictions more accurate and actions more effective with each cycle." },
];

export default function GrowthFrameworkPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — statement plate, no photo (unique vs other inner folds) */}
      <section className="band--dark" style={{ padding: "220px var(--pad, 96px) 104px" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Proven Methodology</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 84,
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              color: "#f4f1ea",
              margin: "20px 0 0",
              maxWidth: "15ch",
            }}
          >
            The intelligence-first{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>
              growth
            </span>{" "}
            framework
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.75)", maxWidth: "58ch", margin: "28px 0 0" }}>
            A systematic approach to building predictable, scalable, and
            compounding growth through clearer strategy, unified intelligence,
            automated execution, and continuous learning.
          </p>
        </div>
      </section>

      {/* Growth is not random */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Why the Old Playbook Fails</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "18ch" }}>
            Growth is not random. It is intelligent systems applied{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>consistently</span>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", marginTop: 56 }}>
            <div style={{ background: "var(--cream-2)", padding: "44px 44px" }}>
              <div className="kicker" style={{ marginBottom: 22 }}>Traditional Marketing Approach</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 14 }}>
                {OLD.map((o) => (
                  <li key={o} style={{ fontSize: 16, lineHeight: 1.55, color: "var(--muted)", display: "flex", gap: 12 }}>
                    <span style={{ color: "#a8a29a" }}>✕</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--dark)", padding: "44px 44px", color: "#f4f1ea" }}>
              <div className="kicker" style={{ marginBottom: 22, color: "var(--accent)" }}>Intelligence-First Framework</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 14 }}>
                {NEW.map((n) => (
                  <li key={n} style={{ fontSize: 16, lineHeight: 1.55, color: "rgba(244,241,234,0.88)", display: "flex", gap: 12 }}>
                    <span style={{ color: "var(--accent)" }}>✓</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars — numbered index rows */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">The Four Pillars</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            Each pillar builds on the previous, creating a compounding growth system
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {PILLARS.map((p, i) => (
              <div key={p.n} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.8fr) minmax(0, 1.4fr)", gap: 32, padding: "40px 0", borderBottom: i < PILLARS.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{p.n}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1 }}>{p.title}</div>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", margin: "12px 0 0", maxWidth: "40ch" }}>{p.copy}</p>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--fg)", display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--accent)" }}>→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap — dark band */}
      <section className="band--dark" style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Implementation Roadmap</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, color: "#f4f1ea", margin: "18px 0 0", maxWidth: "20ch" }}>
            How the framework is deployed over your first 120 days
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" style={{ borderTopColor: "var(--line-dark)" }} />
            {ROADMAP.map((r, i) => (
              <div key={r.n} style={{ display: "grid", gridTemplateColumns: "minmax(110px, 0.45fr) minmax(220px, 0.8fr) minmax(0, 1.3fr)", gap: 32, padding: "40px 0", borderBottom: i < ROADMAP.length - 1 ? "1px solid var(--line-dark)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{r.n}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1, color: "#f4f1ea" }}>{r.title}</div>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(244,241,234,0.7)", margin: "12px 0 0", maxWidth: "40ch" }}>{r.copy}</p>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
                  {r.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 15.5, lineHeight: 1.5, color: "rgba(244,241,234,0.85)", display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Ongoing operations */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 40, marginTop: 64 }}>
            {OPS.map((o) => (
              <div key={o.n}>
                <div className="idx" style={{ color: "var(--accent)" }}>{o.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "#f4f1ea", marginTop: 10 }}>{o.t}</div>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(244,241,234,0.72)", margin: "12px 0 0" }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CloseBand />
      <SiteFooter />
    </main>
  );
}
