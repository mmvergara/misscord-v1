if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");

if (!process.env.CLERK_SECRET_KEY) throw new Error("Missing CLERK_SECRET_KEY");

export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
  