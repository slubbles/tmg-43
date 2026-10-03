/* /platforms/ab-testing-platform */
import { CapabilityPage, type CapabilityPageData } from "../../components/CapabilityPage";

export const metadata = {
  title: "A/B Testing Platform | TMG",
  description:
    "Deploy an enterprise experimentation platform that brings scientific rigor to marketing decisions.",
};

const data: CapabilityPageData = {
  eyebrow: "A/B Testing Platform",
  title: (
    <>
      Decisions based on evidence, not{" "}
      <span className="display-em" style={{ fontStyle: "italic" }}>opinions</span>
    </>
  ),
  dek: "Deploy an enterprise experimentation platform that brings scientific rigor to marketing decisions. Test hypotheses with proper statistical methodology, reach conclusions faster, and build a culture of data-driven optimization.",
  statement: {
    intro: (
      <>
        Most marketing tests are{" "}
        <span className="display-em" style={{ fontStyle: "italic" }}>wrong</span>.
      </>
    ),
    lead: "Tests run without required sample sizes produce inconclusive results; winners declared prematurely create false positives",
    rest: " — and multiple comparisons inflate error rates until findings are unreliable.",
  },
  caps: [
    { n: "01", t: "Classical A/B Testing", d: "Frequentist hypothesis testing with proper sample size calculations, significance thresholds, and multiple comparison corrections. Gold standard methodology that eliminates false positives.", tags: ["Automatic sample size calculation", "Sequential testing with alpha spending", "Bonferroni correction", "Confidence intervals for effect size", "Power analysis", "Guardrail metrics"] },
    { n: "02", t: "Bayesian Optimization", d: "Probability-based approaches that adapt as evidence accumulates — useful when decisions cannot wait for fixed-horizon tests." },
    { n: "03", t: "Multivariate Testing", d: "From simple split tests to complex multivariate experiments, with statistical precision on every combination." },
    { n: "04", t: "Scientific Methodology", d: "Hypothesis formation with predicted effect direction and magnitude; primary success metrics plus guardrail metrics to monitor negative side effects." },
  ],
  close: { line1: "Rigor in,", line2: "reliable answers out.", cta: "Schedule Consultation" },
};

export default function Page() {
  return <CapabilityPage data={data} fold={1} />;
}
