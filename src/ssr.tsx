import React from "react";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import "./index.css";

export default function render(page: string) {
  return createInertiaApp({
    id: "root",
    page,
    render: ReactDOMServer.renderToString as any,
    resolve: (name: string) => {
      const pages = import.meta.glob("./pages/**/*.tsx", {
        eager: true,
      }) as Record<string, { default: React.ComponentType<any> }>;
      return pages[`./pages/${name}.tsx`];
    },
    setup: ({ App, props }) => <App {...props} />,
  });
}
