import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export function absUrl(path: string) {
  const isProd = !import.meta.env.DEV;
  return `${isProd ? import.meta.env.VITE_PUBLIC_APP_URL_PRO : import.meta.env.VITE_PUBLIC_APP_URL_DEV}${path}`;
}