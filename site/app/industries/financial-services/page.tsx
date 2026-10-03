/* /industries/financial-services */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Financial Services Marketing | Wealth Management & Banking | TMG",
  description:
    "Acquire high-net-worth clients, grow assets under management, and expand market share with AI-driven marketing strategies for financial services.",
};

const data: IndustryPageData = {
  eyebrow: "Financial Expertise",
  title: (
    <>
      Financial services marketing built for{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>precision</span> and growth
    </>
  ),
  dek: "Acquire high-net-worth clients, grow assets under management, and expand market share with AI-driven marketing strategies designed for banks, wealth management firms, insurance carriers, and fintech innovators. Navigate regulatory compliance while achieving exceptional client acquisition efficiency.",
  landscape: {
    h: "Financial Marketing Faces Unprecedented Challenges",
    intro: "Client acquisition costs are soaring while differentiation becomes harder. Regulatory scrutiny intensifies and consumer trust in financial institutions continues to decline.",
    rows: [
      { v: "Rising", k: "Average CAC: cost to acquire a single financial services client keeps climbing." },
      { v: "Digital", k: "Research journey: consumers researching financial products online before deciding." },
      { v: "Trust", k: "Trust deficit: confidence in banks and financial institutions remains under pressure." },
    ],
    statement: "Winning financial marketing pairs precision targeting with compliance-aware messaging and proof of expertise.",
  },
  solutions: [
    { n: "01", t: "Wealth Management Client Acquisition", d: "Target and convert high-net-worth individuals with precision. AI models identify prospects based on wealth indicators, investment behavior, life events, and demographic signals. Personalized nurture campaigns build trust and demonstrate expertise.", tags: ["HNW audience focus"] },
    { n: "02", t: "Banking & Deposit Growth", d: "Drive checking account openings, deposit growth, and cross-sell opportunities through intelligent targeting and personalization. Optimize branch traffic, digital banking adoption, and product penetration.", tags: ["Deposit growth strategy"] },
    { n: "03", t: "Insurance Marketing & Distribution", d: "Generate qualified leads for life, health, property, and casualty insurance products. Support agent networks with marketing automation, lead distribution, and performance analytics.", tags: ["Quote conversion support"] },
    { n: "04", t: "Fintech User Acquisition", d: "Scale customer acquisition for digital banking, payment processing, lending, and investment platforms. Optimize app install campaigns, onboarding flows, and activation rates.", tags: ["Fintech growth"] },
  ],
  caseStudy: {
    client: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge: "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot but failed to deliver, the management team was skeptical that any agency could produce results.",
    approach: "TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why specific strategies were proposed, and what to expect — advising what the team could handle internally to save costs.",
    results: "Product-market fit demonstrated with a trusted-partnership operating model.",
    quote: "We engaged 5 different digital marketing agencies who promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge and subject matter expertise. We were absolutely delighted with the business results.",
    who: "Carl, CMO",
    org: "Fintech Startup",
    metrics: [{ v: "5", k: "Prior Failed Agencies" }],
  },
  close: { line1: "Precision targeting,", line2: "compliance-aware.", cta: "Schedule Financial Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={1} />;
}
