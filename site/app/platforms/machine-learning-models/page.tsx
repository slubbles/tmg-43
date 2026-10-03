/* /platforms/machine-learning-models */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "Machine Learning Models | TMG",
  description:
    "Deploy purpose-built machine learning models trained specifically on your data, industry dynamics, and business objectives.",
};

const data: CapabilityPageData = {
  eyebrow: "ML Models",
  title: (
    <>
      Custom models that understand your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>business</span>
    </>
  ),
  dek: "Deploy purpose-built machine learning models trained specifically on your data, industry dynamics, and business objectives. We train, deploy, monitor, and connect those models into your marketing systems with stronger control where privacy matters.",
  statement: {
    intro: (
      <>
        Off-the-shelf machine learning models miss the{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>nuances</span> that drive success in your market.
      </>
    ),
    lead: "Generic models trained on broad datasets cannot capture your unique patterns, seasonality, and customer behaviors",
    rest: " — and vendor black boxes offer no visibility into decision logic.",
  },
  caps: [
    { n: "01", t: "Conversion Propensity Models", d: "Predict which leads, prospects, or customers are most likely to convert based on behavioral signals, demographic attributes, and engagement patterns. Enables precise targeting and resource allocation." },
    { n: "02", t: "Customer Lifetime Value Forecasting", d: "Forecast the total revenue potential of each customer relationship using transactional history, product affinity, and retention signals. Prioritize high-value relationships automatically." },
    { n: "03", t: "Churn Prediction Models", d: "Identify customers at risk of churning weeks or months before traditional indicators appear. Deploy proactive retention campaigns triggered by predictive risk scores." },
    { n: "04", t: "Attribution & Sentiment Models", d: "Multi-touch attribution that understands complex journeys; NLP models trained on your industry terminology to analyze customer feedback, social mentions, and support tickets at scale." },
    { n: "05", t: "Recommendation Engines", d: "Collaborative filtering and content-based models that recommend next-best products, content, or actions personalized to individual preferences and behavior history." },
    { n: "06", t: "Production Operations", d: "Continuous retraining on fresh data so predictions stay relevant, with transparent decision logic — not a black box." },
  ],
  caseStudy: {
    client: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge: "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition.",
    approach: "TMG developed the complete brand identity, go-to-market strategy, and full-scale advertising infrastructure from the ground up.",
    results: "Growth above the national average for the model, sustained month over month through the first year.",
    metrics: [
      { v: "2.2x", k: "National Growth Avg" },
      { v: "MOM", k: "Sustained Growth" },
    ],
  },
  close: { line1: "Purpose-built models,", line2: "production-grade.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={1} />;
}
