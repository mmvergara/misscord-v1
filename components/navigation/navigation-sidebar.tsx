import { currentProfile } from "@/lib/current-profile";
import { prismaDB } from "@/lib/db";
import { redirect } from "next/navigation";

import NavigationAction from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigation-item";
import ToggleTheme from "../toggle-theme";

const NavigationSidebar = async () => {
  const profile = await currentProfile();
  if (!profile) return redirect("/");
  const servers = await prismaDB.misscordServer.findMany({
    where: { members: { some: { profileId: profile.id } } },
  });

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-1">
      <ScrollArea className="flex-1 w-full flex ">
        <NavigationAction />
        <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 w-12 mx-auto rounded-lg mb-2" />
        {servers.map((server) => {
          return (
            <NavigationItem
              key={server.id}
              serverId={server.id}
              serverName={server.name}
              serverIcon={server.iconUrl}
            />
          );
        })}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center justify-center">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default NavigationSidebar;
