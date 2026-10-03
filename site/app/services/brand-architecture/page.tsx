/* /services/brand-architecture */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Brand Architecture Services | Strategic Brand Systems | TMG",
  description:
    "We architect cohesive brand systems that clarify positioning, establish hierarchy, and create frameworks for sustainable growth.",
};

const data: ServicePageData = {
  eyebrow: "Brand Strategy",
  title: (
    <>
      Brand architecture that builds{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>equity</span>, not confusion
    </>
  ),
  dek: "Disjointed brands waste marketing dollars and confuse customers. We architect cohesive brand systems that clarify positioning, establish hierarchy, and create frameworks for sustainable growth.",
  problem: {
    h: "Brand Chaos Is Slowing Growth More Than You Think",
    rows: [
      { v: "Fragmented", k: "Identity fragmentation: different divisions, products, and regions present inconsistent brand expressions. Customers encounter different logos, colors, and messages that fail to reinforce a unified brand." },
      { v: "Confused", k: "Portfolio confusion: your product portfolio has grown organically without strategic structure. Customers cannot understand how offerings relate, leading to overlap, cannibalization, and lost opportunities." },
      { v: "Constrained", k: "Growth constraints: lack of brand architecture prevents scaling. Every new product, acquisition, or market expansion creates more complexity rather than building on existing equity." },
      { v: "Diluted", k: "Equity dilution: marketing efforts fail to compound because they support disconnected brand fragments instead of a unified system. You rebuild awareness from zero with every campaign." },
    ],
    statement: "Without intentional architecture, brands become fragmented collections of disconnected assets that fail to build cumulative equity.",
  },
  pillars: [
    { n: "01", t: "Branded House Architecture", d: "A single master brand unifies all products and services under one identity. This approach maximizes marketing efficiency and builds concentrated brand equity, ideal for companies with related offerings serving similar audiences." },
    { n: "02", t: "House of Brands Architecture", d: "Independent brands operate autonomously within a corporate portfolio. Each brand targets distinct audiences or serves different needs, allowing category-specific positioning without constraining individual brands." },
    { n: "03", t: "Endorsed Brand Architecture", d: "Sub-brands maintain distinct identities while receiving credibility from a master brand endorsement. This hybrid approach balances differentiation with efficiency, allowing products to develop unique positioning while benefiting from parent brand equity." },
    { n: "04", t: "Portfolio Audit & Activation", d: "From audit to activation: complete brand portfolio inventory, customer perception analysis across brands, competitive positioning assessment, and stakeholder alignment workshops before any identity work ships." },
  ],
  caseStudy: {
    client: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge: "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition. DPC is a growing but still unfamiliar model for most consumers, requiring both education and patient acquisition from scratch.",
    approach: "TMG developed the complete brand identity, go-to-market strategy, and market positioning from the ground up. The team built full-scale advertising infrastructure including targeted digital campaigns, local market penetration strategy, and conversion-optimized patient acquisition funnels.",
    results: "Growth above the national average for the model, sustained month over month through the first year.",
    metrics: [
      { v: "2.2x", k: "National Growth Avg" },
      { v: "MOM", k: "Sustained Growth" },
      { v: "Year 1", k: "Results Timeline" },
    ],
  },
  close: { line1: "Chaos into clarity.", line2: "equity that compounds.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={0} />;
}
