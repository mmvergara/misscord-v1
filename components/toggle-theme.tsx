"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const handleToggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <Button onClick={handleToggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ToggleTheme;
