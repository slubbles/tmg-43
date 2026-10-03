/* /platforms/catalyst — TMG Catalyst, dedicated core route. */
import { SiteHeader, SiteFooter } from "../../components/Chrome";
import { CaseBand, CloseBand } from "../../components/Inner";

export const metadata = {
  title: "TMG Catalyst | Marketing Ops Automation | TMG",
  description:
    "TMG Catalyst supports TMG’s advertising systems after attention turns into action: lead nurturing, customer journey orchestration, content distribution, and attribution modeling.",
};

const CHAIN = "Capture → Qualify → Score → Nurture → Convert → Retain → Expand";

const CAPS = [
  { n: "01", t: "Lead Nurturing", k: "Follow", d: "TMG Catalyst helps organize lead nurturing around prospect behavior, engagement patterns, and buying signals so the team can deliver the right follow-up through the right channel.", tag: "Structured prospect communication" },
  { n: "02", t: "Multi-Touch Attribution", k: "Trace", d: "TMG Catalyst connects campaign sources, nurture touchpoints, and CRM outcomes so reporting can show which channels and follow-up paths are moving the account forward.", tag: "Source and touchpoint visibility" },
  { n: "03", t: "Content Distribution", k: "Send", d: "Approved assets move into the right places across email, lifecycle campaigns, and content workflows without manual scatter.", tag: "Approved assets in the right places" },
  { n: "04", t: "Journey Orchestration", k: "Route", d: "Prospects are routed into nurture, sales handoff, and retention paths that adapt to behavior instead of rigid batches.", tag: "Clear next steps by audience" },
];

const CONNECTS = [
  { name: "TMG Velocity", href: "/platforms/velocity-ai", copy: "TMG Velocity creates the paid media demand that TMG Catalyst routes into nurture, CRM workflows, and attribution reporting." },
  { name: "TMG Genesis", href: "/platforms/genesis", copy: "TMG Genesis organizes the briefs, messaging angles, and content notes TMG Catalyst uses across nurture sequences and lifecycle campaigns." },
  { name: "TMG Oracle", href: "/platforms/oracle", copy: "TMG Oracle provides audience and market signals that help TMG decide which segments, messages, and follow-up paths deserve attention." },
];

export default function CatalystPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — statement plate with the lifecycle chain as an oversized editorial line (unique) */}
      <section className="band--dark" style={{ padding: "220px var(--pad, 96px) 96px", borderBottom: "1px solid var(--line-dark)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Tool / 0.2</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 92, lineHeight: 1.0, letterSpacing: "-0.015em", color: "#f4f1ea", margin: "20px 0 0" }}>
            TMG{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>Catalyst</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.8)", maxWidth: "58ch", margin: "26px 0 0" }}>
            TMG Catalyst supports TMG’s advertising systems after attention
            turns into action: lead nurturing, customer journey orchestration,
            content distribution, and attribution modeling.
          </p>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "var(--accent)",
              marginTop: 44,
              textTransform: "uppercase",
            }}
          >
            {CHAIN}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 50, lineHeight: 1.08, margin: 0, maxWidth: "20ch" }}>
            The lifecycle layer. It keeps{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>follow-up, routing, and attribution</span>{" "}
            connected after qualified traffic lands.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
            When TMG Velocity sends qualified traffic into the funnel, TMG
            Catalyst keeps the post-click work connected: nurture paths, CRM
            workflows, attribution, and lifecycle automation.
          </p>
        </div>
      </section>

      {/* Automation capabilities — numbered */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Automation Capabilities</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            Four motions after the click
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
                  <span className="kicker" style={{ display: "inline-block", marginTop: 16, border: "1px solid var(--line)", borderRadius: 4, padding: "5px 10px", fontSize: 11.5 }}>{c.tag}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseBand
        client="Medical Trials Company"
        sector="Healthcare / Clinical Trials"
        challenge="A clinical trials company needed to acquire patients for their studies efficiently and at scale. Patient recruitment is one of the most difficult challenges in the clinical trials industry, with most sites struggling to meet enrollment targets."
        approach="TMG developed a comprehensive marketing campaign paired with a scheduling process specifically designed for patient acquisition. The system combined targeted digital outreach with streamlined conversion workflows to move prospects from awareness to enrolled participants."
        results="The campaign became the #1 producing site in the country for the first clinical trial, with continued success across later studies."
        metrics={[{ v: "#1", k: "National Ranking" }]}
        ctaLabel="Schedule Consultation"
      />

      {/* Integrations + connections — dark */}
      <section className="band--dark" style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Seamless Integration</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, color: "#f4f1ea", margin: "18px 0 0", maxWidth: "22ch" }}>
            A unified automation layer across your stack
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 40, marginTop: 52 }}>
            {[
              { k: "CRM Systems", v: ["Salesforce", "HubSpot", "Microsoft Dynamics"] },
              { k: "Marketing Platforms", v: ["Marketo", "Pardot", "Eloqua"] },
              { k: "Analytics Tools", v: ["Google Analytics", "Mixpanel", "Segment"] },
            ].map((g) => (
              <div key={g.k} style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 22 }}>
                <div className="kicker" style={{ color: "var(--accent)" }}>{g.k}</div>
                <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 8 }}>
                  {g.v.map((x) => (
                    <li key={x} style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#f4f1ea" }}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 88 }}>
            <div className="kicker kicker--accent">Where TMG Catalyst Connects</div>
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
        line1="Keep follow-up connected"
        line2="to the campaign."
        cta="Schedule Consultation"
      />
      <SiteFooter />
    </main>
  );
}
