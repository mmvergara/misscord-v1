"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const handleToggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <div>
      <button className="group flex items-center" onClick={handleToggleTheme}>
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
          {theme === "dark" ? <Sun /> : <Moon />}
        </div>
      </button>
    </div>
  );
};

export default ToggleTheme;
