import type { Request, Response } from "express";
import {
  getCollectionProducts,
  getCollections,
  getProducts,
} from "../utils/shopify";

export function search(req: Request, res: Response) {
  const products = getProducts({}).catch(() => []);
  const collections = getCollections().catch(() => []);
  res.inertia.render("search", {
    products: () => res.inertia.always(() => products),
    collections: () => res.inertia.always(() => collections),
  });
}
export async function collection(req: Request, res: Response) {
  const products = getCollectionProducts({
    collection: req.params.collection,
  }).catch(() => []);
  const collections = getCollections().catch(() => []);
  res.inertia.render("search", {
    products: () => res.inertia.always(() => products),
    collections: () => res.inertia.always(() => collections),
  });
}
