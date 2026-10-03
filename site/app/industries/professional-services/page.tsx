/* /industries/professional-services */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Professional Services Marketing | Law, Consulting, Accounting | TMG",
  description:
    "Attract high-value clients, establish thought leadership, and grow your practice with marketing strategies for professional services.",
};

const data: IndustryPageData = {
  eyebrow: "Professional Services",
  title: (
    <>
      Professional services marketing built on{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>expertise</span> and trust
    </>
  ),
  dek: "Attract high-value clients, establish thought leadership, and grow your practice with marketing strategies designed for law firms, consulting practices, accounting firms, and professional services organizations. Balance professional ethics and standards with aggressive growth and competitive positioning.",
  landscape: {
    h: "Professional Services Marketing Is More Competitive Than Ever",
    intro: "Sophisticated buyers demand proof of expertise and results. Success requires thought leadership, relationship building, and strategic positioning that demonstrates unique value.",
    rows: [
      { v: "Stagnant", k: "Traditional referral networks stagnating while competitors aggressively market their expertise and capabilities?" },
      { v: "Uncomfortable", k: "Partners uncomfortable with marketing and self-promotion despite pressure to generate new business?" },
      { v: "Crowded", k: "Inability to differentiate in crowded markets where every firm claims the same expertise and client focus?" },
    ],
    statement: "Ethical guidelines restrict promotional tactics. Sophisticated buyers demand proof. Your marketing must demonstrate unique value, not claim it.",
  },
  solutions: [
    { n: "01", t: "Thought Leadership & Authority Building", d: "Establish partners as recognized experts through strategic content, speaking opportunities, media placement, and industry recognition. Build the reputation that attracts ideal clients and premium engagements." },
    { n: "02", t: "High-Value Client Acquisition", d: "Generate qualified leads from target companies and decision-makers seeking your specific expertise. Account-based marketing, strategic partnerships, and referral development drive consistent new business." },
    { n: "03", t: "Digital Presence & Content Strategy", d: "Build authoritative online presence through SEO-optimized content, case studies, and expertise demonstrations. Attract prospects researching solutions and position your firm as the obvious choice." },
    { n: "04", t: "Client Retention & Expansion", d: "Deepen client relationships through strategic communication, cross-sell additional services, and generate referrals from satisfied clients. Maximize client lifetime value and practice stability." },
  ],
  quote: {
    q: "We use TMG as our sole vendor whenever it comes to marketing and branding materials for our various companies. During the many years we have been doing business with them, we have never been disappointed in their work.",
    who: "Shawn, President",
    org: "Medical Management Firm",
  },
  close: { line1: "Expertise, positioned.", line2: "Ethics, respected.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={1} />;
}
