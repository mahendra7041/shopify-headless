import type { Request, Response, NextFunction } from "express";
import { createCart } from "../utils/shopify";

export default async function createCartMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.cookies["cartId"]) {
    const cart = await createCart();
    res.cookie("cartId", cart.id);
    // for next handler
    req.cookies["cartId"] = cart.id;
  }

  next();
}
