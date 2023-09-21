import { currentProfile } from "@/lib/current-profile";
import { prismaDB } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type props = {
  children: React.ReactNode;
  params: { serverId: string };
};

const ServerIdLayout = async ({ children, params }: props) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();

  const server = await prismaDB.misscordServer.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: { profileId: profile.id },
      },
    },
  });
  
  // if there is no server or the user is not a member of the server
  if (!server) return redirect("/");

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col inset-y- bg-slate-900">
        server sidebar
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
