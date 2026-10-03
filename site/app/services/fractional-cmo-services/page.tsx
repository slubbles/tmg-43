/* /services/fractional-cmo-services */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Fractional CMO Services | Part-Time Marketing Leadership | TMG",
  description:
    "Get senior marketing leadership without enterprise-level overhead. Strategy, execution, and accountability move together.",
};

const data: ServicePageData = {
  eyebrow: "Leadership Services",
  title: (
    <>
      Strategic marketing leadership when you{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>need it</span>
    </>
  ),
  dek: "Get senior marketing leadership without enterprise-level overhead. TMG matches the engagement to your stage, goals, and internal team so strategy, execution, and accountability move together.",
  problem: {
    h: "The Full-Time CMO Problem",
    rows: [
      { v: "Too early", k: "Need strategic leadership before a full-time executive role makes sense?" },
      { v: "No direction", k: "Marketing team executing tactics without clear strategy or direction?" },
      { v: "Pulled thin", k: "CEO or founder spending too much time on marketing instead of core business?" },
    ],
    statement: "Most growing companies need experienced marketing leadership long before a full-time CMO role makes operational sense.",
  },
  pillars: [
    { n: "01", t: "Strategic Planning & Roadmaps", d: "Develop comprehensive marketing strategies aligned with business objectives. Build channel strategies, budget allocation models, and execution roadmaps that guide your team toward measurable goals.", tags: ["6–8 wks to strategy"] },
    { n: "02", t: "Team Leadership & Development", d: "Lead, mentor, and optimize your marketing team. Conduct skills assessments, define roles, hire key positions, and build high-performing organizations that execute effectively." },
    { n: "03", t: "Performance Accountability", d: "Establish KPIs, implement tracking systems, and hold teams accountable to results. Regular performance reviews ensure marketing delivers on business commitments." },
    { n: "04", t: "Executive Counsel & Board Reporting", d: "Partner with CEO and leadership team on growth strategy. Prepare board reports that communicate marketing performance, budget needs, and strategic initiatives clearly." },
  ],
  quote: {
    q: "We use TMG as our sole vendor whenever it comes to marketing and branding materials for our various companies. During the many years we have been doing business with them, we have never been disappointed in their work.",
    who: "Shawn, President",
    org: "Medical Management Firm",
  },
  close: { line1: "Senior leadership,", line2: "matched to your stage.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={1} />;
}
