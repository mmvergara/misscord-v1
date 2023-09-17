"use client";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [serverName, setServerName] = useState("");

  const validateServerName = (value: string) => {
    if (value.length < 3) {
      return "Server name must be at least 3 characters long";
    }
    if (value.length > 20) {
      return "Server name must be less than 20 characters long";
    }
    if (!value.match(/^[a-zA-Z0-9_-]+$/)) {
      return "Server name must only contain letters, numbers, dashes, and underscores";
    }
    return null;
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = validateServerName(serverName);
    if (res) {
      alert(res);
      return;
    }
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
