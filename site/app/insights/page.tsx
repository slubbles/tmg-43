/* /insights — journal index (their executive research briefs, dated). */
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { CloseBand } from "../components/Inner";

export const metadata = {
  title: "Industry Insights | Marketing Intelligence & AI Trends | TMG",
  description:
    "Executive analysis on the shifts changing marketing strategy, measurement, customer data, and media investment.",
};

const BRIEFS = [
  { cat: "Measurement", title: "Privacy-Safe Measurement Is Becoming the Default", dek: "Signal loss is pushing teams toward blended measurement built on attribution, experiments, modeling, and finance-ready assumptions.", meta: "2026 Analysis · 9–10 min read" },
  { cat: "Performance Media", title: "Media Strategy Has to Stay Flexible Under Volatility", dek: "Budget plans should make room for fast learning, deliberate channel shifts, and ongoing creative testing as costs and demand change.", meta: "2026 Analysis · 8–10 min read" },
  { cat: "Revenue Alignment", title: "Revenue Teams Need One Definition of a Qualified Opportunity", dek: "Growth improves when account fit, intent, stage, and handoff rules are shared across marketing and sales.", meta: "2026 Analysis · 8–10 min read" },
  { cat: "Content", title: "AI Search Changes the Job of Content Strategy", dek: "Content now has to serve buyers, sales teams, search engines, and AI answer systems at the same time.", meta: "2026 Analysis · 9–11 min read" },
  { cat: "Creative", title: "Creative Automation Needs Brand Governance", dek: "Faster production creates value only when briefs, approval rules, asset standards, and testing plans are in place.", meta: "2026 Analysis · 9–11 min read" },
];

const REPORTS = [
  { title: "Healthcare and Life Sciences Growth Brief", dek: "A practical view of patient acquisition, referral growth, trust, data use, compliance review, and local market demand." },
  { title: "Financial Services Growth Brief", dek: "How growth teams can balance personalization, lifecycle marketing, advisor workflows, regulation, and buyer trust." },
  { title: "B2B SaaS Growth Brief", dek: "A planning brief for positioning, pipeline quality, product usage signals, expansion paths, and complex buying committees." },
  { title: "Retail and E-Commerce Growth Brief", dek: "How retail teams can balance margin-aware acquisition, retention, marketplace pressure, retail media, and customer value." },
  { title: "Real Estate Growth After Commission Transparency", dek: "A practical growth brief for real estate teams adapting positioning, owned demand, local content, and lead quality." },
  { title: "Non-Profit Fundraising Resilience Brief", dek: "A concise framework for attribution, donor stewardship, and revenue resilience when funding conditions change." },
];

const GUIDES = [
  { title: "AI Marketing Operating Model", dek: "A leadership checklist for selecting use cases, setting governance, assigning ownership, and moving AI-assisted work into production." },
  { title: "Measurement Reset Plan", dek: "A practical way to align attribution, experiments, media mix modeling, and executive reporting around the decisions that affect spend." },
  { title: "Paid Media Waste Review", dek: "A focused checklist for finding budget leaks across targeting, creative, landing pages, conversion events, and reporting assumptions." },
  { title: "Executive Dashboard Brief", dek: "A guide to replacing reporting clutter with the few views leadership needs to understand momentum, tradeoffs, and next actions." },
  { title: "Customer Data Readiness Audit", dek: "A structured review of identity rules, source integrity, lifecycle stages, consent, and customer value signals." },
  { title: "CRM and Lifecycle Hygiene Review", dek: "A practical framework for cleaning stage definitions, source fields, handoff rules, nurture logic, and sales visibility." },
];

export default function InsightsPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — corner-weighted photo (different crop from case-studies: bottom-anchored gradient) */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/photos/hero-0.jpg"
          alt="Earth at night from orbit"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 65%" }}
        />
        <div
          style={{
            position: "relative",
            padding: "220px var(--pad, 96px) 96px",
            background: "linear-gradient(to top, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.5) 60%, rgba(11,10,8,0.25) 100%)",
          }}
        >
          <div style={{ maxWidth: 1440 }}>
            <div className="kicker kicker--accent">Insights</div>
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
              Research for better{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>growth</span> decisions
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.8)", maxWidth: "56ch", margin: "28px 0 0" }}>
              Executive analysis on the shifts changing marketing strategy,
              measurement, customer data, and media investment.
            </p>
          </div>
        </div>
      </section>

      {/* The signal statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Marketing Leaders Need Cleaner Signals</div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, marginTop: 24, alignItems: "start" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 54, lineHeight: 1.06, margin: 0, maxWidth: "20ch" }}>
              The teams that win will connect strategy, data, creative, and revenue operations into one{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>decision system</span>.
            </h2>
            <div style={{ display: "grid", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
              {[
                { k: "AI", v: "Operating model", d: "Teams need governed workflows, not disconnected experiments or vendor-led pilots." },
                { k: "Data", v: "Readiness gap", d: "Better decisions depend on identity, source, lifecycle, and customer value data that teams can trust." },
                { k: "ROI", v: "Board pressure", d: "Marketing must explain what is working, what is not, and where the next dollar should go." },
              ].map((x) => (
                <div key={x.k} style={{ background: "var(--cream-2)", padding: "26px 32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 30 }}>{x.k}</span>
                    <span className="kicker">{x.v}</span>
                  </div>
                  <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--muted)", margin: "10px 0 0" }}>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis briefs — dated list */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Research and Analysis Briefs</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "22ch" }}>
            Concise briefs for leaders deciding where to focus next
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {BRIEFS.map((b, i) => (
              <div key={b.title} style={{ display: "grid", gridTemplateColumns: "minmax(140px, 0.35fr) minmax(0, 1.5fr) minmax(0, 1fr) auto", gap: 32, padding: "34px 0", borderBottom: i < BRIEFS.length - 1 ? "1px solid var(--line)" : "none", alignItems: "baseline" }}>
                <span className="kicker">{b.cat}</span>
                <span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.15, display: "block" }}>{b.title}</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--muted)", display: "block", marginTop: 8, maxWidth: "52ch" }}>{b.dek}</span>
                </span>
                <span className="idx">{b.meta}</span>
                <span aria-hidden style={{ fontSize: 22 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry reports + decision guides — two-column editorial index */}
      <section style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 80 }}>
          <div>
            <div className="kicker kicker--accent">Industry Trend Reports</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 40, lineHeight: 1.1, margin: "16px 0 0", maxWidth: "20ch" }}>
              Practical briefs for changing market conditions
            </h2>
            <div style={{ marginTop: 36 }}>
              <hr className="rule" />
              {REPORTS.map((r) => (
                <div key={r.title} style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2 }}>{r.title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)", margin: "8px 0 0" }}>{r.dek}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="kicker kicker--accent">Decision Guides</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 40, lineHeight: 1.1, margin: "16px 0 0", maxWidth: "20ch" }}>
              Frameworks for assessing priorities before committing budget
            </h2>
            <div style={{ marginTop: 36 }}>
              <hr className="rule" />
              {GUIDES.map((g) => (
                <div key={g.title} style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2 }}>{g.title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)", margin: "8px 0 0" }}>{g.dek}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CloseBand
        line1="Useful research should make"
        line2="the next decision easier."
        cta="Start the Conversation"
      />
      <SiteFooter />
    </main>
  );
}
