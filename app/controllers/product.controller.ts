import type { Request, Response } from "express";
import { getProduct, getProductRecommendations } from "#utils/shopify";

export function index(req: Request, res: Response) {
  const product = getProduct(req.params.handle).catch(() => ({}));
  const relatedProducts = getProductRecommendations(req.params.handle).catch(
    () => []
  );

  res.inertia.render("product", {
    product: () => res.inertia.always(() => product),
    relatedProducts: () => res.inertia.always(() => relatedProducts),
  });
}
