/* /platforms/velocity-ai — TMG Velocity, dedicated core route. */
import { SiteHeader, SiteFooter } from "../../components/Chrome";
import { CaseBand, CloseBand } from "../../components/Inner";

export const metadata = {
  title: "TMG Velocity | Paid Media Deployment | TMG",
  description:
    "TMG Velocity supports TMG's paid media work by helping deploy approved campaigns, move budget, adjust bids, rotate creative, and return performance feedback to the advertising team.",
};

const STEPS = [
  {
    n: "01",
    title: "Media Deployment",
    copy: "TMG Velocity receives approved campaign plans, audience notes, creative variants, and channel direction from the team, then supports deployment across paid media accounts.",
    tags: ["Campaign launch", "Channel setup", "Variant mapping"],
  },
  {
    n: "02",
    title: "Budget Movement",
    copy: "The system helps identify where budget should be protected, reduced, or moved based on campaign performance, audience response, and direction from the advertising team.",
    tags: ["Budget pacing", "Spend controls", "Performance review"],
  },
  {
    n: "03",
    title: "Creative Rotation",
    copy: "TMG Velocity tracks which approved variants are gaining traction, supports rotation decisions, and sends useful performance feedback back to TMG Genesis for the next testing plan.",
    tags: ["Approved variants", "Testing feedback", "TMG Genesis handoff"],
  },
];

const RT = [
  { n: "Live", t: "Performance Monitoring", d: "Campaign data, channel pacing, audience response, and cost signals are reviewed in one operating layer." },
  { n: "As Needed", t: "Bid Adjustments", d: "Bid and campaign settings can be adjusted when performance, competition, or inventory changes." },
  { n: "Daily", t: "Budget Review", d: "Spend can be protected, reduced, or moved based on account priorities and observed performance." },
  { n: "Weekly", t: "Creative Feedback", d: "Variant results return to TMG Genesis so the next round of briefs and tests can be structured clearly." },
];

const CONNECTS = [
  { name: "TMG Genesis", href: "/platforms/genesis", copy: "TMG Velocity uses the briefs, variants, QA notes, and deployment direction TMG Genesis helps organize before campaigns go live." },
  { name: "TMG Oracle", href: "/platforms/oracle", copy: "TMG Oracle supplies customer, competitive, and market signals that help the team decide where paid media should be adjusted." },
  { name: "TMG Catalyst", href: "/platforms/catalyst", copy: "When paid media creates demand, TMG Catalyst handles nurture, follow-up logic, attribution, and lifecycle automation after the click." },
];

export default function VelocityPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — photo plate (unique: left-weighted gradient, hero raster reuse per ASSET_LOCK) */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/photos/hero-0.jpg"
          alt="Earth at night from orbit"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "22% center" }}
        />
        <div
          style={{
            position: "relative",
            padding: "220px var(--pad, 96px) 96px",
            background: "linear-gradient(100deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.15) 80%)",
          }}
        >
          <div style={{ maxWidth: 1440 }}>
            <div className="kicker kicker--accent">Tool / 0.1</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 92,
                lineHeight: 1.0,
                letterSpacing: "-0.015em",
                color: "#f4f1ea",
                margin: "20px 0 0",
              }}
            >
              TMG{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>Velocity</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.82)", maxWidth: "60ch", margin: "26px 0 0" }}>
              TMG Velocity supports TMG's paid media work by helping deploy
              approved campaigns, move budget, adjust bids, rotate creative, and
              return performance feedback to the advertising team.
            </p>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 40 }}>
              {[
                ["Deploy", "Paid media"],
                ["Shift", "Budget"],
                ["Tune", "Bids"],
                ["Report", "Results"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="kicker" style={{ color: "var(--accent)" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#f4f1ea", marginTop: 6 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 50, lineHeight: 1.08, margin: 0, maxWidth: "20ch" }}>
            Velocity does not replace media strategy. It supports{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>deployment</span>{" "}
            after the campaign plan has been approved.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
            TMG Velocity works after the campaign plan has been built, reviewed,
            and approved by TMG — keeping paid media execution structured,
            monitored, and connected back to strategy.
          </p>
        </div>
      </section>

      {/* How it works — numbered index */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">How Velocity Works</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            Three motions, tied to the approved plan
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.7fr) minmax(0, 1.5fr)", gap: 32, padding: "40px 0", borderBottom: i < STEPS.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{s.n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1 }}>{s.title}</span>
                <span>
                  <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", display: "block", maxWidth: "56ch" }}>{s.copy}</span>
                  <span style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                    {s.tags.map((t) => (
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

      {/* Case study */}
      <CaseBand
        client="Energy & Investment Company"
        sector="Energy / Oil & Gas"
        challenge="After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was nearly ready to abandon social media marketing. They needed qualified investor leads to fund drilling and development projects."
        approach="TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management at a fraction of the prior agency's cost."
        results="Within 6 weeks of the initial campaign launch, TMG generated over 450 qualified leads and helped drive over $1MM in initial raise. The relationship continued to compound: over 16 months, TMG helped bring in more than 110 new investing partners, over $15MM in new raise, an 86% cost reduction, and a 33x ROAS."
        metrics={[
          { v: "110+", k: "New Partners" },
          { v: "$15MM+", k: "New Raise" },
          { v: "86%", k: "Cost Reduction" },
          { v: "33x", k: "ROAS" },
        ]}
        ctaLabel="Schedule Consultation"
      />

      {/* Real-time optimization — dark */}
      <section className="band--dark" style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Real-Time Optimization</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, color: "#f4f1ea", margin: "18px 0 0", maxWidth: "22ch" }}>
            Faster, cleaner adjustments across paid media channels
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 40, marginTop: 56 }}>
            {RT.map((r) => (
              <div key={r.t}>
                <div className="idx" style={{ color: "var(--accent)" }}>{r.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 27, color: "#f4f1ea", marginTop: 10 }}>{r.t}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,0.72)", margin: "10px 0 0" }}>{r.d}</p>
              </div>
            ))}
          </div>
          {/* Where Velocity connects */}
          <div style={{ marginTop: 88 }}>
            <div className="kicker kicker--accent">Where Velocity Connects</div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(244,241,234,0.75)", margin: "18px 0 0", maxWidth: "60ch" }}>
              TMG Velocity is the paid media deployment layer. It works best
              when the campaign plan, market context, and post-click follow-up
              are connected.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 40, marginTop: 40 }}>
              {CONNECTS.map((c) => (
                <a key={c.name} href={c.href} style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 22, textDecoration: "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 27, color: "#f4f1ea" }}>{c.name}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,0.7)", margin: "10px 0 0" }}>{c.copy}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CloseBand
        line1="Deploy paid media"
        line2="with better structure."
        cta="Schedule Consultation"
      />
      <SiteFooter />
    </main>
  );
}
