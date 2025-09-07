import { usePage } from "@inertiajs/react";
import { useMemo } from "react";

export function usePathname(): string {
  const { url } = usePage();

  return useMemo(() => {
    if (!url) return "/"; // SSR safety
    return url.split("?")[0] || "/";
  }, [url]);
}
