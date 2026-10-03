/* /services/marketing-intelligence */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Marketing Intelligence & Analytics Services | Real-Time Insights | TMG",
  description:
    "Our intelligence platform transforms fragmented data across all your marketing channels into unified, actionable insights that tell you exactly what to do next.",
};

const data: ServicePageData = {
  eyebrow: "Intelligence Services",
  title: (
    <>
      Marketing intelligence that turns data into{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>decisions</span>
    </>
  ),
  dek: "Stop drowning in dashboards. Start driving results. Our intelligence platform transforms fragmented data across all your marketing channels into unified, actionable insights that tell you exactly what to do next.",
  problem: {
    h: "Your Data Is Lying to You",
    rows: [
      { v: "Manual", k: "Report drag: time marketing teams spend manually compiling reports from fragmented data sources." },
      { v: "Mistrust", k: "Data confidence: marketing leaders questioning whether analytics data is complete and reliable." },
      { v: "Late", k: "Insight delay: critical insights discovered too late to act on due to reporting lag." },
    ],
    statement: "Siloed platforms, conflicting metrics, and delayed reporting create a fog of confusion that obscures what is actually working and what is not.",
  },
  pillars: [
    { n: "01", t: "Cross-Channel Attribution", d: "Understand the true impact of every marketing touchpoint. Our intelligence layer tracks customer journeys across channels to show which activities drive revenue, not just clicks. Custom attribution models reveal hidden performance insights.", tags: ["Unified ROI visibility"] },
    { n: "02", t: "Predictive Performance", d: "Stop looking backward. Our models predict campaign outcomes before you launch, forecast budget needs before you run out, and identify performance issues before they become crises.", tags: ["Before-launch insight"] },
    { n: "03", t: "Competitive Intelligence", d: "Track competitor activity, market share movements, and industry trends in real time. Automated alerts notify you when competitors launch campaigns, change offers, or shift strategy so you can respond immediately.", tags: ["24/7 market monitoring"] },
    { n: "04", t: "Automated Reporting", d: "No more manual report building. Our platform generates executive summaries, performance dashboards, and detailed analytics automatically. Scheduled delivery means stakeholders always have current insights." },
  ],
  quote: {
    q: "TMG’s approach to business can be expressed in 2 words, trusted partnership. We were absolutely delighted with the business results TMG helped us achieve.",
    who: "Carl, CMO",
    org: "Fintech Startup",
  },
  close: { line1: "From looking at data", line2: "to understanding it.", cta: "Schedule Strategy Session" },
};

export default function Page() {
  return <ServicePage data={data} fold={1} />;
}
