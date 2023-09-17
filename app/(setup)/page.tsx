import { redirect } from "next/navigation";
import { prismaDB } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await prismaDB.misscordServer.findFirst({
    where: { members: { some: { profileId: profile.id } } },
  });
  console.log(server);
  if (server) {
    redirect(`/servers/${server.id}`);
  } else {
    redirect("/create-server");
  }
};
export default SetupPage;
