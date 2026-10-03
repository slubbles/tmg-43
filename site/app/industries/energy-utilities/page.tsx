/* /industries/energy-utilities */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Energy & Utilities Marketing | Customer Acquisition & Retention | TMG",
  description:
    "Navigate market deregulation, drive customer acquisition, reduce churn, and promote clean energy adoption with marketing strategies built for energy.",
};

const data: IndustryPageData = {
  eyebrow: "Energy & Utilities",
  title: (
    <>
      Energy marketing for a{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>transforming</span> industry
    </>
  ),
  dek: "Navigate market deregulation, drive customer acquisition, reduce churn, and promote clean energy adoption with marketing strategies built for traditional utilities, renewable energy providers, and energy services companies. Balance regulatory requirements with competitive growth.",
  landscape: {
    h: "The Energy Sector Faces Unprecedented Marketing Challenges",
    intro: "Deregulation increases competition for customers. Renewable energy transitions require massive consumer education. Regulatory constraints limit marketing tactics.",
    rows: [
      { v: "Churn", k: "Annual churn: customer loss pressure in deregulated markets." },
      { v: "Rising", k: "Acquisition cost: cost pressure when acquiring residential customers." },
      { v: "Choice", k: "Market confusion: consumers comparing energy providers, rates, and renewable options." },
    ],
    statement: "Energy marketing requires balancing customer acquisition with retention, growth with conservation, and competitive positioning with public utility responsibilities.",
  },
  solutions: [
    { n: "01", t: "Competitive Energy Provider Marketing", d: "Drive customer acquisition in deregulated energy markets with targeted campaigns that cut through noise and confusion. Educate consumers on competitive choice, differentiate your rates and service, and build trust in a skeptical market.", tags: ["450+ qualified leads"] },
    { n: "02", t: "Renewable Energy Adoption Campaigns", d: "Accelerate residential and commercial solar adoption, community solar programs, and green energy subscriptions. Overcome barriers with financing education, ROI calculators, and social proof from satisfied customers.", tags: ["$1MM+ initial raise"] },
    { n: "03", t: "Customer Retention & Loyalty", d: "Reduce churn in competitive markets through proactive communication, value demonstrations, and loyalty program development. Identify at-risk customers and intervene before they switch providers." },
    { n: "04", t: "Demand Response & Conservation", d: "Drive participation in time-of-use programs, demand response initiatives, and energy efficiency campaigns. Smart meter adoption, peak load reduction, and conservation messaging that resonates." },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon social media marketing altogether.",
    approach: "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management at a fraction of the prior agency's cost.",
    results: "Over 450 qualified leads within 6 weeks, over $1MM in initial raise, and over 16 months: more than 110 new investing partners, $15MM+ in new raise, 86% cost reduction, 33x ROAS.",
    metrics: [
      { v: "450+", k: "Qualified Leads" },
      { v: "$1MM+", k: "Initial Raise" },
      { v: "33x", k: "ROAS" },
    ],
  },
  close: { line1: "Acquisition and retention,", line2: "in a regulated market.", cta: "Schedule Energy Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={1} />;
}
