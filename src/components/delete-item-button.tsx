"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form } from "@inertiajs/react";
import type { CartItem } from "../../app/types/shopify";

export function DeleteItemButton({ item }: { item: CartItem }) {
  const message = "";

  return (
    <Form action="/cart/remove" method="post">
      <button
        type="submit"
        aria-label="Remove cart item"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
      >
        <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
      <input type="hidden" name="variantId" defaultValue={item.id} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </Form>
  );
}
