/* /industries/healthcare-life-sciences */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Healthcare & Life Sciences Marketing | AI-Powered Growth | TMG",
  description:
    "Drive patient acquisition, engagement, and retention with AI-powered marketing strategies designed for healthcare providers and life sciences organizations.",
};

const data: IndustryPageData = {
  eyebrow: "Industry Expertise",
  title: (
    <>
      Healthcare marketing that heals your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>growth</span> challenges
    </>
  ),
  dek: "Drive patient acquisition, engagement, and retention with AI-powered marketing strategies designed specifically for healthcare providers, medical device manufacturers, pharmaceutical companies, and life sciences organizations. Navigate complex compliance requirements while achieving exceptional ROI.",
  landscape: {
    h: "The Healthcare Marketing Landscape Is More Complex Than Ever",
    intro: "Between strict regulations, patient privacy concerns, and rising acquisition costs, healthcare marketers face unique challenges that traditional approaches can’t solve.",
    rows: [
      { v: "Strict", k: "HIPAA compliance constraints: marketing technology and data practices must meet stringent privacy regulations, limiting personalization options and creating compliance risks." },
      { v: "Rising", k: "High patient acquisition costs: competition for patients is fierce, with acquisition costs rising while reimbursement rates continue to decline." },
      { v: "Multi-step", k: "Fragmented patient journey: patients research across multiple channels before booking appointments, making attribution nearly impossible with traditional tools." },
      { v: "Trust gap", k: "Trust and credibility gaps: healthcare consumers demand transparency and expertise, yet most healthcare brands struggle to build authentic digital trust at scale." },
    ],
    statement: "Healthcare marketing requires more than generic tactics. It demands specialized expertise, regulatory knowledge, and proven strategies that balance patient acquisition with compliance and ethical responsibility.",
  },
  solutions: [
    { n: "01", t: "HIPAA-Compliant Marketing Automation", d: "Deploy sophisticated patient nurture campaigns, appointment reminders, and educational content workflows that maintain full HIPAA compliance. BAAs are in place with all vendors and PHI is never exposed.", tags: ["BAA vendor controls"] },
    { n: "02", t: "Patient Acquisition Intelligence", d: "AI models predict patient lifetime value, identify high-intent prospects, and optimize acquisition spend across search, social, and programmatic channels. Target by condition, treatment interest, insurance type, and geographic proximity with precision.", tags: ["#1 trial site ranking"] },
    { n: "03", t: "Reputation Management at Scale", d: "Monitor and respond to patient reviews, manage online reputation across healthcare directories, and generate authentic testimonials while maintaining HIPAA compliance.", tags: ["Reputation signals"] },
    { n: "04", t: "Clinical Content Strategy", d: "Develop authoritative, evidence-based content that educates patients, builds provider credibility, and drives organic search rankings. Medical writers work with your clinical team to ensure accuracy and compliance.", tags: ["Clinical content review"] },
  ],
  caseStudy: {
    client: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge: "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition. DPC is a growing but still unfamiliar model for most consumers, requiring both education and patient acquisition from scratch.",
    approach: "TMG developed the complete brand identity, go-to-market strategy, and market positioning from the ground up, with full-scale advertising infrastructure built for awareness and enrollment simultaneously.",
    results: "Growth above the national average for the model, sustained month over month through the first year.",
    metrics: [
      { v: "#1", k: "National Trial Site" },
      { v: "2.2x", k: "DPC Growth" },
      { v: "MOM", k: "Sustained" },
    ],
  },
  close: { line1: "Compliance and growth,", line2: "balanced.", cta: "Schedule Healthcare Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={0} />;
}
