import type { Request, Response } from "express";
import { getPage } from "../utils/shopify";

export async function index(req: Request, res: Response) {
  const page = getPage(req.params.page).catch(() => null);
  return res.inertia.render("page", {
    page: res.inertia.always(() => page),
  });
}
