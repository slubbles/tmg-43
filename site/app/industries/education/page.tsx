/* /industries/education */
import { IndustryPage, type IndustryPageData } from "../../components/IndustryPage";

export const metadata = {
  title: "Education Marketing | Student Recruitment & Enrollment Growth | TMG",
  description:
    "Attract qualified students, increase enrollment, improve yield rates, and build institutional reputation with data-driven precision.",
};

const data: IndustryPageData = {
  eyebrow: "Education Sector",
  title: (
    <>
      Education marketing that fills{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>classrooms</span> and drives enrollment
    </>
  ),
  dek: "Attract qualified students, increase enrollment, improve yield rates, and build institutional reputation with marketing strategies designed for higher education institutions, K-12 schools, online programs, and education technology companies. Navigate demographic shifts and increasing competition with data-driven precision.",
  landscape: {
    h: "Education Marketing Faces Unprecedented Challenges",
    intro: "Declining enrollment, demographic shifts, and intense competition force educational institutions to fundamentally rethink student recruitment and retention strategies.",
    rows: [
      { v: "Cliff", k: "Enrollment cliff & demographic decline: the number of high school graduates is declining in many regions. Competition for a shrinking pool of traditional students intensifies while institutions struggle to attract non-traditional learners." },
      { v: "Rising", k: "Rising student acquisition costs: cost per application and cost per enrollment have increased dramatically as digital ad costs rise and organic reach declines." },
      { v: "Shifts", k: "Program and learner shifts: online, hybrid, and continuing education compete for working professionals and adult learners with different decision logic than 17-year-olds and their parents." },
    ],
    statement: "Institutions that adapt their recruitment systems will thrive while those clinging to traditional methods face declining enrollment.",
  },
  solutions: [
    { n: "01", t: "Student Recruitment & Inquiry Generation", d: "Drive qualified inquiries from prospective students through targeted digital campaigns, content marketing, and strategic partnerships. Reach traditional students, adult learners, graduate students, and international prospects with precision.", tags: ["Recruit student inquiries"] },
    { n: "02", t: "Yield Rate Optimization", d: "Convert admitted students to enrolled students through personalized nurture campaigns, financial aid communication, campus visit promotion, and strategic engagement.", tags: ["Nurture yield support"] },
    { n: "03", t: "Online Program Marketing", d: "Position and promote online, hybrid, and continuing education programs to working professionals and adult learners. Overcome skepticism, demonstrate ROI, and drive enrollments for revenue-generating programs.", tags: ["Online program marketing"] },
    { n: "04", t: "Institutional Brand & Reputation", d: "Build awareness, improve perception, and strengthen institutional reputation among students, parents, employers, and donors. Differentiate your institution in crowded markets.", tags: ["Institutional brand"] },
  ],
  close: { line1: "Enrollment built on", line2: "data, not brochures.", cta: "Schedule Education Consultation" },
};

export default function Page() {
  return <IndustryPage data={data} fold={2} />;
}
