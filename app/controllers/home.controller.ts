import type { Request, Response } from "express";
import { getCollectionProducts } from "#utils/shopify";

export function index(_req: Request, res: Response) {
  const homepageItems = getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  }).catch(() => []);

  const products = getCollectionProducts({
    collection: "hidden-homepage-carousel-1",
  }).catch(() => []);

  res.inertia.render("home", {
    homepageItems: () => res.inertia.always(() => homepageItems),
    products: () => res.inertia.always(() => products),
  });
}
