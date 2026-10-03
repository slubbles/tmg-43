/* /case-studies — core listing route. Their five published case studies, quoted. */
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/Chrome";
import { CloseBand } from "../components/Inner";

export const metadata = {
  title: "Case Studies | Real Marketing Results | TMG",
  description:
    "See how companies across industries have partnered with TMG to achieve measurable growth, lower costs, and lasting competitive advantage.",
};

const CASES = [
  {
    n: "01",
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge:
      "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon social media marketing altogether. They needed qualified investor leads to fund drilling and development projects.",
    approach:
      "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management at a fraction of the prior agency’s cost.",
    results:
      "Within 6 weeks of the initial campaign launch, TMG generated over 450 qualified leads and helped drive over $1MM in initial raise. The relationship has continued to compound: over 16 months, TMG has now helped bring in more than 110 new investing partners, equating to over $15MM in new raise, an 86% cost reduction, and a 33x ROAS.",
    metrics: [
      { v: "110+", k: "New Partners" },
      { v: "$15MM+", k: "New Raise" },
      { v: "86%", k: "Cost Reduction" },
      { v: "33x", k: "ROAS" },
    ],
    quote:
      "After incurring exorbitant fees totaling over $100,000 with a larger firm, we saw little return. TMG has guided us through each step with remarkable transparency. Most importantly, their system delivers outstanding results.",
    who: "Beau, President",
    org: "Energy Company",
  },
  {
    n: "02",
    client: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge:
      "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition. DPC is a growing but still unfamiliar model for most consumers, requiring both education and patient acquisition from scratch.",
    approach:
      "TMG developed the complete brand identity, go-to-market strategy, and market positioning from the ground up. The team built full-scale advertising infrastructure including targeted digital campaigns, local market penetration strategy, and conversion-optimized patient acquisition funnels, all designed to build awareness and drive membership enrollment simultaneously.",
    results: "",
    metrics: [
      { v: "2.2x", k: "National Growth Avg" },
      { v: "MOM", k: "Sustained Growth" },
      { v: "Year 1", k: "Results Timeline" },
    ],
    tags: ["Full Brand Build"],
  },
  {
    n: "03",
    client: "Medical Trials Company",
    sector: "Healthcare / Clinical Trials",
    challenge:
      "A clinical trials company needed to acquire patients for their studies efficiently and at scale. Patient recruitment is one of the most difficult challenges in the clinical trials industry, with most sites struggling to meet enrollment targets.",
    approach:
      "TMG developed a comprehensive marketing campaign paired with a scheduling process specifically designed for patient acquisition. The system combined targeted digital outreach with streamlined conversion workflows to move prospects from awareness to enrolled participants.",
    results:
      "The campaign was so successful that the company became the #1 producing site in the country for their first clinical trial. Many studies later, TMG’s efforts continue to produce stellar results in an ever-changing landscape.",
    metrics: [{ v: "#1", k: "National Ranking" }],
    tags: ["Multi-Study Success", "Ongoing Results", "Long-Term Partnership"],
  },
  {
    n: "04",
    client: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge:
      "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot but failed to deliver, the management team was skeptical that any agency could produce results.",
    approach:
      "TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why specific strategies were proposed, and what to expect. Rather than upselling unnecessary services, TMG advised what the team could handle internally to save costs and build core competencies, while focusing their own efforts where they could deliver the most impact.",
    results: "",
    metrics: [{ v: "5", k: "Prior Failed Agencies" }],
    tags: ["Product-Market Fit", "Cost Savings Guidance", "Trusted Partnership"],
  },
  {
    n: "05",
    client: "Non-Profit Health Foundation",
    sector: "Non-Profit / Women’s Health",
    challenge:
      "A digital women’s health platform needed to transform their online presence to better serve young women affected by breast cancer. Their existing platform lacked the sophistication and functionality needed to effectively reach and educate their audience, and the team had no way to independently manage or update the site.",
    approach:
      "TMG went beyond simple website development, translating the foundation’s unique design vision into reality while adding sophisticated functionality that streamlined operations. Comprehensive training ensured the team could independently maintain and update everything long-term.",
    results:
      "The impact has been transformative. We’ve seen increased fundraising success, enhanced our professional presence, and expanded our reach to support more young women in their breast cancer prevention journey.",
    tags: ["Increased Fundraising", "Expanded Reach", "Team Empowerment", "Industry Leadership"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — corner-weighted title over the hero raster (unique crop: top-left) */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/photos/hero-0.jpg"
          alt="Earth at night from orbit"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "relative",
            padding: "220px var(--pad, 96px) 96px",
            background: "linear-gradient(120deg, rgba(11,10,8,0.88) 0%, rgba(11,10,8,0.45) 55%, rgba(11,10,8,0.12) 100%)",
          }}
        >
          <div style={{ maxWidth: 1440 }}>
            <div className="kicker kicker--accent">Proven Results</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: 88,
                lineHeight: 1.0,
                letterSpacing: "-0.015em",
                color: "#f4f1ea",
                margin: "20px 0 0",
                maxWidth: "14ch",
              }}
            >
              Real growth. Real numbers.{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>
                Real impact.
              </span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,241,234,0.8)", maxWidth: "56ch", margin: "28px 0 0" }}>
              See how companies across industries have partnered with TMG to
              achieve measurable growth, lower costs, and lasting competitive
              advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Index */}
      <section style={{ padding: "96px var(--pad, 96px) 72px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">The Index</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "22ch" }}>
            Every company has a unique growth story. Here are some of ours.
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {CASES.map((c) => (
              <a
                key={c.n}
                href={`#${c.client.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px minmax(0, 1.2fr) minmax(0, 1fr) 28px",
                  gap: 32,
                  alignItems: "baseline",
                  padding: "30px 0",
                  borderBottom: "1px solid var(--line)",
                  textDecoration: "none",
                  color: "var(--fg)",
                }}
              >
                <span className="idx" style={{ color: "var(--accent)" }}>{c.n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.15 }}>{c.client}</span>
                <span className="kicker">{c.sector}</span>
                <span aria-hidden style={{ fontSize: 22 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case rooms — alternating cream/dark editorial bands, their words */}
      {CASES.map((c, i) => (
        <section
          key={c.n}
          id={c.client.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={i % 2 === 0 ? "band--cream-2" : ""}
          style={{ padding: "96px var(--pad, 96px)", borderTop: "1px solid var(--line)" }}
        >
          <div style={{ maxWidth: 1440 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
                <span className="idx" style={{ color: "var(--accent)" }}>{c.n}</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05, margin: 0 }}>
                  {c.client}
                </h2>
              </div>
              <span className="kicker">{c.sector}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 40, marginTop: 44 }}>
              {[
                { h: "The Challenge", p: c.challenge },
                { h: "The Solution", p: c.approach },
                { h: "The Result", p: c.results || c.tags?.join(" · ") || "" },
              ].map((b) => (
                <div key={b.h}>
                  <div className="kicker kicker--accent" style={{ marginBottom: 12 }}>{b.h}</div>
                  <p style={{ fontSize: 16, lineHeight: 1.62, margin: 0, color: "var(--muted)" }}>{b.p}</p>
                </div>
              ))}
            </div>
            {c.metrics?.length ? (
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginTop: 44, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
                {c.metrics.map((m) => (
                  <div key={m.k}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 46, lineHeight: 1, color: "var(--fg)" }}>{m.v}</div>
                    <div className="kicker" style={{ marginTop: 8 }}>{m.k}</div>
                  </div>
                ))}
              </div>
            ) : null}
            {c.quote ? (
              <figure style={{ margin: "44px 0 0", maxWidth: "78ch" }}>
                <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.45 }}>
                  “{c.quote}”
                </blockquote>
                <figcaption className="kicker" style={{ marginTop: 14 }}>
                  {c.who} — {c.org}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </section>
      ))}

      <CloseBand
        line1="Your success story starts with"
        line2="a conversation."
        cta="Schedule Strategy Session"
      />
      <SiteFooter />
    </main>
  );
}
