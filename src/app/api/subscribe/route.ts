import { NextResponse } from "next/server";
import { z } from "zod/v4";

const WaitlistInput = z.object({
  email: z.string().email().max(254),
  source: z.enum(["hero", "product-card", "footer", "waitlist"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body && typeof body === "object" && "company" in body && body.company) {
      return NextResponse.json({ ok: true });
    }

    const parsed = WaitlistInput.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { email, source } = parsed.data;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase env vars");
      return NextResponse.json(
        { error: "Service unavailable" },
        { status: 503 }
      );
    }

    const emailHash = await hashEmail(email);

    const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "resolution=ignore-duplicates",
      },
      body: JSON.stringify({
        email,
        email_hash: emailHash,
        source,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Supabase insert failed:", text);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

async function hashEmail(email: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(email.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
