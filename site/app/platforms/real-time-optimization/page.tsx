/* /platforms/real-time-optimization */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "Real-Time Optimization | TMG",
  description:
    "Deploy always-on optimization systems that monitor campaign performance continuously and make adjustments every 15 minutes.",
};

const data: CapabilityPageData = {
  eyebrow: "Real-Time Optimization",
  title: (
    <>
      Never wait for performance{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>reports</span> again
    </>
  ),
  dek: "Deploy always-on optimization systems that monitor campaign performance continuously and make adjustments every 15 minutes. Stop reacting to yesterday's data and start optimizing based on what is happening right now.",
  statement: {
    intro: (
      <>
        Most teams make decisions based on{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>yesterday's</span> reports.
      </>
    ),
    lead: "Our real-time optimization responds to market conditions as they happen",
    rest: ", capturing opportunities before they disappear.",
  },
  caps: [
    { n: "01", t: "Dynamic Bid Management", d: "Automated bid adjustments every 15 minutes based on conversion rates, competition, time of day, device type, and dozens of other signals. Maximize ROAS by paying exactly what each click is worth in real time.", tags: ["15min cycle"] },
    { n: "02", t: "Continuous Monitoring", d: "Performance monitored continuously with 15-minute optimization cycles; automated algorithms identify and act on opportunities instantly." },
    { n: "03", t: "Intraday Response", d: "Immediate response to traffic patterns, competition, and conversion rates — maximum value extraction by optimizing every moment of every day." },
    { n: "04", t: "Predictive Decisions", d: "Decisions based on current performance data and predictive models, not aggregated historical averages." },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was nearly ready to abandon social media marketing altogether.",
    approach: "TMG built a transparent, results-driven advertising system from the ground up, with ongoing campaign management at a fraction of the prior agency's cost.",
    results: "Over 450 qualified leads within 6 weeks, $1MM+ initial raise, and over 16 months: 110+ new investing partners, $15MM+ new raise, 86% cost reduction, 33x ROAS.",
    metrics: [
      { v: "450+", k: "Qualified Leads" },
      { v: "33x", k: "ROAS" },
    ],
  },
  close: { line1: "Optimize every moment", line2: "of every day.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={0} />;
}
