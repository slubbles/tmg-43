/* /industries/retail-ecommerce */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Retail & E-Commerce Marketing | Performance Growth Marketing | TMG",
  description:
    "Drive profitable customer acquisition, maximize lifetime value, and scale e-commerce revenue with TMG Velocity performance marketing.",
};

const data: IndustryPageData = {
  eyebrow: "Retail & E-Commerce",
  title: (
    <>
      E-commerce marketing that scales{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>revenue</span>
    </>
  ),
  dek: "Drive profitable customer acquisition, maximize lifetime value, and scale e-commerce revenue with TMG Velocity performance marketing. From DTC startups to enterprise retailers, we optimize every touchpoint from first click through repeat purchase.",
  landscape: {
    h: "E-Commerce Marketing Is More Competitive Than Ever",
    intro: "Modern e-commerce demands sophisticated performance marketing that balances acquisition with retention, brand building with direct response, and short-term revenue with long-term customer value.",
    rows: [
      { v: "Ad costs ↑", k: "Rising ad costs on Facebook, Google, and TikTok squeezing margins and making customer acquisition unsustainable?" },
      { v: "iOS 14+", k: "Attribution broken after iOS 14, making it impossible to understand what actually drives conversions and revenue?" },
      { v: "LTV ↓", k: "Customer lifetime value declining as retention rates drop and repeat purchase frequency stagnates?" },
    ],
    statement: "You need a data-driven growth engine optimized for your specific product, margin, and customer dynamics.",
  },
  solutions: [
    { n: "01", t: "Performance Media & Paid Acquisition", d: "Scale profitable customer acquisition across Meta, Google, TikTok, Pinterest, and emerging channels. TMG Velocity bid management, creative testing, and audience optimization drive maximum ROAS while maintaining healthy unit economics." },
    { n: "02", t: "Conversion Rate Optimization", d: "Systematic testing and optimization of product pages, checkout flows, and site experiences. Remove friction, reduce abandonment, and increase average order value through data-driven experimentation and personalization." },
    { n: "03", t: "Retention & Lifecycle Marketing", d: "Turn one-time buyers into loyal customers through sophisticated email and SMS programs. Post-purchase nurture, win-back campaigns, VIP segmentation, and loyalty programs that maximize customer lifetime value." },
    { n: "04", t: "Marketing Attribution & Analytics", d: "Understand true marketing performance with sophisticated attribution modeling that works in a post-iOS 14 world. Marketing Mix Modeling, incrementality testing, and predictive analytics for smarter budget allocation." },
  ],
  quote: {
    q: "We use TMG as our sole vendor whenever it comes to marketing and branding materials for our various companies. During the many years we have been doing business with them, we have never been disappointed in their work.",
    who: "Shawn, President",
    org: "Medical Management Firm",
  },
  close: { line1: "Profitable acquisition,", line2: "compounding LTV.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={2} />;
}
