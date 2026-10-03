/* CHROME.tsx - copy the header and footer. Not the hero sentence.
   Chrome: stack. */

export function SiteHeader() {
  return (
    <header
      data-chrome="stack"
      style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "var(--pad, 96px)",
          fontFamily: "var(--font-display)",
      }}
    >
      <a
        href="/"
        style={{
          color: "var(--fg, #1a1714)",
          fontFamily: "var(--font-display)",
          textDecoration: "none",
        }}
      >
        {"TMG"}
      </a>
      <nav>
        <a href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Blog"}</a>
        <a href="/insights" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Insights"}</a>
        <a href="/industries/education" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Education"}</a>
        <a href="/industries/manufacturing" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Manufacturing"}</a>
        <a href="/platforms/catalyst" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Catalyst"}</a>
        <a href="/platforms/genesis" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Genesis"}</a>
        <a href="/platforms/oracle" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Oracle"}</a>
        <a href="/contact" style={{ color: "var(--accent)", textDecoration: "none" }}>{"Contact"}</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      data-chrome="stack"
      style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "var(--pad, 96px)",
          fontFamily: "var(--font-display)",
          borderTop: "1px solid var(--accent)",
      }}
    >
        <span>{"TMG"}</span>
        <span>{"348-7753434"}</span>
        <span>{"888-6021919"}</span>
    </footer>
  );
}
