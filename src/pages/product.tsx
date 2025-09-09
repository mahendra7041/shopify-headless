import { type ReactElement } from "react";
import type { Image, Product } from "#types/shopify";
import { ProductDescription } from "../components/product-description";
import { Gallery } from "../components/gallery";
import Layout from "../layout/main-layout";
import { RelatedProducts } from "../components/related-products";
import { useInitProductState } from "../hooks/useProductStore";

function product({ product }: { product: Product }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useInitProductState();
  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      /> */}
      <div className="mx-auto max-w-(--breakpoint-2xl) px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.slice(0, 5).map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts />
      </div>
    </>
  );
}

product.layout = (page: ReactElement) => <Layout>{page}</Layout>;

export default product;
