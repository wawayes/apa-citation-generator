import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "zh"] as const;
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export function getLocaleFromPath(path: string): string {
  const locale = path.split("/")[1];
  return locales.includes(locale as any) ? locale : defaultLocale;
}
