import Link from "next/link";
import Hero from "./components/Hero";
import { SiteHeader, SiteFooter } from "./components/Chrome";

/* Shared token shortcuts (inline sizes per CRAFT.md — do not trust Tailwind text-* classes) */
const H2 = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  fontSize: 52,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  margin: 0,
} as const;

function Rule() {
  return <hr className="rule" style={{ margin: 0 }} />;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      {/* ───────────────────────── 1. Hero — plate + locked photo (80vh) ───────────────────────── */}
      <Hero />

      {/* ───────────────────────── 2. The New Standard — editorial statement band ───────────────────────── */}
      <section
        id="standard"
        style={{
          background: "var(--bg)",
          padding: "104px var(--pad, 96px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">The New Standard</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
              gap: 56,
              marginTop: 28,
              alignItems: "start",
            }}
          >
            <h2 style={{ ...H2, fontSize: 56, maxWidth: "18ch" }}>
              Great advertising is built on judgment, data, and{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>
                discipline
              </span>
              .
            </h2>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, margin: 0, maxWidth: "56ch", color: "var(--fg)" }}>
                In an era of noise, precision is the only currency. TMG combines
                strategy, creative, media buying, analytics, automation, and
                intelligence backbones to help brands spend smarter and grow with
                confidence.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.65, margin: "22px 0 0", color: "var(--muted)", maxWidth: "56ch" }}>
                Our platforms power AI-driven marketing intelligence that
                transforms brands across healthcare, finance, technology, real
                estate, and energy.
              </p>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 34, fontSize: 13.5, fontWeight: 600, letterSpacing: "0.08em", color: "var(--fg)" }}>
                <span>STRATEGY</span>
                <span style={{ color: "var(--muted)" }}>CREATIVE</span>
                <span style={{ color: "var(--muted)" }}>MEDIA BUYING</span>
                <span style={{ color: "var(--muted)" }}>ANALYTICS</span>
                <span style={{ color: "var(--muted)" }}>AUTOMATION</span>
                <span style={{ color: "var(--muted)" }}>INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 3. Our Platforms — dark work-index (basement grammar) ───────────────────────── */}
      <section id="platforms" className="band--dark" style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
            <h2 style={{ ...H2, color: "#f4f1ea" }}>Our Platforms</h2>
            <span className="kicker" style={{ color: "rgba(244,241,234,0.55)" }}>
              01 / 02 / 03 / 04
            </span>
          </div>
          <hr className="rule" style={{ marginTop: 36, borderTopColor: "var(--line-dark)" }} />
          {[
            {
              n: "01",
              href: "/platforms/velocity-ai",
              name: "Velocity",
              role: "Paid media deployment",
              copy:
                "Paid media deployment and optimization support for approved campaign plans: budget movement, bid adjustments, creative rotation, and performance feedback.",
              tags: ["Media Deployment", "Budget Movement", "Performance Feedback"],
            },
            {
              n: "02",
              href: "/platforms/catalyst",
              name: "Catalyst",
              role: "Marketing ops automation",
              copy:
                "End-to-end marketing operations automation, from lead nurturing and customer journey orchestration to content distribution and attribution modeling.",
              tags: ["Ops Automation", "Journey Orchestration", "Attribution"],
            },
            {
              n: "03",
              href: "/platforms/genesis",
              name: "Genesis",
              role: "Creative / campaign support",
              copy:
                "Creative and campaign support layer for turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.",
              tags: ["Creative Ops", "Testing", "Execution"],
            },
            {
              n: "04",
              href: "/platforms/oracle",
              name: "Oracle",
              role: "Market & performance intelligence",
              copy:
                "Market and performance intelligence for reading customer behavior, competitive signals, and campaign data before making the next media decision.",
              tags: ["Market Signals", "Forecasting", "Decision Support"],
            },
          ].map((p, i) => (
            <Link
              key={p.n}
              href={p.href}
              style={{
                display: "grid",
                gridTemplateColumns: "72px minmax(220px, 0.9fr) minmax(0, 1.4fr) auto",
                gap: 32,
                alignItems: "baseline",
                padding: "44px 0",
                borderBottom: i < 3 ? "1px solid var(--line-dark)" : "none",
                textDecoration: "none",
                color: "#f4f1ea",
              }}
            >
              <span className="idx" style={{ color: "var(--accent)" }}>
                {p.n}
              </span>
              <span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 44,
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="kicker"
                  style={{ display: "block", marginTop: 10, color: "rgba(244,241,234,0.55)" }}
                >
                  {p.role}
                </span>
              </span>
              <span style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(244,241,234,0.78)", maxWidth: "52ch" }}>
                {p.copy}
              </span>
              <span style={{ display: "grid", gap: 6, justifyItems: "start" }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(244,241,234,0.55)",
                      border: "1px solid var(--line-dark)",
                      borderRadius: 4,
                      padding: "6px 12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────────────── 4. Results That Redefine Markets — cream case band ───────────────────────── */}
      <section id="results" style={{ background: "var(--bg)", padding: "104px var(--pad, 96px) 96px" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Results That Redefine Markets</div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 56, marginTop: 28, alignItems: "start" }}>
            <h2 style={H2}>
              Real results from real clients — across{" "}
              <span className="display-em" style={{ fontStyle: "italic" }}>
                healthcare, finance, real estate, and energy
              </span>
              .
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: "var(--muted)" }}>
              Our advertising strategies, paired with our intelligence platform,
              help clients grow across healthcare, finance, technology, real
              estate, and energy. These are real results from real clients.
            </p>
          </div>
        </div>
        {/* Named client case index — their names only, no invented metrics */}
        <div style={{ maxWidth: 1440, marginTop: 64 }}>
          <hr className="rule" />
          {[
            {
              href: "/case-studies",
              client: "Energy & Investment Company",
              sector: "Energy / Oil & Gas",
              note: "110+ new investing partners and $15MM+ in new raise over 16 months",
            },
            {
              href: "/case-studies",
              client: "Medical Trials Company",
              sector: "Healthcare / Clinical Trials",
              note: "Became the #1 producing site in the country for their first clinical trial",
            },
            {
              href: "/case-studies",
              client: "Direct Primary Care Clinic",
              sector: "Healthcare / Direct Primary Care",
              note: "Full brand build from zero recognition in the Colorado Springs market",
            },
            {
              href: "/case-studies",
              client: "B2C Fintech Startup",
              sector: "Financial Technology",
              note: "Trusted-partnership guidance after five agencies failed to deliver",
            },
            {
              href: "/case-studies",
              client: "The Previvor Foundation",
              sector: "Non-Profit / Women’s Health",
              note: "Platform rebuild that expanded reach and increased fundraising",
            },
          ].map((c, i) => (
            <Link
              key={c.client}
              href={c.href}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.8fr) minmax(0, 1.3fr)",
                gap: 32,
                alignItems: "baseline",
                padding: "30px 0",
                borderBottom: i < 4 ? "1px solid var(--line)" : "none",
                textDecoration: "none",
                color: "var(--fg)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.1 }}>
                {c.client}
              </span>
              <span className="kicker">{c.sector}</span>
              <span style={{ fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>{c.note}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────────────── 5. What our clients say — dark testimonial rooms ───────────────────────── */}
      <section id="voices" className="band--dark" style={{ padding: "104px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
            <h2 style={{ ...H2, color: "#f4f1ea" }}>What our clients say about TMG</h2>
            <span className="kicker" style={{ color: "rgba(244,241,234,0.55)" }}>
              In their words
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 1,
              background: "var(--line-dark)",
              border: "1px solid var(--line-dark)",
              marginTop: 56,
            }}
          >
            {[
              {
                quote:
                  "TMG developed a marketing campaign and a scheduling process for acquiring patients that was so successful, we ended up as the top producing site in the country for our first clinical trial. Many studies later, and not only are their efforts still producing stellar results in an ever changing landscape, but they have the same dedication and focus on results that an equity owner would possess. I can’t say enough good things about TMG. Don’t miss an opportunity to work with their amazing talent.",
                who: "Tony, CEO",
                org: "Medical Trials Company",
              },
              {
                quote:
                  "After launching on September 13, TMG generated over 450 qualified leads within 6 weeks and converted 11 into investing partners, resulting in nearly $1,000,000 in new funding. The total cost was substantially less than our prior agency and delivered an exceptionally higher return on investment.",
                who: "Beau, President",
                org: "FlowTex Energy",
              },
              {
                quote:
                  "We engaged 5 different digital marketing agencies whom promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge and subject matter expertise. TMG’s approach to business can be expressed in 2 words, trusted partnership. We were absolutely delighted with the business results TMG helped us achieve.",
                who: "Carl, CMO",
                org: "Fintech Startup",
              },
              {
                quote:
                  "TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer. Their work helped increase fundraising, strengthen our professional presence, and expand our reach to support more women who need these resources.",
                who: "Allyn, Founder",
                org: "The Previvor Foundation",
              },
            ].map((t, i) => (
              <figure
                key={t.who}
                style={{
                  background: "var(--dark)",
                  margin: 0,
                  padding: i === 0 ? "44px 44px 44px 0" : i === 1 ? "44px 0 44px 44px" : i === 2 ? "44px 44px 44px 0" : "44px 0 44px 44px",
                }}
              >
                <blockquote
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 21,
                    lineHeight: 1.42,
                    color: "rgba(244,241,234,0.92)",
                  }}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption style={{ marginTop: 22 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#f4f1ea" }}>{t.who}</span>
                  <span className="kicker" style={{ display: "block", marginTop: 6, color: "var(--accent)" }}>
                    {t.org}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. Close — their phone, one honest CTA ───────────────────────── */}
      <section
        id="contact"
        style={{
          background: "var(--bg)",
          padding: "120px var(--pad, 96px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)",
          gap: 64,
          alignItems: "end",
        }}
      >
        <div>
          <h2 style={{ ...H2, fontSize: 72, maxWidth: "14ch" }}>
            Every great partnership starts with an{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>
              honest
            </span>{" "}
            conversation.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: "28px 0 0", color: "var(--muted)", maxWidth: "52ch" }}>
            Schedule a consultation. No sales pressure — just an honest
            conversation about your goals and how we might help.
          </p>
        </div>
        <div style={{ display: "grid", gap: 18 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>
              Talk to the team
            </div>
            <a
              href="tel:3487753434"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                textDecoration: "none",
                color: "var(--fg)",
                display: "block",
              }}
            >
              348-7753434
            </a>
            <a
              href="tel:8886021919"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.2,
                textDecoration: "none",
                color: "var(--muted)",
                display: "block",
              }}
            >
              888-6021919
            </a>
          </div>
          <Link href="/contact" className="btn btn--ink" style={{ width: "fit-content" }}>
            Get Started
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export const metadata = {
  title: "Thela Media Group - Advertising Strategy, Media & Measurement",
  description:
    "Elite systems for the most demanding campaigns. TMG combines strategy, creative, media buying, analytics, automation, and intelligence backbones to help brands spend smarter and grow with confidence.",
};
