"use client";

import Image from "next/image";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
interface props {
  serverId: string;
  serverName: string;
  serverIcon: string;
}
const NavigationItem = (props: props) => {
  const router = useRouter();
  const params = useParams();
  const { serverId, serverName, serverIcon } = props;

  const handleServerClick = () => {
    router.push(`/servers/${serverId}`);
  };
  return (
    <ActionTooltip side="right" align="center" label={serverName}>
      <button
        onClick={handleServerClick}
        className="group relative flex items-center mb-3"
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== serverId && "group-hover:h-[20px]",
            params?.serverId === serverId ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === serverId &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image
            fill
            src={"https://source.unsplash.com/random/150x150"}
            alt="Channel"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
