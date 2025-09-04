import "dotenv/config";
import express from "express";
import session from "express-session";
import inertia from "express-inertia";
import inertiaConfig from "./configs/inertia.config.js";
import sessionConfig from "./configs/session.config.js";
import router from "./app/router.js";

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("build/client", { index: false }));
  }

  app.use(session(sessionConfig));
  app.use(await inertia(inertiaConfig));

  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

bootstrap().catch(console.error);
