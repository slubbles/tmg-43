/* /services/content-strategy */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Content Strategy Services | TMG Genesis Content Marketing | TMG",
  description:
    "We create content strategies built on search data, audience intelligence, and competitive analysis — produced at scale without sacrificing quality.",
};

const data: ServicePageData = {
  eyebrow: "Content Services",
  title: (
    <>
      Content strategy that drives real business{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>results</span>
    </>
  ),
  dek: "Most content gets published and ignored. We create content strategies built on search data, audience intelligence, and competitive analysis. Then we use TMG Genesis to produce at scale without sacrificing quality or authenticity.",
  problem: {
    h: "Why Most Content Strategies Fail",
    rows: [
      { v: "Flat", k: "Publishing consistently but organic traffic remains flat?" },
      { v: "$0 leads", k: "Spending thousands on content that generates zero leads?" },
      { v: "Outranked", k: "Competitors outranking you for keywords you should own?" },
    ],
    statement: "Content without distribution is just expensive writing. SEO-optimized content strategy turns your website into an organic lead generation engine that compounds value over time.",
  },
  pillars: [
    { n: "01", t: "Search Intent Analysis", d: "We do not guess what to write about. TMG Genesis analyzes millions of search queries to identify exactly what your audience is looking for, how they search for it, and what content currently ranks. Your editorial calendar is built on search demand, not assumptions.", tags: ["Intent keyword mapping"] },
    { n: "02", t: "Competitive Content Gaps", d: "Our platform identifies topics your competitors rank for that you do not. We find content opportunities where demand exists but supply is weak, giving you clear paths to page-one rankings without fighting entrenched competitors.", tags: ["340 content opportunities"] },
    { n: "03", t: "Genesis-Assisted Production", d: "We combine TMG Genesis efficiency with human editorial oversight. TMG Genesis handles research, first drafts, and optimization while editors ensure quality, accuracy, and brand voice so production can scale without sacrificing standards." },
    { n: "04", t: "Performance Optimization", d: "Technical optimization and structure support rankings; content is updated against performance data so the library compounds instead of rotting." },
  ],
  close: { line1: "Built on search demand,", line2: "edited by humans.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={1} />;
}
