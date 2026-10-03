"use client";

import { useEffect, useState } from "react";

type Props = {
  context?: "contact" | "schedule";
  dark?: boolean;
  fields?: ("name" | "email" | "company")[];
  cta?: string;
  intro?: string;
};

export default function ContactForm({
  context = "contact",
  dark = false,
  fields = ["name", "email", "company"],
  cta = "Send Message",
  intro,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state === "ok" || state === "error") {
      const t = setTimeout(() => setState("idle"), 8000);
      return () => clearTimeout(t);
    }
  }, [state]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, context }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setState("ok");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setError("Network error. Please try again or call 348-7753434.");
      setState("error");
    }
  }

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    opacity: 0.55,
  };

  return (
    <form onSubmit={submit} style={{ width: "100%", maxWidth: 560 }}>
      {intro ? (
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            margin: 0,
            opacity: 0.75,
            marginBottom: 36,
            maxWidth: "48ch",
          }}
        >
          {intro}
        </p>
      ) : null}
      <div style={{ display: "grid", gap: 8 }}>
        <div>
          <label htmlFor={`${context}-name`} style={labelStyle}>
            Name
          </label>
          <input
            id={`${context}-name`}
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        {fields.includes("email") ? (
          <div>
            <label htmlFor={`${context}-email`} style={labelStyle}>
              Email
            </label>
            <input
              id={`${context}-email`}
              className="field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </div>
        ) : null}
        {fields.includes("company") ? (
          <div>
            <label htmlFor={`${context}-company`} style={labelStyle}>
              Company
            </label>
            <input
              id={`${context}-company`}
              className="field"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
            />
          </div>
        ) : null}
        <div>
          <label htmlFor={`${context}-message`} style={labelStyle}>
            Message
          </label>
          <textarea
            id={`${context}-message`}
            className="field"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you trying to grow?"
            required
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 32,
          flexWrap: "wrap",
        }}
      >
        <button
          type="submit"
          className={`btn ${dark ? "btn--accent" : "btn--ink"}`}
          disabled={state === "sending"}
          style={{ opacity: state === "sending" ? 0.6 : 1 }}
        >
          {state === "sending" ? "Sending…" : cta}
        </button>
        {state === "ok" ? (
          <span style={{ fontSize: 15, fontWeight: 600 }}>
            Sent. We follow up within 3–5 days.
          </span>
        ) : null}
        {state === "error" ? (
          <span style={{ fontSize: 15, color: "#d64541", fontWeight: 600 }}>
            {error}
          </span>
        ) : null}
      </div>
    </form>
  );
}
