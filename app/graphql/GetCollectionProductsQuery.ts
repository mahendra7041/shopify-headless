import ProductFragment from "#graphql/ProductFragment";

export const GetCollectionProductsQuery = `#graphql
  query GetCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${ProductFragment}
`;

export default GetCollectionProductsQuery;
