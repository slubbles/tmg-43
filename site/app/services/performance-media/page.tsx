/* /services/performance-media */
import { ServicePage, type ServicePageData } from "../../components/ServicePage";

export const metadata = {
  title: "Performance Media Management | TMG Velocity Paid Advertising | TMG",
  description:
    "You will invest strategically with TMG Velocity, which predicts winners, eliminates waste, and scales what works. Every campaign is optimized continuously.",
};

const data: ServicePageData = {
  eyebrow: "Media Services",
  title: (
    <>
      Performance media that actually{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>performs</span>
    </>
  ),
  dek: "Your competitors are making campaign decisions on guesswork. You will invest strategically with TMG Velocity, which predicts winners, eliminates waste, and scales what works. Every campaign is optimized continuously.",
  problem: {
    h: "Guesswork Is Expensive",
    rows: [
      { v: "Guesswork", k: "Campaign decisions made on intuition instead of predicted performance, with waste discovered after the spend." },
      { v: "Static", k: "Set-and-forget campaigns that never reallocate budget toward what is actually working this week." },
      { v: "Delayed", k: "Optimization that waits for weekly reports while auction dynamics, competitors, and inventory move daily." },
    ],
    statement: "Every campaign is optimized continuously — bids, budgets, creative rotation, and audience signals reviewed against approved plans.",
  },
  pillars: [
    { n: "01", t: "Deployment on Approved Plans", d: "Campaigns launch from approved plans with audience notes, creative variants, and channel direction — no rogue spend." },
    { n: "02", t: "Continuous Bid & Budget Movement", d: "Spend protected, reduced, or moved based on performance, audience response, and direction from the advertising team.", tags: ["<15min cycle time", "24/7 active"] },
    { n: "03", t: "Creative Rotation", d: "Approved variants tracked for traction, with rotation decisions and performance feedback returning to TMG Genesis for the next testing plan." },
    { n: "04", t: "Performance Feedback Loop", d: "Clear reporting back to the account team: what moved, what worked, what to test next." },
  ],
  caseStudy: {
    client: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge: "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon social media marketing altogether.",
    approach: "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, at a fraction of the prior agency’s cost.",
    results: "Over 450 qualified leads within 6 weeks, over $1MM in initial raise, and over 16 months: more than 110 new investing partners, $15MM+ in new raise, 86% cost reduction, 33x ROAS.",
    metrics: [
      { v: "33x", k: "Case Study ROAS" },
      { v: "86%", k: "Cost Reduction" },
      { v: "450+", k: "Qualified Leads" },
      { v: "110+", k: "New Partners" },
    ],
  },
  close: { line1: "Predict winners.", line2: "eliminate waste.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <ServicePage data={data} fold={1} />;
}
