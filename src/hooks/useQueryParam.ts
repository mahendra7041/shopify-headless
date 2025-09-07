import { useMemo } from "react";
import { usePage } from "@inertiajs/react";

export function useQueryParams(): URLSearchParams {
  const { url } = usePage();

  return useMemo(() => {
    if (!url) return new URLSearchParams();

    const parts = url.split("?");
    const queryString = parts[1] ?? "";

    return new URLSearchParams(queryString);
  }, [url]);
}

export function useQueryParam(key: string): string | null {
  const params = useQueryParams();
  return params.get(key);
}
