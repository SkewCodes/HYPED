import { z } from "zod/v4";

export const WaitlistInput = z.object({
  email: z.string().email().max(254),
  source: z.enum(["hero", "product-card", "footer", "waitlist"]),
});

export type WaitlistInput = z.infer<typeof WaitlistInput>;

export async function subscribeToWaitlist(
  input: WaitlistInput
): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (res.ok) return { ok: true };

  const data = await res.json().catch(() => ({}));
  return { ok: false, error: (data as { error?: string }).error ?? "Request failed" };
}
