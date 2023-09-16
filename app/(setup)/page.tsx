import { redirect } from "next/navigation";
import { prismaDB } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await prismaDB.misscordServer.findFirst({
    where: { members: { some: { id: profile.id } } },
  });
  if (server) {
    redirect(`/servers/${server.id}`);
  }
  return <div>Create a Server</div>;
};

export default SetupPage;
