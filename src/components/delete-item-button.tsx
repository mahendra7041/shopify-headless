"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/react";
import type { CartItem } from "#types/shopify";
import { FormEvent } from "react";

export function DeleteItemButton({ item }: { item: CartItem }) {
  const message = "";

  const { post } = useForm({
    variantId: item.id,
  });

  const removeItemAction = (e: FormEvent) => {
    e.preventDefault();
    post("/cart/remove", {
      only: ["cart"],
    });
  };

  return (
    <form onSubmit={removeItemAction}>
      <button
        type="submit"
        aria-label="Remove cart item"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
      >
        <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
