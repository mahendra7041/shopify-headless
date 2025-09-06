import type { Request, Response, NextFunction } from "express";
import { getCart, getMenu } from "../utils/shopify";

export default async function shareLayoutData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headerMenu = getMenu("main-menu").catch(() => []);
  const footerMenu = getMenu("main-menu").catch(() => []);
  const cart = getCart(req.cookies["cartId"]).catch(() => undefined);

  res.inertia.share({
    headerMenu: () => res.inertia.always(() => headerMenu),
    footerMenu: () => res.inertia.always(() => footerMenu),
    cart: () => res.inertia.defer(() => cart),
  });
  next();
}
