import { currentProfile } from "@/lib/current-profile";
import { prismaDB } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { ChannelType } from "@prisma/client";

type props = {
  serverId: string;
};
const ServerSidebar = async ({ serverId }: props) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();

  const server = await prismaDB.misscordServer.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: { createdAt: "asc" },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.TEXT
  );

  const voiceChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );

  const videoChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );

  const members = server?.members.filter(
    (member) => member.profileId !== profile.id
  );
  

  return <></>;
};

export default ServerSidebar;
