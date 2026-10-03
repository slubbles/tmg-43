/* /industries/non-profit */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Non-Profit Marketing | Fundraising & Donor Acquisition | TMG",
  description:
    "Increase donations, acquire new donors, improve retention rates, and expand your mission reach with marketing strategies for non-profits.",
};

const data: IndustryPageData = {
  eyebrow: "Non-Profit Sector",
  title: (
    <>
      Non-profit marketing that amplifies your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>mission</span> and impact
    </>
  ),
  dek: "Increase donations, acquire new donors, improve retention rates, and expand your mission reach with marketing strategies designed for non-profit organizations, foundations, advocacy groups, and social enterprises. Balance stewardship with growth and maximize every dollar invested in fundraising.",
  landscape: {
    h: "Non-Profit Marketing Challenges Threaten Mission Impact",
    intro: "Donor acquisition costs are rising while retention rates decline. Competition for philanthropic dollars intensifies as thousands of organizations vie for limited donor attention.",
    rows: [
      { v: "45%", k: "First-year churn: donors who give once but never return." },
      { v: "$250", k: "Donor CAC: average cost to acquire a new donor." },
      { v: "73%", k: "Digital gap: non-profits lacking modern digital fundraising." },
    ],
    statement: "Donors expect transparency, impact measurement, and personalized engagement. Stewardship and growth must balance.",
  },
  solutions: [
    { n: "01", t: "Donor Acquisition Campaigns", d: "Reach new donors with message discipline and mission clarity, so acquisition spend compounds the donor file instead of renting attention." },
    { n: "02", t: "Donor Retention & Stewardship", d: "Improve retention with lifecycle communication that reports impact back to donors — the strongest lever on first-year churn." },
    { n: "03", t: "Fundraising Campaign Infrastructure", d: "Campaign pages, giving flows, and attribution so development teams can see which channels and messages raise the dollars." },
    { n: "04", t: "Mission Brand Platforms", d: "Digital platforms that carry the mission with sophistication — built to be maintained independently by the foundation team." },
  ],
  caseStudy: {
    client: "The Previvor Foundation",
    sector: "Non-Profit / Women's Health",
    challenge: "A digital women's health platform needed to transform their online presence to better serve young women affected by breast cancer. Their existing platform lacked the sophistication and functionality needed to effectively reach and educate their audience, and the team had no way to independently manage or update the site.",
    approach: "TMG went beyond simple website development, translating the foundation's unique design vision into reality while adding sophisticated functionality that streamlined operations. Comprehensive training ensured the team could independently maintain and update everything long-term.",
    results: "Increased fundraising success, enhanced professional presence, and expanded reach to support more young women in their breast cancer prevention journey.",
    quote: "TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer. Their work helped increase fundraising, strengthen our professional presence, and expand our reach to support more women who need these resources.",
    who: "Allyn, Founder",
    org: "The Previvor Foundation",
  },
  close: { line1: "Every dollar", line2: "accounted for.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={0} />;
}
