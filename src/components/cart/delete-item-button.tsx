"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import type { CartItem } from "#types/shopify";
import { useForm } from "@inertiajs/react";

export function DeleteItemButton({
  item,
  optimisticUpdate,
}: {
  item: CartItem;
  optimisticUpdate: any;
}) {
  const merchandiseId = item.merchandise.id;

  const { post } = useForm({
    cartLineId: item.id,
  });

  const removeItemAction = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      post("/cart/remove", {
        onSuccess: () => {
          resolve();
        },
        onError: (error: unknown) => {
          reject(error);
        },
        only: ["cart"],
      });
    });
  };

  const message = "";

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, "delete");
        removeItemAction();
      }}
    >
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
