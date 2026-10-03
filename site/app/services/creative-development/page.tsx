/* /services/creative-development */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Creative Development Services | TMG Genesis Design & Content | TMG",
  description:
    "We combine creative excellence with data science to produce campaigns, design, and content that are both visually compelling and strategically effective.",
};

const data: ServicePageData = {
  eyebrow: "Creative Services",
  title: (
    <>
      Creative that converts, not just{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>captivates</span>
    </>
  ),
  dek: "Beautiful creative that fails to convert is expensive art. We combine creative excellence with data science to produce campaigns, design, and content that are both visually compelling and strategically effective.",
  problem: {
    h: "Most Creative Is Pretty But Ineffective",
    rows: [
      { v: "Low CVR", k: "Your creative looks great but conversion rates remain stubbornly low?" },
      { v: "Opinion", k: "Design decisions based on personal preference instead of data?" },
      { v: "Weeks", k: "Testing creative variations takes weeks and wastes budget?" },
    ],
    statement: "We believe creative excellence and data-driven performance are not in conflict. The best creative is born when human imagination meets machine intelligence.",
  },
  pillars: [
    { n: "01", t: "Data-Informed Ideation", d: "We start with insights, not inspiration. TMG Genesis analyzes your audience behavior, competitor creative, industry trends, and historical performance to identify what resonates. Creative briefs are built on data, not assumptions.", tags: ["1,200+ data points analyzed"] },
    { n: "02", t: "Rapid Concept Development", d: "Our team produces multiple creative directions quickly, using TMG Genesis tools to accelerate production without sacrificing quality. You see more options faster, enabling better strategic choices before significant resources are invested.", tags: ["4–6 concepts per project"] },
    { n: "03", t: "Predictive Performance Testing", d: "Before spending a dollar on distribution, TMG Genesis models predict how each creative concept will perform. We test messaging, visuals, layouts, and calls-to-action against your specific audience to identify the highest-probability winners.", tags: ["Prediction accuracy"] },
    { n: "04", t: "Continuous Optimization", d: "Once creative is live, we monitor performance in real time and generate optimized variations automatically. A/B testing runs continuously, with TMG Genesis determining which elements to test and when to scale winners." },
  ],
  caseStudy: {
    client: "Non-Profit Health Foundation",
    sector: "Non-Profit / Women’s Health",
    challenge: "A digital women’s health platform needed to transform their online presence to better serve young women affected by breast cancer. Their existing platform lacked the sophistication and functionality needed to effectively reach and educate their audience.",
    approach: "TMG went beyond simple website development, translating the foundation’s unique design vision into reality while adding sophisticated functionality that streamlined operations. Comprehensive training ensured the team could independently maintain and update everything long-term.",
    results: "Increased fundraising success, enhanced professional presence, and expanded reach to support more young women in their breast cancer prevention journey.",
    quote: "TMG demonstrated remarkable attention to detail in translating our unique design vision into reality while adding sophisticated functionality that has streamlined our operations.",
    who: "Allyn, Founder",
    org: "Non-Profit Foundation",
  },
  close: { line1: "Creative excellence and", line2: "performance, together.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={2} />;
}
