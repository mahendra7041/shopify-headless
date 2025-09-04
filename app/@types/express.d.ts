import { Inertia, Flash } from "express-inertia";

declare global {
  namespace Express {
    export interface Response {
      inertia: Inertia;
    }

    export interface Request {
      flash: Flash;
    }
  }
}
