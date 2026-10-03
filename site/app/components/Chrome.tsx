/* Site chrome — built from CHROME.tsx (stack header/footer), TMG wordmark + their nav slugs. */
import Link from "next/link";

const NAV: { href: string; label: string }[] = [
  { href: "/blog", label: "Blog" },
  { href: "/insights", label: "Insights" },
  { href: "/industries/education", label: "Education" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/platforms/catalyst", label: "Catalyst" },
  { href: "/platforms/genesis", label: "Genesis" },
  { href: "/platforms/oracle", label: "Oracle" },
];

const FOOTER: {
  title: string;
  links: { href: string; label: string }[];
}[] = [
  {
    title: "Services",
    links: [
      { href: "/services/ai-powered-strategy", label: "AI-Powered Strategy" },
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
      { href: "/services/creative-development", label: "Creative Development" },
      { href: "/services/brand-architecture", label: "Brand Architecture" },
      { href: "/services/performance-media", label: "Performance Media" },
      { href: "/services/marketing-attribution", label: "Marketing Attribution" },
      { href: "/services/digital-transformation", label: "Digital Transformation" },
      { href: "/services/content-strategy", label: "Content Strategy" },
      { href: "/services/customer-analytics", label: "Customer Analytics" },
      { href: "/services/marketing-automation", label: "Marketing Automation" },
      { href: "/services/fractional-cmo-services", label: "Fractional CMO Services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/healthcare-life-sciences", label: "Healthcare & Life Sciences" },
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/technology-saas", label: "Technology & SaaS" },
      { href: "/industries/real-estate", label: "Real Estate" },
      { href: "/industries/energy-utilities", label: "Energy & Utilities" },
      { href: "/industries/retail-ecommerce", label: "Retail & E-Commerce" },
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/industries/professional-services", label: "Professional Services" },
      { href: "/industries/education", label: "Education" },
      { href: "/industries/non-profit", label: "Non-Profit" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { href: "/platforms/artificial-intelligence", label: "AI Infrastructure" },
      { href: "/platforms/machine-learning-models", label: "Machine Learning Models" },
      { href: "/platforms/predictive-analytics", label: "Predictive Analytics" },
      { href: "/platforms/data-science", label: "Data Science" },
      { href: "/platforms/crm-integration", label: "CRM Integration" },
      { href: "/platforms/api-development", label: "API Development" },
      { href: "/platforms/real-time-optimization", label: "Real-Time Optimization" },
      { href: "/platforms/ab-testing-platform", label: "A/B Testing Platform" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/insights", label: "Industry Insights" },
      { href: "/growth-framework", label: "Growth Framework" },
      { href: "/blog", label: "Marketing Blog" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  return (
    <header
      data-chrome="stack"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 28,
        padding: "26px var(--pad, 96px)",
        color: dark ? "#f4f1ea" : "var(--fg)",
      }}
    >
      <Link href="/" className="wordmark" style={{ color: "inherit" }}>
        <img
          src="/photos/logo-0.svg"
          alt="TMG mark"
          width={30}
          height={30}
          style={dark ? { filter: "invert(1)", display: "block" } : { display: "block" }}
        />
        <span>TMG</span>
      </Link>
      <nav
        aria-label="Primary"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 26,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            style={{
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.82,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {n.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn--accent"
          style={{
            padding: "10px 22px",
            fontSize: 14,
            color: "#241d12",
          }}
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      data-chrome="stack"
      className="band--dark"
      style={{
        padding: "88px var(--pad, 96px) 48px",
        borderTop: "1px solid var(--line-dark)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(240px, 1.2fr) repeat(4, 1fr)",
          gap: 40,
          maxWidth: 1440,
        }}
      >
        <div>
          <Link href="/" className="wordmark">
            <img
              src="/photos/logo-0.svg"
              alt="TMG mark"
              width={30}
              height={30}
              style={{ filter: "invert(1)", display: "block" }}
            />
            <span>TMG</span>
          </Link>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(244,241,234,0.62)",
              margin: "18px 0 0",
              maxWidth: "30ch",
            }}
          >
            Advertising strategy, media, creative, and measurement built for
            measurable growth.
          </p>
          <p style={{ fontSize: 14, margin: "18px 0 0", color: "rgba(244,241,234,0.85)" }}>
            <a href="tel:3487753434" style={{ textDecoration: "none", color: "inherit" }}>
              348-7753434
            </a>
            <span style={{ opacity: 0.4, margin: "0 8px" }}>·</span>
            <a href="tel:8886021919" style={{ textDecoration: "none", color: "inherit" }}>
              888-6021919
            </a>
          </p>
        </div>
        {FOOTER.map((col) => (
          <div key={col.title}>
            <div className="kicker" style={{ marginBottom: 16 }}>
              {col.title}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 14,
                      color: "rgba(244,241,234,0.72)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 72,
          paddingTop: 24,
          borderTop: "1px solid var(--line-dark)",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 13,
          color: "rgba(244,241,234,0.5)",
        }}
      >
        <span>© 2026 Thela Media Group</span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 15,
            color: "rgba(244,241,234,0.62)",
          }}
        >
          Advertising systems connected by intelligence infrastructure
        </span>
      </div>
    </footer>
  );
}
