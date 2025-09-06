import { Router } from "express";
import * as homeController from "./controllers/home.controller";
import shareLayoutData from "./middlewares/share-layout-data.middleware";

const app = Router();
app.use(shareLayoutData);
app.get("/", homeController.index);

export default app;
