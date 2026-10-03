/* /industries/technology-saas */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Technology & SaaS Marketing | Growth Marketing for Tech Companies | TMG",
  description:
    "Drive explosive user acquisition, optimize conversion funnels, and accelerate ARR growth with AI-powered growth marketing built for technology companies.",
};

const data: IndustryPageData = {
  eyebrow: "Technology Growth",
  title: (
    <>
      SaaS marketing that scales with your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>ambitions</span>
    </>
  ),
  dek: "Drive explosive user acquisition, optimize conversion funnels, and accelerate ARR growth with AI-powered growth marketing built specifically for technology companies. From pre-seed startups to publicly-traded enterprises, we fuel sustainable, scalable tech growth.",
  landscape: {
    h: "Is Your SaaS Growth Strategy Keeping Pace?",
    intro: "Competition intensifies daily, buyer expectations evolve constantly, and traditional marketing playbooks fail in fast-moving tech markets.",
    rows: [
      { v: "CAC ↑", k: "Customer acquisition costs rising faster than LTV, squeezing unit economics and threatening profitability?" },
      { v: "PLG", k: "Product-led growth hitting a ceiling, with stagnant activation rates and trial-to-paid conversion?" },
      { v: "Broken", k: "Marketing attribution broken across complex buyer journeys with many touchpoints before conversion?" },
    ],
    statement: "SaaS growth isn't about running ads. It's about building a predictable, scalable revenue engine.",
  },
  solutions: [
    { n: "01", t: "Product-Led Growth Acceleration", d: "Optimize every stage of your PLG motion from first touch to product activation. AI-powered experimentation identifies friction points, improves onboarding flows, and increases trial-to-paid conversion through intelligent nudges and personalized in-app messaging.", tags: ["PLG activation motion"] },
    { n: "02", t: "Demand Generation Engine", d: "Build a predictable pipeline of qualified leads through content marketing, paid acquisition, ABM campaigns, and community building. Our AI models optimize spend across the channels that fit your market.", tags: ["Pipeline demand engine"] },
    { n: "03", t: "Lifecycle Marketing Automation", d: "Nurture users through every stage from free trial to power user to expansion opportunity. Automated workflows deliver the right message at the right time based on product usage, feature adoption, health scores, and expansion signals.", tags: ["Lifecycle expansion"] },
    { n: "04", t: "Revenue Intelligence Platform", d: "Unify product analytics, marketing attribution, and revenue data in a single source of truth. Understand exactly which campaigns, content, and channels drive trial signups, paid conversions, and expansion revenue.", tags: ["Unified revenue view"] },
  ],
  close: { line1: "From strangers to users,", line2: "users into advocates.", cta: "Schedule SaaS Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={2} />;
}
