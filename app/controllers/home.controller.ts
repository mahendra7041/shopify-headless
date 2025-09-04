import type { Request, Response } from "express";
export async function index(_req: Request, res: Response) {
  res.inertia.render("home");
}
