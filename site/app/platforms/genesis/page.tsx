/* /platforms/genesis — TMG Genesis, dedicated core route. */
import { SiteHeader, SiteFooter } from "../../components/Chrome";
import { CaseBand, CloseBand } from "../../components/Inner";

export const metadata = {
  title: "TMG Genesis | Creative & Campaign Support | TMG",
  description:
    "TMG Genesis supports TMG's creative and campaign work by turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.",
};

const CAPS = [
  { n: "01", t: "Structured Briefs", k: "Planning Layer", d: "TMG Genesis turns strategy, offer context, audience notes, and channel constraints into clear briefs our team can use to build faster without losing the thread." },
  { n: "02", t: "Campaign Variants", k: "Creative Support", d: "The system helps generate structured ad angles, audience-specific variants, landing-page notes, and testing plans for human review and deployment." },
  { n: "03", t: "Brand Guardrails", k: "Quality Control", d: "TMG Genesis keeps messaging aligned to approved positioning, claims, voice, and compliance requirements so campaign work stays consistent across channels." },
  { n: "04", t: "Reporting Workflow", k: "Decision Support", d: "TMG Genesis helps turn performance data into readable summaries, follow-up questions, and next-step recommendations for the team managing the account." },
];

const HOW = [
  { n: "01", t: "Strategy Input", d: "We load the relevant positioning, offers, audience context, channel plan, compliance notes, and campaign objectives so the system starts from the same strategy as the team." },
  { n: "02", t: "Structured Output", d: "TMG Genesis turns that context into practical working documents: briefs, ad-angle lists, variant maps, QA notes, reporting prompts, and optimization checklists." },
  { n: "03", t: "Human Review", d: "TMG reviews, edits, and approves the work. TMG Genesis keeps the process organized, then approved campaign plans move into TMG Velocity for deployment while strategy, judgment, and accountability stay with the advertising team." },
];

const CONNECTS = [
  { name: "TMG Velocity", href: "/platforms/velocity-ai", copy: "Approved campaign plans and variants move into TMG Velocity for paid media deployment, budget movement, and performance optimization." },
  { name: "TMG Catalyst", href: "/platforms/catalyst", copy: "Lead nurture sequences, follow-up logic, and attribution notes move into TMG Catalyst once the campaign is live." },
  { name: "TMG Oracle", href: "/platforms/oracle", copy: "Market signals, customer behavior, and competitive context from TMG Oracle help shape the briefs TMG Genesis organizes." },
];

export default function GenesisPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — photo plate (unique crop: right-weighted gradient) */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/photos/hero-0.jpg"
          alt="Earth at night from orbit"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "78% center" }}
        />
        <div
          style={{
            position: "relative",
            padding: "220px var(--pad, 96px) 96px",
            background: "linear-gradient(260deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.55) 45%, rgba(11,10,8,0.15) 80%)",
          }}
        >
          <div style={{ maxWidth: 1440, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kicker kicker--accent">Tool / 0.3</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 92, lineHeight: 1.0, letterSpacing: "-0.015em", color: "#f4f1ea", margin: "20px 0 0" }}>
                TMG{" "}
                <span className="display-em" style={{ fontStyle: "italic" }}>Genesis</span>
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.82)", maxWidth: "52ch", margin: "26px 0 0" }}>
                TMG Genesis supports TMG's creative and campaign work by turning
                strategy into structured briefs, tests, variants, reporting, and
                repeatable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 50, lineHeight: 1.08, margin: 0, maxWidth: "20ch" }}>
            Not a replacement for advertisers. The{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>execution layer</span>{" "}
            behind our team.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
            TMG Genesis keeps briefs, variants, tests, reports, and follow-up
            work organized — so strategy, judgment, and accountability stay with
            the advertising team.
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Core Capabilities</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            Structure before speed
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
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "56ch" }}>{c.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseBand
        client="Non-Profit Health Foundation"
        sector="Non-Profit / Women's Health"
        challenge="A digital women's health platform needed to transform its online presence to better serve young women affected by breast cancer. The existing platform lacked the sophistication and functionality needed to effectively reach and educate the audience."
        approach="TMG translated the foundation's unique design vision into reality while adding sophisticated functionality that streamlined operations. Comprehensive training ensured the team could independently maintain and update everything long-term."
        results="Increased fundraising success, a stronger professional presence, and expanded reach to support more young women in their breast cancer prevention journey."
        tags={["Increased Fundraising", "Expanded Reach", "Team Empowerment", "Industry Leadership"]}
        ctaLabel="Schedule Consultation"
      />

      {/* How it works — cream2 */}
      <section className="band--cream-2" style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">How TMG Genesis Works</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            From strategy input to approved deployment
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {HOW.map((h, i) => (
              <div key={h.n} style={{ display: "grid", gridTemplateColumns: "72px minmax(220px, 0.6fr) minmax(0, 1.6fr)", gap: 32, padding: "40px 0", borderBottom: i < HOW.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{h.n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1 }}>{h.t}</span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "58ch" }}>{h.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connections — dark */}
      <section className="band--dark" style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Where TMG Genesis Connects</div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(244,241,234,0.75)", margin: "18px 0 0", maxWidth: "60ch" }}>
            TMG Genesis sits between strategy and execution. It organizes the
            work before campaigns are deployed, nurtured, measured, or adjusted.
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
        line1="Put better structure behind"
        line2="your campaigns."
        cta="Schedule Consultation"
      />
      <SiteFooter />
    </main>
  );
}
