import type { ReactElement } from "react";
import Layout from "../layout/layout";
import Grid from "../components/grid";
import ProductGridItems from "../layout/product-grid-items";
import type { Product } from "../../app/types/shopify";
import SearchLayout from "../layout/search-layout";

function search({ products }: { products: Product[] }) {
  return (
    <>
      {" "}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}

search.layout = (page: ReactElement) => (
  <Layout>
    <SearchLayout>{page}</SearchLayout>
  </Layout>
);

export default search;
