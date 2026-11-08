import { NextResponse } from "next/server";

const isNonEmpty = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0;

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

async function sendQuoteEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ECHO_CONTACT_EMAIL;
  const from = process.env.ECHO_FROM_EMAIL;

  const missing = [
    !apiKey && "RESEND_API_KEY",
    !to && "ECHO_CONTACT_EMAIL",
    !from && "ECHO_FROM_EMAIL",
  ].filter(Boolean);

  if (missing.length) {
    console.error("[quote-email] Missing Vercel environment variables:", missing);
    throw new Error("Email is not configured correctly. Please contact the site owner.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    // Keep Resend's real error in Vercel logs instead of hiding it behind a generic message.
    console.error("[quote-email] Resend rejected the email:", {
      status: response.status,
      name: result?.name,
      message: result?.message,
    });
    throw new Error(
      `Email provider rejected the request (HTTP ${response.status}). Check Vercel runtime logs for [quote-email].`
    );
  }

  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !isNonEmpty(body.name) ||
      !isNonEmpty(body.email) ||
      !isNonEmpty(body.date) ||
      !isNonEmpty(body.location) ||
      !isNonEmpty(body.type) ||
      !isNonEmpty(body.details)
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const email = String(body.email).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const html = [
      "<h2>New Echo Productions quote request</h2>",
      `<p><b>Name:</b> ${escapeHtml(body.name)}</p>`,
      `<p><b>Email:</b> ${escapeHtml(email)}</p>`,
      `<p><b>Event date:</b> ${escapeHtml(body.date)}</p>`,
      `<p><b>Location:</b> ${escapeHtml(body.location)}</p>`,
      `<p><b>Production type:</b> ${escapeHtml(body.type)}</p>`,
      `<p><b>Services/details:</b><br/>${escapeHtml(body.details).replace(/\r?\n/g, "<br/>")}</p>`,
    ].join("");

    await sendQuoteEmail(
      `New Echo Productions quote request — ${String(body.type).trim()}`,
      html
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[quote-email] Quote request failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your quote request. Please try again.",
      },
      { status: 500 }
    );
  }
}
