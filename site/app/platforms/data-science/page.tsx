/* /platforms/data-science */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "Data Science | TMG",
  description:
    "Partner with a team that trains custom models, builds internal tools, and creates client-specific implementations for marketing intelligence.",
};

const data: CapabilityPageData = {
  eyebrow: "Data Science",
  title: (
    <>
      Transform data into strategic{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>advantage</span>
    </>
  ),
  dek: "Partner with a team that trains custom models, builds internal tools, and creates client-specific implementations for marketing intelligence, attribution, forecasting, privacy-sensitive workflows, and automation.",
  statement: {
    intro: (
      <>
        Most companies have mountains of data but lack the{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>expertise</span> to extract value.
      </>
    ),
    lead: "Practical intelligence bridges this gap, tying raw information, campaign systems, custom models, and client workflows",
    rest: " into decisions teams can use.",
  },
  caps: [
    { n: "01", t: "Exploratory Data Analysis", d: "Deep statistical analysis that uncovers patterns, correlations, and opportunities hidden in your marketing data. We identify the key drivers of performance, validate assumptions with rigorous testing, and surface actionable insights.", tags: ["Statistical testing", "Pattern recognition", "Insight generation"] },
    { n: "02", t: "Custom Model Development", d: "Purpose-built machine learning models designed for your specific business challenges. From propensity scoring to lifetime value forecasting, we train, deploy, and monitor production-grade models that integrate with your marketing infrastructure.", tags: ["Model operations", "Production deployment"] },
    { n: "03", t: "Advanced Attribution Modeling", d: "Sophisticated multi-touch attribution that understands complex customer journeys across channels, devices, and touchpoints. Algorithmic attribution continuously updates based on actual conversion patterns rather than static rules.", tags: ["Journey analysis", "Budget allocation"] },
    { n: "04", t: "Experimentation & Testing", d: "Rigorous A/B testing frameworks with proper statistical methodology. We design experiments, calculate required sample sizes, monitor for validity threats, and provide confidence intervals for all results.", tags: ["Experimental design", "Statistical significance", "Causal inference"] },
  ],
  caseStudy: {
    client: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge: "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot but failed to deliver, the management team was skeptical that any agency could produce results.",
    approach: "TMG took a practical, transparent approach, explaining what would be done, why specific strategies were proposed, and what to expect — advising what the team could handle internally to save costs.",
    results: "Product-market fit demonstrated with cost-savings guidance and a trusted-partnership operating model.",
    metrics: [{ v: "5", k: "Prior Failed Agencies" }],
  },
  close: { line1: "Raw information into", line2: "usable decisions.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={0} />;
}
