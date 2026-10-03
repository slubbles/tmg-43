/* /services/marketing-attribution */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Marketing Attribution Services | Multi-Touch Attribution Models | TMG",
  description:
    "Our custom attribution models reveal the truth about which marketing activities generate real business value.",
};

const data: ServicePageData = {
  eyebrow: "Attribution Services",
  title: (
    <>
      Know what actually drives{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>revenue</span>
    </>
  ),
  dek: "Last-click attribution lies. First-click oversimplifies. Platform reporting is self-serving. Our custom attribution models reveal the truth about which marketing activities generate real business value.",
  problem: {
    h: "You Are Optimizing for the Wrong Metrics",
    rows: [
      { v: "Self-report", k: "Every platform claims credit for every conversion. Google says their ads drove the sale. Facebook takes credit too. Your email platform reports the same customer as their conversion." },
      { v: "Uncertain", k: "Many marketing teams lack confidence in channel performance data — yet budgets are allocated on exactly those numbers." },
      { v: "Inflated", k: "Sum of platform-reported conversions overstates actual business results, so true incremental impact stays invisible." },
    ],
    statement: "Attribution is not a technical problem. It is a strategic intelligence problem, built on your specific customer journey.",
  },
  pillars: [
    { n: "01", t: "Algorithmic Attribution", d: "Machine learning models that analyze thousands of customer journeys to assign credit based on actual conversion probability — accounting for customer quality, not just quantity, with statistically validated attribution weights and confidence intervals.", tags: ["Incremental impact", "Continuous learning"] },
    { n: "02", t: "Time-Decay Attribution", d: "For longer consideration cycles, time-decay weighting reflects the touchpoints that actually moved the account forward." },
    { n: "03", t: "Position-Based Attribution", d: "Hybrid models that weight first and last touch while still recognizing the middle journeys that platform reporting ignores." },
    { n: "04", t: "Journey & Validation Layer", d: "Models account for customer quality and are validated against holdout data, so attribution weights stay honest as journeys evolve." },
  ],
  quote: {
    q: "TMG's approach to business can be expressed in 2 words, trusted partnership. We were absolutely delighted with the business results TMG helped us achieve.",
    who: "Carl, CMO",
    org: "Fintech Startup",
  },
  close: { line1: "Defend spend", line2: "with evidence.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={2} />;
}
