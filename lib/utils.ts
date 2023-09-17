import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateServerName = (value: string) => {
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
