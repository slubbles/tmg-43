/* HERO.tsx - copy to app/components/Hero.tsx (or src/components/Hero.tsx).
   Render as the homepage first band. Do not shrink into a card.
   Fold plate: stack. */

export default function Hero() {
  return (
    <section
      className="hero"
      data-hero
      style={{
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/photos/hero-0.jpg"
        alt="TMG"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "var(--pad, 96px)",
          background: "linear-gradient(to top, rgba(20,16,12,0.62), rgba(20,16,12,0.12))",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontFamily: "var(--font-display)",
            lineHeight: 1.05,
            color: "#ffffff",
            maxWidth: "16ch",
            margin: 0,
          }}
        >
          {"TMG"}
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#ffffff",
            maxWidth: "42ch",
            margin: "16px 0 0",
          }}
        >
          {"Advertising systems connected by intelligence infrastructure"}
        </p>
        <a
          href="/contact"
          style={{
            marginTop: 28,
            color: "#f4f1ea",
            background: "var(--accent, #e8a23c)",
            border: "none",
            padding: 14,
            width: "fit-content",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {"Call 348-7753434"}
        </a>
      </div>
    </section>
  );
}
