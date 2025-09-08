import type { Request, Response } from "express";
import {
  getCollectionProducts,
  getCollections,
  getProducts,
} from "#utils/shopify";
import { defaultSort, sorting } from "#utils/constants";

export function search(req: Request, res: Response) {
  const { sort, q: searchValue } = req.query;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = getProducts({
    sortKey,
    reverse,
    query: searchValue as string,
  }).catch(() => []);

  const collections = getCollections().catch(() => []);

  res.inertia.render("search", {
    products: () => res.inertia.always(() => products),
    collections: () => res.inertia.always(() => collections),
  });
}

export async function collection(req: Request, res: Response) {
  const { sort } = req.query;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = getCollectionProducts({
    collection: req.params.collection,
    sortKey,
    reverse,
  }).catch(() => []);

  const collections = getCollections().catch(() => []);

  res.inertia.render("search", {
    products: () => res.inertia.always(() => products),
    collections: () => res.inertia.always(() => collections),
  });
}
