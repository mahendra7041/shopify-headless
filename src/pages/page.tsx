import type { ReactElement } from "react";
import type { Page } from "../../app/types/shopify";
import Prose from "../components/prose";
import Layout from "../layout/main-layout";

function page({ page: pageData }: { page: Page }) {
  return (
    <div className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="mb-8 text-5xl font-bold">{pageData.title}</h1>
        <Prose className="mb-8" html={pageData.body} />
        <p className="text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          ).format(new Date(pageData.updatedAt))}.`}
        </p>
      </div>
    </div>
  );
}

page.layout = (page: ReactElement) => <Layout>{page}</Layout>;

export default page;
