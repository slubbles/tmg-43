/* /industries/real-estate */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Real Estate Marketing | Lead Generation for Agents & Developers | TMG",
  description:
    "Drive high-quality buyer and seller leads, increase listing appointments, and accelerate property sales with advertising strategy and marketing intelligence.",
};

const data: IndustryPageData = {
  eyebrow: "Real Estate Expertise",
  title: (
    <>
      Real estate marketing that fills your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>pipeline</span>
    </>
  ),
  dek: "Drive high-quality buyer and seller leads, increase listing appointments, and accelerate property sales with advertising strategy and marketing intelligence designed for real estate agents, teams, brokerages, and developers. Stand out in a crowded market and build a predictable lead generation engine.",
  landscape: {
    h: "Real Estate Marketing Is More Competitive Than Ever",
    intro: "Online lead generation costs are skyrocketing while lead quality plummets. Traditional methods no longer work in a digital-first world where buyers and sellers expect instant, personalized responses.",
    rows: [
      { v: "$120+", k: "Skyrocketing lead costs: portals charge premium rates for shared leads of questionable quality. Cost per lead has doubled while conversion rates have dropped." },
      { v: "8%", k: "Low lead quality: most purchased leads are tire-kickers, not serious buyers or sellers. Agents waste hours chasing unqualified prospects who never convert to clients." },
      { v: "Plateau", k: "Inability to scale: referrals and sphere-of-influence marketing only goes so far. Without predictable lead generation, revenue fluctuates wildly and growth stalls." },
    ],
    statement: "Build a predictable lead engine instead of renting leads from portals.",
  },
  solutions: [
    { n: "01", t: "Buyer & Seller Lead Generation", d: "Predictable pipelines built on owned demand: local search, content, and paid media tuned to your market and inventory — not shared portal leads." },
    { n: "02", t: "Listing & Development Campaigns", d: "Launch campaigns for listings and developments with cinema-quality creative, geo-targeted distribution, and follow-up built in." },
    { n: "03", t: "Agent & Team Branding", d: "Personal brand architecture for agents and teams that compounds equity instead of resetting with every market cycle." },
    { n: "04", t: "Lead Quality Systems", d: "Qualification, routing, and nurture so agents spend time on serious buyers and sellers — with attribution that shows which spend produced clients." },
  ],
  close: { line1: "Predictable pipelines,", line2: "not portal roulette.", cta: "Schedule Real Estate Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={0} />;
}
