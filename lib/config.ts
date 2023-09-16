if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
if (!process.env.CLERK_SECRET_KEY)
  throw new Error("Missing CLERK_SECRET_KEY to run the server");
if (!process.env.UPLOADTHING_SECRET)
  throw new Error("Missing UPLOADTHING_SECRET");
if (!process.env.UPLOADTHING_APP_ID)
  throw new Error("Missing UPLOADTHING_APP_ID");

export const UPLOADTHING_SECRET = process.env.UPLOADTHING_SECRET;
export const UPLOADTHING_APP_ID = process.env.UPLOADTHING_APP_ID;
export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
