import { Router } from "express";
import * as homeController from "./controllers/home.controller";
import * as productController from "./controllers/product.controller";
import * as searchController from "./controllers/search.controller";
import shareLayoutData from "./middlewares/share-layout-data.middleware";

const app = Router();
app.use(shareLayoutData);
app.get("/", homeController.index);
app.get("/product/:handle", productController.index);
app.get("/search", searchController.search);
app.get("/search/:collection", searchController.collection);

export default app;
