import type { ReactElement } from "react";
import Grid from "../components/grid";
import ProductGridItems from "../components/product-grid-items";
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

search.layout = (page: ReactElement) => <SearchLayout>{page}</SearchLayout>;

export default search;
