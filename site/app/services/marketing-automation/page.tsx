/* /services/marketing-automation */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Marketing Automation Services | TMG Catalyst Lead Nurturing | TMG",
  description:
    "We build intelligent automation systems that respond to behavior, predict intent, and deliver personalized experiences that feel human, not automated.",
};

const data: ServicePageData = {
  eyebrow: "Automation Services",
  title: (
    <>
      Marketing automation that{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>thinks</span>, not just sends
    </>
  ),
  dek: "Generic email blasts and rigid workflows do not convert modern buyers. We build intelligent automation systems that respond to behavior, predict intent, and deliver personalized experiences that feel human, not automated.",
  problem: {
    h: "Traditional Automation Is Breaking Your Funnel",
    rows: [
      { v: "Spray & pray", k: "Everyone gets the same emails regardless of behavior, interests, or readiness to buy. Irrelevant messaging creates unsubscribes and kills engagement rather than building relationships." },
      { v: "Misrouted", k: "Sales teams waste time on unqualified leads while hot prospects sit in nurture purgatory. Manual scoring is subjective and inconsistent, creating friction between marketing and sales." },
      { v: "Linear", k: "Real buyer journeys are non-linear but your automation follows rigid paths. Prospects exit workflows when they do not fit predefined sequences, falling through cracks." },
      { v: "Overhead", k: "Your team spends hours building campaigns, managing lists, updating scores, and coordinating across channels. Automation should create leverage, not administrative burden." },
    ],
    statement: "Automation should create leverage, not administrative burden.",
  },
  pillars: [
    { n: "01", t: "Behavioral Trigger Intelligence", d: "Stop sending emails on arbitrary schedules. TMG Catalyst monitors prospect behavior across your website, content, emails, and ads. When behavioral signals indicate readiness, the system triggers personalized outreach automatically." },
    { n: "02", t: "Predictive Lead Scoring", d: "Forget manual point systems. Machine learning analyzes thousands of signals to predict conversion probability for every lead. Sales receives only prospects with high likelihood to close, and timing is optimized for maximum conversion." },
    { n: "03", t: "Dynamic Journey Orchestration", d: "Prospects do not follow linear paths. Our automation adapts in real time based on behavior, adjusting messaging, timing, and channel mix to match each unique journey. Personalization at scale without manual segmentation." },
    { n: "04", t: "Lifecycle Automation We Build", d: "From simple drip campaigns to complex multi-channel orchestration: lead nurturing automation, lead scoring and routing, customer lifecycle automation." },
  ],
  caseStudy: {
    client: "Medical Trials Company",
    sector: "Healthcare / Clinical Trials",
    challenge: "A clinical trials company needed to acquire patients for their studies efficiently and at scale, with most sites struggling to meet enrollment targets.",
    approach: "TMG developed a comprehensive marketing campaign paired with a scheduling process specifically designed for patient acquisition, combining targeted digital outreach with streamlined conversion workflows.",
    results: "The campaign became the #1 producing site in the country for the first clinical trial, with multi-study success and a long-term partnership.",
    metrics: [{ v: "#1", k: "National Ranking" }],
  },
  close: { line1: "Friction removed,", line2: "momentum added.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={0} />;
}
