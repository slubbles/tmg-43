/* /platforms/api-development */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "API Development | TMG",
  description:
    "Build production-grade APIs that enable seamless data exchange between marketing platforms and power real-time automation workflows.",
};

const data: CapabilityPageData = {
  eyebrow: "API Development",
  title: (
    <>
      Connect anything to{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>everything</span>
    </>
  ),
  dek: "Build production-grade APIs that enable seamless data exchange between marketing platforms, create custom integrations, and power real-time automation workflows. We design the service contracts, documentation, security model, and operational handoff your team needs to own the system confidently.",
  statement: {
    intro: (
      <>
        Standard integrations cannot handle{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>real</span> workflows.
      </>
    ),
    lead: "Custom business logic, complex data transformations, and enterprise-scale performance need direct API connections",
    rest: " — no third-party middleware in the data path, no vendor lock-in.",
  },
  caps: [
    { n: "01", t: "RESTful API Development", d: "Design and build RESTful APIs that enable CRUD operations, search functionality, and batch processing. Full OpenAPI documentation and SDKs for easy integration." },
    { n: "02", t: "Real-Time Webhooks", d: "Event-driven webhook systems that push data to your applications instantly when triggers occur. No polling, no delays — just real-time data flow." },
    { n: "03", t: "GraphQL APIs", d: "Modern GraphQL APIs that let clients request exactly the data they need. Perfect for complex data relationships and reducing over-fetching." },
    { n: "04", t: "Event Streaming Infrastructure", d: "Apache Kafka-based event streaming for real-time data pipelines that need durable event handling and clear operational visibility." },
    { n: "05", t: "Security & Handoff", d: "Enterprise security policies satisfied by keeping sensitive data inside your infrastructure, with the service contracts, documentation, and operational handoff your team needs to own the system." },
  ],
  close: { line1: "Owned integrations,", line2: "documented handoffs.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={2} />;
}
