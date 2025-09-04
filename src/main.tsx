import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "./index.css";

type PageComponent = React.ComponentType<any>;

interface PageModule {
  default: PageComponent;
}

createInertiaApp({
  id: "root",
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx", {
      eager: true,
    }) as Record<string, PageModule>;
    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el!).render(<App {...props} />);
  },
});
