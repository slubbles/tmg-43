/* /services/digital-transformation */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Marketing Digital Transformation Services | Marketing Tech Stack | TMG",
  description:
    "Build integrated, intelligent marketing infrastructure that enables growth, not just maintains operations.",
};

const data: ServicePageData = {
  eyebrow: "Transformation Services",
  title: (
    <>
      Marketing transformation that actually{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>transforms</span>
    </>
  ),
  dek: "Rip out the legacy systems holding you back. Build integrated, intelligent marketing infrastructure that enables growth, not just maintains operations. Transform technology, processes, and teams simultaneously.",
  problem: {
    h: "Legacy Marketing Operations Cannot Scale",
    rows: [
      { v: "Tech debt", k: "Your marketing stack is a patchwork of disconnected tools accumulated over years. Data silos prevent unified customer views, integrations break constantly, and teams spend more time managing tools than marketing." },
      { v: "Manual", k: "Critical processes rely on spreadsheets, email threads, and manual hand-offs. What should take minutes requires days. Teams cannot scale because processes do not scale." },
      { v: "Behind", k: "Capability gaps: competitors are using AI, marketing automation, and predictive analytics while your team is still building reports manually. The technology gap becomes a competitive disadvantage." },
      { v: "Reverted", k: "Change resistance: previous transformation attempts failed because they focused on technology without addressing process or people. Teams revert to old ways." },
    ],
    statement: "Transformation is not a technology problem. It is a strategic change problem requiring simultaneous evolution of technology, process, and organizational capability.",
  },
  pillars: [
    { n: "01", t: "Technology Architecture", d: "We design future-state marketing infrastructure that eliminates silos, enables automation, and provides unified customer intelligence. Platform selection prioritizes integration, scalability, and user adoption over feature lists." },
    { n: "02", t: "Process Redesign", d: "Technology enables better processes, but only if processes are redesigned for the new capabilities. We eliminate manual work, automate workflows, and build repeatable systems that scale with minimal human intervention." },
    { n: "03", t: "Change Management", d: "Transformation fails when teams resist adoption. We build change management programs that get teams excited about new capabilities, train them effectively, and provide ongoing support through transition periods." },
    { n: "04", t: "From Legacy to Transformed", d: "Integrated platform with automated data flows; campaign launches in hours with workflow automation; real-time dashboards with AI-generated insights; a single customer intelligence layer across all systems." },
  ],
  quote: {
    q: "We use TMG as our sole vendor whenever it comes to marketing and branding materials for our various companies. During the many years we have been doing business with them, we have never been disappointed in their work.",
    who: "Shawn, President",
    org: "Medical Management Firm",
  },
  close: { line1: "Technology, process, and teams —", line2: "transformed together.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={0} />;
}
