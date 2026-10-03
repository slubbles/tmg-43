/* /platforms/predictive-analytics */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "Predictive Analytics | TMG",
  description:
    "Deploy predictive analytics that forecast campaign performance, customer lifetime value, and market trends before they materialize.",
};

const data: CapabilityPageData = {
  eyebrow: "Predictive Analytics",
  title: (
    <>
      See tomorrow's results{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>today</span>
    </>
  ),
  dek: "Deploy predictive analytics that forecast campaign performance, customer lifetime value, and market trends before they materialize. Transform uncertainty into confidence with data-driven foresight that drives proactive decision-making.",
  statement: {
    intro: (
      <>
        Reactive marketing leaves{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>money</span> on the table.
      </>
    ),
    lead: "Most marketing teams operate in reactive mode, responding to performance issues only after they appear in reports",
    rest: " — by then, opportunities have passed and competitive advantages have eroded.",
  },
  caps: [
    { n: "01", t: "Campaign Performance Forecasting", d: "Predict campaign ROI, conversion rates, and cost metrics before launch. Models analyze historical performance patterns, market conditions, and audience signals to forecast likely outcomes, enabling data-driven budget allocation.", tags: ["Multi-scenario forecast range"] },
    { n: "02", t: "Customer Lifetime Value Prediction", d: "Forecast the total revenue potential of each customer relationship over 12–36 month horizons. Predictive CLV models identify high-value prospects early, enabling acquisition optimization and proactive retention.", tags: ["Revenue-driven segmentation"] },
    { n: "03", t: "Churn Risk Forecasting", d: "Identify customers likely to churn 60–90 days before traditional indicators appear, triggering proactive retention campaigns while there is still time to save the relationship." },
    { n: "04", t: "Market Trend Prediction", d: "Forecast emerging market trends, competitive dynamics, and consumer behavior shifts before they impact your business, giving strategic lead time to adjust positioning, messaging, and channel strategies." },
    { n: "05", t: "How It Works", d: "Data integration → model development → validation & deployment → insights & actions. Models are validated against holdout data, deployed with real-time prediction APIs, and retrained automatically as new data arrives." },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was nearly ready to abandon social media marketing altogether.",
    approach: "TMG built a transparent, results-driven advertising system from the ground up, with ongoing campaign management at a fraction of the prior agency's cost.",
    results: "Over 450 qualified leads within 6 weeks, $1MM+ initial raise, and over 16 months: 110+ new investing partners, $15MM+ new raise, 86% cost reduction, 33x ROAS.",
    metrics: [
      { v: "33x", k: "ROAS" },
      { v: "86%", k: "Cost Reduction" },
    ],
  },
  close: { line1: "Uncertainty into", line2: "foresight.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={2} />;
}
