/* /contact — dedicated core route. Their facts as type; form posts to /api/submit. */
import ContactForm from "../components/ContactForm";
import { SiteHeader, SiteFooter } from "../components/Chrome";

export const metadata = {
  title: "Contact Us | Get Started with TMG",
  description:
    "Schedule a consultation to discover how TMG can help improve your marketing. No sales pressure, just an honest conversation about your goals and how we might help.",
};

const STEPS = [
  {
    n: "01",
    title: "Initial Contact",
    copy: "You reach out via form, email, or phone. We follow up to schedule a discovery call at your convenience.",
  },
  {
    n: "02",
    title: "Discovery & Analysis",
    copy: "We learn about your business, analyze your current state, and identify opportunities for growth.",
  },
  {
    n: "03",
    title: "Proposal & Agreement",
    copy: "If there is fit, we present a detailed proposal. After agreement, legal and onboarding processes begin immediately.",
  },
  {
    n: "04",
    title: "Kickoff & Implementation",
    copy: "Once the agreement is signed, we align on a kickoff timeline and our team begins data integration and system setup.",
  },
];

const EXPECT = [
  { t: "Discovery Call", d: "A 30-minute conversation to understand your business, current marketing efforts, challenges, and growth objectives. No sales pitch, just questions and listening.", k: "30 Min — Initial Call" },
  { t: "Opportunity Analysis", d: "Our team analyzes your situation and develops a preliminary assessment of opportunities, potential impact, and recommended approach. This is complimentary.", k: "3–5 Days — Analysis Time" },
  { t: "Strategy Presentation", d: "We present our findings, recommendations, and proposed approach in a detailed strategy session. You will see exactly what we would do and why.", k: "60 Min — Presentation" },
  { t: "Proposal & Next Steps", d: "If there is mutual fit, we provide a detailed proposal with scope, timeline, investment, and expected outcomes. No pressure to decide immediately.", k: "1 Week — Decision Time" },
];

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      {/* Fold — unique: contact opens with the statement, not a photo clone */}
      <section
        className="band--dark"
        style={{ padding: "220px var(--pad, 96px) 104px" }}
      >
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Let’s Talk</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 92,
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              color: "#f4f1ea",
              margin: "20px 0 0",
              maxWidth: "12ch",
            }}
          >
            Start your{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>
              growth
            </span>{" "}
            journey
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(244,241,234,0.75)",
              maxWidth: "58ch",
              margin: "30px 0 0",
            }}
          >
            Schedule a consultation to discover how TMG can help improve your
            marketing. No sales pressure, just an honest conversation about your
            goals and how we might help.
          </p>
        </div>
      </section>

      {/* Facts + form — their phones as type, never the lead email */}
      <section style={{ padding: "104px var(--pad, 96px)", background: "var(--bg)" }}>
        <div
          style={{
            maxWidth: 1440,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div className="kicker kicker--accent">Get in Touch</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "14ch" }}>
              Choose the best way to connect with our team
            </h2>
            <div style={{ marginTop: 44, display: "grid", gap: 26 }}>
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>
                  Call
                </div>
                <a
                  href="tel:8886021919"
                  style={{ fontFamily: "var(--font-display)", fontSize: 42, lineHeight: 1.15, textDecoration: "none", color: "var(--fg)", display: "block" }}
                >
                  888-6021919
                </a>
                <a
                  href="tel:3487753434"
                  style={{ fontFamily: "var(--font-display)", fontSize: 42, lineHeight: 1.15, textDecoration: "none", color: "var(--muted)", display: "block" }}
                >
                  348-7753434
                </a>
              </div>
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>
                  Offices
                </div>
                <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: "44ch" }}>
                  Austin, Texas — with distributed teams supporting client work
                  across markets.
                </p>
              </div>
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>
                  Hours
                </div>
                <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                  Monday–Friday, business hours CT.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "var(--cream-2)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "48px 48px 44px",
            }}
          >
            <ContactForm
              context="contact"
              intro="Tell us where you are and where you want to grow. We follow up within 3–5 days with a preliminary assessment — complimentary."
              cta="Send Message →"
            />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ padding: "96px var(--pad, 96px)", background: "var(--cream-2)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">What to Expect</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            From inquiry to launch, without the guesswork
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", marginTop: 52 }}>
            {EXPECT.map((e, i) => (
              <div key={e.t} style={{ background: "var(--cream-2)", padding: "38px 40px", paddingLeft: i % 2 === 1 ? 40 : 40 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28 }}>{e.t}</span>
                  <span className="kicker">{e.k}</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", margin: "14px 0 0", maxWidth: "52ch" }}>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From inquiry to launch — numbered */}
      <section style={{ padding: "96px var(--pad, 96px)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">From Inquiry to Launch</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: "18px 0 0", maxWidth: "20ch" }}>
            Four steps, in the open
          </h2>
          <div style={{ marginTop: 48 }}>
            <hr className="rule" />
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px minmax(200px, 0.7fr) minmax(0, 1.6fr)",
                  gap: 32,
                  alignItems: "baseline",
                  padding: "36px 0",
                  borderBottom: i < STEPS.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <span className="idx" style={{ color: "var(--accent)" }}>{s.n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 30 }}>{s.title}</span>
                <span style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: "58ch" }}>{s.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section style={{ padding: "110px var(--pad, 96px)", background: "var(--cream-2)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440, display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 56, alignItems: "end" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 62, lineHeight: 1.05, margin: 0, maxWidth: "18ch" }}>
            Ready to build something{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>
              extraordinary
            </span>
            ? Let’s start the conversation.
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            <a href="tel:8886021919" style={{ fontFamily: "var(--font-display)", fontSize: 40, textDecoration: "none", color: "var(--fg)", width: "fit-content" }}>
              888-6021919
            </a>
            <a href="tel:3487753434" style={{ fontFamily: "var(--font-display)", fontSize: 40, textDecoration: "none", color: "var(--muted)", width: "fit-content" }}>
              348-7753434
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
