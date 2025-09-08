import type { Request, Response } from "express";
import { addToCart, removeFromCart, updateCart } from "#utils/shopify";

export async function add(req: Request, res: Response) {
  const cartId = req.cookies["cartId"];
  const variantId = req.body.variantId;
  const cartLines = [{ merchandiseId: variantId, quantity: 1 }];
  await addToCart(cartId, cartLines);
  res.inertia.redirect(req.get("Referer") || "/");
}

export async function remove(req: Request, res: Response) {
  const cartId = req.cookies["cartId"];
  const variantId = req.body.variantId;
  await removeFromCart(cartId, [variantId]);
  res.inertia.redirect(req.get("Referer") || "/");
}

export async function update(req: Request, res: Response) {
  const cartId = req.cookies["cartId"];
  const variantId = req.body.merchandiseId;
  const id = req.body.id;
  const quantity = +req.body.quantity;
  const cartLines = [{ id, merchandiseId: variantId, quantity }];
  await updateCart(cartId, cartLines);
  res.inertia.redirect(req.get("Referer") || "/");
}
