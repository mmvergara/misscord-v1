import { auth } from "@clerk/nextjs";
import { prismaDB } from "@/lib/db";

export const currentProfile = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const profile = await prismaDB.profile.findUnique({ where: { userId } });
  return profile;
};
