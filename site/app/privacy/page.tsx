/* /privacy — their policy, condensed honestly to the sections they publish. */
import { SiteHeader, SiteFooter } from "../components/Chrome";

export const metadata = {
  title: "Privacy Policy | TMG",
  description: "How Thela Media Group collects, uses, and protects your information.",
};

const SECTIONS: { h: string; body: React.ReactNode }[] = [
  {
    h: "1. Information We Collect",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          <strong>Information you provide.</strong> Name, email address, phone
          number, and company information when you contact us or sign up for
          services; account credentials and profile information when you create
          an account; payment information when you purchase services (processed
          securely through third-party payment processors); communications you
          send to us; and marketing preferences.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          <strong>Information collected automatically.</strong> Device
          information (IP address, browser type, operating system), usage data
          (pages visited, time spent, clicks, navigation paths), cookies and
          similar tracking technologies, log files, analytics data, and
          performance and diagnostic information.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          <strong>Information from third parties.</strong> Marketing platforms
          and advertising partners, data providers and analytics services,
          social media platforms (if you connect your accounts), business
          partners, and referral sources.
        </p>
      </>
    ),
  },
  {
    h: "2. How We Use Your Information",
    body: (
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
        {[
          "Service delivery: to provide, maintain, and improve our marketing services and technology platforms",
          "Account management: to create and manage your account, process transactions, and provide customer support",
          "Communication: to send you service updates, marketing communications, and respond to your inquiries",
          "Personalization: to customize your experience and deliver relevant content and recommendations",
          "Analytics: to analyze usage patterns, improve our services, and develop new features",
          "Security: to detect, prevent, and address fraud, security issues, and technical problems",
          "Legal compliance: to comply with legal obligations and enforce our terms of service",
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
    h: "3. How We Share Your Information",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          We may share information with vendors who perform services on our
          behalf (hosting, analytics, payment processing, customer support);
          with business partners who help us deliver services, subject to
          confidentiality obligations; when required by law, court order, or
          government request; in connection with a merger, acquisition, or sale
          of assets; when you explicitly authorize us; and as de-identified or
          aggregated information that cannot reasonably identify you.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          We do not sell your personal information to third parties for their
          marketing purposes.
        </p>
      </>
    ),
  },
  {
    h: "4. Data Security",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        We implement appropriate technical and organizational measures to
        protect your information: encryption of data in transit and at rest
        using industry-standard protocols, secure data centers with physical
        and network security controls, access controls limiting employee access
        to personal information, regular security assessments and vulnerability
        testing, incident response procedures, and employee training on data
        protection. No method of transmission or storage is 100% secure, but we
        are committed to protecting your data using industry best practices.
      </p>
    ),
  },
  {
    h: "5. Your Privacy Rights",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          Depending on your location, you may have the right to access,
          correction, deletion, portability, restriction, and objection, and you
          may withdraw consent where processing is based on consent.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          California residents have additional rights under the CCPA, including
          the right to know what personal information we collect, use, disclose,
          and sell, the right to delete personal information we have collected,
          the right to opt out of the sale of personal information (we do not
          sell personal information), and the right to non-discrimination for
          exercising these rights. European residents have rights under the
          GDPR and may lodge a complaint with their local data protection
          authority.
        </p>
      </>
    ),
  },
  {
    h: "6. Cookies and Tracking Technologies",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        We use essential cookies (required for basic website functionality and
        security), analytics cookies (to understand how visitors use the
        website), marketing cookies (to deliver relevant advertising and
        measure campaign effectiveness), and preference cookies (to remember
        your settings). You can control cookies through your browser settings;
        disabling cookies may limit certain features of the website.
      </p>
    ),
  },
  {
    h: "7. Data Retention, Transfers, and Children’s Privacy",
    body: (
      <>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          We retain your information for as long as necessary to fulfill the
          purposes described in this policy, unless a longer retention period is
          required by law.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
          Your information may be transferred to and processed in countries
          other than your country of residence, with appropriate safeguards in
          place, including Standard Contractual Clauses approved by the European
          Commission.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          Our services are not directed to individuals under 18 years of age. We
          do not knowingly collect personal information from children. If you
          believe we have collected information from a child, please contact us
          and we will take steps to delete such information.
        </p>
      </>
    ),
  },
  {
    h: "8. Changes to This Policy",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        We may update this Privacy Policy periodically to reflect changes in our
        practices, technology, legal requirements, or other factors. We will
        notify you of material changes by posting the updated policy on our
        website and updating the last-updated date. Your continued use of our
        services after changes become effective constitutes acceptance of the
        revised policy.
      </p>
    ),
  },
  {
    h: "9. Contact Us",
    body: (
      <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
        Thela Media Group, LLC DBA TMG — Austin, TX. Privacy questions:
        privacy@tmg.agency. Data protection officer: dpo@tmg.agency.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader dark={false} />
      {/* Legal fold — no photo, corner-weighted plate */}
      <section style={{ padding: "200px var(--pad, 96px) 80px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440 }}>
          <div className="kicker kicker--accent">Legal Document</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 80, lineHeight: 1.0, letterSpacing: "-0.015em", margin: "20px 0 0" }}>
            Privacy{" "}
            <span className="display-em" style={{ fontStyle: "italic" }}>policy</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", margin: "22px 0 0" }}>Last updated: November 3, 2024</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, margin: "22px 0 0", maxWidth: "70ch" }}>
            Thela Media Group, LLC DBA TMG ("TMG," "we," "our," or "us") is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website, use our services, or interact with our
            platform.
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
            This Privacy Policy is effective as of November 3, 2024, and applies
            to all information collected by Thela Media Group, LLC DBA TMG
            through our website, platform, and services. By using our services,
            you acknowledge that you have read and understood this Privacy
            Policy.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
