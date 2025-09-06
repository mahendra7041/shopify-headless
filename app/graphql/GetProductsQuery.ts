import ProductFragment from "./ProductFragment";

const GetProductsQuery = `#graphql
  query GetProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${ProductFragment}
`;

export default GetProductsQuery;
