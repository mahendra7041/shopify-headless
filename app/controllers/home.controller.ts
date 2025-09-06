import type { Request, Response } from "express";

export async function Home(req: Request, res: Response) {
  res.inertia.render("home", {});
}
