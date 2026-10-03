import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  context?: string;
};

function webhookUrlFor(context?: string) {
  switch (context) {
    case "schedule":
      return process.env.WEBHOOK_URL_SCHEDULE;
    case "newsletter":
      return process.env.WEBHOOK_URL_NEWSLETTER;
    default:
      return process.env.WEBHOOK_URL_CONTACT;
  }
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !message) {
    return NextResponse.json(
      { ok: false, error: "Name and message are required." },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const webhook = webhookUrlFor(body.context);

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: body.context || "contact",
          name,
          email,
          company: body.company ?? "",
          message,
          source: "tmg-43",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: "Delivery failed. Call 348-7753434 or 888-6021919 instead.",
          },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Delivery failed. Call 348-7753434 or 888-6021919 instead.",
        },
        { status: 502 }
      );
    }
  }

  // No webhook configured: accept and confirm without inventing delivery.
  return NextResponse.json({ ok: true });
}
