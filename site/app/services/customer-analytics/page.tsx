/* /services/customer-analytics */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Customer Analytics Services | Predictive Customer Intelligence | TMG",
  description:
    "Turn behavioral data into strategic intelligence that drives retention, expansion, and acquisition.",
};

const data: ServicePageData = {
  eyebrow: "Analytics Services",
  title: (
    <>
      Know your customers better than they know{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>themselves</span>
    </>
  ),
  dek: "You have customer data. We have AI models that predict who will buy, when they will churn, and how much they will spend. Turn behavioral data into strategic intelligence that drives retention, expansion, and acquisition.",
  problem: {
    h: "Your Customer Data Is Worthless Without Intelligence",
    rows: [
      { v: "Unused", k: "Most collected customer data is never analyzed or acted upon." },
      { v: "Churn", k: "Average annual revenue lost to preventable customer churn." },
      { v: "5–7x", k: "Cost to acquire new customers vs retaining existing ones." },
    ],
    statement: "CRM systems full of records. Analytics platforms full of metrics. But critical business questions go unanswered because data collection is not intelligence generation.",
  },
  pillars: [
    { n: "01", t: "Lifetime Value Prediction", d: "AI models predict each customer's total lifetime value at acquisition. Prioritize acquisition spend toward high-LTV segments and personalize experiences based on predicted value." },
    { n: "02", t: "Churn Prediction & Prevention", d: "Identify customers at risk of churning before they leave. Machine learning analyzes behavioral signals to predict churn probability, triggering retention campaigns automatically." },
    { n: "03", t: "Purchase Propensity Scoring", d: "Know which prospects are most likely to buy and when. Models score every lead by conversion probability, helping sales prioritize and marketing target efficiently." },
    { n: "04", t: "Behavioral Segmentation", d: "Move beyond demographics to behavior-based segments. Group customers by actual actions, engagement patterns, and value indicators rather than arbitrary demographic criteria." },
  ],
  caseStudy: {
    client: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge: "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot but failed to deliver, the management team was skeptical that any agency could produce results.",
    approach: "TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why specific strategies were proposed, and what to expect. Rather than upselling unnecessary services, TMG advised what the team could handle internally to save costs and build core competencies.",
    results: "Product-market fit demonstrated, with cost-savings guidance and a trusted-partnership operating model.",
    metrics: [{ v: "5", k: "Prior Failed Agencies" }],
  },
  close: { line1: "From collected data", line2: "to predicted behavior.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={2} />;
}
