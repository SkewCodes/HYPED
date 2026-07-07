import { describe, it, expect } from "vitest";
import { WaitlistInput } from "./waitlist";

describe("WaitlistInput schema", () => {
  it("accepts valid input", () => {
    const result = WaitlistInput.safeParse({
      email: "test@example.com",
      source: "hero",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = WaitlistInput.safeParse({
      email: "not-an-email",
      source: "hero",
    });
    expect(result.success).toBe(false);
  });

  it("rejects email exceeding 254 chars", () => {
    const longEmail = "a".repeat(250) + "@b.co";
    const result = WaitlistInput.safeParse({
      email: longEmail,
      source: "hero",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid source", () => {
    const result = WaitlistInput.safeParse({
      email: "test@example.com",
      source: "unknown",
    });
    expect(result.success).toBe(false);
  });

  it("accepts all valid sources", () => {
    for (const source of ["hero", "product-card", "footer"] as const) {
      const result = WaitlistInput.safeParse({
        email: "user@example.com",
        source,
      });
      expect(result.success).toBe(true);
    }
  });
});
