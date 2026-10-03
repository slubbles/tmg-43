/* /terms — their terms of service, condensed honestly to the sections they publish. */
import { SiteHeader, SiteFooter } from "../components/Chrome";

export const metadata = {
  title: "Terms of Service | TMG",
  description: "The terms that govern access to and use of TMG's websites, platform, and services.",
};

const SECTIONS: { h: string; body: React.ReactNode }[] = [
  {
    h: "1. Acceptance of Terms",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        These Terms govern your access to and use of the websites, platform,
        and services provided by Thela Media Group, LLC DBA TMG ("TMG," "we,"
        "our," or "us"). By accessing or using our services, you agree to be
        bound by these Terms and our Privacy Policy. If you are using our
        services on behalf of an organization, you represent that you have the
        authority to bind that organization to these Terms.
      </p>
    ),
  },
  {
    h: "2. Description of Services",
    body: (
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
        {[
          "Marketing strategy development and execution",
          "AI-powered campaign optimization and automation",
          "Predictive analytics and marketing intelligence",
          "Attribution modeling and performance measurement",
          "Marketing technology platform access and support",
          "Consulting and advisory services",
        ].map((x) => (
          <li key={x} style={{ fontSize: 16, lineHeight: 1.6, display: "flex", gap: 10 }}>
            <span style={{ color: "var(--accent)" }}>→</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    h: "3. Eligibility and Accounts",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        You must be at least 18 years old and able to form a binding contract to
        use our services. You are responsible for the accuracy of account
        information, safeguarding credentials, and activity under your account.
        Accounts may not be shared between organizations without written
        agreement.
      </p>
    ),
  },
  {
    h: "4. Acceptable Use",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          You agree not to misuse the services — including interfering with
          their normal operation, accessing them without authorization,
          circumventing security or usage limits, uploading unlawful or
          infringing content, using services to send unlawful or deceptive
          communications, or violating the rights (including privacy and
          intellectual property rights) of others.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          You are responsible for content you submit and for lawful bases for
          processing data you upload, including customer and prospect data.
        </p>
      </>
    ),
  },
  {
    h: "5. Intellectual Property",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        The services, software, and content — including TMG methodologies and
        platform materials — are protected by intellectual property laws. You
        keep ownership of content you provide ("Your Content") and grant us a
        limited license to host and process it to deliver the services. Deliverables
        created for you are allocated in your service agreement.
      </p>
    ),
  },
  {
    h: "6. Service Terms and Changes",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          Engagements, deliverables, and payment terms are governed by the
          applicable service agreement. We may update, modify, suspend, or
          discontinue any aspect of the services, with or without notice, though
          we will make reasonable efforts to notify you of material changes.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          We may suspend or restrict access if required information, approvals,
          or cooperation are not provided, or if continued access would create
          legal, security, operational, or compliance risk.
        </p>
      </>
    ),
  },
  {
    h: "7. Support and Availability",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        We strive to maintain dependable service availability and performance.
        We do not guarantee uninterrupted or error-free service. Support
        commitments, if any, are defined only in your signed service agreement,
        statement of work, or order form.
      </p>
    ),
  },
  {
    h: "8. Confidentiality",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        Both parties agree to maintain the confidentiality of any confidential
        information disclosed during the course of our relationship, including
        non-public business, technical, and financial information. This
        obligation survives termination of these Terms for a period of three
        years.
      </p>
    ),
  },
  {
    h: "9. Warranties and Disclaimers",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        We warrant that our services will be performed in a professional and
        workmanlike manner consistent with industry standards. Except as
        expressly provided in these Terms or your service agreement, our
        services are provided "as is" and "as available" without warranties of
        any kind, either express or implied. We do not warrant that our services
        will be uninterrupted, error-free, or completely secure.
      </p>
    ),
  },
  {
    h: "10. Limitation of Liability",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        To the maximum extent permitted by law, TMG shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits or revenues, data, use, goodwill, or other
        intangible losses, resulting from your use or inability to use our
        services, unauthorized access to our servers or your personal
        information, interruptions of transmission, or bugs or viruses
        transmitted through our services by any third party. Our aggregate
        liability shall not exceed the liability limit set forth in the
        applicable service agreement, or the maximum limit permitted by law if
        no such agreement applies.
      </p>
    ),
  },
  {
    h: "11. Indemnification",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        You agree to indemnify, defend, and hold harmless TMG and its officers,
        directors, employees, and agents from claims, liabilities, damages,
        losses, and expenses, including reasonable legal expenses, arising out
        of or connected with your use of our services, your violation of these
        Terms, your violation of any third-party rights, or Your Content.
      </p>
    ),
  },
  {
    h: "12. Term, Termination, and Dispute Resolution",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          These Terms remain in effect while you use our services. You may
          terminate your account at any time by written notice. Before filing a
          claim, you agree to contact us to attempt to resolve the dispute
          informally through good-faith negotiation. If informal resolution
          fails, disputes shall be resolved through binding arbitration in
          accordance with the Commercial Arbitration Rules of the American
          Arbitration Association, taking place in Austin, Texas, on an
          individual basis; you waive any right to participate in a class
          action lawsuit or class-wide arbitration.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          Provisions that by their nature should survive termination —
          including confidentiality, intellectual property, and limitation of
          liability — will survive.
        </p>
      </>
    ),
  },
  {
    h: "13. General Provisions",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        These Terms are governed by the laws of the State of Texas. Together
        with your service agreement and our Privacy Policy, they constitute the
        entire agreement regarding our services. We may modify these Terms by
        posting the revised version on our website. If any provision is found
        invalid or unenforceable, it will be limited to the minimum extent
        necessary and the remaining provisions will remain in full force. Our
        failure to assert a right or provision does not constitute a waiver.
        You may not assign or transfer these Terms without our prior written
        consent. Neither party is liable for failure or delay in performance
        due to circumstances beyond its reasonable control.
      </p>
    ),
  },
  {
    h: "14. Contact Information",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        Thela Media Group, LLC DBA TMG — Austin, TX. Questions about these
        Terms: hello@tmg.agency.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main>
      <SiteHeader dark={false} />
      <section style={{ padding: "200px var(--pad, 96px) 80px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Legal Document</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 80, lineHeight: 1.0, letterSpacing: "-0.015em", margin: "20px 0 0" }}>
            Terms of{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>service</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", margin: "22px 0 0" }}>Last updated: November 3, 2024</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, margin: "22px 0 0", maxWidth: "70ch" }}>
            These Terms govern your access to and use of the websites, platform,
            and services provided by Thela Media Group, LLC DBA TMG. By
            accessing or using our services, you agree to be bound by these
            Terms. If you do not agree, you may not use our services.
          </p>
        </div>
      </section>
      <section style={{ padding: "72px var(--pad, 96px) 110px" }}>
        <div style={{ maxWidth: 900 }}>
          {SECTIONS.map((s) => (
            <div key={s.h} style={{ padding: "36px 0", borderBottom: "1px solid var(--line)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: 1.2, margin: 0 }}>
                {s.h}
              </h2>
              <div style={{ marginTop: 16 }}>{s.body}</div>
            </div>
          ))}
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, marginTop: 40 }}>
            These Terms of Service are effective as of November 3, 2024. By
            using our services, you acknowledge that you have read and
            understood these Terms.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
