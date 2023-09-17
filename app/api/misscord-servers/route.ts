import { currentProfile } from "@/lib/current-profile";
import { prismaDB } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req: Request, res: Response) => {
  console.log("YOOYO");
  try {
    const { serverName } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const newServer = await prismaDB.misscordServer.create({
      data: {
        iconUrl: "https://via.placeholder.com/150",
        name: serverName,
        profileId: profile.id,
        inviteCode: uuidv4(),
        channels: {
          create: [
            {
              name: "general",
              profileId: profile.id,
            },
          ],
        },
        members: {
          create: [
            {
              profileId: profile.id,
              role: MemberRole.ADMIN,
            },
          ],
        },
      },
    });
    return new NextResponse(JSON.stringify(newServer), { status: 200 });
  } catch (error) {
    console.log("[ServerPost]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
