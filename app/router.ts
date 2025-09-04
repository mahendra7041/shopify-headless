import { Router } from "express";
import * as homeController from "./controllers/home.controller";

const app = Router();

app.get("/", homeController.index);

export default app;
