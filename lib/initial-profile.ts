import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { prismaDB } from "@/lib/db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  const profile = await prismaDB.profile.findUnique({
    where: { userId: user.id },
  });

  if (profile) return profile;

  const newProfile = await prismaDB.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      profileImageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
