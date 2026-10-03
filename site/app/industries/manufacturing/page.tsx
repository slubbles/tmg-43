/* /industries/manufacturing */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Manufacturing Marketing | B2B Lead Generation & Demand Gen | TMG",
  description:
    "Generate qualified leads, accelerate sales cycles, and expand market share with marketing strategies built for industrial manufacturers.",
};

const data: IndustryPageData = {
  eyebrow: "Manufacturing Excellence",
  title: (
    <>
      Manufacturing marketing that fills your{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>sales pipeline</span>
    </>
  ),
  dek: "Generate qualified leads, accelerate sales cycles, and expand market share with marketing strategies built for industrial manufacturers, component suppliers, contract manufacturers, and B2B manufacturing companies. Navigate complex buying committees and long sales cycles with data-driven precision.",
  landscape: {
    h: "Manufacturing Marketing Faces Unique B2B Challenges",
    intro: "Long sales cycles, complex buying committees, and technical products make manufacturing marketing fundamentally different from B2C or simple B2B.",
    rows: [
      { v: "6–18 mo", k: "Long, complex sales cycles: manufacturing sales take months with multiple stakeholders. Marketing must nurture prospects across lengthy evaluation periods while demonstrating value to engineering, procurement, and operations." },
      { v: "Technical", k: "Technical product complexity: products require deep technical knowledge and sophisticated explanation. Generic marketing teams lack manufacturing expertise to communicate capabilities, certifications, and specifications." },
      { v: "Trade shows", k: "Reliance on trade shows & referrals: most manufacturers depend on events, referrals, and inside sales for leads while buyers conduct extensive online research before ever contacting suppliers." },
      { v: "Committee", k: "Difficulty reaching decision makers: purchasing involves stakeholders across engineering, quality, procurement, and operations. Marketing must engage entire buying committees." },
    ],
    statement: "Manufacturing marketing requires technical expertise, patience for long sales cycles, and strategies that reach entire buying committees.",
  },
  solutions: [
    { n: "01", t: "Technical Lead Generation", d: "Generate qualified leads from engineering, procurement, and operations decision-makers actively researching suppliers. Target by industry, company size, job function, and technology needs. Our approach respects the technical nature of manufacturing purchases.", tags: ["Qualified lead growth"] },
    { n: "02", t: "Account-Based Marketing for Key Accounts", d: "Deploy sophisticated ABM campaigns targeting your top prospects and strategic accounts. Engage entire buying committees with personalized content, multi-channel touchpoints, and insights that demonstrate manufacturing expertise.", tags: ["ABM account engagement"] },
    { n: "03", t: "Technical Content & Thought Leadership", d: "Develop authoritative content including white papers, technical guides, case studies, and specifications that educate buyers and demonstrate expertise. SEO-optimized content attracts engineers and procurement professionals searching for solutions.", tags: ["SEO organic visibility"] },
    { n: "04", t: "Trade Show Amplification & Follow-Up", d: "Maximize trade show ROI through pre-show promotion, booth traffic generation, and systematic post-show follow-up. Nurture leads collected at events through automated workflows that move prospects toward RFQ and qualification.", tags: ["Nurture show follow-up"] },
  ],
  close: { line1: "Built for long cycles", line2: "and buying committees.", cta: "Schedule Manufacturing Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={0} />;
}
