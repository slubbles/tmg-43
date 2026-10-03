/* /platforms/artificial-intelligence */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "AI Infrastructure | TMG",
  description:
    "Deploy AI infrastructure that connects strategy, media, creative, analytics, and automation into one operating layer.",
};

const data: CapabilityPageData = {
  eyebrow: "AI Infrastructure",
  title: (
    <>
      Intelligence that learns, adapts, and drives{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>growth</span>
    </>
  ),
  dek: "Deploy AI infrastructure that connects strategy, media, creative, analytics, and automation into one operating layer. Our models learn from your business context while keeping privacy and control central where the data requires it.",
  statement: {
    intro: (
      <>
        Traditional marketing relies on human intuition and delayed insights. TMG AI Backbones connect{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>everything</span>.
      </>
    ),
    lead: "TMG AI Backbones connect campaign data, customer signals, creative testing, and media performance",
    rest: ", giving TMG’s advertising team a clearer operating system for faster decisions.",
  },
  caps: [
    { n: "01", t: "TMG AI Backbones", d: "AI infrastructure for custom model training and deployment; service backbones connecting TMG service pillars and client implementations; privacy-aware architecture for sensitive customer, campaign, and business data; custom tools built internally for campaign intelligence, reporting, and automation; client-specific implementations that connect directly into existing operating systems." },
    { n: "02", t: "Neural Campaign Optimization", d: "Campaign systems that adjust to live response signals while staying inside approved plans and guardrails." },
    { n: "03", t: "Predictive Customer Intelligence", d: "Behavior, intent, and value models that feed strategy, media, and lifecycle decisions." },
    { n: "04", t: "Autonomous Market Intelligence", d: "Market and competitive signals monitored continuously, surfaced as questions worth testing." },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon social media marketing altogether.",
    approach: "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, at a fraction of the prior agency’s cost.",
    results: "Over 450 qualified leads within 6 weeks, $1MM+ initial raise, and over 16 months: 110+ new investing partners, $15MM+ new raise, 86% cost reduction, 33x ROAS.",
    metrics: [
      { v: "450+", k: "Qualified Leads" },
      { v: "$1MM+", k: "Initial Raise" },
      { v: "33x", k: "ROAS" },
    ],
  },
  close: { line1: "One operating layer,", line2: "privacy central.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={0} />;
}
