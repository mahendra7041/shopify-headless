"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { CartItem } from "../../app/types/shopify";
import { Form } from "@inertiajs/react";

function SubmitButton({ type }: { type: "plus" | "minus" }) {
  return (
    <button
      type="submit"
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "ml-auto": type === "minus",
        }
      )}
    >
      {type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
}) {
  const message = "";

  const payload = {
    id: item.id,
    merchandiseId: item.merchandise.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };

  return (
    <Form action={"/cart/update"} method="post">
      <SubmitButton type={type} />
      <input type="hidden" name="id" defaultValue={payload.id} />
      <input
        type="hidden"
        name="merchandiseId"
        defaultValue={payload.merchandiseId}
      />
      <input type="hidden" name="quantity" defaultValue={payload.quantity} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </Form>
  );
}
