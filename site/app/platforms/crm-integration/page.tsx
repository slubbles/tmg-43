/* /platforms/crm-integration */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "CRM Integration | TMG",
  description:
    "Deploy enterprise-grade CRM integrations that create seamless data flow between marketing platforms and sales systems.",
};

const data: CapabilityPageData = {
  eyebrow: "CRM Integration",
  title: (
    <>
      Unite marketing and sales{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>data</span>
    </>
  ),
  dek: "Deploy enterprise-grade CRM integrations that create seamless data flow between marketing platforms and sales systems. Enable true closed-loop reporting, automated lead routing, and unified customer views that drive revenue growth.",
  statement: {
    intro: (
      <>
        When marketing and sales systems do not communicate,{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>opportunities</span> fall through the cracks.
      </>
    ),
    lead: "Our integrations create the data foundation for revenue growth",
    rest: " — closed-loop attribution, automated routing, and a unified customer view.",
  },
  caps: [
    { n: "01", t: "Bidirectional Data Sync", d: "Real-time synchronization keeps marketing platforms and CRM systems perfectly aligned. Lead data flows from marketing to CRM automatically while sales updates sync back to marketing platforms for complete closed-loop visibility.", tags: ["Sync in under 5 minutes"] },
    { n: "02", t: "Automated Lead Routing", d: "Leads flow automatically from marketing to CRM with complete data enrichment; sales reps see complete engagement history and marketing intelligence." },
    { n: "03", t: "Closed-Loop Attribution", d: "Precise revenue attribution to campaigns, channels, and individual marketing assets — from initial touch through revenue conversion." },
    { n: "04", t: "Data Hygiene", d: "Unified customer records with automated deduplication and data validation, so reporting stands on clean stage definitions, source fields, and handoff rules." },
  ],
  quote: {
    q: "We use TMG as our sole vendor whenever it comes to marketing and branding materials for our various companies. During the many years we have been doing business with them, we have never been disappointed in their work.",
    who: "Shawn, President",
    org: "Medical Management Firm",
  },
  close: { line1: "Marketing to sales,", line2: "one system.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={1} />;
}
