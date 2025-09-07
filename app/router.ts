import { Router } from "express";
import * as homeController from "./controllers/home.controller";
import * as productController from "./controllers/product.controller";
import * as searchController from "./controllers/search.controller";
import * as cartController from "./controllers/cart.controller";
import shareLayoutData from "./middlewares/share-layout-data.middleware";
import createCartMiddleware from "./middlewares/create-cart";

const app = Router();
app.use(shareLayoutData);
app.get("/", homeController.index);
app.get("/product/:handle", productController.index);
app.get("/search", searchController.search);
app.get("/search/:collection", searchController.collection);

app.use("/cart", createCartMiddleware);
app.post("/cart/add", cartController.add);
app.post("/cart/remove", cartController.remove);
app.post("/cart/update", cartController.update);

export default app;
