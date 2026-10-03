/* INNER_FOLD.tsx - copy to app/components/InnerFold.tsx.
   First band of a core inner route. Not the homepage headline.
   Inner fold: stack. */

export default function InnerFold({ title }: { title: string }) {
  return (
    <section
      className="inner-fold"
      data-inner-fold
      style={{
        minHeight: "70vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "var(--pad, 96px)",
          background: "var(--bg, #f7f4ef)",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontFamily: "var(--font-display)",
            lineHeight: 1.05,
            color: "var(--fg, #1a1714)",
            maxWidth: "16ch",
            margin: 0,
          }}
        >
          {title}
        </h1>
        <a
          href="/contact"
          style={{
            marginTop: 28,
            color: "#ffffff",
            background: "#1a1714",
            border: "none",
            padding: 14,
            width: "fit-content",
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
