"use client";
import { FormEvent, useState } from "react";
import { validateServerName } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
const Page = () => {
  const router = useRouter();
  const [serverName, setServerName] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateRes = validateServerName(serverName);
    if (validateRes) {
      alert(validateRes);
      return;
    }

    const res = await axios.post("/api/misscord-servers", { serverName });
    router.push("/");
  };

  const handleJoinServer = () => {};
  return (
    <main className="flex flex-col justify-center items-center h-full">
      <form
        className="flex flex-col justify-center items-center bg-[#0d1117] p-8 rounded-sm gap-4 max-w-[500px]"
        onSubmit={handleFormSubmit}
      >
        <h1 className="font-bold dark:text-white text-2xl">Create Server</h1>
        <p className="text-center opacity-50">
          Create a new misscord server, you can invite your friends and add
          server image later.
        </p>
        <Input
          className="max-w-sm border-0 bg-[#1c212a]"
          placeholder="Server Name"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
        />
        <Button type="submit">Create Server</Button>

        <Button
          type="button"
          variant="link"
          className="text-accent text-white opacity-50"
          onClick={handleJoinServer}
        >
          I {"wan't"} to join a server
        </Button>
      </form>
    </main>
  );
};

export default Page;
