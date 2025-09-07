"use client";

import { create } from "zustand";
import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { useQueryParams } from "./useQueryParam";

type ProductState = {
  [key: string]: string | undefined;
  image?: string;
};

type ProductStore = {
  state: ProductState;
  setStateFromParams: (params: URLSearchParams) => void;
  updateOption: (name: string, value: string) => void;
  updateImage: (index: string) => void;
  reset: () => void;
};

// Zustand store
export const useProductStore = create<ProductStore>((set) => ({
  state: {},
  setStateFromParams: (params) => {
    const newState: ProductState = {};
    for (const [key, value] of params.entries()) {
      newState[key] = value;
    }
    set({ state: newState });
  },
  updateOption: (name, value) =>
    set((prev) => ({
      state: {
        ...prev.state,
        [name]: value,
      },
    })),
  updateImage: (index) =>
    set((prev) => ({
      state: {
        ...prev.state,
        image: index,
      },
    })),
  reset: () => set({ state: {} }),
}));

// Initialize Zustand state from Inertia URL
export function useInitProductState() {
  const { url } = usePage();
  const setStateFromParams = useProductStore((s) => s.setStateFromParams);
  const reset = useProductStore((s) => s.reset);

  useEffect(() => {
    const searchIndex = url.indexOf("?");
    if (searchIndex !== -1) {
      const queryString = url.substring(searchIndex);
      const params = new URLSearchParams(queryString);
      setStateFromParams(params);
    }

    return () => reset();
  }, [url, setStateFromParams]);
}

// Sync Zustand state to URL with Inertia router
export function useUpdateURL() {
  const params = useQueryParams();
  return (state: ProductState) => {
    Object.entries(state).forEach(([key, value]) => {
      params.set(key, value as string);
    });

    router.replace({
      url: `${window.location.pathname}?${params.toString()}`,
      preserveScroll: true,
      preserveState: false,
    });
  };
}
