/* /services/ai-powered-strategy */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "AI-Powered Marketing Strategy Services | Data-Driven Growth Planning | TMG",
  description:
    "Our AI strategy process analyzes market, customer, and competitive signals to identify opportunities and threats before your competition.",
};

const data: ServicePageData = {
  eyebrow: "Strategic Services",
  title: (
    <>
      AI-powered strategy that sees{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>around corners</span>
    </>
  ),
  dek: "Stop reacting to market changes. Start predicting them. Our AI strategy process analyzes market, customer, and competitive signals to identify opportunities and threats before your competition, giving you the strategic advantage to lead your market.",
  problem: {
    h: "Strategic Planning Is Broken in Most Organizations",
    rows: [
      { v: "6–12 wks", k: "Analysis paralysis: your team drowns in data but struggles to extract actionable insights. By the time strategic decisions are made, market conditions have already shifted." },
      { v: "Late", k: "Blind spot vulnerability: competitors are moving faster because they see opportunities you miss. Without AI-assisted market intelligence, you only spot trends after everyone else already has." },
      { v: "Gut call", k: "Gut-based decisions: critical budget allocation relies on executive intuition rather than predictive modeling. Resources flow to the loudest voice, not the highest ROI opportunity." },
      { v: "4–6 mo", k: "Reactive positioning: your strategy responds to what happened last quarter instead of preparing for what will happen next quarter. You are always playing catch-up." },
    ],
    statement: "Our models process market signals, competitive movements, and customer behavior patterns to surface insights that would take human analysts months to discover.",
  },
  pillars: [
    { n: "01", t: "Predictive Market Intelligence", d: "AI-assisted market intelligence monitors signals across your market to identify trends, threats, and opportunities before they become obvious — search volume shifts, competitor movements, regulatory changes, economic indicators, and sentiment patterns converge into forward-looking strategic recommendations.", tags: ["Real-time competitive tracking", "Behavioral pattern analysis", "Market opportunity scoring", "Threat assessment", "Trend forecasting"] },
    { n: "02", t: "Audience Strategy Optimization", d: "Audience targeting recommendations built on customer segment analysis with LTV predictions, so budget flows to the segments most likely to compound." },
    { n: "03", t: "Resource Allocation Modeling", d: "Channel mix optimization with budget allocation guidance and strategic risk assessment with mitigation strategies — every recommendation backed by analysis and predictive modeling." },
    { n: "04", t: "Continuous Intelligence", d: "Strategy is never static. We monitor market conditions, competitive activity, and performance metrics, with monthly strategic updates to adapt your approach as conditions evolve.", tags: ["Monthly briefings", "Real-time alerts", "Quarterly strategy refresh", "Executive dashboard"] },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon social media marketing altogether. They needed qualified investor leads to fund drilling and development projects.",
    approach: "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management at a fraction of the prior agency’s cost.",
    results: "Within 6 weeks of the initial campaign launch, TMG generated over 450 qualified leads and helped drive over $1MM in initial raise. Over 16 months: more than 110 new investing partners, over $15MM in new raise, an 86% cost reduction, and a 33x ROAS.",
    metrics: [
      { v: "450+", k: "Qualified Leads" },
      { v: "$1MM+", k: "Initial Raise" },
      { v: "86%", k: "Cost Reduction" },
      { v: "33x", k: "ROAS" },
    ],
  },
  quote: {
    q: "We engaged 5 different digital marketing agencies who promised a lot, but failed to deliver. TMG spent hours working patiently with our team, explaining what would be done and what we could expect. We were absolutely delighted with the results.",
    who: "Carl, CMO",
    org: "Fintech Startup",
  },
  close: { line1: "Stop guessing.", line2: "start knowing.", cta: "Schedule Strategic Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={0} />;
}
